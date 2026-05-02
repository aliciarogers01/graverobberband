// Shows data - add upcoming and past shows here.
const shows = [
  {
    date: "2026-10-31",
    venue: "The Crypt",
    city: "Fort Wayne",
    state: "IN",
    time: "9:00 PM",
    ticketUrl: "#",
    details: "Halloween launch show — replace this placeholder with the real event."
  }
];

function formatDate(dateString) {
  const date = new Date(dateString + 'T00:00:00');
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

function isPastShow(dateString) {
  const showDate = new Date(dateString + 'T23:59:59');
  const today = new Date();
  return showDate < today;
}

function generateShowHTML(show) {
  const ticketButton = show.ticketUrl && show.ticketUrl !== '#'
    ? `<a href="${show.ticketUrl}" target="_blank" rel="noopener noreferrer" class="show-ticket">Tickets</a>`
    : `<span class="show-ticket disabled">Details Soon</span>`;

  return `
    <article class="show-card">
      <div class="show-date">
        <span class="show-month">${new Date(show.date + 'T00:00:00').toLocaleDateString('en-US', { month: 'short' })}</span>
        <span class="show-day">${new Date(show.date + 'T00:00:00').getDate()}</span>
      </div>
      <div class="show-info">
        <h2>${show.venue}</h2>
        <p class="show-location">${show.city}, ${show.state}</p>
        <p class="show-full-date">${formatDate(show.date)}${show.time ? ` • ${show.time}` : ''}</p>
        ${show.details ? `<p class="show-details">${show.details}</p>` : ''}
      </div>
      <div class="show-action">${ticketButton}</div>
    </article>
  `;
}

function initShowsPage() {
  const upcomingContainer = document.querySelector('#upcoming-shows');
  const pastContainer = document.querySelector('#past-shows');
  if (!upcomingContainer) return;

  const sortedShows = [...shows].sort((a, b) => new Date(a.date) - new Date(b.date));
  const upcomingShows = sortedShows.filter(show => !isPastShow(show.date));
  const pastShows = sortedShows.filter(show => isPastShow(show.date)).reverse();

  upcomingContainer.innerHTML = upcomingShows.length
    ? upcomingShows.map(generateShowHTML).join('')
    : `<div class="empty-state"><h2>Shows Rising Soon</h2><p>The fog is rolling in. Check back for the next Grave Robber Punk show.</p></div>`;

  if (pastContainer && pastShows.length) {
    pastContainer.innerHTML = pastShows.map(generateShowHTML).join('');
    document.querySelector('.past-shows-section')?.classList.remove('hidden');
  }
}

document.addEventListener('DOMContentLoaded', initShowsPage);
