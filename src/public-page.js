import { createDefaultPuckData, pageBackgroundCss, defaultPageBackgroundProps } from "./puck-config.jsx";
import { renderPuckHtml, puckPageCss } from "./puck-render-html.js";

const SITE_SLUG = "graverobber";

async function loadPublicPage() {
  const root = document.getElementById("editable-page-root");
  if (!root) return;

const style = document.createElement("style");
style.textContent = puckPageCss();
document.head.appendChild(style);

function applyPageBackground(rootProps = {}) {
  const pageSettings = { ...defaultPageBackgroundProps, ...(rootProps || {}) };
  const background = pageBackgroundCss(pageSettings);

  document.documentElement.style.background = background;
  document.body.style.background = background;
  document.body.style.color = pageSettings.pageTextColor || "#f5f0e6";

  const root = document.getElementById("editable-page-root");
  if (root) {
    root.style.minHeight = "100vh";
    root.style.background = background;
    root.style.color = pageSettings.pageTextColor || "#f5f0e6";
  }
}

  const pageName = document.body?.dataset?.page || "home";

  const API_BASE =
    window.BAND_API_BASE ||
    "https://band-admin-backend-production.up.railway.app/api";

  try {
    const response = await fetch(
      `${API_BASE}/visual-pages/${SITE_SLUG}/${pageName}?_=${Date.now()}`
    );

    if (!response.ok) {
      throw new Error(`Public page fetch failed: ${response.status}`);
    }

    const data = await response.json();

    console.log("PUBLIC PAGE DEBUG", {
      siteSlug: SITE_SLUG,
      pageName,
      apiBase: API_BASE,
      status: response.status,
      data
    });

    const page = data?.page || data || {};

    let projectData = page.project_data;

    if (typeof projectData === "string") {
      try {
        projectData = JSON.parse(projectData);
      } catch (error) {
        console.warn("project_data was a string but could not be parsed", error, projectData);
      }
    }

if (projectData?.content?.length) {
  console.log("Rendering published project_data", projectData);
  applyPageBackground(projectData.root?.props);
  root.innerHTML = renderPuckHtml(projectData);

  applyContactFormOverride(root, pageName);

  window.dispatchEvent(new CustomEvent("visualPageRendered", {
    detail: { pageName }
  }));

  return;
}

if (page.html && page.html.trim()) {
  console.log("Rendering published html", page.html.slice(0, 200));
  root.innerHTML = page.html;

  applyContactFormOverride(root, pageName);

  window.dispatchEvent(new CustomEvent("visualPageRendered", {
    detail: { pageName }
  }));

  return;
}

    console.warn("No published project_data or html found. Rendering fallback default.", page);
  } catch (error) {
    console.warn("Published page failed to load. Rendering default page.", error);
  }

const fallbackData = createDefaultPuckData(pageName);
applyPageBackground(fallbackData.root?.props);
root.innerHTML = renderPuckHtml(fallbackData);

applyContactFormOverride(root, pageName);

window.dispatchEvent(new CustomEvent("visualPageRendered", {
  detail: { pageName }
}));
}

function applyContactFormOverride(root, pageName) {
  if (pageName !== "contact" || !root) return;

  root.querySelectorAll(".graverobber-contact-form-section").forEach(section => section.remove());

  root.querySelectorAll(".puck-buttons").forEach(buttonRow => {
    if (buttonRow.textContent.trim().toLowerCase() === "contact") {
      buttonRow.remove();
    }
  });

  const formSection = document.createElement("section");
  formSection.className = "puck-section graverobber-contact-form-section";
  formSection.style.background = "#000000";
  formSection.style.padding = "30px 24px";

  formSection.innerHTML = `
    <div class="puck-inner">
      <div class="graverobber-contact-form-wrap">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfvFy-I4z36zqLz4y4boVhM4eTL7KEb5Ip1It7OZyFfxlRgMw/viewform?embedded=true" width="640" height="721" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
      </div>
    </div>
  `;

  const footer = root.querySelector("footer.social-section, .social-section");
  if (footer) {
    footer.before(formSection);
  } else {
    root.appendChild(formSection);
  }
}

loadPublicPage();
