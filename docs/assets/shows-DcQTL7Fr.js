import"./puck-config-CE47wLcS.js";import"./public-page-B-Vu9DrD.js";const S="graverobber",_=window.BAND_API_BASE||"https://band-admin-backend-production.up.railway.app/api";let u=!1;function g(e){if(!e)return"";const t=new Date(e);return Number.isNaN(t.getTime())?String(e).slice(0,10):t.toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric"})}function p(e){if(!e)return"";const[t,n]=String(e).split(":");if(!t||!n)return e;const s=new Date;return s.setHours(Number(t),Number(n),0,0),s.toLocaleTimeString(void 0,{hour:"numeric",minute:"2-digit"})}function $(e){const t=g(e.show_date),n=g(e.end_date);return n&&n!==t?`${t} – ${n}`:t}function i(e){const t=p(e.start_time),n=p(e.end_time);return t&&n?`${t} – ${n}`:t||n||""}function f(e,t){const n=[e.city,e.state].filter(Boolean).join(", "),s=e.notes||"",a=Array.isArray(e.social_urls)?e.social_urls:[];return`
    <article class="show-card" id="show-${t}">
      ${e.image_url?`<img class="show-card-image" src="${e.image_url}" alt="${e.venue||"Show"}">`:""}
      <div class="show-card-content">
        <strong class="show-date">${$(e)}</strong>
        ${i(e)?`<p class="show-time">${i(e)}</p>`:""}
        <h3>${e.venue||"Venue TBA"}</h3>
        ${n?`<p>${n}</p>`:""}
        ${s?`<p class="show-notes">${s}</p>`:""}

        ${a.length?`
          <div class="show-social-links">
            ${a.filter(o=>o.url).map(o=>`<a href="${o.url}" target="_blank" rel="noopener noreferrer">${o.label||"Link"}</a>`).join("")}
          </div>
        `:""}

        ${s.length>120?`<a class="show-more-link" href="#show-modal-${t}">Read More</a>`:""}
      </div>
    </article>

    <div id="show-modal-${t}" class="show-modal">
      <a href="#" class="show-modal-backdrop" aria-label="Close show details"></a>
      <div class="show-modal-content">
        <a href="#" class="show-modal-close" aria-label="Close show details">×</a>
        <h2>${e.venue||"Show Details"}</h2>
        <p><strong>${$(e)}</strong>${i(e)?` · ${i(e)}`:""}</p>
        ${n?`<p>${n}</p>`:""}
        ${e.image_url?`<img src="${e.image_url}" alt="${e.venue||"Show"}">`:""}
        ${s?`<p>${s}</p>`:""}

        ${a.length?`
          <div class="show-social-links">
            ${a.filter(o=>o.url).map(o=>`<a href="${o.url}" target="_blank" rel="noopener noreferrer">${o.label||"Link"}</a>`).join("")}
          </div>
        `:""}
      </div>
    </div>
  `}async function v(){const e=document.getElementById("upcoming-shows"),t=document.getElementById("no-shows-message"),n=document.getElementById("past-shows"),s=document.querySelector(".past-shows-section");if(!(!e||u)){u=!0,e.innerHTML="<p>Loading shows...</p>";try{const o=await(await fetch(`${_}/shows/${S}?_=${Date.now()}`)).json(),m=Array.isArray(o.shows)?o.shows:[],l=new Date;l.setHours(0,0,0,0);const h=r=>new Date(r.end_date||r.show_date),c=m.filter(r=>h(r)>=l),d=m.filter(r=>h(r)<l);e.innerHTML=c.length?c.map(f).join(""):"",t&&t.classList.toggle("hidden",c.length>0),n&&s&&(n.innerHTML=d.length?d.map(f).join(""):"",s.classList.toggle("hidden",d.length===0))}catch(a){console.error("Shows failed to render:",a),e.innerHTML="<p>Shows could not load right now.</p>"}}}function w(){u=!1;let e=0;const t=setInterval(()=>{e+=1,document.getElementById("upcoming-shows")&&(clearInterval(t),v()),e>40&&clearInterval(t)},250)}document.addEventListener("DOMContentLoaded",w);window.addEventListener("visualPageRendered",w);
