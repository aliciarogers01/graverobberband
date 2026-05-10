import React from "react";
import { puckPageCss } from "./puck-render-html.js";

const SITE_SLUG = "graverobberpunk";

const fontOptions = [
  "inherit", "Arial, sans-serif", "Helvetica, sans-serif", "Verdana, sans-serif", "Tahoma, sans-serif", "Trebuchet MS, sans-serif", "Georgia, serif", "Times New Roman, serif", "Garamond, serif", "Courier New, monospace", "Lucida Console, monospace", "Impact, sans-serif", "Palatino, serif", "Gill Sans, sans-serif", "Century Gothic, sans-serif",
  "Playfair Display, serif", "Montserrat, sans-serif", "Oswald, sans-serif", "Roboto, sans-serif", "Open Sans, sans-serif", "Lato, sans-serif", "Poppins, sans-serif", "Raleway, sans-serif", "Bebas Neue, sans-serif", "Anton, sans-serif", "Inter, sans-serif", "Nunito, sans-serif", "Merriweather, serif", "Lora, serif", "Cinzel, serif", "Cormorant Garamond, serif", "Abril Fatface, serif", "Permanent Marker, cursive", "Rock Salt, cursive", "Bangers, cursive", "Creepster, cursive", "Metal Mania, cursive", "Special Elite, cursive", "Rye, cursive", "Orbitron, sans-serif", "Audiowide, cursive", "Black Ops One, cursive", "Russo One, sans-serif", "Libre Baskerville, serif", "Source Sans 3, sans-serif", "Source Serif 4, serif", "Josefin Sans, sans-serif", "Quicksand, sans-serif", "Dancing Script, cursive", "Pacifico, cursive", "Satisfy, cursive", "Shadows Into Light, cursive", "Fira Sans, sans-serif", "Fira Code, monospace", "Ubuntu, sans-serif", "Work Sans, sans-serif", "DM Sans, sans-serif", "Space Grotesk, sans-serif", "Manrope, sans-serif"
];

const socialPlatformOptions = [
  { label: "Facebook", value: "facebook" },
  { label: "Instagram", value: "instagram" },
  { label: "TikTok", value: "tiktok" },
  { label: "YouTube", value: "youtube" },
  { label: "Spotify", value: "spotify" },
  { label: "Bandcamp", value: "bandcamp" },
  { label: "SoundCloud", value: "soundcloud" },
  { label: "Apple Music", value: "apple" },
  { label: "X / Twitter", value: "x" },
  { label: "Threads", value: "threads" },
  { label: "Bluesky", value: "bluesky" },
  { label: "LinkedIn", value: "linkedin" },
  { label: "Snapchat", value: "snapchat" },
  { label: "Pinterest", value: "pinterest" },
  { label: "Twitch", value: "twitch" },
  { label: "Discord", value: "discord" },
  { label: "Reddit", value: "reddit" },
  { label: "Patreon", value: "patreon" },
  { label: "Venmo", value: "venmo" },
  { label: "Cash App", value: "cashapp" },
  { label: "Email", value: "email" },
  { label: "Website", value: "website" },
  { label: "Custom", value: "custom" }
];

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function getUploadHeaders() {
  const token = localStorage.getItem("adminToken") || "";
  return token ? { Authorization: `Bearer ${token}` } : {};
}

function ColorField({ value, onChange, label }) {
  const safeValue = value && String(value).startsWith("#") ? value : "#ffffff";
  return (
    <div className="puck-custom-field puck-color-field">
      <label>{label}</label>
      <div className="puck-color-row">
        <input type="color" value={safeValue} onChange={event => onChange(event.target.value)} />
        <input type="text" value={value || ""} placeholder="#ffffff, transparent, inherit" onChange={event => onChange(event.target.value)} />
      </div>
    </div>
  );
}

function colorField(label) {
  return {
    type: "custom",
    label,
    render: ({ value, onChange }) => <ColorField value={value || ""} onChange={onChange} label={label} />
  };
}

function FontField({ value, onChange, label }) {
  return (
    <div className="puck-custom-field">
      <label>{label}</label>
      <select value={value || "inherit"} onChange={event => onChange(event.target.value)}>
        {fontOptions.map(font => <option key={font} value={font}>{font}</option>)}
      </select>
      <input type="text" value={value || ""} placeholder="Or type any font-family name" onChange={event => onChange(event.target.value)} />
    </div>
  );
}

function fontField(label) {
  return {
    type: "custom",
    label,
    render: ({ value, onChange }) => <FontField value={value || "inherit"} onChange={onChange} label={label} />
  };
}

function ImageUploadField({ value, onChange, label }) {
  const [status, setStatus] = React.useState("");

  async function uploadImage(event) {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setStatus("Please choose an image file.");
      return;
    }

    const apiBase = window.BAND_API_BASE;
    if (!apiBase) {
      setStatus("Upload failed: API base is missing.");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);

    setStatus("Uploading image...");

    try {
      const response = await fetch(`${apiBase}/uploads/${SITE_SLUG}`, {
        method: "POST",
        headers: getUploadHeaders(),
        body: formData
      });

      const data = await response.json();
      if (!response.ok || !data.url) {
        setStatus(data.error || "Upload failed.");
        return;
      }

      onChange(data.url);
      setStatus("Image uploaded. Click Publish to save the page.");
    } catch (error) {
      setStatus("Upload failed. Make sure backend/Cloudinary are working.");
    } finally {
      event.target.value = "";
    }
  }

  return (
    <div className="puck-upload-field">
      <label>{label || "Image"}</label>
      {value ? (
        <div className="puck-upload-preview">
          <img src={value} alt="Selected upload" />
          <code>{value}</code>
        </div>
      ) : (
        <p className="puck-upload-empty">No image selected.</p>
      )}
      <input type="file" accept="image/*" onChange={uploadImage} />
      <button type="button" onClick={() => onChange("")}>Remove Image</button>
      {status && <p className="puck-upload-status">{status}</p>}
    </div>
  );
}

function imageUploadField(label) {
  return {
    type: "custom",
    label,
    render: ({ value, onChange }) => <ImageUploadField value={value || ""} onChange={onChange} label={label} />
  };
}

function ExternalFontField({ value, onChange, label }) {
  return (
    <div className="puck-custom-field">
      <label>{label}</label>
      <input
        type="text"
        value={value || ""}
        placeholder="Paste Google Fonts @import URL or font CSS URL"
        onChange={event => onChange(event.target.value)}
      />
      <small>Example: https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap</small>
    </div>
  );
}

function externalFontField(label = "External Font URL") {
  return {
    type: "custom",
    label,
    render: ({ value, onChange }) => <ExternalFontField value={value || ""} onChange={onChange} label={label} />
  };
}

const textStyleFields = prefix => ({
  [`${prefix}Color`]: colorField("Text Color"),
  [`${prefix}Font`]: fontField("Font"),
  [`${prefix}Size`]: { type: "text", label: "Font Size", placeholder: "3rem, 48px, 120%" },
  [`${prefix}Weight`]: {
    type: "select",
    label: "Bold / Normal",
    options: [
      { label: "Default", value: "inherit" },
      { label: "Normal", value: "400" },
      { label: "Bold", value: "700" },
      { label: "Extra Bold", value: "900" },
      { label: "Light", value: "300" }
    ]
  },
  [`${prefix}Style`]: {
    type: "select",
    label: "Italic",
    options: [
      { label: "Default", value: "inherit" },
      { label: "Normal", value: "normal" },
      { label: "Italic", value: "italic" }
    ]
  },
  [`${prefix}Decoration`]: {
    type: "select",
    label: "Underline",
    options: [
      { label: "None", value: "none" },
      { label: "Underline", value: "underline" },
      { label: "Line Through", value: "line-through" }
    ]
  },
  [`${prefix}Transform`]: {
    type: "select",
    label: "Text Case",
    options: [
      { label: "Default", value: "none" },
      { label: "UPPERCASE", value: "uppercase" },
      { label: "lowercase", value: "lowercase" },
      { label: "Capitalize", value: "capitalize" }
    ]
  },
  [`${prefix}LetterSpacing`]: { type: "text", label: "Letter Spacing", placeholder: "normal, 2px, .08em" },
  [`${prefix}LineHeight`]: { type: "text", label: "Line Height", placeholder: "normal, 1.2, 32px" },
  [`${prefix}Shadow`]: { type: "text", label: "Text Shadow", placeholder: "none or 0 0 10px #22d3ee" }
});

const buttonArrayField = {
  type: "array",
  label: "Buttons",
  arrayFields: {
    text: { type: "text", label: "Button Text" },
    url: { type: "text", label: "Button Link" },
    backgroundColor: colorField("Button Background"),
    textColor: colorField("Button Text Color"),
    fontFamily: fontField("Button Font"),
    fontSize: { type: "text", label: "Button Font Size", placeholder: "16px" },
borderWidth: {
  type: "select",
  label: "Border",
  options: [
    { label: "No Border", value: "0px" },
    { label: "Thin Border", value: "1px" },
    { label: "Medium Border", value: "2px" },
    { label: "Thick Border", value: "4px" }
  ]
},
borderColor: colorField("Border Color"),
    boxShadow: { type: "text", label: "Button Glow / Shadow", placeholder: "none or 0 0 20px #22d3ee" },
    textTransform: { type: "select", label: "Text Case", options: [
      { label: "Default", value: "" },
      { label: "Uppercase", value: "uppercase" },
      { label: "Normal", value: "none" },
      { label: "Lowercase", value: "lowercase" },
      { label: "Capitalize", value: "capitalize" }
    ] },
    radius: { type: "text", label: "Button Rounded Corners", placeholder: "999px" },
    padding: { type: "text", label: "Button Padding", placeholder: "14px 24px" }
  },
  defaultItemProps: {
    text: "New Button",
    url: "#",
    backgroundColor: "#8b3df4",
    textColor: "#ffffff",
    fontFamily: "inherit",
    fontSize: "16px",
    borderWidth: "0px",
    borderColor: "rgba(255,255,255,.25)",
    boxShadow: "none",
    textTransform: "uppercase",
    radius: "999px",
    padding: "14px 24px"
  }
};

const sectionFields = {
  backgroundColor: colorField("Section Background"),
  textColor: colorField("Default Text Color"),
  paddingY: { type: "number", label: "Top/Bottom Padding" },
  paddingX: { type: "number", label: "Left/Right Padding" }
};

function applyFontImport(url) {
  if (!url) return null;
  return <style>{`@import url('${url}');`}</style>;
}

function ButtonPreview({ button }) {
  if (!button?.text) return null;

  const borderWidth = button.borderWidth || "0px";
  const borderColor = button.borderColor || "transparent";

  const style = {
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
  };

  return (
    <a className="puck-btn" href={button.url || "#"} style={style}>
      {button.text}
    </a>
  );
}

function SocialIcon({ platform, label }) {
  const name = String(platform || "custom").toLowerCase();
  if (name === "facebook") return <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.019 4.388 10.994 10.125 11.854v-8.385H7.078v-3.469h3.047V9.431c0-3.007 1.791-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.249h3.328l-.532 3.469h-2.796v8.385C19.612 23.067 24 18.092 24 12.073z" /></svg>;
  if (name === "instagram") return <svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm11.5 1a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z" /></svg>;
  if (name === "tiktok") return <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.589 6.686a4.793 4.793 0 01-3.77-4.187V2h-3.358v13.743a2.89 2.89 0 11-2.89-2.89c.213 0 .421.023.622.067V9.51a6.248 6.248 0 00-.622-.033A6.248 6.248 0 1015.82 15.72V8.687a8.154 8.154 0 004.77 1.539V6.686z" /></svg>;
  if (name === "youtube") return <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 00.5 6.2 31.5 31.5 0 000 12a31.5 31.5 0 00.5 5.8 3 3 0 002.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 002.1-2.1A31.5 31.5 0 0024 12a31.5 31.5 0 00-.5-5.8zM9.6 15.6V8.4L15.8 12l-6.2 3.6z" /></svg>;
  const letters = name === "custom" ? (label || "Link").slice(0, 2).toUpperCase() : name.slice(0, 2).toUpperCase();
  return <span className="puck-social-letter">{letters}</span>;
}

function SectionShell({ children, backgroundColor = "transparent", textColor = "inherit", paddingY = 50, paddingX = 24 }) {
  return <section className="puck-section" style={{ background: backgroundColor, color: textColor, padding: `${paddingY}px ${paddingX}px` }}>{children}</section>;
}

const defaultContent = [
  {
    type: "Hero",
    props: {
      id: "graverobber-hero-1",
      title: "Grave Robber",
      subtitle: "AMERICAN HORROR PUNK",
      body: "Horror punk from beyond the grave. Shows, music, merch, booking, and updates.",
      imageUrl: "assets/grave-robber-skull.png",
      imageAlt: "Grave Robber skull logo",
      layout: "center",
      titleSize: "5rem",
      titleColor: "#f2f2f2",
      titleFont: "Creepster, cursive",
      titleWeight: "700",
      titleLetterSpacing: "normal",
      subtitleSize: "1.25rem",
      subtitleColor: "#c62828",
      subtitleFont: "Oswald, sans-serif",
      subtitleWeight: "700",
      subtitleLetterSpacing: ".14em",
      bodySize: "1.1rem",
      bodyColor: "#d6d6d6",
      bodyFont: "Special Elite, cursive",
      bodyWeight: "400",
      bodyLetterSpacing: "normal",
      imageWidth: "300px",
      imageRadius: "50%",
      imageShadow: "0 0 55px rgba(198,40,40,.45)",
      maxWidth: 1000,
      gap: 35,
      backgroundColor: "transparent",
      textColor: "#ffffff",
      paddingY: 70,
      paddingX: 24,
      customFontUrl: "",
      buttons: [
        { text: "Shows", url: "shows.html", backgroundColor: "#c62828", textColor: "#ffffff", fontFamily: "Oswald, sans-serif", fontSize: "16px", borderWidth: "0px", borderColor: "transparent", boxShadow: "0 0 24px rgba(198,40,40,.35)", textTransform: "uppercase", radius: "999px", padding: "16px 34px" },
        { text: "Join the Crypt List", url: "signup.html", backgroundColor: "transparent", textColor: "#ffffff", fontFamily: "Oswald, sans-serif", fontSize: "16px", borderWidth: "1px", borderColor: "rgba(255,255,255,.35)", boxShadow: "none", textTransform: "uppercase", radius: "999px", padding: "16px 34px" },
        { text: "Booking", url: "mailto:graverobber.punk@gmail.com", backgroundColor: "transparent", textColor: "#ffffff", fontFamily: "Oswald, sans-serif", fontSize: "16px", borderWidth: "1px", borderColor: "rgba(198,40,40,.65)", boxShadow: "none", textTransform: "uppercase", radius: "999px", padding: "16px 34px" }
      ]
    }
  },
  {
    type: "ImageBlock",
    props: {
      id: "graverobber-image-1",
      title: "",
      titleSize: "3rem",
      titleColor: "#ffffff",
      titleFont: "Creepster, cursive",
      imageUrl: "assets/grave-robber-logo-stacked.png",
      imageAlt: "Grave Robber logo",
      width: "520px",
      radius: "12px",
      shadow: "0 20px 60px rgba(0,0,0,.55)",
      align: "center",
      maxWidth: "900px",
      backgroundColor: "transparent",
      paddingY: 30,
      paddingX: 24,
      customFontUrl: ""
    }
  },
  {
    type: "ButtonRow",
    props: {
      id: "graverobber-buttons-1",
      backgroundColor: "transparent",
      textColor: "#ffffff",
      paddingY: 40,
      paddingX: 24,
      customFontUrl: "",
      buttons: [
        { text: "Shows", url: "shows.html", backgroundColor: "#c62828", textColor: "#ffffff", fontFamily: "Oswald, sans-serif", fontSize: "16px", borderWidth: "0px", borderColor: "transparent", boxShadow: "0 0 24px rgba(198,40,40,.35)", textTransform: "uppercase", radius: "999px", padding: "16px 34px" },
        { text: "Crypt List", url: "signup.html", backgroundColor: "transparent", textColor: "#ffffff", fontFamily: "Oswald, sans-serif", fontSize: "16px", borderWidth: "1px", borderColor: "rgba(255,255,255,.35)", boxShadow: "none", textTransform: "uppercase", radius: "999px", padding: "16px 34px" }
      ]
    }
  },
  {
    type: "SocialIcons",
    props: {
      id: "graverobber-social-1",
      title: "Follow Grave Robber",
      titleColor: "#ffffff",
      titleFont: "Oswald, sans-serif",
      titleSize: "1rem",
      titleWeight: "700",
      backgroundColor: "transparent",
      textColor: "#ffffff",
      paddingY: 50,
      paddingX: 24,
      links: [
        { platform: "facebook", label: "Facebook", url: "https://www.facebook.com/graverobberpunk", iconColor: "#ffffff", backgroundColor: "rgba(198,40,40,.14)", borderColor: "rgba(198,40,40,.55)" },
        { platform: "instagram", label: "Instagram", url: "https://www.instagram.com/graverobberpunk", iconColor: "#ffffff", backgroundColor: "rgba(198,40,40,.14)", borderColor: "rgba(198,40,40,.55)" },
        { platform: "x", label: "X", url: "https://x.com/graverobberpunk", iconColor: "#ffffff", backgroundColor: "rgba(198,40,40,.14)", borderColor: "rgba(198,40,40,.55)" },
        { platform: "threads", label: "Threads", url: "https://www.threads.net/@graverobberpunk", iconColor: "#ffffff", backgroundColor: "rgba(198,40,40,.14)", borderColor: "rgba(198,40,40,.55)" },
        { platform: "tiktok", label: "TikTok", url: "https://www.tiktok.com/@graverobberpunk", iconColor: "#ffffff", backgroundColor: "rgba(198,40,40,.14)", borderColor: "rgba(198,40,40,.55)" },
        { platform: "spotify", label: "Spotify", url: "https://open.spotify.com/artist/4D34aUp0OsDs8mAEWPIP7c", iconColor: "#ffffff", backgroundColor: "rgba(198,40,40,.14)", borderColor: "rgba(198,40,40,.55)" },
        { platform: "youtube", label: "YouTube", url: "https://www.youtube.com/@GraveRobberPunk", iconColor: "#ffffff", backgroundColor: "rgba(198,40,40,.14)", borderColor: "rgba(198,40,40,.55)" },
        { platform: "bandcamp", label: "Bandcamp", url: "https://graverobberpunk.bandcamp.com/", iconColor: "#ffffff", backgroundColor: "rgba(198,40,40,.14)", borderColor: "rgba(198,40,40,.55)" },
        { platform: "soundcloud", label: "SoundCloud", url: "https://soundcloud.com/graverobberofficial", iconColor: "#ffffff", backgroundColor: "rgba(198,40,40,.14)", borderColor: "rgba(198,40,40,.55)" },
        { platform: "apple", label: "Apple Music", url: "https://music.apple.com/us/artist/grave-robber/279558434", iconColor: "#ffffff", backgroundColor: "rgba(198,40,40,.14)", borderColor: "rgba(198,40,40,.55)" },
        { platform: "website", label: "Merch Store", url: "https://graverobber.bigcartel.com/", iconColor: "#ffffff", backgroundColor: "rgba(198,40,40,.14)", borderColor: "rgba(198,40,40,.55)" },
        { platform: "email", label: "Email", url: "mailto:graverobber.punk@gmail.com", iconColor: "#ffffff", backgroundColor: "rgba(198,40,40,.14)", borderColor: "rgba(198,40,40,.55)" }
      ]
    }
  }
];

function createPageContent(pageName = "home") {
  if (pageName === "shows") {
    return [
      {
        type: "HeaderNav",
        props: {
          id: "graverobber-shows-header-1",
          backgroundColor: "rgba(0,0,0,.86)",
          lineColor: "rgba(198,40,40,.65)",
          lineShadow: "0 0 24px rgba(198,40,40,.28)",
          showBack: "show",
          backText: "Back",
          backUrl: "index.html",
          logoUrl: "assets/grave-robber-skull.png",
          logoAlt: "Grave Robber",
          logoSize: "52px",
          logoPlacement: "right",
          width: "100%",
          maxWidth: "none",
          margin: "0",
          padding: "18px 28px",
          navPlacement: "center",
          headerPosition: "full",
          buttons: [
            { text: "Home", url: "index.html", backgroundColor: "transparent", textColor: "#ffffff", fontFamily: "Oswald, sans-serif", fontSize: "14px", borderWidth: "1px", borderColor: "rgba(198,40,40,.55)", boxShadow: "none", textTransform: "uppercase", radius: "999px", padding: "10px 16px" },
            { text: "Shows", url: "shows.html", backgroundColor: "#c62828", textColor: "#ffffff", fontFamily: "Oswald, sans-serif", fontSize: "14px", borderWidth: "0px", borderColor: "transparent", boxShadow: "none", textTransform: "uppercase", radius: "999px", padding: "10px 16px" },
            { text: "Crypt List", url: "signup.html", backgroundColor: "transparent", textColor: "#ffffff", fontFamily: "Oswald, sans-serif", fontSize: "14px", borderWidth: "1px", borderColor: "rgba(198,40,40,.55)", boxShadow: "none", textTransform: "uppercase", radius: "999px", padding: "10px 16px" }
          ]
        }
      },
      {
        type: "TextBlock",
        props: {
          id: "graverobber-shows-title-1",
          eyebrow: "Live from the crypt",
          eyebrowColor: "#c62828",
          eyebrowFont: "Oswald, sans-serif",
          eyebrowSize: "1rem",
          eyebrowWeight: "700",
          title: "Shows",
          titleSize: "4rem",
          titleColor: "#ffffff",
          titleFont: "Creepster, cursive",
          titleWeight: "700",
          body: "Join the crypt list to hear when the next haunt is announced.",
          bodySize: "1.1rem",
          bodyColor: "#d6d6d6",
          bodyFont: "Special Elite, cursive",
          bodyWeight: "400",
          align: "center",
          maxWidth: "850px",
          backgroundColor: "transparent",
          textColor: "#ffffff",
          paddingY: 70,
          paddingX: 24,
          customFontUrl: "",
          buttons: [{ text: "Get Notified", url: "signup.html", backgroundColor: "#c62828", textColor: "#ffffff", fontFamily: "Oswald, sans-serif", fontSize: "16px", borderWidth: "0px", borderColor: "transparent", boxShadow: "0 0 24px rgba(198,40,40,.35)", textTransform: "uppercase", radius: "999px", padding: "16px 34px" }]
        }
      },
      {
        type: "Embed",
        props: {
          html: '<div id="upcoming-shows"></div><div id="no-shows-message" class="empty-state"><h2>Shows Coming Soon</h2><p>Join the crypt list to hear when the next haunt is announced.</p><a href="signup.html" class="primary-btn">Get Notified</a></div><section class="past-shows-section hidden"><h2>Past Shows</h2><div id="past-shows"></div></section>',
          backgroundColor: "transparent",
          paddingY: 20,
          paddingX: 24
        }
      }
    ];
  }

  if (pageName === "signup") {
    return [
      {
        type: "HeaderNav",
        props: {
          id: "graverobber-signup-header-1",
          backgroundColor: "rgba(0,0,0,.86)",
          lineColor: "rgba(198,40,40,.65)",
          lineShadow: "0 0 24px rgba(198,40,40,.28)",
          showBack: "show",
          backText: "Back",
          backUrl: "index.html",
          logoUrl: "assets/grave-robber-skull.png",
          logoAlt: "Grave Robber",
          logoSize: "52px",
          logoPlacement: "right",
          width: "100%",
          maxWidth: "none",
          margin: "0",
          padding: "18px 28px",
          navPlacement: "center",
          headerPosition: "full",
          buttons: [
            { text: "Home", url: "index.html", backgroundColor: "transparent", textColor: "#ffffff", fontFamily: "Oswald, sans-serif", fontSize: "14px", borderWidth: "1px", borderColor: "rgba(198,40,40,.55)", boxShadow: "none", textTransform: "uppercase", radius: "999px", padding: "10px 16px" },
            { text: "Shows", url: "shows.html", backgroundColor: "transparent", textColor: "#ffffff", fontFamily: "Oswald, sans-serif", fontSize: "14px", borderWidth: "1px", borderColor: "rgba(198,40,40,.55)", boxShadow: "none", textTransform: "uppercase", radius: "999px", padding: "10px 16px" },
            { text: "Crypt List", url: "signup.html", backgroundColor: "#c62828", textColor: "#ffffff", fontFamily: "Oswald, sans-serif", fontSize: "14px", borderWidth: "0px", borderColor: "transparent", boxShadow: "none", textTransform: "uppercase", radius: "999px", padding: "10px 16px" }
          ]
        }
      },
      {
        type: "TextBlock",
        props: {
          id: "graverobber-signup-title-1",
          eyebrow: "Join the underground",
          eyebrowColor: "#c62828",
          eyebrowFont: "Oswald, sans-serif",
          eyebrowSize: "1rem",
          eyebrowWeight: "700",
          title: "Crypt List",
          titleSize: "4rem",
          titleColor: "#ffffff",
          titleFont: "Creepster, cursive",
          titleWeight: "700",
          body: "Get show updates, music news, and dispatches from the grave.",
          bodySize: "1.1rem",
          bodyColor: "#d6d6d6",
          bodyFont: "Special Elite, cursive",
          bodyWeight: "400",
          align: "center",
          maxWidth: "850px",
          backgroundColor: "transparent",
          textColor: "#ffffff",
          paddingY: 70,
          paddingX: 24,
          customFontUrl: "",
          buttons: []
        }
      },
      {
        type: "Embed",
        props: {
          html: '<form id="signup-form" class="custom-form"><label>Name<input type="text" name="name" required></label><label>Email<input type="email" name="email" required></label><label>Phone<input type="tel" name="phone"></label><label>Message<textarea name="message" rows="5"></textarea></label><button type="submit">Join the Crypt List</button><p id="signup-status"></p></form>',
          backgroundColor: "transparent",
          paddingY: 20,
          paddingX: 24
        }
      }
    ];
  }

  return clone(defaultContent);
}

export function createDefaultPuckData(pageName = "home") {
  const pageTitle = pageName.charAt(0).toUpperCase() + pageName.slice(1);
  return {
    root: { props: { title: `Driver 8 ${pageTitle}` } },
    content: createPageContent(pageName)
  };
}

export const defaultPuckData = createDefaultPuckData("home");

export const puckConfig = {
  components: {
    HeaderNav: {
      label: "Header / Page Navigation",
      fields: {
        backgroundColor: colorField("Header Background"),
        lineColor: colorField("Bottom Line Color"),
        lineShadow: { type: "text", label: "Bottom Line Shadow", placeholder: "0 0 24px rgba(77,198,225,.22)" },
        showBack: {
          type: "select",
          label: "Back Button",
          options: [
            { label: "Show", value: "show" },
            { label: "Hide", value: "hide" }
          ]
        },
        backText: { type: "text", label: "Back Text" },
        backUrl: { type: "text", label: "Back Link" },
        logoUrl: imageUploadField("Header Logo"),
        logoAlt: { type: "text", label: "Logo Alt Text" },
        logoSize: { type: "text", label: "Logo Size", placeholder: "45px" },
        logoPlacement: {
          type: "select",
          label: "Logo Placement",
          options: [
            { label: "Left", value: "left" },
            { label: "Right", value: "right" }
          ]
        },
        width: { type: "text", label: "Header Width", placeholder: "100%, 1200px, 80vw" },
        maxWidth: { type: "text", label: "Header Max Width", placeholder: "none or 1200px" },
        margin: { type: "text", label: "Header Margin", placeholder: "0 auto" },
        padding: { type: "text", label: "Header Padding", placeholder: "22px 40px" },
        navPlacement: {
          type: "select",
          label: "Button Placement",
          options: [
            { label: "Left", value: "left" },
            { label: "Center", value: "center" },
            { label: "Right", value: "right" }
          ]
        },
        headerPosition: {
          type: "select",
          label: "Header Stretch Mode",
          options: [
            { label: "Normal", value: "normal" },
            { label: "Full Browser Width", value: "full" }
          ]
        },
        buttons: buttonArrayField
      },
      defaultProps: {
        backgroundColor: "rgba(0,0,0,.72)",
        lineColor: "rgba(77,198,225,.45)",
        lineShadow: "0 0 24px rgba(77,198,225,.22)",
        showBack: "show",
        backText: "Back",
        backUrl: "index.html",
        logoUrl: "assets/logo.jpg",
        logoAlt: "Driver 8 Logo",
        logoSize: "45px",
        logoPlacement: "left",
        width: "100%",
        maxWidth: "none",
        margin: "0",
        padding: "22px 40px",
        navPlacement: "right",
        headerPosition: "full",
        buttons: [
          { text: "Home", url: "index.html", backgroundColor: "transparent", textColor: "#4dc6e1", fontFamily: "inherit", fontSize: "14px", borderWidth: "1px", borderColor: "rgba(77,198,225,.45)", boxShadow: "0 0 16px rgba(77,198,225,.12)", textTransform: "uppercase", radius: "999px", padding: "10px 16px" },
          { text: "Shows", url: "shows.html", backgroundColor: "transparent", textColor: "#4dc6e1", fontFamily: "inherit", fontSize: "14px", borderWidth: "1px", borderColor: "rgba(77,198,225,.45)", boxShadow: "0 0 16px rgba(77,198,225,.12)", textTransform: "uppercase", radius: "999px", padding: "10px 16px" },
          { text: "Signup", url: "signup.html", backgroundColor: "transparent", textColor: "#4dc6e1", fontFamily: "inherit", fontSize: "14px", borderWidth: "1px", borderColor: "rgba(77,198,225,.45)", boxShadow: "0 0 16px rgba(77,198,225,.12)", textTransform: "uppercase", radius: "999px", padding: "10px 16px" },
          { text: "Contact", url: "contact.html", backgroundColor: "transparent", textColor: "#4dc6e1", fontFamily: "inherit", fontSize: "14px", borderWidth: "1px", borderColor: "rgba(77,198,225,.45)", boxShadow: "0 0 16px rgba(77,198,225,.12)", textTransform: "uppercase", radius: "999px", padding: "10px 16px" },
          { text: "Admin", url: "admin.html", backgroundColor: "transparent", textColor: "#4dc6e1", fontFamily: "inherit", fontSize: "14px", borderWidth: "1px", borderColor: "rgba(77,198,225,.45)", boxShadow: "0 0 16px rgba(77,198,225,.12)", textTransform: "uppercase", radius: "999px", padding: "10px 16px" }
        ]
      },
      render: props => (
        <header
          className={`puck-site-header ${props.headerPosition === "full" ? "is-full-width" : ""}`}
          style={{
            background: props.backgroundColor || "rgba(0,0,0,.72)",
            borderBottom: `1px solid ${props.lineColor || "rgba(77,198,225,.45)"}`,
            boxShadow: props.lineShadow || "none",
            width: props.width || "100%",
            maxWidth: props.maxWidth || "none",
            margin: props.margin || "0",
            padding: props.padding || "22px 40px"
          }}
        >
          <div className="puck-header-left">
            {props.logoUrl && props.logoPlacement !== "right" && (
              <a className="puck-header-logo-link logo-left" href="index.html" style={{ "--logo-size": props.logoSize || "45px" }}>
                <img className="puck-header-logo" src={props.logoUrl} alt={props.logoAlt || "Logo"} />
              </a>
            )}
            {props.showBack !== "hide" && <a className="puck-header-back" href={props.backUrl || "index.html"}>{props.backText || "Back"}</a>}
          </div>
          <nav className={`puck-header-nav nav-${props.navPlacement || "right"}`}>
            {(props.buttons || []).map((button, index) => <ButtonPreview key={index} button={button} />)}
          </nav>
          <div className="puck-header-right">
            {props.logoUrl && props.logoPlacement === "right" && (
              <a className="puck-header-logo-link logo-right" href="index.html" style={{ "--logo-size": props.logoSize || "45px" }}>
                <img className="puck-header-logo" src={props.logoUrl} alt={props.logoAlt || "Logo"} />
              </a>
            )}
          </div>
        </header>
      )
    },

    SongScroll: {
      label: "Song Scroll",
      fields: {
        backgroundColor: colorField("Scroll Background"),
        lineColor: colorField("Bottom Line Color"),
        textColor: colorField("Song Text Color"),
        textShadow: { type: "text", label: "Song Text Shadow" },
        buttonBorderColor: colorField("Song Border Color"),
width: { type: "text", label: "Scroll Width", placeholder: "100%, 100vw, 1200px" },
maxWidth: { type: "text", label: "Scroll Max Width", placeholder: "none or 1200px" },
margin: { type: "text", label: "Scroll Margin", placeholder: "0 auto" },
stretchMode: {
  type: "select",
  label: "Scroll Stretch Mode",
  options: [
    { label: "Normal", value: "normal" },
    { label: "Full Browser Width", value: "full" }
  ]
},
        items: {
          type: "array",
          label: "Songs",
          arrayFields: {
            text: { type: "text", label: "Song Title" }
          },
          defaultItemProps: { text: "Song Title" }
        }
      },
defaultProps: {
  backgroundColor: "rgba(77,198,225,.12)",
  lineColor: "rgba(77,198,225,.45)",
  textColor: "#4dc6e1",
  textShadow: "0 0 12px rgba(77,198,225,.35)",
  buttonBorderColor: "rgba(77,198,225,.45)",
width: "100%",
maxWidth: "none",
margin: "0",
stretchMode: "full",
        items: [
          { text: "Get Up" },
          { text: "Man on the Moon" },
          { text: "Losing My Religion" },
          { text: "Finest Worksong" },
          { text: "Life and How to Live It" },
          { text: "Fall on Me" },
          { text: "Superman" },
          { text: "These Days" },
          { text: "Stand" },
          { text: "The One I Love" }
        ]
      },
      render: props => {
        const songs = props.items || [];

        return (
          <section
            className={`songs-section puck-song-scroll ${props.stretchMode === "full" ? "is-full-width" : ""}`}
            aria-label="Songs We Play"
style={{
  background: props.backgroundColor || "linear-gradient(90deg, var(--blue-deep) 0%, var(--charcoal-light) 50%, var(--blue-deep) 100%)",
  borderBottom: `1px solid ${props.lineColor || "rgba(212, 162, 76, 0.2)"}`,
  width: props.width || "100%",
  maxWidth: props.maxWidth || "none",
  margin: props.margin || "0"
}}
          >
            <div className="songs-scroll-container">
              <div className="songs-scroll puck-song-track">
                {[...songs, ...songs].map((item, index) => (
                  <span
                    key={index}
                    className="song-name"
                    style={{
                      color: props.textColor || "var(--cream)",
                      textShadow: props.textShadow || "none",
                      borderColor: props.buttonBorderColor || "rgba(212, 162, 76, 0.25)"
                    }}
                  >
                    {item.text}
                  </span>
                ))}
              </div>
            </div>
          </section>
        );
      }
    },
    FontLoader: {
      label: "External Font Loader",
      fields: {
        fontUrl: externalFontField("Font CSS URL"),
        note: { type: "textarea", label: "Notes" }
      },
      defaultProps: { fontUrl: "https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap", note: "Paste a Google Fonts CSS URL here, then use the font-family name in any font field." },
      render: props => <div className="puck-font-loader-note">{applyFontImport(props.fontUrl)}External font loaded. Use its font-family name in any font field.</div>
    },
    Hero: {
      label: "Hero: Text + Image",
      fields: {
        customFontUrl: externalFontField("External Font URL For This Block"),
        title: { type: "text", label: "Title" },
        ...textStyleFields("title"),
        subtitle: { type: "text", label: "Subtitle" },
        ...textStyleFields("subtitle"),
        body: { type: "textarea", label: "Body Text" },
        ...textStyleFields("body"),
        imageUrl: imageUploadField("Hero Image Upload"),
        imageAlt: { type: "text", label: "Image Alt Text" },
        layout: { type: "select", label: "Layout", options: [
          { label: "Text Left / Image Right", value: "text-left" },
          { label: "Text Right / Image Left", value: "text-right" },
          { label: "Centered", value: "center" },
          { label: "Image Top", value: "image-top" }
        ] },
        imageWidth: { type: "text", label: "Image Width", placeholder: "320px or 50%" },
        imageRadius: { type: "text", label: "Image Rounded Corners" },
imageShadow: {
  type: "text",
  label: "Image Shadow",
  placeholder: "none or 0 20px 60px rgba(0,0,0,.45)"
},
        maxWidth: { type: "number", label: "Max Section Width" },
        gap: { type: "number", label: "Gap Between Text/Image" },
        ...sectionFields,
        buttons: buttonArrayField
      },
defaultProps: clone(defaultContent[0].props),
      render: props => (
        <SectionShell {...props}>
          {applyFontImport(props.customFontUrl)}
          <div className={`puck-inner puck-flex layout-${props.layout || "text-left"}`} style={{ "--gap": `${props.gap || 50}px`, "--max-width": `${props.maxWidth || 1100}px` }}>
            <div className="puck-text">
              {props.title && <h1 className="band-name puck-title" style={{ fontSize: props.titleSize || "5rem", color: props.titleColor || "inherit", fontFamily: props.titleFont || "inherit", fontWeight: props.titleWeight || "inherit", letterSpacing: props.titleLetterSpacing || "normal" }}>{props.title}</h1>}
              {props.subtitle && <p className="tagline puck-subtitle" style={{ fontSize: props.subtitleSize || "1.8rem", color: props.subtitleColor || "inherit", fontFamily: props.subtitleFont || "inherit", fontWeight: props.subtitleWeight || "inherit", letterSpacing: props.subtitleLetterSpacing || "normal" }}>{props.subtitle}</p>}
              {props.body && <p className="description puck-body" style={{ fontSize: props.bodySize || "1rem", color: props.bodyColor || "inherit", fontFamily: props.bodyFont || "inherit", fontWeight: props.bodyWeight || "inherit", letterSpacing: props.bodyLetterSpacing || "normal" }}>{props.body}</p>}
              {(props.buttons || []).length > 0 && <div className="puck-buttons">{(props.buttons || []).map((button, index) => <ButtonPreview key={index} button={button} index={index} />)}</div>}
            </div>
            {props.imageUrl && <img className="puck-image" src={props.imageUrl} alt={props.imageAlt || props.title || "Image"} style={{ width: props.imageWidth || "320px", borderRadius: props.imageRadius || "8px", boxShadow: props.imageShadow || "none" }} />}
          </div>
        </SectionShell>
      )
    },
    TextBlock: {
      label: "Text Block",
      fields: {
        customFontUrl: externalFontField("External Font URL For This Block"),
        eyebrow: { type: "text", label: "Small Top Text" },
        ...textStyleFields("eyebrow"),
        title: { type: "text", label: "Title" },
        ...textStyleFields("title"),
        body: { type: "textarea", label: "Body Text" },
        ...textStyleFields("body"),
        align: { type: "select", label: "Text Align", options: [{ label: "Left", value: "left" }, { label: "Center", value: "center" }, { label: "Right", value: "right" }] },
        maxWidth: { type: "text", label: "Text Box Width" },
        ...sectionFields,
        buttons: buttonArrayField
      },
      defaultProps: { id: "text-block", eyebrow: "", eyebrowColor: "#ffffff", eyebrowFont: "inherit", eyebrowSize: "1rem", eyebrowWeight: "400", title: "New Text Section", titleSize: "3rem", titleColor: "#ffffff", titleFont: "Playfair Display, serif", titleWeight: "700", body: "Edit this text.", bodySize: "1rem", bodyColor: "#ffffff", bodyFont: "inherit", bodyWeight: "400", align: "center", maxWidth: "850px", backgroundColor: "transparent", textColor: "#ffffff", paddingY: 50, paddingX: 24, customFontUrl: "", buttons: [] },
      render: props => <SectionShell {...props}>{applyFontImport(props.customFontUrl)}<div className="puck-inner puck-text" style={{ textAlign: props.align || "center", maxWidth: props.maxWidth || "850px" }}>{props.eyebrow && <p className="teaser" style={{ color: props.eyebrowColor || "inherit", fontFamily: props.eyebrowFont || "inherit", fontSize: props.eyebrowSize || "inherit", fontWeight: props.eyebrowWeight || "inherit", letterSpacing: props.eyebrowLetterSpacing || "normal" }}>{props.eyebrow}</p>}{props.title && <h2 className="puck-title" style={{ fontSize: props.titleSize || "3rem", color: props.titleColor || "inherit", fontFamily: props.titleFont || "inherit", fontWeight: props.titleWeight || "inherit", letterSpacing: props.titleLetterSpacing || "normal" }}>{props.title}</h2>}{props.body && <p className="puck-body" style={{ fontSize: props.bodySize || "1rem", color: props.bodyColor || "inherit", fontFamily: props.bodyFont || "inherit", fontWeight: props.bodyWeight || "inherit", letterSpacing: props.bodyLetterSpacing || "normal" }}>{props.body}</p>}<div className="puck-buttons">{(props.buttons || []).map((button, index) => <ButtonPreview key={index} button={button} index={index} />)}</div></div></SectionShell>
    },
    ImageBlock: {
      label: "Image",
      fields: {
        customFontUrl: externalFontField("External Font URL For This Block"),
        title: { type: "text", label: "Optional Title" },
        ...textStyleFields("title"),
        imageUrl: imageUploadField("Image Upload"),
        imageAlt: { type: "text", label: "Image Alt Text" },
        width: { type: "text", label: "Image Width", placeholder: "900px or 100%" },
        radius: { type: "text", label: "Rounded Corners" },
        shadow: {
          type: "text",
          label: "Image Shadow",
          placeholder: "none or 0 20px 60px rgba(0,0,0,.45)"
        },
        align: { type: "select", label: "Align", options: [{ label: "Left", value: "left" }, { label: "Center", value: "center" }, { label: "Right", value: "right" }] },
        maxWidth: { type: "text", label: "Container Width" },
        backgroundColor: colorField("Background Color"),
        paddingY: { type: "number", label: "Top/Bottom Padding" },
        paddingX: { type: "number", label: "Left/Right Padding" }
      },
defaultProps: clone(defaultContent[1].props),
      render: props => (
        <section
          className="puck-section"
          style={{
            background: props.backgroundColor || "transparent",
            padding: `${props.paddingY || 40}px ${props.paddingX || 24}px`,
            textAlign: props.align || "center"
          }}
        >
          {applyFontImport(props.customFontUrl)}
          <div className="puck-inner" style={{ maxWidth: props.maxWidth || "1100px" }}>
            {props.title && (
              <h2
                className="puck-title"
                style={{
                  fontSize: props.titleSize || "3rem",
                  color: props.titleColor || "inherit",
                  fontFamily: props.titleFont || "inherit",
                  fontWeight: props.titleWeight || "inherit"
                }}
              >
                {props.title}
              </h2>
            )}

            {props.imageUrl && (
              <img
                className="puck-image"
                src={props.imageUrl}
                alt={props.imageAlt || props.title || "Image"}
                style={{
                  width: props.width || "900px",
                  borderRadius: props.radius || "8px",
                  boxShadow: props.shadow || "none"
                }}
              />
            )}
          </div>
        </section>
      )
    },
    ButtonRow: {
      label: "Button Row",
      fields: { customFontUrl: externalFontField("External Font URL For Buttons"), ...sectionFields, buttons: buttonArrayField },
defaultProps: clone(defaultContent[2].props),
      render: props => <SectionShell {...props}>{applyFontImport(props.customFontUrl)}<div className="puck-inner"><div className="puck-buttons">{(props.buttons || []).map((button, index) => <ButtonPreview key={index} button={button} index={index} />)}</div></div></SectionShell>
    },
    SocialIcons: {
      label: "Social Icons",
      fields: {
        title: { type: "text", label: "Title" },
        titleColor: colorField("Title Color"),
        titleFont: fontField("Title Font"),
        titleSize: { type: "text", label: "Title Font Size" },
        titleWeight: { type: "select", label: "Title Weight", options: [{ label: "Default", value: "inherit" }, { label: "Regular", value: "400" }, { label: "Bold", value: "700" }, { label: "Black", value: "900" }] },
        ...sectionFields,
        links: {
          type: "array",
          label: "Social Links - add as many as you want",
          arrayFields: {
            platform: { type: "select", label: "Platform", options: socialPlatformOptions },
            label: { type: "text", label: "Custom Label / Title" },
            url: { type: "text", label: "URL" },
            iconColor: colorField("Icon Color"),
            backgroundColor: colorField("Icon Background"),
            borderColor: colorField("Icon Border Color")
          },
defaultItemProps: {
  text: "New Button",
  url: "#",
  backgroundColor: "#8b3df4",
  textColor: "#ffffff",
  fontFamily: "inherit",
  fontSize: "16px",
  borderWidth: "0px",
  borderColor: "rgba(255,255,255,.25)", }
        }
      },
defaultProps: clone(defaultContent[3].props),
      render: props => <SectionShell {...props}><div className="puck-inner" style={{ textAlign: "center" }}>{props.title && <p className="teaser" style={{ color: props.titleColor || "inherit", fontFamily: props.titleFont || "inherit", fontSize: props.titleSize || "inherit", fontWeight: props.titleWeight || "inherit" }}>{props.title}</p>}<nav className="puck-social-links social-links">{(props.links || []).filter(link => link.url).map((link, index) => <a key={index} className="social-link" href={link.url || "#"} title={link.label || link.platform} style={{ color: link.iconColor || "inherit", background: link.backgroundColor || "rgba(255,255,255,.03)", borderColor: link.borderColor || "rgba(255,255,255,.18)" }}><SocialIcon platform={link.platform} label={link.label} /></a>)}</nav></div></SectionShell>
    },
    Columns: {
      label: "Columns / Cards",
      fields: {
        customFontUrl: externalFontField("External Font URL For This Block"),
        columns: { type: "number", label: "Columns" },
        gap: { type: "number", label: "Gap" },
        imageRadius: { type: "text", label: "Image Radius" },
        ...sectionFields,
        items: {
          type: "array",
          label: "Cards",
          arrayFields: {
            title: { type: "text", label: "Title" },
            titleColor: colorField("Title Color"),
            titleFont: fontField("Title Font"),
            titleSize: { type: "text", label: "Title Size" },
            body: { type: "textarea", label: "Body" },
            bodyColor: colorField("Body Color"),
            bodyFont: fontField("Body Font"),
            bodySize: { type: "text", label: "Body Size" },
            imageUrl: imageUploadField("Card Image Upload"),
            buttonText: { type: "text", label: "Button Text" },
            buttonUrl: { type: "text", label: "Button URL" },
            buttonBackgroundColor: colorField("Button Background"),
            buttonTextColor: colorField("Button Text Color"),
            buttonFont: fontField("Button Font"),
buttonFontSize: { type: "text", label: "Button Font Size" },
buttonBorderWidth: {
  type: "select",
  label: "Button Border",
  options: [
    { label: "No Border", value: "0px" },
    { label: "Thin Border", value: "1px" },
    { label: "Medium Border", value: "2px" },
    { label: "Thick Border", value: "4px" }
  ]
},
buttonBorderColor: colorField("Button Border Color"),
buttonBoxShadow: { type: "text", label: "Button Glow / Shadow" },
            buttonTextTransform: { type: "select", label: "Button Text Case", options: [
              { label: "Uppercase", value: "uppercase" },
              { label: "Normal", value: "none" },
              { label: "Lowercase", value: "lowercase" },
              { label: "Capitalize", value: "capitalize" }
            ] },
            buttonRadius: { type: "text", label: "Button Radius" }
          },
          defaultItemProps: { title: "Card title", titleColor: "#ffffff", titleFont: "inherit", titleSize: "1.4rem", body: "Card text", bodyColor: "#ffffff", bodyFont: "inherit", bodySize: "1rem", imageUrl: "", buttonText: "", buttonUrl: "#", buttonBackgroundColor: "#8b3df4", buttonTextColor: "#ffffff", buttonFont: "inherit", buttonFontSize: "16px", buttonBorderWidth: "0px", buttonBorderColor: "transparent", buttonBoxShadow: "none", buttonTextTransform: "uppercase", buttonRadius: "999px" }
        }
      },
      defaultProps: { columns: 2, gap: 24, imageRadius: "8px", backgroundColor: "transparent", textColor: "#ffffff", paddingY: 50, paddingX: 24, customFontUrl: "", items: [{ title: "First Card", body: "Edit this card.", imageUrl: "", buttonText: "", buttonUrl: "#", buttonBorderWidth: "0px", buttonBorderColor: "transparent" }, { title: "Second Card", body: "Edit this card.", imageUrl: "", buttonText: "", buttonUrl: "#" }] },
      render: props => <SectionShell {...props}>{applyFontImport(props.customFontUrl)}<div className="puck-inner"><div className="puck-columns" style={{ "--cols": props.columns || 2, "--gap": `${props.gap || 24}px` }}>{(props.items || []).map((item, index) => <div className="puck-card" key={index}>{item.imageUrl && <img className="puck-image" src={item.imageUrl} alt={item.title || "Column image"} style={{ width: "100%", borderRadius: props.imageRadius || "8px", marginBottom: 16 }} />}{item.title && <h3 style={{ color: item.titleColor || "inherit", fontFamily: item.titleFont || "inherit", fontSize: item.titleSize || "inherit" }}>{item.title}</h3>}{item.body && <p style={{ color: item.bodyColor || "inherit", fontFamily: item.bodyFont || "inherit", fontSize: item.bodySize || "inherit" }}>{item.body}</p>}{item.buttonText && <ButtonPreview button={{ text: item.buttonText, url: item.buttonUrl, backgroundColor: item.buttonBackgroundColor, textColor: item.buttonTextColor, fontFamily: item.buttonFont, fontSize: item.buttonFontSize, borderWidth: item.buttonBorderWidth, borderColor: item.buttonBorderColor, radius: item.buttonRadius, boxShadow: item.buttonBoxShadow, textTransform: item.buttonTextTransform }} />}</div>)}</div></div></SectionShell>
    },
    Spacer: {
      label: "Spacer",
      fields: { height: { type: "number", label: "Height" }, backgroundColor: colorField("Background Color") },
      defaultProps: { height: 40, backgroundColor: "transparent" },
      render: props => <div className="puck-spacer" style={{ height: props.height || 40, background: props.backgroundColor || "transparent" }} />
    },
    Embed: {
      label: "Custom HTML Embed",
      fields: { html: { type: "textarea", label: "HTML" }, backgroundColor: colorField("Background Color"), paddingY: { type: "number", label: "Top/Bottom Padding" }, paddingX: { type: "number", label: "Left/Right Padding" } },
      defaultProps: { html: "<p>Custom HTML here</p>", backgroundColor: "transparent", paddingY: 30, paddingX: 24 },
      render: props => <section className="puck-section" style={{ padding: `${props.paddingY || 30}px ${props.paddingX || 24}px`, background: props.backgroundColor || "transparent" }}><div className="puck-inner" dangerouslySetInnerHTML={{ __html: props.html || "" }} /></section>
    }
  }
};

export const puckEditorCss = `
${puckPageCss()}
.puck-font-loader-note{padding:16px;border:1px dashed rgba(255,255,255,.35);border-radius:12px;text-align:center;opacity:.75;}
`;
