import { createDefaultPuckData, pageBackgroundCss, defaultPageBackgroundProps } from "./puck-config.jsx";
import { renderPuckHtml, puckPageCss } from "./puck-render-html.js";

const SITE_SLUG = "graverobber";

function getCurrentPageName() {
  const pageNameFromBody = document.body?.dataset?.page;

  const pageNameFromUrl = (() => {
    const fileName = window.location.pathname.split("/").pop() || "index.html";
    if (fileName === "index.html" || fileName === "") return "home";
    return fileName.replace(".html", "");
  })();

  return pageNameFromBody && pageNameFromBody !== "home"
    ? pageNameFromBody
    : pageNameFromUrl;
}

function parseProjectData(projectData) {
  if (typeof projectData !== "string") return projectData;

  try {
    return JSON.parse(projectData);
  } catch (error) {
    console.warn("project_data was a string but could not be parsed", error, projectData);
    return null;
  }
}

function projectDataIsUsable(projectData, pageName) {
  if (!projectData?.content || !Array.isArray(projectData.content) || !projectData.content.length) {
    return false;
  }

  if (pageName === "contact") {
    return projectData.content.some(block => block?.type === "ContactForm");
  }

  if (pageName === "shows") {
    return true;
  }

  return true;
}

function initializeExitPopups(root) {
  root.querySelectorAll("[data-gr-exit-popup]").forEach(popup => {
    if (popup.dataset.grExitPopupBound === "true") return;
    popup.dataset.grExitPopupBound = "true";

    let shown = false;
    let lastY = null;
    let hasBeenLowerOnPage = false;
    const triggerDistance = Number(popup.dataset.triggerDistance || 120);

    function showPopup() {
      if (shown) return;
      shown = true;
      popup.classList.add("is-visible");
    }

    function hidePopup() {
      popup.classList.remove("is-visible");
    }

    document.addEventListener("mousemove", event => {
      const armedDistance = Math.max(triggerDistance + 180, 260);

      if (event.clientY >= armedDistance) {
        hasBeenLowerOnPage = true;
      }

      const movingUp = lastY !== null && event.clientY < lastY;
      const nearTop = event.clientY <= triggerDistance;

      if (hasBeenLowerOnPage && movingUp && nearTop) {
        showPopup();
      }

      lastY = event.clientY;
    });

    popup.addEventListener("click", event => {
      if (
        event.target.classList.contains("gr-exit-popup-backdrop") ||
        event.target.classList.contains("gr-exit-popup-close") ||
        event.target.classList.contains("gr-exit-popup-no-thanks")
      ) {
        hidePopup();
      }
    });
  });
}

function executeRenderedScripts(root) {
  root.querySelectorAll("script").forEach(script => {
    if (script.dataset.executedRenderedScript === "true") return;

    const replacement = document.createElement("script");
    Array.from(script.attributes).forEach(attribute => {
      if (attribute.name !== "data-executed-rendered-script") {
        replacement.setAttribute(attribute.name, attribute.value);
      }
    });

    replacement.dataset.executedRenderedScript = "true";
    replacement.textContent = script.textContent;
    script.replaceWith(replacement);
  });
}

async function loadPublicPage() {
  const root = document.getElementById("editable-page-root");
  if (!root) return;

  const style = document.createElement("style");
  style.textContent = puckPageCss();
  document.head.appendChild(style);

  const pageName = getCurrentPageName();

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
    const projectData = parseProjectData(page.project_data);

    if (projectDataIsUsable(projectData, pageName)) {
      applyPageBackground(projectData.root?.props);
      root.innerHTML = renderPuckHtml(projectData);
      executeRenderedScripts(root);
      initializeExitPopups(root);

      document.documentElement.classList.add("visual-page-ready");
      window.dispatchEvent(new CustomEvent("visualPageRendered", { detail: { pageName } }));
      return;
    }

    if (page.html && page.html.trim()) {
      console.warn("Ignoring saved page.html because it can contain old raw fallback HTML.");
    }
  } catch (error) {
    console.warn("Published page failed to load. Rendering default page.", error);
  }

  const fallbackData = createDefaultPuckData(pageName);
  applyPageBackground(fallbackData.root?.props);
  root.innerHTML = renderPuckHtml(fallbackData);
  executeRenderedScripts(root);
  initializeExitPopups(root);

  document.documentElement.classList.add("visual-page-ready");
  window.dispatchEvent(new CustomEvent("visualPageRendered", {
    detail: { pageName }
  }));
}

loadPublicPage();
