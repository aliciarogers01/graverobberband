const API_BASE = window.BAND_API_BASE;
const SITE_SLUG = "graverobberpunk";

let adminToken = localStorage.getItem("adminToken") || "";
let allShows = [];
let allSections = [];
let draggedSectionId = null;
let settingsCache = {};
let navLinks = [];
let socialLinks = [];

const DEFAULT_PAGE_SECTIONS = {
  graverobberpunk: {
    home: [
      { page:"home", section_type:"image", title:"Grave Robber Skull Logo", body:"", image_url:"assets/grave-robber-skull.png", button_text:"", button_url:"", sort_order:1, is_visible:true },
      { page:"home", section_type:"text", title:"AMERICAN HORROR PUNK", body:"Official band website\n\nHorror punk from beyond the grave. Shows, music, merch, booking, and updates.", image_url:"", button_text:"", button_url:"", sort_order:2, is_visible:true },
      { page:"home", section_type:"button", title:"Main Buttons", body:"", image_url:"", button_text:"Shows", button_url:"shows.html", sort_order:3, is_visible:true },
      { page:"home", section_type:"button", title:"Join the Crypt List", body:"", image_url:"", button_text:"Join the Crypt List", button_url:"signup.html", sort_order:4, is_visible:true },
      { page:"home", section_type:"button", title:"Booking", body:"", image_url:"", button_text:"Booking", button_url:"mailto:graverobber.punk@gmail.com", sort_order:5, is_visible:true },
      { page:"home", section_type:"text", title:"Follow Grave Robber", body:"Facebook, Instagram, X, Threads, TikTok, Spotify, YouTube, Bandcamp, SoundCloud, Apple Music, Merch Store, Anchor Merch, Email", image_url:"", button_text:"", button_url:"", sort_order:6, is_visible:true }
    ],
    shows: [
      { page:"shows", section_type:"text", title:"Shows", body:"Upcoming show list and get-notified form.", image_url:"", button_text:"", button_url:"", sort_order:1, is_visible:true }
    ],
    signup: [
      { page:"signup", section_type:"text", title:"Join the Crypt List", body:"Signup form text and fan list call-to-action.", image_url:"", button_text:"", button_url:"", sort_order:1, is_visible:true }
    ]
  },
  driver8remband: {
    home: [
      { page:"home", section_type:"image", title:"Driver 8 Logo", body:"", image_url:"assets/logo.jpg", button_text:"", button_url:"", sort_order:1, is_visible:true },
      { page:"home", section_type:"text", title:"Driver 8", body:"The music of R.E.M. performed live. Shows, updates, booking, and fan signup.", image_url:"", button_text:"", button_url:"", sort_order:2, is_visible:true },
      { page:"home", section_type:"image", title:"Band Photo", body:"", image_url:"assets/band.jpg", button_text:"", button_url:"", sort_order:3, is_visible:true },
      { page:"home", section_type:"button", title:"Shows Button", body:"", image_url:"", button_text:"Shows", button_url:"shows.html", sort_order:4, is_visible:true },
      { page:"home", section_type:"button", title:"Signup Button", body:"", image_url:"", button_text:"Sign Up", button_url:"signup.html", sort_order:5, is_visible:true }
    ],
    shows: [
      { page:"shows", section_type:"text", title:"Shows", body:"Upcoming Driver 8 shows and get-notified form.", image_url:"", button_text:"", button_url:"", sort_order:1, is_visible:true }
    ],
    signup: [
      { page:"signup", section_type:"text", title:"Sign Up", body:"Driver 8 fan signup form.", image_url:"", button_text:"", button_url:"", sort_order:1, is_visible:true }
    ]
  },
  weirdsciencefw: {
    home: [
      { page:"home", section_type:"image", title:"Weird Science Logo", body:"", image_url:"assets/logo.jpg", button_text:"", button_url:"", sort_order:1, is_visible:true },
      { page:"home", section_type:"text", title:"Weird Science", body:"Fort Wayne live music, shows, booking, updates, and fan signup.", image_url:"", button_text:"", button_url:"", sort_order:2, is_visible:true },
      { page:"home", section_type:"button", title:"Shows Button", body:"", image_url:"", button_text:"Shows", button_url:"shows.html", sort_order:3, is_visible:true },
      { page:"home", section_type:"button", title:"Signup Button", body:"", image_url:"", button_text:"Sign Up", button_url:"signup.html", sort_order:4, is_visible:true }
    ],
    shows: [
      { page:"shows", section_type:"text", title:"Shows", body:"Upcoming Weird Science shows and get-notified form.", image_url:"", button_text:"", button_url:"", sort_order:1, is_visible:true }
    ],
    signup: [
      { page:"signup", section_type:"text", title:"Sign Up", body:"Weird Science signup form.", image_url:"", button_text:"", button_url:"", sort_order:1, is_visible:true }
    ]
  }
};

function defaultSectionsForCurrentPage() {
  const selectedPage = document.getElementById("section-page")?.value || "home";
  return ((DEFAULT_PAGE_SECTIONS[SITE_SLUG] || {})[selectedPage] || []).map((section, index) => ({
    ...section,
    id: `factory-${selectedPage}-${index + 1}`,
    sort_order: section.sort_order || index + 1,
    isFactorySection: true
  }));
}

async function createSectionFromData(sectionData) {
  const clean = {
    page: sectionData.page,
    section_type: sectionData.section_type,
    title: sectionData.title || "",
    body: sectionData.body || "",
    image_url: sectionData.image_url || "",
    button_text: sectionData.button_text || "",
    button_url: sectionData.button_url || "",
    sort_order: sectionData.sort_order || 0,
    is_visible: sectionData.is_visible !== false
  };
  return fetch(`${API_BASE}/sections/${SITE_SLUG}`, {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify(clean)
  });
}

async function importFactorySection(factoryId) {
  const section = defaultSectionsForCurrentPage().find(item => item.id === factoryId);
  if (!section) return;
  await createSectionFromData(section);
  loadSections();
}

async function importAllFactorySections() {
  const factorySections = defaultSectionsForCurrentPage();
  for (const section of factorySections) await createSectionFromData(section);
  loadSections();
}

function updateLivePreview() {
  const frame = document.getElementById("visual-page-preview");
  if (!frame) return;
  const page = document.getElementById("section-page")?.value || "home";
  frame.src = page === "home" ? "index.html" : `${page}.html`;
}


const loginPanel = document.getElementById("login-panel");
const dashboard = document.getElementById("dashboard");

function authHeaders() { return { "Content-Type": "application/json", "Authorization": `Bearer ${adminToken}` }; }
function showDashboard() { loginPanel.classList.add("hidden"); dashboard.classList.remove("hidden"); loadSettings(); loadMedia(); loadShows(); loadSections(); loadMessages(); loadSubmissions(); }
function showLogin() { loginPanel.classList.remove("hidden"); dashboard.classList.add("hidden"); }
if (adminToken) showDashboard();

document.getElementById("login-form").addEventListener("submit", async function(e) {
  e.preventDefault();
  const status = document.getElementById("login-status");
  const response = await fetch(`${API_BASE}/auth/login`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email: document.getElementById("login-email").value, password: document.getElementById("login-password").value }) });
  const data = await response.json();
  if (!response.ok) { status.textContent = data.error || "Login failed."; return; }
  adminToken = data.token; localStorage.setItem("adminToken", adminToken); showDashboard();
});

document.getElementById("logout-button").addEventListener("click", () => { localStorage.removeItem("adminToken"); adminToken = ""; showLogin(); });

document.getElementById("password-form").addEventListener("submit", async function(e) {
  e.preventDefault();
  const status = document.getElementById("password-status");
  const response = await fetch(`${API_BASE}/auth/change-password`, { method: "POST", headers: authHeaders(), body: JSON.stringify({ currentPassword: document.getElementById("current-password").value, newPassword: document.getElementById("new-password").value }) });
  const data = await response.json();
  status.textContent = response.ok ? "Password changed." : (data.error || "Password change failed.");
  if (response.ok) this.reset();
});

function normalizeLinks(value, fallback) {
  if (Array.isArray(value) && value.length) return value;
  return fallback;
}

async function loadSettings() {
  const response = await fetch(`${API_BASE}/settings/${SITE_SLUG}`);
  const data = await response.json();
  const s = data.settings || {};
  settingsCache = s;
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
  document.getElementById("signup-title").value = s.signup_title || "";
  document.getElementById("signup-description").value = s.signup_description || "";
  document.getElementById("signup-button-text").value = s.signup_button_text || "Sign Up";
  document.getElementById("signup-success-text").value = s.signup_success_text || "Thank you! You are signed up.";
  document.getElementById("notify-title").value = s.notify_title || "";
  document.getElementById("notify-description").value = s.notify_description || "";
  document.getElementById("notify-button-text").value = s.notify_button_text || "Get Notified";
  navLinks = normalizeLinks(s.nav_links, [{label:"Home",url:"index.html"},{label:"Shows",url:"shows.html"},{label:"Signup",url:"signup.html"}]);
  socialLinks = normalizeLinks(s.social_links, []);
  renderNavLinks(); renderSocialLinks();
}

async function saveSettings(statusText = "Settings saved.") {
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
    background_image_url: document.getElementById("background-image-url").value,
    nav_links: navLinks,
    social_links: socialLinks,
    signup_title: document.getElementById("signup-title").value,
    signup_description: document.getElementById("signup-description").value,
    signup_button_text: document.getElementById("signup-button-text").value,
    signup_success_text: document.getElementById("signup-success-text").value,
    notify_title: document.getElementById("notify-title").value,
    notify_description: document.getElementById("notify-description").value,
    notify_button_text: document.getElementById("notify-button-text").value
  };
  const response = await fetch(`${API_BASE}/settings/${SITE_SLUG}`, { method: "PUT", headers: authHeaders(), body: JSON.stringify(body) });
  status.textContent = response.ok ? statusText : "Settings save failed.";
}

document.getElementById("settings-form").addEventListener("submit", async e => { e.preventDefault(); await saveSettings("Site settings saved."); });
["signup-title","signup-description","signup-button-text","signup-success-text","notify-title","notify-description","notify-button-text"].forEach(id => document.getElementById(id).addEventListener("change", () => saveSettings("Form settings saved.")));

function renderLinkEditor(list, containerId, type) {
  const container = document.getElementById(containerId);
  container.innerHTML = list.map((link, index) => `<div class="item sortable-item" draggable="true" data-index="${index}" data-type="${type}"><strong>${index + 1}. ${link.label || "Untitled"}</strong><br><span class="small">${link.url || ""}</span><br><button class="small-btn" onclick="editLink('${type}',${index})">Edit</button><button class="small-btn" onclick="moveLink('${type}',${index},-1)">Up</button><button class="small-btn" onclick="moveLink('${type}',${index},1)">Down</button><button class="small-btn danger" onclick="deleteLink('${type}',${index})">Delete</button></div>`).join("") || "<p>No links yet.</p>";
}
function renderNavLinks(){ renderLinkEditor(navLinks,"nav-links-list","nav"); }
function renderSocialLinks(){ renderLinkEditor(socialLinks,"social-links-list","social"); }
document.getElementById("add-nav-link").addEventListener("click", async () => { navLinks.push({ label: document.getElementById("nav-label").value, url: document.getElementById("nav-url").value }); document.getElementById("nav-label").value=""; document.getElementById("nav-url").value=""; renderNavLinks(); await saveSettings("Navigation saved."); });
document.getElementById("add-social-link").addEventListener("click", async () => { socialLinks.push({ label: document.getElementById("social-label").value, url: document.getElementById("social-url").value }); document.getElementById("social-label").value=""; document.getElementById("social-url").value=""; renderSocialLinks(); await saveSettings("Social links saved."); });
function getList(type){ return type === "nav" ? navLinks : socialLinks; }
window.editLink = async function(type,index){ const list=getList(type); const label=prompt("Link label", list[index].label || ""); if(label===null)return; const url=prompt("Link URL", list[index].url || ""); if(url===null)return; list[index]={label,url}; type==="nav"?renderNavLinks():renderSocialLinks(); await saveSettings("Links saved."); }
window.moveLink = async function(type,index,dir){ const list=getList(type); const target=index+dir; if(target<0||target>=list.length)return; [list[index],list[target]]=[list[target],list[index]]; type==="nav"?renderNavLinks():renderSocialLinks(); await saveSettings("Link order saved."); }
window.deleteLink = async function(type,index){ if(!confirm("Delete this link?"))return; const list=getList(type); list.splice(index,1); type==="nav"?renderNavLinks():renderSocialLinks(); await saveSettings("Link deleted."); }

// media/shows/sections/messages/submissions
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
    page: document.getElementById("section-page").value,
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
  const selectedPage = document.getElementById("section-page").value || "home";
  updateLivePreview();
  const response = await fetch(`${API_BASE}/sections/${SITE_SLUG}/${selectedPage}`);
  const data = await response.json();
  allSections = data.sections || [];

  if (!allSections.length) {
    const factorySections = defaultSectionsForCurrentPage();
    if (!factorySections.length) {
      container.innerHTML = "<p>No sections available for this page yet.</p>";
      return;
    }
    container.innerHTML = `
      <div class="builder-notice">
        <strong>Current hardcoded page content</strong><br>
        These are the sections already on the live site. Click Import All to make them editable, deletable, and reorderable from admin.
        <br><button type="button" class="small-btn" onclick="importAllFactorySections()">Import All Current Page Sections</button>
      </div>
      ${factorySections.map(section => `
        <div class="item section-preview factory-section" data-section-id="${section.id}">
          <strong>${section.sort_order}. ${section.title || "Untitled section"}</strong><br>
          <span class="small">${section.section_type} • currently hardcoded on site</span>
          <p>${section.body || ""}</p>
          ${section.image_url ? `<img src="${section.image_url}" style="max-width:180px;border-radius:10px">` : ""}
          <br>
          <button class="small-btn" onclick="importFactorySection('${section.id}')">Import This Section For Editing</button>
        </div>
      `).join("")}
    `;
    return;
  }

  container.innerHTML = allSections.map(section => `
    <div class="item section-preview" draggable="true" data-section-id="${section.id}">
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

  enableSectionDragAndDrop();
}

async function saveSectionOrder() {
  await Promise.all(allSections.map((section, index) => {
    const body = { ...section, sort_order: index + 1 };

    return fetch(`${API_BASE}/sections/${SITE_SLUG}/${section.id}`, {
      method: "PUT",
      headers: authHeaders(),
      body: JSON.stringify(body)
    });
  }));

  loadSections();
}

function enableSectionDragAndDrop() {
  const cards = document.querySelectorAll("#sections-list .section-preview");

  cards.forEach(card => {
    card.addEventListener("dragstart", () => {
      draggedSectionId = card.dataset.sectionId;
      card.classList.add("dragging");
    });

    card.addEventListener("dragend", () => {
      card.classList.remove("dragging");
      draggedSectionId = null;
    });

    card.addEventListener("dragover", event => {
      event.preventDefault();
    });

    card.addEventListener("drop", async event => {
      event.preventDefault();
      const targetSectionId = card.dataset.sectionId;

      if (!draggedSectionId || draggedSectionId === targetSectionId) return;

      const draggedIndex = allSections.findIndex(section => section.id === draggedSectionId);
      const targetIndex = allSections.findIndex(section => section.id === targetSectionId);

      if (draggedIndex < 0 || targetIndex < 0) return;

      const [draggedSection] = allSections.splice(draggedIndex, 1);
      allSections.splice(targetIndex, 0, draggedSection);

      await saveSectionOrder();
    });
  });
}

function editSection(sectionId) {
  const s = allSections.find(section => section.id === sectionId);
  if (!s) return;

  document.getElementById("editing-section-id").value = s.id;
  document.getElementById("section-page").value = s.page || "home";
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
const sectionPageSelect = document.getElementById("section-page");
if (sectionPageSelect) sectionPageSelect.addEventListener("change", () => { updateLivePreview(); loadSections(); });
updateLivePreview();
