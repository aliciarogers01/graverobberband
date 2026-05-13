function ge(e,t){for(var o=0;o<t.length;o++){const l=t[o];if(typeof l!="string"&&!Array.isArray(l)){for(const r in l)if(r!=="default"&&!(r in e)){const n=Object.getOwnPropertyDescriptor(l,r);n&&Object.defineProperty(e,r,n.get?n:{enumerable:!0,get:()=>l[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function o(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(r){if(r.ep)return;r.ep=!0;const n=o(r);fetch(r.href,n)}})();function me(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var re={exports:{}},A={},ae={exports:{}},s={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W=Symbol.for("react.element"),he=Symbol.for("react.portal"),xe=Symbol.for("react.fragment"),ye=Symbol.for("react.strict_mode"),ke=Symbol.for("react.profiler"),Ce=Symbol.for("react.provider"),ve=Symbol.for("react.context"),we=Symbol.for("react.forward_ref"),Se=Symbol.for("react.suspense"),$e=Symbol.for("react.memo"),Fe=Symbol.for("react.lazy"),q=Symbol.iterator;function Be(e){return e===null||typeof e!="object"?null:(e=q&&e[q]||e["@@iterator"],typeof e=="function"?e:null)}var le={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ne=Object.assign,ie={};function v(e,t,o){this.props=e,this.context=t,this.refs=ie,this.updater=o||le}v.prototype.isReactComponent={};v.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function se(){}se.prototype=v.prototype;function M(e,t,o){this.props=e,this.context=t,this.refs=ie,this.updater=o||le}var G=M.prototype=new se;G.constructor=M;ne(G,v.prototype);G.isPureReactComponent=!0;var K=Array.isArray,de=Object.prototype.hasOwnProperty,D={current:null},ce={key:!0,ref:!0,__self:!0,__source:!0};function ue(e,t,o){var l,r={},n=null,i=null;if(t!=null)for(l in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(n=""+t.key),t)de.call(t,l)&&!ce.hasOwnProperty(l)&&(r[l]=t[l]);var c=arguments.length-2;if(c===1)r.children=o;else if(1<c){for(var u=Array(c),g=0;g<c;g++)u[g]=arguments[g+2];r.children=u}if(e&&e.defaultProps)for(l in c=e.defaultProps,c)r[l]===void 0&&(r[l]=c[l]);return{$$typeof:W,type:e,key:n,ref:i,props:r,_owner:D.current}}function Te(e,t){return{$$typeof:W,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function X(e){return typeof e=="object"&&e!==null&&e.$$typeof===W}function je(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(o){return t[o]})}var Q=/\/+/g;function E(e,t){return typeof e=="object"&&e!==null&&e.key!=null?je(""+e.key):t.toString(36)}function I(e,t,o,l,r){var n=typeof e;(n==="undefined"||n==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(n){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case W:case he:i=!0}}if(i)return i=e,r=r(i),e=l===""?"."+E(i,0):l,K(r)?(o="",e!=null&&(o=e.replace(Q,"$&/")+"/"),I(r,t,o,"",function(g){return g})):r!=null&&(X(r)&&(r=Te(r,o+(!r.key||i&&i.key===r.key?"":(""+r.key).replace(Q,"$&/")+"/")+e)),t.push(r)),1;if(i=0,l=l===""?".":l+":",K(e))for(var c=0;c<e.length;c++){n=e[c];var u=l+E(n,c);i+=I(n,t,o,u,r)}else if(u=Be(e),typeof u=="function")for(e=u.call(e),c=0;!(n=e.next()).done;)n=n.value,u=l+E(n,c++),i+=I(n,t,o,u,r);else if(n==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function P(e,t,o){if(e==null)return e;var l=[],r=0;return I(e,l,"","",function(n){return t.call(o,n,r++)}),l}function ze(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(o){(e._status===0||e._status===-1)&&(e._status=1,e._result=o)},function(o){(e._status===0||e._status===-1)&&(e._status=2,e._result=o)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var f={current:null},N={transition:null},We={ReactCurrentDispatcher:f,ReactCurrentBatchConfig:N,ReactCurrentOwner:D};s.Children={map:P,forEach:function(e,t,o){P(e,function(){t.apply(this,arguments)},o)},count:function(e){var t=0;return P(e,function(){t++}),t},toArray:function(e){return P(e,function(t){return t})||[]},only:function(e){if(!X(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};s.Component=v;s.Fragment=xe;s.Profiler=ke;s.PureComponent=M;s.StrictMode=ye;s.Suspense=Se;s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=We;s.cloneElement=function(e,t,o){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var l=ne({},e.props),r=e.key,n=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(n=t.ref,i=D.current),t.key!==void 0&&(r=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(u in t)de.call(t,u)&&!ce.hasOwnProperty(u)&&(l[u]=t[u]===void 0&&c!==void 0?c[u]:t[u])}var u=arguments.length-2;if(u===1)l.children=o;else if(1<u){c=Array(u);for(var g=0;g<u;g++)c[g]=arguments[g+2];l.children=c}return{$$typeof:W,type:e.type,key:r,ref:n,props:l,_owner:i}};s.createContext=function(e){return e={$$typeof:ve,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ce,_context:e},e.Consumer=e};s.createElement=ue;s.createFactory=function(e){var t=ue.bind(null,e);return t.type=e,t};s.createRef=function(){return{current:null}};s.forwardRef=function(e){return{$$typeof:we,render:e}};s.isValidElement=X;s.lazy=function(e){return{$$typeof:Fe,_payload:{_status:-1,_result:e},_init:ze}};s.memo=function(e,t){return{$$typeof:$e,type:e,compare:t===void 0?null:t}};s.startTransition=function(e){var t=N.transition;N.transition={};try{e()}finally{N.transition=t}};s.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};s.useCallback=function(e,t){return f.current.useCallback(e,t)};s.useContext=function(e){return f.current.useContext(e)};s.useDebugValue=function(){};s.useDeferredValue=function(e){return f.current.useDeferredValue(e)};s.useEffect=function(e,t){return f.current.useEffect(e,t)};s.useId=function(){return f.current.useId()};s.useImperativeHandle=function(e,t,o){return f.current.useImperativeHandle(e,t,o)};s.useInsertionEffect=function(e,t){return f.current.useInsertionEffect(e,t)};s.useLayoutEffect=function(e,t){return f.current.useLayoutEffect(e,t)};s.useMemo=function(e,t){return f.current.useMemo(e,t)};s.useReducer=function(e,t,o){return f.current.useReducer(e,t,o)};s.useRef=function(e){return f.current.useRef(e)};s.useState=function(e){return f.current.useState(e)};s.useSyncExternalStore=function(e,t,o){return f.current.useSyncExternalStore(e,t,o)};s.useTransition=function(){return f.current.useTransition()};s.version="18.2.0";ae.exports=s;var Y=ae.exports;const pe=me(Y),st=ge({__proto__:null,default:pe},[Y]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Re=Y,Pe=Symbol.for("react.element"),Ue=Symbol.for("react.fragment"),Le=Object.prototype.hasOwnProperty,Ie=Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ne={key:!0,ref:!0,__self:!0,__source:!0};function be(e,t,o){var l,r={},n=null,i=null;o!==void 0&&(n=""+o),t.key!==void 0&&(n=""+t.key),t.ref!==void 0&&(i=t.ref);for(l in t)Le.call(t,l)&&!Ne.hasOwnProperty(l)&&(r[l]=t[l]);if(e&&e.defaultProps)for(l in t=e.defaultProps,t)r[l]===void 0&&(r[l]=t[l]);return{$$typeof:Pe,type:e,key:n,ref:i,props:r,_owner:Ie.current}}A.Fragment=Ue;A.jsx=be;A.jsxs=be;re.exports=A;var a=re.exports;function h(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function p(e){return h(e).trim()}function m(e){return String(e??"").trim().length>0}function V(e){return h(e).replaceAll(`
`,"<br>")}function b(e={}){return Object.entries(e).filter(([,t])=>t!=null&&t!=="").map(([t,o])=>`${t.replace(/[A-Z]/g,l=>`-${l.toLowerCase()}`)}:${o}`).join(";")}function k(e={},t=""){return{fontSize:e[`${t}Size`]||"inherit",color:e[`${t}Color`]||"inherit",fontFamily:e[`${t}Font`]||"inherit",fontWeight:e[`${t}Weight`]||"inherit",fontStyle:e[`${t}Style`]||"inherit",textDecoration:e[`${t}Decoration`]||"none",textTransform:e[`${t}Transform`]||"none",letterSpacing:e[`${t}LetterSpacing`]||"normal",lineHeight:e[`${t}LineHeight`]||"normal",textShadow:e[`${t}Shadow`]||"none"}}function w(e){return m(e)?`<style>@import url('${p(e)}');</style>`:""}function Ae(e="custom"){return String(e||"custom").toLowerCase().trim()}function Oe(e,t=""){const o=Ae(e),l={facebook:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.019 4.388 10.994 10.125 11.854v-8.385H7.078v-3.469h3.047V9.431c0-3.007 1.791-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.249h3.328l-.532 3.469h-2.796v8.385C19.612 23.067 24 18.092 24 12.073z"/></svg>',instagram:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm11.5 1a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z"/></svg>',tiktok:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.589 6.686a4.793 4.793 0 01-3.77-4.187V2h-3.358v13.743a2.89 2.89 0 11-2.89-2.89c.213 0 .421.023.622.067V9.51a6.248 6.248 0 00-.622-.033A6.248 6.248 0 1015.82 15.72V8.687a8.154 8.154 0 004.77 1.539V6.686z"/></svg>',youtube:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 00.5 6.2 31.5 31.5 0 000 12a31.5 31.5 0 00.5 5.8 3 3 0 002.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 002.1-2.1A31.5 31.5 0 0024 12a31.5 31.5 0 00-.5-5.8zM9.6 15.6V8.4L15.8 12l-6.2 3.6z"/></svg>',spotify:'<span class="puck-social-letter">S</span>',bandcamp:'<span class="puck-social-letter">B</span>',soundcloud:'<span class="puck-social-letter">SC</span>',apple:'<span class="puck-social-letter"></span>',x:'<span class="puck-social-letter">X</span>',twitter:'<span class="puck-social-letter">𝕏</span>',threads:'<span class="puck-social-letter">@</span>',bluesky:'<span class="puck-social-letter">BS</span>',linkedin:'<span class="puck-social-letter">in</span>',snapchat:'<span class="puck-social-letter">👻</span>',pinterest:'<span class="puck-social-letter">P</span>',twitch:'<span class="puck-social-letter">T</span>',discord:'<span class="puck-social-letter">D</span>',reddit:'<span class="puck-social-letter">R</span>',patreon:'<span class="puck-social-letter">P</span>',venmo:'<span class="puck-social-letter">V</span>',cashapp:'<span class="puck-social-letter">$</span>',email:'<span class="puck-social-letter">✉</span>',website:'<span class="puck-social-letter">⌂</span>',custom:`<span class="puck-social-letter">${h((t||"Link").slice(0,2).toUpperCase())}</span>`};return l[o]||l.custom}function R(e={}){if(!m(e.text))return"";const t=e.borderWidth||"0px",o=e.borderColor||"transparent",l=b({background:e.backgroundColor||"transparent",color:e.textColor||"inherit",fontFamily:e.fontFamily||"inherit",fontSize:e.fontSize||"inherit",fontWeight:e.fontWeight||"inherit",border:`${t} solid ${o}`,boxShadow:e.boxShadow||"none",textTransform:e.textTransform||"uppercase",borderRadius:e.radius||"0px",padding:e.padding||"14px 24px",textDecoration:"none",display:"inline-flex",alignItems:"center",justifyContent:"center"});return`<a class="puck-btn" href="${p(e.url||"#")}" style="${l}">${h(e.text)}</a>`}function _e(){return`
#editable-page-root .puck-btn,
#editable-page-root .puck-btn:hover,
#editable-page-root .puck-btn:focus{
  border-style:solid!important;
}
#editable-page-root .puck-section{width:100%;box-sizing:border-box;}
#editable-page-root .puck-inner{max-width:var(--max-width,1100px);margin:0 auto;box-sizing:border-box;}
#editable-page-root .puck-flex{display:flex;gap:var(--gap,40px);align-items:center;justify-content:center;}
#editable-page-root .layout-center{flex-direction:column;text-align:center;}
#editable-page-root .layout-text-left{flex-direction:row;text-align:left;}
#editable-page-root .layout-text-right{flex-direction:row-reverse;text-align:left;}
#editable-page-root .layout-image-top{flex-direction:column-reverse;text-align:center;}
#editable-page-root .puck-text{max-width:700px;}
#editable-page-root .puck-title{font-family:'Playfair Display',serif;margin:0 0 14px;line-height:1.05;}
#editable-page-root .puck-subtitle{margin:0 0 14px;color:var(--amber);font-style:italic;}
#editable-page-root .puck-body{line-height:1.65;margin:0 0 20px;}
#editable-page-root .puck-image{display:block;max-width:100%;height:auto;object-fit:cover;}
#editable-page-root .puck-buttons{display:flex;gap:14px;flex-wrap:wrap;margin-top:22px;justify-content:center;}
#editable-page-root .puck-buttons .primary-btn:hover,#editable-page-root .puck-buttons .secondary-btn:hover{box-shadow:inherit;}
#editable-page-root .layout-text-left .puck-buttons,#editable-page-root .layout-text-right .puck-buttons{justify-content:flex-start;}
#editable-page-root .puck-social-links{display:flex;gap:20px;justify-content:center;align-items:center;flex-wrap:wrap;}
#editable-page-root .puck-social-letter{font-weight:900;font-size:16px;letter-spacing:.02em;}
#editable-page-root .puck-columns{display:grid;grid-template-columns:repeat(var(--cols,2),1fr);gap:var(--gap,24px);}
#editable-page-root .puck-card{padding:24px;border:1px solid rgba(255,255,255,.12);border-radius:12px;background:rgba(255,255,255,.03);}
#editable-page-root{
  width:100%!important;
  max-width:100%!important;
  overflow-x:visible!important;
}

#editable-page-root .puck-spacer{width:100%;}

#editable-page-root hr,
#editable-page-root .section-divider,
#editable-page-root .divider{
  display:none!important;
}

#editable-page-root .puck-site-header{
  display:grid;
  grid-template-columns:minmax(0,1fr) auto minmax(0,1fr);
  align-items:center;
  gap:20px;
  box-sizing:border-box;
  position:relative;
}

#editable-page-root .puck-site-header,
#editable-page-root .puck-site-header.is-full-width,
#editable-page-root .puck-song-scroll,
#editable-page-root .puck-song-scroll.is-full-width,
#editable-page-root .social-section,
#editable-page-root .social-section.is-full-width{
  width:100%!important;
  max-width:100%!important;
  margin-left:0!important;
  margin-right:0!important;
  left:auto!important;
  right:auto!important;
  transform:none!important;
}

#editable-page-root .puck-header-left,
#editable-page-root .puck-header-right{
  display:flex;
  align-items:center;
  gap:14px;
  min-width:0;
}

#editable-page-root .puck-header-left{
  justify-content:flex-start;
}

#editable-page-root .puck-header-right{
  justify-content:flex-end;
}

#editable-page-root .puck-header-nav{
  display:flex;
  align-items:center;
  gap:12px;
  flex-wrap:wrap;
}

#editable-page-root .puck-header-nav.nav-left{
  grid-column:1;
  justify-self:start;
}

#editable-page-root .puck-header-nav.nav-center{
  grid-column:2;
  justify-self:center;
}

#editable-page-root .puck-header-nav.nav-right{
  grid-column:2;
  justify-self:center;
}

#editable-page-root .puck-header-back{
  color:var(--cream,#f5f0e6);
  text-decoration:none;
  font-weight:700;
}

#editable-page-root .puck-song-scroll{
  width:100%;
  position:relative;
  overflow:hidden;
  box-sizing:border-box;
  padding:14px 0;
}

#editable-page-root .songs-scroll-container{
  width:100%;
  overflow:hidden;
  position:relative;
}

#editable-page-root .songs-scroll-container::before,
#editable-page-root .songs-scroll-container::after{
  content:'';
  position:absolute;
  top:0;
  width:100px;
  height:100%;
  z-index:10;
  pointer-events:none;
}

#editable-page-root .songs-scroll-container::before{
  left:0;
  background:linear-gradient(to right,var(--blue-deep) 0%,transparent 100%);
}

#editable-page-root .songs-scroll-container::after{
  right:0;
  background:linear-gradient(to left,var(--blue-deep) 0%,transparent 100%);
}

#editable-page-root .puck-song-track{
  display:flex;
  align-items:center;
  white-space:nowrap;
  animation:scrollSongs 50s linear infinite;
  width:max-content;
  will-change:transform;
}

#editable-page-root .puck-song-track span{
  font-size:.9rem;
  font-weight:400;
  color:var(--cream);
  letter-spacing:.03em;
  padding:8px 20px;
  margin:0 6px;
  background:transparent;
  border:1px solid rgba(212,162,76,.25);
  border-radius:25px;
  transition:all .3s ease;
  white-space:nowrap;
  display:inline-block;
  flex-shrink:0;
}

#editable-page-root .puck-song-track span:hover{
  background:rgba(212,162,76,.1);
  border-color:var(--amber);
  color:var(--amber);
}

@keyframes scrollSongs{
  0%{transform:translateX(0);}
  100%{transform:translateX(-50%);}
}

#editable-page-root .puck-header-logo{
  display:block!important;
  width:100%!important;
  height:100%!important;
  object-fit:contain!important;
  object-position:center!important;
}

#editable-page-root .puck-header-logo-link{
  display:flex!important;
  align-items:center!important;
  justify-content:center!important;
  width:var(--logo-size,45px)!important;
  height:var(--logo-size,45px)!important;
}

#editable-page-root .puck-header-logo-link.logo-left{
  grid-column:1!important;
  justify-self:start!important;
}

#editable-page-root .puck-header-logo-link.logo-right{
  grid-column:3!important;
  justify-self:end!important;
}

@media(max-width:800px){
  html,
  body{
    width:100%!important;
    max-width:100%!important;
    overflow-x:hidden!important;
    margin:0!important;
    padding:0!important;
  }

  body{
    position:relative!important;
  }

  #editable-page-root,
  #editable-page-root *{
    box-sizing:border-box!important;
    font-family:inherit!important;
  }

  #editable-page-root{
    width:100vw!important;
    max-width:100vw!important;
    min-width:100vw!important;
    overflow-x:hidden!important;
    margin:0!important;
    padding:0!important;
  }

  #editable-page-root section,
  #editable-page-root .puck-section,
  #editable-page-root .puck-inner,
  #editable-page-root .puck-flex,
  #editable-page-root .puck-columns,
  #editable-page-root .puck-card,
  #editable-page-root .puck-text{
    width:100%!important;
    max-width:100%!important;
    min-width:0!important;
    margin-left:0!important;
    margin-right:0!important;
  }

  #editable-page-root .puck-section{
    padding-left:14px!important;
    padding-right:14px!important;
  }

  #editable-page-root .puck-flex{
    display:flex!important;
    flex-direction:column!important;
    align-items:center!important;
    justify-content:center!important;
    text-align:center!important;
    gap:20px!important;
  }

  #editable-page-root .layout-text-left .puck-buttons,
  #editable-page-root .layout-text-right .puck-buttons{
    justify-content:center!important;
  }

  #editable-page-root .puck-columns{
    display:grid!important;
    grid-template-columns:1fr!important;
    gap:20px!important;
  }

  #editable-page-root img,
  #editable-page-root video,
  #editable-page-root iframe,
  #editable-page-root .puck-image{
    display:block!important;
    width:100%!important;
    max-width:100%!important;
    height:auto!important;
  }

  #editable-page-root .puck-site-header{
    display:flex!important;
    flex-direction:column!important;
    align-items:center!important;
    justify-content:center!important;
    width:100%!important;
    max-width:100%!important;
    padding:14px!important;
    margin:0!important;
    gap:12px!important;
    text-align:center!important;
  }

  #editable-page-root .puck-site-header.is-full-width,
  #editable-page-root .puck-song-scroll.is-full-width{
    width:100%!important;
    max-width:100%!important;
    margin-left:0!important;
    margin-right:0!important;
  }

  #editable-page-root .puck-header-left,
  #editable-page-root .puck-header-right,
  #editable-page-root .puck-header-nav{
    width:100%!important;
    max-width:100%!important;
    display:flex!important;
    justify-content:center!important;
    flex-wrap:wrap!important;
    gap:10px!important;
  }

  #editable-page-root .puck-btn,
  #editable-page-root button,
  #editable-page-root a{
    max-width:100%!important;
    white-space:normal!important;
    text-align:center!important;
  }

  #editable-page-root .social-link,
  #editable-page-root .puck-social-links .social-link{
    width:50px!important;
    max-width:50px!important;
    min-width:50px!important;
    height:50px!important;
    min-height:50px!important;
    max-height:50px!important;
    display:inline-flex!important;
    align-items:center!important;
    justify-content:center!important;
    border-radius:999px!important;
    flex:0 0 50px!important;
  }

  #editable-page-root .social-link svg,
  #editable-page-root .puck-social-links .social-link svg{
    display:block!important;
    width:24px!important;
    max-width:24px!important;
    min-width:24px!important;
    height:24px!important;
    max-height:24px!important;
    min-height:24px!important;
    fill:currentColor!important;
  }

  #editable-page-root .puck-social-letter{
    display:inline-flex!important;
    align-items:center!important;
    justify-content:center!important;
    width:auto!important;
    max-width:none!important;
    font-size:16px!important;
    line-height:1!important;
  }
}
`}function Ee(e){return w(e.fontUrl)}function He(e){const t=(e.buttons||[]).map(R).join("");return`<header class="puck-site-header ${e.headerPosition==="full"?"is-full-width":""}" style="${b({background:e.backgroundColor||"rgba(0,0,0,.72)",borderBottom:e.lineColor?`1px solid ${e.lineColor}`:"none",boxShadow:e.lineShadow||"none",width:e.width||"100%",maxWidth:e.maxWidth||"none",margin:e.margin||"0",padding:e.padding||"22px 40px"})}">
    <div class="puck-header-left">
      ${e.logoUrl&&e.logoPlacement!=="right"?`<a class="puck-header-logo-link logo-left" href="index.html" style="--logo-size:${p(e.logoSize||"45px")}"><img class="puck-header-logo" src="${p(e.logoUrl)}" alt="${p(e.logoAlt||"Logo")}"></a>`:""}
      ${e.showBack!=="hide"?`<a class="puck-header-back" href="${p(e.backUrl||"index.html")}">${h(e.backText||"Back")}</a>`:""}
    </div>
    <nav class="puck-header-nav nav-${p(e.navPlacement||"right")}">${t}</nav>
    <div class="puck-header-right">
      ${e.logoUrl&&e.logoPlacement==="right"?`<a class="puck-header-logo-link logo-right" href="index.html" style="--logo-size:${p(e.logoSize||"45px")}"><img class="puck-header-logo" src="${p(e.logoUrl)}" alt="${p(e.logoAlt||"Logo")}"></a>`:""}
    </div>
  </header>`}function Me(e){const t=e.items||[],o=[...t,...t].map(l=>`<span class="song-name" style="${b({color:e.textColor||"var(--cream)",textShadow:e.textShadow||"none",borderColor:e.buttonBorderColor||"rgba(212, 162, 76, 0.25)"})}">${h(l.text)}</span>`).join("");return`<section class="songs-section puck-song-scroll ${e.stretchMode==="full"?"is-full-width":""}" aria-label="Songs We Play" style="${b({background:e.backgroundColor||"linear-gradient(90deg, var(--blue-deep) 0%, var(--charcoal-light) 50%, var(--blue-deep) 100%)",borderBottom:e.lineColor?`1px solid ${e.lineColor}`:"none",width:e.width||"100%",maxWidth:e.maxWidth||"none",margin:e.margin||"0"})}"><div class="songs-scroll-container"><div class="songs-scroll puck-song-track">${o}</div></div></section>`}function Z(e){const t=b({background:e.backgroundColor||"transparent",color:e.textColor||"inherit",padding:`${e.paddingY||70}px ${e.paddingX||24}px`}),o=b({width:e.imageWidth||"320px",borderRadius:e.imageRadius||"8px",boxShadow:e.imageShadow||"none"}),l=m(e.title)?`<h1 class="band-name puck-title" style="${b(k(e,"title"))}">${h(e.title)}</h1>`:"",r=m(e.subtitle)?`<p class="tagline puck-subtitle" style="${b(k(e,"subtitle"))}">${h(e.subtitle)}</p>`:"",n=m(e.body)?`<p class="description puck-body" style="${b(k(e,"body"))}">${V(e.body)}</p>`:"",i=(e.buttons||[]).map(R).join(""),c=l||r||n||i?`<div class="puck-text">${l}${r}${n}${i?`<div class="puck-buttons">${i}</div>`:""}</div>`:"",u=e.imageUrl?`<img class="puck-image" src="${p(e.imageUrl)}" alt="${p(e.imageAlt||e.title||"Image")}" style="${o}">`:"";return`${w(e.customFontUrl)}<section class="puck-section" style="${t}"><div class="puck-inner puck-flex layout-${p(e.layout||"text-left")}" style="--gap:${Number(e.gap||50)}px;--max-width:${p(e.maxWidth||"1100px")}">${c}${u}</div></section>`}function Ge(e){const t=e.align||"center",o=b({background:e.backgroundColor||"transparent",color:e.textColor||"inherit",padding:`${e.paddingY||50}px ${e.paddingX||24}px`,textAlign:t}),l=m(e.eyebrow)?`<p class="teaser" style="${b(k(e,"eyebrow"))}">${h(e.eyebrow)}</p>`:"",r=m(e.title)?`<h2 class="puck-title" style="${b(k(e,"title"))}">${h(e.title)}</h2>`:"",n=m(e.body)?`<p class="puck-body" style="${b(k(e,"body"))}">${V(e.body)}</p>`:"",i=(e.buttons||[]).map(R).join("");return`${w(e.customFontUrl)}<section class="puck-section" style="${o}"><div class="puck-inner puck-text" style="max-width:${p(e.maxWidth||"850px")}">${l}${r}${n}${i?`<div class="puck-buttons">${i}</div>`:""}</div></section>`}function ee(e){const t=b({background:e.backgroundColor||"transparent",padding:`${e.paddingY||40}px ${e.paddingX||24}px`,textAlign:e.align||"center"}),o=b({width:e.width||"900px",borderRadius:e.radius||"8px",boxShadow:e.shadow||"none"}),l=m(e.title)?`<h2 class="puck-title" style="${b(k(e,"title"))}">${h(e.title)}</h2>`:"",r=e.imageUrl?`<img class="puck-image" src="${p(e.imageUrl)}" alt="${p(e.imageAlt||e.title||"Image")}" style="${o}">`:"";return`${w(e.customFontUrl)}<section class="puck-section" style="${t}"><div class="puck-inner" style="max-width:${p(e.maxWidth||"1100px")}">${l}${r}</div></section>`}function De(e){const t=b({background:e.backgroundColor||"transparent",color:e.textColor||"inherit",padding:`${e.paddingY||50}px ${e.paddingX||24}px`,textAlign:"center"}),o=(e.buttons||[]).map(R).join("");return o?`${w(e.customFontUrl)}<section class="puck-section" style="${t}"><div class="puck-inner"><div class="puck-buttons">${o}</div></div></section>`:""}function te(e){const t=b({background:e.backgroundColor||"transparent",color:e.textColor||"inherit",padding:`${e.paddingY||60}px ${e.paddingX||24}px`,textAlign:"center"}),o=e.links||[],l=m(e.title)?`<p class="teaser" style="${b({color:e.titleColor||"inherit",fontFamily:e.titleFont||"inherit",fontSize:e.titleSize||"inherit",fontWeight:e.titleWeight||"inherit"})}">${h(e.title)}</p>`:"",r=o.filter(n=>m(n.url)).map(n=>`<a class="social-link" href="${p(n.url)}" target="_blank" rel="noopener noreferrer" title="${p(n.label||n.platform)}" style="${b({background:n.backgroundColor||"rgba(255,255,255,.03)",color:n.iconColor||"inherit",borderColor:n.borderColor||"rgba(255,255,255,.18)"})}">${Oe(n.platform,n.label)}</a>`).join("");return!l&&!r?"":`<footer class="puck-section social-section is-full-width" style="${t}"><div class="puck-inner">${l}${r?`<nav class="puck-social-links social-links">${r}</nav>`:""}</div></footer>`}function Xe(e){return`<div class="puck-spacer" style="height:${Number(e.height||40)}px;background:${p(e.backgroundColor||"transparent")}"></div>`}function Ye(e){const t=b({background:e.backgroundColor||"transparent",color:e.textColor||"inherit",padding:`${e.paddingY||50}px ${e.paddingX||24}px`}),l=(e.items||[]).map(r=>{const n=r.imageUrl?`<img class="puck-image" src="${p(r.imageUrl)}" alt="${p(r.title||"Column image")}" style="width:100%;border-radius:${p(e.imageRadius||"8px")};margin-bottom:16px;">`:"",i=m(r.title)?`<h3 style="${b({color:r.titleColor||"inherit",fontFamily:r.titleFont||"inherit",fontSize:r.titleSize||"inherit",fontWeight:r.titleWeight||"inherit"})}">${h(r.title)}</h3>`:"",c=m(r.body)?`<p style="${b({color:r.bodyColor||"inherit",fontFamily:r.bodyFont||"inherit",fontSize:r.bodySize||"inherit",fontWeight:r.bodyWeight||"inherit"})}">${V(r.body)}</p>`:"",u=R({text:r.buttonText,url:r.buttonUrl,backgroundColor:r.buttonBackgroundColor,textColor:r.buttonTextColor,fontFamily:r.buttonFont,fontSize:r.buttonFontSize,borderWidth:r.buttonBorderWidth,borderColor:r.buttonBorderColor,radius:r.buttonRadius,boxShadow:r.buttonBoxShadow,textTransform:r.buttonTextTransform});return n||i||c||u?`<div class="puck-card">${n}${i}${c}${u}</div>`:""}).join("");return l?`${w(e.customFontUrl)}<section class="puck-section" style="${t}"><div class="puck-inner"><div class="puck-columns" style="--cols:${Number(e.columns||2)};--gap:${Number(e.gap||24)}px">${l}</div></div></section>`:""}function Ve(e){return`<section class="puck-section" style="${b({padding:`${e.paddingY||30}px ${e.paddingX||24}px`,background:e.backgroundColor||"transparent"})}"><div class="puck-inner">${e.html||""}</div></section>`}const Je={GraveRobberHero:Z,GraveRobberLogo:ee,GraveRobberSocial:te,HeaderNav:He,SongScroll:Me,FontLoader:Ee,Hero:Z,TextBlock:Ge,ImageBlock:ee,ButtonRow:De,SocialIcons:te,Spacer:Xe,Columns:Ye,Embed:Ve};function dt(e){return((e==null?void 0:e.content)||[]).map(o=>{const l=Je[o.type];return l?l(o.props||{}):""}).join(`
`)}const qe="graverobberpunk",Ke=["inherit","Arial, sans-serif","Helvetica, sans-serif","Verdana, sans-serif","Tahoma, sans-serif","Trebuchet MS, sans-serif","Georgia, serif","Times New Roman, serif","Garamond, serif","Courier New, monospace","Lucida Console, monospace","Impact, sans-serif","Palatino, serif","Gill Sans, sans-serif","Century Gothic, sans-serif","Playfair Display, serif","Montserrat, sans-serif","Oswald, sans-serif","Roboto, sans-serif","Open Sans, sans-serif","Lato, sans-serif","Poppins, sans-serif","Raleway, sans-serif","Bebas Neue, sans-serif","Anton, sans-serif","Inter, sans-serif","Nunito, sans-serif","Merriweather, serif","Lora, serif","Cinzel, serif","Cormorant Garamond, serif","Abril Fatface, serif","Permanent Marker, cursive","Rock Salt, cursive","Bangers, cursive","Creepster, cursive","Metal Mania, cursive","Special Elite, cursive","Rye, cursive","Orbitron, sans-serif","Audiowide, cursive","Black Ops One, cursive","Russo One, sans-serif","Libre Baskerville, serif","Source Sans 3, sans-serif","Source Serif 4, serif","Josefin Sans, sans-serif","Quicksand, sans-serif","Dancing Script, cursive","Pacifico, cursive","Satisfy, cursive","Shadows Into Light, cursive","Fira Sans, sans-serif","Fira Code, monospace","Ubuntu, sans-serif","Work Sans, sans-serif","DM Sans, sans-serif","Space Grotesk, sans-serif","Manrope, sans-serif"],oe=[{label:"Facebook",value:"facebook"},{label:"Instagram",value:"instagram"},{label:"TikTok",value:"tiktok"},{label:"YouTube",value:"youtube"},{label:"Spotify",value:"spotify"},{label:"Bandcamp",value:"bandcamp"},{label:"SoundCloud",value:"soundcloud"},{label:"Apple Music",value:"apple"},{label:"X / Twitter",value:"x"},{label:"Threads",value:"threads"},{label:"Bluesky",value:"bluesky"},{label:"LinkedIn",value:"linkedin"},{label:"Snapchat",value:"snapchat"},{label:"Pinterest",value:"pinterest"},{label:"Twitch",value:"twitch"},{label:"Discord",value:"discord"},{label:"Reddit",value:"reddit"},{label:"Patreon",value:"patreon"},{label:"Venmo",value:"venmo"},{label:"Cash App",value:"cashapp"},{label:"Email",value:"email"},{label:"Website",value:"website"},{label:"Custom",value:"custom"}];function U(e){return JSON.parse(JSON.stringify(e))}function Qe(){const e=localStorage.getItem("adminToken")||"";return e?{Authorization:`Bearer ${e}`}:{}}function Ze({value:e,onChange:t,label:o}){const l=e&&String(e).startsWith("#")?e:"#ffffff";return a.jsxs("div",{className:"puck-custom-field puck-color-field",children:[a.jsx("label",{children:o}),a.jsxs("div",{className:"puck-color-row",children:[a.jsx("input",{type:"color",value:l,onChange:r=>t(r.target.value)}),a.jsx("input",{type:"text",value:e||"",placeholder:"#ffffff, transparent, inherit",onChange:r=>t(r.target.value)})]})]})}const et=[{label:"Left",value:"left"},{label:"Center",value:"center"},{label:"Right",value:"right"}];function S(e,t={}){return{type:"text",label:e,placeholder:t.placeholder||"Example: 100px"}}function d(e){return{type:"custom",label:e,render:({value:t,onChange:o})=>a.jsx(Ze,{value:t||"",onChange:o,label:e})}}function tt({value:e,onChange:t,label:o}){return a.jsxs("div",{className:"puck-custom-field",children:[a.jsx("label",{children:o}),a.jsx("select",{value:e||"inherit",onChange:l=>t(l.target.value),children:Ke.map(l=>a.jsx("option",{value:l,children:l},l))}),a.jsx("input",{type:"text",value:e||"",placeholder:"Or type any font-family name",onChange:l=>t(l.target.value)})]})}function x(e){return{type:"custom",label:e,render:({value:t,onChange:o})=>a.jsx(tt,{value:t||"inherit",onChange:o,label:e})}}function ot({value:e,onChange:t,label:o}){const[l,r]=pe.useState("");async function n(i){var J;const c=(J=i.target.files)==null?void 0:J[0];if(!c)return;if(!c.type.startsWith("image/")){r("Please choose an image file.");return}const u=window.BAND_API_BASE;if(!u){r("Upload failed: API base is missing.");return}const g=new FormData;g.append("image",c),r("Uploading image...");try{const O=await fetch(`${u}/uploads/${qe}`,{method:"POST",headers:Qe(),body:g}),_=await O.json();if(!O.ok||!_.url){r(_.error||"Upload failed.");return}t(_.url),r("Image uploaded. Click Publish to save the page.")}catch{r("Upload failed. Make sure backend/Cloudinary are working.")}finally{i.target.value=""}}return a.jsxs("div",{className:"puck-upload-field",children:[a.jsx("label",{children:o||"Image"}),e?a.jsxs("div",{className:"puck-upload-preview",children:[a.jsx("img",{src:e,alt:"Selected upload"}),a.jsx("code",{children:e})]}):a.jsx("p",{className:"puck-upload-empty",children:"No image selected."}),a.jsx("input",{type:"file",accept:"image/*",onChange:n}),a.jsx("button",{type:"button",onClick:()=>t(""),children:"Remove Image"}),l&&a.jsx("p",{className:"puck-upload-status",children:l})]})}function C(e){return{type:"custom",label:e,render:({value:t,onChange:o})=>a.jsx(ot,{value:t||"",onChange:o,label:e})}}function rt({value:e,onChange:t,label:o}){return a.jsxs("div",{className:"puck-custom-field",children:[a.jsx("label",{children:o}),a.jsx("input",{type:"text",value:e||"",placeholder:"Paste Google Fonts @import URL or font CSS URL",onChange:l=>t(l.target.value)}),a.jsx("small",{children:"Example: https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"})]})}function $(e="External Font URL"){return{type:"custom",label:e,render:({value:t,onChange:o})=>a.jsx(rt,{value:t||"",onChange:o,label:e})}}const y=e=>({[`${e}Color`]:d("Text Color"),[`${e}Font`]:x("Font"),[`${e}Size`]:{type:"text",label:"Font Size",placeholder:"3rem, 48px, 120%"},[`${e}Weight`]:{type:"select",label:"Bold / Normal",options:[{label:"Default",value:"inherit"},{label:"Normal",value:"400"},{label:"Bold",value:"700"},{label:"Extra Bold",value:"900"},{label:"Light",value:"300"}]},[`${e}Style`]:{type:"select",label:"Italic",options:[{label:"Default",value:"inherit"},{label:"Normal",value:"normal"},{label:"Italic",value:"italic"}]},[`${e}Decoration`]:{type:"select",label:"Underline",options:[{label:"None",value:"none"},{label:"Underline",value:"underline"},{label:"Line Through",value:"line-through"}]},[`${e}Transform`]:{type:"select",label:"Text Case",options:[{label:"Default",value:"none"},{label:"UPPERCASE",value:"uppercase"},{label:"lowercase",value:"lowercase"},{label:"Capitalize",value:"capitalize"}]},[`${e}LetterSpacing`]:{type:"text",label:"Letter Spacing",placeholder:"normal, 2px, .08em"},[`${e}LineHeight`]:{type:"text",label:"Line Height",placeholder:"normal, 1.2, 32px"},[`${e}Shadow`]:{type:"text",label:"Text Shadow",placeholder:"none or 0 0 10px #22d3ee"}}),F={type:"array",label:"Buttons",arrayFields:{text:{type:"text",label:"Button Text"},url:{type:"text",label:"Button Link"},backgroundColor:d("Button Background"),textColor:d("Button Text Color"),fontFamily:x("Button Font"),fontSize:{type:"text",label:"Button Font Size",placeholder:"16px"},borderWidth:{type:"select",label:"Border",options:[{label:"No Border",value:"0px"},{label:"Thin Border",value:"1px"},{label:"Medium Border",value:"2px"},{label:"Thick Border",value:"4px"}]},borderColor:d("Border Color"),boxShadow:{type:"text",label:"Button Glow / Shadow",placeholder:"none or 0 0 20px #22d3ee"},textTransform:{type:"select",label:"Text Case",options:[{label:"Default",value:""},{label:"Uppercase",value:"uppercase"},{label:"Normal",value:"none"},{label:"Lowercase",value:"lowercase"},{label:"Capitalize",value:"capitalize"}]},radius:{type:"text",label:"Button Rounded Corners",placeholder:"999px"},padding:{type:"text",label:"Button Padding",placeholder:"14px 24px"}},defaultItemProps:{text:"New Button",url:"#",backgroundColor:"#8b3df4",textColor:"#ffffff",fontFamily:"inherit",fontSize:"16px",borderWidth:"0px",borderColor:"rgba(255,255,255,.25)",boxShadow:"none",textTransform:"uppercase",radius:"999px",padding:"14px 24px"}},B={backgroundColor:d("Section Background"),textColor:d("Default Text Color"),paddingY:{type:"number",label:"Top/Bottom Padding"},paddingX:{type:"number",label:"Left/Right Padding"}};function T(e){return e?a.jsx("style",{children:`@import url('${e}');`}):null}function j({button:e}){if(!(e!=null&&e.text))return null;const t=e.borderWidth||"0px",o=e.borderColor||"transparent",l={background:e.backgroundColor||"transparent",color:e.textColor||"inherit",fontFamily:e.fontFamily||"inherit",fontSize:e.fontSize||"inherit",fontWeight:e.fontWeight||"inherit",border:`${t} solid ${o}`,boxShadow:e.boxShadow||"none",textTransform:e.textTransform||"uppercase",borderRadius:e.radius||"0px",padding:e.padding||"14px 24px",textDecoration:"none",display:"inline-flex",alignItems:"center",justifyContent:"center"};return a.jsx("a",{className:"puck-btn",href:e.url||"#",style:l,children:e.text})}function at({platform:e,label:t}){const o=String(e||"custom").toLowerCase();if(o==="facebook")return a.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.019 4.388 10.994 10.125 11.854v-8.385H7.078v-3.469h3.047V9.431c0-3.007 1.791-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.249h3.328l-.532 3.469h-2.796v8.385C19.612 23.067 24 18.092 24 12.073z"})});if(o==="instagram")return a.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm11.5 1a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z"})});if(o==="tiktok")return a.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M19.589 6.686a4.793 4.793 0 01-3.77-4.187V2h-3.358v13.743a2.89 2.89 0 11-2.89-2.89c.213 0 .421.023.622.067V9.51a6.248 6.248 0 00-.622-.033A6.248 6.248 0 1015.82 15.72V8.687a8.154 8.154 0 004.77 1.539V6.686z"})});if(o==="youtube")return a.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 00.5 6.2 31.5 31.5 0 000 12a31.5 31.5 0 00.5 5.8 3 3 0 002.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 002.1-2.1A31.5 31.5 0 0024 12a31.5 31.5 0 00-.5-5.8zM9.6 15.6V8.4L15.8 12l-6.2 3.6z"})});const l=o==="custom"?(t||"Link").slice(0,2).toUpperCase():o.slice(0,2).toUpperCase();return a.jsx("span",{className:"puck-social-letter",children:l})}function z({children:e,backgroundColor:t="transparent",textColor:o="inherit",paddingY:l=50,paddingX:r=24}){return a.jsx("section",{className:"puck-section",style:{background:t,color:o,padding:`${l}px ${r}px`},children:e})}const L=[{type:"Hero",props:{id:"graverobber-hero-1",title:"Grave Robber",subtitle:"AMERICAN HORROR PUNK",body:"Horror punk from beyond the grave. Shows, music, merch, booking, and updates.",imageUrl:"assets/grave-robber-skull.png",imageAlt:"Grave Robber skull logo",layout:"center",titleSize:"5rem",titleColor:"#f2f2f2",titleFont:"Creepster, cursive",titleWeight:"700",titleLetterSpacing:"normal",subtitleSize:"1.25rem",subtitleColor:"#c62828",subtitleFont:"Oswald, sans-serif",subtitleWeight:"700",subtitleLetterSpacing:".14em",bodySize:"1.1rem",bodyColor:"#d6d6d6",bodyFont:"Special Elite, cursive",bodyWeight:"400",bodyLetterSpacing:"normal",imageWidth:"300px",imageRadius:"0px",imageShadow:"0 0 55px rgba(198,40,40,.45)",maxWidth:1e3,gap:35,backgroundColor:"transparent",textColor:"#ffffff",paddingY:70,paddingX:24,customFontUrl:"",buttons:[{text:"Shows",url:"shows.html",backgroundColor:"#c62828",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"16px",borderWidth:"0px",borderColor:"transparent",boxShadow:"0 0 24px rgba(198,40,40,.35)",textTransform:"uppercase",radius:"999px",padding:"16px 34px"},{text:"Join the Crypt List",url:"signup.html",backgroundColor:"transparent",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"16px",borderWidth:"1px",borderColor:"rgba(255,255,255,.35)",boxShadow:"none",textTransform:"uppercase",radius:"999px",padding:"16px 34px"},{text:"Booking",url:"mailto:graverobber.punk@gmail.com",backgroundColor:"transparent",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"16px",borderWidth:"1px",borderColor:"rgba(198,40,40,.65)",boxShadow:"none",textTransform:"uppercase",radius:"999px",padding:"16px 34px"}]}},{type:"ImageBlock",props:{id:"graverobber-image-1",title:"",titleSize:"3rem",titleColor:"#ffffff",titleFont:"Creepster, cursive",imageUrl:"assets/grave-robber-logo-stacked.png",imageAlt:"Grave Robber logo",width:"520px",radius:"12px",shadow:"0 20px 60px rgba(0,0,0,.55)",align:"center",maxWidth:"900px",backgroundColor:"transparent",paddingY:30,paddingX:24,customFontUrl:""}},{type:"ButtonRow",props:{id:"graverobber-buttons-1",backgroundColor:"transparent",textColor:"#ffffff",paddingY:40,paddingX:24,customFontUrl:"",buttons:[{text:"Shows",url:"shows.html",backgroundColor:"#c62828",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"16px",borderWidth:"0px",borderColor:"transparent",boxShadow:"0 0 24px rgba(198,40,40,.35)",textTransform:"uppercase",radius:"999px",padding:"16px 34px"},{text:"Crypt List",url:"signup.html",backgroundColor:"transparent",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"16px",borderWidth:"1px",borderColor:"rgba(255,255,255,.35)",boxShadow:"none",textTransform:"uppercase",radius:"999px",padding:"16px 34px"}]}},{type:"SocialIcons",props:{id:"graverobber-social-1",title:"Follow Grave Robber",titleColor:"#ffffff",titleFont:"Oswald, sans-serif",titleSize:"1rem",titleWeight:"700",backgroundColor:"transparent",textColor:"#ffffff",paddingY:50,paddingX:24,links:[{platform:"facebook",label:"Facebook",url:"https://www.facebook.com/graverobberpunk",iconColor:"#ffffff",backgroundColor:"rgba(198,40,40,.14)",borderColor:"rgba(198,40,40,.55)"},{platform:"instagram",label:"Instagram",url:"https://www.instagram.com/graverobberpunk",iconColor:"#ffffff",backgroundColor:"rgba(198,40,40,.14)",borderColor:"rgba(198,40,40,.55)"},{platform:"x",label:"X",url:"https://x.com/graverobberpunk",iconColor:"#ffffff",backgroundColor:"rgba(198,40,40,.14)",borderColor:"rgba(198,40,40,.55)"},{platform:"threads",label:"Threads",url:"https://www.threads.net/@graverobberpunk",iconColor:"#ffffff",backgroundColor:"rgba(198,40,40,.14)",borderColor:"rgba(198,40,40,.55)"},{platform:"tiktok",label:"TikTok",url:"https://www.tiktok.com/@graverobberpunk",iconColor:"#ffffff",backgroundColor:"rgba(198,40,40,.14)",borderColor:"rgba(198,40,40,.55)"},{platform:"spotify",label:"Spotify",url:"https://open.spotify.com/artist/4D34aUp0OsDs8mAEWPIP7c",iconColor:"#ffffff",backgroundColor:"rgba(198,40,40,.14)",borderColor:"rgba(198,40,40,.55)"},{platform:"youtube",label:"YouTube",url:"https://www.youtube.com/@GraveRobberPunk",iconColor:"#ffffff",backgroundColor:"rgba(198,40,40,.14)",borderColor:"rgba(198,40,40,.55)"},{platform:"bandcamp",label:"Bandcamp",url:"https://graverobberpunk.bandcamp.com/",iconColor:"#ffffff",backgroundColor:"rgba(198,40,40,.14)",borderColor:"rgba(198,40,40,.55)"},{platform:"soundcloud",label:"SoundCloud",url:"https://soundcloud.com/graverobberofficial",iconColor:"#ffffff",backgroundColor:"rgba(198,40,40,.14)",borderColor:"rgba(198,40,40,.55)"},{platform:"apple",label:"Apple Music",url:"https://music.apple.com/us/artist/grave-robber/279558434",iconColor:"#ffffff",backgroundColor:"rgba(198,40,40,.14)",borderColor:"rgba(198,40,40,.55)"},{platform:"website",label:"Merch Store",url:"https://graverobber.bigcartel.com/",iconColor:"#ffffff",backgroundColor:"rgba(198,40,40,.14)",borderColor:"rgba(198,40,40,.55)"},{platform:"email",label:"Email",url:"mailto:graverobber.punk@gmail.com",iconColor:"#ffffff",backgroundColor:"rgba(198,40,40,.14)",borderColor:"rgba(198,40,40,.55)"}]}}];function lt(e="home"){return e==="shows"?[{type:"HeaderNav",props:{id:"graverobber-shows-header-1",backgroundColor:"rgba(0,0,0,.86)",lineColor:"rgba(198,40,40,.65)",lineShadow:"0 0 24px rgba(198,40,40,.28)",showBack:"show",backText:"Back",backUrl:"index.html",logoUrl:"assets/grave-robber-skull.png",logoAlt:"Grave Robber",logoSize:"52px",logoPlacement:"right",width:"100%",maxWidth:"none",margin:"0",padding:"18px 28px",navPlacement:"center",headerPosition:"full",buttons:[{text:"Home",url:"index.html",backgroundColor:"transparent",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"14px",borderWidth:"1px",borderColor:"rgba(198,40,40,.55)",boxShadow:"none",textTransform:"uppercase",radius:"999px",padding:"10px 16px"},{text:"Shows",url:"shows.html",backgroundColor:"#c62828",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"14px",borderWidth:"0px",borderColor:"transparent",boxShadow:"none",textTransform:"uppercase",radius:"999px",padding:"10px 16px"},{text:"Crypt List",url:"signup.html",backgroundColor:"transparent",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"14px",borderWidth:"1px",borderColor:"rgba(198,40,40,.55)",boxShadow:"none",textTransform:"uppercase",radius:"999px",padding:"10px 16px"}]}},{type:"TextBlock",props:{id:"graverobber-shows-title-1",eyebrow:"Live from the crypt",eyebrowColor:"#c62828",eyebrowFont:"Oswald, sans-serif",eyebrowSize:"1rem",eyebrowWeight:"700",title:"Shows",titleSize:"4rem",titleColor:"#ffffff",titleFont:"Creepster, cursive",titleWeight:"700",body:"Join the crypt list to hear when the next haunt is announced.",bodySize:"1.1rem",bodyColor:"#d6d6d6",bodyFont:"Special Elite, cursive",bodyWeight:"400",align:"center",maxWidth:"850px",backgroundColor:"transparent",textColor:"#ffffff",paddingY:70,paddingX:24,customFontUrl:"",buttons:[{text:"Get Notified",url:"signup.html",backgroundColor:"#c62828",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"16px",borderWidth:"0px",borderColor:"transparent",boxShadow:"0 0 24px rgba(198,40,40,.35)",textTransform:"uppercase",radius:"999px",padding:"16px 34px"}]}},{type:"Embed",props:{html:'<div id="upcoming-shows"></div><div id="no-shows-message" class="empty-state"><h2>Shows Coming Soon</h2><p>Join the crypt list to hear when the next haunt is announced.</p><a href="signup.html" class="primary-btn">Get Notified</a></div><section class="past-shows-section hidden"><h2>Past Shows</h2><div id="past-shows"></div></section>',backgroundColor:"transparent",paddingY:20,paddingX:24}}]:e==="signup"?[{type:"HeaderNav",props:{id:"graverobber-signup-header-1",backgroundColor:"rgba(0,0,0,.86)",lineColor:"rgba(198,40,40,.65)",lineShadow:"0 0 24px rgba(198,40,40,.28)",showBack:"show",backText:"Back",backUrl:"index.html",logoUrl:"assets/grave-robber-skull.png",logoAlt:"Grave Robber",logoSize:"52px",logoPlacement:"right",width:"100%",maxWidth:"none",margin:"0",padding:"18px 28px",navPlacement:"center",headerPosition:"full",buttons:[{text:"Home",url:"index.html",backgroundColor:"transparent",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"14px",borderWidth:"1px",borderColor:"rgba(198,40,40,.55)",boxShadow:"none",textTransform:"uppercase",radius:"999px",padding:"10px 16px"},{text:"Shows",url:"shows.html",backgroundColor:"transparent",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"14px",borderWidth:"1px",borderColor:"rgba(198,40,40,.55)",boxShadow:"none",textTransform:"uppercase",radius:"999px",padding:"10px 16px"},{text:"Crypt List",url:"signup.html",backgroundColor:"#c62828",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"14px",borderWidth:"0px",borderColor:"transparent",boxShadow:"none",textTransform:"uppercase",radius:"999px",padding:"10px 16px"}]}},{type:"TextBlock",props:{id:"graverobber-signup-title-1",eyebrow:"Join the underground",eyebrowColor:"#c62828",eyebrowFont:"Oswald, sans-serif",eyebrowSize:"1rem",eyebrowWeight:"700",title:"Crypt List",titleSize:"4rem",titleColor:"#ffffff",titleFont:"Creepster, cursive",titleWeight:"700",body:"Get show updates, music news, and dispatches from the grave.",bodySize:"1.1rem",bodyColor:"#d6d6d6",bodyFont:"Special Elite, cursive",bodyWeight:"400",align:"center",maxWidth:"850px",backgroundColor:"transparent",textColor:"#ffffff",paddingY:70,paddingX:24,customFontUrl:"",buttons:[]}},{type:"Embed",props:{html:'<form id="signup-form" class="custom-form"><label>Name<input type="text" name="name" required></label><label>Email<input type="email" name="email" required></label><label>Phone<input type="tel" name="phone"></label><label>Message<textarea name="message" rows="5"></textarea></label><button type="submit">Join the Crypt List</button><p id="signup-status"></p></form>',backgroundColor:"transparent",paddingY:20,paddingX:24}}]:[{type:"GraveRobberHero",props:{id:"graverobber-home-hero-1",title:"Grave Robber",subtitle:"AMERICAN HORROR PUNK",body:"Horror punk from beyond the grave. Shows, music, merch, booking, and updates.",imageUrl:"assets/grave-robber-skull.png",imageAlt:"Grave Robber skull logo",layout:"image-top",imageWidth:"300px",imageRadius:"0px",imageShadow:"0 0 90px rgba(198,40,40,.38)",titleSize:"44px",titleColor:"#f5f0e6",titleFont:"Oswald, sans-serif",titleWeight:"700",subtitleSize:"18px",subtitleColor:"#e52b2b",subtitleFont:"Oswald, sans-serif",subtitleWeight:"700",subtitleLetterSpacing:".45em",subtitleTransform:"uppercase",bodySize:"18px",bodyColor:"#cfd3d6",bodyFont:"Oswald, sans-serif",bodyWeight:"400",backgroundColor:"transparent",textColor:"#ffffff",paddingY:120,paddingX:24,maxWidth:900,gap:34,buttons:[{text:"Shows",url:"shows.html",backgroundColor:"#c62828",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"16px",borderWidth:"0px",borderColor:"transparent",boxShadow:"0 0 24px rgba(198,40,40,.45)",textTransform:"uppercase",radius:"999px",padding:"16px 34px"},{text:"Join the Crypt List",url:"signup.html",backgroundColor:"transparent",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"16px",borderWidth:"1px",borderColor:"rgba(255,255,255,.35)",boxShadow:"none",textTransform:"uppercase",radius:"999px",padding:"16px 34px"},{text:"Booking",url:"contact.html",backgroundColor:"transparent",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"16px",borderWidth:"1px",borderColor:"rgba(255,255,255,.35)",boxShadow:"none",textTransform:"uppercase",radius:"999px",padding:"16px 34px"}]}},{type:"Spacer",props:{id:"graverobber-home-divider-space-1",height:1,backgroundColor:"rgba(255,255,255,.16)"}},{type:"GraveRobberSocial",props:{id:"graverobber-home-social-1",title:"Follow Grave Robber",titleColor:"#ffffff",titleFont:"Oswald, sans-serif",titleSize:"1rem",backgroundColor:"transparent",textColor:"#ffffff",paddingY:50,paddingX:24,links:[{platform:"custom",label:"Facebook",url:"https://www.facebook.com/graverobberpunk",iconColor:"#ffffff",backgroundColor:"transparent",borderColor:"rgba(255,255,255,.35)"},{platform:"custom",label:"Instagram",url:"https://www.instagram.com/graverobberpunk",iconColor:"#ffffff",backgroundColor:"transparent",borderColor:"rgba(255,255,255,.35)"},{platform:"spotify",label:"Spotify",url:"https://open.spotify.com/artist/4D34aUp0OsDs8mAEWPIP7c",iconColor:"#ffffff",backgroundColor:"transparent",borderColor:"rgba(255,255,255,.35)"}]}}]}function nt(e="home"){return{root:{props:{title:`Grave Robber ${e.charAt(0).toUpperCase()+e.slice(1)}`}},content:lt(e)}}nt("home");const H={components:{GraveRobberHero:{label:"01 Site Block: Grave Robber Main Horror Hero",fields:{title:{type:"text",label:"Title"},subtitle:{type:"text",label:"Subtitle"},body:{type:"textarea",label:"Body Text"},imageUrl:C("Image"),imageAlt:{type:"text",label:"Image Alt Text"},layout:{type:"select",label:"Layout",options:[{label:"Centered",value:"center"},{label:"Image Top",value:"image-top"},{label:"Text Left / Image Right",value:"text-left"},{label:"Text Right / Image Left",value:"text-right"}]},imageWidth:S("Image Width",{placeholder:"Example: 900px"}),imageRadius:S("Image Rounded Corners",{placeholder:"Example: 50%"}),imageShadow:{type:"text",label:"Image Shadow / Glow CSS",placeholder:"Example: 0 0 40px currentColor"},titleSize:S("Title Font Size",{placeholder:"Example: 72px"}),titleColor:d("Title Color"),titleFont:x("Title Font"),subtitleColor:d("Subtitle Color"),bodyColor:d("Body Color"),backgroundColor:d("Section Background"),textColor:d("Default Text Color"),paddingY:{type:"number",label:"Top/Bottom Padding"},paddingX:{type:"number",label:"Left/Right Padding"},buttons:F},defaultProps:{title:"Grave Robber",subtitle:"AMERICAN HORROR PUNK",body:"Horror punk from beyond the grave. Shows, music, merch, booking, and updates.",imageUrl:"assets/grave-robber-skull.png",imageAlt:"Grave Robber skull logo",layout:"center",imageWidth:"300px",imageRadius:"0px",imageShadow:"0 0 55px rgba(198,40,40,.45)",titleSize:"80px",titleColor:"#f2f2f2",titleFont:"Creepster, cursive",subtitleColor:"#c62828",bodyColor:"#d6d6d6",backgroundColor:"transparent",textColor:"#ffffff",paddingY:70,paddingX:24,buttons:[{text:"Shows",url:"shows.html",backgroundColor:"#c62828",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"16px",borderWidth:"0px",borderColor:"transparent",boxShadow:"0 0 24px rgba(198,40,40,.35)",textTransform:"uppercase",radius:"999px",padding:"16px 34px"},{text:"Join the Crypt List",url:"signup.html",backgroundColor:"transparent",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"16px",borderWidth:"1px",borderColor:"rgba(255,255,255,.35)",radius:"999px",padding:"16px 34px"}]},render:e=>H.components.Hero.render(e)},GraveRobberLogo:{label:"01 Site Block: Grave Robber Stacked Logo",fields:{imageUrl:C("Logo Image"),imageAlt:{type:"text",label:"Image Alt Text"},width:S("Image Width",{placeholder:"Example: 520px"}),radius:S("Rounded Corners",{placeholder:"Example: 12px"}),shadow:{type:"text",label:"Image Shadow / Glow CSS"},align:{type:"select",label:"Image Placement",options:et},backgroundColor:d("Section Background"),paddingY:{type:"number",label:"Top/Bottom Padding"},paddingX:{type:"number",label:"Left/Right Padding"}},defaultProps:{imageUrl:"assets/grave-robber-logo-stacked.png",imageAlt:"Grave Robber logo",width:"520px",radius:"12px",shadow:"0 20px 60px rgba(0,0,0,.55)",align:"center",backgroundColor:"transparent",paddingY:30,paddingX:24},render:e=>H.components.ImageBlock.render(e)},GraveRobberSocial:{label:"01 Site Block: Grave Robber Social / Merch Links",fields:{title:{type:"text",label:"Title"},titleColor:d("Title Color"),titleFont:x("Title Font"),titleSize:{type:"text",label:"Title Font Size"},backgroundColor:d("Section Background"),paddingY:{type:"number",label:"Top/Bottom Padding"},paddingX:{type:"number",label:"Left/Right Padding"},links:{type:"array",label:"Links",arrayFields:{platform:{type:"select",label:"Platform",options:oe},label:{type:"text",label:"Label"},url:{type:"text",label:"URL"},iconColor:d("Icon Color"),backgroundColor:d("Icon Background"),borderColor:d("Icon Border")},defaultItemProps:{platform:"custom",label:"Link",url:"#",iconColor:"#ffffff",backgroundColor:"rgba(198,40,40,.18)",borderColor:"rgba(198,40,40,.65)"}}},defaultProps:{title:"Follow Grave Robber",titleColor:"#ffffff",titleFont:"Oswald, sans-serif",titleSize:"1rem",backgroundColor:"transparent",paddingY:50,paddingX:24,links:[{platform:"facebook",label:"Facebook",url:"https://www.facebook.com/graverobberpunk",iconColor:"#ffffff",backgroundColor:"rgba(198,40,40,.18)",borderColor:"rgba(198,40,40,.65)"},{platform:"instagram",label:"Instagram",url:"https://www.instagram.com/graverobberpunk",iconColor:"#ffffff",backgroundColor:"rgba(198,40,40,.18)",borderColor:"rgba(198,40,40,.65)"},{platform:"spotify",label:"Spotify",url:"https://open.spotify.com/artist/4D34aUp0OsDs8mAEWPIP7c",iconColor:"#ffffff",backgroundColor:"rgba(198,40,40,.18)",borderColor:"rgba(198,40,40,.65)"}]},render:e=>H.components.SocialIcons.render(e)},HeaderNav:{label:"02 Add Block: Header / Page Navigation",fields:{backgroundColor:d("Header Background"),lineColor:d("Bottom Line Color"),lineShadow:{type:"text",label:"Bottom Line Shadow",placeholder:"0 0 24px rgba(77,198,225,.22)"},showBack:{type:"select",label:"Back Button",options:[{label:"Show",value:"show"},{label:"Hide",value:"hide"}]},backText:{type:"text",label:"Back Text"},backUrl:{type:"text",label:"Back Link"},logoUrl:C("Header Logo"),logoAlt:{type:"text",label:"Logo Alt Text"},logoSize:{type:"text",label:"Logo Size",placeholder:"45px"},logoPlacement:{type:"select",label:"Logo Placement",options:[{label:"Left",value:"left"},{label:"Right",value:"right"}]},width:{type:"text",label:"Header Width",placeholder:"100%, 1200px, 80vw"},maxWidth:{type:"text",label:"Header Max Width",placeholder:"none or 1200px"},margin:{type:"text",label:"Header Margin",placeholder:"0 auto"},padding:{type:"text",label:"Header Padding",placeholder:"22px 40px"},navPlacement:{type:"select",label:"Button Placement",options:[{label:"Left",value:"left"},{label:"Center",value:"center"},{label:"Right",value:"right"}]},headerPosition:{type:"select",label:"Header Stretch Mode",options:[{label:"Normal",value:"normal"},{label:"Full Browser Width",value:"full"}]},buttons:F},defaultProps:{backgroundColor:"rgba(0,0,0,.72)",lineColor:"rgba(77,198,225,.45)",lineShadow:"0 0 24px rgba(77,198,225,.22)",showBack:"show",backText:"Back",backUrl:"index.html",logoUrl:"assets/grave-robber-skull.png",logoAlt:"Grave Robber Logo",logoSize:"45px",logoPlacement:"left",width:"100%",maxWidth:"none",margin:"0",padding:"22px 40px",navPlacement:"right",headerPosition:"full",buttons:[{text:"Home",url:"index.html",backgroundColor:"transparent",textColor:"#4dc6e1",fontFamily:"inherit",fontSize:"14px",borderWidth:"1px",borderColor:"rgba(77,198,225,.45)",boxShadow:"0 0 16px rgba(77,198,225,.12)",textTransform:"uppercase",radius:"999px",padding:"10px 16px"},{text:"Shows",url:"shows.html",backgroundColor:"transparent",textColor:"#4dc6e1",fontFamily:"inherit",fontSize:"14px",borderWidth:"1px",borderColor:"rgba(77,198,225,.45)",boxShadow:"0 0 16px rgba(77,198,225,.12)",textTransform:"uppercase",radius:"999px",padding:"10px 16px"},{text:"Signup",url:"signup.html",backgroundColor:"transparent",textColor:"#4dc6e1",fontFamily:"inherit",fontSize:"14px",borderWidth:"1px",borderColor:"rgba(77,198,225,.45)",boxShadow:"0 0 16px rgba(77,198,225,.12)",textTransform:"uppercase",radius:"999px",padding:"10px 16px"},{text:"Contact",url:"contact.html",backgroundColor:"transparent",textColor:"#4dc6e1",fontFamily:"inherit",fontSize:"14px",borderWidth:"1px",borderColor:"rgba(77,198,225,.45)",boxShadow:"0 0 16px rgba(77,198,225,.12)",textTransform:"uppercase",radius:"999px",padding:"10px 16px"},{text:"Admin",url:"admin.html",backgroundColor:"transparent",textColor:"#4dc6e1",fontFamily:"inherit",fontSize:"14px",borderWidth:"1px",borderColor:"rgba(77,198,225,.45)",boxShadow:"0 0 16px rgba(77,198,225,.12)",textTransform:"uppercase",radius:"999px",padding:"10px 16px"}]},render:e=>a.jsxs("header",{className:`puck-site-header ${e.headerPosition==="full"?"is-full-width":""}`,style:{background:e.backgroundColor||"rgba(0,0,0,.72)",borderBottom:`1px solid ${e.lineColor||"rgba(77,198,225,.45)"}`,boxShadow:e.lineShadow||"none",width:e.width||"100%",maxWidth:e.maxWidth||"none",margin:e.margin||"0",padding:e.padding||"22px 40px"},children:[a.jsxs("div",{className:"puck-header-left",children:[e.logoUrl&&e.logoPlacement!=="right"&&a.jsx("a",{className:"puck-header-logo-link logo-left",href:"index.html",style:{"--logo-size":e.logoSize||"45px"},children:a.jsx("img",{className:"puck-header-logo",src:e.logoUrl,alt:e.logoAlt||"Logo"})}),e.showBack!=="hide"&&a.jsx("a",{className:"puck-header-back",href:e.backUrl||"index.html",children:e.backText||"Back"})]}),a.jsx("nav",{className:`puck-header-nav nav-${e.navPlacement||"right"}`,children:(e.buttons||[]).map((t,o)=>a.jsx(j,{button:t},o))}),a.jsx("div",{className:"puck-header-right",children:e.logoUrl&&e.logoPlacement==="right"&&a.jsx("a",{className:"puck-header-logo-link logo-right",href:"index.html",style:{"--logo-size":e.logoSize||"45px"},children:a.jsx("img",{className:"puck-header-logo",src:e.logoUrl,alt:e.logoAlt||"Logo"})})})]})},SongScroll:{label:"02 Add Block: Song Scroll",fields:{backgroundColor:d("Scroll Background"),lineColor:d("Bottom Line Color"),textColor:d("Song Text Color"),textShadow:{type:"text",label:"Song Text Shadow"},buttonBorderColor:d("Song Border Color"),width:{type:"text",label:"Scroll Width",placeholder:"100%, 100vw, 1200px"},maxWidth:{type:"text",label:"Scroll Max Width",placeholder:"none or 1200px"},margin:{type:"text",label:"Scroll Margin",placeholder:"0 auto"},stretchMode:{type:"select",label:"Scroll Stretch Mode",options:[{label:"Normal",value:"normal"},{label:"Full Browser Width",value:"full"}]},items:{type:"array",label:"Songs",arrayFields:{text:{type:"text",label:"Song Title"}},defaultItemProps:{text:"Song Title"}}},defaultProps:{backgroundColor:"rgba(77,198,225,.12)",lineColor:"rgba(77,198,225,.45)",textColor:"#4dc6e1",textShadow:"0 0 12px rgba(77,198,225,.35)",buttonBorderColor:"rgba(77,198,225,.45)",width:"100%",maxWidth:"none",margin:"0",stretchMode:"full",items:[{text:"Get Up"},{text:"Man on the Moon"},{text:"Losing My Religion"},{text:"Finest Worksong"},{text:"Life and How to Live It"},{text:"Fall on Me"},{text:"Superman"},{text:"These Days"},{text:"Stand"},{text:"The One I Love"}]},render:e=>{const t=e.items||[];return a.jsx("section",{className:`songs-section puck-song-scroll ${e.stretchMode==="full"?"is-full-width":""}`,"aria-label":"Songs We Play",style:{background:e.backgroundColor||"linear-gradient(90deg, var(--blue-deep) 0%, var(--charcoal-light) 50%, var(--blue-deep) 100%)",borderBottom:`1px solid ${e.lineColor||"rgba(212, 162, 76, 0.2)"}`,width:e.width||"100%",maxWidth:e.maxWidth||"none",margin:e.margin||"0"},children:a.jsx("div",{className:"songs-scroll-container",children:a.jsx("div",{className:"songs-scroll puck-song-track",children:[...t,...t].map((o,l)=>a.jsx("span",{className:"song-name",style:{color:e.textColor||"var(--cream)",textShadow:e.textShadow||"none",borderColor:e.buttonBorderColor||"rgba(212, 162, 76, 0.25)"},children:o.text},l))})})})}},Hero:{label:"02 Add Block: Hero: Text + Image",fields:{customFontUrl:$("External Font URL For This Block"),title:{type:"text",label:"Title"},...y("title"),subtitle:{type:"text",label:"Subtitle"},...y("subtitle"),body:{type:"textarea",label:"Body Text"},...y("body"),imageUrl:C("Hero Image Upload"),imageAlt:{type:"text",label:"Image Alt Text"},layout:{type:"select",label:"Layout",options:[{label:"Text Left / Image Right",value:"text-left"},{label:"Text Right / Image Left",value:"text-right"},{label:"Centered",value:"center"},{label:"Image Top",value:"image-top"}]},imageWidth:{type:"text",label:"Image Width",placeholder:"320px or 50%"},imageRadius:{type:"text",label:"Image Rounded Corners"},imageShadow:{type:"text",label:"Image Shadow",placeholder:"none or 0 20px 60px rgba(0,0,0,.45)"},maxWidth:{type:"number",label:"Max Section Width"},gap:{type:"number",label:"Gap Between Text/Image"},...B,buttons:F},defaultProps:U(L[0].props),render:e=>a.jsxs(z,{...e,children:[T(e.customFontUrl),a.jsxs("div",{className:`puck-inner puck-flex layout-${e.layout||"text-left"}`,style:{"--gap":`${e.gap||50}px`,"--max-width":`${e.maxWidth||1100}px`},children:[a.jsxs("div",{className:"puck-text",children:[e.title&&a.jsx("h1",{className:"band-name puck-title",style:{fontSize:e.titleSize||"5rem",color:e.titleColor||"inherit",fontFamily:e.titleFont||"inherit",fontWeight:e.titleWeight||"inherit",letterSpacing:e.titleLetterSpacing||"normal"},children:e.title}),e.subtitle&&a.jsx("p",{className:"tagline puck-subtitle",style:{fontSize:e.subtitleSize||"1.8rem",color:e.subtitleColor||"inherit",fontFamily:e.subtitleFont||"inherit",fontWeight:e.subtitleWeight||"inherit",letterSpacing:e.subtitleLetterSpacing||"normal"},children:e.subtitle}),e.body&&a.jsx("p",{className:"description puck-body",style:{fontSize:e.bodySize||"1rem",color:e.bodyColor||"inherit",fontFamily:e.bodyFont||"inherit",fontWeight:e.bodyWeight||"inherit",letterSpacing:e.bodyLetterSpacing||"normal"},children:e.body}),(e.buttons||[]).length>0&&a.jsx("div",{className:"puck-buttons",children:(e.buttons||[]).map((t,o)=>a.jsx(j,{button:t,index:o},o))})]}),e.imageUrl&&a.jsx("img",{className:"puck-image",src:e.imageUrl,alt:e.imageAlt||e.title||"Image",style:{width:e.imageWidth||"320px",borderRadius:e.imageRadius||"8px",boxShadow:e.imageShadow||"none"}})]})]})},TextBlock:{label:"02 Add Block: Text Block",fields:{customFontUrl:$("External Font URL For This Block"),eyebrow:{type:"text",label:"Small Top Text"},...y("eyebrow"),title:{type:"text",label:"Title"},...y("title"),body:{type:"textarea",label:"Body Text"},...y("body"),align:{type:"select",label:"Text Align",options:[{label:"Left",value:"left"},{label:"Center",value:"center"},{label:"Right",value:"right"}]},maxWidth:{type:"text",label:"Text Box Width"},...B,buttons:F},defaultProps:{id:"text-block",eyebrow:"",eyebrowColor:"#ffffff",eyebrowFont:"inherit",eyebrowSize:"1rem",eyebrowWeight:"400",title:"New Text Section",titleSize:"3rem",titleColor:"#ffffff",titleFont:"Playfair Display, serif",titleWeight:"700",body:"Edit this text.",bodySize:"1rem",bodyColor:"#ffffff",bodyFont:"inherit",bodyWeight:"400",align:"center",maxWidth:"850px",backgroundColor:"transparent",textColor:"#ffffff",paddingY:50,paddingX:24,customFontUrl:"",buttons:[]},render:e=>a.jsxs(z,{...e,children:[T(e.customFontUrl),a.jsxs("div",{className:"puck-inner puck-text",style:{textAlign:e.align||"center",maxWidth:e.maxWidth||"850px"},children:[e.eyebrow&&a.jsx("p",{className:"teaser",style:{color:e.eyebrowColor||"inherit",fontFamily:e.eyebrowFont||"inherit",fontSize:e.eyebrowSize||"inherit",fontWeight:e.eyebrowWeight||"inherit",letterSpacing:e.eyebrowLetterSpacing||"normal"},children:e.eyebrow}),e.title&&a.jsx("h2",{className:"puck-title",style:{fontSize:e.titleSize||"3rem",color:e.titleColor||"inherit",fontFamily:e.titleFont||"inherit",fontWeight:e.titleWeight||"inherit",letterSpacing:e.titleLetterSpacing||"normal"},children:e.title}),e.body&&a.jsx("p",{className:"puck-body",style:{fontSize:e.bodySize||"1rem",color:e.bodyColor||"inherit",fontFamily:e.bodyFont||"inherit",fontWeight:e.bodyWeight||"inherit",letterSpacing:e.bodyLetterSpacing||"normal"},children:e.body}),a.jsx("div",{className:"puck-buttons",children:(e.buttons||[]).map((t,o)=>a.jsx(j,{button:t,index:o},o))})]})]})},ImageBlock:{label:"02 Add Block: Image",fields:{customFontUrl:$("External Font URL For This Block"),title:{type:"text",label:"Optional Title"},...y("title"),imageUrl:C("Image Upload"),imageAlt:{type:"text",label:"Image Alt Text"},width:{type:"text",label:"Image Width",placeholder:"900px or 100%"},radius:{type:"text",label:"Rounded Corners"},shadow:{type:"text",label:"Image Shadow",placeholder:"none or 0 20px 60px rgba(0,0,0,.45)"},align:{type:"select",label:"Align",options:[{label:"Left",value:"left"},{label:"Center",value:"center"},{label:"Right",value:"right"}]},maxWidth:{type:"text",label:"Container Width"},backgroundColor:d("Background Color"),paddingY:{type:"number",label:"Top/Bottom Padding"},paddingX:{type:"number",label:"Left/Right Padding"}},defaultProps:U(L[1].props),render:e=>a.jsxs("section",{className:"puck-section",style:{background:e.backgroundColor||"transparent",padding:`${e.paddingY||40}px ${e.paddingX||24}px`,textAlign:e.align||"center"},children:[T(e.customFontUrl),a.jsxs("div",{className:"puck-inner",style:{maxWidth:e.maxWidth||"1100px"},children:[e.title&&a.jsx("h2",{className:"puck-title",style:{fontSize:e.titleSize||"3rem",color:e.titleColor||"inherit",fontFamily:e.titleFont||"inherit",fontWeight:e.titleWeight||"inherit"},children:e.title}),e.imageUrl&&a.jsx("img",{className:"puck-image",src:e.imageUrl,alt:e.imageAlt||e.title||"Image",style:{width:e.width||"900px",borderRadius:e.radius||"8px",boxShadow:e.shadow||"none"}})]})]})},ButtonRow:{label:"02 Add Block: Button Row",fields:{customFontUrl:$("External Font URL For Buttons"),...B,buttons:F},defaultProps:U(L[2].props),render:e=>a.jsxs(z,{...e,children:[T(e.customFontUrl),a.jsx("div",{className:"puck-inner",children:a.jsx("div",{className:"puck-buttons",children:(e.buttons||[]).map((t,o)=>a.jsx(j,{button:t,index:o},o))})})]})},SocialIcons:{label:"02 Add Block: Social Icons",fields:{title:{type:"text",label:"Title"},titleColor:d("Title Color"),titleFont:x("Title Font"),titleSize:{type:"text",label:"Title Font Size"},titleWeight:{type:"select",label:"Title Weight",options:[{label:"Default",value:"inherit"},{label:"Regular",value:"400"},{label:"Bold",value:"700"},{label:"Black",value:"900"}]},...B,links:{type:"array",label:"Social Links - add as many as you want",arrayFields:{platform:{type:"select",label:"Platform",options:oe},label:{type:"text",label:"Custom Label / Title"},url:{type:"text",label:"URL"},iconColor:d("Icon Color"),backgroundColor:d("Icon Background"),borderColor:d("Icon Border Color")},defaultItemProps:{platform:"facebook",label:"Facebook",url:"https://facebook.com",iconColor:"#ffffff",backgroundColor:"rgba(198,40,40,.14)",borderColor:"rgba(198,40,40,.55)"}}},defaultProps:U(L[3].props),render:e=>a.jsx(z,{...e,children:a.jsxs("div",{className:"puck-inner",style:{textAlign:"center"},children:[e.title&&a.jsx("p",{className:"teaser",style:{color:e.titleColor||"inherit",fontFamily:e.titleFont||"inherit",fontSize:e.titleSize||"inherit",fontWeight:e.titleWeight||"inherit"},children:e.title}),a.jsx("nav",{className:"puck-social-links social-links",children:(e.links||[]).filter(t=>t.url).map((t,o)=>a.jsx("a",{className:"social-link",href:t.url||"#",title:t.label||t.platform,style:{color:t.iconColor||"inherit",background:t.backgroundColor||"rgba(255,255,255,.03)",borderColor:t.borderColor||"rgba(255,255,255,.18)"},children:a.jsx(at,{platform:t.platform,label:t.label})},o))})]})})},Columns:{label:"02 Add Block: Columns / Cards",fields:{customFontUrl:$("External Font URL For This Block"),columns:{type:"number",label:"Columns"},gap:{type:"number",label:"Gap"},imageRadius:{type:"text",label:"Image Radius"},...B,items:{type:"array",label:"Cards",arrayFields:{title:{type:"text",label:"Title"},titleColor:d("Title Color"),titleFont:x("Title Font"),titleSize:{type:"text",label:"Title Size"},body:{type:"textarea",label:"Body"},bodyColor:d("Body Color"),bodyFont:x("Body Font"),bodySize:{type:"text",label:"Body Size"},imageUrl:C("Card Image Upload"),buttonText:{type:"text",label:"Button Text"},buttonUrl:{type:"text",label:"Button URL"},buttonBackgroundColor:d("Button Background"),buttonTextColor:d("Button Text Color"),buttonFont:x("Button Font"),buttonFontSize:{type:"text",label:"Button Font Size"},buttonBorderWidth:{type:"select",label:"Button Border",options:[{label:"No Border",value:"0px"},{label:"Thin Border",value:"1px"},{label:"Medium Border",value:"2px"},{label:"Thick Border",value:"4px"}]},buttonBorderColor:d("Button Border Color"),buttonBoxShadow:{type:"text",label:"Button Glow / Shadow"},buttonTextTransform:{type:"select",label:"Button Text Case",options:[{label:"Uppercase",value:"uppercase"},{label:"Normal",value:"none"},{label:"Lowercase",value:"lowercase"},{label:"Capitalize",value:"capitalize"}]},buttonRadius:{type:"text",label:"Button Radius"}},defaultItemProps:{title:"Card title",titleColor:"#ffffff",titleFont:"inherit",titleSize:"1.4rem",body:"Card text",bodyColor:"#ffffff",bodyFont:"inherit",bodySize:"1rem",imageUrl:"",buttonText:"",buttonUrl:"#",buttonBackgroundColor:"#8b3df4",buttonTextColor:"#ffffff",buttonFont:"inherit",buttonFontSize:"16px",buttonBorderWidth:"0px",buttonBorderColor:"transparent",buttonBoxShadow:"none",buttonTextTransform:"uppercase",buttonRadius:"999px"}}},defaultProps:{columns:2,gap:24,imageRadius:"8px",backgroundColor:"transparent",textColor:"#ffffff",paddingY:50,paddingX:24,customFontUrl:"",items:[{title:"First Card",body:"Edit this card.",imageUrl:"",buttonText:"",buttonUrl:"#",buttonBorderWidth:"0px",buttonBorderColor:"transparent"},{title:"Second Card",body:"Edit this card.",imageUrl:"",buttonText:"",buttonUrl:"#"}]},render:e=>a.jsxs(z,{...e,children:[T(e.customFontUrl),a.jsx("div",{className:"puck-inner",children:a.jsx("div",{className:"puck-columns",style:{"--cols":e.columns||2,"--gap":`${e.gap||24}px`},children:(e.items||[]).map((t,o)=>a.jsxs("div",{className:"puck-card",children:[t.imageUrl&&a.jsx("img",{className:"puck-image",src:t.imageUrl,alt:t.title||"Column image",style:{width:"100%",borderRadius:e.imageRadius||"8px",marginBottom:16}}),t.title&&a.jsx("h3",{style:{color:t.titleColor||"inherit",fontFamily:t.titleFont||"inherit",fontSize:t.titleSize||"inherit"},children:t.title}),t.body&&a.jsx("p",{style:{color:t.bodyColor||"inherit",fontFamily:t.bodyFont||"inherit",fontSize:t.bodySize||"inherit"},children:t.body}),t.buttonText&&a.jsx(j,{button:{text:t.buttonText,url:t.buttonUrl,backgroundColor:t.buttonBackgroundColor,textColor:t.buttonTextColor,fontFamily:t.buttonFont,fontSize:t.buttonFontSize,borderWidth:t.buttonBorderWidth,borderColor:t.buttonBorderColor,radius:t.buttonRadius,boxShadow:t.buttonBoxShadow,textTransform:t.buttonTextTransform}})]},o))})})]})},Spacer:{label:"02 Add Block: Spacer",fields:{height:{type:"number",label:"Height"},backgroundColor:d("Background Color")},defaultProps:{height:40,backgroundColor:"transparent"},render:e=>a.jsx("div",{className:"puck-spacer",style:{height:e.height||40,background:e.backgroundColor||"transparent"}})},Embed:{label:"02 Add Block: Custom HTML Embed",fields:{html:{type:"textarea",label:"HTML"},backgroundColor:d("Background Color"),paddingY:{type:"number",label:"Top/Bottom Padding"},paddingX:{type:"number",label:"Left/Right Padding"}},defaultProps:{html:"<p>Custom HTML here</p>",backgroundColor:"transparent",paddingY:30,paddingX:24},render:e=>a.jsx("section",{className:"puck-section",style:{padding:`${e.paddingY||30}px ${e.paddingX||24}px`,background:e.backgroundColor||"transparent"},children:a.jsx("div",{className:"puck-inner",dangerouslySetInnerHTML:{__html:e.html||""}})})}}},fe=_e(),it=fe.replaceAll("#editable-page-root","[data-puck-entry]"),ct=`
${fe}
${it}

[data-puck-entry] {
  background:
    radial-gradient(circle at center 18%, rgba(198,40,40,.18), transparent 34%),
    #030000;
  color: #f5f0e6;
  font-family: "Oswald", sans-serif;
  min-height: 100vh;
}

[data-puck-entry] .puck-flex.layout-image-top {
  flex-direction: column-reverse;
  text-align: center;
}

[data-puck-entry] .puck-image {
  object-fit: contain;
}

.puck-font-loader-note {
  padding: 16px;
  border: 1px dashed rgba(255,255,255,.35);
  border-radius: 12px;
  text-align: center;
  opacity: .75;
}
`;export{pe as R,Y as a,st as b,nt as c,ct as d,H as e,me as g,a as j,_e as p,dt as r};
