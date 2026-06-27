import React, { useEffect, useRef, useState } from "react"; 
import { createRoot } from "react-dom/client";
import { Puck } from "@puckeditor/core";
import "@puckeditor/core/puck.css";
import "./admin-puck.css";
import { puckConfig, createDefaultPuckData, defaultPuckData, migratePageBackgroundSettings, puckEditorCss } from "./puck-config.jsx";
import { renderPuckHtml, puckPageCss } from "./puck-render-html.js";

const API_BASE = window.BAND_API_BASE;
const SITE_SLUG = "graverobber";

const PAGE_OPTIONS = [
  { value: "home", label: "Home Page" },
  { value: "shows", label: "Shows Page" },
  { value: "signup", label: "Signup Page" },
  { value: "about", label: "About Page" },
  { value: "merch", label: "Merch Page" },
  { value: "gallery", label: "Gallery Page" },
  { value: "graffiti-wall", label: "Graffiti Wall Page" },
  { value: "contact", label: "Contact Page" },
  { value: "privacy", label: "Privacy Page" },
  { value: "terms", label: "Terms Page" }
];

function authHeaders(token) {
  return { "Content-Type": "application/json", "Authorization": `Bearer ${token}` };
}

function uploadAuthHeaders(token) {
  return token ? { Authorization: `Bearer ${token}` } : {};
}

class AdminEditorErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, message: "" };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, message: error?.message || "The editor crashed while rendering a saved block." };
  }

  componentDidCatch(error, info) {
    console.error("Puck editor crashed:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="admin-editor-crash-panel">
          <h2>Editor recovery mode</h2>
          <p>{this.state.message}</p>
          <p>A saved block was incompatible with the current editor. Click Reset This Page, then Publish to save the clean default layout.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function freshDefaultData(pageName) {
  return createDefaultPuckData(pageName);
}

function clampNumber(value, min, max) {
  const number = Number(value);
  if (!Number.isFinite(number)) return min;
  return Math.min(max, Math.max(min, number));
}

function galleryImageDefaults(index = 0, canvasHeight = 920) {
  const xPositions = [5, 37, 69];
  const column = index % xPositions.length;
  const row = Math.floor(index / 3);
  const topPx = 0 + row * 360;
  const normalizedCanvasHeight = parseGalleryCanvasHeight(canvasHeight);

  return {
    x: xPositions[column],
    y: clampNumber((topPx / normalizedCanvasHeight) * 100, 0, 96),
    width: "280px",
    rotation: 0,
    zIndex: index + 1,
    radius: "16px",
    shadow: "0 0 34px rgba(57,255,20,.35)",
    opacity: 100,
    objectFit: "cover"
  };
}

function parseGalleryCanvasHeight(value) {
  const number = Number(String(value || "").replace(/[^0-9.]/g, ""));
  return Number.isFinite(number) && number > 0 ? number : 920;
}

function galleryCanvasHeightFor(images = [], currentHeight = 920) {
  const normalizedHeight = parseGalleryCanvasHeight(currentHeight);
  const rows = Math.max(1, Math.ceil((images || []).length / 2));
  const countHeight = 180 + rows * 420;
  const lowestImageHeight = (images || []).reduce((max, image, index) => {
    const normalized = normalizeGalleryImage(image, index);
    return Math.max(max, (normalized.y / 100) * normalizedHeight + 520);
  }, 0);

  return Math.ceil(Math.max(920, normalizedHeight, countHeight, lowestImageHeight));
}

function compactGalleryImages(images = []) {
  const normalizedImages = (images || []).map(normalizeGalleryImage);
  const rows = Math.max(1, Math.ceil(normalizedImages.length / 3));
  const compactCanvasHeight = Math.max(360, rows * 360);

  return {
    canvasHeight: compactCanvasHeight,
    images: normalizedImages.map((image, index) => {
      const defaults = galleryImageDefaults(index, compactCanvasHeight);

      return normalizeGalleryImage({
        ...image,
        x: defaults.x,
        y: defaults.y
      }, index);
    })
  };
}

function mediaTypeFromUrl(url = "") {
  return /\.(mp4|webm|mov|m4v|ogv)(\?|#|$)/i.test(String(url)) ? "video" : "image";
}

function normalizeGalleryImage(image = {}, index = 0) {
  const defaults = galleryImageDefaults(index);
  const mediaType = image.mediaType || mediaTypeFromUrl(image.imageUrl);

  return {
    ...image,
    mediaType,
    imageUrl: image.imageUrl || "",
    imageAlt: image.imageAlt || (mediaType === "video" ? "Gallery video" : "Gallery image"),
    caption: image.caption || "",
    x: clampNumber(image.x ?? defaults.x, 0, 100),
    y: clampNumber(image.y ?? defaults.y, 0, 100),
    width: image.width || defaults.width,
    rotation: Number.isFinite(Number(image.rotation)) ? Number(image.rotation) : defaults.rotation,
    zIndex: Number.isFinite(Number(image.zIndex)) ? Number(image.zIndex) : defaults.zIndex,
    radius: image.radius || defaults.radius,
    shadow: image.shadow || defaults.shadow,
    opacity: clampNumber(image.opacity ?? defaults.opacity, 0, 100),
    objectFit: image.objectFit || defaults.objectFit
  };
}

function makeSafeBlockId(type, pageName, index) {
  const safeType = String(type || "block").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  return `graverobberpunk-${pageName}-${safeType}-${index + 1}`;
}

function normalizePageData(data, pageName) {
  const fallback = freshDefaultData(pageName);
  const sourceContent = Array.isArray(data?.content) ? data.content.filter(Boolean) : fallback.content;
  const allowedTypes = new Set(Object.keys(puckConfig.components || {}));
  const safeSourceContent = sourceContent.filter(block => block?.type && allowedTypes.has(block.type));
  const blocksToUse = safeSourceContent.length ? safeSourceContent : fallback.content;
  const seenIds = new Set();

  const content = blocksToUse.map((block, index) => {
    const props = { ...(block.props || {}) };
    const proposedId = props.id || makeSafeBlockId(block.type, pageName, index);
    const safeId = seenIds.has(proposedId) ? makeSafeBlockId(block.type, pageName, index) : proposedId;
    seenIds.add(safeId);

    return {
      ...block,
      props: {
        ...props,
        id: safeId
      }
    };
  });

  return migratePageBackgroundSettings({
    root: {
      ...(fallback.root || {}),
      ...(data?.root || {}),
      props: {
        ...(fallback.root?.props || {}),
        ...(data?.root?.props || {}),
        pageName
      }
    },
    content
  });
}

function savedDataBelongsToAnotherSite(saved) {
  const text = JSON.stringify(saved || "").toLowerCase();

  return (
    text.includes("driver 8") ||
    text.includes("driver8") ||
    text.includes("driver8remband") ||
    text.includes("the music of r.e.m.") ||
    text.includes("orange crush") ||
    text.includes("radio free europe") ||
    text.includes("weird science") ||
    text.includes("weirdsciencefw")
  );
}

function cleanSavedData(saved, pageName) {
  if (savedDataBelongsToAnotherSite(saved)) {
    return freshDefaultData(pageName);
  }

  if (!saved?.content || !Array.isArray(saved.content)) {
    return freshDefaultData(pageName);
  }

  const normalized = normalizePageData(saved, pageName);

  if (pageName === "contact" && !normalized.content.some(block => block?.type === "ContactForm")) {
    return freshDefaultData(pageName);
  }

  return normalized;
}

function AdminApp() {
  const [token, setToken] = useState(localStorage.getItem("adminToken") || "");
  const [email, setEmail] = useState("admin@example.com");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const [currentPage, setCurrentPage] = useState("home");
  const [pageData, setPageData] = useState(() => freshDefaultData("home"));
  const [editorKey, setEditorKey] = useState(0);

  const [shows, setShows] = useState([]);
  const [showStatus, setShowStatus] = useState("");
  const [editingShowId, setEditingShowId] = useState("");
const emptyShowForm = {
  show_date: "",
  end_date: "",
  start_time: "",
  end_time: "",
  venue: "",
  city: "",
  state: "",
  social_urls: [],
  image_url: "",
  notes: ""
};

const [showForm, setShowForm] = useState(emptyShowForm);

  const [galleryImages, setGalleryImages] = useState([]);
  const [galleryStatus, setGalleryStatus] = useState("");
  const [galleryCanvasHeight, setGalleryCanvasHeight] = useState(920);
  const galleryStageRef = useRef(null);
  const galleryStageViewportRef = useRef(null);
  const galleryPanelRef = useRef(null);
  const galleryDragRef = useRef(null);
  const [graffitiPosts, setGraffitiPosts] = useState([]);
  const [graffitiStatus, setGraffitiStatus] = useState("");
  const [visitorStats, setVisitorStats] = useState({ visitors: 0, date: "" });
  const [visitorStatus, setVisitorStatus] = useState("");

  const [savedBlocks, setSavedBlocks] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(`${SITE_SLUG}-saved-blocks`) || "[]");
    } catch {
      return [];
    }
  });
  const [selectedBlockId, setSelectedBlockId] = useState("");
  const [savedBlockName, setSavedBlockName] = useState("");

  async function login(event) {
    event.preventDefault();
    setStatus("Logging in...");

    const response = await fetch(`${API_BASE}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();
    if (!response.ok) {
      setStatus(data.error || "Login failed.");
      return;
    }

    localStorage.setItem("adminToken", data.token);
    setToken(data.token);
    setStatus("");
  }

  function logout() {
    localStorage.removeItem("adminToken");
    setToken("");
  }

  async function loadPage(pageName = currentPage) {
    setStatus(`Loading ${pageName} page...`);

    try {
      const response = await fetch(`${API_BASE}/visual-pages/${SITE_SLUG}/${pageName}?_=${Date.now()}`);
      if (response.ok) {
const data = await response.json();
const page = data?.page || data || {};
let saved = page.project_data;

if (typeof saved === "string") {
  try {
    saved = JSON.parse(saved);
  } catch (error) {
    console.warn("Saved project_data was a string but could not be parsed:", error, saved);
  }
}

if (saved?.content?.length) {
  setPageData(cleanSavedData(saved, pageName));
  setEditorKey(key => key + 1);
  setStatus(`Loaded saved ${pageName} page. Edit blocks, then click Publish.`);
  return;
}
      }
    } catch (error) {
      console.warn("Saved page failed to load, using defaults:", error);
    }

    setPageData(freshDefaultData(pageName));
    setEditorKey(key => key + 1);
    setStatus(`Loaded default ${pageName} page. Edit blocks, then click Publish.`);
  }

  async function savePage(data) {
    setStatus(`Saving ${currentPage} page...`);

    let normalizedData = normalizePageData(data, currentPage);
    if (currentPage === "gallery") {
      normalizedData = await galleryDataForPublish(normalizedData);
    }

    const body = {
      project_data: normalizedData,
      html: renderPuckHtml(normalizedData),
      css: puckPageCss()
    };

    try {
      const response = await fetch(`${API_BASE}/visual-pages/${SITE_SLUG}/${currentPage}`, {
        method: "PUT",
        headers: authHeaders(token),
        body: JSON.stringify(body)
      });

      if (response.ok) {
        setStatus(`Saved ${currentPage} page. Refresh the public website to see changes.`);
        return;
      }

      let message = `Save failed with status ${response.status}.`;
      try {
        const errorData = await response.json();
        if (errorData?.error) message = errorData.error;
      } catch (error) {
        if (response.status === 413) {
          message = "Save failed because the page is too large. Try smaller media files, then publish again.";
        }
      }

      if (response.status === 401) {
        message = "Save failed because the admin login expired. Log out, log back in, then publish again.";
      }

      setStatus(message);
    } catch (error) {
      setStatus("Save failed because the admin panel could not reach the backend. Check the site URL, connection, or CORS.");
    }
  }

  async function resetPage() {
    if (!confirm(`Reset the ${currentPage} page back to its default layout?`)) return;

    setStatus(`Resetting ${currentPage} page...`);

    await fetch(`${API_BASE}/visual-pages/${SITE_SLUG}/${currentPage}`, {
      method: "DELETE",
      headers: authHeaders(token)
    });

    setPageData(freshDefaultData(currentPage));
    setEditorKey(key => key + 1);
    setStatus(`Reset ${currentPage} page. Click Publish to save defaults again, or edit first.`);
  }

  function changePage(event) {
    const nextPage = event.target.value;
    setCurrentPage(nextPage);
    loadPage(nextPage);
  }

  function updateShowForm(field, value) {
    setShowForm(form => ({ ...form, [field]: value }));
  }

function addShowSocialUrl() {
  setShowForm(form => ({
    ...form,
    social_urls: [
      ...(form.social_urls || []),
      { label: "Link", url: "" }
    ]
  }));
}

function updateShowSocialUrl(index, field, value) {
  setShowForm(form => ({
    ...form,
    social_urls: (form.social_urls || []).map((item, itemIndex) => (
      itemIndex === index ? { ...item, [field]: value } : item
    ))
  }));
}

function removeShowSocialUrl(index) {
  setShowForm(form => ({
    ...form,
    social_urls: (form.social_urls || []).filter((_, itemIndex) => itemIndex !== index)
  }));
}

  async function uploadAdminImage(file, onUploaded, options = {}) {
    if (!file) return;

    const isImage = file.type.startsWith("image/");
    const isVideo = file.type.startsWith("video/");

    if (!isImage && !(options.allowVideo && isVideo)) {
      setStatus(options.allowVideo ? "Please choose an image or video file." : "Please choose an image file.");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);

    setStatus(`Uploading ${isVideo ? "video" : "image"}...`);

    const response = await fetch(`${API_BASE}/uploads/${SITE_SLUG}`, {
      method: "POST",
      headers: uploadAuthHeaders(token),
      body: formData
    });

    const data = await response.json();

    if (!response.ok || !data.url) {
      setStatus(data.error || "Media upload failed.");
      return;
    }

    onUploaded(data.url, data.media_type || (isVideo ? "video" : "image"));
    setStatus(`${isVideo ? "Video" : "Image"} uploaded. Save to keep it.`);
  }

  function galleryBlock(images, existingProps = {}, canvasHeight = galleryCanvasHeight) {
    const normalizedImages = (images || []).map(normalizeGalleryImage);
    const height = normalizedImages.length
      ? `${parseGalleryCanvasHeight(canvasHeight)}px`
      : `${galleryCanvasHeightFor(normalizedImages, canvasHeight)}px`;

    return {
      type: "GalleryGrid",
      props: {
        titleColor: "#ffffff",
        titleFont: "Oswald, sans-serif",
        titleSize: "2.5rem",
        backgroundColor: "transparent",
        textColor: "#ffffff",
        paddingY: 40,
        paddingX: 24,
        layoutMode: "freeform",
        columns: 3,
        gap: 18,
        ...existingProps,
        id: "graverobber-gallery-grid-1",
        title: "",
        canvasHeight: height,
        images: normalizedImages
      }
    };
  }

  function dataWithGalleryImages(data, images, canvasHeight = galleryCanvasHeight) {
    const base = normalizePageData(data || freshDefaultData("gallery"), "gallery");
    const existingGallery = (base.content || []).find(block => block.type === "GalleryGrid");
    const contentWithoutOldGallery = (base.content || []).filter(block => block.type !== "GalleryGrid");
    const existingProps = existingGallery?.props || {};

    return normalizePageData({
      ...base,
      content: [
        ...contentWithoutOldGallery,
        galleryBlock(images, existingProps, canvasHeight || existingProps.canvasHeight || galleryCanvasHeight)
      ]
    }, "gallery");
  }

  function extractGalleryImages(data) {
    const block = (data?.content || []).find(item => item.type === "GalleryGrid");
    return Array.isArray(block?.props?.images) ? block.props.images.map(normalizeGalleryImage) : [];
  }

  function extractGalleryCanvasHeight(data) {
    const block = (data?.content || []).find(item => item.type === "GalleryGrid");
    return parseGalleryCanvasHeight(block?.props?.canvasHeight);
  }

  function dataWithoutGalleryTitle(data) {
    if (!data?.content) return data;

    return normalizePageData({
      ...data,
      content: data.content.map(block => {
        if (block?.type !== "GalleryGrid") return block;

        return {
          ...block,
          props: {
            ...(block.props || {}),
            title: ""
          }
        };
      })
    }, "gallery");
  }

  async function galleryDataForPublish(editorData) {
    const cleanEditorData = dataWithoutGalleryTitle(editorData);
    let imagesToKeep = galleryImages.length ? galleryImages : extractGalleryImages(cleanEditorData);
    let canvasHeightToKeep = galleryCanvasHeight || extractGalleryCanvasHeight(cleanEditorData);

    if (!imagesToKeep.length) {
      try {
        const response = await fetch(`${API_BASE}/visual-pages/${SITE_SLUG}/gallery?_=${Date.now()}`);
        if (response.ok) {
          const data = await response.json();
          const page = data?.page || data || {};
          let saved = page.project_data;

          if (typeof saved === "string") {
            saved = JSON.parse(saved);
          }

          const clean = cleanSavedData(saved, "gallery");
          const savedImages = extractGalleryImages(clean);
          if (savedImages.length) {
            imagesToKeep = savedImages;
            canvasHeightToKeep = extractGalleryCanvasHeight(clean);
          }
        }
      } catch (error) {
        console.warn("Saved gallery images could not be checked before publish:", error);
      }
    }

    if (!imagesToKeep.length) {
      return cleanEditorData;
    }

    const mergedData = dataWithGalleryImages(cleanEditorData, imagesToKeep, canvasHeightToKeep);
    const mergedImages = extractGalleryImages(mergedData);
    const mergedHeight = extractGalleryCanvasHeight(mergedData);

    setGalleryImages(mergedImages);
    setGalleryCanvasHeight(galleryCanvasHeightFor(mergedImages, mergedHeight));

    return mergedData;
  }

  async function loadGalleryImages() {
    setGalleryStatus("Loading gallery images...");

    try {
      const response = await fetch(`${API_BASE}/visual-pages/${SITE_SLUG}/gallery?_=${Date.now()}`);
      const data = await response.json();
      const page = data?.page || data || {};
      let saved = page.project_data;

      if (typeof saved === "string") {
        saved = JSON.parse(saved);
      }

          const clean = dataWithoutGalleryTitle(cleanSavedData(saved, "gallery"));
      const loadedImages = extractGalleryImages(clean);
      const loadedHeight = extractGalleryCanvasHeight(clean);
      setGalleryImages(loadedImages);
      setGalleryCanvasHeight(galleryCanvasHeightFor(loadedImages, loadedHeight));
      if (currentPage === "gallery") {
        setPageData(clean);
        setEditorKey(key => key + 1);
      }
      setGalleryStatus("");
    } catch (error) {
      console.warn("Gallery images failed to load:", error);
      setGalleryStatus("Gallery could not reload from the backend. Your current preview was left alone.");
    }
  }

  async function saveGalleryImages(nextImages, nextCanvasHeight = galleryCanvasHeight, options = {}) {
    const previousCanvasHeight = parseGalleryCanvasHeight(nextCanvasHeight);
    const normalizedImages = (nextImages || []).map(normalizeGalleryImage);
    const normalizedCanvasHeight = options.trimCanvas
      ? parseGalleryCanvasHeight(nextCanvasHeight)
      : galleryCanvasHeightFor(normalizedImages, previousCanvasHeight);
    const imagesForCanvas = normalizedImages.map((image, index) => {
      const topPx = (image.y / 100) * previousCanvasHeight;
      return normalizeGalleryImage({
        ...image,
        y: normalizedCanvasHeight === previousCanvasHeight ? image.y : (topPx / normalizedCanvasHeight) * 100
      }, index);
    });
    let baseGalleryData = pageData;

    try {
      const response = await fetch(`${API_BASE}/visual-pages/${SITE_SLUG}/gallery?_=${Date.now()}`);
      if (response.ok) {
        const data = await response.json();
        const page = data?.page || data || {};
        let saved = page.project_data;

        if (typeof saved === "string") {
          saved = JSON.parse(saved);
        }

        baseGalleryData = dataWithoutGalleryTitle(cleanSavedData(saved, "gallery"));
      }
    } catch (error) {
      console.warn("Saved gallery page could not be loaded before gallery save:", error);
    }

    const galleryData = dataWithGalleryImages(baseGalleryData, imagesForCanvas, normalizedCanvasHeight);

    const response = await fetch(`${API_BASE}/visual-pages/${SITE_SLUG}/gallery`, {
      method: "PUT",
      headers: authHeaders(token),
      body: JSON.stringify({
        project_data: galleryData,
        html: renderPuckHtml(galleryData),
        css: puckPageCss()
      })
    });

    if (!response.ok) {
      let errorMessage = "Gallery save failed.";

      try {
        const errorData = await response.json();
        errorMessage = errorData.error || errorMessage;
      } catch {
        // Keep default message.
      }

      if (response.status === 401) {
        errorMessage = "Gallery save failed because the admin login expired. Log out, log back in, then upload again.";
      }

      setGalleryStatus(errorMessage);
      return;
    }

    setGalleryImages(imagesForCanvas);
    setGalleryCanvasHeight(normalizedCanvasHeight);
    if (options.scrollToTop) {
      requestAnimationFrame(() => {
        galleryStageViewportRef.current?.scrollTo({ top: 0, left: 0, behavior: "auto" });
        galleryPanelRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
    if (currentPage === "gallery") {
      setPageData(galleryData);
      setEditorKey(key => key + 1);
    }
    setGalleryStatus("Gallery saved.");
  }

  async function uploadGalleryImages(files) {
    const mediaFiles = Array.from(files || []).filter(file => file.type.startsWith("image/") || file.type.startsWith("video/"));

    if (!mediaFiles.length) {
      setGalleryStatus("Choose one or more image or video files.");
      return;
    }

    setGalleryStatus(`Uploading ${mediaFiles.length} media file(s)...`);

    const uploaded = [];
    const currentCanvasHeight = parseGalleryCanvasHeight(galleryCanvasHeight);

    for (const file of mediaFiles) {
      await uploadAdminImage(file, (url, mediaType) => {
        uploaded.push({
          imageUrl: url,
          mediaType,
          imageAlt: file.name,
          caption: ""
        });
      }, { allowVideo: true });
    }

    if (!uploaded.length) return;

    const insertedRows = Math.max(1, Math.ceil(uploaded.length / 3));
    const insertOffsetPx = insertedRows * 360;
    const nextCanvasHeight = currentCanvasHeight + insertOffsetPx;
    const maxExistingLayer = galleryImages.reduce((max, image, index) => {
      const normalized = normalizeGalleryImage(image, index);
      return Math.max(max, Number(normalized.zIndex) || 0);
    }, 0);
    const uploadedImages = uploaded.map((image, index) => {
      const defaults = galleryImageDefaults(index, nextCanvasHeight);

      return {
        ...image,
        ...defaults,
        y: defaults.y,
        zIndex: maxExistingLayer + uploaded.length - index
      };
    });
    const shiftedExistingImages = galleryImages.map((image, index) => {
      const normalized = normalizeGalleryImage(image, index);
      const currentTopPx = (normalized.y / 100) * currentCanvasHeight;

      return normalizeGalleryImage({
        ...normalized,
        y: ((currentTopPx + insertOffsetPx) / nextCanvasHeight) * 100
      }, index + uploaded.length);
    });
    const nextImages = [...uploadedImages, ...shiftedExistingImages].map(normalizeGalleryImage);
    await saveGalleryImages(nextImages, nextCanvasHeight, { scrollToTop: true });
  }

  function updateGalleryImage(index, field, value) {
    const nextImages = galleryImages.map((image, imageIndex) => (
      imageIndex === index ? normalizeGalleryImage({ ...image, [field]: value }, imageIndex) : normalizeGalleryImage(image, imageIndex)
    ));

    saveGalleryImages(nextImages);
  }

  function beginGalleryDrag(event, index) {
    const stage = galleryStageRef.current;
    if (!stage) return;

    event.preventDefault();
    event.currentTarget.setPointerCapture?.(event.pointerId);

    const stageRect = stage.getBoundingClientRect();
    const itemRect = event.currentTarget.getBoundingClientRect();

    galleryDragRef.current = {
      index,
      pointerId: event.pointerId,
      offsetX: event.clientX - itemRect.left,
      offsetY: event.clientY - itemRect.top,
      stageRect,
      nextImages: galleryImages.map(normalizeGalleryImage)
    };
  }

  function dragGalleryImage(event) {
    const drag = galleryDragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;

    const x = clampNumber(((event.clientX - drag.offsetX - drag.stageRect.left) / drag.stageRect.width) * 100, 0, 100);
    const y = clampNumber(((event.clientY - drag.offsetY - drag.stageRect.top) / drag.stageRect.height) * 100, 0, 100);

    const nextImages = drag.nextImages.map((image, imageIndex) => (
      imageIndex === drag.index ? normalizeGalleryImage({ ...image, x, y }, imageIndex) : normalizeGalleryImage(image, imageIndex)
    ));

    drag.nextImages = nextImages;
    setGalleryImages(nextImages);
  }

  function endGalleryDrag(event) {
    const drag = galleryDragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;

    event.currentTarget.releasePointerCapture?.(event.pointerId);
    galleryDragRef.current = null;
    saveGalleryImages(drag.nextImages);
  }

  function moveGalleryLayer(index, direction) {
    const nextImages = galleryImages.map((image, imageIndex) => {
      if (imageIndex !== index) return normalizeGalleryImage(image, imageIndex);
      const normalized = normalizeGalleryImage(image, imageIndex);
      return normalizeGalleryImage({
        ...normalized,
        zIndex: normalized.zIndex + direction
      }, imageIndex);
    });

    saveGalleryImages(nextImages);
  }

  function removeGalleryImage(index) {
    const compacted = compactGalleryImages(galleryImages.filter((_, imageIndex) => imageIndex !== index));
    saveGalleryImages(compacted.images, compacted.canvasHeight, { trimCanvas: true, scrollToTop: true });
  }

  function saveSavedBlocks(nextBlocks) {
    setSavedBlocks(nextBlocks);
    localStorage.setItem(`${SITE_SLUG}-saved-blocks`, JSON.stringify(nextBlocks));
  }

function currentPageBlocks() {
  return Array.isArray(pageData?.content) ? pageData.content : [];
}

  function saveSelectedBlockTemplate() {
    const block = currentPageBlocks().find(item => item.props?.id === selectedBlockId);

    if (!block) {
      alert("Choose a block to save first.");
      return;
    }

    const templateName = savedBlockName.trim() || `${block.type} Template`;

    const nextTemplate = {
      id: `template-${Date.now()}`,
      name: templateName,
      block: {
        type: block.type,
props: {
  ...clone(block.props || {}),
  id: makeSafeBlockId(block.type, currentPage, Date.now())
}
      }
    };

    saveSavedBlocks([...savedBlocks, nextTemplate]);
    setSavedBlockName("");
  }

function insertSavedBlockTemplate(template) {
  const newBlock = {
    type: template.block.type,
props: {
  ...clone(template.block.props || {}),
  id: makeSafeBlockId(template.block.type, currentPage, Date.now())
}
  };

  setPageData(normalizePageData({
    ...pageData,
    content: [...currentPageBlocks(), newBlock]
  }, currentPage));

  setEditorKey(key => key + 1);
}

  function deleteSavedBlockTemplate(templateId) {
    saveSavedBlocks(savedBlocks.filter(template => template.id !== templateId));
  }

  async function loadShows() {
    try {
      const response = await fetch(`${API_BASE}/shows/${SITE_SLUG}?_=${Date.now()}`);
      const data = await response.json();
      setShows(data.shows || []);
    } catch (error) {
      setShowStatus("Could not load shows.");
    }
  }

async function saveShow(event) {
  event.preventDefault();
  setShowStatus("Saving show...");

  try {
    const url = editingShowId
      ? `${API_BASE}/shows/${SITE_SLUG}/${editingShowId}`
      : `${API_BASE}/shows/${SITE_SLUG}`;

    const response = await fetch(url, {
      method: editingShowId ? "PUT" : "POST",
      headers: authHeaders(token),
      body: JSON.stringify(showForm)
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      setShowStatus(data.error || "Show save failed. Check backend/login.");
      return;
    }

    setShowStatus("Show saved.");
    setEditingShowId("");
setShowForm(emptyShowForm);

    await loadShows();
  } catch (error) {
    console.error("Show save failed:", error);
    setShowStatus(`Show save failed. API_BASE: ${API_BASE}, SITE_SLUG: ${SITE_SLUG}`);
  }
}

function editShow(show) {
  setEditingShowId(show.id);

  setShowForm({
    show_date: String(show.show_date || "").slice(0, 10),
    end_date: String(show.end_date || "").slice(0, 10),
    start_time: show.start_time || "",
    end_time: show.end_time || "",
    venue: show.venue || "",
    city: show.city || "",
    state: show.state || "",
    social_urls: Array.isArray(show.social_urls) ? show.social_urls : [],
    image_url: show.image_url || "",
    notes: show.notes || ""
  });
}

  function cancelShowEdit() {
    setEditingShowId("");
setShowForm(emptyShowForm);
  }

  async function deleteShow(showId) {
    if (!confirm("Delete this show?")) return;

    const response = await fetch(`${API_BASE}/shows/${SITE_SLUG}/${showId}`, {
      method: "DELETE",
      headers: authHeaders(token)
    });

    if (!response.ok) {
      setShowStatus("Show delete failed.");
      return;
    }

    setShowStatus("Show deleted.");
    loadShows();
  }

  async function loadGraffitiPosts() {
    setGraffitiStatus("Loading graffiti submissions...");

    try {
      const response = await fetch(`${API_BASE}/messages/${SITE_SLUG}?_=${Date.now()}`, {
        headers: authHeaders(token)
      });
      const data = await response.json();

      if (!response.ok) {
        setGraffitiStatus(data.error || "Could not load graffiti submissions.");
        return;
      }

      setGraffitiPosts(data.messages || []);
      setGraffitiStatus("");
    } catch (error) {
      setGraffitiStatus("Could not load graffiti submissions.");
    }
  }

  async function updateGraffitiApproval(messageId, approved) {
    setGraffitiStatus(approved ? "Approving submission..." : "Hiding submission...");

    const response = await fetch(`${API_BASE}/messages/${SITE_SLUG}/${messageId}/${approved ? "approve" : "reject"}`, {
      method: "POST",
      headers: authHeaders(token)
    });

    if (!response.ok) {
      setGraffitiStatus("Approval update failed.");
      return;
    }

    await loadGraffitiPosts();
  }

  async function deleteGraffitiPost(messageId) {
    if (!confirm("Delete this graffiti submission?")) return;

    const response = await fetch(`${API_BASE}/messages/${SITE_SLUG}/${messageId}`, {
      method: "DELETE",
      headers: authHeaders(token)
    });

    if (!response.ok) {
      setGraffitiStatus("Delete failed.");
      return;
    }

    await loadGraffitiPosts();
  }

  async function loadVisitorStats() {
    setVisitorStatus("Loading visitor count...");

    try {
      const response = await fetch(`${API_BASE}/visitors/${SITE_SLUG}/today?_=${Date.now()}`, {
        headers: authHeaders(token)
      });
      const data = await response.json();

      if (!response.ok) {
        setVisitorStatus(data.error || "Could not load today's visitor count.");
        return;
      }

      setVisitorStats({
        visitors: Number(data.visitors || 0),
        date: data.date || ""
      });
      setVisitorStatus("");
    } catch (error) {
      setVisitorStatus("Could not load today's visitor count.");
    }
  }



  useEffect(() => {
    if (token) {
      loadPage(currentPage);
      loadShows();
      loadGalleryImages();
      loadGraffitiPosts();
      loadVisitorStats();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  if (!token) {
    return (
      <main className="admin-login-page">
        <form className="admin-card" onSubmit={login}>
          <h1>Grave Robber Admin</h1>
          <label>Email</label>
          <input type="email" value={email} onChange={event => setEmail(event.target.value)} required />
          <label>Password</label>
          <input type="password" value={password} onChange={event => setPassword(event.target.value)} required />
          <button type="submit">Login</button>
          <p>{status}</p>
        </form>
      </main>
    );
  }

  return (
    <main className="admin-puck-page">
      <style>{puckEditorCss}</style>
      <div className="admin-toolbar">
        <div>
          <h1>Grave Robber Visual Builder</h1>
          <p>{status}</p>
        </div>
        <div className="admin-toolbar-actions">
          <label className="page-select-label">
            Edit Page
            <select value={currentPage} onChange={changePage}>
              {PAGE_OPTIONS.map(page => <option key={page.value} value={page.value}>{page.label}</option>)}
            </select>
          </label>
          <button type="button" onClick={() => loadPage(currentPage)}>Reload This Page</button>
          <button type="button" onClick={resetPage} className="danger">Reset This Page</button>
          <button type="button" onClick={logout}>Logout</button>
        </div>
      </div>

      <section className="admin-panel admin-visitor-panel">
        <div>
          <p className="admin-visitor-label">Today's Home Visitors</p>
          <strong>{visitorStats.visitors}</strong>
          <span>{visitorStats.date || "Today"}</span>
          {visitorStatus && <p className="admin-inline-status">{visitorStatus}</p>}
        </div>
        <button type="button" onClick={loadVisitorStats}>Reload Count</button>
      </section>

      <div className="puck-wrapper">
        <AdminEditorErrorBoundary key={`boundary-${currentPage}-${editorKey}`}>
<Puck
  key={`${currentPage}-${editorKey}-${pageData?.content?.length || 0}`}
  config={puckConfig}
  data={pageData}
  onPublish={savePage}
/>
        </AdminEditorErrorBoundary>
      </div>

      <section className="admin-panel saved-blocks-panel">
        <div className="admin-panel-header">
          <h2>Saved Blocks / Templates</h2>
        </div>

        <div className="admin-form-row">
          <label>Template Name</label>
          <input
            type="text"
            value={savedBlockName}
            placeholder="Example: Green Glow Music Button Row"
            onChange={event => setSavedBlockName(event.target.value)}
          />
        </div>

        <div className="admin-form-row">
          <label>Choose Block From This Page</label>
          <select value={selectedBlockId} onChange={event => setSelectedBlockId(event.target.value)}>
            <option value="">Choose a block...</option>
            {currentPageBlocks().map((block, index) => (
              <option key={block.props?.id || index} value={block.props?.id || ""}>
                {index + 1}. {block.type} {block.props?.title ? `- ${block.props.title}` : ""}
              </option>
            ))}
          </select>
        </div>

        <button type="button" onClick={saveSelectedBlockTemplate}>
          Save Selected Block
        </button>

        <div className="admin-list saved-template-list">
          {savedBlocks.length ? savedBlocks.map(template => (
            <article className="admin-list-item saved-template-item" key={template.id}>
              <strong>{template.name}</strong>
              <small>{template.block?.type}</small>

              <div className="admin-item-actions">
                <button type="button" onClick={() => insertSavedBlockTemplate(template)}>
                  Insert
                </button>
                <button type="button" className="danger" onClick={() => deleteSavedBlockTemplate(template.id)}>
                  Delete
                </button>
              </div>
            </article>
          )) : <p>No saved blocks yet.</p>}
        </div>
      </section>

      <section className="admin-management-grid">
        <div className="admin-panel admin-shows-panel">
          <div className="admin-panel-header">
            <h2>Add / Edit / Remove Shows</h2>
            <button type="button" onClick={loadShows}>Reload Shows</button>
          </div>

          <form className="admin-form-grid" onSubmit={saveShow}>
            <input
              type="date"
              value={showForm.show_date}
              onChange={event => updateShowForm("show_date", event.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Venue"
              value={showForm.venue}
              onChange={event => updateShowForm("venue", event.target.value)}
              required
            />
            <input
              type="text"
              placeholder="City"
              value={showForm.city}
              onChange={event => updateShowForm("city", event.target.value)}
            />
            <input
              type="text"
              placeholder="State"
              value={showForm.state}
              onChange={event => updateShowForm("state", event.target.value)}
            />
<input
  type="date"
  value={showForm.end_date}
  onChange={event => updateShowForm("end_date", event.target.value)}
/>

<input
  type="time"
  value={showForm.start_time}
  onChange={event => updateShowForm("start_time", event.target.value)}
/>

<input
  type="time"
  value={showForm.end_time}
  onChange={event => updateShowForm("end_time", event.target.value)}
/>

<div className="admin-upload-row">
  <label>Show Social Links</label>

  {(showForm.social_urls || []).map((item, index) => (
    <div className="admin-social-url-row" key={index}>
      <input
        type="text"
        placeholder="Label"
        value={item.label || ""}
        onChange={event => updateShowSocialUrl(index, "label", event.target.value)}
      />

      <input
        type="url"
        placeholder="URL"
        value={item.url || ""}
        onChange={event => updateShowSocialUrl(index, "url", event.target.value)}
      />

      <button
        type="button"
        className="danger"
        onClick={() => removeShowSocialUrl(index)}
      >
        Remove Link
      </button>
    </div>
  ))}

  <button type="button" onClick={addShowSocialUrl}>
    Add Social Link
  </button>
</div>
            <div className="admin-upload-row">
              <label>Show Photo</label>
              {showForm.image_url && <img src={showForm.image_url} alt="Show" className="admin-upload-preview" />}
              <input
                type="file"
                accept="image/*"
                onChange={event => uploadAdminImage(event.target.files?.[0], url => updateShowForm("image_url", url))}
              />
              {showForm.image_url && (
                <button type="button" className="secondary" onClick={() => updateShowForm("image_url", "")}>
                  Remove Show Photo
                </button>
              )}
            </div>
            <textarea
              placeholder="Notes"
              value={showForm.notes}
              onChange={event => updateShowForm("notes", event.target.value)}
            />
            <div className="admin-form-actions">
              <button type="submit">{editingShowId ? "Update Show" : "Add Show"}</button>
              {editingShowId && <button type="button" className="secondary" onClick={cancelShowEdit}>Cancel Edit</button>}
            </div>
          </form>

          {showStatus && <p className="admin-inline-status">{showStatus}</p>}

          <div className="admin-list">
            {shows.length ? shows.map(show => (
              <article className="admin-list-item" key={show.id}>
                <strong>{String(show.show_date || "").slice(0, 10)}</strong>
                <span>{show.venue}</span>
                <small>{show.city} {show.state}</small>
                {show.image_url && <img src={show.image_url} alt={show.venue || "Show"} className="admin-list-image" />}
                {show.notes && <p>{show.notes}</p>}
                <div className="admin-item-actions">
                  <button type="button" onClick={() => editShow(show)}>Edit</button>
                  <button type="button" className="danger" onClick={() => deleteShow(show.id)}>Delete</button>
                </div>
              </article>
            )) : <p>No shows yet.</p>}
          </div>
        </div>

        <div className="admin-panel admin-gallery-panel" ref={galleryPanelRef}>
          <div className="admin-panel-header">
            <h2>Gallery Uploads</h2>
            <button type="button" onClick={loadGalleryImages}>Reload Gallery</button>
          </div>

          <div className="admin-upload-row">
            <label>Upload Gallery Media</label>
            <input
              type="file"
              accept="image/*,video/*"
              multiple
              onChange={event => uploadGalleryImages(event.target.files)}
            />
          </div>

          {galleryStatus && <p className="admin-inline-status">{galleryStatus}</p>}

          <div className="admin-gallery-stage-viewport" ref={galleryStageViewportRef}>
            <div
              className="admin-gallery-stage"
              ref={galleryStageRef}
              aria-label="Drag gallery items to place them on the Gallery page"
              style={{ minHeight: `${galleryCanvasHeight}px` }}
            >
              {galleryImages.length ? galleryImages.map((image, index) => {
                const normalized = normalizeGalleryImage(image, index);
                if (!normalized.imageUrl) return null;
                return normalized.mediaType === "video" ? (
                  <video
                    key={`${normalized.imageUrl}-preview-${index}`}
                    src={normalized.imageUrl}
                    className="admin-gallery-stage-image"
                    style={{
                      left: `${normalized.x}%`,
                      top: `${normalized.y}%`,
                      width: normalized.width,
                      transform: `rotate(${normalized.rotation}deg)`,
                      zIndex: normalized.zIndex,
                      borderRadius: normalized.radius,
                      boxShadow: normalized.shadow,
                      opacity: normalized.opacity / 100,
                      objectFit: normalized.objectFit
                    }}
                    muted
                    playsInline
                    preload="metadata"
                    onPointerDown={event => beginGalleryDrag(event, index)}
                    onPointerMove={dragGalleryImage}
                    onPointerUp={endGalleryDrag}
                    onPointerCancel={endGalleryDrag}
                  />
                ) : (
                  <img
                    key={`${normalized.imageUrl}-preview-${index}`}
                    src={normalized.imageUrl}
                    alt={normalized.imageAlt || "Gallery preview"}
                    className="admin-gallery-stage-image"
                    style={{
                      left: `${normalized.x}%`,
                      top: `${normalized.y}%`,
                      width: normalized.width,
                      transform: `rotate(${normalized.rotation}deg)`,
                      zIndex: normalized.zIndex,
                      borderRadius: normalized.radius,
                      boxShadow: normalized.shadow,
                      opacity: normalized.opacity / 100,
                      objectFit: normalized.objectFit
                    }}
                    onPointerDown={event => beginGalleryDrag(event, index)}
                    onPointerMove={dragGalleryImage}
                    onPointerUp={endGalleryDrag}
                    onPointerCancel={endGalleryDrag}
                  />
                );
              }) : <p>Gallery images and videos will appear here. Upload media, then drag it into place.</p>}
            </div>
          </div>

          <div className="admin-list admin-gallery-editor-list">
            {galleryImages.length ? galleryImages.map((image, index) => (
              <article className="admin-list-item admin-gallery-editor-item" key={`${image.imageUrl}-${index}`}>
                {image.imageUrl && (
                  normalizeGalleryImage(image, index).mediaType === "video" ? (
                    <video src={image.imageUrl} className="admin-list-image" controls preload="metadata" />
                  ) : (
                    <img src={image.imageUrl} alt={image.imageAlt || "Gallery"} className="admin-list-image" />
                  )
                )}

                <select
                  value={normalizeGalleryImage(image, index).mediaType}
                  onChange={event => updateGalleryImage(index, "mediaType", event.target.value)}
                >
                  <option value="image">Image</option>
                  <option value="video">Video</option>
                </select>

                <input
                  type="text"
                  placeholder="Alt text"
                  value={image.imageAlt || ""}
                  onChange={event => updateGalleryImage(index, "imageAlt", event.target.value)}
                />

                <input
                  type="text"
                  placeholder="Caption"
                  value={image.caption || ""}
                  onChange={event => updateGalleryImage(index, "caption", event.target.value)}
                />

                <details className="admin-gallery-appearance">
                  <summary>Appearance</summary>

                <div className="admin-gallery-control-grid admin-gallery-appearance-grid">
                  <label>
                    Width
                    <input
                      type="text"
                      value={normalizeGalleryImage(image, index).width}
                      onChange={event => updateGalleryImage(index, "width", event.target.value)}
                    />
                  </label>

                  <label>
                    Rotation
                    <input
                      type="number"
                      value={normalizeGalleryImage(image, index).rotation}
                      onChange={event => updateGalleryImage(index, "rotation", event.target.value)}
                    />
                  </label>

                  <label>
                    Radius
                    <input
                      type="text"
                      value={normalizeGalleryImage(image, index).radius}
                      onChange={event => updateGalleryImage(index, "radius", event.target.value)}
                    />
                  </label>

                  <label>
                    Opacity
                    <input
                      type="number"
                      min="0"
                      max="100"
                      value={normalizeGalleryImage(image, index).opacity}
                      onChange={event => updateGalleryImage(index, "opacity", event.target.value)}
                    />
                  </label>

                  <label>
                    Fit
                    <select
                      value={normalizeGalleryImage(image, index).objectFit}
                      onChange={event => updateGalleryImage(index, "objectFit", event.target.value)}
                    >
                      <option value="cover">Cover</option>
                      <option value="contain">Contain</option>
                      <option value="fill">Stretch</option>
                    </select>
                  </label>
                </div>

                <label className="admin-gallery-shadow-field">
                  Glow / Shadow
                  <input
                    type="text"
                    value={normalizeGalleryImage(image, index).shadow}
                    onChange={event => updateGalleryImage(index, "shadow", event.target.value)}
                  />
                </label>
                </details>

                <div className="admin-item-actions">
                  <button type="button" onClick={() => moveGalleryLayer(index, 1)}>Bring Forward</button>
                  <button type="button" onClick={() => moveGalleryLayer(index, -1)}>Send Back</button>
                  <button type="button" className="danger" onClick={() => removeGalleryImage(index)}>Remove Media</button>
                </div>
              </article>
            )) : <p>No gallery images yet.</p>}
          </div>
        </div>

        <div className="admin-panel">
          <div className="admin-panel-header">
            <h2>Graffiti Wall Approvals</h2>
            <button type="button" onClick={loadGraffitiPosts}>Reload Submissions</button>
          </div>

          {graffitiStatus && <p className="admin-inline-status">{graffitiStatus}</p>}

          <div className="admin-list">
            {graffitiPosts.length ? graffitiPosts.map(post => (
              <article className="admin-list-item" key={post.id}>
                <strong>{post.fan_name || "Anonymous"}</strong>
                <small>{post.is_approved ? "Approved" : "Pending approval"}</small>
                {post.message && <p>{post.message}</p>}
                {post.fan_image_url && <img src={post.fan_image_url} alt="Fan submission" className="admin-list-image" />}
                {post.fan_art_url && <img src={post.fan_art_url} alt="Fan art submission" className="admin-list-image" />}

                <div className="admin-item-actions">
                  {!post.is_approved && (
                    <button type="button" onClick={() => updateGraffitiApproval(post.id, true)}>
                      Approve
                    </button>
                  )}
                  {post.is_approved && (
                    <button type="button" className="secondary" onClick={() => updateGraffitiApproval(post.id, false)}>
                      Hide
                    </button>
                  )}
                  <button type="button" className="danger" onClick={() => deleteGraffitiPost(post.id)}>
                    Delete
                  </button>
                </div>
              </article>
            )) : <p>No graffiti submissions yet.</p>}
          </div>
        </div>
      </section>
    </main>
  );
}

createRoot(document.getElementById("admin-root")).render(<AdminApp />);
