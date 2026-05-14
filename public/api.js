const API_BASE = window.BAND_API_BASE;

function getShows() {
  return fetch(`${API_BASE}/shows/graverobber`).then(res => res.json());
}

function submitSignup(data) {
  return fetch(`${API_BASE}/submissions/graverobberpunk`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  }).then(res => res.json());
}

function sendMessage(data) {
  return fetch(`${API_BASE}/messages/graverobberpunk`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  }).then(res => res.json());
}