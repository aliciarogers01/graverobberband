import{e as y,d as h,f as v,h as E}from"./puck-config-ChzRgnPh.js";const w="graverobber";async function k(){var d,m,i,n;const e=document.getElementById("editable-page-root");if(!e)return;const u=document.createElement("style");u.textContent=y(),document.head.appendChild(u);const l=(m=(d=document.body)==null?void 0:d.dataset)==null?void 0:m.page,p=(()=>{const t=window.location.pathname.split("/").pop()||"index.html";return t==="index.html"||t===""?"home":t.replace(".html","")})(),a=l&&l!=="home"?l:p,g=window.BAND_API_BASE||"https://band-admin-backend-production.up.railway.app/api";function c(t={}){const o={...E,...t||{}},s=v(o);document.documentElement.style.background=s,document.body.style.background=s,document.body.style.color=o.pageTextColor||"#f5f0e6",e.style.minHeight="100vh",e.style.background=s,e.style.color=o.pageTextColor||"#f5f0e6"}try{const t=await fetch(`${g}/visual-pages/${w}/${a}?_=${Date.now()}`);if(!t.ok)throw new Error(`Public page fetch failed: ${t.status}`);const o=await t.json(),s=(o==null?void 0:o.page)||o||{};let r=s.project_data;if(typeof r=="string")try{r=JSON.parse(r)}catch(f){console.warn("project_data was a string but could not be parsed",f,r)}if((i=r==null?void 0:r.content)!=null&&i.length){c((n=r.root)==null?void 0:n.props),e.innerHTML=h(r),b(e,a),document.documentElement.classList.add("visual-page-ready"),window.dispatchEvent(new CustomEvent("visualPageRendered",{detail:{pageName:a}}));return}if(s.html&&s.html.trim()){e.innerHTML=s.html,b(e,a),document.documentElement.classList.add("visual-page-ready"),window.dispatchEvent(new CustomEvent("visualPageRendered",{detail:{pageName:a}}));return}}catch(t){console.warn("Published page failed to load. Rendering default page.",t)}document.documentElement.style.background="#000000",document.body.style.background="#000000",document.body.style.color="#ffffff",e.style.minHeight="100vh",e.style.background="#000000",e.style.color="#ffffff",e.innerHTML="",b(e,a),document.documentElement.classList.add("visual-page-ready"),window.dispatchEvent(new CustomEvent("visualPageRendered",{detail:{pageName:a}}))}function b(e,u){if(u!=="contact"||!e)return;document.documentElement.style.background="#000000",document.body.style.background="#000000",e.style.background="#000000",e.querySelectorAll(".graverobber-contact-form-section").forEach(n=>n.remove()),e.querySelectorAll(".puck-buttons").forEach(n=>{n.textContent.trim().toLowerCase()==="contact"&&n.remove()}),e.querySelectorAll(".puck-section, section, .puck-inner, .puck-text").forEach(n=>{const t=n.textContent.trim();if(t==="Contact Grave Robber"||t.includes("Contact Grave Robber")){const o=n.closest(".puck-section, section");o&&!o.classList.contains("graverobber-contact-form-section")&&o.remove()}});const l="https://docs.google.com/forms/d/e/1FAIpQLSfvFy-I4z36zqLz4y4boVhM4eTL7KEb5Ip1It7OZyFfxlRgMw/formResponse",p="entry.111991046",a="entry.709491702",g="entry.905150677",c=document.createElement("section");c.className="puck-section graverobber-contact-form-section",c.innerHTML=`
    <div class="puck-inner graverobber-contact-inner">
      <form class="graverobber-custom-contact-form" action="${l}" method="POST" target="graverobber-contact-hidden-frame">
        <label>
          What are you called?
          <input type="text" name="${p}" required>
        </label>

        <label>
          What is your email?
          <input type="email" name="${a}" required>
        </label>

        <label>
          What do you want?
          <textarea name="${g}" rows="7" required></textarea>
        </label>

        <button type="submit">Send Message</button>
        <p class="graverobber-contact-success" aria-live="polite"></p>
      </form>

      <iframe name="graverobber-contact-hidden-frame" style="display:none;"></iframe>
    </div>
  `;const d=c.querySelector(".graverobber-custom-contact-form"),m=c.querySelector(".graverobber-contact-success");d.addEventListener("submit",()=>{window.setTimeout(()=>{d.reset(),m.textContent="Great, your message was sent and we will get back to you shortly."},350)});const i=e.querySelector(".puck-site-header");i?i.after(c):e.prepend(c)}k();
