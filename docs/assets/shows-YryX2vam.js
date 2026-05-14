import"./puck-config-CBBuCUhD.js";/* empty css               */import"./public-page-sGTdzuXT.js";const p="graverobber",w=window.BAND_API_BASE||"https://band-admin-backend-production.up.railway.app/api";let a=!1;function h(e){if(!e)return"";const t=new Date(e);return Number.isNaN(t.getTime())?String(e).slice(0,10):t.toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric"})}function m(e){const t=[e.city,e.state].filter(Boolean).join(", ");return`
    <article class="show-card">
      ${e.image_url?`<img class="show-card-image" src="${e.image_url}" alt="${e.venue||"Show"}">`:""}
      <div class="show-card-content">
        <strong class="show-date">${h(e.show_date)}</strong>
        <h3>${e.venue||"Venue TBA"}</h3>
        ${t?`<p>${t}</p>`:""}
        ${e.notes?`<p>${e.notes}</p>`:""}
        ${e.ticket_url?`<a class="primary-btn" href="${e.ticket_url}" target="_blank" rel="noopener noreferrer" style="background:#bb00ff;border:1px solid #00ff04;box-shadow:0 0 24px #00ff04;color:#ffffff;">Tickets</a>`:""}
      </div>
    </article>
  `}async function g(){const e=document.getElementById("upcoming-shows"),t=document.getElementById("no-shows-message"),i=document.getElementById("past-shows"),c=document.querySelector(".past-shows-section");if(!(!e||a)){a=!0,e.innerHTML="<p>Loading shows...</p>";try{const l=await(await fetch(`${w}/shows/${p}?_=${Date.now()}`)).json(),u=Array.isArray(l.shows)?l.shows:[],n=new Date;n.setHours(0,0,0,0);const o=u.filter(r=>new Date(r.show_date)>=n),s=u.filter(r=>new Date(r.show_date)<n);e.innerHTML=o.length?o.map(m).join(""):"",t&&t.classList.toggle("hidden",o.length>0),i&&c&&(i.innerHTML=s.length?s.map(m).join(""):"",c.classList.toggle("hidden",s.length===0))}catch(d){console.error("Shows failed to render:",d),e.innerHTML="<p>Shows could not load right now.</p>"}}}function f(){a=!1;let e=0;const t=setInterval(()=>{e+=1,document.getElementById("upcoming-shows")&&(clearInterval(t),g()),e>40&&(clearInterval(t),console.warn("Shows embed was not found."))},250)}document.addEventListener("DOMContentLoaded",f);window.addEventListener("visualPageRendered",f);
