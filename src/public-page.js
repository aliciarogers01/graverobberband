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
    const data = await response.json();
    const html = data?.page?.html || data?.html || "";

    if (html.trim()) {
      root.innerHTML = html;
      return;
    }
  } catch (error) {
    console.warn("Published page failed to load. Rendering default page.", error);
  }

  root.innerHTML = renderPuckHtml(createDefaultPuckData(pageName));
}

loadPublicPage();