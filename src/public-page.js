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
  if (pageName !== "contact" || !root) return;

  document.documentElement.style.background = "#000000";
  document.body.style.background = "#000000";
  root.style.background = "#000000";

  root.querySelectorAll(".graverobber-contact-form-section").forEach(section => section.remove());

  root.querySelectorAll(".puck-buttons").forEach(buttonRow => {
    if (buttonRow.textContent.trim().toLowerCase() === "contact") {
      buttonRow.remove();
    }
  });

  root.querySelectorAll(".puck-section, section, .puck-inner, .puck-text").forEach(element => {
    const text = element.textContent.trim();
    if (text === "Contact Grave Robber" || text.includes("Contact Grave Robber")) {
      const section = element.closest(".puck-section, section");
      if (section && !section.classList.contains("graverobber-contact-form-section")) {
        section.remove();
      }
    }
  });

  const GOOGLE_FORM_ACTION = "https://docs.google.com/forms/d/e/1FAIpQLSfvFy-I4z36zqLz4y4boVhM4eTL7KEb5Ip1It7OZyFfxlRgMw/formResponse";
  const NAME_ENTRY = "entry.111991046";
  const EMAIL_ENTRY = "entry.709491702";
  const MESSAGE_ENTRY = "entry.905150677";

  const formSection = document.createElement("section");
  formSection.className = "puck-section graverobber-contact-form-section";

  formSection.innerHTML = `
    <div class="puck-inner graverobber-contact-inner">
      <form class="graverobber-custom-contact-form" action="${GOOGLE_FORM_ACTION}" method="POST" target="graverobber-contact-hidden-frame">
        <label>
          What are you called?
          <input type="text" name="${NAME_ENTRY}" required>
        </label>

        <label>
          What is your email?
          <input type="email" name="${EMAIL_ENTRY}" required>
        </label>

        <label>
          What do you want?
          <textarea name="${MESSAGE_ENTRY}" rows="7" required></textarea>
        </label>

        <button type="submit">Send Message</button>
        <p class="graverobber-contact-success" aria-live="polite"></p>
      </form>

      <iframe name="graverobber-contact-hidden-frame" style="display:none;"></iframe>
    </div>
  `;

  const form = formSection.querySelector(".graverobber-custom-contact-form");
  const success = formSection.querySelector(".graverobber-contact-success");

  form.addEventListener("submit", () => {
    window.setTimeout(() => {
      form.reset();
      success.textContent = "Great, your message was sent and we will get back to you shortly.";
    }, 350);
  });

  const header = root.querySelector(".puck-site-header");
  if (header) {
    header.after(formSection);
  } else {
    root.prepend(formSection);
  }
}

loadPublicPage();