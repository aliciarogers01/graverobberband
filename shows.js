const SITE_SLUG = "graverobber";
const API_BASE =
  window.BAND_API_BASE ||
  "https://band-admin-backend-production.up.railway.app/api";

let showsAlreadyRendered = false;

function firstValue(...values) {
  return values.find(value => value !== undefined && value !== null && String(value).trim() !== "");
}

function formatShowDate(value) {
  if (!value) return "Date TBA";

  const clean = String(value).slice(0, 10);
  const date = new Date(`${clean}T00:00:00`);

  if (Number.isNaN(date.getTime())) return "Date TBA";

  return date.toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric"
  });
}

function formatShowTime(value) {
  const raw = firstValue(value);
  if (!raw) return "";

  const clean = String(raw).trim();
  const match = clean.match(/^(\d{1,2}):(\d{2})(?::\d{2})?$/);

  if (!match) return clean;

  let hours = Number(match[1]);
  const minutes = match[2];
  const suffix = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  if (hours === 0) hours = 12;

  return `${hours}:${minutes} ${suffix}`;
}

function normalizeShowDate(show) {
  return firstValue(show.show_date, show.date, show.start_date, show.event_date, show.showDate);
}

function getShowImage(show) {
  return firstValue(show.image_url, show.photo_url, show.image, show.show_image_url, show.flyer_url);
}

function getShowTime(show) {
  return formatShowTime(firstValue(show.show_time, show.time, show.start_time));
}

function isPastShow(show) {
  const raw = normalizeShowDate(show);
  if (!raw) return false;

  const clean = String(raw).slice(0, 10);
  const date = new Date(`${clean}T23:59:59`);

  if (Number.isNaN(date.getTime())) return false;

  return date < new Date();
}

function showCard(show, index) {
  const modalId = `show-modal-${index}`;
  const location = [show.city, show.state].filter(Boolean).join(", ");
  const dateText = formatShowDate(normalizeShowDate(show));
  const timeText = getShowTime(show);
  const imageUrl = getShowImage(show);

  return `
    <article class="show-card show-card-clickable" data-show-modal="${modalId}" tabindex="0" role="button">
      ${imageUrl ? `<img class="show-card-image" src="${imageUrl}" alt="${show.venue || "Show"}">` : ""}
      <div class="show-card-content">
        <strong class="show-date">${dateText}</strong>
        <h3>${show.venue || "Venue TBA"}</h3>
        ${location ? `<p>${location}</p>` : ""}
        ${timeText ? `<p>${timeText}</p>` : ""}
        ${show.notes ? `<p>${show.notes}</p>` : ""}
      </div>
    </article>

    <div id="${modalId}" class="show-modal">
      <a href="#" class="show-modal-backdrop" aria-label="Close show details"></a>

      <div class="show-modal-content">
        <a href="#" class="show-modal-close" aria-label="Close show details">×</a>

        <h2>${show.venue || "Show Details"}</h2>

        <p class="show-date">${dateText}</p>

        ${location ? `<p>${location}</p>` : ""}

        ${timeText ? `<p>${timeText}</p>` : ""}

        ${imageUrl ? `<img src="${imageUrl}" alt="${show.venue || "Show"}">` : ""}

        ${show.notes ? `<p>${show.notes}</p>` : ""}

        ${
          show.ticket_url
            ? `<a class="primary-btn" href="${show.ticket_url}" target="_blank" rel="noopener noreferrer" style="background:#bb00ff;border:1px solid #00ff04;box-shadow:0 0 24px #00ff04;color:#ffffff;">Tickets</a>`
            : ""
        }
      </div>
    </div>
  `;
}

function bindShowModalClicks() {
  document.querySelectorAll(".show-card-clickable").forEach(card => {
    if (card.dataset.boundShowClick === "true") return;
    card.dataset.boundShowClick = "true";

    card.addEventListener("click", () => {
      const modalId = card.dataset.showModal;
      const modal = document.getElementById(modalId);
      if (modal) modal.classList.add("is-open");
    });

    card.addEventListener("keydown", event => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      const modalId = card.dataset.showModal;
      const modal = document.getElementById(modalId);
      if (modal) modal.classList.add("is-open");
    });
  });

  document.querySelectorAll(".show-modal-backdrop, .show-modal-close").forEach(closeButton => {
    if (closeButton.dataset.boundShowClose === "true") return;
    closeButton.dataset.boundShowClose = "true";

    closeButton.addEventListener("click", event => {
      event.preventDefault();
      closeButton.closest(".show-modal")?.classList.remove("is-open");
    });
  });
}

async function renderShows() {
  const upcomingRoot = document.getElementById("upcoming-shows");
  const noShows = document.getElementById("no-shows-message");
  const pastRoot = document.getElementById("past-shows");
  const pastSection = document.querySelector(".past-shows-section");

  if (!upcomingRoot) return;
  if (showsAlreadyRendered) return;

  showsAlreadyRendered = true;
  upcomingRoot.innerHTML = "<p>Loading shows...</p>";

  try {
    const response = await fetch(`${API_BASE}/shows/${SITE_SLUG}?_=${Date.now()}`);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Shows request failed.");
    }

    const shows = Array.isArray(data.shows) ? data.shows : [];

    const upcoming = shows
      .filter(show => !isPastShow(show))
      .sort((a, b) => new Date(String(normalizeShowDate(a) || "").slice(0, 10)) - new Date(String(normalizeShowDate(b) || "").slice(0, 10)));

    const past = shows
      .filter(show => isPastShow(show))
      .sort((a, b) => new Date(String(normalizeShowDate(b) || "").slice(0, 10)) - new Date(String(normalizeShowDate(a) || "").slice(0, 10)));

    if (upcoming.length) {
      upcomingRoot.innerHTML = upcoming.map((show, index) => showCard(show, index)).join("");
bindShowModalClicks();
      if (noShows) noShows.classList.add("hidden");
    } else {
      upcomingRoot.innerHTML = "";
      if (noShows) noShows.classList.remove("hidden");
    }

    if (pastRoot && pastSection) {
      if (past.length) {
        pastRoot.innerHTML = past.map((show, index) => showCard(show, `past-${index}`)).join("");
bindShowModalClicks();
        pastSection.classList.remove("hidden");
      } else {
        pastRoot.innerHTML = "";
        pastSection.classList.add("hidden");
      }
    }
  } catch (error) {
    console.error("Shows failed to render:", error);
    upcomingRoot.innerHTML = "<p>Shows could not load right now.</p>";
    if (noShows) noShows.classList.add("hidden");
  }
}

function waitForShowsEmbedAndRender() {
  showsAlreadyRendered = false;

  if (document.getElementById("upcoming-shows")) {
    renderShows();
    return;
  }

  let attempts = 0;
  const timer = setInterval(() => {
    attempts += 1;

    if (document.getElementById("upcoming-shows")) {
      clearInterval(timer);
      renderShows();
    }

    if (attempts > 40) {
      clearInterval(timer);
      console.warn("Shows embed was not found on this page.");
    }
  }, 250);
}

document.addEventListener("DOMContentLoaded", waitForShowsEmbedAndRender);
window.addEventListener("visualPageRendered", waitForShowsEmbedAndRender);