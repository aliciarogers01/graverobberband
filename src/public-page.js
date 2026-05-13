import { createDefaultPuckData } from "./puck-config.jsx";
import { renderPuckHtml, puckPageCss } from "./puck-render-html.js";

const SITE_SLUG = "graverobberpunk";

async function loadPublicPage() {
  const root = document.getElementById("editable-page-root");
  if (!root) return;

  const style = document.createElement("style");
  style.textContent = puckPageCss();
  document.head.appendChild(style);

  const pageName = document.body?.dataset?.page || "home";

  try {
    const response = await fetch(`${window.BAND_API_BASE}/visual-pages/${SITE_SLUG}/${pageName}?_=${Date.now()}`);

    if (!response.ok) {
      throw new Error(`Public page fetch failed: ${response.status}`);
    }

    const data = await response.json();
    const page = data?.page || data || {};

    if (page.project_data?.content?.length) {
      root.innerHTML = renderPuckHtml(page.project_data);
      return;
    }

    if (page.html && page.html.trim()) {
      root.innerHTML = page.html;
      return;
    }
  } catch (error) {
    console.warn("Published page failed to load. Rendering default page.", error);
  }

  root.innerHTML = renderPuckHtml(createDefaultPuckData(pageName));
}

loadPublicPage();