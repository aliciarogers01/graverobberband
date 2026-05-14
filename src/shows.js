const SITE_SLUG = "graverobber";
const API_BASE =
  window.BAND_API_BASE ||
  "https://band-admin-backend-production.up.railway.app/api";

let showsAlreadyRendered = false;

function formatShowDate(value) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return String(value).slice(0, 10);
  return date.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });
}

function formatTime(value) {
  if (!value) return "";
  const [hour, minute] = String(value).split(":");
  if (!hour || !minute) return value;
  const date = new Date();
  date.setHours(Number(hour), Number(minute), 0, 0);
  return date.toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" });
}

function dateRange(show) {
  const start = formatShowDate(show.show_date);
  const end = formatShowDate(show.end_date);
  return end && end !== start ? `${start} – ${end}` : start;
}

function timeRange(show) {
  const start = formatTime(show.start_time);
  const end = formatTime(show.end_time);
  if (start && end) return `${start} – ${end}`;
  return start || end || "";
}

function showCard(show, index) {
  const location = [show.city, show.state].filter(Boolean).join(", ");
  const notes = show.notes || "";
  const socialLinks = Array.isArray(show.social_urls) ? show.social_urls : [];

  return `
    <article class="show-card" id="show-${index}">
      ${show.image_url ? `<img class="show-card-image" src="${show.image_url}" alt="${show.venue || "Show"}">` : ""}
      <div class="show-card-content">
        <strong class="show-date">${dateRange(show)}</strong>
        ${timeRange(show) ? `<p class="show-time">${timeRange(show)}</p>` : ""}
        <h3>${show.venue || "Venue TBA"}</h3>
        ${location ? `<p>${location}</p>` : ""}
        ${notes ? `<p class="show-notes">${notes}</p>` : ""}

        ${socialLinks.length ? `
          <div class="show-social-links">
            ${socialLinks
              .filter(link => link.url)
              .map(link => `<a href="${link.url}" target="_blank" rel="noopener noreferrer">${link.label || "Link"}</a>`)
              .join("")}
          </div>
        ` : ""}

        ${notes.length > 120 ? `<a class="show-more-link" href="#show-modal-${index}">Read More</a>` : ""}
      </div>
    </article>

    <div id="show-modal-${index}" class="show-modal">
      <a href="#" class="show-modal-backdrop" aria-label="Close show details"></a>
      <div class="show-modal-content">
        <a href="#" class="show-modal-close" aria-label="Close show details">×</a>
        <h2>${show.venue || "Show Details"}</h2>
        <p><strong>${dateRange(show)}</strong>${timeRange(show) ? ` · ${timeRange(show)}` : ""}</p>
        ${location ? `<p>${location}</p>` : ""}
        ${show.image_url ? `<img src="${show.image_url}" alt="${show.venue || "Show"}">` : ""}
        ${notes ? `<p>${notes}</p>` : ""}

        ${socialLinks.length ? `
          <div class="show-social-links">
            ${socialLinks
              .filter(link => link.url)
              .map(link => `<a href="${link.url}" target="_blank" rel="noopener noreferrer">${link.label || "Link"}</a>`)
              .join("")}
          </div>
        ` : ""}
      </div>
    </div>
  `;
}

async function renderShows() {
  const upcomingRoot = document.getElementById("upcoming-shows");
  const noShows = document.getElementById("no-shows-message");
  const pastRoot = document.getElementById("past-shows");
  const pastSection = document.querySelector(".past-shows-section");

  if (!upcomingRoot || showsAlreadyRendered) return;
  showsAlreadyRendered = true;
  upcomingRoot.innerHTML = "<p>Loading shows...</p>";

  try {
    const response = await fetch(`${API_BASE}/shows/${SITE_SLUG}?_=${Date.now()}`);
    const data = await response.json();
    const shows = Array.isArray(data.shows) ? data.shows : [];

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const showDateValue = show => new Date(show.end_date || show.show_date);
    const upcoming = shows.filter(show => showDateValue(show) >= today);
    const past = shows.filter(show => showDateValue(show) < today);

    upcomingRoot.innerHTML = upcoming.length ? upcoming.map(showCard).join("") : "";
    if (noShows) noShows.classList.toggle("hidden", upcoming.length > 0);

    if (pastRoot && pastSection) {
      pastRoot.innerHTML = past.length ? past.map(showCard).join("") : "";
      pastSection.classList.toggle("hidden", past.length === 0);
    }
  } catch (error) {
    console.error("Shows failed to render:", error);
    upcomingRoot.innerHTML = "<p>Shows could not load right now.</p>";
  }
}

function waitForShowsEmbedAndRender() {
  showsAlreadyRendered = false;
  let attempts = 0;

  const timer = setInterval(() => {
    attempts += 1;
    if (document.getElementById("upcoming-shows")) {
      clearInterval(timer);
      renderShows();
    }
    if (attempts > 40) clearInterval(timer);
  }, 250);
}

document.addEventListener("DOMContentLoaded", waitForShowsEmbedAndRender);
window.addEventListener("visualPageRendered", waitForShowsEmbedAndRender);