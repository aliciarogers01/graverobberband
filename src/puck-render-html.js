function esc(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function attr(value) {
  return esc(value).trim();
}

function hasText(value) {
  return String(value ?? "").trim().length > 0;
}

function textWithBreaks(value) {
  return esc(value).replaceAll("\n", "<br>");
}

function styleObj(styles = {}) {
  return Object.entries(styles)
    .filter(([, value]) => value !== undefined && value !== null && value !== "")
    .map(([key, value]) => `${key.replace(/[A-Z]/g, match => `-${match.toLowerCase()}`)}:${value}`)
    .join(";");
}

function textStyle(props = {}, prefix = "") {
  return {
    fontSize: props[`${prefix}Size`] || "inherit",
    color: props[`${prefix}Color`] || "inherit",
    fontFamily: props[`${prefix}Font`] || "inherit",
    fontWeight: props[`${prefix}Weight`] || "inherit",
    fontStyle: props[`${prefix}Style`] || "inherit",
    textDecoration: props[`${prefix}Decoration`] || "none",
    textTransform: props[`${prefix}Transform`] || "none",
    letterSpacing: props[`${prefix}LetterSpacing`] || "normal",
    lineHeight: props[`${prefix}LineHeight`] || "normal",
    textShadow: props[`${prefix}Shadow`] || "none"
  };
}

function fontImportTag(url) {
  if (!hasText(url)) return "";
  return `<style>@import url('${attr(url)}');</style>`;
}

function normalizePlatform(platform = "custom") {
  return String(platform || "custom").toLowerCase().trim();
}

function socialIcon(platform, customLabel = "") {
  const normalized = normalizePlatform(platform);
  const icon = `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M8 12h8M12 8v8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`;

  const icons = {
    facebook: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.019 4.388 10.994 10.125 11.854v-8.385H7.078v-3.469h3.047V9.431c0-3.007 1.791-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.249h3.328l-.532 3.469h-2.796v8.385C19.612 23.067 24 18.092 24 12.073z"/></svg>`,
    instagram: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3.5A4.5 4.5 0 1112 16a4.5 4.5 0 010-9zm0 2A2.5 2.5 0 1012 14a2.5 2.5 0 000-5zm5.25-3.25a1.25 1.25 0 11-1.25 1.25 1.25 1.25 0 011.25-1.25z"/></svg>`,
    tiktok: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19.589 6.686a4.793 4.793 0 01-3.77-4.187V2h-3.358v13.743a2.89 2.89 0 11-2.89-2.89c.213 0 .421.023.622.067V9.51a6.248 6.248 0 00-.622-.033A6.248 6.248 0 1015.82 15.72V8.687a8.154 8.154 0 004.77 1.539V6.686z"/></svg>`,
    youtube: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 00.5 6.2 31.5 31.5 0 000 12a31.5 31.5 0 00.5 5.8 3 3 0 002.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 002.1-2.1A31.5 31.5 0 0024 12a31.5 31.5 0 00-.5-5.8zM9.6 15.6V8.4L15.8 12l-6.2 3.6z"/></svg>`,
    spotify: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 1.8A10.2 10.2 0 1022.2 12 10.2 10.2 0 0012 1.8zm4.68 14.72a.76.76 0 01-1.05.25 9.58 9.58 0 00-7.28-.78.76.76 0 11-.44-1.46 11.13 11.13 0 018.52.94.76.76 0 01.25 1.05zm1.25-2.77a.9.9 0 01-1.24.3 11.75 11.75 0 00-8.62-.96.9.9 0 11-.52-1.72 13.5 13.5 0 019.96 1.14.9.9 0 01.42 1.24zm.13-2.94a14.15 14.15 0 00-10.4-1.13 1.05 1.05 0 11-.61-2.01 16.3 16.3 0 0112.08 1.32 1.05 1.05 0 11-1.07 1.82z"/></svg>`,
    bandcamp: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7.1 6h14L16.9 18h-14L7.1 6z"/></svg>`,
    soundcloud: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.8 10.1A4.8 4.8 0 0020 19H8.5V7.5a7 7 0 019.3 2.6zM3 13h1v6H3v-6zm2-2h1v8H5v-8zm2 1h1v7H7v-7z"/></svg>`,
    apple: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16.4 2.2c.1 1.1-.4 2.2-1.1 3-.7.8-1.8 1.4-2.8 1.3-.1-1.1.4-2.2 1.1-3 .8-.8 1.9-1.3 2.8-1.3zM20.2 17.1c-.5 1.1-.8 1.6-1.5 2.6-1 1.5-2.4 3.3-4.1 3.3-1.5 0-1.9-1-4-1s-2.6 1-4 1c-1.7 0-3-1.6-4-3.1-2.8-4.2-3.1-9.1-1.4-11.7 1.2-1.8 3-2.8 4.7-2.8 1.8 0 2.9 1 4.3 1 1.4 0 2.3-1 4.3-1 1.5 0 3.2.8 4.3 2.3-3.8 2.1-3.2 7.6.4 9.4z"/></svg>`,
    x: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-4.9-7-5.6 7H3.3l7.3-8.4L2.8 2h6.4l4.4 6.4L18.9 2zm-1.1 17.9h1.7L8.3 4H6.5l11.3 15.9z"/></svg>`,
    twitter: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-4.9-7-5.6 7H3.3l7.3-8.4L2.8 2h6.4l4.4 6.4L18.9 2zm-1.1 17.9h1.7L8.3 4H6.5l11.3 15.9z"/></svg>`,
    threads: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.2 2C6.8 2 3 5.8 3 12s3.8 10 9.3 10c4.7 0 8.2-2.7 8.2-6.5 0-2.5-1.4-4.2-3.8-5 .3-3.2-1.6-5.4-4.8-5.4-2.8 0-4.7 1.5-5.3 4h2.2c.4-1.3 1.5-2 3.1-2 1.8 0 2.8 1 2.9 2.8-.8-.1-1.6-.2-2.6-.2-3.3 0-5.4 1.5-5.4 4 0 2.2 1.8 3.8 4.4 3.8 2.8 0 4.7-1.6 5.3-4.3 1.2.5 1.9 1.3 1.9 2.5 0 2.5-2.4 4.2-6.1 4.2-4.4 0-7.1-3-7.1-7.9s2.7-7.9 7-7.9c3.4 0 5.7 1.7 6.4 4.7h2.2C20.1 4.5 16.9 2 12.2 2zm-.8 13.5c-1.4 0-2.3-.7-2.3-1.8 0-1.3 1.2-2 3.3-2 .9 0 1.8.1 2.6.3-.3 2.2-1.6 3.5-3.6 3.5z"/></svg>`,
    bluesky: icon,
    linkedin: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5A2.5 2.5 0 110 3.5a2.5 2.5 0 014.98 0zM.5 8h4.9v16H.5V8zm7.8 0H13v2.2h.1c.7-1.3 2.4-2.7 4.9-2.7 5.2 0 6.2 3.4 6.2 7.9V24h-4.9v-7.6c0-1.8 0-4.1-2.5-4.1s-2.9 2-2.9 4v7.7H8.3V8z"/></svg>`,
    snapchat: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2c3.1 0 5 2.2 5 5.7v2.1c.4.2.9.3 1.4.3.7 0 1.1.4 1.1.9 0 .7-.8 1.1-1.8 1.5.4 1.2 1.4 2.2 2.9 2.8.5.2.7.6.6 1-.1.5-.6.8-1.5.9-.4 0-.6.2-.8.5-.3.5-.8.7-1.5.5-.8-.2-1.4-.3-2 .1-.8.6-1.7 1.7-3.4 1.7s-2.6-1.1-3.4-1.7c-.6-.4-1.2-.3-2-.1-.7.2-1.2 0-1.5-.5-.2-.3-.4-.5-.8-.5-.9-.1-1.4-.4-1.5-.9-.1-.4.1-.8.6-1 1.5-.6 2.5-1.6 2.9-2.8-1-.4-1.8-.8-1.8-1.5 0-.5.4-.9 1.1-.9.5 0 1-.1 1.4-.3V7.7C7 4.2 8.9 2 12 2z"/></svg>`,
    pinterest: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.1 2C6.6 2 3 5.7 3 10.2c0 2.1 1.1 4.6 2.8 5.4.3.1.5.1.6-.2l.5-2c.1-.3 0-.4-.2-.7-.6-.7-.9-1.5-.9-2.6 0-3.1 2.4-6 6.1-6 3.3 0 5.2 2 5.2 4.8 0 3.6-1.6 6.6-4 6.6-1.3 0-2.2-1.1-1.9-2.4.4-1.6 1.2-3.3 1.2-4.4 0-1-.6-1.9-1.7-1.9-1.3 0-2.4 1.4-2.4 3.3 0 1.2.4 2 .4 2s-1.4 5.9-1.7 6.9c-.5 2.1-.1 4.6 0 4.8.1.1.2.1.3 0 .1-.2 1.8-2.2 2.3-4.2.2-.6.9-3.4.9-3.4.5.9 1.8 1.6 3.2 1.6 4.2 0 7.1-3.9 7.1-9.1C20.8 5 17.4 2 12.1 2z"/></svg>`,
    twitch: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4 2h17v12l-5 5h-4l-3 3H6v-3H2V6l2-4zm2 3v11h4v3l3-3h4l2-2V5H6zm5 3h2v5h-2V8zm5 0h2v5h-2V8z"/></svg>`,
    discord: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19.5 5.2A16 16 0 0015.6 4l-.2.4a14.8 14.8 0 013.4 1.7 12.8 12.8 0 00-10.8 0 14.8 14.8 0 013.4-1.7L11.2 4a16 16 0 00-3.9 1.2C4.8 8.9 4.1 12.5 4.4 16c1.6 1.2 3.1 1.9 4.6 2.3l.9-1.5c-.5-.2-1-.4-1.5-.7l.4-.3a11.5 11.5 0 006.8 0l.4.3c-.5.3-1 .5-1.5.7l.9 1.5c1.5-.4 3-1.1 4.6-2.3.5-4.1-.8-7.6-2.5-10.8zM9.5 14.1c-.9 0-1.6-.8-1.6-1.8s.7-1.8 1.6-1.8 1.6.8 1.6 1.8-.7 1.8-1.6 1.8zm5 0c-.9 0-1.6-.8-1.6-1.8s.7-1.8 1.6-1.8 1.6.8 1.6 1.8-.7 1.8-1.6 1.8z"/></svg>`,
    reddit: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22 12a2.4 2.4 0 00-4.1-1.7 11.6 11.6 0 00-5.1-1.4l.9-4.1 2.9.6a2 2 0 104-.4 2 2 0 00-3.5-1.2l-3.7-.8a.8.8 0 00-.9.6l-1.1 5.2a11.8 11.8 0 00-5.3 1.4A2.4 2.4 0 102.5 13c0 1 .6 1.8 1.4 2.2 0 .2-.1.4-.1.6 0 3.8 3.7 6.8 8.2 6.8s8.2-3 8.2-6.8c0-.2 0-.4-.1-.6A2.4 2.4 0 0022 12zM8.5 14.6a1.4 1.4 0 111.4-1.4 1.4 1.4 0 01-1.4 1.4zm6.9 3.8c-1 .8-2.1 1.1-3.4 1.1s-2.4-.4-3.4-1.1a.7.7 0 11.9-1.1c.7.5 1.5.8 2.5.8s1.8-.3 2.5-.8a.7.7 0 11.9 1.1zm.1-3.8a1.4 1.4 0 111.4-1.4 1.4 1.4 0 01-1.4 1.4z"/></svg>`,
    patreon: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4 3h4v18H4V3zm11 0a6 6 0 110 12 6 6 0 010-12z"/></svg>`,
    venmo: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.5 4.5c.4 6.6-5.6 15.2-10.1 15.2H6.2L4.5 6.2l3.7-.4 1 9.6c1.8-3 3.2-6.8 3-9.5l3.8-.8c.3 2.1-.1 4.2-.9 6.1 1.3-2.1 2-4.5 1.8-6.8h3.6z"/></svg>`,
    cashapp: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.2 2l-.5 2.1c2 .2 3.5.9 4.7 1.9l-1.8 2.5c-1.1-.8-2.3-1.3-3.7-1.3-1.3 0-2.1.5-2.1 1.3 0 .9.8 1.2 2.9 2 3 .9 4.7 2.1 4.7 5 0 2.6-1.7 4.4-4.5 5l-.5 2.5H9.9l.5-2.4a8.6 8.6 0 01-5.1-2.3l2-2.5c1.3 1.1 2.8 1.8 4.5 1.8 1.5 0 2.4-.6 2.4-1.6 0-.9-.7-1.3-2.8-1.9-3.2-.9-4.8-2.2-4.8-4.8 0-2.5 1.7-4.3 4.4-4.9l.5-2.4h1.7z"/></svg>`,
    email: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3 5h18a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V6a1 1 0 011-1zm9 8.2L4.8 7H4v.7l8 6.9 8-6.9V7h-.8L12 13.2z"/></svg>`,
    website: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm6.9 9h-3.2a15.7 15.7 0 00-1.1-5 8.1 8.1 0 014.3 5zM12 4.1c.7 1 1.4 3.4 1.6 6.9h-3.2c.2-3.5.9-5.9 1.6-6.9zM4.1 13h3.2c.1 1.8.5 3.5 1.1 5a8.1 8.1 0 01-4.3-5zm3.2-2H4.1a8.1 8.1 0 014.3-5 15.7 15.7 0 00-1.1 5zM12 19.9c-.7-1-1.4-3.4-1.6-6.9h3.2c-.2 3.5-.9 5.9-1.6 6.9zm3.6-1.9c.6-1.5 1-3.2 1.1-5h3.2a8.1 8.1 0 01-4.3 5z"/></svg>`,
    custom: icon
  };

  return icons[normalized] || icons.custom;
}

function buttonHtml(button = {}) {
  if (!hasText(button.text)) return "";

  const borderWidth = button.borderWidth || "0px";
  const borderColor = button.borderColor || "transparent";

  const style = styleObj({
    background: button.backgroundColor || "transparent",
    color: button.textColor || "inherit",
    fontFamily: button.fontFamily || "inherit",
    fontSize: button.fontSize || "inherit",
    fontWeight: button.fontWeight || "inherit",
    border: `${borderWidth} solid ${borderColor}`,
    boxShadow: button.boxShadow || "none",
    textTransform: button.textTransform || "uppercase",
    borderRadius: button.radius || "0px",
    padding: button.padding || "14px 24px",
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer"
  });

  if (button.buttonType === "dropdown") {
    const menuStyle = styleObj({
      background: button.dropdownBackgroundColor || "rgba(0,0,0,.96)",
      borderColor: button.dropdownBorderColor || "rgba(57,255,20,.55)",
      boxShadow: button.dropdownBoxShadow || "0 0 24px rgba(57,255,20,.35)",
      borderRadius: button.dropdownRadius || "16px",
      padding: button.dropdownPadding || "10px",
      minWidth: button.dropdownMinWidth || "190px"
    });

    const linksHtml = (button.dropdownLinks || [])
      .filter(item => hasText(item.text))
      .map(item => {
        const linkStyle = styleObj({
          background: item.backgroundColor || "transparent",
          color: item.textColor || "#ffffff",
          fontFamily: item.fontFamily || "inherit",
          fontSize: item.fontSize || "14px",
          borderColor: item.borderColor || "transparent",
          boxShadow: item.boxShadow || "none",
          textTransform: item.textTransform || "uppercase",
          borderRadius: item.radius || "10px",
          padding: item.padding || "10px 12px"
        });

        return `<a href="${attr(item.url || "#")}" target="_blank" rel="noopener noreferrer" style="${linkStyle}">${esc(item.text)}</a>`;
      })
      .join("");

    return `<div class="puck-dropdown"><button class="puck-btn puck-dropdown-trigger" type="button" style="${style}">${esc(button.text)}</button><div class="puck-dropdown-menu" style="${menuStyle}">${linksHtml}</div></div>`;
  }

  return `<a class="puck-btn" href="${attr(button.url || "#")}" style="${style}">${esc(button.text)}</a>`;
}

export function puckPageCss() {
  return `
#editable-page-root .puck-btn,
#editable-page-root .puck-btn:hover,
#editable-page-root .puck-btn:focus{
  border-style:solid!important;
}
#editable-page-root .puck-section{width:100%;box-sizing:border-box;}
#editable-page-root .puck-inner{max-width:var(--max-width,1100px);margin:0 auto;box-sizing:border-box;}
#editable-page-root .puck-flex{display:flex;gap:var(--gap,40px);align-items:center;justify-content:center;}
#editable-page-root .layout-center{flex-direction:column;text-align:center;}
#editable-page-root .layout-text-left{flex-direction:row;text-align:left;}
#editable-page-root .layout-text-right{flex-direction:row-reverse;text-align:left;}
#editable-page-root .layout-image-top{flex-direction:column-reverse;text-align:center;}
#editable-page-root .puck-text{max-width:700px;}
#editable-page-root .puck-title{
  font-family:'Playfair Display',serif;
  margin:0 0 14px;
  line-height:1.05;
  text-decoration:none;
  border:0;
}
#editable-page-root .puck-subtitle{margin:0 0 14px;color:var(--amber);font-style:italic;}
#editable-page-root .puck-body{line-height:1.65;margin:0 0 20px;}
#editable-page-root .puck-image{display:block;max-width:100%;height:auto;object-fit:cover;}
#editable-page-root .puck-buttons{display:flex;gap:14px;flex-wrap:wrap;margin-top:22px;justify-content:center;}
#editable-page-root .puck-site-header,
#editable-page-root .puck-header-nav,
#editable-page-root .puck-buttons,
#editable-page-root .puck-dropdown{
  overflow:visible!important;
}

#editable-page-root .puck-site-header{
  z-index:9999;
}

#editable-page-root .puck-dropdown{
  position:relative;
  display:inline-flex;
  z-index:10;
}

#editable-page-root .puck-dropdown:hover,
#editable-page-root .puck-dropdown:focus-within{
  z-index:1000000;
}

#editable-page-root .puck-dropdown::after{
  content:"";
  position:absolute;
  left:0;
  right:0;
  top:100%;
  height:14px;
}

#editable-page-root .puck-dropdown-menu{
  display:none;
  position:absolute;
  top:calc(100% + 10px);
  left:50%;
  transform:translateX(-50%);
  min-width:190px;
  padding:10px;
  background:rgba(0,0,0,.96);
  border:1px solid rgba(57,255,20,.55);
  border-radius:16px;
  box-shadow:0 0 24px rgba(57,255,20,.35);
  z-index:1000001;
}

#editable-page-root .puck-dropdown:hover .puck-dropdown-menu,
#editable-page-root .puck-dropdown:focus-within .puck-dropdown-menu{
  display:grid;
  gap:6px;
}

#editable-page-root .puck-dropdown-menu a{
  display:block;
  color:#ffffff;
  text-decoration:none;
  font-weight:700;
  font-size:14px;
  padding:10px 12px;
  border-radius:10px;
  text-transform:uppercase;
}

#editable-page-root .puck-dropdown-menu a:hover{
  background:rgba(57,255,20,.16);
}

#editable-page-root .puck-buttons .primary-btn:hover,#editable-page-root .puck-buttons .secondary-btn:hover{box-shadow:inherit;}
#editable-page-root .layout-text-left .puck-buttons,#editable-page-root .layout-text-right .puck-buttons{justify-content:flex-start;}
#editable-page-root .puck-social-links{
  display:flex;
  gap:14px;
  justify-content:center;
  align-items:center;
  flex-wrap:wrap;
}

#editable-page-root .puck-social-links .social-link{
  width:44px!important;
  height:44px!important;
  min-width:44px!important;
  min-height:44px!important;
  max-width:44px!important;
  max-height:44px!important;
  padding:0!important;
  display:inline-flex!important;
  align-items:center!important;
  justify-content:center!important;
  border-style:solid!important;
  border-width:1px!important;
  border-radius:999px!important;
  box-sizing:border-box!important;
  text-decoration:none!important;
}

#editable-page-root .puck-social-links .social-link svg{
  display:block!important;
  width:22px!important;
  height:22px!important;
  min-width:22px!important;
  min-height:22px!important;
  max-width:22px!important;
  max-height:22px!important;
  fill:currentColor!important;
}

#editable-page-root .puck-social-letter{
  display:inline-flex!important;
  align-items:center!important;
  justify-content:center!important;
  font-weight:900;
  font-size:16px;
  line-height:1;
  letter-spacing:.02em;
}
#editable-page-root .puck-columns{display:grid;grid-template-columns:repeat(var(--cols,2),1fr);gap:var(--gap,24px);}
#editable-page-root .puck-card{padding:24px;border:1px solid rgba(255,255,255,.12);border-radius:12px;background:rgba(255,255,255,.03);}
#editable-page-root{
  width:100%!important;
  max-width:100%!important;
  overflow-x:visible!important;
}

#editable-page-root .puck-spacer{width:100%;}

#editable-page-root hr,
#editable-page-root .section-divider,
#editable-page-root .divider{
  display:none!important;
}

#editable-page-root .puck-section,
#editable-page-root .puck-spacer,
#editable-page-root .puck-flex,
#editable-page-root .puck-inner,
#editable-page-root .puck-text,
#editable-page-root .puck-title,
#editable-page-root .band-name,
#editable-page-root .tagline,
#editable-page-root .description{
  border:0!important;
  outline:0!important;
  text-decoration:none!important;
}

#editable-page-root .puck-site-header{
  display:grid;
  grid-template-columns:minmax(0,1fr) auto minmax(0,1fr);
  align-items:center;
  gap:20px;
  box-sizing:border-box;
  position:relative;
}

#editable-page-root .puck-site-header,
#editable-page-root .puck-site-header.is-full-width,
#editable-page-root .puck-song-scroll,
#editable-page-root .puck-song-scroll.is-full-width,
#editable-page-root .social-section,
#editable-page-root .social-section.is-full-width{
  width:100%!important;
  max-width:100%!important;
  margin-left:0!important;
  margin-right:0!important;
  left:auto!important;
  right:auto!important;
  transform:none!important;
}

#editable-page-root .puck-header-left,
#editable-page-root .puck-header-right{
  display:flex;
  align-items:center;
  gap:14px;
  min-width:0;
}

#editable-page-root .puck-header-left{
  justify-content:flex-start;
}

#editable-page-root .puck-header-right{
  justify-content:flex-end;
}

#editable-page-root .puck-header-nav{
  display:flex;
  align-items:center;
  gap:12px;
  flex-wrap:wrap;
}

#editable-page-root .puck-header-nav.nav-left{
  grid-column:1;
  justify-self:start;
}

#editable-page-root .puck-header-nav.nav-center{
  grid-column:2;
  justify-self:center;
}

#editable-page-root .puck-header-nav.nav-right{
  grid-column:2;
  justify-self:center;
}

#editable-page-root .puck-header-back{
  color:var(--cream,#f5f0e6);
  text-decoration:none;
  font-weight:700;
}

#editable-page-root .puck-song-scroll{
  width:100%;
  position:relative;
  overflow:hidden;
  box-sizing:border-box;
  padding:14px 0;
}

#editable-page-root .puck-gallery-grid{
  display:grid;
  grid-template-columns:repeat(var(--cols,3),1fr);
  gap:var(--gap,18px);
}

#editable-page-root .puck-gallery-item{
  margin:0;
  border-radius:16px;
  overflow:hidden;
  background:rgba(255,255,255,.04);
  border:1px solid rgba(255,255,255,.12);
}

#editable-page-root .puck-gallery-item img{
  display:block;
  width:100%;
  height:260px;
  object-fit:cover;
}

#editable-page-root .puck-gallery-open{
  display:block;
  cursor:zoom-in;
}

#editable-page-root .puck-gallery-item{
  transition:transform .2s ease, box-shadow .2s ease;
}

#editable-page-root .puck-gallery-item:hover{
  transform:scale(1.04);
  box-shadow:0 0 34px rgba(57,255,20,.35);
}

#editable-page-root .puck-gallery-modal{
  display:none;
  position:fixed;
  inset:0;
  z-index:999999;
  align-items:center;
  justify-content:center;
  padding:24px;
}

#editable-page-root .puck-gallery-modal:target{
  display:flex;
}

#editable-page-root .puck-gallery-modal-backdrop{
  position:absolute;
  inset:0;
  background:rgba(0,0,0,.88);
}

#editable-page-root .puck-gallery-modal-content{
  position:relative;
  z-index:1;
  max-width:min(1100px, 94vw);
  max-height:92vh;
  text-align:center;
}

#editable-page-root .puck-gallery-modal-content img{
  display:block!important;
  width:auto!important;
  height:auto!important;
  max-width:min(92vw,1100px)!important;
  max-height:82vh!important;
  object-fit:contain!important;
  margin:0 auto!important;
  border-radius:16px!important;
  box-shadow:0 0 50px rgba(57,255,20,.28)!important;
}

#editable-page-root .puck-gallery-close{
  position:absolute;
  top:-18px;
  right:-18px;
  width:42px;
  height:42px;
  border-radius:999px;
  background:#000;
  color:#fff;
  border:1px solid rgba(57,255,20,.65);
  display:flex;
  align-items:center;
  justify-content:center;
  text-decoration:none;
  font-size:30px;
  line-height:1;
  box-shadow:0 0 22px rgba(57,255,20,.35);
}

#editable-page-root .puck-gallery-modal-content p{
  color:#fff;
  margin:12px 0 0;
}

#editable-page-root .puck-gallery-item figcaption{
  padding:10px 12px;
  font-size:14px;
  color:inherit;
}

#editable-page-root .songs-scroll-container{
  width:100%;
  overflow:hidden;
  position:relative;
}

#editable-page-root .songs-scroll-container::before,
#editable-page-root .songs-scroll-container::after{
  content:'';
  position:absolute;
  top:0;
  width:100px;
  height:100%;
  z-index:10;
  pointer-events:none;
}

#editable-page-root .songs-scroll-container::before{
  left:0;
  background:linear-gradient(to right,var(--blue-deep) 0%,transparent 100%);
}

#editable-page-root .songs-scroll-container::after{
  right:0;
  background:linear-gradient(to left,var(--blue-deep) 0%,transparent 100%);
}

#editable-page-root .puck-song-track{
  display:flex;
  align-items:center;
  white-space:nowrap;
  animation:scrollSongs 50s linear infinite;
  width:max-content;
  will-change:transform;
}

#editable-page-root .puck-song-track span{
  font-size:.9rem;
  font-weight:400;
  color:var(--cream);
  letter-spacing:.03em;
  padding:8px 20px;
  margin:0 6px;
  background:transparent;
  border:1px solid rgba(212,162,76,.25);
  border-radius:25px;
  transition:all .3s ease;
  white-space:nowrap;
  display:inline-block;
  flex-shrink:0;
}

#editable-page-root .puck-song-track span:hover{
  background:rgba(212,162,76,.1);
  border-color:var(--amber);
  color:var(--amber);
}

@keyframes scrollSongs{
  0%{transform:translateX(0);}
  100%{transform:translateX(-50%);}
}

#editable-page-root .puck-header-logo{
  display:block!important;
  width:100%!important;
  height:100%!important;
  object-fit:contain!important;
  object-position:center!important;
}

#editable-page-root .puck-header-logo-link{
  display:flex!important;
  align-items:center!important;
  justify-content:center!important;
  width:var(--logo-size,45px)!important;
  height:var(--logo-size,45px)!important;
}

#editable-page-root .puck-header-logo-link.logo-left{
  grid-column:1!important;
  justify-self:start!important;
}

#editable-page-root .puck-header-logo-link.logo-right{
  grid-column:3!important;
  justify-self:end!important;
}

#editable-page-root #upcoming-shows,
#editable-page-root #past-shows {
  display: grid;
  gap: 18px;
  width: 100%;
  max-width: 900px;
  margin: 24px auto;
}

#editable-page-root .show-card {
  display: grid;
  grid-template-columns: 180px 1fr;
  gap: 18px;
  align-items: center;
  padding: 18px;
  border-radius: 18px;
  background: rgba(0,0,0,.32);
  border: 1px solid rgba(0,255,4,.32);
  box-shadow: 0 0 22px rgba(0,255,4,.14);
}

#editable-page-root .show-card > .show-card-image,
#editable-page-root img.show-card-image {
  display:block!important;
  width:180px!important;
  height:180px!important;
  min-width:180px!important;
  min-height:180px!important;
  max-width:180px!important;
  max-height:180px!important;
  object-fit:contain!important;
  object-position:center!important;
  border-radius:14px!important;
  background:rgba(0,0,0,.35)!important;
  border:1px solid rgba(255,255,255,.16)!important;
  box-sizing:border-box!important;
}

#editable-page-root .show-card-content {
  text-align: left;
}

#editable-page-root .show-card-content h3 {
  margin: 6px 0;
}

#editable-page-root .show-date {
  color: #00ff04;
}

#editable-page-root .show-modal{
  display:none;
  position:fixed;
  inset:0;
  z-index:999999;
  align-items:center;
  justify-content:center;
  padding:24px;
}

#editable-page-root .show-modal:target,
#editable-page-root .show-modal.is-open{
  display:flex;
}

#editable-page-root .show-modal-backdrop{
  position:absolute;
  inset:0;
  background:rgba(0,0,0,.88);
}

#editable-page-root .show-modal-content{
  position:relative;
  z-index:1;
  width:min(92vw,900px);
  max-height:90vh;
  overflow:auto;
  padding:24px;
  border-radius:22px;
  background:#050505;
  border:1px solid rgba(0,255,4,.35);
  box-shadow:0 0 40px rgba(0,255,4,.2);
}

#editable-page-root .show-modal-content img{
  display:block!important;
  width:auto!important;
  height:auto!important;
  max-width:320px!important;
  max-height:320px!important;
  object-fit:contain!important;
  margin:18px auto!important;
  border-radius:16px!important;
}

#editable-page-root .show-modal-close{
  position:absolute;
  top:14px;
  right:14px;
  width:42px;
  height:42px;
  border-radius:999px;
  background:#000;
  color:#fff;
  border:1px solid rgba(0,255,4,.45);
  display:flex;
  align-items:center;
  justify-content:center;
  text-decoration:none;
  font-size:28px;
}

@media(max-width: 700px) {
  #editable-page-root .show-card {
    grid-template-columns: 1fr;
    text-align: center;
  }

  #editable-page-root .show-card-image {
    margin: 0 auto;
  }

  #editable-page-root .show-card-content {
    text-align: center;
  }
}

@media(max-width:800px){
  html,
  body{
    width:100%!important;
    max-width:100%!important;
    overflow-x:hidden!important;
    margin:0!important;
    padding:0!important;
  }

  body{
    position:relative!important;
  }

  #editable-page-root,
  #editable-page-root *{
    box-sizing:border-box!important;
    font-family:inherit!important;
  }

  #editable-page-root{
    width:100vw!important;
    max-width:100vw!important;
    min-width:100vw!important;
    overflow-x:hidden!important;
    margin:0!important;
    padding:0!important;
  }

  #editable-page-root section,
  #editable-page-root .puck-section,
  #editable-page-root .puck-inner,
  #editable-page-root .puck-flex,
  #editable-page-root .puck-columns,
  #editable-page-root .puck-card,
  #editable-page-root .puck-text{
    width:100%!important;
    max-width:100%!important;
    min-width:0!important;
    margin-left:0!important;
    margin-right:0!important;
  }

  #editable-page-root .puck-section{
    padding-left:14px!important;
    padding-right:14px!important;
  }

  #editable-page-root .puck-flex{
    display:flex!important;
    flex-direction:column!important;
    align-items:center!important;
    justify-content:center!important;
    text-align:center!important;
    gap:20px!important;
  }

  #editable-page-root .layout-text-left .puck-buttons,
  #editable-page-root .layout-text-right .puck-buttons{
    justify-content:center!important;
  }

  #editable-page-root .puck-columns{
    display:grid!important;
    grid-template-columns:1fr!important;
    gap:20px!important;
  }

#editable-page-root img:not(.show-card-image),
#editable-page-root video,
#editable-page-root iframe,
#editable-page-root .puck-image{
  display:block!important;
  max-width:100%!important;
  height:auto!important;
}

#editable-page-root video,
#editable-page-root iframe{
  width:100%!important;
}

#editable-page-root .puck-mobile-sized-image{
  display:block!important;
  width:var(--mobile-image-width, 70vw)!important;
  max-width:var(--mobile-image-width, 70vw)!important;
  height:auto!important;
  margin-left:auto!important;
  margin-right:auto!important;
  object-fit:contain!important;
}

#editable-page-root img.show-card-image{
  width:180px!important;
  height:180px!important;
  max-width:180px!important;
  max-height:180px!important;
}

  #editable-page-root .puck-site-header{
    display:flex!important;
    flex-direction:column!important;
    align-items:center!important;
    justify-content:center!important;
    width:100%!important;
    max-width:100%!important;
    padding:14px!important;
    margin:0!important;
    gap:12px!important;
    text-align:center!important;
  }

  #editable-page-root .puck-site-header.is-full-width,
  #editable-page-root .puck-song-scroll.is-full-width{
    width:100%!important;
    max-width:100%!important;
    margin-left:0!important;
    margin-right:0!important;
  }

  #editable-page-root .puck-header-left,
  #editable-page-root .puck-header-right,
  #editable-page-root .puck-header-nav{
    width:100%!important;
    max-width:100%!important;
    display:flex!important;
    justify-content:center!important;
    flex-wrap:wrap!important;
    gap:10px!important;
  }

  #editable-page-root .puck-btn,
  #editable-page-root button,
  #editable-page-root a{
    max-width:100%!important;
    white-space:normal!important;
    text-align:center!important;
  }

  #editable-page-root .social-link,
  #editable-page-root .puck-social-links .social-link{
    width:50px!important;
    max-width:50px!important;
    min-width:50px!important;
    height:50px!important;
    min-height:50px!important;
    max-height:50px!important;
    display:inline-flex!important;
    align-items:center!important;
    justify-content:center!important;
    border-radius:999px!important;
    flex:0 0 50px!important;
  }

  #editable-page-root .social-link svg,
  #editable-page-root .puck-social-links .social-link svg{
    display:block!important;
    width:24px!important;
    max-width:24px!important;
    min-width:24px!important;
    height:24px!important;
    max-height:24px!important;
    min-height:24px!important;
    fill:currentColor!important;
  }

  #editable-page-root .puck-social-letter{
    display:inline-flex!important;
    align-items:center!important;
    justify-content:center!important;
    width:auto!important;
    max-width:none!important;
    font-size:16px!important;
    line-height:1!important;
  }

#editable-page-root .show-card-clickable {
  color: inherit;
  text-decoration: none;
  cursor: pointer;
}

#editable-page-root .show-modal{
  display:none;
  position:fixed;
  inset:0;
  z-index:999999;
  align-items:center;
  justify-content:center;
  padding:24px;
}

#editable-page-root .show-modal:target,
#editable-page-root .show-modal.is-open{
  display:flex;
}

#editable-page-root .show-modal-backdrop{
  position:absolute;
  inset:0;
  background:rgba(0,0,0,.88);
}

#editable-page-root .show-modal-content{
  position:relative;
  z-index:1;
  width:min(92vw,900px);
  max-height:90vh;
  overflow:auto;
  padding:24px;
  border-radius:22px;
  background:#050505;
  border:1px solid rgba(0,255,4,.45);
  box-shadow:0 0 50px rgba(187,0,255,.38);
  color:#ffffff;
}

#editable-page-root .show-modal-content img{
  display:block!important;
  width:auto!important;
  height:auto!important;
  max-width:320px!important;
  max-height:320px!important;
  object-fit:contain!important;
  margin:18px auto!important;
  border-radius:16px!important;
}

#editable-page-root .show-modal-close{
  position:absolute;
  top:14px;
  right:14px;
  width:42px;
  height:42px;
  border-radius:999px;
  background:#000;
  color:#fff;
  border:1px solid rgba(0,255,4,.65);
  box-shadow:0 0 24px rgba(187,0,255,.45);
  display:flex;
  align-items:center;
  justify-content:center;
  text-decoration:none;
  font-size:28px;
}

}

#editable-page-root .show-card-clickable {
  color: inherit;
  text-decoration: none;
  cursor: pointer;
}

#editable-page-root .show-modal{
  display:none;
  position:fixed;
  inset:0;
  z-index:999999;
  align-items:center;
  justify-content:center;
  padding:24px;
}

#editable-page-root .show-modal.is-open{
  display:flex;
}

#editable-page-root .show-modal-backdrop{
  position:absolute;
  inset:0;
  background:rgba(0,0,0,.88);
}

#editable-page-root .show-modal-content{
  position:relative;
  z-index:1;
  width:min(92vw,900px);
  max-height:90vh;
  overflow:auto;
  padding:24px;
  border-radius:22px;
  background:#050505;
  border:1px solid rgba(0,255,4,.45);
  box-shadow:0 0 50px rgba(187,0,255,.38);
  color:#ffffff;
}

#editable-page-root .show-modal-content img{
  display:block!important;
  width:auto!important;
  height:auto!important;
  max-width:320px!important;
  max-height:320px!important;
  object-fit:contain!important;
  margin:18px auto!important;
  border-radius:16px!important;
}

#editable-page-root .show-modal-close{
  position:absolute;
  top:14px;
  right:14px;
  width:42px;
  height:42px;
  border-radius:999px;
  background:#000;
  color:#fff;
  border:1px solid rgba(0,255,4,.65);
  box-shadow:0 0 24px rgba(187,0,255,.45);
  display:flex;
  align-items:center;
  justify-content:center;
  text-decoration:none;
  font-size:28px;
}
`;
}

function renderFontLoader(props) {
  return fontImportTag(props.fontUrl);
}

function renderHeaderNav(props) {
  const buttonsHtml = (props.buttons || []).map(buttonHtml).join("");
  return `<header class="puck-site-header ${props.headerPosition === "full" ? "is-full-width" : ""}" style="${styleObj({
    background: props.backgroundColor || "rgba(0,0,0,.72)",
borderBottom: props.lineColor ? `1px solid ${props.lineColor}` : "none",
    boxShadow: props.lineShadow || "none",
    width: props.width || "100%",
    maxWidth: props.maxWidth || "none",
    margin: props.margin || "0",
    padding: props.padding || "22px 40px"
  })}">
    <div class="puck-header-left">
      ${props.logoUrl && props.logoPlacement !== "right" ? `<a class="puck-header-logo-link logo-left" href="index.html" style="--logo-size:${attr(props.logoSize || "45px")}"><img class="puck-header-logo" src="${attr(props.logoUrl)}" alt="${attr(props.logoAlt || "Logo")}"></a>` : ""}
      ${props.showBack !== "hide" ? `<a class="puck-header-back" href="${attr(props.backUrl || "index.html")}">${esc(props.backText || "Back")}</a>` : ""}
    </div>
    <nav class="puck-header-nav nav-${attr(props.navPlacement || "right")}">${buttonsHtml}</nav>
    <div class="puck-header-right">
      ${props.logoUrl && props.logoPlacement === "right" ? `<a class="puck-header-logo-link logo-right" href="index.html" style="--logo-size:${attr(props.logoSize || "45px")}"><img class="puck-header-logo" src="${attr(props.logoUrl)}" alt="${attr(props.logoAlt || "Logo")}"></a>` : ""}
    </div>
  </header>`;
}

function renderSongScroll(props) {
  const songItems = props.items || [];
  const songs = [...songItems, ...songItems].map(item => `<span class="song-name" style="${styleObj({
    color: props.textColor || "var(--cream)",
    textShadow: props.textShadow || "none",
    borderColor: props.buttonBorderColor || "rgba(212, 162, 76, 0.25)"
  })}">${esc(item.text)}</span>`).join("");

return `<section class="songs-section puck-song-scroll ${props.stretchMode === "full" ? "is-full-width" : ""}" aria-label="Songs We Play" style="${styleObj({
background: props.backgroundColor || "linear-gradient(90deg, var(--blue-deep) 0%, var(--charcoal-light) 50%, var(--blue-deep) 100%)",
borderBottom: props.lineColor ? `1px solid ${props.lineColor}` : "none",
width: props.width || "100%",
maxWidth: props.maxWidth || "none",
margin: props.margin || "0"
  })}"><div class="songs-scroll-container"><div class="songs-scroll puck-song-track">${songs}</div></div></section>`;
}

function renderHero(props) {
  const sectionStyle = styleObj({ background: props.backgroundColor || "transparent", color: props.textColor || "inherit", padding: `${props.paddingY || 70}px ${props.paddingX || 24}px` });
  const imageStyle = styleObj({ width: props.imageWidth || "320px", "--mobile-image-width": props.mobileImageWidth || props.imageWidth || "320px", borderRadius: props.imageRadius || "8px", boxShadow: props.imageShadow || "none" });
  const titleHtml = hasText(props.title) ? `<h1 class="band-name puck-title" style="${styleObj(textStyle(props, "title"))}">${esc(props.title)}</h1>` : "";
  const subtitleHtml = hasText(props.subtitle) ? `<p class="tagline puck-subtitle" style="${styleObj(textStyle(props, "subtitle"))}">${esc(props.subtitle)}</p>` : "";
  const bodyHtml = hasText(props.body) ? `<p class="description puck-body" style="${styleObj(textStyle(props, "body"))}">${textWithBreaks(props.body)}</p>` : "";
  const buttonsHtml = (props.buttons || []).map(buttonHtml).join("");
  const textHtml = titleHtml || subtitleHtml || bodyHtml || buttonsHtml ? `<div class="puck-text">${titleHtml}${subtitleHtml}${bodyHtml}${buttonsHtml ? `<div class="puck-buttons">${buttonsHtml}</div>` : ""}</div>` : "";
  const imageHtml = props.imageUrl ? `<img class="puck-image puck-mobile-sized-image" src="${attr(props.imageUrl)}" alt="${attr(props.imageAlt || props.title || "Image")}" style="${imageStyle}">` : "";
  return `${fontImportTag(props.customFontUrl)}<section class="puck-section" style="${sectionStyle}"><div class="puck-inner puck-flex layout-${attr(props.layout || "text-left")}" style="--gap:${Number(props.gap || 50)}px;--max-width:${attr(props.maxWidth || "1100px")}">${textHtml}${imageHtml}</div></section>`;
}

function renderText(props) {
  const align = props.align || "center";
  const sectionStyle = styleObj({ background: props.backgroundColor || "transparent", color: props.textColor || "inherit", padding: `${props.paddingY || 50}px ${props.paddingX || 24}px`, textAlign: align });
  const eyebrowHtml = hasText(props.eyebrow) ? `<p class="teaser" style="${styleObj(textStyle(props, "eyebrow"))}">${esc(props.eyebrow)}</p>` : "";
  const titleHtml = hasText(props.title) ? `<h2 class="puck-title" style="${styleObj(textStyle(props, "title"))}">${esc(props.title)}</h2>` : "";
  const bodyHtml = hasText(props.body) ? `<p class="puck-body" style="${styleObj(textStyle(props, "body"))}">${textWithBreaks(props.body)}</p>` : "";
  const buttonsHtml = (props.buttons || []).map(buttonHtml).join("");
  return `${fontImportTag(props.customFontUrl)}<section class="puck-section" style="${sectionStyle}"><div class="puck-inner puck-text" style="max-width:${attr(props.maxWidth || "850px")}">${eyebrowHtml}${titleHtml}${bodyHtml}${buttonsHtml ? `<div class="puck-buttons">${buttonsHtml}</div>` : ""}</div></section>`;
}

function renderImage(props) {
  const sectionStyle = styleObj({ background: props.backgroundColor || "transparent", padding: `${props.paddingY || 40}px ${props.paddingX || 24}px`, textAlign: props.align || "center" });
  const imageStyle = styleObj({ width: props.width || "900px", "--mobile-image-width": props.mobileWidth || props.width || "900px", borderRadius: props.radius || "8px", boxShadow: props.shadow || "none" });
  const titleHtml = hasText(props.title) ? `<h2 class="puck-title" style="${styleObj(textStyle(props, "title"))}">${esc(props.title)}</h2>` : "";
  const imageHtml = props.imageUrl ? `<img class="puck-image puck-mobile-sized-image" src="${attr(props.imageUrl)}" alt="${attr(props.imageAlt || props.title || "Image")}" style="${imageStyle}">` : "";
  return `${fontImportTag(props.customFontUrl)}<section class="puck-section" style="${sectionStyle}"><div class="puck-inner" style="max-width:${attr(props.maxWidth || "1100px")}">${titleHtml}${imageHtml}</div></section>`;
}

function renderButtons(props) {
  const sectionStyle = styleObj({ background: props.backgroundColor || "transparent", color: props.textColor || "inherit", padding: `${props.paddingY || 50}px ${props.paddingX || 24}px`, textAlign: "center" });
  const buttons = (props.buttons || []).map(buttonHtml).join("");
  if (!buttons) return "";
  return `${fontImportTag(props.customFontUrl)}<section class="puck-section" style="${sectionStyle}"><div class="puck-inner"><div class="puck-buttons">${buttons}</div></div></section>`;
}

function renderSocial(props) {
  const sectionStyle = styleObj({ background: props.backgroundColor || "transparent", color: props.textColor || "inherit", padding: `${props.paddingY || 60}px ${props.paddingX || 24}px`, textAlign: "center" });
  const links = props.links || [];
  const titleHtml = hasText(props.title) ? `<p class="teaser" style="${styleObj({ color: props.titleColor || "inherit", fontFamily: props.titleFont || "inherit", fontSize: props.titleSize || "inherit", fontWeight: props.titleWeight || "inherit" })}">${esc(props.title)}</p>` : "";
  const linkHtml = links
    .filter(link => hasText(link.url))
    .map(link => `<a class="social-link" href="${attr(link.url)}" target="_blank" rel="noopener noreferrer" title="${attr(link.label || link.platform)}" style="${styleObj({ background: link.backgroundColor || "rgba(255,255,255,.03)", color: link.iconColor || "inherit", borderColor: link.borderColor || "rgba(255,255,255,.18)" })}">${socialIcon(link.platform, link.label)}</a>`)
    .join("");
  if (!titleHtml && !linkHtml) return "";
  return `<footer class="puck-section social-section is-full-width" style="${sectionStyle}"><div class="puck-inner">${titleHtml}${linkHtml ? `<nav class="puck-social-links social-links">${linkHtml}</nav>` : ""}</div></footer>`;
}

function renderGalleryGrid(props) {
  const sectionStyle = styleObj({
    background: props.backgroundColor || "transparent",
    color: props.textColor || "inherit",
    padding: `${props.paddingY || 40}px ${props.paddingX || 24}px`,
    textAlign: "center"
  });

  const titleHtml = hasText(props.title)
    ? `<h2 class="puck-title" style="${styleObj({
        color: props.titleColor || "inherit",
        fontFamily: props.titleFont || "inherit",
        fontSize: props.titleSize || "2.5rem"
      })}">${esc(props.title)}</h2>`
    : "";

  const imagesHtml = (props.images || [])
    .filter(image => hasText(image.imageUrl))
    .map((image, index) => {
      const modalId = `gallery-modal-${index}`;
      return `
        <figure class="puck-gallery-item">
          <a href="#${modalId}" class="puck-gallery-open">
            <img src="${attr(image.imageUrl)}" alt="${attr(image.imageAlt || "Gallery image")}">
          </a>
          ${hasText(image.caption) ? `<figcaption>${esc(image.caption)}</figcaption>` : ""}
        </figure>

        <div id="${modalId}" class="puck-gallery-modal">
          <a href="#" class="puck-gallery-modal-backdrop" aria-label="Close gallery image"></a>
          <div class="puck-gallery-modal-content">
            <a href="#" class="puck-gallery-close" aria-label="Close gallery image">×</a>
            <img src="${attr(image.imageUrl)}" alt="${attr(image.imageAlt || "Gallery image")}">
            ${hasText(image.caption) ? `<p>${esc(image.caption)}</p>` : ""}
          </div>
        </div>
      `;
    })
    .join("");

  return `<section class="puck-section" style="${sectionStyle}"><div class="puck-inner">${titleHtml}<div class="puck-gallery-grid" style="--cols:${Number(props.columns || 3)};--gap:${Number(props.gap || 18)}px">${imagesHtml}</div></div></section>`;
}

function renderSpacer(props) {
  return `<div class="puck-spacer" style="height:${Number(props.height || 40)}px;background:${attr(props.backgroundColor || "transparent")}"></div>`;
}

function renderColumns(props) {
  const sectionStyle = styleObj({ background: props.backgroundColor || "transparent", color: props.textColor || "inherit", padding: `${props.paddingY || 50}px ${props.paddingX || 24}px` });
  const cards = props.items || [];
  const cardsHtml = cards.map(card => {
    const imageHtml = card.imageUrl ? `<img class="puck-image" src="${attr(card.imageUrl)}" alt="${attr(card.title || "Column image")}" style="width:100%;border-radius:${attr(props.imageRadius || "8px")};margin-bottom:16px;">` : "";
    const titleHtml = hasText(card.title) ? `<h3 style="${styleObj({ color: card.titleColor || "inherit", fontFamily: card.titleFont || "inherit", fontSize: card.titleSize || "inherit", fontWeight: card.titleWeight || "inherit" })}">${esc(card.title)}</h3>` : "";
    const bodyHtml = hasText(card.body) ? `<p style="${styleObj({ color: card.bodyColor || "inherit", fontFamily: card.bodyFont || "inherit", fontSize: card.bodySize || "inherit", fontWeight: card.bodyWeight || "inherit" })}">${textWithBreaks(card.body)}</p>` : "";
    const button = buttonHtml({ text: card.buttonText, url: card.buttonUrl, backgroundColor: card.buttonBackgroundColor, textColor: card.buttonTextColor, fontFamily: card.buttonFont, fontSize: card.buttonFontSize, borderWidth: card.buttonBorderWidth, borderColor: card.buttonBorderColor, radius: card.buttonRadius, boxShadow: card.buttonBoxShadow, textTransform: card.buttonTextTransform }, 1);
    return imageHtml || titleHtml || bodyHtml || button ? `<div class="puck-card">${imageHtml}${titleHtml}${bodyHtml}${button}</div>` : "";
  }).join("");
  if (!cardsHtml) return "";
  return `${fontImportTag(props.customFontUrl)}<section class="puck-section" style="${sectionStyle}"><div class="puck-inner"><div class="puck-columns" style="--cols:${Number(props.columns || 2)};--gap:${Number(props.gap || 24)}px">${cardsHtml}</div></div></section>`;
}

function renderEmbed(props) {
  const sectionStyle = styleObj({ padding: `${props.paddingY || 30}px ${props.paddingX || 24}px`, background: props.backgroundColor || "transparent" });
  return `<section class="puck-section" style="${sectionStyle}"><div class="puck-inner">${props.html || ""}</div></section>`;
}

const renderers = {
     GalleryGrid: renderGalleryGrid,
  GraveRobberHero: renderHero,
  GraveRobberLogo: renderImage,
  GraveRobberSocial: renderSocial,
  HeaderNav: renderHeaderNav,
  SongScroll: renderSongScroll,
  FontLoader: renderFontLoader,
  Hero: renderHero,
  TextBlock: renderText,
  ImageBlock: renderImage,
  ButtonRow: renderButtons,
  SocialIcons: renderSocial,
  Spacer: renderSpacer,
  Columns: renderColumns,
  Embed: renderEmbed
};

export function renderPuckHtml(data) {
  const content = data?.content || [];
  return content.map(item => {
    const render = renderers[item.type];
    return render ? render(item.props || {}) : "";
  }).join("\n");
}