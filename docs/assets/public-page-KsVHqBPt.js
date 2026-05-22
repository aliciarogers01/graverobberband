import{e as h,d as f,c as v,f as w,h as E}from"./puck-config-COqCE935.js";const k="graverobber";async function S(){var r,i,m,l,a;const e=document.getElementById("editable-page-root");if(!e)return;const d=document.createElement("style");d.textContent=h(),document.head.appendChild(d);const o=((i=(r=document.body)==null?void 0:r.dataset)==null?void 0:i.page)||"home",b=window.BAND_API_BASE||"https://band-admin-backend-production.up.railway.app/api";function u(n={}){const t={...E,...n||{}},s=w(t);document.documentElement.style.background=s,document.body.style.background=s,document.body.style.color=t.pageTextColor||"#f5f0e6",e.style.minHeight="100vh",e.style.background=s,e.style.color=t.pageTextColor||"#f5f0e6"}try{const n=await fetch(`${b}/visual-pages/${k}/${o}?_=${Date.now()}`);if(!n.ok)throw new Error(`Public page fetch failed: ${n.status}`);const t=await n.json(),s=(t==null?void 0:t.page)||t||{};let c=s.project_data;if(typeof c=="string")try{c=JSON.parse(c)}catch(y){console.warn("project_data was a string but could not be parsed",y,c)}if((m=c==null?void 0:c.content)!=null&&m.length){u((l=c.root)==null?void 0:l.props),e.innerHTML=f(c),g(e,o),window.dispatchEvent(new CustomEvent("visualPageRendered",{detail:{pageName:o}}));return}if(s.html&&s.html.trim()){e.innerHTML=s.html,g(e,o),window.dispatchEvent(new CustomEvent("visualPageRendered",{detail:{pageName:o}}));return}}catch(n){console.warn("Published page failed to load. Rendering default page.",n)}const p=v(o);u((a=p.root)==null?void 0:a.props),e.innerHTML=f(p),g(e,o),window.dispatchEvent(new CustomEvent("visualPageRendered",{detail:{pageName:o}}))}function g(e,d){if(d!=="contact"||!e)return;e.querySelectorAll(".graverobber-contact-form-section").forEach(a=>a.remove()),e.querySelectorAll(".puck-buttons").forEach(a=>{a.textContent.trim().toLowerCase()==="contact"&&a.remove()}),e.querySelectorAll(".puck-section, section, .puck-inner, .puck-text").forEach(a=>{const n=a.textContent.trim();if(n==="Contact Grave Robber"||n.includes("Contact Grave Robber")){const t=a.closest(".puck-section, section");t&&!t.classList.contains("graverobber-contact-form-section")&&t.remove()}});const o="https://docs.google.com/forms/d/e/1FAIpQLSfvFy-I4z36zqLz4y4boVhM4eTL7KEb5Ip1It7OZyFfxlRgMw/formResponse",b="entry.111991046",u="entry.709491702",p="entry.905150677",r=document.createElement("section");r.className="puck-section graverobber-contact-form-section",r.innerHTML=`
    <div class="puck-inner graverobber-contact-inner">
      <form class="graverobber-custom-contact-form" action="${o}" method="POST" target="graverobber-contact-hidden-frame">
        <label>
          What are you called?
          <input type="text" name="${b}" required>
        </label>

        <label>
          What is your email?
          <input type="email" name="${u}" required>
        </label>

        <label>
          What do you want?
          <textarea name="${p}" rows="7" required></textarea>
        </label>

        <button type="submit">Send Message</button>
        <p class="graverobber-contact-success" aria-live="polite"></p>
      </form>

      <iframe name="graverobber-contact-hidden-frame" style="display:none;"></iframe>
    </div>
  `;const i=r.querySelector(".graverobber-custom-contact-form"),m=r.querySelector(".graverobber-contact-success");i.addEventListener("submit",()=>{window.setTimeout(()=>{i.reset(),m.textContent="Great, your message was sent and we will get back to you shortly."},350)});const l=e.querySelector(".puck-site-header");l?l.after(r):e.prepend(r)}S();
