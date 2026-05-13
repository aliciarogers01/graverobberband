import{p as h,r as g,c as m}from"./puck-config-DVx9EZZi.js";const p="graverobber";async function b(){var i,s,d;const r=document.getElementById("editable-page-root");if(!r)return;const c=document.createElement("style");c.textContent=`
  html,
  body {
    margin: 0;
    min-height: 100%;
    background:
      radial-gradient(circle at center 18%, rgba(198,40,40,.18), transparent 34%),
      #030000;
    color: #f5f0e6;
  }

  #editable-page-root {
    min-height: 100vh;
    background:
      radial-gradient(circle at center 18%, rgba(198,40,40,.18), transparent 34%),
      #030000;
  }

  ${h()}
`,document.head.appendChild(c);const o=((s=(i=document.body)==null?void 0:i.dataset)==null?void 0:s.page)||"home",l=window.BAND_API_BASE||"https://band-admin-backend-production.up.railway.app/api";try{const t=await fetch(`${l}/visual-pages/${p}/${o}?_=${Date.now()}`);if(!t.ok)throw new Error(`Public page fetch failed: ${t.status}`);const n=await t.json();console.log("PUBLIC PAGE DEBUG",{siteSlug:p,pageName:o,apiBase:l,status:t.status,data:n});const a=(n==null?void 0:n.page)||n||{};let e=a.project_data;if(typeof e=="string")try{e=JSON.parse(e)}catch(u){console.warn("project_data was a string but could not be parsed",u,e)}if((d=e==null?void 0:e.content)!=null&&d.length){console.log("Rendering published project_data",e),r.innerHTML=g(e);return}if(a.html&&a.html.trim()){console.log("Rendering published html",a.html.slice(0,200)),r.innerHTML=a.html;return}console.warn("No published project_data or html found. Rendering fallback default.",a)}catch(t){console.warn("Published page failed to load. Rendering default page.",t)}r.innerHTML=g(m(o))}b();
