import{e as h,d as f,c as v,f as w,h as E}from"./puck-config-kFRZmOjr.js";const k="graverobber";async function S(){var r,i,p,l,n;const e=document.getElementById("editable-page-root");if(!e)return;const d=document.createElement("style");d.textContent=h(),document.head.appendChild(d);const o=((i=(r=document.body)==null?void 0:r.dataset)==null?void 0:i.page)||"home",b=window.BAND_API_BASE||"https://band-admin-backend-production.up.railway.app/api";function u(a={}){const t={...E,...a||{}},s=w(t);document.documentElement.style.background=s,document.body.style.background=s,document.body.style.color=t.pageTextColor||"#f5f0e6",e.style.minHeight="100vh",e.style.background=s,e.style.color=t.pageTextColor||"#f5f0e6"}try{const a=await fetch(`${b}/visual-pages/${k}/${o}?_=${Date.now()}`);if(!a.ok)throw new Error(`Public page fetch failed: ${a.status}`);const t=await a.json(),s=(t==null?void 0:t.page)||t||{};let c=s.project_data;if(typeof c=="string")try{c=JSON.parse(c)}catch(y){console.warn("project_data was a string but could not be parsed",y,c)}if((p=c==null?void 0:c.content)!=null&&p.length){u((l=c.root)==null?void 0:l.props),e.innerHTML=f(c),g(e,o),window.dispatchEvent(new CustomEvent("visualPageRendered",{detail:{pageName:o}}));return}if(s.html&&s.html.trim()){e.innerHTML=s.html,g(e,o),window.dispatchEvent(new CustomEvent("visualPageRendered",{detail:{pageName:o}}));return}}catch(a){console.warn("Published page failed to load. Rendering default page.",a)}const m=v(o);u((n=m.root)==null?void 0:n.props),e.innerHTML=f(m),g(e,o),window.dispatchEvent(new CustomEvent("visualPageRendered",{detail:{pageName:o}}))}function g(e,d){if(d!=="contact"||!e)return;document.documentElement.style.background="#000000",document.body.style.background="#000000",e.style.background="#000000",e.querySelectorAll(".graverobber-contact-form-section").forEach(n=>n.remove()),e.querySelectorAll(".puck-buttons").forEach(n=>{n.textContent.trim().toLowerCase()==="contact"&&n.remove()}),e.querySelectorAll(".puck-section, section, .puck-inner, .puck-text").forEach(n=>{const a=n.textContent.trim();if(a==="Contact Grave Robber"||a.includes("Contact Grave Robber")){const t=n.closest(".puck-section, section");t&&!t.classList.contains("graverobber-contact-form-section")&&t.remove()}});const o="https://docs.google.com/forms/d/e/1FAIpQLSfvFy-I4z36zqLz4y4boVhM4eTL7KEb5Ip1It7OZyFfxlRgMw/formResponse",b="entry.111991046",u="entry.709491702",m="entry.905150677",r=document.createElement("section");r.className="puck-section graverobber-contact-form-section",r.innerHTML=`
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
          <textarea name="${m}" rows="7" required></textarea>
        </label>

        <button type="submit">Send Message</button>
        <p class="graverobber-contact-success" aria-live="polite"></p>
      </form>

      <iframe name="graverobber-contact-hidden-frame" style="display:none;"></iframe>
    </div>
  `;const i=r.querySelector(".graverobber-custom-contact-form"),p=r.querySelector(".graverobber-contact-success");i.addEventListener("submit",()=>{window.setTimeout(()=>{i.reset(),p.textContent="Great, your message was sent and we will get back to you shortly."},350)});const l=e.querySelector(".puck-site-header");l?l.after(r):e.prepend(r)}S();
