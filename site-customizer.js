const CUSTOMIZER_SITE_SLUG = "graverobberpunk";

function setText(selector, value) { const element = document.querySelector(selector); if (element && value) element.textContent = value; }
function setImage(selector, value) { const image = document.querySelector(selector); if (image && value) image.src = value; }
function safeArray(value) { return Array.isArray(value) ? value : []; }

function currentPageName() {
  const path = window.location.pathname.toLowerCase();
  if (path.includes("shows")) return "shows";
  if (path.includes("signup")) return "signup";
  return "home";
}

function renderSection(section) {
  const sectionElement = document.createElement("section");
  sectionElement.className = `custom-section custom-section-${section.section_type}`;
  if (section.title) { const title = document.createElement("h2"); title.textContent = section.title; sectionElement.appendChild(title); }
  if (section.body && section.section_type !== "html" && section.section_type !== "embed") { const body = document.createElement("p"); body.textContent = section.body; sectionElement.appendChild(body); }
  if (section.image_url) { const image = document.createElement("img"); image.src = section.image_url; image.alt = section.title || "Custom website image"; sectionElement.appendChild(image); }
  if ((section.section_type === "html" || section.section_type === "embed") && section.body) { const html = document.createElement("div"); html.className = "custom-section-html"; html.innerHTML = section.body; sectionElement.appendChild(html); }
  if (section.button_text && section.button_url) { const button = document.createElement("a"); button.className = "primary-btn custom-section-button"; button.href = section.button_url; button.textContent = section.button_text; sectionElement.appendChild(button); }
  return sectionElement;
}

function renderLinks(containerSelector, links, activePath) {
  const container = document.querySelector(containerSelector);
  if (!container || !links.length) return;
  container.innerHTML = links.map(link => `<a href="${link.url || '#'}" class="${(link.url || '').includes(activePath) ? 'active' : ''}">${link.label || 'Link'}</a>`).join("");
}

function renderSocialLinks(links) {
  const container = document.querySelector(".social-links");
  if (!container || !links.length) return;
  container.innerHTML = links.map(link => `<a href="${link.url || '#'}" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="${link.label || 'Social link'}">${link.label || 'Link'}</a>`).join("");
}

async function applyAdminSettings() {
  if (!window.BAND_API_BASE) return;
  const response = await fetch(`${window.BAND_API_BASE}/settings/${CUSTOMIZER_SITE_SLUG}`);
  const data = await response.json();
  const settings = data.settings || {};
  window.BAND_SITE_SETTINGS = settings;
  document.documentElement.style.setProperty("--admin-primary-color", settings.primary_color || "#c1121f");
  document.documentElement.style.setProperty("--admin-background-color", settings.background_color || "#000000");
  document.documentElement.style.setProperty("--admin-text-color", settings.text_color || "#ffffff");
  if (settings.background_color) document.body.style.backgroundColor = settings.background_color;
  if (settings.text_color) document.body.style.color = settings.text_color;
  if (settings.font_family) document.body.style.fontFamily = settings.font_family;
  if (settings.background_image_url) { document.body.style.backgroundImage = `url('${settings.background_image_url}')`; document.body.style.backgroundSize = "cover"; document.body.style.backgroundAttachment = "fixed"; }
  setText(".band-name", settings.site_title); setText(".tagline", settings.tagline); setText(".description", settings.homepage_text);
  setText(".page-title", settings.signup_title); setText(".signup-title", settings.signup_title);
  setText(".page-description", settings.signup_description); setText(".signup-description", settings.signup_description);
  setText(".notify-title", settings.notify_title); setText(".notify-description", settings.notify_description); setText(".notify-button-text", settings.notify_button_text);
  setText(".signup-submit-text", settings.signup_button_text);
  setImage(".site-nav-logo img", settings.logo_url); setImage(".signup-logo", settings.logo_url); setImage(".header-logo", settings.logo_url); setImage(".logo", settings.logo_url); setImage(".band-photo", settings.hero_image_url);
  renderLinks(".site-nav-links", safeArray(settings.nav_links), currentPageName() === "home" ? "index" : currentPageName());
  renderSocialLinks(safeArray(settings.social_links));
}

async function applyAdminSections() {
  if (!window.BAND_API_BASE) return;
  const page = currentPageName();
  const response = await fetch(`${window.BAND_API_BASE}/sections/${CUSTOMIZER_SITE_SLUG}/${page}`);
  const data = await response.json();
  const allSections = data.sections || [];
  const visibleSections = allSections.filter(section => section.is_visible);
  const main = document.querySelector(".main-content, .page-content, .signup-content, .shows-content, main");

  // If the page has never been converted into admin-controlled sections, leave the hardcoded site alone.
  if (!main || !allSections.length) return;

  // Once admin sections exist, they become the real page. This prevents duplicates and lets Remove/Edit/Reorder affect the existing live page.
  main.innerHTML = "";
  const wrapper = document.createElement("div");
  wrapper.className = "custom-sections-wrap admin-owned-page";
  visibleSections.forEach(section => wrapper.appendChild(renderSection(section)));
  main.appendChild(wrapper);
}

applyAdminSettings().catch(console.error);
applyAdminSections().catch(console.error);
