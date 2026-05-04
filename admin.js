const API_BASE = window.BAND_API_BASE;
const SITE_SLUG = "graverobber";

let adminToken = localStorage.getItem("adminToken") || "";
let allShows = [];
let allSections = [];

const loginPanel = document.getElementById("login-panel");
const dashboard = document.getElementById("dashboard");

function authHeaders() {
  return { "Content-Type": "application/json", "Authorization": `Bearer ${adminToken}` };
}

function showDashboard() {
  loginPanel.classList.add("hidden");
  dashboard.classList.remove("hidden");
  loadSettings();
  loadMedia();
  loadShows();
  loadSections();
  loadMessages();
  loadSubmissions();
}

function showLogin() {
  loginPanel.classList.remove("hidden");
  dashboard.classList.add("hidden");
}

if (adminToken) showDashboard();

document.getElementById("login-form").addEventListener("submit", async function(e) {
  e.preventDefault();
  const status = document.getElementById("login-status");

  const response = await fetch(`${API_BASE}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: document.getElementById("login-email").value,
      password: document.getElementById("login-password").value
    })
  });

  const data = await response.json();

  if (!response.ok) {
    status.textContent = data.error || "Login failed.";
    return;
  }

  adminToken = data.token;
  localStorage.setItem("adminToken", adminToken);
  showDashboard();
});

document.getElementById("logout-button").addEventListener("click", () => {
  localStorage.removeItem("adminToken");
  adminToken = "";
  showLogin();
});

document.getElementById("password-form").addEventListener("submit", async function(e) {
  e.preventDefault();
  const status = document.getElementById("password-status");

  const response = await fetch(`${API_BASE}/auth/change-password`, {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify({
      currentPassword: document.getElementById("current-password").value,
      newPassword: document.getElementById("new-password").value
    })
  });

  const data = await response.json();

  status.textContent = response.ok ? "Password changed." : (data.error || "Password change failed.");
  if (response.ok) this.reset();
});

async function loadSettings() {
  const response = await fetch(`${API_BASE}/settings/${SITE_SLUG}`);
  const data = await response.json();
  const s = data.settings || {};

  document.getElementById("site-title").value = s.site_title || "";
  document.getElementById("tagline").value = s.tagline || "";
  document.getElementById("homepage-text").value = s.homepage_text || "";
  document.getElementById("primary-color").value = s.primary_color || "#39ff14";
  document.getElementById("background-color").value = s.background_color || "#000000";
  document.getElementById("text-color").value = s.text_color || "#ffffff";
  document.getElementById("font-family").value = s.font_family || "Arial, sans-serif";
  document.getElementById("layout-style").value = s.layout_style || "classic";
  document.getElementById("logo-url").value = s.logo_url || "";
  document.getElementById("hero-image-url").value = s.hero_image_url || "";
  document.getElementById("background-image-url").value = s.background_image_url || "";
}

document.getElementById("settings-form").addEventListener("submit", async function(e) {
  e.preventDefault();
  const status = document.getElementById("settings-status");

  const body = {
    site_title: document.getElementById("site-title").value,
    tagline: document.getElementById("tagline").value,
    homepage_text: document.getElementById("homepage-text").value,
    primary_color: document.getElementById("primary-color").value,
    background_color: document.getElementById("background-color").value,
    text_color: document.getElementById("text-color").value,
    font_family: document.getElementById("font-family").value,
    layout_style: document.getElementById("layout-style").value,
    logo_url: document.getElementById("logo-url").value,
    hero_image_url: document.getElementById("hero-image-url").value,
    background_image_url: document.getElementById("background-image-url").value
  };

  const response = await fetch(`${API_BASE}/settings/${SITE_SLUG}`, {
    method: "PUT",
    headers: authHeaders(),
    body: JSON.stringify(body)
  });

  status.textContent = response.ok ? "Design saved." : "Settings save failed.";
});

document.getElementById("upload-button").addEventListener("click", async () => {
  const fileInput = document.getElementById("image-upload");
  const status = document.getElementById("upload-status");

  if (!fileInput.files[0]) {
    status.textContent = "Choose an image first.";
    return;
  }

  const formData = new FormData();
  formData.append("image", fileInput.files[0]);
  formData.append("label", document.getElementById("media-label").value);
  formData.append("alt_text", document.getElementById("media-alt").value);

  status.textContent = "Uploading...";

  const response = await fetch(`${API_BASE}/media/${SITE_SLUG}`, {
    method: "POST",
    headers: { "Authorization": `Bearer ${adminToken}` },
    body: formData
  });

  const data = await response.json();

  status.textContent = response.ok ? "Uploaded." : (data.error || "Upload failed.");

  if (response.ok) {
    fileInput.value = "";
    document.getElementById("media-label").value = "";
    document.getElementById("media-alt").value = "";
    loadMedia();
  }
});

async function loadMedia() {
  const container = document.getElementById("media-list");
  const picker = document.getElementById("media-picker");

  const response = await fetch(`${API_BASE}/media/${SITE_SLUG}`, { headers: authHeaders() });
  const data = await response.json();
  const media = data.media || [];

  if (!media.length) {
    container.innerHTML = "<p>No uploaded images yet.</p>";
    if (picker) picker.innerHTML = "";
    return;
  }

  container.innerHTML = media.map(item => `
    <div class="item media-card">
      <img src="${item.url}">
      <strong>${item.label || "Image"}</strong>
      <button onclick="deleteMedia('${item.id}')">Delete</button>
    </div>
  `).join("");

  // 👇 THIS BUILDS IMAGE PICKER
  if (picker) {
    picker.innerHTML = media.map(item => `
      <img src="${item.url}" 
           style="width:100px;height:80px;object-fit:cover;border-radius:8px;cursor:pointer;border:2px solid transparent"
           onclick="selectImage('${item.url}', this)">
    `).join("");
  }
}

function selectImage(url, el) {
  document.getElementById("section-image-url").value = url;

  // highlight selected
  document.querySelectorAll("#media-picker img").forEach(img => {
    img.style.border = "2px solid transparent";
  });

  el.style.border = "2px solid #39ff14";
}

document.getElementById("section-link-select").addEventListener("change", function() {
  const value = this.value;

  if (value !== "custom") {
    document.getElementById("section-button-url").value = value;
  } else {
    document.getElementById("section-button-url").value = "";
  }
});

function copyText(text) {
  navigator.clipboard.writeText(text);
}

function useAsLogo(url) {
  document.getElementById("logo-url").value = url;
}

function useAsBackground(url) {
  document.getElementById("background-image-url").value = url;
}

function useInSection(url) {
  document.getElementById("section-image-url").value = url;
  window.scrollTo({ top: document.getElementById("section-form").offsetTop - 20, behavior: "smooth" });
}

async function deleteMedia(mediaId) {
  if (!confirm("Delete this image from Cloudinary and the media library?")) return;

  await fetch(`${API_BASE}/media/${SITE_SLUG}/${mediaId}`, {
    method: "DELETE",
    headers: authHeaders()
  });

  loadMedia();
}

document.getElementById("show-form").addEventListener("submit", async function(e) {
  e.preventDefault();
  const status = document.getElementById("show-status");
  const editingId = document.getElementById("editing-show-id").value;

  const body = {
    show_date: document.getElementById("show-date").value,
    venue: document.getElementById("show-venue").value,
    city: document.getElementById("show-city").value,
    state: document.getElementById("show-state").value,
    ticket_url: document.getElementById("ticket-url").value,
    notes: document.getElementById("show-notes").value
  };

  const url = editingId ? `${API_BASE}/shows/${SITE_SLUG}/${editingId}` : `${API_BASE}/shows/${SITE_SLUG}`;
  const method = editingId ? "PUT" : "POST";

  const response = await fetch(url, {
    method,
    headers: authHeaders(),
    body: JSON.stringify(body)
  });

  status.textContent = response.ok ? "Show saved." : "Show save failed.";
  if (response.ok) {
    this.reset();
    document.getElementById("editing-show-id").value = "";
    loadShows();
  }
});

document.getElementById("cancel-show-edit").addEventListener("click", () => {
  document.getElementById("show-form").reset();
  document.getElementById("editing-show-id").value = "";
});

async function loadShows() {
  const container = document.getElementById("shows-list");
  const response = await fetch(`${API_BASE}/shows/${SITE_SLUG}`);
  const data = await response.json();
  allShows = data.shows || [];

  if (!allShows.length) {
    container.innerHTML = "<p>No shows yet.</p>";
    return;
  }

  container.innerHTML = allShows.map(show => `
    <div class="item">
      <strong>${show.show_date}</strong><br>
      ${show.venue}<br>
      ${show.city || ""} ${show.state || ""}<br>
      <span class="small">${show.notes || ""}</span><br>
      <button class="small-btn" onclick="editShow('${show.id}')">Edit</button>
      <button class="small-btn danger" onclick="deleteShow('${show.id}')">Delete</button>
    </div>
  `).join("");
}

function editShow(showId) {
  const show = allShows.find(s => s.id === showId);
  if (!show) return;

  document.getElementById("editing-show-id").value = show.id;
  document.getElementById("show-date").value = show.show_date.slice(0, 10);
  document.getElementById("show-venue").value = show.venue || "";
  document.getElementById("show-city").value = show.city || "";
  document.getElementById("show-state").value = show.state || "";
  document.getElementById("ticket-url").value = show.ticket_url || "";
  document.getElementById("show-notes").value = show.notes || "";
  window.scrollTo({ top: document.getElementById("show-form").offsetTop - 20, behavior: "smooth" });
}

async function deleteShow(showId) {
  if (!confirm("Delete this show?")) return;

  await fetch(`${API_BASE}/shows/${SITE_SLUG}/${showId}`, {
    method: "DELETE",
    headers: authHeaders()
  });

  loadShows();
}

document.getElementById("section-form").addEventListener("submit", async function(e) {
  e.preventDefault();
  const status = document.getElementById("section-status");
  const editingId = document.getElementById("editing-section-id").value;

  const body = {
    page: "home",
    section_type: document.getElementById("section-type").value,
    title: document.getElementById("section-title").value,
    body: document.getElementById("section-body").value,
    image_url: document.getElementById("section-image-url").value,
    button_text: document.getElementById("section-button-text").value,
    button_url: document.getElementById("section-button-url").value,
    sort_order: document.getElementById("section-sort-order").value,
    is_visible: document.getElementById("section-visible").checked
  };

  const url = editingId ? `${API_BASE}/sections/${SITE_SLUG}/${editingId}` : `${API_BASE}/sections/${SITE_SLUG}`;
  const method = editingId ? "PUT" : "POST";

  const response = await fetch(url, {
    method,
    headers: authHeaders(),
    body: JSON.stringify(body)
  });

  status.textContent = response.ok ? "Section saved." : "Section save failed.";
  if (response.ok) {
    this.reset();
    document.getElementById("editing-section-id").value = "";
    document.getElementById("section-visible").checked = true;
    document.getElementById("section-sort-order").value = "0";
    loadSections();
  }
});

document.getElementById("cancel-section-edit").addEventListener("click", () => {
  document.getElementById("section-form").reset();
  document.getElementById("editing-section-id").value = "";
  document.getElementById("section-visible").checked = true;
});

async function loadSections() {
  const container = document.getElementById("sections-list");
  const response = await fetch(`${API_BASE}/sections/${SITE_SLUG}/home`);
  const data = await response.json();
  allSections = data.sections || [];

  if (!allSections.length) {
    container.innerHTML = "<p>No custom homepage sections yet.</p>";
    return;
  }

  container.innerHTML = allSections.map(section => `
    <div class="item section-preview">
      <strong>${section.sort_order}. ${section.title || "Untitled section"}</strong><br>
      <span class="small">${section.section_type} • ${section.is_visible ? "Visible" : "Hidden"}</span>
      <p>${section.body || ""}</p>
      ${section.image_url ? `<img src="${section.image_url}" style="max-width:180px;border-radius:10px">` : ""}
      <br>
      <button class="small-btn" onclick="moveSection('${section.id}', -1)">Move Up</button>
      <button class="small-btn" onclick="moveSection('${section.id}', 1)">Move Down</button>
      <button class="small-btn" onclick="editSection('${section.id}')">Edit</button>
      <button class="small-btn danger" onclick="deleteSection('${section.id}')">Delete</button>
    </div>
  `).join("");
}

function editSection(sectionId) {
  const s = allSections.find(section => section.id === sectionId);
  if (!s) return;

  document.getElementById("editing-section-id").value = s.id;
  document.getElementById("section-type").value = s.section_type;
  document.getElementById("section-title").value = s.title || "";
  document.getElementById("section-body").value = s.body || "";
  document.getElementById("section-image-url").value = s.image_url || "";
  document.getElementById("section-button-text").value = s.button_text || "";
  document.getElementById("section-button-url").value = s.button_url || "";
  document.getElementById("section-sort-order").value = s.sort_order || 0;
  document.getElementById("section-visible").checked = s.is_visible;
  window.scrollTo({ top: document.getElementById("section-form").offsetTop - 20, behavior: "smooth" });
}

async function moveSection(sectionId, direction) {
  const s = allSections.find(section => section.id === sectionId);
  if (!s) return;

  const body = { ...s, sort_order: Number(s.sort_order || 0) + direction };

  await fetch(`${API_BASE}/sections/${SITE_SLUG}/${sectionId}`, {
    method: "PUT",
    headers: authHeaders(),
    body: JSON.stringify(body)
  });

  loadSections();
}

async function deleteSection(sectionId) {
  if (!confirm("Delete this page section?")) return;

  await fetch(`${API_BASE}/sections/${SITE_SLUG}/${sectionId}`, {
    method: "DELETE",
    headers: authHeaders()
  });

  loadSections();
}

async function loadMessages() {
  const container = document.getElementById("messages-list");

  const response = await fetch(`${API_BASE}/messages/${SITE_SLUG}`, { headers: authHeaders() });
  const data = await response.json();
  const messages = data.messages || [];

  if (!messages.length) {
    container.innerHTML = "<p>No messages yet.</p>";
    return;
  }

  container.innerHTML = messages.map(message => `
    <div class="item">
      <strong>${message.fan_name || "Anonymous"}</strong><br>
      <span class="small">${message.fan_email || ""}</span>
      <p>${message.message}</p>
      <label>Reply</label>
      <textarea id="reply-${message.id}" rows="3">${message.admin_reply || ""}</textarea>
      <button onclick="replyToMessage('${message.id}')">Save Reply</button>
      <p class="small">Fan can see reply if they keep their browser chat session.</p>
    </div>
  `).join("");
}

async function replyToMessage(messageId) {
  const reply = document.getElementById(`reply-${messageId}`).value;

  await fetch(`${API_BASE}/messages/${SITE_SLUG}/${messageId}/reply`, {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify({ admin_reply: reply })
  });

  loadMessages();
}

async function loadSubmissions() {
  const container = document.getElementById("submissions-list");

  const response = await fetch(`${API_BASE}/submissions/${SITE_SLUG}`, { headers: authHeaders() });
  const data = await response.json();
  const submissions = data.submissions || [];

  if (!submissions.length) {
    container.innerHTML = "<p>No signup submissions yet.</p>";
    return;
  }

  container.innerHTML = submissions.map(submission => `
    <div class="item">
      <strong>${submission.name || "No name"}</strong><br>
      ${submission.email || ""}<br>
      ${submission.phone || ""}<br>
      <p>${submission.message || ""}</p>
      <span class="small">${submission.created_at}</span>
    </div>
  `).join("");
}