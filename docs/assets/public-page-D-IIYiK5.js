import{e as m,d as p,c as g,f as h,h as f}from"./puck-config-CUazk0jc.js";const w="graverobber";function y(){var t,i;const e=(i=(t=document.body)==null?void 0:t.dataset)==null?void 0:i.page,n=(()=>{const r=window.location.pathname.split("/").pop()||"index.html";return r==="index.html"||r===""?"home":r.replace(".html","")})();return e&&e!=="home"?e:n}function b(e){if(typeof e!="string")return e;try{return JSON.parse(e)}catch(n){return console.warn("project_data was a string but could not be parsed",n,e),null}}function v(e,n){return!(e!=null&&e.content)||!Array.isArray(e.content)||!e.content.length?!1:n==="contact"?e.content.some(t=>(t==null?void 0:t.type)==="ContactForm"):!0}async function P(){var l,u;const e=document.getElementById("editable-page-root");if(!e)return;const n=document.createElement("style");n.textContent=m(),document.head.appendChild(n);const t=y(),i=window.BAND_API_BASE||"https://band-admin-backend-production.up.railway.app/api";function r(a={}){const o={...f,...a||{}},s=h(o);document.documentElement.style.background=s,document.body.style.background=s,document.body.style.color=o.pageTextColor||"#f5f0e6",e.style.minHeight="100vh",e.style.background=s,e.style.color=o.pageTextColor||"#f5f0e6"}try{const a=await fetch(`${i}/visual-pages/${w}/${t}?_=${Date.now()}`);if(!a.ok)throw new Error(`Public page fetch failed: ${a.status}`);const o=await a.json(),s=(o==null?void 0:o.page)||o||{},c=b(s.project_data);if(v(c,t)){r((l=c.root)==null?void 0:l.props),e.innerHTML=p(c),t==="shows"&&!document.getElementById("upcoming-shows")&&e.insertAdjacentHTML("beforeend",`
          <section class="puck-section" style="padding:20px 24px;">
            <div id="upcoming-shows"></div>
            <div id="no-shows-message" class="empty-state">
              <h2>Shows Coming Soon</h2>
              <p>Join the crypt list to hear when the next haunt is announced.</p>
              <a href="signup.html" class="primary-btn">Get Notified</a>
            </div>
            <section class="past-shows-section hidden">
              <h2>Past Shows</h2>
              <div id="past-shows"></div>
            </section>
          </section>
        `),document.documentElement.classList.add("visual-page-ready"),window.dispatchEvent(new CustomEvent("visualPageRendered",{detail:{pageName:t}}));return}s.html&&s.html.trim()&&console.warn("Ignoring saved page.html because it can contain old raw fallback HTML.")}catch(a){console.warn("Published page failed to load. Rendering default page.",a)}const d=g(t);r((u=d.root)==null?void 0:u.props),e.innerHTML=p(d),document.documentElement.classList.add("visual-page-ready"),window.dispatchEvent(new CustomEvent("visualPageRendered",{detail:{pageName:t}}))}P();
