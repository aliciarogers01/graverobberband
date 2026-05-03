function formatDate(dateString) {
  const date = new Date(dateString + "T00:00:00");
  return date.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric", year: "numeric" });
}
function isPastShow(dateString) {
  return new Date(dateString + "T23:59:59") < new Date();
}
function generateShowHTML(show) {
  const cityState = [show.city, show.state].filter(Boolean).join(", ");
  return `
    <div class="show-card">
      <div class="show-date">${formatDate(show.show_date)}</div>
      <div class="show-info">
        <h3>${show.venue}</h3>
        <p>${cityState}</p>
        ${show.notes ? `<p>${show.notes}</p>` : ""}
      </div>
      ${show.ticket_url ? `<a href="${show.ticket_url}" target="_blank" rel="noopener noreferrer" class="ticket-link">Get Tickets</a>` : ""}
    </div>`;
}
function initShowsPage() {
  const upcomingContainer = document.getElementById("upcoming-shows");
  const pastContainer = document.getElementById("past-shows");
  const noShowsMessage = document.getElementById("no-shows-message");
  if (!upcomingContainer) return;
  getShows().then(data => {
    const shows = data.shows || [];
    const upcomingShows = shows.filter(show => !isPastShow(show.show_date)).sort((a,b)=>new Date(a.show_date)-new Date(b.show_date));
    const pastShows = shows.filter(show => isPastShow(show.show_date)).sort((a,b)=>new Date(b.show_date)-new Date(a.show_date));
    upcomingContainer.innerHTML = upcomingShows.map(generateShowHTML).join("");
    if (noShowsMessage) noShowsMessage.style.display = upcomingShows.length ? "none" : "block";
    if (pastContainer && pastShows.length) {
      pastContainer.innerHTML = pastShows.map(generateShowHTML).join("");
      document.querySelector(".past-shows-section")?.classList.remove("hidden");
    }
  }).catch(() => { upcomingContainer.innerHTML = "<p>Unable to load shows right now.</p>"; });
}
document.addEventListener("DOMContentLoaded", initShowsPage);
