const SITE_SLUG = "graverobber";
const API_BASE =
  window.BAND_API_BASE ||
  "https://band-admin-backend-production.up.railway.app/api";

let showsAlreadyRendered = false;

function formatShowDate(value) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return String(value).slice(0, 10);

  return date.toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric"
  });
}

function showCard(show) {
  const location = [show.city, show.state].filter(Boolean).join(", ");

  return `
    <article class="show-card">
      ${show.image_url ? `<img class="show-card-image" src="${show.image_url}" alt="${show.venue || "Show"}">` : ""}
      <div class="show-card-content">
        <strong class="show-date">${formatShowDate(show.show_date)}</strong>
        <h3>${show.venue || "Venue TBA"}</h3>
        ${location ? `<p>${location}</p>` : ""}
        ${show.notes ? `<p>${show.notes}</p>` : ""}
        ${show.ticket_url ? `<a class="primary-btn" href="${show.ticket_url}" target="_blank" rel="noopener noreferrer" style="background:#bb00ff;border:1px solid #00ff04;box-shadow:0 0 24px #00ff04;color:#ffffff;">Tickets</a>` : ""}
      </div>
    </article>
  `;
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
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const upcoming = shows.filter(show => new Date(show.show_date) >= today);
    const past = shows.filter(show => new Date(show.show_date) < today);

    if (upcoming.length) {
      upcomingRoot.innerHTML = upcoming.map(showCard).join("");
      if (noShows) noShows.classList.add("hidden");
    } else {
      upcomingRoot.innerHTML = "";
      if (noShows) noShows.classList.remove("hidden");
    }

    if (pastRoot && pastSection) {
      if (past.length) {
        pastRoot.innerHTML = past.map(showCard).join("");
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