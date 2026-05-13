import React, { useEffect, useState } from "react"; 
import { createRoot } from "react-dom/client";
import { Puck } from "@puckeditor/core";
import "@puckeditor/core/puck.css";
import "../styles.css";
import "./admin-puck.css";
import { puckConfig, createDefaultPuckData, defaultPuckData, puckEditorCss } from "./puck-config.jsx";
import { renderPuckHtml, puckPageCss } from "./puck-render-html.js";

const API_BASE = window.BAND_API_BASE;
const SITE_SLUG = "graverobberband";

const PAGE_OPTIONS = [
  { value: "home", label: "Home Page" },
  { value: "shows", label: "Shows Page" },
  { value: "signup", label: "Signup Page" },
  { value: "contact", label: "Contact Page" }
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

function freshDefaultData(pageName) {
  return createDefaultPuckData(pageName);
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

  return {
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
  };
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

  return normalizePageData(saved, pageName);
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
  const [showForm, setShowForm] = useState({
    show_date: "",
    venue: "",
    city: "",
    state: "",
    ticket_url: "",
    image_url: "",
    notes: ""
  });

  const [messages, setMessages] = useState([]);
  const [messageStatus, setMessageStatus] = useState("");
  const [replyDrafts, setReplyDrafts] = useState({});
  const [replyImages, setReplyImages] = useState({});

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

    const body = {
      project_data: normalizePageData(data, currentPage),
      html: renderPuckHtml(normalizePageData(data, currentPage)),
      css: puckPageCss()
    };

    const response = await fetch(`${API_BASE}/visual-pages/${SITE_SLUG}/${currentPage}`, {
      method: "PUT",
      headers: authHeaders(token),
      body: JSON.stringify(body)
    });

    setStatus(response.ok ? `Saved ${currentPage} page. Refresh the public website to see changes.` : "Save failed. Check backend/login.");
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

  async function uploadAdminImage(file, onUploaded) {
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setStatus("Please choose an image file.");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);

    setStatus("Uploading image...");

    const response = await fetch(`${API_BASE}/uploads/${SITE_SLUG}`, {
      method: "POST",
      headers: uploadAuthHeaders(token),
      body: formData
    });

    const data = await response.json();

    if (!response.ok || !data.url) {
      setStatus(data.error || "Image upload failed.");
      return;
    }

    onUploaded(data.url);
    setStatus("Image uploaded. Save to keep it.");
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

    const url = editingShowId
      ? `${API_BASE}/shows/${SITE_SLUG}/${editingShowId}`
      : `${API_BASE}/shows/${SITE_SLUG}`;

    const response = await fetch(url, {
      method: editingShowId ? "PUT" : "POST",
      headers: authHeaders(token),
      body: JSON.stringify(showForm)
    });

    if (!response.ok) {
      setShowStatus("Show save failed.");
      return;
    }

    setShowStatus("Show saved.");
    setEditingShowId("");
    setShowForm({
      show_date: "",
      venue: "",
      city: "",
      state: "",
      ticket_url: "",
      image_url: "",
      notes: ""
    });
    loadShows();
  }

  function editShow(show) {
    setEditingShowId(show.id);
    setShowForm({
      show_date: String(show.show_date || "").slice(0, 10),
      venue: show.venue || "",
      city: show.city || "",
      state: show.state || "",
      ticket_url: show.ticket_url || "",
      image_url: show.image_url || "",
      notes: show.notes || ""
    });
  }

  function cancelShowEdit() {
    setEditingShowId("");
    setShowForm({
      show_date: "",
      venue: "",
      city: "",
      state: "",
      ticket_url: "",
      image_url: "",
      notes: ""
    });
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

  async function loadMessages() {
    setMessageStatus("Loading fan messages...");

    try {
      const response = await fetch(`${API_BASE}/messages/${SITE_SLUG}?_=${Date.now()}`, {
        headers: authHeaders(token)
      });
      const data = await response.json();

      if (!response.ok) {
        setMessageStatus(data.error || "Could not load fan messages.");
        return;
      }

      setMessages(data.messages || []);
      setMessageStatus("");
    } catch (error) {
      setMessageStatus("Could not load fan messages.");
    }
  }

  function updateReplyDraft(messageId, value) {
    setReplyDrafts(drafts => ({ ...drafts, [messageId]: value }));
  }

  async function sendReply(messageId) {
    const admin_reply = replyDrafts[messageId] || "";
    const admin_image_url = replyImages[messageId] || "";

    if (!admin_reply.trim() && !admin_image_url) {
      setMessageStatus("Type a reply or upload a reply photo before sending.");
      return;
    }

    setMessageStatus("Saving reply...");

    const response = await fetch(`${API_BASE}/messages/${SITE_SLUG}/${messageId}/reply`, {
      method: "POST",
      headers: authHeaders(token),
      body: JSON.stringify({ admin_reply, admin_image_url })
    });

    if (!response.ok) {
      setMessageStatus("Reply failed.");
      return;
    }

    setReplyDrafts(drafts => ({ ...drafts, [messageId]: "" }));
    setReplyImages(images => ({ ...images, [messageId]: "" }));
    setMessageStatus("Reply saved.");
    loadMessages();
  }

  useEffect(() => {
    if (token) {
      loadPage(currentPage);
      loadShows();
      loadMessages();
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

      <div className="puck-wrapper">
        <AdminEditorErrorBoundary key={`boundary-${currentPage}-${editorKey}`}>
          <Puck
            key={`${currentPage}-${editorKey}`}
            config={puckConfig}
            data={pageData}
            onPublish={savePage}
          />
        </AdminEditorErrorBoundary>
      </div>

      <section className="admin-management-grid">
        <div className="admin-panel">
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
              type="url"
              placeholder="Ticket URL"
              value={showForm.ticket_url}
              onChange={event => updateShowForm("ticket_url", event.target.value)}
            />
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

        <div className="admin-panel">
          <div className="admin-panel-header">
            <h2>Fan Chat Messages</h2>
            <button type="button" onClick={loadMessages}>Reload Messages</button>
          </div>

          {messageStatus && <p className="admin-inline-status">{messageStatus}</p>}

          <div className="admin-list">
            {messages.length ? messages.map(message => (
              <article className="admin-list-item" key={message.id}>
                <strong>{message.fan_name || "Anonymous"}</strong>
                <small>{message.fan_email || "No email"} · {new Date(message.created_at).toLocaleString()}</small>
                <p>{message.message}</p>
                {message.fan_image_url && <img src={message.fan_image_url} alt="Fan upload" className="admin-list-image" />}

                {message.admin_reply && (
                  <div className="admin-reply-box">
                    <strong>Admin Reply</strong>
                    <p>{message.admin_reply}</p>
                    {message.admin_image_url && <img src={message.admin_image_url} alt="Admin reply upload" className="admin-list-image" />}
                  </div>
                )}

                <textarea
                  placeholder="Type a reply..."
                  value={replyDrafts[message.id] || ""}
                  onChange={event => updateReplyDraft(message.id, event.target.value)}
                />
                <div className="admin-upload-row">
                  <label>Reply Photo</label>
                  {replyImages[message.id] && <img src={replyImages[message.id]} alt="Reply" className="admin-upload-preview" />}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={event => uploadAdminImage(event.target.files?.[0], url => setReplyImages(images => ({ ...images, [message.id]: url })))}
                  />
                  {replyImages[message.id] && (
                    <button type="button" className="secondary" onClick={() => setReplyImages(images => ({ ...images, [message.id]: "" }))}>
                      Remove Reply Photo
                    </button>
                  )}
                </div>
                <button type="button" onClick={() => sendReply(message.id)}>Save Reply</button>
              </article>
            )) : <p>No fan messages yet.</p>}
          </div>
        </div>
      </section>
    </main>
  );
}

createRoot(document.getElementById("admin-root")).render(<AdminApp />);
