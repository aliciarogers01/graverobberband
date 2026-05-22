import{e as w,d as h,c as E,f as k,h as S}from"./puck-config-ChzRgnPh.js";const C="graverobber";async function P(){var b,u,n,m,i;const e=document.getElementById("editable-page-root");if(!e)return;const p=document.createElement("style");p.textContent=w(),document.head.appendChild(p);const l=(u=(b=document.body)==null?void 0:b.dataset)==null?void 0:u.page,g=(()=>{const t=window.location.pathname.split("/").pop()||"index.html";return t==="index.html"||t===""?"home":t.replace(".html","")})(),o=l&&l!=="home"?l:g,f=window.BAND_API_BASE||"https://band-admin-backend-production.up.railway.app/api";function a(t={}){const c={...S,...t||{}},s=k(c);document.documentElement.style.background=s,document.body.style.background=s,document.body.style.color=c.pageTextColor||"#f5f0e6",e.style.minHeight="100vh",e.style.background=s,e.style.color=c.pageTextColor||"#f5f0e6"}try{const t=await fetch(`${f}/visual-pages/${C}/${o}?_=${Date.now()}`);if(!t.ok)throw new Error(`Public page fetch failed: ${t.status}`);const c=await t.json(),s=(c==null?void 0:c.page)||c||{};let r=s.project_data;if(typeof r=="string")try{r=JSON.parse(r)}catch(v){console.warn("project_data was a string but could not be parsed",v,r)}if((n=r==null?void 0:r.content)!=null&&n.length){a((m=r.root)==null?void 0:m.props),e.innerHTML=h(r),y(e,o),window.dispatchEvent(new CustomEvent("visualPageRendered",{detail:{pageName:o}}));return}if(s.html&&s.html.trim()){e.innerHTML=s.html,y(e,o),window.dispatchEvent(new CustomEvent("visualPageRendered",{detail:{pageName:o}}));return}}catch(t){console.warn("Published page failed to load. Rendering default page.",t)}const d=E(o);a((i=d.root)==null?void 0:i.props),e.innerHTML=h(d),y(e,o),window.dispatchEvent(new CustomEvent("visualPageRendered",{detail:{pageName:o}}))}function y(e,p){if(p!=="contact"||!e)return;document.documentElement.style.background="#000000",document.body.style.background="#000000",e.style.background="#000000",e.querySelectorAll(".graverobber-contact-form-section").forEach(n=>n.remove()),e.querySelectorAll(".puck-buttons").forEach(n=>{n.textContent.trim().toLowerCase()==="contact"&&n.remove()}),e.querySelectorAll(".puck-section, section, .puck-inner, .puck-text").forEach(n=>{const m=n.textContent.trim();if(m==="Contact Grave Robber"||m.includes("Contact Grave Robber")){const i=n.closest(".puck-section, section");i&&!i.classList.contains("graverobber-contact-form-section")&&i.remove()}});const l="https://docs.google.com/forms/d/e/1FAIpQLSfvFy-I4z36zqLz4y4boVhM4eTL7KEb5Ip1It7OZyFfxlRgMw/formResponse",g="entry.111991046",o="entry.709491702",f="entry.905150677",a=document.createElement("section");a.className="puck-section graverobber-contact-form-section",a.innerHTML=`
    <div class="puck-inner graverobber-contact-inner">
      <form class="graverobber-custom-contact-form" action="${l}" method="POST" target="graverobber-contact-hidden-frame">
        <label>
          What are you called?
          <input type="text" name="${g}" required>
        </label>

        <label>
          What is your email?
          <input type="email" name="${o}" required>
        </label>

        <label>
          What do you want?
          <textarea name="${f}" rows="7" required></textarea>
        </label>

        <button type="submit">Send Message</button>
        <p class="graverobber-contact-success" aria-live="polite"></p>
      </form>

      <iframe name="graverobber-contact-hidden-frame" style="display:none;"></iframe>
    </div>
  `;const d=a.querySelector(".graverobber-custom-contact-form"),b=a.querySelector(".graverobber-contact-success");d.addEventListener("submit",()=>{window.setTimeout(()=>{d.reset(),b.textContent="Great, your message was sent and we will get back to you shortly."},350)});const u=e.querySelector(".puck-site-header");u?u.after(a):e.prepend(a)}P();
