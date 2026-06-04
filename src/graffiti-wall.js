const SITE_SLUG = "graverobber";
const API_BASE =
  window.BAND_API_BASE ||
  "https://band-admin-backend-production.up.railway.app/api";

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

async function uploadPublicImage(file) {
  if (!file) return "";

  const formData = new FormData();
  formData.append("image", file);

  const response = await fetch(`${API_BASE}/uploads/${SITE_SLUG}/public`, {
    method: "POST",
    body: formData
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok || !data.url) {
    throw new Error(data.error || "Image upload failed.");
  }

  return data.url;
}

function canvasHasPaint(canvas) {
  const blank = document.createElement("canvas");
  blank.width = canvas.width;
  blank.height = canvas.height;
  return canvas.toDataURL() !== blank.toDataURL();
}

function canvasToFile(canvas) {
  return new Promise(resolve => {
    canvas.toBlob(blob => {
      if (!blob) {
        resolve(null);
        return;
      }

      resolve(new File([blob], `graffiti-art-${Date.now()}.png`, { type: "image/png" }));
    }, "image/png");
  });
}

function postHtml(post) {
  const date = post.created_at ? new Date(post.created_at).toLocaleDateString() : "";

  return `
    <article class="gr-graffiti-post">
      <strong>${escapeHtml(post.fan_name || "Anonymous")}</strong>
      ${date ? `<small>${escapeHtml(date)}</small>` : ""}
      ${post.message ? `<p>${escapeHtml(post.message)}</p>` : ""}
      ${post.fan_image_url ? `<img src="${escapeHtml(post.fan_image_url)}" alt="Fan photo">` : ""}
      ${post.fan_art_url ? `<img src="${escapeHtml(post.fan_art_url)}" alt="Fan painted art">` : ""}
    </article>
  `;
}

async function loadApprovedPosts(root) {
  const postsRoot = root.querySelector("[data-graffiti-posts]");
  if (!postsRoot) return;

  try {
    const response = await fetch(`${API_BASE}/messages/${SITE_SLUG}/public?_=${Date.now()}`);
    const data = await response.json();
    const posts = Array.isArray(data.messages) ? data.messages : [];

    postsRoot.innerHTML = posts.length
      ? posts.map(postHtml).join("")
      : "<p>No approved graffiti yet.</p>";
  } catch (error) {
    postsRoot.innerHTML = "<p>Graffiti posts could not load right now.</p>";
  }
}

function bindCanvas(root) {
  const canvas = root.querySelector(".gr-graffiti-canvas");
  if (!canvas || canvas.dataset.boundGraffitiCanvas === "true") return;
  canvas.dataset.boundGraffitiCanvas = "true";

  const context = canvas.getContext("2d");
  context.lineCap = "round";
  context.lineJoin = "round";

  const colorInput = root.querySelector('input[name="paint_color"]');
  const sizeInput = root.querySelector('input[name="paint_size"]');
  let drawing = false;

  function point(event) {
    const rect = canvas.getBoundingClientRect();
    const source = event.touches?.[0] || event;
    return {
      x: ((source.clientX - rect.left) / rect.width) * canvas.width,
      y: ((source.clientY - rect.top) / rect.height) * canvas.height
    };
  }

  function start(event) {
    event.preventDefault();
    drawing = true;
    const current = point(event);
    context.beginPath();
    context.moveTo(current.x, current.y);
  }

  function move(event) {
    if (!drawing) return;
    event.preventDefault();
    const current = point(event);
    context.strokeStyle = colorInput?.value || "#00ff04";
    context.lineWidth = Number(sizeInput?.value || 8);
    context.lineTo(current.x, current.y);
    context.stroke();
  }

  function end() {
    drawing = false;
  }

  canvas.addEventListener("mousedown", start);
  canvas.addEventListener("mousemove", move);
  window.addEventListener("mouseup", end);
  canvas.addEventListener("touchstart", start, { passive: false });
  canvas.addEventListener("touchmove", move, { passive: false });
  window.addEventListener("touchend", end);

  root.querySelector("[data-graffiti-clear]")?.addEventListener("click", () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
  });
}

function bindGraffitiForm(root) {
  const form = root.querySelector(".gr-graffiti-form");
  if (!form || form.dataset.boundGraffitiForm === "true") return;
  form.dataset.boundGraffitiForm = "true";

  form.addEventListener("submit", async event => {
    event.preventDefault();

    const status = form.querySelector(".gr-graffiti-status");
    const canvas = form.querySelector(".gr-graffiti-canvas");
    const photoFile = form.querySelector('input[name="fan_photo"]')?.files?.[0];
    const formData = new FormData(form);
    const message = String(formData.get("message") || "").trim();

    if (!message && !photoFile && !(canvas && canvasHasPaint(canvas))) {
      if (status) status.textContent = "Write, upload, or paint something first.";
      return;
    }

    if (status) status.textContent = "Sending...";

    try {
      const fanImageUrl = await uploadPublicImage(photoFile);
      const artFile = canvas && canvasHasPaint(canvas) ? await canvasToFile(canvas) : null;
      const fanArtUrl = await uploadPublicImage(artFile);

      const response = await fetch(`${API_BASE}/messages/${SITE_SLUG}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fan_name: formData.get("fan_name") || "",
          fan_email: "",
          message,
          fan_image_url: fanImageUrl,
          fan_art_url: fanArtUrl
        })
      });

      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(data.error || "Submission failed.");
      }

      form.reset();
      if (canvas) canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
      if (status) status.textContent = status.dataset.successMessage || "Submitted. It will appear after admin approval.";
    } catch (error) {
      if (status) status.textContent = error.message || "Submission failed.";
    }
  });
}

function initGraffitiWall() {
  document.querySelectorAll(".gr-graffiti-wall").forEach(root => {
    bindCanvas(root);
    bindGraffitiForm(root);
    loadApprovedPosts(root);
  });
}

document.addEventListener("DOMContentLoaded", initGraffitiWall);
window.addEventListener("visualPageRendered", initGraffitiWall);
