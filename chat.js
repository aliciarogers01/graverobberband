const CHAT_API_BASE = window.BAND_API_BASE;
const CHAT_SITE_SLUG = "graverobberpunk";

function applySiteSettings() {
  if (!CHAT_API_BASE) return;

  fetch(`${CHAT_API_BASE}/settings/${CHAT_SITE_SLUG}`)
    .then(res => res.json())
    .then(data => {
      const s = data.settings;
      if (!s) return;

      document.body.style.backgroundColor = s.background_color || "";
      document.body.style.color = s.text_color || "";
      document.body.style.fontFamily = s.font_family || "";

      if (s.background_image_url) {
        document.body.style.backgroundImage = `url(${s.background_image_url})`;
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundAttachment = "fixed";
      }
    })
    .catch(() => {});
}

function currentVisualPageName() {
  const file = window.location.pathname.split("/").pop() || "index.html";

  if (file === "shows.html") return "shows";
  if (file === "signup.html") return "signup";
  if (file === "contact.html") return "contact";

  return "home";
}

async function renderPageSections() {
  const root = document.getElementById("editable-page-root");

  try {
    if (!CHAT_API_BASE) {
      throw new Error("BAND_API_BASE is missing. Check api-config.js.");
    }

    const pageName = currentVisualPageName();
    const response = await fetch(`${CHAT_API_BASE}/visual-pages/${CHAT_SITE_SLUG}/${pageName}?_=${Date.now()}`);

    if (!response.ok) {
      throw new Error(`Visual page request failed: ${response.status}`);
    }

    const data = await response.json();
    const page = data.page;

    if (!page || !page.html) {
      throw new Error("No published visual page HTML returned.");
    }

    let styleTag = document.getElementById("published-puck-css");
    if (!styleTag) {
      styleTag = document.createElement("style");
      styleTag.id = "published-puck-css";
      document.head.appendChild(styleTag);
    }

    styleTag.textContent = `${page.css || ""}

/* DESKTOP + GLOBAL FULL-WIDTH SAFETY OVERRIDE */
#editable-page-root.main-content,
#editable-page-root {
  width: 100% !important;
  max-width: none !important;
  margin-left: 0 !important;
  margin-right: 0 !important;
  padding-left: 0 !important;
  padding-right: 0 !important;
  overflow-x: visible !important;
}

#editable-page-root .puck-site-header,
#editable-page-root .puck-site-header.is-full-width,
#editable-page-root .puck-song-scroll,
#editable-page-root .puck-song-scroll.is-full-width,
#editable-page-root .social-section,
#editable-page-root .social-section.is-full-width {
  width: 100% !important;
  max-width: none !important;
  margin-left: 0 !important;
  margin-right: 0 !important;
}

#editable-page-root hr,
#editable-page-root .section-divider,
#editable-page-root .divider {
  display: none !important;
}

/* REMOVE HARDCODED SOCIAL DIVIDER LINE */
#editable-page-root .social-section,
#editable-page-root footer.social-section,
#editable-page-root .puck-section.social-section {
  border-top: none !important;
  border-top-width: 0 !important;
  border-top-color: transparent !important;
  box-shadow: none !important;
}

@media (max-width: 768px) {
  html,
  body {
    width: 100% !important;
    max-width: 100% !important;
    overflow-x: hidden !important;
    margin: 0 !important;
    padding: 0 !important;
  }

  body {
    position: relative !important;
  }

  #editable-page-root,
  #editable-page-root * {
    box-sizing: border-box !important;
    font-family: inherit !important;
  }

  #editable-page-root {
    width: 100vw !important;
    max-width: 100vw !important;
    min-width: 100vw !important;
    overflow-x: hidden !important;
    margin: 0 !important;
    padding: 0 !important;
  }

  #editable-page-root section,
  #editable-page-root .puck-section,
  #editable-page-root .puck-inner,
  #editable-page-root .puck-flex,
  #editable-page-root .puck-columns,
  #editable-page-root .puck-card,
  #editable-page-root .puck-text {
    width: 100% !important;
    max-width: 100% !important;
    min-width: 0 !important;
    margin-left: 0 !important;
    margin-right: 0 !important;
  }

  #editable-page-root .puck-section {
    padding-left: 14px !important;
    padding-right: 14px !important;
  }

  #editable-page-root .puck-flex {
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    justify-content: center !important;
    text-align: center !important;
    gap: 20px !important;
  }

  #editable-page-root .puck-columns {
    display: grid !important;
    grid-template-columns: 1fr !important;
    gap: 20px !important;
  }

  #editable-page-root img,
  #editable-page-root video,
  #editable-page-root iframe,
  #editable-page-root .puck-image {
    display: block !important;
    width: 100% !important;
    max-width: 100% !important;
    height: auto !important;
  }

  #editable-page-root .social-link,
  #editable-page-root .puck-social-links .social-link {
    width: 50px !important;
    max-width: 50px !important;
    min-width: 50px !important;
    height: 50px !important;
    min-height: 50px !important;
    max-height: 50px !important;
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    border-radius: 999px !important;
    flex: 0 0 50px !important;
  }

  #editable-page-root .social-link svg,
  #editable-page-root .puck-social-links .social-link svg {
    display: block !important;
    width: 24px !important;
    max-width: 24px !important;
    min-width: 24px !important;
    height: 24px !important;
    max-height: 24px !important;
    min-height: 24px !important;
    fill: currentColor !important;
  }

  #editable-page-root .puck-social-letter {
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    width: auto !important;
    max-width: none !important;
    font-size: 16px !important;
    line-height: 1 !important;
  }

  #editable-page-root .puck-site-header {
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    justify-content: center !important;
    width: 100% !important;
    max-width: 100% !important;
    padding: 14px !important;
    margin: 0 !important;
    gap: 12px !important;
    text-align: center !important;
  }

  #editable-page-root .puck-header-left,
  #editable-page-root .puck-header-right,
  #editable-page-root .puck-header-nav {
    width: 100% !important;
    max-width: 100% !important;
    display: flex !important;
    justify-content: center !important;
    flex-wrap: wrap !important;
    gap: 10px !important;
  }

  #editable-page-root .puck-btn,
  #editable-page-root button,
  #editable-page-root a {
    max-width: 100% !important;
    white-space: normal !important;
    text-align: center !important;
  }

  #chat-box {
    width: min(320px, calc(100vw - 24px)) !important;
  }

  #fan-chat-widget {
    right: 12px !important;
    bottom: 12px !important;
  }
}
`;

    if (root) {
      root.innerHTML = page.html;
    }
  } catch (error) {
    console.warn("Published visual page failed to load.", error);

    if (root) {
      root.innerHTML = `<main class="home-shell"><section class="hero"><div class="logo-wrap"><img src="assets/grave-robber-skull.png" alt="Grave Robber skull logo" class="logo"></div><p class="eyebrow">AMERICAN HORROR PUNK</p><h1>Grave Robber</h1><p class="description">Horror punk from beyond the grave. Shows, music, merch, booking, and updates.</p><div class="action-buttons"><a href="shows.html" class="primary-btn">Shows</a><a href="signup.html" class="secondary-btn">Join the Army of the Dead</a><a href="mailto:graverobber.punk@gmail.com" class="secondary-btn">Booking</a></div></section><section class="social-section"><p class="teaser">Follow Grave Robber</p><div class="social-links"><a href="https://www.facebook.com/graverobberpunk">Facebook</a><a href="https://www.instagram.com/graverobberpunk">Instagram</a><a href="https://open.spotify.com/artist/4D34aUp0OsDs8mAEWPIP7c">Spotify</a></div></section></main>`;
    }
  }
}

function createChatWidget() {
  const wrapper = document.createElement("div");
  wrapper.id = "fan-chat-widget";

  wrapper.innerHTML = `
    <style>
      #fan-chat-widget{position:fixed;right:20px;bottom:20px;z-index:9999;font-family:Arial,sans-serif}
      #chat-toggle{background:#8b3df4;color:white;border:none;border-radius:999px;padding:14px 18px;font-weight:bold;cursor:pointer;box-shadow:0 0 20px rgba(139,61,244,.6)}
      #chat-box{display:none;width:320px;background:#111;color:white;border:1px solid #8b3df4;border-radius:18px;padding:16px;margin-bottom:12px;box-shadow:0 0 30px rgba(0,0,0,.6)}
      #chat-box.open{display:block}
      #chat-box h3{margin-top:0;color:#39ff14}
      #chat-box input,#chat-box textarea{width:100%;box-sizing:border-box;padding:10px;margin-bottom:10px;border-radius:8px;border:1px solid #555;background:#000;color:white}
      #chat-box button{width:100%;padding:11px;border:none;border-radius:8px;background:#8b3df4;color:white;font-weight:bold;cursor:pointer}
      #chat-status,#chat-reply{font-size:13px;min-height:18px}
      #chat-reply{background:#000;padding:10px;border-radius:8px;margin-top:10px}
    </style>

    <div id="chat-box">
      <h3>Message Grave Robber</h3>
      <input id="chat-name" type="text" placeholder="Your name">
      <input id="chat-email" type="email" placeholder="Your email">
      <textarea id="chat-message" rows="4" placeholder="Type your message..." required></textarea>
      <button id="send-chat-button">Send Message</button>
      <p id="chat-status"></p>
      <div id="chat-reply"></div>
    </div>

    <button id="chat-toggle">Chat with Grave Robber</button>
  `;

  document.body.appendChild(wrapper);

  document.getElementById("chat-toggle").addEventListener("click", () => {
    document.getElementById("chat-box").classList.toggle("open");
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  applySiteSettings();
  await renderPageSections();
  createChatWidget();
});
