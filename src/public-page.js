import { createDefaultPuckData, pageBackgroundCss, defaultPageBackgroundProps } from "./puck-config.jsx";
import { renderPuckHtml, puckPageCss } from "./puck-render-html.js";

const SITE_SLUG = "graverobber";

async function loadPublicPage() {
  const root = document.getElementById("editable-page-root");
  if (!root) return;

  const style = document.createElement("style");
  style.textContent = puckPageCss();
  document.head.appendChild(style);

  const pageNameFromBody = document.body?.dataset?.page;

const pageNameFromUrl = (() => {
  const fileName = window.location.pathname.split("/").pop() || "index.html";
  if (fileName === "index.html" || fileName === "") return "home";
  return fileName.replace(".html", "");
})();

const pageName = pageNameFromBody && pageNameFromBody !== "home"
  ? pageNameFromBody
  : pageNameFromUrl;

  const API_BASE =
    window.BAND_API_BASE ||
    "https://band-admin-backend-production.up.railway.app/api";

  function applyPageBackground(rootProps = {}) {
    const pageSettings = { ...defaultPageBackgroundProps, ...(rootProps || {}) };
    const background = pageBackgroundCss(pageSettings);

    document.documentElement.style.background = background;
    document.body.style.background = background;
    document.body.style.color = pageSettings.pageTextColor || "#f5f0e6";

    root.style.minHeight = "100vh";
    root.style.background = background;
    root.style.color = pageSettings.pageTextColor || "#f5f0e6";
  }

  try {
    const response = await fetch(
      `${API_BASE}/visual-pages/${SITE_SLUG}/${pageName}?_=${Date.now()}`
    );

    if (!response.ok) {
      throw new Error(`Public page fetch failed: ${response.status}`);
    }

    const data = await response.json();
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
      applyPageBackground(projectData.root?.props);
      root.innerHTML = renderPuckHtml(projectData);
      applyContactFormOverride(root, pageName);
document.documentElement.classList.add("visual-page-ready");
      window.dispatchEvent(new CustomEvent("visualPageRendered", { detail: { pageName } }));
      return;
    }

    if (page.html && page.html.trim()) {
      root.innerHTML = page.html;
      applyContactFormOverride(root, pageName);
document.documentElement.classList.add("visual-page-ready");
      window.dispatchEvent(new CustomEvent("visualPageRendered", { detail: { pageName } }));
      return;
    }
  } catch (error) {
    console.warn("Published page failed to load. Rendering default page.", error);
  }

  document.documentElement.style.background = "#000000";
  document.body.style.background = "#000000";
  document.body.style.color = "#ffffff";

  root.style.minHeight = "100vh";
  root.style.background = "#000000";
  root.style.color = "#ffffff";
  root.innerHTML = "";

  applyContactFormOverride(root, pageName);

document.documentElement.classList.add("visual-page-ready");
  window.dispatchEvent(new CustomEvent("visualPageRendered", {
    detail: { pageName }
  }));
}

function applyContactFormOverride(root, pageName) {
  return;
}

loadPublicPage();