const SITE_SLUG = "graverobber";
const contentRoot = document.getElementById("app-content");
const moreSheet = document.getElementById("more-sheet");
const closeMoreButton = document.getElementById("close-more");

const coffeeUrl = "https://www.paypal.com/donate/?business=graverobber.punk%40gmail.com&currency_code=USD";

const socialLinks = [
  ["Facebook", "https://www.facebook.com/graverobberpunk"],
  ["Instagram", "https://www.instagram.com/graverobberpunk"],
  ["TikTok", "https://www.tiktok.com/@graverobberpunk"],
  ["X", "https://x.com/graverobberpunk"],
  ["Threads", "https://www.threads.net/@graverobberpunk"],
  ["YouTube", "https://www.youtube.com/@GraveRobberPunk"],
];

const musicLinks = [
  ["Spotify", "https://open.spotify.com/artist/4D34aUp0OsDs8mAEWPIP7c"],
  ["Apple Music", "https://music.apple.com/us/artist/grave-robber/279558434"],
  ["Bandcamp", "https://graverobberpunk.bandcamp.com/"],
  ["SoundCloud", "https://soundcloud.com/graverobberofficial"],
  ["YouTube", "https://www.youtube.com/@GraveRobberPunk"],
];

const merchLinks = [
  ["Big Cartel Merch", "https://graverobber.bigcartel.com/"],
  ["Anchor Merch", "https://anchormerchandising.com/grave-robber/"],
  ["Buy Grave Robber a Coffee", coffeeUrl],
];

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function routeTo(page) {
  if (!page || page === "more") {
    openMore();
    return;
  }

  closeMore();
  history.replaceState(null, "", `#${page}`);
  renderPage(page);
}

function setActiveNav(page) {
  const primaryPages = new Set(["home", "shows", "graffiti", "gallery"]);
  document.querySelectorAll(".nav-item").forEach(button => {
    const target = button.dataset.page;
    button.classList.toggle("is-active", target === page || (target === "more" && !primaryPages.has(page)));
  });
}

function openMore() {
  moreSheet.classList.add("is-open");
  moreSheet.setAttribute("aria-hidden", "false");
}

function closeMore() {
  moreSheet.classList.remove("is-open");
  moreSheet.setAttribute("aria-hidden", "true");
}

function pageShell(eyebrow, title, body, innerHtml = "") {
  return `
    <section class="app-panel">
      ${eyebrow ? `<p class="eyebrow">${escapeHtml(eyebrow)}</p>` : ""}
      ${title ? `<h1>${escapeHtml(title)}</h1>` : ""}
      ${body ? `<p class="page-description">${escapeHtml(body)}</p>` : ""}
      ${innerHtml}
    </section>
  `;
}

function linkGrid(links) {
  return `<div class="link-grid">${links.map(([label, url]) => `
    <a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)}</a>
  `).join("")}</div>`;
}

function formatDate(dateString) {
  if (!dateString) return "";
  const date = new Date(`${String(dateString).slice(0, 10)}T00:00:00`);
  if (Number.isNaN(date.getTime())) return String(dateString).slice(0, 10);
  return date.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });
}

function isPastShow(show) {
  const endDate = show.end_date || show.show_date;
  return new Date(`${String(endDate).slice(0, 10)}T23:59:59`) < new Date();
}

async function fetchJson(url, options) {
  const response = await fetch(url, options);
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.error || `Request failed: ${response.status}`);
  return data;
}

async function getVisualPage(pageName) {
  const data = await fetchJson(`${window.BAND_API_BASE}/visual-pages/${SITE_SLUG}/${pageName}?_=${Date.now()}`);
  const page = data.page || data || {};
  let projectData = page.project_data;
  if (typeof projectData === "string") projectData = JSON.parse(projectData);
  return projectData || {};
}

function walkBlocks(blocks = [], visitor) {
  blocks.forEach(block => {
    if (!block) return;
    visitor(block);
    Object.values(block.props || {}).forEach(value => {
      if (Array.isArray(value)) walkBlocks(value.filter(item => item && typeof item === "object" && item.type), visitor);
    });
  });
}

function findBlock(projectData, type) {
  let found = null;
  walkBlocks(projectData.content || [], block => {
    if (!found && block.type === type) found = block;
  });
  return found;
}

function findBlocks(projectData, type) {
  const found = [];
  walkBlocks(projectData.content || [], block => {
    if (block.type === type) found.push(block);
  });
  return found;
}

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.charset = "utf-8";
    script.async = true;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

async function hydrateEmbedScripts(container) {
  const scripts = Array.from(container.querySelectorAll("script[src]"));
  scripts.forEach(script => script.remove());
  for (const script of scripts) {
    await loadScript(script.src);
  }
}

async function renderHome() {
  contentRoot.innerHTML = `
    <section class="home-hero">
      <img src="assets/grave-robber-skull.png" alt="Grave Robber skull logo">
      <p class="eyebrow">American Horror Punk</p>
      <p class="home-copy">Horror punk from beyond the grave. Shows, music, merch, booking, and updates.</p>
      <div class="hero-actions">
        <button type="button" data-page="shows">Shows</button>
        <button type="button" data-page="music">Music</button>
        <button type="button" data-page="signup">Join the Army of the Dead</button>
      </div>
    </section>
    <section class="app-panel compact-panel">
      <p class="eyebrow">Follow Grave Robber</p>
      ${linkGrid(socialLinks)}
    </section>
  `;
}

async function renderShows() {
  contentRoot.innerHTML = pageShell("Live", "Shows", "Upcoming Grave Robber shows load from the same backend as the website.", `<p class="loading">Loading shows...</p>`);

  try {
    const data = await fetchJson(`${window.BAND_API_BASE}/shows/${SITE_SLUG}?_=${Date.now()}`);
    const shows = Array.isArray(data.shows) ? data.shows : [];
    const upcoming = shows.filter(show => !isPastShow(show)).sort((a, b) => new Date(a.show_date) - new Date(b.show_date));

    if (!upcoming.length) {
      const pageData = await getVisualPage("shows");
      const embed = findBlocks(pageData, "Embed").find(block => String(block.props?.html || "").includes("bit-widget-initializer"));
      if (embed?.props?.html) {
        contentRoot.innerHTML = pageShell("Live", "Shows", "", `<div id="shows-embed" class="embed-wrap">${embed.props.html}</div>`);
        await hydrateEmbedScripts(document.getElementById("shows-embed"));
        return;
      }
    }

    const list = upcoming.length ? upcoming.map(show => `
      <article class="show-card">
        <strong>${escapeHtml(formatDate(show.show_date))}</strong>
        <span>${escapeHtml(show.venue || "Venue TBA")}</span>
        <small>${escapeHtml([show.city, show.state].filter(Boolean).join(", "))}</small>
        ${show.notes ? `<p>${escapeHtml(show.notes)}</p>` : ""}
        ${show.ticket_url ? `<a href="${escapeHtml(show.ticket_url)}" target="_blank" rel="noopener noreferrer">Tickets</a>` : ""}
      </article>
    `).join("") : `
      <div class="empty-state">
        <h2>Shows Coming Soon</h2>
        <p>Join the Army of the Dead to hear when the next haunt is announced.</p>
        <button type="button" data-page="signup">Get Notified</button>
      </div>
    `;

    contentRoot.innerHTML = pageShell("Live", "Shows", "", `<div class="show-list">${list}</div>`);
  } catch (error) {
    contentRoot.innerHTML = pageShell("Live", "Shows", "", `<p class="status-error">Shows could not load right now.</p>`);
  }
}

async function renderBio() {
  let body = "";
  try {
    const pageData = await getVisualPage("about");
    const textBlock = findBlock(pageData, "TextBlock");
    body = textBlock?.props?.body || "";
  } catch {}

  contentRoot.innerHTML = pageShell(
    "Bio",
    "Grave Robber",
    body || "Band bio coming soon.",
    `<img class="panel-logo" src="assets/grave-robber-logo-stacked.png" alt="Grave Robber logo">`
  );
}

async function renderSignup() {
  contentRoot.innerHTML = pageShell("Join", "Army of the Dead", "Get show updates, music news, and dispatches from the grave.", `
    <form id="signup-form" class="app-form">
      <label>Your name<input type="text" name="name" required></label>
      <label>Email<input type="email" name="email" required></label>
      <label>Phone<input type="tel" name="phone"></label>
      <label>Message<textarea name="message" rows="4"></textarea></label>
      <button type="submit">Army of the Dead</button>
      <p id="signup-status" class="form-status"></p>
    </form>
  `);

  document.getElementById("signup-form").addEventListener("submit", async event => {
    event.preventDefault();
    const form = event.currentTarget;
    const status = document.getElementById("signup-status");
    status.textContent = "Submitting...";

    try {
      await fetchJson(`${window.BAND_API_BASE}/submissions/${SITE_SLUG}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.value,
          email: form.email.value,
          phone: form.phone.value,
          message: form.message.value,
        }),
      });
      status.textContent = "You are in the Army of the Dead.";
      form.reset();
    } catch {
      status.textContent = "Signup failed. Try again.";
    }
  });
}

async function renderGallery() {
  contentRoot.innerHTML = pageShell("Media", "Gallery", "", `<p class="loading">Loading gallery...</p>`);

  try {
    const pageData = await getVisualPage("gallery");
    const galleryBlock = findBlock(pageData, "GalleryGrid");
    const images = (galleryBlock?.props?.images || []).filter(image => image?.imageUrl);

    contentRoot.innerHTML = pageShell("Media", "Gallery", "", images.length ? `
      <div class="gallery-grid">
        ${images.map(image => {
          const isVideo = image.mediaType === "video" || /\.(mp4|webm|mov|m4v|ogv)(\?|#|$)/i.test(image.imageUrl);
          return isVideo
            ? `<video src="${escapeHtml(image.imageUrl)}" controls playsinline preload="metadata"></video>`
            : `<img src="${escapeHtml(image.imageUrl)}" alt="${escapeHtml(image.imageAlt || "Gallery image")}">`;
        }).join("")}
      </div>
    ` : `<p class="empty-state">Gallery media will appear here.</p>`);
  } catch {
    contentRoot.innerHTML = pageShell("Media", "Gallery", "", `<p class="status-error">Gallery could not load right now.</p>`);
  }
}

async function uploadPublicImage(file) {
  const formData = new FormData();
  formData.append("image", file);
  const data = await fetchJson(`${window.BAND_API_BASE}/uploads/${SITE_SLUG}/public`, {
    method: "POST",
    body: formData,
  });
  return data.url;
}

function setupPaintCanvas() {
  const canvas = document.getElementById("paint-canvas");
  const color = document.getElementById("paint-color");
  const size = document.getElementById("paint-size");
  const clearButton = document.getElementById("clear-paint");
  const ctx = canvas.getContext("2d");
  let drawing = false;

  function point(event) {
    const rect = canvas.getBoundingClientRect();
    const touch = event.touches?.[0] || event;
    return {
      x: (touch.clientX - rect.left) * (canvas.width / rect.width),
      y: (touch.clientY - rect.top) * (canvas.height / rect.height),
    };
  }

  function start(event) {
    drawing = true;
    const p = point(event);
    ctx.beginPath();
    ctx.moveTo(p.x, p.y);
    event.preventDefault();
  }

  function move(event) {
    if (!drawing) return;
    const p = point(event);
    ctx.lineTo(p.x, p.y);
    ctx.strokeStyle = color.value;
    ctx.lineWidth = Number(size.value);
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.stroke();
    event.preventDefault();
  }

  function end() {
    drawing = false;
  }

  canvas.addEventListener("mousedown", start);
  canvas.addEventListener("mousemove", move);
  window.addEventListener("mouseup", end);
  canvas.addEventListener("touchstart", start, { passive: false });
  canvas.addEventListener("touchmove", move, { passive: false });
  canvas.addEventListener("touchend", end);
  clearButton.addEventListener("click", () => ctx.clearRect(0, 0, canvas.width, canvas.height));
}

async function loadGraffitiPosts() {
  const postsRoot = document.getElementById("graffiti-posts");
  postsRoot.innerHTML = `<p class="loading">Loading graffiti...</p>`;

  try {
    const data = await fetchJson(`${window.BAND_API_BASE}/messages/${SITE_SLUG}/public?_=${Date.now()}`);
    const messages = Array.isArray(data.messages) ? data.messages : [];
    postsRoot.innerHTML = messages.length ? messages.map(post => `
      <article class="graffiti-post">
        <strong>${escapeHtml(post.fan_name || "Anonymous")}</strong>
        <p>${escapeHtml(post.message || "")}</p>
        ${post.fan_image_url ? `<img src="${escapeHtml(post.fan_image_url)}" alt="Fan submission">` : ""}
        ${post.fan_art_url ? `<img src="${escapeHtml(post.fan_art_url)}" alt="Fan art submission">` : ""}
      </article>
    `).join("") : `<p class="empty-state">Graffiti posts will show here.</p>`;
  } catch {
    postsRoot.innerHTML = `<p class="status-error">Graffiti posts could not load right now.</p>`;
  }
}

async function renderGraffiti() {
  contentRoot.innerHTML = pageShell("Fan Wall", "Graffiti Wall", "Write a message, upload a photo, or paint something for the band. Submissions appear after admin approval.", `
    <form id="graffiti-form" class="app-form">
      <label>Your name<input type="text" name="fan_name"></label>
      <label>Your message<textarea name="message" rows="4" required></textarea></label>
      <label>Photo with the band<input type="file" name="fan_image" accept="image/*"></label>
      <div class="paint-controls">
        <label>Paint color<input id="paint-color" type="color" value="#00ff04"></label>
        <label>Brush size<input id="paint-size" type="range" min="2" max="28" value="8"></label>
      </div>
      <canvas id="paint-canvas" width="720" height="420"></canvas>
      <button id="clear-paint" type="button">Clear Paint</button>
      <button type="submit">Send for Approval</button>
      <p id="graffiti-status" class="form-status"></p>
    </form>
    <section class="graffiti-posts" id="graffiti-posts"></section>
  `);

  setupPaintCanvas();
  loadGraffitiPosts();

  document.getElementById("graffiti-form").addEventListener("submit", async event => {
    event.preventDefault();
    const form = event.currentTarget;
    const status = document.getElementById("graffiti-status");
    status.textContent = "Submitting...";

    try {
      let fanImageUrl = "";
      if (form.fan_image.files?.[0]) {
        fanImageUrl = await uploadPublicImage(form.fan_image.files[0]);
      }

      const canvas = document.getElementById("paint-canvas");
      const artBlob = await new Promise(resolve => canvas.toBlob(resolve, "image/png"));
      let fanArtUrl = "";
      if (artBlob && !canvasIsBlank(canvas)) {
        fanArtUrl = await uploadPublicImage(new File([artBlob], "fan-art.png", { type: "image/png" }));
      }

      await fetchJson(`${window.BAND_API_BASE}/messages/${SITE_SLUG}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fan_name: form.fan_name.value,
          message: form.message.value,
          fan_image_url: fanImageUrl,
          fan_art_url: fanArtUrl,
        }),
      });

      status.textContent = "Submitted. It will appear after admin approval.";
      form.reset();
      document.getElementById("clear-paint").click();
    } catch {
      status.textContent = "Submission failed. Try again.";
    }
  });
}

function canvasIsBlank(canvas) {
  const pixels = canvas.getContext("2d").getImageData(0, 0, canvas.width, canvas.height).data;
  return !pixels.some(value => value !== 0);
}

async function renderMusic() {
  contentRoot.innerHTML = pageShell("Listen", "Music", "Stream Grave Robber wherever you listen.", linkGrid(musicLinks));
}

async function renderMerch() {
  contentRoot.innerHTML = pageShell("Store", "Merch", "Official Grave Robber merch, support links, and tip jar.", linkGrid(merchLinks));
}

async function renderContact() {
  contentRoot.innerHTML = pageShell("Booking / Contact", "Contact Grave Robber", "Use this form for booking, press, merch, and general contact.", `
    <form id="contact-form" class="app-form">
      <label>Your name<input type="text" name="fan_name"></label>
      <label>Your email<input type="email" name="fan_email"></label>
      <label>Message<textarea name="message" rows="5" required></textarea></label>
      <button type="submit">Send Message</button>
      <p id="contact-status" class="form-status"></p>
    </form>
  `);

  document.getElementById("contact-form").addEventListener("submit", async event => {
    event.preventDefault();
    const form = event.currentTarget;
    const status = document.getElementById("contact-status");
    status.textContent = "Sending...";

    try {
      await fetchJson(`${window.BAND_API_BASE}/messages/${SITE_SLUG}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fan_name: form.fan_name.value,
          fan_email: form.fan_email.value,
          message: form.message.value,
        }),
      });
      status.textContent = "Message sent.";
      form.reset();
    } catch {
      status.textContent = "Message failed. Try again.";
    }
  });
}

const renderers = {
  home: renderHome,
  shows: renderShows,
  graffiti: renderGraffiti,
  gallery: renderGallery,
  bio: renderBio,
  signup: renderSignup,
  music: renderMusic,
  merch: renderMerch,
  contact: renderContact,
};

async function renderPage(page) {
  const nextPage = renderers[page] ? page : "home";
  setActiveNav(nextPage);
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  contentRoot.focus({ preventScroll: true });
  await renderers[nextPage]();
}

document.addEventListener("click", event => {
  const pageButton = event.target.closest("[data-page]");
  if (!pageButton) return;
  routeTo(pageButton.dataset.page);
});

moreSheet.addEventListener("click", event => {
  if (event.target === moreSheet) closeMore();
});

closeMoreButton.addEventListener("click", closeMore);

window.addEventListener("hashchange", () => {
  const page = window.location.hash.replace("#", "") || "home";
  renderPage(page);
});

renderPage(window.location.hash.replace("#", "") || "home");
