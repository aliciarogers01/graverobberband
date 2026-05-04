const CHAT_API_BASE = window.BAND_API_BASE;
const CHAT_SITE_SLUG = "graverobber";

function applySiteSettings() {
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

      const bandName = document.querySelector(".band-name");
      if (bandName && s.site_title) bandName.textContent = s.site_title;

      const tagline = document.querySelector(".tagline");
      if (tagline && s.tagline) tagline.textContent = s.tagline;

      const description = document.querySelector(".section-description");
      if (description && s.homepage_text) description.textContent = s.homepage_text;

      const logo = document.querySelector(".logo");
      if (logo && s.logo_url) logo.src = s.logo_url;
    })
    .catch(() => {});
}

function renderPageSections() {
  fetch(`${CHAT_API_BASE}/sections/${CHAT_SITE_SLUG}/home`)
    .then(res => res.json())
    .then(data => {
      const sections = (data.sections || []).filter(s => s.is_visible);
      if (!sections.length) return;

      const wrap = document.createElement("section");
      wrap.className = "custom-page-sections";
      wrap.style.maxWidth = "1000px";
      wrap.style.margin = "40px auto";
      wrap.style.padding = "20px";

      wrap.innerHTML = sections.map(s => `
        <div style="margin-bottom:24px;padding:20px;border-radius:18px;background:rgba(0,0,0,.45);border:1px solid rgba(255,255,255,.18)">
          ${s.title ? `<h2>${s.title}</h2>` : ""}
          ${s.image_url ? `<img src="${s.image_url}" alt="" style="max-width:100%;border-radius:14px;margin:12px 0">` : ""}
          ${s.body ? `<p>${s.body}</p>` : ""}
          ${s.button_text && s.button_url ? `<a href="${s.button_url}" target="_blank" rel="noopener noreferrer" style="display:inline-block;padding:12px 18px;border-radius:999px;background:#8b3df4;color:white;text-decoration:none;font-weight:bold">${s.button_text}</a>` : ""}
        </div>
      `).join("");

      document.body.insertBefore(wrap, document.querySelector("#fan-chat-widget"));
    })
    .catch(() => {});
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
    checkForReply();
  });

  document.getElementById("send-chat-button").addEventListener("click", sendFanMessage);
}

function sendFanMessage() {
  const status = document.getElementById("chat-status");

  const body = {
    fan_name: document.getElementById("chat-name").value,
    fan_email: document.getElementById("chat-email").value,
    message: document.getElementById("chat-message").value
  };

  if (!body.message.trim()) {
    status.textContent = "Please type a message.";
    return;
  }

  status.textContent = "Sending...";

  fetch(`${CHAT_API_BASE}/messages/${CHAT_SITE_SLUG}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  })
    .then(res => res.json())
    .then(data => {
      localStorage.setItem(`${CHAT_SITE_SLUG}_last_message_id`, data.message.id);
      status.textContent = "Message sent! Check back here for a reply.";
      document.getElementById("chat-name").value = "";
      document.getElementById("chat-email").value = "";
      document.getElementById("chat-message").value = "";
      checkForReply();
    })
    .catch(() => {
      status.textContent = "Message failed. Try again.";
    });
}

function checkForReply() {
  const messageId = localStorage.getItem(`${CHAT_SITE_SLUG}_last_message_id`);
  const replyBox = document.getElementById("chat-reply");

  if (!messageId || !replyBox) return;

  fetch(`${CHAT_API_BASE}/messages/${CHAT_SITE_SLUG}/${messageId}/public`)
    .then(res => res.json())
    .then(data => {
      if (data.message && data.message.admin_reply) {
        replyBox.innerHTML = `<strong>Band reply:</strong><br>${data.message.admin_reply}`;
      } else {
        replyBox.innerHTML = "No reply yet.";
      }
    })
    .catch(() => {});
}

document.addEventListener("DOMContentLoaded", () => {
  applySiteSettings();
  createChatWidget();
  renderPageSections();
});