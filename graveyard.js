// Marquee text - change this list to fit the band's covers, influences, or slogans.
const graveyardItems = [
  "GRAVEYARD PUNK",
  "MIDNIGHT FEEDBACK",
  "BONE-RATTLE RIFFS",
  "CRYPT KICK DRUMS",
  "FOG MACHINE HEART",
  "RUSTED STRINGS",
  "NO SLEEP TILL THE TOMBSTONE",
  "CEMETERY CHORUS",
  "BLACKLIGHT FUNERAL",
  "PUNK FROM THE PIT",
  "HOWL LOUDER",
  "WAKE THE DEAD"
];

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function initGraveyardMarquee() {
  const container = document.querySelector('.graveyard-scroll');
  if (!container) return;
  const items = shuffleArray(graveyardItems);
  container.innerHTML = [...items, ...items]
    .map(item => `<span class="graveyard-item">${item}</span>`)
    .join('');
}

document.addEventListener('DOMContentLoaded', initGraveyardMarquee);
