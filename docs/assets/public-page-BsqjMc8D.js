import{e as y,d as h,f as v,h as w}from"./puck-config-ChzRgnPh.js";const E="graverobber";async function k(){var i,m,d,n;const e=document.getElementById("editable-page-root");if(!e)return;const u=document.createElement("style");u.textContent=y(),document.head.appendChild(u);const l=(m=(i=document.body)==null?void 0:i.dataset)==null?void 0:m.page,p=(()=>{const t=window.location.pathname.split("/").pop()||"index.html";return t==="index.html"||t===""?"home":t.replace(".html","")})(),r=l&&l!=="home"?l:p,b=window.BAND_API_BASE||"https://band-admin-backend-production.up.railway.app/api";function c(t={}){const o={...w,...t||{}},s=v(o);document.documentElement.style.background=s,document.body.style.background=s,document.body.style.color=o.pageTextColor||"#f5f0e6",e.style.minHeight="100vh",e.style.background=s,e.style.color=o.pageTextColor||"#f5f0e6"}try{const t=await fetch(`${b}/visual-pages/${E}/${r}?_=${Date.now()}`);if(!t.ok)throw new Error(`Public page fetch failed: ${t.status}`);const o=await t.json(),s=(o==null?void 0:o.page)||o||{};let a=s.project_data;if(typeof a=="string")try{a=JSON.parse(a)}catch(g){console.warn("project_data was a string but could not be parsed",g,a)}if((d=a==null?void 0:a.content)!=null&&d.length){c((n=a.root)==null?void 0:n.props),e.innerHTML=h(a),f(e,r),window.dispatchEvent(new CustomEvent("visualPageRendered",{detail:{pageName:r}}));return}if(s.html&&s.html.trim()){e.innerHTML=s.html,f(e,r),window.dispatchEvent(new CustomEvent("visualPageRendered",{detail:{pageName:r}}));return}}catch(t){console.warn("Published page failed to load. Rendering default page.",t)}document.documentElement.style.background="#000000",document.body.style.background="#000000",document.body.style.color="#ffffff",e.style.minHeight="100vh",e.style.background="#000000",e.style.color="#ffffff",e.innerHTML="",f(e,r),window.dispatchEvent(new CustomEvent("visualPageRendered",{detail:{pageName:r}}))}function f(e,u){if(u!=="contact"||!e)return;document.documentElement.style.background="#000000",document.body.style.background="#000000",e.style.background="#000000",e.querySelectorAll(".graverobber-contact-form-section").forEach(n=>n.remove()),e.querySelectorAll(".puck-buttons").forEach(n=>{n.textContent.trim().toLowerCase()==="contact"&&n.remove()}),e.querySelectorAll(".puck-section, section, .puck-inner, .puck-text").forEach(n=>{const t=n.textContent.trim();if(t==="Contact Grave Robber"||t.includes("Contact Grave Robber")){const o=n.closest(".puck-section, section");o&&!o.classList.contains("graverobber-contact-form-section")&&o.remove()}});const l="https://docs.google.com/forms/d/e/1FAIpQLSfvFy-I4z36zqLz4y4boVhM4eTL7KEb5Ip1It7OZyFfxlRgMw/formResponse",p="entry.111991046",r="entry.709491702",b="entry.905150677",c=document.createElement("section");c.className="puck-section graverobber-contact-form-section",c.innerHTML=`
    <div class="puck-inner graverobber-contact-inner">
      <form class="graverobber-custom-contact-form" action="${l}" method="POST" target="graverobber-contact-hidden-frame">
        <label>
          What are you called?
          <input type="text" name="${p}" required>
        </label>

        <label>
          What is your email?
          <input type="email" name="${r}" required>
        </label>

        <label>
          What do you want?
          <textarea name="${b}" rows="7" required></textarea>
        </label>

        <button type="submit">Send Message</button>
        <p class="graverobber-contact-success" aria-live="polite"></p>
      </form>

      <iframe name="graverobber-contact-hidden-frame" style="display:none;"></iframe>
    </div>
  `;const i=c.querySelector(".graverobber-custom-contact-form"),m=c.querySelector(".graverobber-contact-success");i.addEventListener("submit",()=>{window.setTimeout(()=>{i.reset(),m.textContent="Great, your message was sent and we will get back to you shortly."},350)});const d=e.querySelector(".puck-site-header");d?d.after(c):e.prepend(c)}k();
