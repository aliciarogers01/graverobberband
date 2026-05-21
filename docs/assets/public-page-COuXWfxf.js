import{e as h,d as f,c as v,f as w,h as E}from"./puck-config-t2dfvijI.js";const k="graverobber";async function P(){var r,l,c,g,b;const e=document.getElementById("editable-page-root");if(!e)return;const i=document.createElement("style");i.textContent=h(),document.head.appendChild(i);const t=((l=(r=document.body)==null?void 0:r.dataset)==null?void 0:l.page)||"home",p=window.BAND_API_BASE||"https://band-admin-backend-production.up.railway.app/api";function d(s={}){const a={...E,...s||{}},n=w(a);document.documentElement.style.background=n,document.body.style.background=n,document.body.style.color=a.pageTextColor||"#f5f0e6",e.style.minHeight="100vh",e.style.background=n,e.style.color=a.pageTextColor||"#f5f0e6"}try{const s=await fetch(`${p}/visual-pages/${k}/${t}?_=${Date.now()}`);if(!s.ok)throw new Error(`Public page fetch failed: ${s.status}`);const a=await s.json(),n=(a==null?void 0:a.page)||a||{};let o=n.project_data;if(typeof o=="string")try{o=JSON.parse(o)}catch(y){console.warn("project_data was a string but could not be parsed",y,o)}if((c=o==null?void 0:o.content)!=null&&c.length){d((g=o.root)==null?void 0:g.props),e.innerHTML=f(o),m(e,t),window.dispatchEvent(new CustomEvent("visualPageRendered",{detail:{pageName:t}}));return}if(n.html&&n.html.trim()){e.innerHTML=n.html,m(e,t),window.dispatchEvent(new CustomEvent("visualPageRendered",{detail:{pageName:t}}));return}}catch(s){console.warn("Published page failed to load. Rendering default page.",s)}const u=v(t);d((b=u.root)==null?void 0:b.props),e.innerHTML=f(u),m(e,t),window.dispatchEvent(new CustomEvent("visualPageRendered",{detail:{pageName:t}}))}function m(e,i){if(i!=="contact"||!e)return;e.querySelectorAll(".graverobber-contact-form-section").forEach(c=>c.remove()),e.querySelectorAll(".puck-buttons").forEach(c=>{c.textContent.trim().toLowerCase()==="contact"&&c.remove()});const t="https://docs.google.com/forms/d/e/1FAIpQLSfvFy-I4z36zqLz4y4boVhM4eTL7KEb5Ip1It7OZyFfxlRgMw/formResponse",p="entry.111991046",d="entry.709491702",u="entry.905150677",r=document.createElement("section");r.className="puck-section graverobber-contact-form-section",r.innerHTML=`
    <div class="puck-inner">
      <form class="graverobber-custom-contact-form" action="${t}" method="POST" target="graverobber-contact-hidden-frame" onsubmit="this.reset(); this.querySelector('.graverobber-contact-success').textContent='Great, your message was sent and we will get back to you shortly.';">
        <label>
          What are you called?
          <input type="text" name="${p}" required>
        </label>

        <label>
          What is your email?
          <input type="email" name="${d}" required>
        </label>

        <label>
          What do you want?
          <textarea name="${u}" rows="7" required></textarea>
        </label>

        <button type="submit">Send Message</button>
        <p class="graverobber-contact-success" aria-live="polite"></p>
      </form>

      <iframe name="graverobber-contact-hidden-frame" style="display:none;"></iframe>
    </div>
  `;const l=e.querySelector("footer.social-section, .social-section");l?l.before(r):e.appendChild(r)}P();
