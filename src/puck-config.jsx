import React, { useEffect, useState } from "react"; 
import { puckPageCss } from "./puck-render-html.js";
import privacyPageSource from "../privacy.html?raw";
import termsPageSource from "../terms.html?raw";

const SITE_SLUG = "graverobber";

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

function legalPageHtml(source) {
  const content = source.match(/<!-- PUCK_LEGAL_START -->([\s\S]*?)<!-- PUCK_LEGAL_END -->/i)?.[1] || "";
  const styles = Array.from(source.matchAll(/<style>([\s\S]*?)<\/style>/gi))
    .map(match => match[1])
    .join("\n");

  return `<style>${styles}
.puck-legal-page{width:100vw;margin-left:calc(50% - 50vw);}
.puck-legal-page .site-header,.puck-legal-page .policy-wrap{max-width:none;}
</style><div class="puck-legal-page">${content}</div>`;
}

function parseGalleryHeight(value) {
  const number = Number(String(value || "").replace(/[^0-9.]/g, ""));
  return Number.isFinite(number) && number > 0 ? number : 920;
}

function compactFreeformGalleryProps(props = {}) {
  const images = (props.images || []).filter(image => image.imageUrl);
  if ((props.layoutMode || "grid") !== "freeform" || !images.length) return props;

  const sourceHeight = parseGalleryHeight(props.canvasHeight);
  const minTop = images.reduce((min, image) => {
    const y = Number.isFinite(Number(image.y)) ? Number(image.y) : 0;
    return Math.min(min, (Math.min(100, Math.max(0, y)) / 100) * sourceHeight);
  }, Infinity);
  const compactedImages = images.map((image, index) => {
    const y = Number.isFinite(Number(image.y)) ? Number(image.y) : 0;
    const topPx = ((Math.min(100, Math.max(0, y)) / 100) * sourceHeight) - minTop;
    const x = Number.isFinite(Number(image.x)) ? image.x : (index % 3) * 32 + 5;

    return {
      ...image,
      x,
      yPx: Math.max(0, topPx)
    };
  });
  const bottomPx = compactedImages.reduce((max, image) => {
    const width = Number(String(image.width || "280").replace(/[^0-9.]/g, "")) || 280;
    const estimatedHeight = Math.min(520, Math.max(170, width * 0.72));
    return Math.max(max, image.yPx + estimatedHeight + 22);
  }, 0);
  const compactHeight = Math.max(260, Math.ceil(bottomPx));

  return {
    ...props,
    canvasHeight: `${compactHeight}px`,
    images: compactedImages.map(image => ({
      ...image,
      y: compactHeight ? (image.yPx / compactHeight) * 100 : 0
    }))
  };
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

const placementOptions = [
  { label: "Left", value: "left" },
  { label: "Center", value: "center" },
  { label: "Right", value: "right" }
];

function unitNumberField(label, options = {}) {
  return {
    type: "text",
    label,
    placeholder: options.placeholder || "Example: 100px"
  };
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

    buttonType: {
      type: "select",
      label: "Button Type",
      options: [
        { label: "Normal Link Button", value: "link" },
        { label: "Dropdown Button", value: "dropdown" }
      ]
    },

    dropdownLinks: {
      type: "array",
      label: "Dropdown Links",
      arrayFields: {
        text: { type: "text", label: "Dropdown Link Text" },
        url: { type: "text", label: "Dropdown Link URL" },
        backgroundColor: colorField("Dropdown Link Background"),
        textColor: colorField("Dropdown Link Text Color"),
        fontFamily: fontField("Dropdown Link Font"),
        fontSize: { type: "text", label: "Dropdown Link Font Size", placeholder: "14px" },
        borderColor: colorField("Dropdown Link Border Color"),
        boxShadow: { type: "text", label: "Dropdown Link Glow / Shadow", placeholder: "none or 0 0 14px #00ff04" },
        textTransform: {
          type: "select",
          label: "Dropdown Link Text Case",
          options: [
            { label: "Default", value: "" },
            { label: "Uppercase", value: "uppercase" },
            { label: "Normal", value: "none" },
            { label: "Lowercase", value: "lowercase" },
            { label: "Capitalize", value: "capitalize" }
          ]
        },
        radius: { type: "text", label: "Dropdown Link Rounded Corners", placeholder: "10px" },
        padding: { type: "text", label: "Dropdown Link Padding", placeholder: "10px 12px" }
      },
      defaultItemProps: {
        text: "New Dropdown Link",
        url: "#",
        backgroundColor: "transparent",
        textColor: "#ffffff",
        fontFamily: "inherit",
        fontSize: "14px",
        borderColor: "transparent",
        boxShadow: "none",
        textTransform: "uppercase",
        radius: "10px",
        padding: "10px 12px"
      }
    },

    dropdownBackgroundColor: colorField("Dropdown Menu Background"),
    dropdownBorderColor: colorField("Dropdown Menu Border Color"),
    dropdownBoxShadow: { type: "text", label: "Dropdown Menu Glow / Shadow", placeholder: "0 0 24px rgba(57,255,20,.35)" },
    dropdownRadius: { type: "text", label: "Dropdown Menu Rounded Corners", placeholder: "16px" },
    dropdownPadding: { type: "text", label: "Dropdown Menu Padding", placeholder: "10px" },
    dropdownMinWidth: { type: "text", label: "Dropdown Menu Width", placeholder: "190px" },

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
    textTransform: {
      type: "select",
      label: "Text Case",
      options: [
        { label: "Default", value: "" },
        { label: "Uppercase", value: "uppercase" },
        { label: "Normal", value: "none" },
        { label: "Lowercase", value: "lowercase" },
        { label: "Capitalize", value: "capitalize" }
      ]
    },
    radius: { type: "text", label: "Button Rounded Corners", placeholder: "999px" },
    padding: { type: "text", label: "Button Padding", placeholder: "14px 24px" }
  },
  defaultItemProps: {
    text: "New Button",
    url: "#",
    buttonType: "link",
    dropdownLinks: [],
    dropdownBackgroundColor: "rgba(0,0,0,.96)",
    dropdownBorderColor: "rgba(57,255,20,.55)",
    dropdownBoxShadow: "0 0 24px rgba(57,255,20,.35)",
    dropdownRadius: "16px",
    dropdownPadding: "10px",
    dropdownMinWidth: "190px",
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
    justifyContent: "center",
    cursor: "pointer"
  };

  if (button.buttonType === "dropdown") {
    return (
      <div className="puck-dropdown">
        <button className="puck-btn puck-dropdown-trigger" type="button" style={style}>
          {button.text}
        </button>

        <div
          className="puck-dropdown-menu"
          style={{
            background: button.dropdownBackgroundColor || "rgba(0,0,0,.96)",
            borderColor: button.dropdownBorderColor || "rgba(57,255,20,.55)",
            boxShadow: button.dropdownBoxShadow || "0 0 24px rgba(57,255,20,.35)",
            borderRadius: button.dropdownRadius || "16px",
            padding: button.dropdownPadding || "10px",
            minWidth: button.dropdownMinWidth || "190px"
          }}
        >
          {(button.dropdownLinks || []).map((item, index) => (
            <a
              key={index}
              href={item.url || "#"}
              style={{
                background: item.backgroundColor || "transparent",
                color: item.textColor || "#ffffff",
                fontFamily: item.fontFamily || "inherit",
                fontSize: item.fontSize || "14px",
                borderColor: item.borderColor || "transparent",
                boxShadow: item.boxShadow || "none",
                textTransform: item.textTransform || "uppercase",
                borderRadius: item.radius || "10px",
                padding: item.padding || "10px 12px"
              }}
            >
              {item.text || "Dropdown Link"}
            </a>
          ))}
        </div>
      </div>
    );
  }

  return (
    <a className="puck-btn" href={button.url || "#"} style={style}>
      {button.text}
    </a>
  );
}

function SocialIcon({ platform, label }) {
  const name = String(platform || "custom").toLowerCase().trim();

  if (name === "facebook") {
    return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.019 4.388 10.994 10.125 11.854v-8.385H7.078v-3.469h3.047V9.431c0-3.007 1.791-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.249h3.328l-.532 3.469h-2.796v8.385C19.612 23.067 24 18.092 24 12.073z" /></svg>;
  }

  if (name === "instagram") {
    return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3.5A4.5 4.5 0 1112 16a4.5 4.5 0 010-9zm0 2A2.5 2.5 0 1012 14a2.5 2.5 0 000-5zm5.25-3.25a1.25 1.25 0 11-1.25 1.25 1.25 1.25 0 011.25-1.25z" /></svg>;
  }

  if (name === "spotify") {
    return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 1.8A10.2 10.2 0 1022.2 12 10.2 10.2 0 0012 1.8zm4.68 14.72a.76.76 0 01-1.05.25 9.58 9.58 0 00-7.28-.78.76.76 0 11-.44-1.46 11.13 11.13 0 018.52.94.76.76 0 01.25 1.05zm1.25-2.77a.9.9 0 01-1.24.3 11.75 11.75 0 00-8.62-.96.9.9 0 11-.52-1.72 13.5 13.5 0 019.96 1.14.9.9 0 01.42 1.24zm.13-2.94a14.15 14.15 0 00-10.4-1.13 1.05 1.05 0 11-.61-2.01 16.3 16.3 0 0112.08 1.32 1.05 1.05 0 11-1.07 1.82z" /></svg>;
  }

  if (name === "youtube") {
    return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 00.5 6.2 31.5 31.5 0 000 12a31.5 31.5 0 00.5 5.8 3 3 0 002.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 002.1-2.1A31.5 31.5 0 0024 12a31.5 31.5 0 00-.5-5.8zM9.6 15.6V8.4L15.8 12l-6.2 3.6z" /></svg>;
  }

  return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>;
}

function SectionShell({ children, backgroundColor = "transparent", textColor = "inherit", paddingY = 50, paddingX = 24 }) {
  return <section className="puck-section" style={{ background: backgroundColor, color: textColor, padding: `${paddingY}px ${paddingX}px` }}>{children}</section>;
}

function SignupFormPreview(props) {
  return (
    <section
      className="puck-section graverobber-contact-form-section graverobber-signup-form-section"
      style={{
        background: props.backgroundColor || "#000000",
        padding: `${props.paddingY || 30}px ${props.paddingX || 24}px ${props.paddingBottom || 80}px`
      }}
    >
      <div className="puck-inner graverobber-contact-inner">
        <form className="graverobber-custom-contact-form" onSubmit={event => event.preventDefault()}>
          <label>
            {props.nameLabel || "What are you called?"}
            <input type="text" name={props.nameEntry || "entry.821607845"} />
          </label>

          <label>
            {props.emailLabel || "What is your email?"}
            <input type="email" name={props.emailEntry || "entry.216699627"} />
          </label>

          <label>
            {props.phoneLabel || "What is your phone number?"}
            <input type="tel" name={props.phoneEntry || "entry.1566132030"} />
          </label>

          <label>
            {props.zipLabel || "What is your zip code?"}
            <input type="text" name={props.zipEntry || "entry.848273318"} />
          </label>

          <button type="submit">{props.buttonText || "Join the Army of the Dead"}</button>
          <p className="graverobber-contact-success" aria-live="polite">{props.successMessage || ""}</p>
        </form>

        <iframe className="graverobber-hidden-submit-frame" name="graverobber-signup-hidden-frame" title="Hidden signup submit frame" />
      </div>
    </section>
  );
}

function ContactFormPreview(props) {
  return (
    <section
      className="puck-section graverobber-contact-form-section"
      style={{
        background: props.backgroundColor || "#000000",
        padding: `${props.paddingY || 30}px ${props.paddingX || 24}px ${props.paddingBottom || 80}px`
      }}
    >
      <div className="puck-inner graverobber-contact-inner">
        <form className="graverobber-custom-contact-form" onSubmit={event => event.preventDefault()}>
          <label>
            {props.nameLabel || "What are you called?"}
            <input type="text" name={props.nameEntry || "entry.111991046"} />
          </label>

          <label>
            {props.emailLabel || "What is your email?"}
            <input type="email" name={props.emailEntry || "entry.709491702"} />
          </label>

          <label>
            {props.messageLabel || "What do you want?"}
            <textarea name={props.messageEntry || "entry.905150677"} rows={Number(props.messageRows || 7)} />
          </label>

          <button type="submit">{props.buttonText || "Send Message"}</button>
          <p className="graverobber-contact-success" aria-live="polite">{props.successMessage || ""}</p>
        </form>

        <iframe className="graverobber-hidden-submit-frame" name="graverobber-contact-hidden-frame" title="Hidden contact submit frame" />
      </div>
    </section>
  );
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
      imageRadius: "0px",
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
        { text: "Join the Army of the Dead", url: "signup.html", backgroundColor: "transparent", textColor: "#ffffff", fontFamily: "Oswald, sans-serif", fontSize: "16px", borderWidth: "1px", borderColor: "rgba(255,255,255,.35)", boxShadow: "none", textTransform: "uppercase", radius: "999px", padding: "16px 34px" },
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
        { text: "Army of the Dead", url: "signup.html", backgroundColor: "transparent", textColor: "#ffffff", fontFamily: "Oswald, sans-serif", fontSize: "16px", borderWidth: "1px", borderColor: "rgba(255,255,255,.35)", boxShadow: "none", textTransform: "uppercase", radius: "999px", padding: "16px 34px" }
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

const backgroundStyleOptions = [
  { label: "Grave Robber Ombre", value: "grave-ombre" },
  { label: "Solid Color", value: "solid" },
  { label: "Vertical Gradient", value: "vertical-gradient" },
  { label: "Horizontal Gradient", value: "horizontal-gradient" },
  { label: "Diagonal Gradient", value: "diagonal-gradient" },
  { label: "Radial Center Glow", value: "radial-glow" },
  { label: "Top Spotlight", value: "top-glow" },
  { label: "Bottom Spotlight", value: "bottom-glow" },
  { label: "Left Glow", value: "left-glow" },
  { label: "Right Glow", value: "right-glow" },
  { label: "Double Glow", value: "double-glow" },
  { label: "Triple Horror Fog", value: "triple-fog" },
  { label: "Red Black Vignette", value: "red-vignette" },
  { label: "Custom CSS", value: "custom" }
];

export const defaultPageBackgroundProps = {
  backgroundStyle: "grave-ombre",

  pageBaseColor: "#030000",
  pageSecondColor: "#000000",
  pageThirdColor: "",

  pageGlowColor: "#00ff04",
  pageSecondGlowColor: "#000000",
  pageThirdGlowColor: "",

  pageTextColor: "#f5f0e6",

  pageGradientAngle: "180deg",

  pageGlowPosition: "center 18%",
  pageGlowSize: "34%",

  pageSecondGlowPosition: "center 70%",
  pageSecondGlowSize: "45%",

  pageThirdGlowPosition: "center center",
  pageThirdGlowSize: "75%",

  customBackgroundCss: ""
};

export function pageBackgroundCss(props = {}) {
  const settings = { ...defaultPageBackgroundProps, ...(props || {}) };

  const base = settings.pageBaseColor || "#030000";
  const color2 = settings.pageSecondColor || "#160000";
  const color3 = settings.pageThirdColor || "#000000";
  const glow1 = settings.pageGlowColor || "rgba(198,40,40,.18)";
  const glow2 = settings.pageSecondGlowColor || "rgba(198,40,40,.10)";
  const glow3 = settings.pageThirdGlowColor || "rgba(0,0,0,.65)";
  const angle = settings.pageGradientAngle || "180deg";

  const pos1 = settings.pageGlowPosition || "center 18%";
  const size1 = settings.pageGlowSize || "34%";
  const pos2 = settings.pageSecondGlowPosition || "center 70%";
  const size2 = settings.pageSecondGlowSize || "45%";
  const pos3 = settings.pageThirdGlowPosition || "center center";
  const size3 = settings.pageThirdGlowSize || "75%";

  if (settings.backgroundStyle === "solid") {
    return base;
  }

  if (settings.backgroundStyle === "vertical-gradient") {
    return `linear-gradient(180deg, ${color2} 0%, ${base} 55%, ${color3} 100%)`;
  }

  if (settings.backgroundStyle === "horizontal-gradient") {
    return `linear-gradient(90deg, ${color2} 0%, ${base} 50%, ${color3} 100%)`;
  }

  if (settings.backgroundStyle === "diagonal-gradient") {
    return `linear-gradient(${angle}, ${color2} 0%, ${base} 52%, ${color3} 100%)`;
  }

  if (settings.backgroundStyle === "radial-glow") {
    return `radial-gradient(circle at ${pos1}, ${glow1}, transparent ${size1}), ${base}`;
  }

  if (settings.backgroundStyle === "top-glow") {
    return `radial-gradient(circle at top center, ${glow1}, transparent ${size1}), linear-gradient(180deg, ${color2}, ${base})`;
  }

  if (settings.backgroundStyle === "bottom-glow") {
    return `radial-gradient(circle at bottom center, ${glow1}, transparent ${size1}), linear-gradient(180deg, ${base}, ${color2})`;
  }

  if (settings.backgroundStyle === "left-glow") {
    return `radial-gradient(circle at left center, ${glow1}, transparent ${size1}), linear-gradient(90deg, ${color2}, ${base})`;
  }

  if (settings.backgroundStyle === "right-glow") {
    return `radial-gradient(circle at right center, ${glow1}, transparent ${size1}), linear-gradient(90deg, ${base}, ${color2})`;
  }

  if (settings.backgroundStyle === "double-glow") {
    return `radial-gradient(circle at ${pos1}, ${glow1}, transparent ${size1}), radial-gradient(circle at ${pos2}, ${glow2}, transparent ${size2}), ${base}`;
  }

  if (settings.backgroundStyle === "triple-fog") {
    return `radial-gradient(circle at ${pos1}, ${glow1}, transparent ${size1}), radial-gradient(circle at ${pos2}, ${glow2}, transparent ${size2}), radial-gradient(circle at ${pos3}, ${glow3}, transparent ${size3}), linear-gradient(${angle}, ${color2}, ${base}, ${color3})`;
  }

  if (settings.backgroundStyle === "red-vignette") {
    return `radial-gradient(circle at ${pos1}, ${glow1}, transparent ${size1}), radial-gradient(circle at center, transparent 0%, transparent 52%, ${glow3} 100%), linear-gradient(${angle}, ${color2}, ${base}, ${color3})`;
  }

  if (settings.backgroundStyle === "custom") {
    return settings.customBackgroundCss || base;
  }

  return `radial-gradient(circle at ${pos1}, ${glow1}, transparent ${size1}), radial-gradient(circle at ${pos2}, ${glow2}, transparent ${size2}), linear-gradient(180deg, ${color2}, ${base})`;
}

function createPageContent(pageName = "home") {
  if (pageName === "privacy" || pageName === "terms") {
    return [
      {
        type: "Embed",
        props: {
          id: `graverobber-${pageName}-page-1`,
          html: legalPageHtml(pageName === "privacy" ? privacyPageSource : termsPageSource),
          backgroundColor: "transparent",
          paddingY: 0,
          paddingX: 0
        }
      }
    ];
  }

  const coffeeButton = {
    text: "☕ Buy Grave Robber a Coffee",
    url: "https://www.paypal.com/donate/?business=graverobber.punk%40gmail.com&currency_code=USD",
    backgroundColor: "#000000",
    textColor: "#bb00ff",
    fontFamily: "Oswald, sans-serif",
    fontSize: "14px",
    borderWidth: "1px",
    borderColor: "#00ff04",
    boxShadow: "0 0 24px #00ff04",
    textTransform: "uppercase",
    radius: "999px",
    padding: "10px 16px"
  };

  const homeHeaderButtons = [
    { text: "Home", url: "index.html", backgroundColor: "#000000", textColor: "#bb00ff", fontFamily: "Oswald, sans-serif", fontSize: "14px", borderWidth: "1px", borderColor: "#00ff04", boxShadow: "0 0 24px #00ff04", textTransform: "uppercase", radius: "999px", padding: "10px 16px" },
    { text: "Shows", url: "shows.html", backgroundColor: "#000000", textColor: "#bb00ff", fontFamily: "Oswald, sans-serif", fontSize: "14px", borderWidth: "1px", borderColor: "#00ff04", boxShadow: "0 0 24px #00ff04", textTransform: "uppercase", radius: "999px", padding: "10px 16px" },
    { text: "About", url: "about.html", backgroundColor: "#000000", textColor: "#bb00ff", fontFamily: "Oswald, sans-serif", fontSize: "14px", borderWidth: "1px", borderColor: "#00ff04", boxShadow: "0 0 24px #00ff04", textTransform: "uppercase", radius: "999px", padding: "10px 16px" },
    { text: "Graffiti Wall", url: "graffiti-wall.html", backgroundColor: "#000000", textColor: "#bb00ff", fontFamily: "Oswald, sans-serif", fontSize: "14px", borderWidth: "1px", borderColor: "#00ff04", boxShadow: "0 0 24px #00ff04", textTransform: "uppercase", radius: "999px", padding: "10px 16px" },
    { text: "Admin", url: "admin.html", backgroundColor: "#000000", textColor: "#bb00ff", fontFamily: "Oswald, sans-serif", fontSize: "14px", borderWidth: "1px", borderColor: "#00ff04", boxShadow: "0 0 24px #00ff04", textTransform: "uppercase", radius: "999px", padding: "10px 16px" }
  ];

  const homeHeaderProps = {
    backgroundColor: "#000000",
    lineColor: "#bb00ff",
    lineShadow: "0 0 24px #bb00ff",
    showBack: "hide",
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
    buttons: homeHeaderButtons
  };

  const coffeeBackReplacementProps = {
    showBack: "hide",
    leftButtons: [coffeeButton]
  };

  const armyPopupProps = {
    id: `graverobber-${pageName}-popup-1`,
    showInEditor: "no",
    exitTriggerDistance: 70,
    theme: "toxic",
    animationStyle: "pop",
    eyebrow: "WELCOME TO THE GRAVE",
    title: "Join the Army of the Dead",
    body: "You have crossed into Grave Robber territory. Join the Army of the Dead and march with us into the noise.",
    align: "center",
    titleColor: "#00ff04",
    titleFont: "Creepster, cursive",
    titleSize: "clamp(44px, 8vw, 92px)",
    titleShadow: "0 0 18px #00ff04, 0 0 42px rgba(187,0,255,.85)",
    bodyColor: "#ffffff",
    bodyFont: "Special Elite, cursive",
    bodySize: "20px",
    backgroundColor: "transparent",
    cardBackground: "linear-gradient(135deg, rgba(0,0,0,.92), rgba(32,0,46,.88))",
    borderColor: "#bb00ff",
    glowColor: "#00ff04",
    radius: "28px",
    maxWidth: "920px",
    paddingY: 70,
    paddingX: 24,
    customFontUrl: "",
    noThanksText: "No Thanks",
    noThanksBackgroundColor: "transparent",
    noThanksTextColor: "#ffffff",
    noThanksBorderColor: "rgba(255,255,255,.45)",
    buttons: [
      {
        text: "Join the Army of the Dead",
        url: "signup.html",
        backgroundColor: "#bb00ff",
        textColor: "#ffffff",
        fontFamily: "Oswald, sans-serif",
        fontSize: "16px",
        borderWidth: "2px",
        borderColor: "#00ff04",
        boxShadow: "0 0 24px rgba(0,255,4,.75)",
        textTransform: "uppercase",
        radius: "999px",
        padding: "14px 28px"
      }
    ]
  };

  if (pageName === "contact") {
    return [
      {
        type: "HeaderNav",
        props: {
          id: "graverobber-contact-header-1",
          backgroundColor: "#000000",
          lineColor: "#bb00ff",
          lineShadow: "0 0 24px #bb00ff",
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
          buttons: homeHeaderButtons,
          ...coffeeBackReplacementProps
        }
      },
      {
        type: "ContactForm",
        props: {
          id: "graverobber-contact-form-1",
          formAction: "https://docs.google.com/forms/d/e/1FAIpQLSfvFy-I4z36zqLz4y4boVhM4eTL7KEb5Ip1It7OZyFfxlRgMw/formResponse",
          nameEntry: "entry.111991046",
          emailEntry: "entry.709491702",
          messageEntry: "entry.905150677",
          nameLabel: "What are you called?",
          emailLabel: "What is your email?",
          messageLabel: "What do you want?",
          messageRows: 7,
          buttonText: "Send Message",
          successMessage: "Great, your message was sent and we will get back to you shortly.",
          backgroundColor: "#000000",
          paddingY: 30,
          paddingX: 24,
          paddingBottom: 80
        }
      },
      {
        type: "GraveRobberSocial",
        props: {
          id: "graverobber-contact-social-1",
          title: "Follow Grave Robber",
          titleColor: "#00ff04",
          titleFont: "Oswald, sans-serif",
          titleSize: "1rem",
          backgroundColor: "#000000",
          textColor: "#00ff04",
          paddingY: 50,
          paddingX: 24,
          links: [
            { platform: "facebook", label: "Facebook", url: "https://www.facebook.com/graverobberpunk", iconColor: "#bb00ff", backgroundColor: "#000000", borderColor: "#00ff04" },
            { platform: "instagram", label: "Instagram", url: "https://www.instagram.com/graverobberpunk", iconColor: "#bb00ff", backgroundColor: "#000000", borderColor: "#00ff04" },
            { platform: "spotify", label: "Spotify", url: "https://open.spotify.com/artist/4D34aUp0OsDs8mAEWPIP7c", iconColor: "#bb00ff", backgroundColor: "#000000", borderColor: "#00ff04" },
            { platform: "youtube", label: "YouTube", url: "https://www.youtube.com/@GraveRobberPunk", iconColor: "#bb00ff", backgroundColor: "#000000", borderColor: "#00ff04" },
            { platform: "email", label: "Email", url: "mailto:graverobber.punk@gmail.com", iconColor: "#bb00ff", backgroundColor: "#000000", borderColor: "#00ff04" }
          ]
        }
      }
    ];
  }
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
          buttons: homeHeaderButtons,
          ...coffeeBackReplacementProps
        }
      },
      {
        type: "TextBlock",
        props: {
          id: "graverobber-shows-title-1",
          eyebrow: "Live with the Army of the Dead",
          eyebrowColor: "#c62828",
          eyebrowFont: "Oswald, sans-serif",
          eyebrowSize: "1rem",
          eyebrowWeight: "700",
          title: "Shows",
          titleSize: "4rem",
          titleColor: "#ffffff",
          titleFont: "Creepster, cursive",
          titleWeight: "700",
          body: "Join the Army of the Dead to hear when the next haunt is announced.",
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
          html: '<div class="gr-bandsintown-widget"><style>.gr-bandsintown-widget,.gr-bandsintown-widget .bit-widget,.gr-bandsintown-widget [class*="bit-event"]{background:transparent!important;color:#ffffff!important}.gr-bandsintown-widget a,.gr-bandsintown-widget [class*="bit-date"],.gr-bandsintown-widget [class*="bit-location"],.gr-bandsintown-widget [class*="bit-venue"]{color:#ffffff!important}.gr-bandsintown-widget button,.gr-bandsintown-widget [class*="bit-button"],.gr-bandsintown-widget [class*="bit-cta"],.gr-bandsintown-widget a[class*="bit-rsvp"],.gr-bandsintown-widget a[class*="bit-offers"]{background:#000000!important;color:#bb00ff!important;border:1px solid #00ff04!important;box-shadow:0 0 24px rgba(0,255,4,.75)!important}</style><script charset="utf-8" src="https://widgetv3.bandsintown.com/main.min.js"></script><a class="bit-widget-initializer" data-artist-name="id_370380" data-app-id="b6eb44f4c7b30b8e877c0dffa1414f0a" data-background-color="rgba(0,0,0,0)" data-text-color="#ffffff" data-link-color="#00ff04" data-link-text-color="#bb00ff" data-separator-color="rgba(0,255,4,.55)" data-popup-background-color="#000000" data-event-ticket-cta-text-color="#bb00ff" data-event-ticket-cta-bg-color="#000000" data-event-ticket-cta-border-color="#00ff04" data-event-ticket-cta-border-width="1px" data-event-rsvp-cta-text-color="#bb00ff" data-event-rsvp-cta-bg-color="#000000" data-event-rsvp-cta-border-color="#00ff04" data-event-rsvp-cta-border-width="1px" data-follow-section-cta-text-color="#bb00ff" data-follow-section-cta-bg-color="#000000" data-follow-section-cta-border-color="#00ff04" data-follow-section-cta-border-width="1px" data-play-my-city-cta-text-color="#bb00ff" data-play-my-city-cta-bg-color="#000000" data-play-my-city-cta-border-color="#00ff04" data-play-my-city-cta-border-width="1px"></a></div>',
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
          buttons: homeHeaderButtons,
          ...coffeeBackReplacementProps
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
          title: "Army of the Dead",
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
          html: '<form id="signup-form" class="custom-form"><label>Name<input type="text" name="name" required></label><label>Email<input type="email" name="email" required></label><label>Phone<input type="tel" name="phone"></label><label>Message<textarea name="message" rows="5"></textarea></label><button type="submit">Join the Army of the Dead</button><p id="signup-status"></p></form>',
          backgroundColor: "transparent",
          paddingY: 20,
          paddingX: 24
        }
      }
    ];
  }

  if (pageName === "about") {
    return [
      {
        type: "HeaderNav",
        props: {
          id: "graverobber-about-header-1",
          ...homeHeaderProps,
          ...coffeeBackReplacementProps
        }
      },
      {
        type: "WelcomeHorrorMessage",
        props: armyPopupProps
      },
      {
        type: "TextBlock",
        props: {
          id: "graverobber-about-empty-1",
          eyebrow: "",
          title: "",
          body: "",
          align: "center",
          maxWidth: "850px",
          backgroundColor: "transparent",
          textColor: "#ffffff",
          paddingY: 120,
          paddingX: 24,
          customFontUrl: "",
          buttons: []
        }
      }
    ];
  }

  if (pageName === "graffiti-wall") {
    return [
      {
        type: "HeaderNav",
        props: {
          id: "graverobber-graffiti-header-1",
          ...homeHeaderProps,
          ...coffeeBackReplacementProps
        }
      },
      {
        type: "GraffitiWall",
        props: {
          id: "graverobber-graffiti-wall-1",
          eyebrow: "Fan wall",
          title: "Graffiti Wall",
          body: "Write a message, upload a photo, or paint something for the band. Submissions appear after admin approval.",
          nameLabel: "Your name",
          messageLabel: "Your message",
          photoLabel: "Photo with the band",
          paintLabel: "Paint",
          submitText: "Send for Approval",
          successMessage: "Submitted. It will appear after admin approval.",
          backgroundColor: "transparent",
          textColor: "#ffffff",
          accentColor: "#00ff04",
          panelBackground: "rgba(0,0,0,.72)",
          borderColor: "#bb00ff",
          paddingY: 70,
          paddingX: 24
        }
      }
    ];
  }

  if (pageName === "contact") {
    return [
      {
        type: "HeaderNav",
        props: {
          id: "graverobber-contact-header-1",
          backgroundColor: "rgba(0,0,0,.86)",
          lineColor: "#00ff04",
          lineShadow: "0 0 24px #00ff04",
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
          buttons: homeHeaderButtons,
          ...coffeeBackReplacementProps
        }
      },
      {
        type: "TextBlock",
        props: {
          id: "graverobber-contact-title-1",
          eyebrow: "Booking / Contact",
          eyebrowColor: "#00ff04",
          eyebrowFont: "Oswald, sans-serif",
          eyebrowSize: "1rem",
          eyebrowWeight: "700",
          title: "Contact Grave Robber",
          titleSize: "4rem",
          titleColor: "#bb00ff",
          titleFont: "Creepster, cursive",
          titleWeight: "700",
          body: "Use the form below for booking, merch, press, and general contact.",
          bodySize: "1.1rem",
          bodyColor: "#ffffff",
          bodyFont: "Oswald, sans-serif",
          bodyWeight: "400",
          align: "center",
          maxWidth: "850px",
          backgroundColor: "#000000",
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
          html: '<div class="graverobber-contact-form-wrap"><iframe class="graverobber-contact-form" src="https://docs.google.com/forms/d/e/1FAIpQLSfvFy-I4z36zqLz4y4boVhM4eTL7KEb5Ip1It7OZyFfxlRgMw/viewform?embedded=true" width="640" height="721" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe></div>',
          backgroundColor: "#000000",
          paddingY: 30,
          paddingX: 24
        }
      }
    ];
  }

  if (pageName === "merch") {
    return [
      {
        type: "HeaderNav",
        props: {
          id: "graverobber-merch-header-1",
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
          buttons: homeHeaderButtons,
          ...coffeeBackReplacementProps
        }
      },
      {
        type: "TextBlock",
        props: {
          id: "graverobber-merch-title-1",
          eyebrow: "Official Grave Robber merch",
          title: "Merch",
          body: "Add merch items, store links, photos, and announcements here.",
          align: "center",
          maxWidth: "850px",
          backgroundColor: "transparent",
          textColor: "#ffffff",
          paddingY: 70,
          paddingX: 24,
          titleColor: "#ffffff",
          titleFont: "Creepster, cursive",
          titleSize: "4rem",
          bodyColor: "#d6d6d6",
          bodyFont: "Oswald, sans-serif",
          bodySize: "1.1rem",
          buttons: [
            { text: "Visit Merch Store", url: "https://graverobber.bigcartel.com/", backgroundColor: "#c62828", textColor: "#ffffff", fontFamily: "Oswald, sans-serif", fontSize: "16px", borderWidth: "0px", borderColor: "transparent", boxShadow: "0 0 24px rgba(198,40,40,.35)", textTransform: "uppercase", radius: "999px", padding: "16px 34px" }
          ]
        }
      }
    ];
  }

  if (pageName === "gallery") {
    return [
      {
        type: "HeaderNav",
        props: {
          id: "graverobber-gallery-header-1",
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
          buttons: homeHeaderButtons,
          ...coffeeBackReplacementProps
        }
      },
      {
        type: "GalleryGrid",
        props: {
          title: "",
          id: "graverobber-gallery-grid-1",
          titleColor: "#ffffff",
          titleFont: "Oswald, sans-serif",
          titleSize: "2.5rem",
          backgroundColor: "transparent",
          textColor: "#ffffff",
          paddingY: 40,
          paddingX: 24,
          layoutMode: "freeform",
          canvasHeight: "920px",
          columns: 3,
          gap: 18,
          images: []
        }
      }
    ];
  }

  return [
    {
      type: "HeaderNav",
      props: {
        id: "graverobber-home-header-1",
        ...homeHeaderProps,
        leftButtons: [coffeeButton]
      }
    },
    {
      type: "GraveRobberHero",
      props: {
        id: "graverobber-home-hero-1",
        title: "Grave Robber",
        subtitle: "AMERICAN HORROR PUNK",
        body: "Horror punk from beyond the grave. Shows, music, merch, booking, and updates.",
        imageUrl: "assets/grave-robber-skull.png",
        imageAlt: "Grave Robber skull logo",
        layout: "image-top",
        imageWidth: "300px",
        imageRadius: "0px",
        imageShadow: "0 0 90px rgba(198,40,40,.38)",
        titleSize: "44px",
        titleColor: "#f5f0e6",
        titleFont: "Oswald, sans-serif",
        titleWeight: "700",
        subtitleSize: "18px",
        subtitleColor: "#e52b2b",
        subtitleFont: "Oswald, sans-serif",
        subtitleWeight: "700",
        subtitleLetterSpacing: ".45em",
        subtitleTransform: "uppercase",
        bodySize: "18px",
        bodyColor: "#cfd3d6",
        bodyFont: "Oswald, sans-serif",
        bodyWeight: "400",
        backgroundColor: "transparent",
        textColor: "#ffffff",
        paddingY: 120,
        paddingX: 24,
        maxWidth: 900,
        gap: 34,
        buttons: [
          {
            text: "Shows",
            url: "shows.html",
            backgroundColor: "#c62828",
            textColor: "#ffffff",
            fontFamily: "Oswald, sans-serif",
            fontSize: "16px",
            borderWidth: "0px",
            borderColor: "transparent",
            boxShadow: "0 0 24px rgba(198,40,40,.45)",
            textTransform: "uppercase",
            radius: "999px",
            padding: "16px 34px"
          },
          {
            text: "Music",
            url: "#music",
            backgroundColor: "#8b3df4",
            textColor: "#ffffff",
            fontFamily: "Oswald, sans-serif",
            fontSize: "16px",
            borderWidth: "0px",
            borderColor: "transparent",
            boxShadow: "0 0 24px rgba(57,255,20,.45)",
            textTransform: "uppercase",
            radius: "999px",
            padding: "16px 34px"
          },
          {
            text: "Join the Army of the Dead",
            url: "signup.html",
            backgroundColor: "#b000ff",
            textColor: "#ffffff",
            fontFamily: "Oswald, sans-serif",
            fontSize: "16px",
            borderWidth: "0px",
            borderColor: "transparent",
            boxShadow: "0 0 24px rgba(57,255,20,.55)",
            textTransform: "uppercase",
            radius: "999px",
            padding: "16px 34px"
          },
          {
            text: "About",
            url: "about.html",
            backgroundColor: "#8b3df4",
            textColor: "#ffffff",
            fontFamily: "Oswald, sans-serif",
            fontSize: "16px",
            borderWidth: "0px",
            borderColor: "transparent",
            boxShadow: "none",
            textTransform: "uppercase",
            radius: "999px",
            padding: "16px 34px"
          },
          {
            text: "Gallery",
            url: "gallery.html",
            backgroundColor: "#8b3df4",
            textColor: "#ffffff",
            fontFamily: "Oswald, sans-serif",
            fontSize: "16px",
            borderWidth: "0px",
            borderColor: "transparent",
            boxShadow: "none",
            textTransform: "uppercase",
            radius: "999px",
            padding: "16px 34px"
          },
          {
            text: "Merch",
            url: "merch.html",
            backgroundColor: "#8b3df4",
            textColor: "#ffffff",
            fontFamily: "Oswald, sans-serif",
            fontSize: "16px",
            borderWidth: "0px",
            borderColor: "transparent",
            boxShadow: "none",
            textTransform: "uppercase",
            radius: "999px",
            padding: "16px 34px"
          },
          {
            text: "Graffiti Wall",
            url: "graffiti-wall.html",
            backgroundColor: "#8b3df4",
            textColor: "#ffffff",
            fontFamily: "Oswald, sans-serif",
            fontSize: "16px",
            borderWidth: "0px",
            borderColor: "transparent",
            boxShadow: "none",
            textTransform: "uppercase",
            radius: "999px",
            padding: "16px 34px"
          },
          {
            text: "Buy the Band a Coffee",
            url: "https://www.paypal.com/donate/?business=graverobber.punk%40gmail.com&currency_code=USD",
            backgroundColor: "#000000",
            textColor: "#00ff04",
            fontFamily: "Oswald, sans-serif",
            fontSize: "16px",
            borderWidth: "1px",
            borderColor: "#00ff04",
            boxShadow: "0 0 24px rgba(57,255,20,.45)",
            textTransform: "uppercase",
            radius: "999px",
            padding: "16px 34px"
          },
          {
            text: "Booking",
            url: "contact.html",
            backgroundColor: "#b000ff",
            textColor: "#ffffff",
            fontFamily: "Oswald, sans-serif",
            fontSize: "16px",
            borderWidth: "0px",
            borderColor: "transparent",
            boxShadow: "0 0 24px rgba(57,255,20,.45)",
            textTransform: "uppercase",
            radius: "999px",
            padding: "16px 34px"
          }
        ]
      }
    },
{
  type: "Spacer",
  props: {
    id: "graverobber-home-divider-space-1",
    height: 40,
    backgroundColor: "transparent"
  }
},
    {
      type: "GraveRobberSocial",
      props: {
        id: "graverobber-home-social-1",
        title: "Follow Grave Robber",
        titleColor: "#ffffff",
        titleFont: "Oswald, sans-serif",
        titleSize: "1rem",
        backgroundColor: "transparent",
        textColor: "#ffffff",
        paddingY: 50,
        paddingX: 24,
        links: [
          {
            platform: "facebook",
            label: "Facebook",
            url: "https://www.facebook.com/graverobberpunk",
            iconColor: "#ffffff",
            backgroundColor: "transparent",
            borderColor: "rgba(255,255,255,.35)"
          },
          {
            platform: "instagram",
            label: "Instagram",
            url: "https://www.instagram.com/graverobberpunk",
            iconColor: "#ffffff",
            backgroundColor: "transparent",
            borderColor: "rgba(255,255,255,.35)"
          },
          {
            platform: "spotify",
            label: "Spotify",
            url: "https://open.spotify.com/artist/4D34aUp0OsDs8mAEWPIP7c",
            iconColor: "#ffffff",
            backgroundColor: "transparent",
            borderColor: "rgba(255,255,255,.35)"
          }
        ]
      }
    }
  ];
}

export function createDefaultPuckData(pageName = "home") {
  const pageTitle = pageName.charAt(0).toUpperCase() + pageName.slice(1);
  return {
root: {
  props: {
    title: `Grave Robber ${pageTitle}`,
    ...defaultPageBackgroundProps
  }
},
    content: createPageContent(pageName)
  };
}

function getCurrentPageName() {
  if (typeof window === "undefined") return "home";

  const fileName = window.location.pathname.split("/").pop() || "index.html";

  if (fileName === "index.html" || fileName === "") return "home";

  return fileName.replace(".html", "");
}

export const defaultPuckData = createDefaultPuckData(getCurrentPageName());

export const puckConfig = {
  root: {
    fields: {
      title: { type: "text", label: "Page Title" },
      backgroundStyle: {
        type: "select",
        label: "Page Background Style",
        options: backgroundStyleOptions
      },
      pageBaseColor: colorField("Base Color"),
      pageSecondColor: colorField("Second Color"),
      pageThirdColor: colorField("Third / Vignette Color"),

      pageGlowColor: colorField("Main Glow / Ombre Color"),
      pageSecondGlowColor: colorField("Second Glow Color"),
      pageThirdGlowColor: colorField("Third Glow / Darkness Color"),

      pageTextColor: colorField("Default Page Text Color"),

      pageGradientAngle: {
        type: "text",
        label: "Gradient Direction / Angle",
        placeholder: "Example: 180deg, 135deg, 90deg"
      },

      pageGlowPosition: {
        type: "text",
        label: "Main Glow Position",
        placeholder: "Example: center 18%, top center, left 20%"
      },
      pageGlowSize: {
        type: "text",
        label: "Main Glow Spread / Size",
        placeholder: "Example: 34%, 50%, 420px"
      },

      pageSecondGlowPosition: {
        type: "text",
        label: "Second Glow Position",
        placeholder: "Example: center 70%, right center"
      },
      pageSecondGlowSize: {
        type: "text",
        label: "Second Glow Spread / Size",
        placeholder: "Example: 45%, 600px"
      },

      pageThirdGlowPosition: {
        type: "text",
        label: "Third Glow Position",
        placeholder: "Example: center center, bottom center"
      },
      pageThirdGlowSize: {
        type: "text",
        label: "Third Glow Spread / Size",
        placeholder: "Example: 75%, 900px"
      },

      customBackgroundCss: {
        type: "textarea",
        label: "Custom Background CSS",
        placeholder: "Example: radial-gradient(circle, red, black)"
      }
    },
    render: ({ children, ...props }) => (
      <div
        data-page={props.pageName || undefined}
        style={{
          minHeight: "100vh",
          background: pageBackgroundCss(props),
          color: props.pageTextColor || "#f5f0e6"
        }}
      >
        {children}
      </div>
    )
  },

  components: {

    WelcomeHorrorMessage: {
      label: "01 Site Block: Animated Horror Welcome Message",
      fields: {
        customFontUrl: externalFontField("External Font URL For This Block"),
        theme: {
          type: "select",
          label: "Design Theme",
          options: [
            { label: "Toxic Grave Pop-Out", value: "toxic" },
            { label: "Purple Bounce", value: "purple" },
            { label: "Black Fog Fade", value: "fog" },
            { label: "Slasher Slide Left", value: "slide-left" },
            { label: "Possessed Slide Top", value: "slide-top" },
            { label: "Particle Summoning", value: "particles" },
            { label: "Glitch Demon Signal", value: "glitch" },
            { label: "Neon Tomb Pulse", value: "tomb" }
          ]
        },
        animationStyle: {
          type: "select",
          label: "Animation",
          options: [
            { label: "Pop Out", value: "pop" },
            { label: "Bounce Out", value: "bounce" },
            { label: "Fade In", value: "fade" },
            { label: "Slide From Left", value: "left" },
            { label: "Slide From Right", value: "right" },
            { label: "Drop From Top", value: "top" },
            { label: "Rise From Bottom", value: "bottom" },
            { label: "Particles Forming", value: "particles" },
            { label: "Glitch Flicker", value: "glitch" }
          ]
        },
        showInEditor: {
          type: "select",
          label: "Show While Editing",
          options: [
            { label: "Yes - show so I can design it", value: "yes" },
            { label: "No - only trigger on exit intent", value: "no" }
          ]
        },
        exitTriggerDistance: {
          type: "number",
          label: "Exit Trigger Distance From Top"
        },
        eyebrow: { type: "text", label: "Small Top Text" },
        title: { type: "text", label: "Main Welcome Text" },
        body: { type: "textarea", label: "Message Text" },
        align: {
          type: "select",
          label: "Text Alignment",
          options: [
            { label: "Left", value: "left" },
            { label: "Center", value: "center" },
            { label: "Right", value: "right" }
          ]
        },
        titleColor: colorField("Title Color"),
        titleFont: fontField("Title Font"),
        titleSize: { type: "text", label: "Title Font Size", placeholder: "48px, 5rem, 9vw" },
        titleShadow: { type: "text", label: "Title Glow / Shadow", placeholder: "0 0 24px #00ff04" },
        bodyColor: colorField("Body Color"),
        bodyFont: fontField("Body Font"),
        bodySize: { type: "text", label: "Body Font Size", placeholder: "18px" },
        backgroundColor: colorField("Section Background"),
        cardBackground: colorField("Message Box Background"),
        borderColor: colorField("Border Color"),
        glowColor: colorField("Glow Color"),
        radius: { type: "text", label: "Rounded Corners", placeholder: "28px" },
        maxWidth: { type: "text", label: "Message Box Width", placeholder: "900px" },
        paddingY: { type: "number", label: "Top/Bottom Padding" },
        paddingX: { type: "number", label: "Left/Right Padding" },
        buttons: buttonArrayField,
        noThanksText: { type: "text", label: "No Thanks Button Text" },
        noThanksBackgroundColor: colorField("No Thanks Background"),
        noThanksTextColor: colorField("No Thanks Text Color"),
        noThanksBorderColor: colorField("No Thanks Border Color")
      },
      defaultProps: {
        showInEditor: "yes",
        exitTriggerDistance: 70,
        theme: "toxic",
        animationStyle: "pop",
        eyebrow: "WELCOME TO THE GRAVE",
        title: "Join the Army of the Dead",
        body: "You have crossed into Grave Robber territory. Join the Army of the Dead and march with us into the noise.",
        align: "center",
        titleColor: "#00ff04",
        titleFont: "Creepster, cursive",
        titleSize: "clamp(44px, 8vw, 92px)",
        titleShadow: "0 0 18px #00ff04, 0 0 42px rgba(187,0,255,.85)",
        bodyColor: "#ffffff",
        bodyFont: "Special Elite, cursive",
        bodySize: "20px",
        backgroundColor: "transparent",
        cardBackground: "linear-gradient(135deg, rgba(0,0,0,.92), rgba(32,0,46,.88))",
        borderColor: "#bb00ff",
        glowColor: "#00ff04",
        radius: "28px",
        maxWidth: "920px",
        paddingY: 70,
        paddingX: 24,
        customFontUrl: "",
        noThanksText: "No Thanks",
        noThanksBackgroundColor: "transparent",
        noThanksTextColor: "#ffffff",
        noThanksBorderColor: "rgba(255,255,255,.45)",
        buttons: [
          {
            text: "Join the Army of the Dead",
            url: "signup.html",
            backgroundColor: "#bb00ff",
            textColor: "#ffffff",
            fontFamily: "Oswald, sans-serif",
            fontSize: "16px",
            borderWidth: "2px",
            borderColor: "#00ff04",
            boxShadow: "0 0 24px rgba(0,255,4,.75)",
            textTransform: "uppercase",
            radius: "999px",
            padding: "16px 34px"
          }
        ]
      },
      render: props => {
        const [isOpen, setIsOpen] = useState(props.showInEditor !== "no");

        useEffect(() => {
          if (props.showInEditor !== "no") {
            setIsOpen(true);
            return;
          }

          setIsOpen(false);

          let lastY = null;
          let hasBeenLowerOnPage = false;
          let triggered = false;

          function handleMouseMove(event) {
            const triggerDistance = Number(props.exitTriggerDistance || 70);
            const armedDistance = Math.max(triggerDistance + 180, 260);

            if (event.clientY >= armedDistance) {
              hasBeenLowerOnPage = true;
            }

            const movingUp = lastY !== null && event.clientY < lastY;
            const nearTop = event.clientY <= triggerDistance;

            if (!triggered && hasBeenLowerOnPage && movingUp && nearTop) {
              triggered = true;
              setIsOpen(true);
            }

            lastY = event.clientY;
          }

          document.addEventListener("mousemove", handleMouseMove);
          return () => document.removeEventListener("mousemove", handleMouseMove);
        }, [props.showInEditor, props.exitTriggerDistance]);

        if (!isOpen) {
          return (
            <div
              className="puck-section"
              style={{
                padding: "4px 12px",
                background: "rgba(0,0,0,.85)",
                color: "#00ff04",
                border: "1px dashed #bb00ff",
                fontSize: "12px",
                textAlign: "center"
              }}
            >
              Exit-intent horror popup is hidden until mouse moves toward browser close area.
            </div>
          );
        }

        return (
          <section className="puck-section gr-welcome-section gr-exit-popup-wrap">
            {applyFontImport(props.customFontUrl)}
            <style>{`
              .gr-exit-popup-wrap{
                position:fixed;
                inset:0;
                z-index:999999;
                display:flex;
                align-items:center;
                justify-content:center;
                padding:24px;
                pointer-events:none;
              }

              .gr-exit-popup-backdrop{
                position:absolute;
                inset:0;
                background:rgba(0,0,0,.82);
                backdrop-filter:blur(8px);
                pointer-events:auto;
              }

              .gr-exit-popup-card{
                width:min(100%, var(--gr-width));
                pointer-events:auto;
              }

              .gr-exit-popup-close{
                position:absolute;
                top:14px;
                right:16px;
                z-index:5;
                width:44px;
                height:44px;
                border-radius:999px;
                border:2px solid #00ff04;
                background:#000000;
                color:#00ff04;
                font-size:28px;
                line-height:1;
                cursor:pointer;
                box-shadow:0 0 24px rgba(0,255,4,.7);
              }

              .gr-welcome-card{
                position:relative;
                overflow:hidden;
                margin:0 auto;
                padding:42px 28px;
                border:2px solid var(--gr-border);
                border-radius:var(--gr-radius);
                max-width:var(--gr-width);
                text-align:var(--gr-align);
                background:var(--gr-bg);
                box-shadow:0 0 28px var(--gr-glow), inset 0 0 34px rgba(187,0,255,.2);
              }

              .gr-welcome-card:before{
                content:"";
                position:absolute;
                inset:-2px;
                background:
                  radial-gradient(circle at 20% 20%,rgba(0,255,4,.28),transparent 28%),
                  radial-gradient(circle at 80% 70%,rgba(187,0,255,.32),transparent 32%);
                pointer-events:none;
              }

              .gr-welcome-content{
                position:relative;
                z-index:2;
              }

              .gr-welcome-eyebrow{
                margin:0 0 12px;
                color:#bb00ff;
                font-family:Oswald,sans-serif;
                font-weight:900;
                letter-spacing:.24em;
                text-transform:uppercase;
                text-shadow:0 0 16px rgba(187,0,255,.9);
              }

              .gr-welcome-title{
                margin:0;
                color:var(--gr-title);
                font-family:var(--gr-title-font);
                font-size:var(--gr-title-size);
                line-height:.95;
                text-shadow:var(--gr-title-shadow);
                text-transform:uppercase;
              }

              .gr-welcome-body{
                margin:22px auto 0;
                color:var(--gr-body);
                font-family:var(--gr-body-font);
                font-size:var(--gr-body-size);
                line-height:1.55;
                max-width:760px;
              }

              .gr-exit-popup-no-thanks{
                margin-left:10px;
                border-radius:999px;
                padding:16px 34px;
                font-family:Oswald,sans-serif;
                font-size:16px;
                font-weight:700;
                text-transform:uppercase;
                cursor:pointer;
              }

              .gr-welcome-particles{
                position:absolute;
                inset:0;
                pointer-events:none;
                z-index:1;
              }

              .gr-welcome-particles span{
                position:absolute;
                width:7px;
                height:7px;
                border-radius:999px;
                background:#00ff04;
                box-shadow:0 0 18px #00ff04;
                animation:grParticle 1.8s ease-out both;
              }

              .gr-welcome-particles span:nth-child(1){left:8%;top:20%;animation-delay:.02s}
              .gr-welcome-particles span:nth-child(2){left:18%;top:80%;animation-delay:.08s}
              .gr-welcome-particles span:nth-child(3){left:32%;top:12%;animation-delay:.14s}
              .gr-welcome-particles span:nth-child(4){left:48%;top:92%;animation-delay:.2s}
              .gr-welcome-particles span:nth-child(5){left:68%;top:18%;animation-delay:.26s}
              .gr-welcome-particles span:nth-child(6){left:88%;top:74%;animation-delay:.32s}
              .gr-welcome-particles span:nth-child(7){left:78%;top:45%;animation-delay:.38s}
              .gr-welcome-particles span:nth-child(8){left:42%;top:52%;animation-delay:.44s}

              .gr-theme-toxic{background:linear-gradient(135deg,rgba(0,0,0,.96),rgba(0,45,2,.92))!important;border-color:#00ff04!important;box-shadow:0 0 44px rgba(0,255,4,.75),inset 0 0 44px rgba(0,255,4,.16)!important;}
              .gr-theme-toxic .gr-welcome-title{color:#00ff04!important;filter:drop-shadow(0 0 18px #00ff04);}
              .gr-theme-toxic:after{content:"";position:absolute;inset:0;background:repeating-linear-gradient(115deg,rgba(0,255,4,.08) 0 2px,transparent 2px 18px);pointer-events:none;}

              .gr-theme-purple{background:linear-gradient(145deg,rgba(17,0,26,.96),rgba(0,0,0,.94))!important;border-color:#bb00ff!important;box-shadow:0 0 42px rgba(187,0,255,.75),inset 0 0 42px rgba(0,255,4,.18)!important;}
              .gr-theme-purple .gr-welcome-title{color:#bb00ff!important;letter-spacing:.06em;}

              .gr-theme-fog{background:radial-gradient(circle at center,rgba(30,30,30,.96),rgba(0,0,0,.98))!important;border-color:rgba(255,255,255,.28)!important;box-shadow:0 0 50px rgba(255,255,255,.26),inset 0 0 40px rgba(255,255,255,.1)!important;}
              .gr-theme-fog .gr-welcome-title{color:#f2f2f2!important;}
              .gr-theme-fog:after{content:"";position:absolute;inset:-40%;background:radial-gradient(circle,rgba(255,255,255,.16),transparent 38%);filter:blur(24px);animation:grFogDrift 7s ease-in-out infinite alternate;pointer-events:none;}

              .gr-theme-slide-left{background:linear-gradient(90deg,rgba(0,0,0,.98),rgba(70,0,0,.92))!important;border-color:#ff0033!important;box-shadow:0 0 44px rgba(255,0,51,.55),inset 0 0 35px rgba(187,0,255,.24)!important;}
              .gr-theme-slide-left .gr-welcome-title{color:#ffffff!important;text-shadow:4px 0 0 #bb00ff,-4px 0 0 #00ff04,0 0 28px #ff0033!important;}

              .gr-theme-slide-top{background:linear-gradient(180deg,rgba(35,0,52,.98),rgba(0,0,0,.96))!important;border-color:#bb00ff!important;box-shadow:0 0 44px rgba(187,0,255,.62),inset 0 0 36px rgba(0,255,4,.2)!important;}
              .gr-theme-slide-top:after{content:"";position:absolute;left:0;right:0;top:0;height:45%;background:linear-gradient(180deg,rgba(187,0,255,.28),transparent);pointer-events:none;}

              .gr-theme-particles{background:radial-gradient(circle at center,rgba(0,35,2,.98),rgba(0,0,0,.98))!important;border-color:#00ff04!important;box-shadow:0 0 48px rgba(0,255,4,.65),inset 0 0 42px rgba(187,0,255,.22)!important;}
              .gr-theme-particles .gr-welcome-content{animation:grAssembleContent 1.4s ease-out both;}
              .gr-theme-particles .gr-welcome-title{animation:grTextAssemble 1.6s ease-out both;}
              .gr-theme-particles .gr-welcome-body{animation:grTextAssemble 1.9s ease-out both;}

              .gr-theme-glitch{background:linear-gradient(135deg,rgba(0,0,0,.98),rgba(18,0,26,.96))!important;border-color:#00ff04!important;box-shadow:0 0 44px rgba(187,0,255,.6),inset 0 0 36px rgba(0,255,4,.18)!important;}
              .gr-theme-glitch .gr-welcome-title{animation:grDemonGlitch 1.4s steps(2,end) infinite;color:#00ff04!important;text-shadow:3px 0 #bb00ff,-3px 0 #00ff04,0 0 30px #00ff04!important;}

              .gr-theme-tomb{background:linear-gradient(135deg,rgba(0,0,0,.98),rgba(0,22,1,.94),rgba(40,0,60,.88))!important;border-color:#00ff04!important;box-shadow:0 0 24px #00ff04,0 0 56px rgba(187,0,255,.75),inset 0 0 38px rgba(0,255,4,.2)!important;}

              .gr-anim-pop{animation:grPop .9s cubic-bezier(.2,1.25,.35,1) both;}
              .gr-anim-bounce{animation:grBounce 1.1s both;}
              .gr-anim-fade{animation:grFade 1.4s both;}
              .gr-anim-left{animation:grLeft 1s both;}
              .gr-anim-right{animation:grRight 1s both;}
              .gr-anim-top{animation:grTop 1s both;}
              .gr-anim-bottom{animation:grBottom 1s both;}
              .gr-anim-particles{animation:grParticlesIn 1.4s both;}
              .gr-anim-glitch{animation:grGlitch 1.2s steps(2,end) both;}

              @keyframes grPop{0%{opacity:0;transform:scale(.45) rotate(-4deg)}70%{opacity:1;transform:scale(1.08) rotate(1deg)}100%{transform:scale(1) rotate(0)}}
              @keyframes grBounce{0%{opacity:0;transform:scale(.2) translateY(80px)}55%{opacity:1;transform:scale(1.12) translateY(-18px)}75%{transform:scale(.96) translateY(8px)}100%{transform:scale(1) translateY(0)}}
              @keyframes grFade{from{opacity:0;filter:blur(18px)}to{opacity:1;filter:blur(0)}}
              @keyframes grLeft{from{opacity:0;transform:translateX(-120px)}to{opacity:1;transform:translateX(0)}}
              @keyframes grRight{from{opacity:0;transform:translateX(120px)}to{opacity:1;transform:translateX(0)}}
              @keyframes grTop{from{opacity:0;transform:translateY(-120px)}to{opacity:1;transform:translateY(0)}}
              @keyframes grBottom{from{opacity:0;transform:translateY(120px)}to{opacity:1;transform:translateY(0)}}
              @keyframes grParticlesIn{0%{opacity:0;transform:scale(.75);filter:blur(14px)}100%{opacity:1;transform:scale(1);filter:blur(0)}}
              @keyframes grGlitch{0%{opacity:0;transform:skewX(8deg)}20%{opacity:1;transform:translateX(-8px)}40%{transform:translateX(8px)}60%{transform:translateX(-4px)}80%{transform:translateX(4px)}100%{transform:none}}
              @keyframes grParticle{0%{opacity:0;transform:scale(0) translate(0,0)}50%{opacity:1}100%{opacity:0;transform:scale(1.8) translate(26px,-34px)}}
              @keyframes grFogDrift{from{transform:translate(-8%,-4%) scale(1)}to{transform:translate(8%,4%) scale(1.18)}}
              @keyframes grAssembleContent{0%{opacity:0;filter:blur(18px);transform:scale(1.2)}100%{opacity:1;filter:blur(0);transform:scale(1)}}
              @keyframes grTextAssemble{0%{opacity:0;letter-spacing:.55em;filter:blur(12px);transform:translateY(28px) scale(1.25)}100%{opacity:1;letter-spacing:normal;filter:blur(0);transform:none}}
              @keyframes grDemonGlitch{0%,100%{transform:none}20%{transform:translate(-3px,2px) skewX(8deg)}40%{transform:translate(3px,-2px) skewX(-8deg)}60%{transform:translate(-2px,0)}80%{transform:translate(2px,1px)}}
            `}</style>
            <div className="gr-exit-popup-backdrop" onClick={() => setIsOpen(false)} />
            <div
              className={`gr-welcome-card gr-exit-popup-card gr-theme-${props.theme || "toxic"} gr-anim-${props.animationStyle || "pop"}`}
              style={{
                "--gr-bg": props.cardBackground || "rgba(0,0,0,.92)",
                "--gr-border": props.borderColor || "#bb00ff",
                "--gr-glow": props.glowColor || "#00ff04",
                "--gr-radius": props.radius || "28px",
                "--gr-width": props.maxWidth || "920px",
                "--gr-align": props.align || "center",
                "--gr-title": props.titleColor || "#00ff04",
                "--gr-title-font": props.titleFont || "Creepster, cursive",
                "--gr-title-size": props.titleSize || "clamp(44px, 8vw, 92px)",
                "--gr-title-shadow": props.titleShadow || "0 0 18px #00ff04",
                "--gr-body": props.bodyColor || "#ffffff",
                "--gr-body-font": props.bodyFont || "Special Elite, cursive",
                "--gr-body-size": props.bodySize || "20px"
              }}
            >
              <button className="gr-exit-popup-close" onClick={() => setIsOpen(false)}>×</button>

              {(props.theme === "particles" || props.animationStyle === "particles") && (
                <div className="gr-welcome-particles" aria-hidden="true">
                  {Array.from({ length: 8 }).map((_, index) => <span key={index} />)}
                </div>
              )}

              <div className="gr-welcome-content">
                {props.eyebrow && <p className="gr-welcome-eyebrow">{props.eyebrow}</p>}
                {props.title && <h2 className="gr-welcome-title">{props.title}</h2>}
                {props.body && <p className="gr-welcome-body">{props.body}</p>}
                {(props.buttons || []).length > 0 && (
                  <div className="puck-buttons">
                    {(props.buttons || []).map((button, index) => <ButtonPreview key={index} button={button} index={index} />)}
                    {props.noThanksText && (
                      <button
                        type="button"
                        className="puck-btn gr-exit-popup-no-thanks"
                        onClick={() => setIsOpen(false)}
                        style={{
                          background: props.noThanksBackgroundColor || "transparent",
                          color: props.noThanksTextColor || "#ffffff",
                          border: `1px solid ${props.noThanksBorderColor || "rgba(255,255,255,.45)"}`
                        }}
                      >
                        {props.noThanksText}
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          </section>
        );
      }
    },

    GraveRobberHero: {
      label: "01 Site Block: Grave Robber Main Horror Hero",

      fields: {
        title: { type: "text", label: "Title" },
        subtitle: { type: "text", label: "Subtitle" },
        body: { type: "textarea", label: "Body Text" },
        imageUrl: imageUploadField("Image"),
        imageAlt: { type: "text", label: "Image Alt Text" },
        layout: { type: "select", label: "Layout", options: [{ label: "Centered", value: "center" }, { label: "Image Top", value: "image-top" }, { label: "Text Left / Image Right", value: "text-left" }, { label: "Text Right / Image Left", value: "text-right" }] },
imageWidth: unitNumberField("Image Width", { units: ["px", "%", "rem", "vw"], defaultUnit: "px", step: 10, min: 0, placeholder: "Example: 900px" }),
mobileImageWidth: unitNumberField("Mobile Image Width", { units: ["px", "%", "rem", "vw"], defaultUnit: "vw", step: 1, min: 0, placeholder: "Example: 70vw or 280px" }),
imageRadius: unitNumberField("Image Rounded Corners", { units: ["px", "%", "rem"], defaultUnit: "px", step: 1, min: 0, placeholder: "Example: 50%" }),
        imageShadow: { type: "text", label: "Image Shadow / Glow CSS", placeholder: "Example: 0 0 40px currentColor" },
        titleSize: unitNumberField("Title Font Size", { units: ["px", "rem", "vw"], defaultUnit: "px", step: 1, min: 0, placeholder: "Example: 72px" }),
        titleColor: colorField("Title Color"),
        titleFont: fontField("Title Font"),
        subtitleColor: colorField("Subtitle Color"),
        bodyColor: colorField("Body Color"),
        backgroundColor: colorField("Section Background"),
        textColor: colorField("Default Text Color"),
        paddingY: { type: "number", label: "Top/Bottom Padding" },
        paddingX: { type: "number", label: "Left/Right Padding" },
        buttons: buttonArrayField
      },

      defaultProps: { title: "Grave Robber", subtitle: "AMERICAN HORROR PUNK", body: "Horror punk from beyond the grave. Shows, music, merch, booking, and updates.", imageUrl: "assets/grave-robber-skull.png", imageAlt: "Grave Robber skull logo", layout: "center", imageWidth: "300px", mobileImageWidth: "70vw", imageRadius: "0px", imageShadow: "0 0 55px rgba(198,40,40,.45)", titleSize: "80px", titleColor: "#f2f2f2", titleFont: "Creepster, cursive", subtitleColor: "#c62828", bodyColor: "#d6d6d6", backgroundColor: "transparent", textColor: "#ffffff", paddingY: 70, paddingX: 24, buttons: [{ text: "Shows", url: "shows.html", backgroundColor: "#c62828", textColor: "#ffffff", fontFamily: "Oswald, sans-serif", fontSize: "16px", borderWidth: "0px", borderColor: "transparent", boxShadow: "0 0 24px rgba(198,40,40,.35)", textTransform: "uppercase", radius: "999px", padding: "16px 34px" }, { text: "Join the Army of the Dead", url: "signup.html", backgroundColor: "transparent", textColor: "#ffffff", fontFamily: "Oswald, sans-serif", fontSize: "16px", borderWidth: "1px", borderColor: "rgba(255,255,255,.35)", radius: "999px", padding: "16px 34px" }] },
      render: props => puckConfig.components.Hero.render(props)
    },
    GraveRobberLogo: { label: "01 Site Block: Grave Robber Stacked Logo", fields: { imageUrl: imageUploadField("Logo Image"), imageAlt: { type: "text", label: "Image Alt Text" }, width: unitNumberField("Image Width", { units: ["px", "%", "vw"], defaultUnit: "px", step: 10, min: 0, placeholder: "Example: 520px" }), radius: unitNumberField("Rounded Corners", { units: ["px", "%", "rem"], defaultUnit: "px", step: 1, min: 0, placeholder: "Example: 12px" }), shadow: { type: "text", label: "Image Shadow / Glow CSS" }, align: { type: "select", label: "Image Placement", options: placementOptions }, backgroundColor: colorField("Section Background"), paddingY: { type: "number", label: "Top/Bottom Padding" }, paddingX: { type: "number", label: "Left/Right Padding" } }, defaultProps: { imageUrl: "assets/grave-robber-logo-stacked.png", imageAlt: "Grave Robber logo", width: "520px", radius: "12px", shadow: "0 20px 60px rgba(0,0,0,.55)", align: "center", backgroundColor: "transparent", paddingY: 30, paddingX: 24 }, render: props => puckConfig.components.ImageBlock.render(props) },
    GraveRobberSocial: { label: "01 Site Block: Grave Robber Social / Merch Links", fields: { title: { type: "text", label: "Title" }, titleColor: colorField("Title Color"), titleFont: fontField("Title Font"), titleSize: { type: "text", label: "Title Font Size" }, backgroundColor: colorField("Section Background"), paddingY: { type: "number", label: "Top/Bottom Padding" }, paddingX: { type: "number", label: "Left/Right Padding" }, links: { type: "array", label: "Links", arrayFields: {
  platform: { type: "select", label: "Platform", options: socialPlatformOptions },
  label: { type: "text", label: "Label" },
  url: { type: "text", label: "URL" },
  iconColor: colorField("Icon Color"),
  backgroundColor: colorField("Icon Background"),
  borderWidth: {
    type: "select",
    label: "Icon Border",
    options: [
      { label: "No Border", value: "0px" },
      { label: "Thin Border", value: "1px" },
      { label: "Medium Border", value: "2px" },
      { label: "Thick Border", value: "4px" }
    ]
  },
  borderColor: colorField("Icon Border"),
  boxShadow: { type: "text", label: "Icon Glow / Shadow", placeholder: "0 0 24px #00ff04" },
  radius: { type: "text", label: "Icon Rounded Corners", placeholder: "999px" },
  size: { type: "text", label: "Icon Button Size", placeholder: "44px" },
  svgSize: { type: "text", label: "Symbol Size", placeholder: "22px" },
  padding: { type: "text", label: "Icon Padding", placeholder: "0px" }
},
defaultItemProps: {
  platform: "custom",
  label: "Link",
  url: "#",
  iconColor: "#bb00ff",
  backgroundColor: "#000000",
  borderWidth: "1px",
  borderColor: "#00ff04",
  boxShadow: "0 0 24px #00ff04",
  radius: "999px",
  size: "44px",
  svgSize: "22px",
  padding: "0px"
} } }, defaultProps: { title: "Follow Grave Robber", titleColor: "#ffffff", titleFont: "Oswald, sans-serif", titleSize: "1rem", backgroundColor: "transparent", paddingY: 50, paddingX: 24, links: [{ platform: "facebook", label: "Facebook", url: "https://www.facebook.com/graverobberpunk", iconColor: "#ffffff", backgroundColor: "rgba(198,40,40,.18)", borderColor: "rgba(198,40,40,.65)" }, { platform: "instagram", label: "Instagram", url: "https://www.instagram.com/graverobberpunk", iconColor: "#ffffff", backgroundColor: "rgba(198,40,40,.18)", borderColor: "rgba(198,40,40,.65)" }, { platform: "spotify", label: "Spotify", url: "https://open.spotify.com/artist/4D34aUp0OsDs8mAEWPIP7c", iconColor: "#ffffff", backgroundColor: "rgba(198,40,40,.18)", borderColor: "rgba(198,40,40,.65)" }] }, render: props => puckConfig.components.SocialIcons.render(props) },

    HeaderNav: {
      label: "02 Add Block: Header / Page Navigation",
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
logoBackgroundColor: colorField("Logo Background Color"),
logoBorderWidth: { type: "text", label: "Logo Border Width", placeholder: "0px or 1px" },
logoBorderColor: colorField("Logo Border Color"),
logoRadius: { type: "text", label: "Logo Rounded Corners", placeholder: "999px or 0px" },
logoPadding: { type: "text", label: "Logo Padding", placeholder: "0px" },
logoBoxShadow: { type: "text", label: "Logo Shadow / Glow", placeholder: "0 0 24px #00ff04" },
logoImageShadow: { type: "text", label: "Logo Image Shadow / Glow", placeholder: "0 0 18px #00ff04" },
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
        leftButtons: {
          ...buttonArrayField,
          label: "Far Left Header Buttons"
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
        logoUrl: "assets/grave-robber-skull.png",
        logoAlt: "Grave Robber Logo",
logoSize: "45px",
logoPlacement: "left",
logoBackgroundColor: "transparent",
logoBorderWidth: "0px",
logoBorderColor: "transparent",
logoRadius: "999px",
logoPadding: "0px",
logoBoxShadow: "none",
logoImageShadow: "none",
        width: "100%",
        maxWidth: "none",
        margin: "0",
        padding: "22px 40px",
        navPlacement: "right",
        headerPosition: "full",
        leftButtons: [],
        buttons: [
          { text: "Home", url: "index.html", backgroundColor: "#000000", textColor: "#bb00ff", fontFamily: "Oswald, sans-serif", fontSize: "14px", borderWidth: "1px", borderColor: "#00ff04", boxShadow: "0 0 24px #00ff04", textTransform: "uppercase", radius: "999px", padding: "10px 16px" },
          { text: "Shows", url: "shows.html", backgroundColor: "#000000", textColor: "#bb00ff", fontFamily: "Oswald, sans-serif", fontSize: "14px", borderWidth: "1px", borderColor: "#00ff04", boxShadow: "0 0 24px #00ff04", textTransform: "uppercase", radius: "999px", padding: "10px 16px" },
          { text: "About", url: "about.html", backgroundColor: "#000000", textColor: "#bb00ff", fontFamily: "Oswald, sans-serif", fontSize: "14px", borderWidth: "1px", borderColor: "#00ff04", boxShadow: "0 0 24px #00ff04", textTransform: "uppercase", radius: "999px", padding: "10px 16px" },
          { text: "Graffiti Wall", url: "graffiti-wall.html", backgroundColor: "#000000", textColor: "#bb00ff", fontFamily: "Oswald, sans-serif", fontSize: "14px", borderWidth: "1px", borderColor: "#00ff04", boxShadow: "0 0 24px #00ff04", textTransform: "uppercase", radius: "999px", padding: "10px 16px" },
          { text: "Admin", url: "admin.html", backgroundColor: "#000000", textColor: "#bb00ff", fontFamily: "Oswald, sans-serif", fontSize: "14px", borderWidth: "1px", borderColor: "#00ff04", boxShadow: "0 0 24px #00ff04", textTransform: "uppercase", radius: "999px", padding: "10px 16px" }
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
            {(props.leftButtons || []).map((button, index) => <ButtonPreview key={`left-${index}`} button={button} />)}
            {props.logoUrl && props.logoPlacement !== "right" && (
<a
  className="puck-header-logo-link logo-left"
  href="index.html"
  style={{
    "--logo-size": props.logoSize || "45px",
    "--logo-image-shadow": props.logoImageShadow || "none",
    background: props.logoBackgroundColor || "transparent",
    border: `${props.logoBorderWidth || "0px"} solid ${props.logoBorderColor || "transparent"}`,
    borderRadius: props.logoRadius || "999px",
    padding: props.logoPadding || "0px",
    boxShadow: props.logoBoxShadow || "none"
  }}
>
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
<a
  className="puck-header-logo-link logo-right"
  href="index.html"
  style={{
    "--logo-size": props.logoSize || "45px",
    "--logo-image-shadow": props.logoImageShadow || "none",
    background: props.logoBackgroundColor || "transparent",
    border: `${props.logoBorderWidth || "0px"} solid ${props.logoBorderColor || "transparent"}`,
    borderRadius: props.logoRadius || "999px",
    padding: props.logoPadding || "0px",
    boxShadow: props.logoBoxShadow || "none"
  }}
>
  <img className="puck-header-logo" src={props.logoUrl} alt={props.logoAlt || "Logo"} />
</a>
            )}
          </div>
        </header>
      )
    },

    SongScroll: {
      label: "02 Add Block: Song Scroll",
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
        const songItems = props.items || [];
        const songs = [...songItems, ...songItems];

        return (
          <section
            className={`songs-section puck-song-scroll ${props.stretchMode === "full" ? "is-full-width" : ""}`}
            aria-label="Songs We Play"
            style={{
              background: props.backgroundColor || "rgba(77,198,225,.12)",
              borderBottom: `1px solid ${props.lineColor || "rgba(77,198,225,.45)"}`,
              width: props.width || "100%",
              maxWidth: props.maxWidth || "none",
              margin: props.margin || "0"
            }}
          >
            <div className="songs-scroll-container">
              <div className="songs-scroll puck-song-track">
                {songs.map((item, index) => (
                  <span
                    key={index}
                    className="song-name"
                    style={{
                      color: props.textColor || "#4dc6e1",
                      textShadow: props.textShadow || "none",
                      borderColor: props.buttonBorderColor || "rgba(77,198,225,.45)"
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
    Hero: {
      label: "02 Add Block: Hero: Text + Image",
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
mobileImageWidth: { type: "text", label: "Mobile Image Width", placeholder: "Example: 70vw or 280px" },
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
            {props.imageUrl && <img className="puck-image puck-mobile-sized-image" src={props.imageUrl} alt={props.imageAlt || props.title || "Image"} style={{ width: props.imageWidth || "320px", "--mobile-image-width": props.mobileImageWidth || props.imageWidth || "320px", borderRadius: props.imageRadius || "8px", boxShadow: props.imageShadow || "none" }} />}
          </div>
        </SectionShell>
      )
    },
    TextBlock: {
      label: "02 Add Block: Text Block",
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
      render: props => <SectionShell {...props}>{applyFontImport(props.customFontUrl)}<div className="puck-inner puck-text" style={{ textAlign: props.align || "center", maxWidth: props.maxWidth || "850px" }}>{props.eyebrow && <p className="teaser" style={{ color: props.eyebrowColor || "inherit", fontFamily: props.eyebrowFont || "inherit", fontSize: props.eyebrowSize || "inherit", fontWeight: props.eyebrowWeight || "inherit", letterSpacing: props.eyebrowLetterSpacing || "normal" }}>{props.eyebrow}</p>}{props.title && <h2 className="puck-title" style={{ fontSize: props.titleSize || "3rem", color: props.titleColor || "inherit", fontFamily: props.titleFont || "inherit", fontWeight: props.titleWeight || "inherit", letterSpacing: props.titleLetterSpacing || "normal", textDecoration: props.titleDecoration || "none" }}>{props.title}</h2>}{props.body && <p className="puck-body" style={{ fontSize: props.bodySize || "1rem", color: props.bodyColor || "inherit", fontFamily: props.bodyFont || "inherit", fontWeight: props.bodyWeight || "inherit", letterSpacing: props.bodyLetterSpacing || "normal" }}>{props.body}</p>}<div className="puck-buttons">{(props.buttons || []).map((button, index) => <ButtonPreview key={index} button={button} index={index} />)}</div></div></SectionShell>
    },
    ImageBlock: {
      label: "02 Add Block: Image",
      fields: {
        customFontUrl: externalFontField("External Font URL For This Block"),
        title: { type: "text", label: "Optional Title" },
        ...textStyleFields("title"),
        imageUrl: imageUploadField("Image Upload"),
        imageAlt: { type: "text", label: "Image Alt Text" },
width: { type: "text", label: "Image Width", placeholder: "900px or 100%" },
mobileWidth: { type: "text", label: "Mobile Image Width", placeholder: "Example: 70vw or 280px" },
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
                className="puck-image puck-mobile-sized-image"
                src={props.imageUrl}
                alt={props.imageAlt || props.title || "Image"}
style={{
  width: props.width || "900px",
  "--mobile-image-width": props.mobileWidth || props.width || "900px",
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
      label: "02 Add Block: Button Row",
      fields: { customFontUrl: externalFontField("External Font URL For Buttons"), ...sectionFields, buttons: buttonArrayField },
defaultProps: clone(defaultContent[2].props),
      render: props => <SectionShell {...props}>{applyFontImport(props.customFontUrl)}<div className="puck-inner"><div className="puck-buttons">{(props.buttons || []).map((button, index) => <ButtonPreview key={index} button={button} index={index} />)}</div></div></SectionShell>
    },
    SocialIcons: {
      label: "02 Add Block: Social Icons",
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
  borderWidth: {
    type: "select",
    label: "Icon Border",
    options: [
      { label: "No Border", value: "0px" },
      { label: "Thin Border", value: "1px" },
      { label: "Medium Border", value: "2px" },
      { label: "Thick Border", value: "4px" }
    ]
  },
  borderColor: colorField("Icon Border Color"),
  boxShadow: { type: "text", label: "Icon Glow / Shadow", placeholder: "0 0 24px #00ff04" },
  radius: { type: "text", label: "Icon Rounded Corners", placeholder: "999px" },
  size: { type: "text", label: "Icon Button Size", placeholder: "44px" },
  svgSize: { type: "text", label: "Symbol Size", placeholder: "22px" },
  padding: { type: "text", label: "Icon Padding", placeholder: "0px" }
},
defaultItemProps: {
  platform: "facebook",
  label: "Facebook",
  url: "https://facebook.com",
  iconColor: "#bb00ff",
  backgroundColor: "#000000",
  borderWidth: "1px",
  borderColor: "#00ff04",
  boxShadow: "0 0 24px #00ff04",
  radius: "999px",
  size: "44px",
  svgSize: "22px",
  padding: "0px"
}
        }
      },
defaultProps: clone(defaultContent[3].props),
      render: props => <SectionShell {...props}><div className="puck-inner" style={{ textAlign: "center" }}>{props.title && <p className="teaser" style={{ color: props.titleColor || "inherit", fontFamily: props.titleFont || "inherit", fontSize: props.titleSize || "inherit", fontWeight: props.titleWeight || "inherit" }}>{props.title}</p>}<nav className="puck-social-links social-links">{(props.links || []).filter(link => link.url).map((link, index) => <a key={index} className="social-link" href={link.url || "#"} title={link.label || link.platform} style={{
  color: link.iconColor || "inherit",
  background: link.backgroundColor || "rgba(255,255,255,.03)",
  border: `${link.borderWidth || "1px"} solid ${link.borderColor || "rgba(255,255,255,.18)"}`,
  boxShadow: link.boxShadow || "none",
  borderRadius: link.radius || "999px",
  width: link.size || "44px",
  height: link.size || "44px",
  minWidth: link.size || "44px",
  minHeight: link.size || "44px",
  padding: link.padding || "0px",
  "--social-svg-size": link.svgSize || "22px"
}}><SocialIcon platform={link.platform} label={link.label} /></a>)}</nav></div></SectionShell>
    },
    Columns: {
      label: "02 Add Block: Columns / Cards",
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
    GalleryGrid: {
      label: "02 Add Block: Gallery Grid",
      fields: {
        title: { type: "text", label: "Title" },
        titleColor: colorField("Title Color"),
        titleFont: fontField("Title Font"),
        titleSize: { type: "text", label: "Title Size" },
        backgroundColor: colorField("Section Background"),
        textColor: colorField("Default Text Color"),
        paddingY: { type: "number", label: "Top/Bottom Padding" },
        paddingX: { type: "number", label: "Left/Right Padding" },
        layoutMode: {
          type: "select",
          label: "Gallery Layout",
          options: [
            { label: "Freeform Placement", value: "freeform" },
            { label: "Grid", value: "grid" }
          ]
        },
        canvasHeight: { type: "text", label: "Freeform Canvas Height" },
        columns: { type: "number", label: "Columns" },
        gap: { type: "number", label: "Gap" },
        images: {
          type: "array",
          label: "Gallery Images",
          arrayFields: {
            imageUrl: imageUploadField("Image"),
            mediaType: {
              type: "select",
              label: "Media Type",
              options: [
                { label: "Image", value: "image" },
                { label: "Video", value: "video" }
              ]
            },
            imageAlt: { type: "text", label: "Alt Text" },
            caption: { type: "text", label: "Caption" },
            x: { type: "number", label: "X Position %" },
            y: { type: "number", label: "Y Position %" },
            width: { type: "text", label: "Width" },
            rotation: { type: "number", label: "Rotation Degrees" },
            zIndex: { type: "number", label: "Layer" },
            radius: { type: "text", label: "Corner Radius" },
            shadow: { type: "text", label: "Glow / Shadow" },
            opacity: { type: "number", label: "Opacity %" },
            objectFit: {
              type: "select",
              label: "Image Fit",
              options: [
                { label: "Cover", value: "cover" },
                { label: "Contain", value: "contain" },
                { label: "Stretch", value: "fill" }
              ]
            }
          },
          defaultItemProps: {
            imageUrl: "",
            mediaType: "image",
            imageAlt: "Gallery image",
            caption: "",
            x: 8,
            y: 8,
            width: "280px",
            rotation: 0,
            zIndex: 1,
            radius: "16px",
            shadow: "0 0 34px rgba(57,255,20,.35)",
            opacity: 100,
            objectFit: "cover"
          }
        }
      },
      defaultProps: {
        title: "",
        titleColor: "#ffffff",
        titleFont: "Oswald, sans-serif",
        titleSize: "2.5rem",
        backgroundColor: "transparent",
        textColor: "#ffffff",
        paddingY: 40,
        paddingX: 24,
        layoutMode: "grid",
        canvasHeight: "920px",
        columns: 3,
        gap: 18,
        images: []
      },
      render: props => {
        const galleryProps = compactFreeformGalleryProps(props);

        return (
        <SectionShell {...galleryProps}>
          <div className="puck-inner">
            {galleryProps.title && <h2 className="puck-title" style={{ textAlign: "center", color: galleryProps.titleColor || "inherit", fontFamily: galleryProps.titleFont || "inherit", fontSize: galleryProps.titleSize || "2.5rem" }}>{galleryProps.title}</h2>}
            <div
              className={galleryProps.layoutMode === "freeform" ? "puck-gallery-freeform" : "puck-gallery-grid"}
              style={galleryProps.layoutMode === "freeform" ? { "--gallery-height": galleryProps.canvasHeight || "920px" } : { "--cols": galleryProps.columns || 3, "--gap": `${galleryProps.gap || 18}px` }}
            >
              {(galleryProps.images || []).filter(image => image.imageUrl).map((image, index) => (
                <figure
                  className="puck-gallery-item"
                  key={index}
                  style={galleryProps.layoutMode === "freeform" ? {
                    "--gallery-x": `${Number.isFinite(Number(image.x)) ? image.x : 0}%`,
                    "--gallery-y": `${Number.isFinite(Number(image.y)) ? image.y : 0}%`,
                    "--gallery-width": image.width || "280px",
                    "--gallery-rotation": `${Number.isFinite(Number(image.rotation)) ? image.rotation : 0}deg`,
                    "--gallery-layer": Number.isFinite(Number(image.zIndex)) ? image.zIndex : index + 1,
                    "--gallery-opacity": Number.isFinite(Number(image.opacity)) ? Math.min(100, Math.max(0, Number(image.opacity))) / 100 : 1,
                    "--gallery-fit": image.objectFit || "cover",
                    borderRadius: image.radius || "16px",
                    boxShadow: image.shadow || "0 0 34px rgba(57,255,20,.35)"
                  } : undefined}
                >
                  {image.mediaType === "video" || /\.(mp4|webm|mov|m4v|ogv)(\?|#|$)/i.test(String(image.imageUrl || "")) ? (
                    <video src={image.imageUrl} controls preload="metadata" />
                  ) : (
                    <img src={image.imageUrl} alt={image.imageAlt || "Gallery image"} />
                  )}
                  {image.caption && <figcaption>{image.caption}</figcaption>}
                </figure>
              ))}
            </div>
          </div>
        </SectionShell>
        );
      }
    },
    GraffitiWall: {
      label: "02 Add Block: Graffiti Wall",
      fields: {
        eyebrow: { type: "text", label: "Small Top Text" },
        title: { type: "text", label: "Title" },
        body: { type: "textarea", label: "Intro Text" },
        nameLabel: { type: "text", label: "Name Label" },
        messageLabel: { type: "text", label: "Message Label" },
        photoLabel: { type: "text", label: "Photo Label" },
        paintLabel: { type: "text", label: "Paint Label" },
        submitText: { type: "text", label: "Submit Button Text" },
        successMessage: { type: "text", label: "Success Message" },
        backgroundColor: colorField("Section Background"),
        textColor: colorField("Text Color"),
        accentColor: colorField("Accent Color"),
        panelBackground: colorField("Panel Background"),
        borderColor: colorField("Border Color"),
        paddingY: { type: "number", label: "Top/Bottom Padding" },
        paddingX: { type: "number", label: "Left/Right Padding" }
      },
      defaultProps: {
        eyebrow: "Fan wall",
        title: "Graffiti Wall",
        body: "Write a message, upload a photo, or paint something for the band. Submissions appear after admin approval.",
        nameLabel: "Your name",
        messageLabel: "Your message",
        photoLabel: "Photo with the band",
        paintLabel: "Paint",
        submitText: "Send for Approval",
        successMessage: "Submitted. It will appear after admin approval.",
        backgroundColor: "transparent",
        textColor: "#ffffff",
        accentColor: "#00ff04",
        panelBackground: "rgba(0,0,0,.72)",
        borderColor: "#bb00ff",
        paddingY: 70,
        paddingX: 24
      },
      render: props => (
        <section className="puck-section gr-graffiti-wall" style={{ background: props.backgroundColor || "transparent", color: props.textColor || "#ffffff", padding: `${props.paddingY || 70}px ${props.paddingX || 24}px` }}>
          <div className="puck-inner gr-graffiti-inner" style={{ "--gr-graffiti-accent": props.accentColor || "#00ff04", "--gr-graffiti-panel": props.panelBackground || "rgba(0,0,0,.72)", "--gr-graffiti-border": props.borderColor || "#bb00ff" }}>
            <div className="gr-graffiti-copy">
              {props.eyebrow && <p className="teaser">{props.eyebrow}</p>}
              {props.title && <h2 className="puck-title">{props.title}</h2>}
              {props.body && <p>{props.body}</p>}
            </div>
            <div className="gr-graffiti-layout">
              <form className="gr-graffiti-form">
                <label>{props.nameLabel || "Your name"}<input type="text" disabled /></label>
                <label>{props.messageLabel || "Your message"}<textarea rows="5" disabled /></label>
                <label>{props.photoLabel || "Photo with the band"}<input type="file" disabled /></label>
                <label>{props.paintLabel || "Paint"}<canvas className="gr-graffiti-canvas" width="520" height="260" /></label>
                <button type="button">{props.submitText || "Send for Approval"}</button>
              </form>
              <div className="gr-graffiti-posts">
                <article className="gr-graffiti-post">
                  <strong>Approved fan posts will appear here.</strong>
                  <p>{props.successMessage || "Submitted. It will appear after admin approval."}</p>
                </article>
              </div>
            </div>
          </div>
        </section>
      )
    },
    Spacer: {
      label: "02 Add Block: Spacer",
      fields: { height: { type: "number", label: "Height" }, backgroundColor: colorField("Background Color") },
      defaultProps: { height: 40, backgroundColor: "transparent" },
      render: props => <div className="puck-spacer" style={{ height: props.height || 40, background: props.backgroundColor || "transparent" }} />
    },
    SignupForm: {
      label: "02 Add Block: Grave Robber Signup Form",
      fields: {
        formAction: { type: "text", label: "Google Form Submit URL" },
        nameEntry: { type: "text", label: "Name Field Entry ID" },
        emailEntry: { type: "text", label: "Email Field Entry ID" },
        phoneEntry: { type: "text", label: "Phone Field Entry ID" },
        zipEntry: { type: "text", label: "Zip Field Entry ID" },
        nameLabel: { type: "text", label: "Name Label" },
        emailLabel: { type: "text", label: "Email Label" },
        phoneLabel: { type: "text", label: "Phone Label" },
        zipLabel: { type: "text", label: "Zip Label" },
        buttonText: { type: "text", label: "Button Text" },
        successMessage: { type: "text", label: "Success Message" },
        backgroundColor: colorField("Section Background"),
        paddingY: { type: "number", label: "Top Padding" },
        paddingX: { type: "number", label: "Side Padding" },
        paddingBottom: { type: "number", label: "Bottom Padding" }
      },
      defaultProps: {
        formAction: "https://docs.google.com/forms/d/e/1FAIpQLSc75dAf3CXeOinDkL-URjVql6_o3E2PcXKPhB3j-mFnl0JBMw/formResponse",
        nameEntry: "entry.821607845",
        emailEntry: "entry.216699627",
        phoneEntry: "entry.1566132030",
        zipEntry: "entry.848273318",
        nameLabel: "What are you called?",
        emailLabel: "What is your email?",
        phoneLabel: "What is your phone number?",
        zipLabel: "What is your zip code?",
        buttonText: "Join the Army of the Dead",
        successMessage: "Great, you are signed up and we will keep you updated.",
        backgroundColor: "#000000",
        paddingY: 30,
        paddingX: 24,
        paddingBottom: 80
      },
      render: props => <SignupFormPreview {...props} />
    },
    ContactForm: {
      label: "02 Add Block: Grave Robber Contact Form",
      fields: {
        formAction: { type: "text", label: "Google Form Submit URL" },
        nameEntry: { type: "text", label: "Name Field Entry ID" },
        emailEntry: { type: "text", label: "Email Field Entry ID" },
        messageEntry: { type: "text", label: "Message Field Entry ID" },
        nameLabel: { type: "text", label: "Name Label" },
        emailLabel: { type: "text", label: "Email Label" },
        messageLabel: { type: "text", label: "Message Label" },
        messageRows: { type: "number", label: "Message Box Rows" },
        buttonText: { type: "text", label: "Button Text" },
        successMessage: { type: "text", label: "Success Message" },
        backgroundColor: colorField("Section Background"),
        paddingY: { type: "number", label: "Top Padding" },
        paddingX: { type: "number", label: "Side Padding" },
        paddingBottom: { type: "number", label: "Bottom Padding" }
      },
      defaultProps: {
        formAction: "https://docs.google.com/forms/d/e/1FAIpQLSfvFy-I4z36zqLz4y4boVhM4eTL7KEb5Ip1It7OZyFfxlRgMw/formResponse",
        nameEntry: "entry.111991046",
        emailEntry: "entry.709491702",
        messageEntry: "entry.905150677",
        nameLabel: "What are you called?",
        emailLabel: "What is your email?",
        messageLabel: "What do you want?",
        messageRows: 7,
        buttonText: "Send Message",
        successMessage: "Great, your message was sent and we will get back to you shortly.",
        backgroundColor: "#000000",
        paddingY: 30,
        paddingX: 24,
        paddingBottom: 80
      },
      render: props => <ContactFormPreview {...props} />
    },
    Embed: {
      label: "02 Add Block: Custom HTML Embed",
      fields: { html: { type: "textarea", label: "HTML" }, backgroundColor: colorField("Background Color"), paddingY: { type: "number", label: "Top/Bottom Padding" }, paddingX: { type: "number", label: "Left/Right Padding" } },
      defaultProps: { html: "<p>Custom HTML here</p>", backgroundColor: "transparent", paddingY: 30, paddingX: 24 },
      render: props => <section className="puck-section" style={{ padding: `${props.paddingY || 30}px ${props.paddingX || 24}px`, background: props.backgroundColor || "transparent" }}><div className="puck-inner" dangerouslySetInnerHTML={{ __html: props.html || "" }} /></section>
    }
  }
};

const livePreviewCss = puckPageCss();
const adminPreviewCss = livePreviewCss.replaceAll("#editable-page-root", "[data-puck-entry]");

export const puckEditorCss = `
${livePreviewCss}
${adminPreviewCss}

[data-puck-entry] {
  background:
    radial-gradient(circle at center 18%, rgba(198,40,40,.18), transparent 34%),
    #030000;
  color: #f5f0e6;
  font-family: "Oswald", sans-serif;
  min-height: 100vh;
}

[data-puck-entry] .puck-flex.layout-image-top {
  flex-direction: column-reverse;
  text-align: center;
}

[data-puck-entry] .puck-image {
  object-fit: contain;
}

.puck-font-loader-note {
  padding: 16px;
  border: 1px dashed rgba(255,255,255,.35);
  border-radius: 12px;
  text-align: center;
  opacity: .75;
}

.puck-social-links {
  display: flex;
  gap: 14px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.puck-social-links .social-link {
  width: 44px !important;
  height: 44px !important;
  min-width: 44px !important;
  min-height: 44px !important;
  max-width: 44px !important;
  max-height: 44px !important;
  padding: 0 !important;
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  border-style: solid;
  border-width: 1px;
  border-radius: 999px;
  box-sizing: border-box;
}

.puck-social-links .social-link svg {
  display: block !important;
  width: 22px !important;
  height: 22px !important;
  min-width: 22px !important;
  min-height: 22px !important;
  fill: currentColor !important;
}

.puck-social-letter {
  display: inline-flex !important;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 700;
  line-height: 1;
}
`;
