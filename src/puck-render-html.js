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
  const icons = {
    facebook: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.019 4.388 10.994 10.125 11.854v-8.385H7.078v-3.469h3.047V9.431c0-3.007 1.791-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.249h3.328l-.532 3.469h-2.796v8.385C19.612 23.067 24 18.092 24 12.073z"/></svg>`,
    instagram: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm11.5 1a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z"/></svg>`,
    tiktok: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.589 6.686a4.793 4.793 0 01-3.77-4.187V2h-3.358v13.743a2.89 2.89 0 11-2.89-2.89c.213 0 .421.023.622.067V9.51a6.248 6.248 0 00-.622-.033A6.248 6.248 0 1015.82 15.72V8.687a8.154 8.154 0 004.77 1.539V6.686z"/></svg>`,
    youtube: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 00.5 6.2 31.5 31.5 0 000 12a31.5 31.5 0 00.5 5.8 3 3 0 002.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 002.1-2.1A31.5 31.5 0 0024 12a31.5 31.5 0 00-.5-5.8zM9.6 15.6V8.4L15.8 12l-6.2 3.6z"/></svg>`,
    spotify: `<span class="puck-social-letter">S</span>`,
    bandcamp: `<span class="puck-social-letter">B</span>`,
    soundcloud: `<span class="puck-social-letter">SC</span>`,
    apple: `<span class="puck-social-letter"></span>`,
    x: `<span class="puck-social-letter">X</span>`,
    twitter: `<span class="puck-social-letter">𝕏</span>`,
    threads: `<span class="puck-social-letter">@</span>`,
    bluesky: `<span class="puck-social-letter">BS</span>`,
    linkedin: `<span class="puck-social-letter">in</span>`,
    snapchat: `<span class="puck-social-letter">👻</span>`,
    pinterest: `<span class="puck-social-letter">P</span>`,
    twitch: `<span class="puck-social-letter">T</span>`,
    discord: `<span class="puck-social-letter">D</span>`,
    reddit: `<span class="puck-social-letter">R</span>`,
    patreon: `<span class="puck-social-letter">P</span>`,
    venmo: `<span class="puck-social-letter">V</span>`,
    cashapp: `<span class="puck-social-letter">$</span>`,
    email: `<span class="puck-social-letter">✉</span>`,
    website: `<span class="puck-social-letter">⌂</span>`,
    custom: `<span class="puck-social-letter">${esc((customLabel || "Link").slice(0, 2).toUpperCase())}</span>`
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
    justifyContent: "center"
  });

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
#editable-page-root .puck-title{font-family:'Playfair Display',serif;margin:0 0 14px;line-height:1.05;}
#editable-page-root .puck-subtitle{margin:0 0 14px;color:var(--amber);font-style:italic;}
#editable-page-root .puck-body{line-height:1.65;margin:0 0 20px;}
#editable-page-root .puck-image{display:block;max-width:100%;height:auto;object-fit:cover;}
#editable-page-root .puck-buttons{display:flex;gap:14px;flex-wrap:wrap;margin-top:22px;justify-content:center;}
#editable-page-root .puck-buttons .primary-btn:hover,#editable-page-root .puck-buttons .secondary-btn:hover{box-shadow:inherit;}
#editable-page-root .layout-text-left .puck-buttons,#editable-page-root .layout-text-right .puck-buttons{justify-content:flex-start;}
#editable-page-root .puck-social-links{display:flex;gap:20px;justify-content:center;align-items:center;flex-wrap:wrap;}
#editable-page-root .puck-social-letter{font-weight:900;font-size:16px;letter-spacing:.02em;}
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

  #editable-page-root img,
  #editable-page-root video,
  #editable-page-root iframe,
  #editable-page-root .puck-image{
    display:block!important;
    width:100%!important;
    max-width:100%!important;
    height:auto!important;
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
  const imageStyle = styleObj({ width: props.imageWidth || "320px", borderRadius: props.imageRadius || "8px", boxShadow: props.imageShadow || "none" });
  const titleHtml = hasText(props.title) ? `<h1 class="band-name puck-title" style="${styleObj(textStyle(props, "title"))}">${esc(props.title)}</h1>` : "";
  const subtitleHtml = hasText(props.subtitle) ? `<p class="tagline puck-subtitle" style="${styleObj(textStyle(props, "subtitle"))}">${esc(props.subtitle)}</p>` : "";
  const bodyHtml = hasText(props.body) ? `<p class="description puck-body" style="${styleObj(textStyle(props, "body"))}">${textWithBreaks(props.body)}</p>` : "";
  const buttonsHtml = (props.buttons || []).map(buttonHtml).join("");
  const textHtml = titleHtml || subtitleHtml || bodyHtml || buttonsHtml ? `<div class="puck-text">${titleHtml}${subtitleHtml}${bodyHtml}${buttonsHtml ? `<div class="puck-buttons">${buttonsHtml}</div>` : ""}</div>` : "";
  const imageHtml = props.imageUrl ? `<img class="puck-image" src="${attr(props.imageUrl)}" alt="${attr(props.imageAlt || props.title || "Image")}" style="${imageStyle}">` : "";
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
  const imageStyle = styleObj({ width: props.width || "900px", borderRadius: props.radius || "8px", boxShadow: props.shadow || "none" });
  const titleHtml = hasText(props.title) ? `<h2 class="puck-title" style="${styleObj(textStyle(props, "title"))}">${esc(props.title)}</h2>` : "";
  const imageHtml = props.imageUrl ? `<img class="puck-image" src="${attr(props.imageUrl)}" alt="${attr(props.imageAlt || props.title || "Image")}" style="${imageStyle}">` : "";
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