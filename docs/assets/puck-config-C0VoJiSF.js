function he(e,t){for(var a=0;a<t.length;a++){const i=t[a];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in e)){const n=Object.getOwnPropertyDescriptor(i,r);n&&Object.defineProperty(e,r,n.get?n:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function a(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(r){if(r.ep)return;r.ep=!0;const n=a(r);fetch(r.href,n)}})();function ye(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var re={exports:{}},H={},ae={exports:{}},f={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I=Symbol.for("react.element"),we=Symbol.for("react.portal"),ke=Symbol.for("react.fragment"),ve=Symbol.for("react.strict_mode"),Ce=Symbol.for("react.profiler"),Se=Symbol.for("react.provider"),ze=Symbol.for("react.context"),Te=Symbol.for("react.forward_ref"),$e=Symbol.for("react.suspense"),Be=Symbol.for("react.memo"),Fe=Symbol.for("react.lazy"),J=Symbol.iterator;function We(e){return e===null||typeof e!="object"?null:(e=J&&e[J]||e["@@iterator"],typeof e=="function"?e:null)}var ie={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ne=Object.assign,le={};function L(e,t,a){this.props=e,this.context=t,this.refs=le,this.updater=a||ie}L.prototype.isReactComponent={};L.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};L.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function de(){}de.prototype=L.prototype;function X(e,t,a){this.props=e,this.context=t,this.refs=le,this.updater=a||ie}var _=X.prototype=new de;_.constructor=X;ne(_,L.prototype);_.isPureReactComponent=!0;var K=Array.isArray,se=Object.prototype.hasOwnProperty,V={current:null},pe={key:!0,ref:!0,__self:!0,__source:!0};function ce(e,t,a){var i,r={},n=null,d=null;if(t!=null)for(i in t.ref!==void 0&&(d=t.ref),t.key!==void 0&&(n=""+t.key),t)se.call(t,i)&&!pe.hasOwnProperty(i)&&(r[i]=t[i]);var s=arguments.length-2;if(s===1)r.children=a;else if(1<s){for(var g=Array(s),m=0;m<s;m++)g[m]=arguments[m+2];r.children=g}if(e&&e.defaultProps)for(i in s=e.defaultProps,s)r[i]===void 0&&(r[i]=s[i]);return{$$typeof:I,type:e,key:n,ref:d,props:r,_owner:V.current}}function je(e,t){return{$$typeof:I,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function q(e){return typeof e=="object"&&e!==null&&e.$$typeof===I}function Le(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(a){return t[a]})}var Q=/\/+/g;function D(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Le(""+e.key):t.toString(36)}function O(e,t,a,i,r){var n=typeof e;(n==="undefined"||n==="boolean")&&(e=null);var d=!1;if(e===null)d=!0;else switch(n){case"string":case"number":d=!0;break;case"object":switch(e.$$typeof){case I:case we:d=!0}}if(d)return d=e,r=r(d),e=i===""?"."+D(d,0):i,K(r)?(a="",e!=null&&(a=e.replace(Q,"$&/")+"/"),O(r,t,a,"",function(m){return m})):r!=null&&(q(r)&&(r=je(r,a+(!r.key||d&&d.key===r.key?"":(""+r.key).replace(Q,"$&/")+"/")+e)),t.push(r)),1;if(d=0,i=i===""?".":i+":",K(e))for(var s=0;s<e.length;s++){n=e[s];var g=i+D(n,s);d+=O(n,t,a,g,r)}else if(g=We(e),typeof g=="function")for(e=g.call(e),s=0;!(n=e.next()).done;)n=n.value,g=i+D(n,s++),d+=O(n,t,a,g,r);else if(n==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return d}function G(e,t,a){if(e==null)return e;var i=[],r=0;return O(e,i,"","",function(n){return t.call(a,n,r++)}),i}function Pe(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(a){(e._status===0||e._status===-1)&&(e._status=1,e._result=a)},function(a){(e._status===0||e._status===-1)&&(e._status=2,e._result=a)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var x={current:null},U={transition:null},Re={ReactCurrentDispatcher:x,ReactCurrentBatchConfig:U,ReactCurrentOwner:V};f.Children={map:G,forEach:function(e,t,a){G(e,function(){t.apply(this,arguments)},a)},count:function(e){var t=0;return G(e,function(){t++}),t},toArray:function(e){return G(e,function(t){return t})||[]},only:function(e){if(!q(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};f.Component=L;f.Fragment=ke;f.Profiler=Ce;f.PureComponent=X;f.StrictMode=ve;f.Suspense=$e;f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Re;f.cloneElement=function(e,t,a){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=ne({},e.props),r=e.key,n=e.ref,d=e._owner;if(t!=null){if(t.ref!==void 0&&(n=t.ref,d=V.current),t.key!==void 0&&(r=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(g in t)se.call(t,g)&&!pe.hasOwnProperty(g)&&(i[g]=t[g]===void 0&&s!==void 0?s[g]:t[g])}var g=arguments.length-2;if(g===1)i.children=a;else if(1<g){s=Array(g);for(var m=0;m<g;m++)s[m]=arguments[m+2];i.children=s}return{$$typeof:I,type:e.type,key:r,ref:n,props:i,_owner:d}};f.createContext=function(e){return e={$$typeof:ze,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Se,_context:e},e.Consumer=e};f.createElement=ce;f.createFactory=function(e){var t=ce.bind(null,e);return t.type=e,t};f.createRef=function(){return{current:null}};f.forwardRef=function(e){return{$$typeof:Te,render:e}};f.isValidElement=q;f.lazy=function(e){return{$$typeof:Fe,_payload:{_status:-1,_result:e},_init:Pe}};f.memo=function(e,t){return{$$typeof:Be,type:e,compare:t===void 0?null:t}};f.startTransition=function(e){var t=U.transition;U.transition={};try{e()}finally{U.transition=t}};f.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};f.useCallback=function(e,t){return x.current.useCallback(e,t)};f.useContext=function(e){return x.current.useContext(e)};f.useDebugValue=function(){};f.useDeferredValue=function(e){return x.current.useDeferredValue(e)};f.useEffect=function(e,t){return x.current.useEffect(e,t)};f.useId=function(){return x.current.useId()};f.useImperativeHandle=function(e,t,a){return x.current.useImperativeHandle(e,t,a)};f.useInsertionEffect=function(e,t){return x.current.useInsertionEffect(e,t)};f.useLayoutEffect=function(e,t){return x.current.useLayoutEffect(e,t)};f.useMemo=function(e,t){return x.current.useMemo(e,t)};f.useReducer=function(e,t,a){return x.current.useReducer(e,t,a)};f.useRef=function(e){return x.current.useRef(e)};f.useState=function(e){return x.current.useState(e)};f.useSyncExternalStore=function(e,t,a){return x.current.useSyncExternalStore(e,t,a)};f.useTransition=function(){return x.current.useTransition()};f.version="18.2.0";ae.exports=f;var A=ae.exports;const ge=ye(A),kt=he({__proto__:null,default:ge},[A]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ae=A,Ie=Symbol.for("react.element"),Ee=Symbol.for("react.fragment"),Ge=Object.prototype.hasOwnProperty,Me=Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ne={key:!0,ref:!0,__self:!0,__source:!0};function be(e,t,a){var i,r={},n=null,d=null;a!==void 0&&(n=""+a),t.key!==void 0&&(n=""+t.key),t.ref!==void 0&&(d=t.ref);for(i in t)Ge.call(t,i)&&!Ne.hasOwnProperty(i)&&(r[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps,t)r[i]===void 0&&(r[i]=t[i]);return{$$typeof:Ie,type:e,key:n,ref:d,props:r,_owner:Me.current}}H.Fragment=Ee;H.jsx=be;H.jsxs=be;re.exports=H;var o=re.exports;function b(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function p(e){return b(e).trim()}function u(e){return String(e??"").trim().length>0}function E(e){return b(e).replaceAll(`
`,"<br>")}function c(e={}){return Object.entries(e).filter(([,t])=>t!=null&&t!=="").map(([t,a])=>`${t.replace(/[A-Z]/g,i=>`-${i.toLowerCase()}`)}:${a}`).join(";")}function S(e={},t=""){return{fontSize:e[`${t}Size`]||"inherit",color:e[`${t}Color`]||"inherit",fontFamily:e[`${t}Font`]||"inherit",fontWeight:e[`${t}Weight`]||"inherit",fontStyle:e[`${t}Style`]||"inherit",textDecoration:e[`${t}Decoration`]||"none",textTransform:e[`${t}Transform`]||"none",letterSpacing:e[`${t}LetterSpacing`]||"normal",lineHeight:e[`${t}LineHeight`]||"normal",textShadow:e[`${t}Shadow`]||"none"}}function z(e){return u(e)?`<style>@import url('${p(e)}');</style>`:""}function Oe(e="custom"){return String(e||"custom").toLowerCase().trim()}function Ue(e,t=""){const a=Oe(e),i='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M8 12h8M12 8v8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',r={facebook:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.019 4.388 10.994 10.125 11.854v-8.385H7.078v-3.469h3.047V9.431c0-3.007 1.791-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.249h3.328l-.532 3.469h-2.796v8.385C19.612 23.067 24 18.092 24 12.073z"/></svg>',instagram:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3.5A4.5 4.5 0 1112 16a4.5 4.5 0 010-9zm0 2A2.5 2.5 0 1012 14a2.5 2.5 0 000-5zm5.25-3.25a1.25 1.25 0 11-1.25 1.25 1.25 1.25 0 011.25-1.25z"/></svg>',tiktok:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19.589 6.686a4.793 4.793 0 01-3.77-4.187V2h-3.358v13.743a2.89 2.89 0 11-2.89-2.89c.213 0 .421.023.622.067V9.51a6.248 6.248 0 00-.622-.033A6.248 6.248 0 1015.82 15.72V8.687a8.154 8.154 0 004.77 1.539V6.686z"/></svg>',youtube:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 00.5 6.2 31.5 31.5 0 000 12a31.5 31.5 0 00.5 5.8 3 3 0 002.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 002.1-2.1A31.5 31.5 0 0024 12a31.5 31.5 0 00-.5-5.8zM9.6 15.6V8.4L15.8 12l-6.2 3.6z"/></svg>',spotify:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 1.8A10.2 10.2 0 1022.2 12 10.2 10.2 0 0012 1.8zm4.68 14.72a.76.76 0 01-1.05.25 9.58 9.58 0 00-7.28-.78.76.76 0 11-.44-1.46 11.13 11.13 0 018.52.94.76.76 0 01.25 1.05zm1.25-2.77a.9.9 0 01-1.24.3 11.75 11.75 0 00-8.62-.96.9.9 0 11-.52-1.72 13.5 13.5 0 019.96 1.14.9.9 0 01.42 1.24zm.13-2.94a14.15 14.15 0 00-10.4-1.13 1.05 1.05 0 11-.61-2.01 16.3 16.3 0 0112.08 1.32 1.05 1.05 0 11-1.07 1.82z"/></svg>',bandcamp:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7.1 6h14L16.9 18h-14L7.1 6z"/></svg>',soundcloud:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.8 10.1A4.8 4.8 0 0020 19H8.5V7.5a7 7 0 019.3 2.6zM3 13h1v6H3v-6zm2-2h1v8H5v-8zm2 1h1v7H7v-7z"/></svg>',apple:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16.4 2.2c.1 1.1-.4 2.2-1.1 3-.7.8-1.8 1.4-2.8 1.3-.1-1.1.4-2.2 1.1-3 .8-.8 1.9-1.3 2.8-1.3zM20.2 17.1c-.5 1.1-.8 1.6-1.5 2.6-1 1.5-2.4 3.3-4.1 3.3-1.5 0-1.9-1-4-1s-2.6 1-4 1c-1.7 0-3-1.6-4-3.1-2.8-4.2-3.1-9.1-1.4-11.7 1.2-1.8 3-2.8 4.7-2.8 1.8 0 2.9 1 4.3 1 1.4 0 2.3-1 4.3-1 1.5 0 3.2.8 4.3 2.3-3.8 2.1-3.2 7.6.4 9.4z"/></svg>',x:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-4.9-7-5.6 7H3.3l7.3-8.4L2.8 2h6.4l4.4 6.4L18.9 2zm-1.1 17.9h1.7L8.3 4H6.5l11.3 15.9z"/></svg>',twitter:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-4.9-7-5.6 7H3.3l7.3-8.4L2.8 2h6.4l4.4 6.4L18.9 2zm-1.1 17.9h1.7L8.3 4H6.5l11.3 15.9z"/></svg>',threads:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.2 2C6.8 2 3 5.8 3 12s3.8 10 9.3 10c4.7 0 8.2-2.7 8.2-6.5 0-2.5-1.4-4.2-3.8-5 .3-3.2-1.6-5.4-4.8-5.4-2.8 0-4.7 1.5-5.3 4h2.2c.4-1.3 1.5-2 3.1-2 1.8 0 2.8 1 2.9 2.8-.8-.1-1.6-.2-2.6-.2-3.3 0-5.4 1.5-5.4 4 0 2.2 1.8 3.8 4.4 3.8 2.8 0 4.7-1.6 5.3-4.3 1.2.5 1.9 1.3 1.9 2.5 0 2.5-2.4 4.2-6.1 4.2-4.4 0-7.1-3-7.1-7.9s2.7-7.9 7-7.9c3.4 0 5.7 1.7 6.4 4.7h2.2C20.1 4.5 16.9 2 12.2 2zm-.8 13.5c-1.4 0-2.3-.7-2.3-1.8 0-1.3 1.2-2 3.3-2 .9 0 1.8.1 2.6.3-.3 2.2-1.6 3.5-3.6 3.5z"/></svg>',bluesky:i,linkedin:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5A2.5 2.5 0 110 3.5a2.5 2.5 0 014.98 0zM.5 8h4.9v16H.5V8zm7.8 0H13v2.2h.1c.7-1.3 2.4-2.7 4.9-2.7 5.2 0 6.2 3.4 6.2 7.9V24h-4.9v-7.6c0-1.8 0-4.1-2.5-4.1s-2.9 2-2.9 4v7.7H8.3V8z"/></svg>',snapchat:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2c3.1 0 5 2.2 5 5.7v2.1c.4.2.9.3 1.4.3.7 0 1.1.4 1.1.9 0 .7-.8 1.1-1.8 1.5.4 1.2 1.4 2.2 2.9 2.8.5.2.7.6.6 1-.1.5-.6.8-1.5.9-.4 0-.6.2-.8.5-.3.5-.8.7-1.5.5-.8-.2-1.4-.3-2 .1-.8.6-1.7 1.7-3.4 1.7s-2.6-1.1-3.4-1.7c-.6-.4-1.2-.3-2-.1-.7.2-1.2 0-1.5-.5-.2-.3-.4-.5-.8-.5-.9-.1-1.4-.4-1.5-.9-.1-.4.1-.8.6-1 1.5-.6 2.5-1.6 2.9-2.8-1-.4-1.8-.8-1.8-1.5 0-.5.4-.9 1.1-.9.5 0 1-.1 1.4-.3V7.7C7 4.2 8.9 2 12 2z"/></svg>',pinterest:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.1 2C6.6 2 3 5.7 3 10.2c0 2.1 1.1 4.6 2.8 5.4.3.1.5.1.6-.2l.5-2c.1-.3 0-.4-.2-.7-.6-.7-.9-1.5-.9-2.6 0-3.1 2.4-6 6.1-6 3.3 0 5.2 2 5.2 4.8 0 3.6-1.6 6.6-4 6.6-1.3 0-2.2-1.1-1.9-2.4.4-1.6 1.2-3.3 1.2-4.4 0-1-.6-1.9-1.7-1.9-1.3 0-2.4 1.4-2.4 3.3 0 1.2.4 2 .4 2s-1.4 5.9-1.7 6.9c-.5 2.1-.1 4.6 0 4.8.1.1.2.1.3 0 .1-.2 1.8-2.2 2.3-4.2.2-.6.9-3.4.9-3.4.5.9 1.8 1.6 3.2 1.6 4.2 0 7.1-3.9 7.1-9.1C20.8 5 17.4 2 12.1 2z"/></svg>',twitch:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4 2h17v12l-5 5h-4l-3 3H6v-3H2V6l2-4zm2 3v11h4v3l3-3h4l2-2V5H6zm5 3h2v5h-2V8zm5 0h2v5h-2V8z"/></svg>',discord:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19.5 5.2A16 16 0 0015.6 4l-.2.4a14.8 14.8 0 013.4 1.7 12.8 12.8 0 00-10.8 0 14.8 14.8 0 013.4-1.7L11.2 4a16 16 0 00-3.9 1.2C4.8 8.9 4.1 12.5 4.4 16c1.6 1.2 3.1 1.9 4.6 2.3l.9-1.5c-.5-.2-1-.4-1.5-.7l.4-.3a11.5 11.5 0 006.8 0l.4.3c-.5.3-1 .5-1.5.7l.9 1.5c1.5-.4 3-1.1 4.6-2.3.5-4.1-.8-7.6-2.5-10.8zM9.5 14.1c-.9 0-1.6-.8-1.6-1.8s.7-1.8 1.6-1.8 1.6.8 1.6 1.8-.7 1.8-1.6 1.8zm5 0c-.9 0-1.6-.8-1.6-1.8s.7-1.8 1.6-1.8 1.6.8 1.6 1.8-.7 1.8-1.6 1.8z"/></svg>',reddit:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22 12a2.4 2.4 0 00-4.1-1.7 11.6 11.6 0 00-5.1-1.4l.9-4.1 2.9.6a2 2 0 104-.4 2 2 0 00-3.5-1.2l-3.7-.8a.8.8 0 00-.9.6l-1.1 5.2a11.8 11.8 0 00-5.3 1.4A2.4 2.4 0 102.5 13c0 1 .6 1.8 1.4 2.2 0 .2-.1.4-.1.6 0 3.8 3.7 6.8 8.2 6.8s8.2-3 8.2-6.8c0-.2 0-.4-.1-.6A2.4 2.4 0 0022 12zM8.5 14.6a1.4 1.4 0 111.4-1.4 1.4 1.4 0 01-1.4 1.4zm6.9 3.8c-1 .8-2.1 1.1-3.4 1.1s-2.4-.4-3.4-1.1a.7.7 0 11.9-1.1c.7.5 1.5.8 2.5.8s1.8-.3 2.5-.8a.7.7 0 11.9 1.1zm.1-3.8a1.4 1.4 0 111.4-1.4 1.4 1.4 0 01-1.4 1.4z"/></svg>',patreon:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4 3h4v18H4V3zm11 0a6 6 0 110 12 6 6 0 010-12z"/></svg>',venmo:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.5 4.5c.4 6.6-5.6 15.2-10.1 15.2H6.2L4.5 6.2l3.7-.4 1 9.6c1.8-3 3.2-6.8 3-9.5l3.8-.8c.3 2.1-.1 4.2-.9 6.1 1.3-2.1 2-4.5 1.8-6.8h3.6z"/></svg>',cashapp:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.2 2l-.5 2.1c2 .2 3.5.9 4.7 1.9l-1.8 2.5c-1.1-.8-2.3-1.3-3.7-1.3-1.3 0-2.1.5-2.1 1.3 0 .9.8 1.2 2.9 2 3 .9 4.7 2.1 4.7 5 0 2.6-1.7 4.4-4.5 5l-.5 2.5H9.9l.5-2.4a8.6 8.6 0 01-5.1-2.3l2-2.5c1.3 1.1 2.8 1.8 4.5 1.8 1.5 0 2.4-.6 2.4-1.6 0-.9-.7-1.3-2.8-1.9-3.2-.9-4.8-2.2-4.8-4.8 0-2.5 1.7-4.3 4.4-4.9l.5-2.4h1.7z"/></svg>',email:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3 5h18a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V6a1 1 0 011-1zm9 8.2L4.8 7H4v.7l8 6.9 8-6.9V7h-.8L12 13.2z"/></svg>',website:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm6.9 9h-3.2a15.7 15.7 0 00-1.1-5 8.1 8.1 0 014.3 5zM12 4.1c.7 1 1.4 3.4 1.6 6.9h-3.2c.2-3.5.9-5.9 1.6-6.9zM4.1 13h3.2c.1 1.8.5 3.5 1.1 5a8.1 8.1 0 01-4.3-5zm3.2-2H4.1a8.1 8.1 0 014.3-5 15.7 15.7 0 00-1.1 5zM12 19.9c-.7-1-1.4-3.4-1.6-6.9h3.2c-.2 3.5-.9 5.9-1.6 6.9zm3.6-1.9c.6-1.5 1-3.2 1.1-5h3.2a8.1 8.1 0 01-4.3 5z"/></svg>',custom:i};return r[a]||r.custom}function P(e={}){if(!u(e.text))return"";const t=e.borderWidth||"0px",a=e.borderColor||"transparent",i=c({background:e.backgroundColor||"transparent",color:e.textColor||"inherit",fontFamily:e.fontFamily||"inherit",fontSize:e.fontSize||"inherit",fontWeight:e.fontWeight||"inherit",border:`${t} solid ${a}`,boxShadow:e.boxShadow||"none",textTransform:e.textTransform||"uppercase",borderRadius:e.radius||"0px",padding:e.padding||"14px 24px",textDecoration:"none",display:"inline-flex",alignItems:"center",justifyContent:"center",cursor:"pointer"});if(e.buttonType==="dropdown"){const r=c({background:e.dropdownBackgroundColor||"rgba(0,0,0,.96)",borderColor:e.dropdownBorderColor||"rgba(57,255,20,.55)",boxShadow:e.dropdownBoxShadow||"0 0 24px rgba(57,255,20,.35)",borderRadius:e.dropdownRadius||"16px",padding:e.dropdownPadding||"10px",minWidth:e.dropdownMinWidth||"190px"}),n=(e.dropdownLinks||[]).filter(d=>u(d.text)).map(d=>{const s=c({background:d.backgroundColor||"transparent",color:d.textColor||"#ffffff",fontFamily:d.fontFamily||"inherit",fontSize:d.fontSize||"14px",borderColor:d.borderColor||"transparent",boxShadow:d.boxShadow||"none",textTransform:d.textTransform||"uppercase",borderRadius:d.radius||"10px",padding:d.padding||"10px 12px"});return`<a href="${p(d.url||"#")}" target="_blank" rel="noopener noreferrer" style="${s}">${b(d.text)}</a>`}).join("");return`<div class="puck-dropdown"><button class="puck-btn puck-dropdown-trigger" type="button" style="${i}">${b(e.text)}</button><div class="puck-dropdown-menu" style="${r}">${n}</div></div>`}return`<a class="puck-btn" href="${p(e.url||"#")}" style="${i}">${b(e.text)}</a>`}function He(){return`
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
#editable-page-root .puck-title{
  font-family:'Playfair Display',serif;
  margin:0 0 14px;
  line-height:1.05;
  text-decoration:none;
  border:0;
}
#editable-page-root .puck-subtitle{margin:0 0 14px;color:var(--amber);font-style:italic;}
#editable-page-root .puck-body{line-height:1.65;margin:0 0 20px;}
#editable-page-root .puck-image{display:block;max-width:100%;height:auto;object-fit:cover;}
#editable-page-root .puck-buttons{display:flex;gap:14px;flex-wrap:wrap;margin-top:22px;justify-content:center;}
#editable-page-root .puck-site-header,
#editable-page-root .puck-header-nav,
#editable-page-root .puck-buttons,
#editable-page-root .puck-dropdown{
  overflow:visible!important;
}

#editable-page-root .puck-site-header{
  z-index:9999;
}

#editable-page-root .puck-dropdown{
  position:relative;
  display:inline-flex;
  z-index:10;
}

#editable-page-root .puck-dropdown:hover,
#editable-page-root .puck-dropdown:focus-within{
  z-index:1000000;
}

#editable-page-root .puck-dropdown::after{
  content:"";
  position:absolute;
  left:0;
  right:0;
  top:100%;
  height:14px;
}

#editable-page-root .puck-dropdown-menu{
  display:none;
  position:absolute;
  top:calc(100% + 10px);
  left:50%;
  transform:translateX(-50%);
  min-width:190px;
  padding:10px;
  background:rgba(0,0,0,.96);
  border:1px solid rgba(57,255,20,.55);
  border-radius:16px;
  box-shadow:0 0 24px rgba(57,255,20,.35);
  z-index:1000001;
}

#editable-page-root .puck-dropdown:hover .puck-dropdown-menu,
#editable-page-root .puck-dropdown:focus-within .puck-dropdown-menu{
  display:grid;
  gap:6px;
}

#editable-page-root .puck-dropdown-menu a{
  display:block;
  color:#ffffff;
  text-decoration:none;
  font-weight:700;
  font-size:14px;
  padding:10px 12px;
  border-radius:10px;
  text-transform:uppercase;
}

#editable-page-root .puck-dropdown-menu a:hover{
  background:rgba(57,255,20,.16);
}

#editable-page-root .puck-buttons .primary-btn:hover,#editable-page-root .puck-buttons .secondary-btn:hover{box-shadow:inherit;}
#editable-page-root .layout-text-left .puck-buttons,#editable-page-root .layout-text-right .puck-buttons{justify-content:flex-start;}
#editable-page-root .puck-social-links{
  display:flex;
  gap:14px;
  justify-content:center;
  align-items:center;
  flex-wrap:wrap;
}

#editable-page-root .puck-social-links .social-link{
  width:44px!important;
  height:44px!important;
  min-width:44px!important;
  min-height:44px!important;
  max-width:44px!important;
  max-height:44px!important;
  padding:0!important;
  display:inline-flex!important;
  align-items:center!important;
  justify-content:center!important;
  border-style:solid!important;
  border-width:1px!important;
  border-radius:999px!important;
  box-sizing:border-box!important;
  text-decoration:none!important;
}

#editable-page-root .puck-social-links .social-link svg{
  display:block!important;
  width:var(--social-svg-size,22px)!important;
  height:var(--social-svg-size,22px)!important;
  min-width:var(--social-svg-size,22px)!important;
  min-height:var(--social-svg-size,22px)!important;
  max-width:var(--social-svg-size,22px)!important;
  max-height:var(--social-svg-size,22px)!important;
  fill:currentColor!important;
}

#editable-page-root .puck-social-letter{
  display:inline-flex!important;
  align-items:center!important;
  justify-content:center!important;
  font-weight:900;
  font-size:16px;
  line-height:1;
  letter-spacing:.02em;
}
#editable-page-root .puck-columns{display:grid;grid-template-columns:repeat(var(--cols,2),1fr);gap:var(--gap,24px);}
#editable-page-root .puck-card{padding:24px;border:1px solid rgba(255,255,255,.12);border-radius:12px;background:rgba(255,255,255,.03);}
#editable-page-root{
  width:100%!important;
  max-width:100%!important;
  overflow-x:visible!important;
}

#editable-page-root .puck-spacer{width:100%;}

#editable-page-root .graverobber-contact-form-section{
  margin-top:0!important;
  position:relative;
  z-index:20;
  background:
    radial-gradient(circle at center top, rgba(0,255,4,.72), rgba(0,255,4,.28) 26%, rgba(0,0,0,0) 56%),
    #000000!important;
  padding:30px 24px 80px!important;
  border-bottom:0!important;
  overflow:hidden!important;
}

#editable-page-root .graverobber-contact-form-section::before{
  content:"";
  position:absolute;
  left:50%;
  top:34px;
  transform:translateX(-50%);
  width:min(1100px, calc(100% + 180px));
  height:760px;

  background:
    radial-gradient(
      ellipse at center,
      rgba(0,0,0,.96) 0%,
      rgba(0,0,0,.92) 26%,
      rgba(0,0,0,.82) 42%,
      rgba(0,0,0,.58) 58%,
      rgba(0,0,0,.28) 74%,
      rgba(0,0,0,0) 100%
    );

  filter:blur(18px);

  z-index:0;
  pointer-events:none;
}

#editable-page-root .graverobber-contact-inner{
  position:relative;
  z-index:2;
}

body:has(#editable-page-root .graverobber-contact-form-section),
html:has(#editable-page-root .graverobber-contact-form-section),
#editable-page-root:has(.graverobber-contact-form-section){
  background:#000000!important;
}

#editable-page-root .graverobber-contact-form-section + .puck-spacer,
#editable-page-root .graverobber-contact-form-section + .puck-section:empty{
  display:none!important;
}

#editable-page-root .graverobber-contact-form-section ~ .puck-section,
#editable-page-root .graverobber-contact-form-section ~ footer{
  background:#000000!important;
  border-top:0!important;
}

#editable-page-root .graverobber-contact-inner{
  display:flex;
  justify-content:center;
  align-items:flex-start;
}


#editable-page-root .graverobber-custom-contact-form{
  margin-top:0!important;
  width:min(720px, calc(100vw - 32px))!important;
  max-width:720px!important;
  min-width:0!important;
  margin:0 auto!important;
  padding:clamp(16px, 4vw, 26px)!important;
  background:#000000;
  border:1px solid #00ff04;
  border-radius:22px;
  box-shadow:0 0 24px #00ff04;
  box-sizing:border-box;
  display:grid;
  gap:18px;
}

#editable-page-root .graverobber-custom-contact-form label{
  display:grid;
  gap:8px;
  color:#bb00ff;
  font-weight:800;
  text-transform:uppercase;
}

#editable-page-root .graverobber-custom-contact-form input,
#editable-page-root .graverobber-custom-contact-form textarea{
  width:100%;
  background:#000000;
  color:#bb00ff;
  border:1px solid #00ff04;
  box-shadow:0 0 24px #00ff04;
  border-radius:14px;
  padding:14px 16px;
  box-sizing:border-box;
  font:inherit;
}

#editable-page-root .graverobber-custom-contact-form button{
  justify-self:center;
  background:#000000;
  color:#bb00ff;
  border:1px solid #00ff04;
  box-shadow:0 0 24px #00ff04;
  border-radius:999px;
  padding:14px 34px;
  font-weight:900;
  text-transform:uppercase;
  cursor:pointer;
}

#editable-page-root .graverobber-contact-success{
  color:#00ff04;
  text-align:center;
  margin:0;
  font-size:15px;
  font-weight:800;
  text-transform:uppercase;
}

#editable-page-root .graverobber-hidden-submit-frame{
  display:none!important;
  width:0!important;
  height:0!important;
  min-width:0!important;
  min-height:0!important;
  max-width:0!important;
  max-height:0!important;
  border:0!important;
  outline:0!important;
  visibility:hidden!important;
  position:absolute!important;
  left:-99999px!important;
  pointer-events:none!important;
}

#editable-page-root .graverobber-contact-form-wrap{
  width:100%;
  max-width:720px;
  margin:0 auto;
  padding:18px;
  background:#000000;
  border:1px solid #00ff04;
  border-radius:22px;
  box-shadow:0 0 24px #00ff04;
  box-sizing:border-box;
}

#editable-page-root .graverobber-contact-form,
#editable-page-root .graverobber-contact-form-wrap iframe{
  display:block;
  width:100%!important;
  max-width:100%!important;
  min-height:721px;
  border:1px solid #00ff04!important;
  border-radius:16px;
  box-shadow:0 0 24px #00ff04;
  background:#000000;
}

#editable-page-root hr,
#editable-page-root .section-divider,
#editable-page-root .divider{
  display:none!important;
}

#editable-page-root .puck-section,
#editable-page-root .puck-spacer,
#editable-page-root .puck-flex,
#editable-page-root .puck-inner,
#editable-page-root .puck-text,
#editable-page-root .puck-title,
#editable-page-root .band-name,
#editable-page-root .tagline,
#editable-page-root .description{
  border:0!important;
  outline:0!important;
  text-decoration:none!important;
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

#editable-page-root .puck-gallery-grid{
  display:grid;
  grid-template-columns:repeat(var(--cols,3),1fr);
  gap:var(--gap,18px);
}

#editable-page-root .puck-gallery-item{
  margin:0;
  border-radius:16px;
  overflow:hidden;
  background:rgba(255,255,255,.04);
  border:1px solid rgba(255,255,255,.12);
}

#editable-page-root .puck-gallery-item img{
  display:block;
  width:100%;
  height:260px;
  object-fit:cover;
}

#editable-page-root .puck-gallery-open{
  display:block;
  cursor:zoom-in;
}

#editable-page-root .puck-gallery-item{
  transition:transform .2s ease, box-shadow .2s ease;
}

#editable-page-root .puck-gallery-item:hover{
  transform:scale(1.04);
  box-shadow:0 0 34px rgba(57,255,20,.35);
}

#editable-page-root .puck-gallery-modal{
  display:none;
  position:fixed;
  inset:0;
  z-index:999999;
  align-items:center;
  justify-content:center;
  padding:24px;
}

#editable-page-root .puck-gallery-modal:target{
  display:flex;
}

#editable-page-root .puck-gallery-modal-backdrop{
  position:absolute;
  inset:0;
  background:rgba(0,0,0,.88);
}

#editable-page-root .puck-gallery-modal-content{
  position:relative;
  z-index:1;
  max-width:min(1100px, 94vw);
  max-height:92vh;
  text-align:center;
}

#editable-page-root .puck-gallery-modal-content img{
  display:block!important;
  width:auto!important;
  height:auto!important;
  max-width:min(92vw,1100px)!important;
  max-height:82vh!important;
  object-fit:contain!important;
  margin:0 auto!important;
  border-radius:16px!important;
  box-shadow:0 0 50px rgba(57,255,20,.28)!important;
}

#editable-page-root .puck-gallery-close{
  position:absolute;
  top:-18px;
  right:-18px;
  width:42px;
  height:42px;
  border-radius:999px;
  background:#000;
  color:#fff;
  border:1px solid rgba(57,255,20,.65);
  display:flex;
  align-items:center;
  justify-content:center;
  text-decoration:none;
  font-size:30px;
  line-height:1;
  box-shadow:0 0 22px rgba(57,255,20,.35);
}

#editable-page-root .puck-gallery-modal-content p{
  color:#fff;
  margin:12px 0 0;
}

#editable-page-root .puck-gallery-item figcaption{
  padding:10px 12px;
  font-size:14px;
  color:inherit;
}

#editable-page-root .gr-graffiti-inner{
  --gr-graffiti-accent:#00ff04;
  --gr-graffiti-panel:rgba(0,0,0,.72);
  --gr-graffiti-border:#bb00ff;
}

#editable-page-root .gr-graffiti-copy{
  max-width:850px;
  margin:0 auto 28px;
  text-align:center;
}

#editable-page-root .gr-graffiti-layout{
  display:grid;
  grid-template-columns:minmax(0,440px) minmax(0,1fr);
  gap:22px;
  align-items:start;
}

#editable-page-root .gr-graffiti-form,
#editable-page-root .gr-graffiti-post{
  background:var(--gr-graffiti-panel);
  border:1px solid var(--gr-graffiti-border);
  border-radius:18px;
  box-shadow:0 0 28px color-mix(in srgb,var(--gr-graffiti-accent),transparent 72%);
}

#editable-page-root .gr-graffiti-form{
  display:grid;
  gap:14px;
  padding:18px;
}

#editable-page-root .gr-graffiti-form label{
  display:grid;
  gap:8px;
  color:var(--gr-graffiti-accent);
  font-weight:800;
  text-transform:uppercase;
}

#editable-page-root .gr-graffiti-form input,
#editable-page-root .gr-graffiti-form textarea{
  width:100%;
  box-sizing:border-box;
  border:1px solid rgba(255,255,255,.2);
  border-radius:12px;
  background:#050505;
  color:#ffffff;
  padding:12px;
}

#editable-page-root .gr-graffiti-canvas{
  width:100%;
  height:260px;
  border:1px solid var(--gr-graffiti-accent);
  border-radius:14px;
  background:#111;
  touch-action:none;
  cursor:crosshair;
}

#editable-page-root .gr-graffiti-tools{
  display:flex;
  gap:10px;
  align-items:center;
  flex-wrap:wrap;
}

#editable-page-root .gr-graffiti-tools input[type="range"]{
  width:130px;
}

#editable-page-root .gr-graffiti-form button{
  border:1px solid var(--gr-graffiti-accent);
  border-radius:999px;
  background:#000000;
  color:var(--gr-graffiti-accent);
  padding:12px 18px;
  font-weight:900;
  text-transform:uppercase;
  cursor:pointer;
  box-shadow:0 0 18px color-mix(in srgb,var(--gr-graffiti-accent),transparent 58%);
}

#editable-page-root .gr-graffiti-status{
  min-height:22px;
  color:var(--gr-graffiti-accent);
  font-weight:800;
}

#editable-page-root .gr-graffiti-posts{
  display:grid;
  gap:16px;
}

#editable-page-root .gr-graffiti-post{
  padding:16px;
}

#editable-page-root .gr-graffiti-post strong{
  color:var(--gr-graffiti-accent);
}

#editable-page-root .gr-graffiti-post img{
  display:block;
  width:100%;
  max-height:360px;
  object-fit:contain;
  margin:12px 0 0;
  border-radius:14px;
  background:#050505;
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
  filter:drop-shadow(var(--logo-image-shadow, none))!important;
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

#editable-page-root #upcoming-shows,
#editable-page-root #past-shows {
  display: grid;
  gap: 18px;
  width: 100%;
  max-width: 900px;
  margin: 24px auto;
}

#editable-page-root .show-card {
  display: grid;
  grid-template-columns: 180px 1fr;
  gap: 18px;
  align-items: center;
  padding: 18px;
  border-radius: 18px;
  background: rgba(0,0,0,.32);
  border: 1px solid rgba(0,255,4,.32);
  box-shadow: 0 0 22px rgba(0,255,4,.14);
}

#editable-page-root .show-card > .show-card-image,
#editable-page-root img.show-card-image {
  display:block!important;
  width:180px!important;
  height:180px!important;
  min-width:180px!important;
  min-height:180px!important;
  max-width:180px!important;
  max-height:180px!important;
  object-fit:contain!important;
  object-position:center!important;
  border-radius:14px!important;
  background:rgba(0,0,0,.35)!important;
  border:1px solid rgba(255,255,255,.16)!important;
  box-sizing:border-box!important;
}

#editable-page-root .show-card-content {
  text-align: left;
}

#editable-page-root .show-card-content h3 {
  margin: 6px 0;
}

#editable-page-root .show-date {
  color: #00ff04;
}

#editable-page-root .show-modal{
  display:none;
  position:fixed;
  inset:0;
  z-index:999999;
  align-items:center;
  justify-content:center;
  padding:24px;
}

#editable-page-root .show-modal:target,
#editable-page-root .show-modal.is-open{
  display:flex;
}

#editable-page-root .show-modal-backdrop{
  position:absolute;
  inset:0;
  background:rgba(0,0,0,.88);
}

#editable-page-root .show-modal-content{
  position:relative;
  z-index:1;
  width:min(92vw,900px);
  max-height:90vh;
  overflow:auto;
  padding:24px;
  border-radius:22px;
  background:#050505;
  border:1px solid rgba(0,255,4,.35);
  box-shadow:0 0 40px rgba(0,255,4,.2);
}

#editable-page-root .show-modal-content img{
  display:block!important;
  width:auto!important;
  height:auto!important;
  max-width:320px!important;
  max-height:320px!important;
  object-fit:contain!important;
  margin:18px auto!important;
  border-radius:16px!important;
}

#editable-page-root .show-modal-close{
  position:absolute;
  top:14px;
  right:14px;
  width:42px;
  height:42px;
  border-radius:999px;
  background:#000;
  color:#fff;
  border:1px solid rgba(0,255,4,.45);
  display:flex;
  align-items:center;
  justify-content:center;
  text-decoration:none;
  font-size:28px;
}

@media(max-width: 700px) {
  #editable-page-root .show-card {
    grid-template-columns: 1fr;
    text-align: center;
  }

  #editable-page-root .show-card-image {
    margin: 0 auto;
  }

  #editable-page-root .show-card-content {
    text-align: center;
  }
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

  #editable-page-root .gr-graffiti-layout{
    grid-template-columns:1fr!important;
  }

#editable-page-root img:not(.show-card-image),
#editable-page-root video,
#editable-page-root iframe,
#editable-page-root .puck-image{
  display:block!important;
  max-width:100%!important;
  height:auto!important;
}

#editable-page-root video,
#editable-page-root iframe{
  width:100%!important;
}

#editable-page-root .puck-mobile-sized-image{
  display:block!important;
  width:var(--mobile-image-width, 70vw)!important;
  max-width:var(--mobile-image-width, 70vw)!important;
  height:auto!important;
  margin-left:auto!important;
  margin-right:auto!important;
  object-fit:contain!important;
}

#editable-page-root img.show-card-image{
  width:180px!important;
  height:180px!important;
  max-width:180px!important;
  max-height:180px!important;
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

#editable-page-root .graverobber-contact-form-section,
#editable-page-root .graverobber-signup-form-section{
  width:100vw!important;
  max-width:100vw!important;
  padding:18px 12px 60px!important;
  overflow:hidden!important;
}

#editable-page-root .graverobber-contact-inner{
  width:100%!important;
  max-width:100%!important;
  padding:0!important;
  display:flex!important;
  justify-content:center!important;
}

#editable-page-root .graverobber-custom-contact-form{
  width:100%!important;
  max-width:360px!important;
  min-width:0!important;
  margin:0 auto!important;
  padding:16px!important;
  gap:14px!important;
  border-radius:18px!important;
}

#editable-page-root .graverobber-custom-contact-form label{
  width:100%!important;
  font-size:14px!important;
  line-height:1.25!important;
}

#editable-page-root .graverobber-custom-contact-form input,
#editable-page-root .graverobber-custom-contact-form textarea{
  display:block!important;
  width:100%!important;
  max-width:100%!important;
  min-width:0!important;
  padding:13px!important;
  font-size:16px!important;
  border-radius:12px!important;
  outline:0!important;
  appearance:none!important;
  -webkit-appearance:none!important;
}

#editable-page-root .graverobber-custom-contact-form textarea{
  min-height:150px!important;
  resize:vertical!important;
}

#editable-page-root .graverobber-custom-contact-form button{
  width:100%!important;
  max-width:260px!important;
  padding:16px!important;
  font-size:15px!important;
  justify-self:center!important;
}

#editable-page-root .graverobber-contact-success{
  font-size:13px!important;
  line-height:1.4!important;
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

#editable-page-root .show-card-clickable {
  color: inherit;
  text-decoration: none;
  cursor: pointer;
}

#editable-page-root .show-modal{
  display:none;
  position:fixed;
  inset:0;
  z-index:999999;
  align-items:center;
  justify-content:center;
  padding:24px;
}

#editable-page-root .show-modal:target,
#editable-page-root .show-modal.is-open{
  display:flex;
}

#editable-page-root .show-modal-backdrop{
  position:absolute;
  inset:0;
  background:rgba(0,0,0,.88);
}

#editable-page-root .show-modal-content{
  position:relative;
  z-index:1;
  width:min(92vw,900px);
  max-height:90vh;
  overflow:auto;
  padding:24px;
  border-radius:22px;
  background:#050505;
  border:1px solid rgba(0,255,4,.45);
  box-shadow:0 0 50px rgba(187,0,255,.38);
  color:#ffffff;
}

#editable-page-root .show-modal-content img{
  display:block!important;
  width:auto!important;
  height:auto!important;
  max-width:320px!important;
  max-height:320px!important;
  object-fit:contain!important;
  margin:18px auto!important;
  border-radius:16px!important;
}

#editable-page-root .show-modal-close{
  position:absolute;
  top:14px;
  right:14px;
  width:42px;
  height:42px;
  border-radius:999px;
  background:#000;
  color:#fff;
  border:1px solid rgba(0,255,4,.65);
  box-shadow:0 0 24px rgba(187,0,255,.45);
  display:flex;
  align-items:center;
  justify-content:center;
  text-decoration:none;
  font-size:28px;
}

}

#editable-page-root .show-card-clickable {
  color: inherit;
  text-decoration: none;
  cursor: pointer;
}

#editable-page-root .show-modal{
  display:none;
  position:fixed;
  inset:0;
  z-index:999999;
  align-items:center;
  justify-content:center;
  padding:24px;
}

#editable-page-root .show-modal.is-open{
  display:flex;
}

#editable-page-root .show-modal-backdrop{
  position:absolute;
  inset:0;
  background:rgba(0,0,0,.88);
}

#editable-page-root .show-modal-content{
  position:relative;
  z-index:1;
  width:min(92vw,900px);
  max-height:90vh;
  overflow:auto;
  padding:24px;
  border-radius:22px;
  background:#050505;
  border:1px solid rgba(0,255,4,.45);
  box-shadow:0 0 50px rgba(187,0,255,.38);
  color:#ffffff;
}

#editable-page-root .show-modal-content img{
  display:block!important;
  width:auto!important;
  height:auto!important;
  max-width:320px!important;
  max-height:320px!important;
  object-fit:contain!important;
  margin:18px auto!important;
  border-radius:16px!important;
}

#editable-page-root .show-modal-close{
  position:absolute;
  top:14px;
  right:14px;
  width:42px;
  height:42px;
  border-radius:999px;
  background:#000;
  color:#fff;
  border:1px solid rgba(0,255,4,.65);
  box-shadow:0 0 24px rgba(187,0,255,.45);
  display:flex;
  align-items:center;
  justify-content:center;
  text-decoration:none;
  font-size:28px;
}
`}function De(e){return z(e.fontUrl)}function Ye(e){const t=(e.buttons||[]).map(P).join("");return`<header class="puck-site-header ${e.headerPosition==="full"?"is-full-width":""}" style="${c({background:e.backgroundColor||"rgba(0,0,0,.72)",borderBottom:e.lineColor?`1px solid ${e.lineColor}`:"none",boxShadow:e.lineShadow||"none",width:e.width||"100%",maxWidth:e.maxWidth||"none",margin:e.margin||"0",padding:e.padding||"22px 40px"})}">
    <div class="puck-header-left">
      ${e.logoUrl&&e.logoPlacement!=="right"?`<a class="puck-header-logo-link logo-left" href="index.html" style="${c({"--logo-size":e.logoSize||"45px",background:e.logoBackgroundColor||"transparent",border:`${e.logoBorderWidth||"0px"} solid ${e.logoBorderColor||"transparent"}`,borderRadius:e.logoRadius||"999px",padding:e.logoPadding||"0px",boxShadow:e.logoBoxShadow||"none","--logo-image-shadow":e.logoImageShadow||"none"})}"><img class="puck-header-logo" src="${p(e.logoUrl)}" alt="${p(e.logoAlt||"Logo")}"></a>`:""}
      ${e.showBack!=="hide"?`<a class="puck-header-back" href="${p(e.backUrl||"index.html")}">${b(e.backText||"Back")}</a>`:""}
    </div>
    <nav class="puck-header-nav nav-${p(e.navPlacement||"right")}">${t}</nav>
    <div class="puck-header-right">
      ${e.logoUrl&&e.logoPlacement==="right"?`<a class="puck-header-logo-link logo-right" href="index.html" style="${c({"--logo-size":e.logoSize||"45px",background:e.logoBackgroundColor||"transparent",border:`${e.logoBorderWidth||"0px"} solid ${e.logoBorderColor||"transparent"}`,borderRadius:e.logoRadius||"999px",padding:e.logoPadding||"0px",boxShadow:e.logoBoxShadow||"none","--logo-image-shadow":e.logoImageShadow||"none"})}"><img class="puck-header-logo" src="${p(e.logoUrl)}" alt="${p(e.logoAlt||"Logo")}"></a>`:""}
    </div>
  </header>`}function Xe(e){const t=e.items||[],a=[...t,...t].map(i=>`<span class="song-name" style="${c({color:e.textColor||"var(--cream)",textShadow:e.textShadow||"none",borderColor:e.buttonBorderColor||"rgba(212, 162, 76, 0.25)"})}">${b(i.text)}</span>`).join("");return`<section class="songs-section puck-song-scroll ${e.stretchMode==="full"?"is-full-width":""}" aria-label="Songs We Play" style="${c({background:e.backgroundColor||"linear-gradient(90deg, var(--blue-deep) 0%, var(--charcoal-light) 50%, var(--blue-deep) 100%)",borderBottom:e.lineColor?`1px solid ${e.lineColor}`:"none",width:e.width||"100%",maxWidth:e.maxWidth||"none",margin:e.margin||"0"})}"><div class="songs-scroll-container"><div class="songs-scroll puck-song-track">${a}</div></div></section>`}function _e(e){const t=Array.from({length:8}).map(()=>"<span></span>").join(""),a=(e.buttons||[]).map(P).join(""),i=u(e.noThanksText)?`<button class="puck-btn gr-exit-popup-no-thanks" type="button" style="${c({background:e.noThanksBackgroundColor||"transparent",color:e.noThanksTextColor||"#ffffff",border:`1px solid ${e.noThanksBorderColor||"rgba(255,255,255,.45)"}`,borderRadius:"999px",padding:"16px 34px",fontFamily:"Oswald, sans-serif",fontSize:"16px",fontWeight:"700",textTransform:"uppercase",cursor:"pointer"})}">${b(e.noThanksText)}</button>`:"",r=`gr-exit-popup-${Math.random().toString(36).slice(2)}`;return`${z(e.customFontUrl)}
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Creepster&family=Special+Elite&family=Oswald:wght@400;700;900&display=swap');

    #editable-page-root .gr-exit-popup-wrap{
      position:fixed;
      inset:0;
      z-index:999999;
      display:none;
      align-items:center;
      justify-content:center;
      padding:24px;
      pointer-events:none;
    }

    #editable-page-root .gr-exit-popup-wrap.is-visible{
      display:flex;
    }

    #editable-page-root .gr-exit-popup-backdrop{
      position:absolute;
      inset:0;
      background:rgba(0,0,0,.82);
      backdrop-filter:blur(8px);
      pointer-events:auto;
    }

    #editable-page-root .gr-exit-popup-card{
      width:min(100%, var(--gr-width));
      pointer-events:auto;
    }

    #editable-page-root .gr-exit-popup-close{
      position:absolute;
      top:14px;
      right:16px;
      z-index:5;
      width:44px;
      height:44px;
      border-radius:999px;
      border:2px solid #00ff04;
      background:#000000;
      color:#00ff04;
      font-size:28px;
      line-height:1;
      cursor:pointer;
      box-shadow:0 0 24px rgba(0,255,4,.7);
    }

    #editable-page-root .gr-theme-toxic{background:linear-gradient(135deg,rgba(0,0,0,.96),rgba(0,45,2,.92))!important;border-color:#00ff04!important;box-shadow:0 0 44px rgba(0,255,4,.75),inset 0 0 44px rgba(0,255,4,.16)!important;}
    #editable-page-root .gr-theme-toxic .gr-welcome-title{color:#00ff04!important;filter:drop-shadow(0 0 18px #00ff04);}
    #editable-page-root .gr-theme-toxic:after{content:"";position:absolute;inset:0;background:repeating-linear-gradient(115deg,rgba(0,255,4,.08) 0 2px,transparent 2px 18px);pointer-events:none;}

    #editable-page-root .gr-theme-crypt{background:linear-gradient(145deg,rgba(17,0,26,.96),rgba(0,0,0,.94))!important;border-color:#bb00ff!important;box-shadow:0 0 42px rgba(187,0,255,.75),inset 0 0 42px rgba(0,255,4,.18)!important;}
    #editable-page-root .gr-theme-crypt .gr-welcome-title{color:#bb00ff!important;letter-spacing:.06em;}

    #editable-page-root .gr-theme-fog{background:radial-gradient(circle at center,rgba(30,30,30,.96),rgba(0,0,0,.98))!important;border-color:rgba(255,255,255,.28)!important;box-shadow:0 0 50px rgba(255,255,255,.26),inset 0 0 40px rgba(255,255,255,.1)!important;}
    #editable-page-root .gr-theme-fog .gr-welcome-title{color:#f2f2f2!important;}
    #editable-page-root .gr-theme-fog:after{content:"";position:absolute;inset:-40%;background:radial-gradient(circle,rgba(255,255,255,.16),transparent 38%);filter:blur(24px);animation:grFogDrift 7s ease-in-out infinite alternate;pointer-events:none;}

    #editable-page-root .gr-theme-slide-left{background:linear-gradient(90deg,rgba(0,0,0,.98),rgba(70,0,0,.92))!important;border-color:#ff0033!important;box-shadow:0 0 44px rgba(255,0,51,.55),inset 0 0 35px rgba(187,0,255,.24)!important;}
    #editable-page-root .gr-theme-slide-left .gr-welcome-title{color:#ffffff!important;text-shadow:4px 0 0 #bb00ff,-4px 0 0 #00ff04,0 0 28px #ff0033!important;}

    #editable-page-root .gr-theme-slide-top{background:linear-gradient(180deg,rgba(35,0,52,.98),rgba(0,0,0,.96))!important;border-color:#bb00ff!important;box-shadow:0 0 44px rgba(187,0,255,.62),inset 0 0 36px rgba(0,255,4,.2)!important;}
    #editable-page-root .gr-theme-slide-top:after{content:"";position:absolute;left:0;right:0;top:0;height:45%;background:linear-gradient(180deg,rgba(187,0,255,.28),transparent);pointer-events:none;}

    #editable-page-root .gr-theme-particles{background:radial-gradient(circle at center,rgba(0,35,2,.98),rgba(0,0,0,.98))!important;border-color:#00ff04!important;box-shadow:0 0 48px rgba(0,255,4,.65),inset 0 0 42px rgba(187,0,255,.22)!important;}
    #editable-page-root .gr-theme-particles .gr-welcome-content{animation:grAssembleContent 1.4s ease-out both;}
    #editable-page-root .gr-theme-particles .gr-welcome-title{animation:grTextAssemble 1.6s ease-out both;}
    #editable-page-root .gr-theme-particles .gr-welcome-body{animation:grTextAssemble 1.9s ease-out both;}

    #editable-page-root .gr-theme-glitch{background:linear-gradient(135deg,rgba(0,0,0,.98),rgba(18,0,26,.96))!important;border-color:#00ff04!important;box-shadow:0 0 44px rgba(187,0,255,.6),inset 0 0 36px rgba(0,255,4,.18)!important;}
    #editable-page-root .gr-theme-glitch .gr-welcome-title{animation:grDemonGlitch 1.4s steps(2,end) infinite;color:#00ff04!important;text-shadow:3px 0 #bb00ff,-3px 0 #00ff04,0 0 30px #00ff04!important;}

    #editable-page-root .gr-theme-tomb{background:linear-gradient(135deg,rgba(0,0,0,.98),rgba(0,22,1,.94),rgba(40,0,60,.88))!important;border-color:#00ff04!important;box-shadow:0 0 24px #00ff04,0 0 56px rgba(187,0,255,.75),inset 0 0 38px rgba(0,255,4,.2)!important;}

    @keyframes grFogDrift{from{transform:translate(-8%,-4%) scale(1)}to{transform:translate(8%,4%) scale(1.18)}}
    @keyframes grAssembleContent{0%{opacity:0;filter:blur(18px);transform:scale(1.2)}100%{opacity:1;filter:blur(0);transform:scale(1)}}
    @keyframes grTextAssemble{0%{opacity:0;letter-spacing:.55em;filter:blur(12px);transform:translateY(28px) scale(1.25)}100%{opacity:1;letter-spacing:normal;filter:blur(0);transform:none}}
    @keyframes grDemonGlitch{0%,100%{transform:none}20%{transform:translate(-3px,2px) skewX(8deg)}40%{transform:translate(3px,-2px) skewX(-8deg)}60%{transform:translate(-2px,0)}80%{transform:translate(2px,1px)}}

    #editable-page-root .gr-welcome-card{
      position:relative;
      overflow:hidden;
      margin:0 auto;
      padding:42px 28px;
      border:2px solid var(--gr-border);
      border-radius:var(--gr-radius);
      max-width:var(--gr-width);
      text-align:var(--gr-align);
      background:var(--gr-bg);
      box-shadow:
        0 0 28px color-mix(in srgb,var(--gr-glow),transparent 35%),
        inset 0 0 34px rgba(187,0,255,.2);
    }

    #editable-page-root .gr-welcome-card:before{
      content:"";
      position:absolute;
      inset:-2px;
      background:
        radial-gradient(circle at 20% 20%,rgba(0,255,4,.28),transparent 28%),
        radial-gradient(circle at 80% 70%,rgba(187,0,255,.32),transparent 32%);
      pointer-events:none;
    }

    #editable-page-root .gr-welcome-content{
      position:relative;
      z-index:2;
    }

    #editable-page-root .gr-welcome-eyebrow{
      margin:0 0 12px;
      color:#bb00ff;
      font-family:Oswald,sans-serif;
      font-weight:900;
      letter-spacing:.24em;
      text-transform:uppercase;
      text-shadow:0 0 16px rgba(187,0,255,.9);
    }

    #editable-page-root .gr-welcome-title{
      margin:0;
      color:var(--gr-title);
      font-family:var(--gr-title-font);
      font-size:var(--gr-title-size);
      line-height:.95;
      text-shadow:var(--gr-title-shadow);
      text-transform:uppercase;
    }

    #editable-page-root .gr-welcome-body{
      margin:22px auto 0;
      color:var(--gr-body);
      font-family:var(--gr-body-font);
      font-size:var(--gr-body-size);
      line-height:1.55;
      max-width:760px;
    }

    #editable-page-root .gr-welcome-particles{
      position:absolute;
      inset:0;
      pointer-events:none;
      z-index:1;
    }

    #editable-page-root .gr-welcome-particles span{
      position:absolute;
      width:7px;
      height:7px;
      border-radius:999px;
      background:#00ff04;
      box-shadow:0 0 18px #00ff04;
      animation:grParticle 1.8s ease-out both;
    }

    #editable-page-root .gr-welcome-particles span:nth-child(1){left:8%;top:20%;animation-delay:.02s}
    #editable-page-root .gr-welcome-particles span:nth-child(2){left:18%;top:80%;animation-delay:.08s}
    #editable-page-root .gr-welcome-particles span:nth-child(3){left:32%;top:12%;animation-delay:.14s}
    #editable-page-root .gr-welcome-particles span:nth-child(4){left:48%;top:92%;animation-delay:.2s}
    #editable-page-root .gr-welcome-particles span:nth-child(5){left:68%;top:18%;animation-delay:.26s}
    #editable-page-root .gr-welcome-particles span:nth-child(6){left:88%;top:74%;animation-delay:.32s}
    #editable-page-root .gr-welcome-particles span:nth-child(7){left:78%;top:45%;animation-delay:.38s}
    #editable-page-root .gr-welcome-particles span:nth-child(8){left:42%;top:52%;animation-delay:.44s}

    #editable-page-root .gr-anim-pop{
      animation:grPop .9s cubic-bezier(.2,1.25,.35,1) both;
    }

    #editable-page-root .gr-anim-bounce{
      animation:grBounce 1.1s both;
    }

    #editable-page-root .gr-anim-fade{
      animation:grFade 1.4s both;
    }

    #editable-page-root .gr-anim-left{
      animation:grLeft 1s both;
    }

    #editable-page-root .gr-anim-right{
      animation:grRight 1s both;
    }

    #editable-page-root .gr-anim-top{
      animation:grTop 1s both;
    }

    #editable-page-root .gr-anim-bottom{
      animation:grBottom 1s both;
    }

    #editable-page-root .gr-anim-particles{
      animation:grParticlesIn 1.4s both;
    }

    #editable-page-root .gr-anim-glitch{
      animation:grGlitch 1.2s steps(2,end) both;
    }

    @keyframes grPop{
      0%{opacity:0;transform:scale(.45) rotate(-4deg)}
      70%{opacity:1;transform:scale(1.08) rotate(1deg)}
      100%{transform:scale(1) rotate(0)}
    }

    @keyframes grBounce{
      0%{opacity:0;transform:scale(.2) translateY(80px)}
      55%{opacity:1;transform:scale(1.12) translateY(-18px)}
      75%{transform:scale(.96) translateY(8px)}
      100%{transform:scale(1) translateY(0)}
    }

    @keyframes grFade{
      from{opacity:0;filter:blur(18px)}
      to{opacity:1;filter:blur(0)}
    }

    @keyframes grLeft{
      from{opacity:0;transform:translateX(-120px)}
      to{opacity:1;transform:translateX(0)}
    }

    @keyframes grRight{
      from{opacity:0;transform:translateX(120px)}
      to{opacity:1;transform:translateX(0)}
    }

    @keyframes grTop{
      from{opacity:0;transform:translateY(-120px)}
      to{opacity:1;transform:translateY(0)}
    }

    @keyframes grBottom{
      from{opacity:0;transform:translateY(120px)}
      to{opacity:1;transform:translateY(0)}
    }

    @keyframes grParticlesIn{
      0%{
        opacity:0;
        transform:scale(.75);
        filter:blur(14px);
      }

      100%{
        opacity:1;
        transform:scale(1);
        filter:blur(0);
      }
    }

    @keyframes grGlitch{
      0%{opacity:0;transform:skewX(8deg)}
      20%{opacity:1;transform:translateX(-8px)}
      40%{transform:translateX(8px)}
      60%{transform:translateX(-4px)}
      80%{transform:translateX(4px)}
      100%{transform:none}
    }

    @keyframes grParticle{
      0%{
        opacity:0;
        transform:scale(0) translate(0,0);
      }

      50%{
        opacity:1;
      }

      100%{
        opacity:0;
        transform:scale(1.8) translate(26px,-34px);
      }
    }
  </style>

  <section
    id="${r}"
    class="puck-section gr-exit-popup-wrap"
    style="${c({background:e.backgroundColor||"transparent",padding:`${e.paddingY||70}px ${e.paddingX||24}px`})}"
  >
    <div class="gr-exit-popup-backdrop"></div>

    <div
      class="gr-welcome-card gr-exit-popup-card gr-theme-${p(e.theme||"toxic")} gr-anim-${p(e.animationStyle||"pop")}"
      style="${c({"--gr-bg":e.cardBackground||"rgba(0,0,0,.92)","--gr-border":e.borderColor||"#bb00ff","--gr-glow":e.glowColor||"#00ff04","--gr-radius":e.radius||"28px","--gr-width":e.maxWidth||"920px","--gr-align":e.align||"center","--gr-title":e.titleColor||"#00ff04","--gr-title-font":e.titleFont||"Creepster, cursive","--gr-title-size":e.titleSize||"clamp(44px, 8vw, 92px)","--gr-title-shadow":e.titleShadow||"0 0 18px #00ff04","--gr-body":e.bodyColor||"#ffffff","--gr-body-font":e.bodyFont||"Special Elite, cursive","--gr-body-size":e.bodySize||"20px"})}"
    >
      <button class="gr-exit-popup-close" type="button">×</button>

      ${e.theme==="particles"||e.animationStyle==="particles"?`<div class="gr-welcome-particles" aria-hidden="true">${t}</div>`:""}

      <div class="gr-welcome-content">
        ${u(e.eyebrow)?`<p class="gr-welcome-eyebrow">${b(e.eyebrow)}</p>`:""}

        ${u(e.title)?`<h2 class="gr-welcome-title">${b(e.title)}</h2>`:""}

        ${u(e.body)?`<p class="gr-welcome-body">${E(e.body)}</p>`:""}

        ${a||i?`<div class="puck-buttons">${a}${i}</div>`:""}
      </div>
    </div>
  </section>

  <script>
    (function(){
      const popup = document.getElementById("${r}");
      if (!popup) return;

      let shown = false;
      let lastY = null;
      let hasBeenLowerOnPage = false;

      const triggerDistance = ${Number(e.exitTriggerDistance||120)};

      function showPopup(){
        if (shown) return;

        shown = true;
        popup.classList.add("is-visible");
      }

      function hidePopup(){
        popup.classList.remove("is-visible");
      }

      document.addEventListener("mousemove", function(event){
        const armedDistance = Math.max(triggerDistance + 180, 260);

        if (event.clientY >= armedDistance) {
          hasBeenLowerOnPage = true;
        }

        const movingUp = lastY !== null && event.clientY < lastY;
        const nearTop = event.clientY <= triggerDistance;

        if (hasBeenLowerOnPage && movingUp && nearTop) {
          showPopup();
        }

        lastY = event.clientY;
      });

      popup.addEventListener("click", function(event){
        if (
          event.target.classList.contains("gr-exit-popup-backdrop") ||
          event.target.classList.contains("gr-exit-popup-close") ||
          event.target.classList.contains("gr-exit-popup-no-thanks")
        ) {
          hidePopup();
        }
      });
    })();
  <\/script>`}function Z(e){const t=c({background:e.backgroundColor||"transparent",color:e.textColor||"inherit",padding:`${e.paddingY||70}px ${e.paddingX||24}px`}),a=c({width:e.imageWidth||"320px","--mobile-image-width":e.mobileImageWidth||e.imageWidth||"320px",borderRadius:e.imageRadius||"8px",boxShadow:e.imageShadow||"none"}),i=u(e.title)?`<h1 class="band-name puck-title" style="${c(S(e,"title"))}">${b(e.title)}</h1>`:"",r=u(e.subtitle)?`<p class="tagline puck-subtitle" style="${c(S(e,"subtitle"))}">${b(e.subtitle)}</p>`:"",n=u(e.body)?`<p class="description puck-body" style="${c(S(e,"body"))}">${E(e.body)}</p>`:"",d=(e.buttons||[]).map(P).join(""),s=i||r||n||d?`<div class="puck-text">${i}${r}${n}${d?`<div class="puck-buttons">${d}</div>`:""}</div>`:"",g=e.imageUrl?`<img class="puck-image puck-mobile-sized-image" src="${p(e.imageUrl)}" alt="${p(e.imageAlt||e.title||"Image")}" style="${a}">`:"";return`${z(e.customFontUrl)}<section class="puck-section" style="${t}"><div class="puck-inner puck-flex layout-${p(e.layout||"text-left")}" style="--gap:${Number(e.gap||50)}px;--max-width:${p(e.maxWidth||"1100px")}">${s}${g}</div></section>`}function Ve(e){const t=e.align||"center",a=c({background:e.backgroundColor||"transparent",color:e.textColor||"inherit",padding:`${e.paddingY||50}px ${e.paddingX||24}px`,textAlign:t}),i=u(e.eyebrow)?`<p class="teaser" style="${c(S(e,"eyebrow"))}">${b(e.eyebrow)}</p>`:"",r=u(e.title)?`<h2 class="puck-title" style="${c(S(e,"title"))}">${b(e.title)}</h2>`:"",n=u(e.body)?`<p class="puck-body" style="${c(S(e,"body"))}">${E(e.body)}</p>`:"",d=(e.buttons||[]).map(P).join("");return`${z(e.customFontUrl)}<section class="puck-section" style="${a}"><div class="puck-inner puck-text" style="max-width:${p(e.maxWidth||"850px")}">${i}${r}${n}${d?`<div class="puck-buttons">${d}</div>`:""}</div></section>`}function ee(e){const t=c({background:e.backgroundColor||"transparent",padding:`${e.paddingY||40}px ${e.paddingX||24}px`,textAlign:e.align||"center"}),a=c({width:e.width||"900px","--mobile-image-width":e.mobileWidth||e.width||"900px",borderRadius:e.radius||"8px",boxShadow:e.shadow||"none"}),i=u(e.title)?`<h2 class="puck-title" style="${c(S(e,"title"))}">${b(e.title)}</h2>`:"",r=e.imageUrl?`<img class="puck-image puck-mobile-sized-image" src="${p(e.imageUrl)}" alt="${p(e.imageAlt||e.title||"Image")}" style="${a}">`:"";return`${z(e.customFontUrl)}<section class="puck-section" style="${t}"><div class="puck-inner" style="max-width:${p(e.maxWidth||"1100px")}">${i}${r}</div></section>`}function qe(e){const t=c({background:e.backgroundColor||"transparent",color:e.textColor||"inherit",padding:`${e.paddingY||50}px ${e.paddingX||24}px`,textAlign:"center"}),a=(e.buttons||[]).map(P).join("");return a?`${z(e.customFontUrl)}<section class="puck-section" style="${t}"><div class="puck-inner"><div class="puck-buttons">${a}</div></div></section>`:""}function te(e){const t=c({background:e.backgroundColor||"transparent",color:e.textColor||"inherit",padding:`${e.paddingY||60}px ${e.paddingX||24}px`,textAlign:"center"}),a=e.links||[],i=u(e.title)?`<p class="teaser" style="${c({color:e.titleColor||"inherit",fontFamily:e.titleFont||"inherit",fontSize:e.titleSize||"inherit",fontWeight:e.titleWeight||"inherit"})}">${b(e.title)}</p>`:"",r=a.filter(n=>u(n.url)).map(n=>`<a class="social-link" href="${p(n.url)}" target="_blank" rel="noopener noreferrer" title="${p(n.label||n.platform)}" style="${c({background:n.backgroundColor||"rgba(255,255,255,.03)",color:n.iconColor||"inherit",border:`${n.borderWidth||"1px"} solid ${n.borderColor||"rgba(255,255,255,.18)"}`,boxShadow:n.boxShadow||"none",borderRadius:n.radius||"999px",width:n.size||"44px",height:n.size||"44px",minWidth:n.size||"44px",minHeight:n.size||"44px",padding:n.padding||"0px","--social-svg-size":n.svgSize||"22px"})}">${Ue(n.platform,n.label)}</a>`).join("");return!i&&!r?"":`<footer class="puck-section social-section is-full-width" style="${t}"><div class="puck-inner">${i}${r?`<nav class="puck-social-links social-links">${r}</nav>`:""}</div></footer>`}function Je(e){const t=c({background:e.backgroundColor||"transparent",color:e.textColor||"inherit",padding:`${e.paddingY||40}px ${e.paddingX||24}px`,textAlign:"center"}),a=u(e.title)?`<h2 class="puck-title" style="${c({color:e.titleColor||"inherit",fontFamily:e.titleFont||"inherit",fontSize:e.titleSize||"2.5rem"})}">${b(e.title)}</h2>`:"",i=(e.images||[]).filter(r=>u(r.imageUrl)).map((r,n)=>{const d=`gallery-modal-${n}`;return`
        <figure class="puck-gallery-item">
          <a href="#${d}" class="puck-gallery-open">
            <img src="${p(r.imageUrl)}" alt="${p(r.imageAlt||"Gallery image")}">
          </a>
          ${u(r.caption)?`<figcaption>${b(r.caption)}</figcaption>`:""}
        </figure>

        <div id="${d}" class="puck-gallery-modal">
          <a href="#" class="puck-gallery-modal-backdrop" aria-label="Close gallery image"></a>
          <div class="puck-gallery-modal-content">
            <a href="#" class="puck-gallery-close" aria-label="Close gallery image">×</a>
            <img src="${p(r.imageUrl)}" alt="${p(r.imageAlt||"Gallery image")}">
            ${u(r.caption)?`<p>${b(r.caption)}</p>`:""}
          </div>
        </div>
      `}).join("");return`<section class="puck-section" style="${t}"><div class="puck-inner">${a}<div class="puck-gallery-grid" style="--cols:${Number(e.columns||3)};--gap:${Number(e.gap||18)}px">${i}</div></div></section>`}function Ke(e){const t=c({background:e.backgroundColor||"transparent",color:e.textColor||"#ffffff",padding:`${e.paddingY||70}px ${e.paddingX||24}px`}),a=c({"--gr-graffiti-accent":e.accentColor||"#00ff04","--gr-graffiti-panel":e.panelBackground||"rgba(0,0,0,.72)","--gr-graffiti-border":e.borderColor||"#bb00ff"});return`<section class="puck-section gr-graffiti-wall" style="${t}">
    <div class="puck-inner gr-graffiti-inner" style="${a}">
      <div class="gr-graffiti-copy">
        ${u(e.eyebrow)?`<p class="teaser">${b(e.eyebrow)}</p>`:""}
        ${u(e.title)?`<h2 class="puck-title">${b(e.title)}</h2>`:""}
        ${u(e.body)?`<p>${E(e.body)}</p>`:""}
      </div>

      <div class="gr-graffiti-layout">
        <form class="gr-graffiti-form">
          <label>${b(e.nameLabel||"Your name")}<input type="text" name="fan_name" maxlength="120"></label>
          <label>${b(e.messageLabel||"Your message")}<textarea name="message" rows="5" maxlength="1200" required></textarea></label>
          <label>${b(e.photoLabel||"Photo with the band")}<input type="file" name="fan_photo" accept="image/*"></label>
          <label>${b(e.paintLabel||"Paint")}<canvas class="gr-graffiti-canvas" width="520" height="260"></canvas></label>
          <div class="gr-graffiti-tools">
            <input type="color" name="paint_color" value="#00ff04" aria-label="Paint color">
            <input type="range" name="paint_size" min="2" max="28" value="8" aria-label="Paint size">
            <button type="button" data-graffiti-clear>Clear Paint</button>
          </div>
          <button type="submit">${b(e.submitText||"Send for Approval")}</button>
          <p class="gr-graffiti-status" data-success-message="${p(e.successMessage||"Submitted. It will appear after admin approval.")}" aria-live="polite"></p>
        </form>

        <div class="gr-graffiti-posts" data-graffiti-posts>
          <p>Loading approved posts...</p>
        </div>
      </div>
    </div>
  </section>`}function Qe(e){return`<div class="puck-spacer" style="height:${Number(e.height||40)}px;background:${p(e.backgroundColor||"transparent")}"></div>`}function Ze(e){const t=c({background:e.backgroundColor||"transparent",color:e.textColor||"inherit",padding:`${e.paddingY||50}px ${e.paddingX||24}px`}),i=(e.items||[]).map(r=>{const n=r.imageUrl?`<img class="puck-image" src="${p(r.imageUrl)}" alt="${p(r.title||"Column image")}" style="width:100%;border-radius:${p(e.imageRadius||"8px")};margin-bottom:16px;">`:"",d=u(r.title)?`<h3 style="${c({color:r.titleColor||"inherit",fontFamily:r.titleFont||"inherit",fontSize:r.titleSize||"inherit",fontWeight:r.titleWeight||"inherit"})}">${b(r.title)}</h3>`:"",s=u(r.body)?`<p style="${c({color:r.bodyColor||"inherit",fontFamily:r.bodyFont||"inherit",fontSize:r.bodySize||"inherit",fontWeight:r.bodyWeight||"inherit"})}">${E(r.body)}</p>`:"",g=P({text:r.buttonText,url:r.buttonUrl,backgroundColor:r.buttonBackgroundColor,textColor:r.buttonTextColor,fontFamily:r.buttonFont,fontSize:r.buttonFontSize,borderWidth:r.buttonBorderWidth,borderColor:r.buttonBorderColor,radius:r.buttonRadius,boxShadow:r.buttonBoxShadow,textTransform:r.buttonTextTransform});return n||d||s||g?`<div class="puck-card">${n}${d}${s}${g}</div>`:""}).join("");return i?`${z(e.customFontUrl)}<section class="puck-section" style="${t}"><div class="puck-inner"><div class="puck-columns" style="--cols:${Number(e.columns||2)};--gap:${Number(e.gap||24)}px">${i}</div></div></section>`:""}function et(e){const t=c({background:e.backgroundColor||"#000000",padding:`${e.paddingY||30}px ${e.paddingX||24}px ${e.paddingBottom||80}px`}),a=e.formAction||"https://docs.google.com/forms/d/e/1FAIpQLSc75dAf3CXeOinDkL-URjVql6_o3E2PcXKPhB3j-mFnl0JBMw/formResponse",i=e.nameEntry||"entry.821607845",r=e.emailEntry||"entry.216699627",n=e.phoneEntry||"entry.1566132030",d=e.zipEntry||"entry.848273318",s=e.successMessage||"Great, you are signed up and we will keep you updated.";return`<section class="puck-section graverobber-contact-form-section graverobber-signup-form-section" style="${t}">
    <div class="puck-inner graverobber-contact-inner">
      <form class="graverobber-custom-contact-form" action="${p(a)}" method="POST" target="graverobber-signup-hidden-frame" onsubmit="setTimeout(() => { this.reset(); this.querySelector('.graverobber-contact-success').textContent='${p(s)}'; }, 350);">
        <label>
          ${b(e.nameLabel||"What are you called?")}
          <input type="text" name="${p(i)}" required>
        </label>

        <label>
          ${b(e.emailLabel||"What is your email?")}
          <input type="email" name="${p(r)}" required>
        </label>

        <label>
          ${b(e.phoneLabel||"What is your phone number?")}
          <input type="tel" name="${p(n)}">
        </label>

        <label>
          ${b(e.zipLabel||"What is your zip code?")}
          <input type="text" name="${p(d)}">
        </label>

        <button type="submit">${b(e.buttonText||"Join the Army of the Dead")}</button>
        <p class="graverobber-contact-success" aria-live="polite"></p>
      </form>

      <iframe class="graverobber-hidden-submit-frame" name="graverobber-signup-hidden-frame" title="Hidden signup submit frame"></iframe>
    </div>
  </section>`}function tt(e){const t=c({background:e.backgroundColor||"#000000",padding:`${e.paddingY||30}px ${e.paddingX||24}px ${e.paddingBottom||80}px`}),a=e.formAction||"https://docs.google.com/forms/d/e/1FAIpQLSfvFy-I4z36zqLz4y4boVhM4eTL7KEb5Ip1It7OZyFfxlRgMw/formResponse",i=e.nameEntry||"entry.111991046",r=e.emailEntry||"entry.709491702",n=e.messageEntry||"entry.905150677",d=e.successMessage||"Great, your message was sent and we will get back to you shortly.";return`<section class="puck-section graverobber-contact-form-section" style="${t}">
    <div class="puck-inner graverobber-contact-inner">
      <form class="graverobber-custom-contact-form" action="${p(a)}" method="POST" target="graverobber-contact-hidden-frame" onsubmit="setTimeout(() => { this.reset(); this.querySelector('.graverobber-contact-success').textContent='${p(d)}'; }, 350);">
        <label>
          ${b(e.nameLabel||"What are you called?")}
          <input type="text" name="${p(i)}" required>
        </label>

        <label>
          ${b(e.emailLabel||"What is your email?")}
          <input type="email" name="${p(r)}" required>
        </label>

        <label>
          ${b(e.messageLabel||"What do you want?")}
          <textarea name="${p(n)}" rows="${Number(e.messageRows||7)}" required></textarea>
        </label>

        <button type="submit">${b(e.buttonText||"Send Message")}</button>
        <p class="graverobber-contact-success" aria-live="polite"></p>
      </form>

      <iframe class="graverobber-hidden-submit-frame" name="graverobber-contact-hidden-frame" title="Hidden contact submit frame"></iframe>
    </div>
  </section>`}function ot(e){return`<section class="puck-section" style="${c({padding:`${e.paddingY||30}px ${e.paddingX||24}px`,background:e.backgroundColor||"transparent"})}"><div class="puck-inner">${e.html||""}</div></section>`}const rt={GalleryGrid:Je,WelcomeHorrorMessage:_e,GraveRobberHero:Z,GraveRobberLogo:ee,GraveRobberSocial:te,HeaderNav:Ye,SongScroll:Xe,FontLoader:De,Hero:Z,TextBlock:Ve,ImageBlock:ee,ButtonRow:qe,SocialIcons:te,Spacer:Qe,Columns:Ze,GraffitiWall:Ke,SignupForm:et,ContactForm:tt,Embed:ot};function vt(e){return((e==null?void 0:e.content)||[]).map(a=>{const i=rt[a.type];return i?i(a.props||{}):""}).join(`
`)}const at="graverobberpunk",it=["inherit","Arial, sans-serif","Helvetica, sans-serif","Verdana, sans-serif","Tahoma, sans-serif","Trebuchet MS, sans-serif","Georgia, serif","Times New Roman, serif","Garamond, serif","Courier New, monospace","Lucida Console, monospace","Impact, sans-serif","Palatino, serif","Gill Sans, sans-serif","Century Gothic, sans-serif","Playfair Display, serif","Montserrat, sans-serif","Oswald, sans-serif","Roboto, sans-serif","Open Sans, sans-serif","Lato, sans-serif","Poppins, sans-serif","Raleway, sans-serif","Bebas Neue, sans-serif","Anton, sans-serif","Inter, sans-serif","Nunito, sans-serif","Merriweather, serif","Lora, serif","Cinzel, serif","Cormorant Garamond, serif","Abril Fatface, serif","Permanent Marker, cursive","Rock Salt, cursive","Bangers, cursive","Creepster, cursive","Metal Mania, cursive","Special Elite, cursive","Rye, cursive","Orbitron, sans-serif","Audiowide, cursive","Black Ops One, cursive","Russo One, sans-serif","Libre Baskerville, serif","Source Sans 3, sans-serif","Source Serif 4, serif","Josefin Sans, sans-serif","Quicksand, sans-serif","Dancing Script, cursive","Pacifico, cursive","Satisfy, cursive","Shadows Into Light, cursive","Fira Sans, sans-serif","Fira Code, monospace","Ubuntu, sans-serif","Work Sans, sans-serif","DM Sans, sans-serif","Space Grotesk, sans-serif","Manrope, sans-serif"],oe=[{label:"Facebook",value:"facebook"},{label:"Instagram",value:"instagram"},{label:"TikTok",value:"tiktok"},{label:"YouTube",value:"youtube"},{label:"Spotify",value:"spotify"},{label:"Bandcamp",value:"bandcamp"},{label:"SoundCloud",value:"soundcloud"},{label:"Apple Music",value:"apple"},{label:"X / Twitter",value:"x"},{label:"Threads",value:"threads"},{label:"Bluesky",value:"bluesky"},{label:"LinkedIn",value:"linkedin"},{label:"Snapchat",value:"snapchat"},{label:"Pinterest",value:"pinterest"},{label:"Twitch",value:"twitch"},{label:"Discord",value:"discord"},{label:"Reddit",value:"reddit"},{label:"Patreon",value:"patreon"},{label:"Venmo",value:"venmo"},{label:"Cash App",value:"cashapp"},{label:"Email",value:"email"},{label:"Website",value:"website"},{label:"Custom",value:"custom"}];function M(e){return JSON.parse(JSON.stringify(e))}function nt(){const e=localStorage.getItem("adminToken")||"";return e?{Authorization:`Bearer ${e}`}:{}}function lt({value:e,onChange:t,label:a}){const i=e&&String(e).startsWith("#")?e:"#ffffff";return o.jsxs("div",{className:"puck-custom-field puck-color-field",children:[o.jsx("label",{children:a}),o.jsxs("div",{className:"puck-color-row",children:[o.jsx("input",{type:"color",value:i,onChange:r=>t(r.target.value)}),o.jsx("input",{type:"text",value:e||"",placeholder:"#ffffff, transparent, inherit",onChange:r=>t(r.target.value)})]})]})}const dt=[{label:"Left",value:"left"},{label:"Center",value:"center"},{label:"Right",value:"right"}];function T(e,t={}){return{type:"text",label:e,placeholder:t.placeholder||"Example: 100px"}}function l(e){return{type:"custom",label:e,render:({value:t,onChange:a})=>o.jsx(lt,{value:t||"",onChange:a,label:e})}}function st({value:e,onChange:t,label:a}){return o.jsxs("div",{className:"puck-custom-field",children:[o.jsx("label",{children:a}),o.jsx("select",{value:e||"inherit",onChange:i=>t(i.target.value),children:it.map(i=>o.jsx("option",{value:i,children:i},i))}),o.jsx("input",{type:"text",value:e||"",placeholder:"Or type any font-family name",onChange:i=>t(i.target.value)})]})}function y(e){return{type:"custom",label:e,render:({value:t,onChange:a})=>o.jsx(st,{value:t||"inherit",onChange:a,label:e})}}function pt({value:e,onChange:t,label:a}){const[i,r]=ge.useState("");async function n(d){var h;const s=(h=d.target.files)==null?void 0:h[0];if(!s)return;if(!s.type.startsWith("image/")){r("Please choose an image file.");return}const g=window.BAND_API_BASE;if(!g){r("Upload failed: API base is missing.");return}const m=new FormData;m.append("image",s),r("Uploading image...");try{const w=await fetch(`${g}/uploads/${at}`,{method:"POST",headers:nt(),body:m}),k=await w.json();if(!w.ok||!k.url){r(k.error||"Upload failed.");return}t(k.url),r("Image uploaded. Click Publish to save the page.")}catch{r("Upload failed. Make sure backend/Cloudinary are working.")}finally{d.target.value=""}}return o.jsxs("div",{className:"puck-upload-field",children:[o.jsx("label",{children:a||"Image"}),e?o.jsxs("div",{className:"puck-upload-preview",children:[o.jsx("img",{src:e,alt:"Selected upload"}),o.jsx("code",{children:e})]}):o.jsx("p",{className:"puck-upload-empty",children:"No image selected."}),o.jsx("input",{type:"file",accept:"image/*",onChange:n}),o.jsx("button",{type:"button",onClick:()=>t(""),children:"Remove Image"}),i&&o.jsx("p",{className:"puck-upload-status",children:i})]})}function v(e){return{type:"custom",label:e,render:({value:t,onChange:a})=>o.jsx(pt,{value:t||"",onChange:a,label:e})}}function ct({value:e,onChange:t,label:a}){return o.jsxs("div",{className:"puck-custom-field",children:[o.jsx("label",{children:a}),o.jsx("input",{type:"text",value:e||"",placeholder:"Paste Google Fonts @import URL or font CSS URL",onChange:i=>t(i.target.value)}),o.jsx("small",{children:"Example: https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"})]})}function $(e="External Font URL"){return{type:"custom",label:e,render:({value:t,onChange:a})=>o.jsx(ct,{value:t||"",onChange:a,label:e})}}const C=e=>({[`${e}Color`]:l("Text Color"),[`${e}Font`]:y("Font"),[`${e}Size`]:{type:"text",label:"Font Size",placeholder:"3rem, 48px, 120%"},[`${e}Weight`]:{type:"select",label:"Bold / Normal",options:[{label:"Default",value:"inherit"},{label:"Normal",value:"400"},{label:"Bold",value:"700"},{label:"Extra Bold",value:"900"},{label:"Light",value:"300"}]},[`${e}Style`]:{type:"select",label:"Italic",options:[{label:"Default",value:"inherit"},{label:"Normal",value:"normal"},{label:"Italic",value:"italic"}]},[`${e}Decoration`]:{type:"select",label:"Underline",options:[{label:"None",value:"none"},{label:"Underline",value:"underline"},{label:"Line Through",value:"line-through"}]},[`${e}Transform`]:{type:"select",label:"Text Case",options:[{label:"Default",value:"none"},{label:"UPPERCASE",value:"uppercase"},{label:"lowercase",value:"lowercase"},{label:"Capitalize",value:"capitalize"}]},[`${e}LetterSpacing`]:{type:"text",label:"Letter Spacing",placeholder:"normal, 2px, .08em"},[`${e}LineHeight`]:{type:"text",label:"Line Height",placeholder:"normal, 1.2, 32px"},[`${e}Shadow`]:{type:"text",label:"Text Shadow",placeholder:"none or 0 0 10px #22d3ee"}}),B={type:"array",label:"Buttons",arrayFields:{text:{type:"text",label:"Button Text"},url:{type:"text",label:"Button Link"},buttonType:{type:"select",label:"Button Type",options:[{label:"Normal Link Button",value:"link"},{label:"Dropdown Button",value:"dropdown"}]},dropdownLinks:{type:"array",label:"Dropdown Links",arrayFields:{text:{type:"text",label:"Dropdown Link Text"},url:{type:"text",label:"Dropdown Link URL"},backgroundColor:l("Dropdown Link Background"),textColor:l("Dropdown Link Text Color"),fontFamily:y("Dropdown Link Font"),fontSize:{type:"text",label:"Dropdown Link Font Size",placeholder:"14px"},borderColor:l("Dropdown Link Border Color"),boxShadow:{type:"text",label:"Dropdown Link Glow / Shadow",placeholder:"none or 0 0 14px #00ff04"},textTransform:{type:"select",label:"Dropdown Link Text Case",options:[{label:"Default",value:""},{label:"Uppercase",value:"uppercase"},{label:"Normal",value:"none"},{label:"Lowercase",value:"lowercase"},{label:"Capitalize",value:"capitalize"}]},radius:{type:"text",label:"Dropdown Link Rounded Corners",placeholder:"10px"},padding:{type:"text",label:"Dropdown Link Padding",placeholder:"10px 12px"}},defaultItemProps:{text:"New Dropdown Link",url:"#",backgroundColor:"transparent",textColor:"#ffffff",fontFamily:"inherit",fontSize:"14px",borderColor:"transparent",boxShadow:"none",textTransform:"uppercase",radius:"10px",padding:"10px 12px"}},dropdownBackgroundColor:l("Dropdown Menu Background"),dropdownBorderColor:l("Dropdown Menu Border Color"),dropdownBoxShadow:{type:"text",label:"Dropdown Menu Glow / Shadow",placeholder:"0 0 24px rgba(57,255,20,.35)"},dropdownRadius:{type:"text",label:"Dropdown Menu Rounded Corners",placeholder:"16px"},dropdownPadding:{type:"text",label:"Dropdown Menu Padding",placeholder:"10px"},dropdownMinWidth:{type:"text",label:"Dropdown Menu Width",placeholder:"190px"},backgroundColor:l("Button Background"),textColor:l("Button Text Color"),fontFamily:y("Button Font"),fontSize:{type:"text",label:"Button Font Size",placeholder:"16px"},borderWidth:{type:"select",label:"Border",options:[{label:"No Border",value:"0px"},{label:"Thin Border",value:"1px"},{label:"Medium Border",value:"2px"},{label:"Thick Border",value:"4px"}]},borderColor:l("Border Color"),boxShadow:{type:"text",label:"Button Glow / Shadow",placeholder:"none or 0 0 20px #22d3ee"},textTransform:{type:"select",label:"Text Case",options:[{label:"Default",value:""},{label:"Uppercase",value:"uppercase"},{label:"Normal",value:"none"},{label:"Lowercase",value:"lowercase"},{label:"Capitalize",value:"capitalize"}]},radius:{type:"text",label:"Button Rounded Corners",placeholder:"999px"},padding:{type:"text",label:"Button Padding",placeholder:"14px 24px"}},defaultItemProps:{text:"New Button",url:"#",buttonType:"link",dropdownLinks:[],dropdownBackgroundColor:"rgba(0,0,0,.96)",dropdownBorderColor:"rgba(57,255,20,.55)",dropdownBoxShadow:"0 0 24px rgba(57,255,20,.35)",dropdownRadius:"16px",dropdownPadding:"10px",dropdownMinWidth:"190px",backgroundColor:"#8b3df4",textColor:"#ffffff",fontFamily:"inherit",fontSize:"16px",borderWidth:"0px",borderColor:"rgba(255,255,255,.25)",boxShadow:"none",textTransform:"uppercase",radius:"999px",padding:"14px 24px"}},R={backgroundColor:l("Section Background"),textColor:l("Default Text Color"),paddingY:{type:"number",label:"Top/Bottom Padding"},paddingX:{type:"number",label:"Left/Right Padding"}};function F(e){return e?o.jsx("style",{children:`@import url('${e}');`}):null}function W({button:e}){if(!(e!=null&&e.text))return null;const t=e.borderWidth||"0px",a=e.borderColor||"transparent",i={background:e.backgroundColor||"transparent",color:e.textColor||"inherit",fontFamily:e.fontFamily||"inherit",fontSize:e.fontSize||"inherit",fontWeight:e.fontWeight||"inherit",border:`${t} solid ${a}`,boxShadow:e.boxShadow||"none",textTransform:e.textTransform||"uppercase",borderRadius:e.radius||"0px",padding:e.padding||"14px 24px",textDecoration:"none",display:"inline-flex",alignItems:"center",justifyContent:"center",cursor:"pointer"};return e.buttonType==="dropdown"?o.jsxs("div",{className:"puck-dropdown",children:[o.jsx("button",{className:"puck-btn puck-dropdown-trigger",type:"button",style:i,children:e.text}),o.jsx("div",{className:"puck-dropdown-menu",style:{background:e.dropdownBackgroundColor||"rgba(0,0,0,.96)",borderColor:e.dropdownBorderColor||"rgba(57,255,20,.55)",boxShadow:e.dropdownBoxShadow||"0 0 24px rgba(57,255,20,.35)",borderRadius:e.dropdownRadius||"16px",padding:e.dropdownPadding||"10px",minWidth:e.dropdownMinWidth||"190px"},children:(e.dropdownLinks||[]).map((r,n)=>o.jsx("a",{href:r.url||"#",style:{background:r.backgroundColor||"transparent",color:r.textColor||"#ffffff",fontFamily:r.fontFamily||"inherit",fontSize:r.fontSize||"14px",borderColor:r.borderColor||"transparent",boxShadow:r.boxShadow||"none",textTransform:r.textTransform||"uppercase",borderRadius:r.radius||"10px",padding:r.padding||"10px 12px"},children:r.text||"Dropdown Link"},n))})]}):o.jsx("a",{className:"puck-btn",href:e.url||"#",style:i,children:e.text})}function gt({platform:e,label:t}){const a=String(e||"custom").toLowerCase().trim();return a==="facebook"?o.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:o.jsx("path",{d:"M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.019 4.388 10.994 10.125 11.854v-8.385H7.078v-3.469h3.047V9.431c0-3.007 1.791-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.249h3.328l-.532 3.469h-2.796v8.385C19.612 23.067 24 18.092 24 12.073z"})}):a==="instagram"?o.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:o.jsx("path",{d:"M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3.5A4.5 4.5 0 1112 16a4.5 4.5 0 010-9zm0 2A2.5 2.5 0 1012 14a2.5 2.5 0 000-5zm5.25-3.25a1.25 1.25 0 11-1.25 1.25 1.25 1.25 0 011.25-1.25z"})}):a==="spotify"?o.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:o.jsx("path",{d:"M12 1.8A10.2 10.2 0 1022.2 12 10.2 10.2 0 0012 1.8zm4.68 14.72a.76.76 0 01-1.05.25 9.58 9.58 0 00-7.28-.78.76.76 0 11-.44-1.46 11.13 11.13 0 018.52.94.76.76 0 01.25 1.05zm1.25-2.77a.9.9 0 01-1.24.3 11.75 11.75 0 00-8.62-.96.9.9 0 11-.52-1.72 13.5 13.5 0 019.96 1.14.9.9 0 01.42 1.24zm.13-2.94a14.15 14.15 0 00-10.4-1.13 1.05 1.05 0 11-.61-2.01 16.3 16.3 0 0112.08 1.32 1.05 1.05 0 11-1.07 1.82z"})}):a==="youtube"?o.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:o.jsx("path",{d:"M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 00.5 6.2 31.5 31.5 0 000 12a31.5 31.5 0 00.5 5.8 3 3 0 002.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 002.1-2.1A31.5 31.5 0 0024 12a31.5 31.5 0 00-.5-5.8zM9.6 15.6V8.4L15.8 12l-6.2 3.6z"})}):o.jsxs("svg",{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:[o.jsx("circle",{cx:"12",cy:"12",r:"9"}),o.jsx("path",{d:"M8 12h8M12 8v8",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})]})}function j({children:e,backgroundColor:t="transparent",textColor:a="inherit",paddingY:i=50,paddingX:r=24}){return o.jsx("section",{className:"puck-section",style:{background:t,color:a,padding:`${i}px ${r}px`},children:e})}function bt(e){return o.jsx("section",{className:"puck-section graverobber-contact-form-section graverobber-signup-form-section",style:{background:e.backgroundColor||"#000000",padding:`${e.paddingY||30}px ${e.paddingX||24}px ${e.paddingBottom||80}px`},children:o.jsxs("div",{className:"puck-inner graverobber-contact-inner",children:[o.jsxs("form",{className:"graverobber-custom-contact-form",onSubmit:t=>t.preventDefault(),children:[o.jsxs("label",{children:[e.nameLabel||"What are you called?",o.jsx("input",{type:"text",name:e.nameEntry||"entry.821607845"})]}),o.jsxs("label",{children:[e.emailLabel||"What is your email?",o.jsx("input",{type:"email",name:e.emailEntry||"entry.216699627"})]}),o.jsxs("label",{children:[e.phoneLabel||"What is your phone number?",o.jsx("input",{type:"tel",name:e.phoneEntry||"entry.1566132030"})]}),o.jsxs("label",{children:[e.zipLabel||"What is your zip code?",o.jsx("input",{type:"text",name:e.zipEntry||"entry.848273318"})]}),o.jsx("button",{type:"submit",children:e.buttonText||"Join the Army of the Dead"}),o.jsx("p",{className:"graverobber-contact-success","aria-live":"polite",children:e.successMessage||""})]}),o.jsx("iframe",{className:"graverobber-hidden-submit-frame",name:"graverobber-signup-hidden-frame",title:"Hidden signup submit frame"})]})})}function ft(e){return o.jsx("section",{className:"puck-section graverobber-contact-form-section",style:{background:e.backgroundColor||"#000000",padding:`${e.paddingY||30}px ${e.paddingX||24}px ${e.paddingBottom||80}px`},children:o.jsxs("div",{className:"puck-inner graverobber-contact-inner",children:[o.jsxs("form",{className:"graverobber-custom-contact-form",onSubmit:t=>t.preventDefault(),children:[o.jsxs("label",{children:[e.nameLabel||"What are you called?",o.jsx("input",{type:"text",name:e.nameEntry||"entry.111991046"})]}),o.jsxs("label",{children:[e.emailLabel||"What is your email?",o.jsx("input",{type:"email",name:e.emailEntry||"entry.709491702"})]}),o.jsxs("label",{children:[e.messageLabel||"What do you want?",o.jsx("textarea",{name:e.messageEntry||"entry.905150677",rows:Number(e.messageRows||7)})]}),o.jsx("button",{type:"submit",children:e.buttonText||"Send Message"}),o.jsx("p",{className:"graverobber-contact-success","aria-live":"polite",children:e.successMessage||""})]}),o.jsx("iframe",{className:"graverobber-hidden-submit-frame",name:"graverobber-contact-hidden-frame",title:"Hidden contact submit frame"})]})})}const N=[{type:"Hero",props:{id:"graverobber-hero-1",title:"Grave Robber",subtitle:"AMERICAN HORROR PUNK",body:"Horror punk from beyond the grave. Shows, music, merch, booking, and updates.",imageUrl:"assets/grave-robber-skull.png",imageAlt:"Grave Robber skull logo",layout:"center",titleSize:"5rem",titleColor:"#f2f2f2",titleFont:"Creepster, cursive",titleWeight:"700",titleLetterSpacing:"normal",subtitleSize:"1.25rem",subtitleColor:"#c62828",subtitleFont:"Oswald, sans-serif",subtitleWeight:"700",subtitleLetterSpacing:".14em",bodySize:"1.1rem",bodyColor:"#d6d6d6",bodyFont:"Special Elite, cursive",bodyWeight:"400",bodyLetterSpacing:"normal",imageWidth:"300px",imageRadius:"0px",imageShadow:"0 0 55px rgba(198,40,40,.45)",maxWidth:1e3,gap:35,backgroundColor:"transparent",textColor:"#ffffff",paddingY:70,paddingX:24,customFontUrl:"",buttons:[{text:"Shows",url:"shows.html",backgroundColor:"#c62828",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"16px",borderWidth:"0px",borderColor:"transparent",boxShadow:"0 0 24px rgba(198,40,40,.35)",textTransform:"uppercase",radius:"999px",padding:"16px 34px"},{text:"Join the Army of the Dead",url:"signup.html",backgroundColor:"transparent",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"16px",borderWidth:"1px",borderColor:"rgba(255,255,255,.35)",boxShadow:"none",textTransform:"uppercase",radius:"999px",padding:"16px 34px"},{text:"Booking",url:"mailto:graverobber.punk@gmail.com",backgroundColor:"transparent",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"16px",borderWidth:"1px",borderColor:"rgba(198,40,40,.65)",boxShadow:"none",textTransform:"uppercase",radius:"999px",padding:"16px 34px"}]}},{type:"ImageBlock",props:{id:"graverobber-image-1",title:"",titleSize:"3rem",titleColor:"#ffffff",titleFont:"Creepster, cursive",imageUrl:"assets/grave-robber-logo-stacked.png",imageAlt:"Grave Robber logo",width:"520px",radius:"12px",shadow:"0 20px 60px rgba(0,0,0,.55)",align:"center",maxWidth:"900px",backgroundColor:"transparent",paddingY:30,paddingX:24,customFontUrl:""}},{type:"ButtonRow",props:{id:"graverobber-buttons-1",backgroundColor:"transparent",textColor:"#ffffff",paddingY:40,paddingX:24,customFontUrl:"",buttons:[{text:"Shows",url:"shows.html",backgroundColor:"#c62828",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"16px",borderWidth:"0px",borderColor:"transparent",boxShadow:"0 0 24px rgba(198,40,40,.35)",textTransform:"uppercase",radius:"999px",padding:"16px 34px"},{text:"Army of the Dead",url:"signup.html",backgroundColor:"transparent",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"16px",borderWidth:"1px",borderColor:"rgba(255,255,255,.35)",boxShadow:"none",textTransform:"uppercase",radius:"999px",padding:"16px 34px"}]}},{type:"SocialIcons",props:{id:"graverobber-social-1",title:"Follow Grave Robber",titleColor:"#ffffff",titleFont:"Oswald, sans-serif",titleSize:"1rem",titleWeight:"700",backgroundColor:"transparent",textColor:"#ffffff",paddingY:50,paddingX:24,links:[{platform:"facebook",label:"Facebook",url:"https://www.facebook.com/graverobberpunk",iconColor:"#ffffff",backgroundColor:"rgba(198,40,40,.14)",borderColor:"rgba(198,40,40,.55)"},{platform:"instagram",label:"Instagram",url:"https://www.instagram.com/graverobberpunk",iconColor:"#ffffff",backgroundColor:"rgba(198,40,40,.14)",borderColor:"rgba(198,40,40,.55)"},{platform:"x",label:"X",url:"https://x.com/graverobberpunk",iconColor:"#ffffff",backgroundColor:"rgba(198,40,40,.14)",borderColor:"rgba(198,40,40,.55)"},{platform:"threads",label:"Threads",url:"https://www.threads.net/@graverobberpunk",iconColor:"#ffffff",backgroundColor:"rgba(198,40,40,.14)",borderColor:"rgba(198,40,40,.55)"},{platform:"tiktok",label:"TikTok",url:"https://www.tiktok.com/@graverobberpunk",iconColor:"#ffffff",backgroundColor:"rgba(198,40,40,.14)",borderColor:"rgba(198,40,40,.55)"},{platform:"spotify",label:"Spotify",url:"https://open.spotify.com/artist/4D34aUp0OsDs8mAEWPIP7c",iconColor:"#ffffff",backgroundColor:"rgba(198,40,40,.14)",borderColor:"rgba(198,40,40,.55)"},{platform:"youtube",label:"YouTube",url:"https://www.youtube.com/@GraveRobberPunk",iconColor:"#ffffff",backgroundColor:"rgba(198,40,40,.14)",borderColor:"rgba(198,40,40,.55)"},{platform:"bandcamp",label:"Bandcamp",url:"https://graverobberpunk.bandcamp.com/",iconColor:"#ffffff",backgroundColor:"rgba(198,40,40,.14)",borderColor:"rgba(198,40,40,.55)"},{platform:"soundcloud",label:"SoundCloud",url:"https://soundcloud.com/graverobberofficial",iconColor:"#ffffff",backgroundColor:"rgba(198,40,40,.14)",borderColor:"rgba(198,40,40,.55)"},{platform:"apple",label:"Apple Music",url:"https://music.apple.com/us/artist/grave-robber/279558434",iconColor:"#ffffff",backgroundColor:"rgba(198,40,40,.14)",borderColor:"rgba(198,40,40,.55)"},{platform:"website",label:"Merch Store",url:"https://graverobber.bigcartel.com/",iconColor:"#ffffff",backgroundColor:"rgba(198,40,40,.14)",borderColor:"rgba(198,40,40,.55)"},{platform:"email",label:"Email",url:"mailto:graverobber.punk@gmail.com",iconColor:"#ffffff",backgroundColor:"rgba(198,40,40,.14)",borderColor:"rgba(198,40,40,.55)"}]}}],ut=[{label:"Grave Robber Ombre",value:"grave-ombre"},{label:"Solid Color",value:"solid"},{label:"Vertical Gradient",value:"vertical-gradient"},{label:"Horizontal Gradient",value:"horizontal-gradient"},{label:"Diagonal Gradient",value:"diagonal-gradient"},{label:"Radial Center Glow",value:"radial-glow"},{label:"Top Spotlight",value:"top-glow"},{label:"Bottom Spotlight",value:"bottom-glow"},{label:"Left Glow",value:"left-glow"},{label:"Right Glow",value:"right-glow"},{label:"Double Glow",value:"double-glow"},{label:"Triple Horror Fog",value:"triple-fog"},{label:"Red Black Vignette",value:"red-vignette"},{label:"Custom CSS",value:"custom"}],fe={backgroundStyle:"grave-ombre",pageBaseColor:"#030000",pageSecondColor:"#160000",pageThirdColor:"#000000",pageGlowColor:"rgba(198,40,40,.18)",pageSecondGlowColor:"rgba(198,40,40,.10)",pageThirdGlowColor:"rgba(0,0,0,.65)",pageTextColor:"#f5f0e6",pageGradientAngle:"180deg",pageGlowPosition:"center 18%",pageGlowSize:"34%",pageSecondGlowPosition:"center 70%",pageSecondGlowSize:"45%",pageThirdGlowPosition:"center center",pageThirdGlowSize:"75%",customBackgroundCss:""};function mt(e={}){const t={...fe,...e||{}},a=t.pageBaseColor||"#030000",i=t.pageSecondColor||"#160000",r=t.pageThirdColor||"#000000",n=t.pageGlowColor||"rgba(198,40,40,.18)",d=t.pageSecondGlowColor||"rgba(198,40,40,.10)",s=t.pageThirdGlowColor||"rgba(0,0,0,.65)",g=t.pageGradientAngle||"180deg",m=t.pageGlowPosition||"center 18%",h=t.pageGlowSize||"34%",w=t.pageSecondGlowPosition||"center 70%",k=t.pageSecondGlowSize||"45%",me=t.pageThirdGlowPosition||"center center",xe=t.pageThirdGlowSize||"75%";return t.backgroundStyle==="solid"?a:t.backgroundStyle==="vertical-gradient"?`linear-gradient(180deg, ${i} 0%, ${a} 55%, ${r} 100%)`:t.backgroundStyle==="horizontal-gradient"?`linear-gradient(90deg, ${i} 0%, ${a} 50%, ${r} 100%)`:t.backgroundStyle==="diagonal-gradient"?`linear-gradient(${g}, ${i} 0%, ${a} 52%, ${r} 100%)`:t.backgroundStyle==="radial-glow"?`radial-gradient(circle at ${m}, ${n}, transparent ${h}), ${a}`:t.backgroundStyle==="top-glow"?`radial-gradient(circle at top center, ${n}, transparent ${h}), linear-gradient(180deg, ${i}, ${a})`:t.backgroundStyle==="bottom-glow"?`radial-gradient(circle at bottom center, ${n}, transparent ${h}), linear-gradient(180deg, ${a}, ${i})`:t.backgroundStyle==="left-glow"?`radial-gradient(circle at left center, ${n}, transparent ${h}), linear-gradient(90deg, ${i}, ${a})`:t.backgroundStyle==="right-glow"?`radial-gradient(circle at right center, ${n}, transparent ${h}), linear-gradient(90deg, ${a}, ${i})`:t.backgroundStyle==="double-glow"?`radial-gradient(circle at ${m}, ${n}, transparent ${h}), radial-gradient(circle at ${w}, ${d}, transparent ${k}), ${a}`:t.backgroundStyle==="triple-fog"?`radial-gradient(circle at ${m}, ${n}, transparent ${h}), radial-gradient(circle at ${w}, ${d}, transparent ${k}), radial-gradient(circle at ${me}, ${s}, transparent ${xe}), linear-gradient(${g}, ${i}, ${a}, ${r})`:t.backgroundStyle==="red-vignette"?`radial-gradient(circle at ${m}, ${n}, transparent ${h}), radial-gradient(circle at center, transparent 0%, transparent 52%, ${s} 100%), linear-gradient(${g}, ${i}, ${a}, ${r})`:t.backgroundStyle==="custom"?t.customBackgroundCss||a:`radial-gradient(circle at ${m}, ${n}, transparent ${h}), radial-gradient(circle at ${w}, ${d}, transparent ${k}), linear-gradient(180deg, ${i}, ${a})`}function xt(e="home"){return e==="contact"?[{type:"HeaderNav",props:{id:"graverobber-contact-header-1",backgroundColor:"#000000",lineColor:"#bb00ff",lineShadow:"0 0 24px #bb00ff",showBack:"show",backText:"Back",backUrl:"index.html",logoUrl:"assets/grave-robber-skull.png",logoAlt:"Grave Robber",logoSize:"52px",logoPlacement:"right",width:"100%",maxWidth:"none",margin:"0",padding:"18px 28px",navPlacement:"center",headerPosition:"full",buttons:[{text:"Home",url:"index.html",backgroundColor:"#000000",textColor:"#bb00ff",fontFamily:"Oswald, sans-serif",fontSize:"14px",borderWidth:"1px",borderColor:"#00ff04",boxShadow:"0 0 24px #00ff04",textTransform:"uppercase",radius:"999px",padding:"10px 16px"},{text:"Shows",url:"shows.html",backgroundColor:"#000000",textColor:"#bb00ff",fontFamily:"Oswald, sans-serif",fontSize:"14px",borderWidth:"1px",borderColor:"#00ff04",boxShadow:"0 0 24px #00ff04",textTransform:"uppercase",radius:"999px",padding:"10px 16px"},{text:"Admin",url:"admin.html",backgroundColor:"#000000",textColor:"#bb00ff",fontFamily:"Oswald, sans-serif",fontSize:"14px",borderWidth:"1px",borderColor:"#00ff04",boxShadow:"0 0 24px #00ff04",textTransform:"uppercase",radius:"999px",padding:"10px 16px"}]}},{type:"ContactForm",props:{id:"graverobber-contact-form-1",formAction:"https://docs.google.com/forms/d/e/1FAIpQLSfvFy-I4z36zqLz4y4boVhM4eTL7KEb5Ip1It7OZyFfxlRgMw/formResponse",nameEntry:"entry.111991046",emailEntry:"entry.709491702",messageEntry:"entry.905150677",nameLabel:"What are you called?",emailLabel:"What is your email?",messageLabel:"What do you want?",messageRows:7,buttonText:"Send Message",successMessage:"Great, your message was sent and we will get back to you shortly.",backgroundColor:"#000000",paddingY:30,paddingX:24,paddingBottom:80}},{type:"GraveRobberSocial",props:{id:"graverobber-contact-social-1",title:"Follow Grave Robber",titleColor:"#00ff04",titleFont:"Oswald, sans-serif",titleSize:"1rem",backgroundColor:"#000000",textColor:"#00ff04",paddingY:50,paddingX:24,links:[{platform:"facebook",label:"Facebook",url:"https://www.facebook.com/graverobberpunk",iconColor:"#bb00ff",backgroundColor:"#000000",borderColor:"#00ff04"},{platform:"instagram",label:"Instagram",url:"https://www.instagram.com/graverobberpunk",iconColor:"#bb00ff",backgroundColor:"#000000",borderColor:"#00ff04"},{platform:"spotify",label:"Spotify",url:"https://open.spotify.com/artist/4D34aUp0OsDs8mAEWPIP7c",iconColor:"#bb00ff",backgroundColor:"#000000",borderColor:"#00ff04"},{platform:"youtube",label:"YouTube",url:"https://www.youtube.com/@GraveRobberPunk",iconColor:"#bb00ff",backgroundColor:"#000000",borderColor:"#00ff04"},{platform:"email",label:"Email",url:"mailto:graverobber.punk@gmail.com",iconColor:"#bb00ff",backgroundColor:"#000000",borderColor:"#00ff04"}]}}]:e==="shows"?[{type:"HeaderNav",props:{id:"graverobber-shows-header-1",backgroundColor:"rgba(0,0,0,.86)",lineColor:"rgba(198,40,40,.65)",lineShadow:"0 0 24px rgba(198,40,40,.28)",showBack:"show",backText:"Back",backUrl:"index.html",logoUrl:"assets/grave-robber-skull.png",logoAlt:"Grave Robber",logoSize:"52px",logoPlacement:"right",width:"100%",maxWidth:"none",margin:"0",padding:"18px 28px",navPlacement:"center",headerPosition:"full",buttons:[{text:"Home",url:"index.html",backgroundColor:"transparent",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"14px",borderWidth:"1px",borderColor:"rgba(198,40,40,.55)",boxShadow:"none",textTransform:"uppercase",radius:"999px",padding:"10px 16px"},{text:"Shows",url:"shows.html",backgroundColor:"#c62828",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"14px",borderWidth:"0px",borderColor:"transparent",boxShadow:"none",textTransform:"uppercase",radius:"999px",padding:"10px 16px"},{text:"Army of the Dead",url:"signup.html",backgroundColor:"transparent",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"14px",borderWidth:"1px",borderColor:"rgba(198,40,40,.55)",boxShadow:"none",textTransform:"uppercase",radius:"999px",padding:"10px 16px"}]}},{type:"TextBlock",props:{id:"graverobber-shows-title-1",eyebrow:"Live with the Army of the Dead",eyebrowColor:"#c62828",eyebrowFont:"Oswald, sans-serif",eyebrowSize:"1rem",eyebrowWeight:"700",title:"Shows",titleSize:"4rem",titleColor:"#ffffff",titleFont:"Creepster, cursive",titleWeight:"700",body:"Join the Army of the Dead to hear when the next haunt is announced.",bodySize:"1.1rem",bodyColor:"#d6d6d6",bodyFont:"Special Elite, cursive",bodyWeight:"400",align:"center",maxWidth:"850px",backgroundColor:"transparent",textColor:"#ffffff",paddingY:70,paddingX:24,customFontUrl:"",buttons:[{text:"Get Notified",url:"signup.html",backgroundColor:"#c62828",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"16px",borderWidth:"0px",borderColor:"transparent",boxShadow:"0 0 24px rgba(198,40,40,.35)",textTransform:"uppercase",radius:"999px",padding:"16px 34px"}]}},{type:"Embed",props:{html:'<div id="upcoming-shows"></div><div id="no-shows-message" class="empty-state"><h2>Shows Coming Soon</h2><p>Join the Army of the Dead to hear when the next haunt is announced.</p><a href="signup.html" class="primary-btn">Get Notified</a></div><section class="past-shows-section hidden"><h2>Past Shows</h2><div id="past-shows"></div></section>',backgroundColor:"transparent",paddingY:20,paddingX:24}}]:e==="signup"?[{type:"HeaderNav",props:{id:"graverobber-signup-header-1",backgroundColor:"rgba(0,0,0,.86)",lineColor:"rgba(198,40,40,.65)",lineShadow:"0 0 24px rgba(198,40,40,.28)",showBack:"show",backText:"Back",backUrl:"index.html",logoUrl:"assets/grave-robber-skull.png",logoAlt:"Grave Robber",logoSize:"52px",logoPlacement:"right",width:"100%",maxWidth:"none",margin:"0",padding:"18px 28px",navPlacement:"center",headerPosition:"full",buttons:[{text:"Home",url:"index.html",backgroundColor:"transparent",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"14px",borderWidth:"1px",borderColor:"rgba(198,40,40,.55)",boxShadow:"none",textTransform:"uppercase",radius:"999px",padding:"10px 16px"},{text:"Shows",url:"shows.html",backgroundColor:"transparent",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"14px",borderWidth:"1px",borderColor:"rgba(198,40,40,.55)",boxShadow:"none",textTransform:"uppercase",radius:"999px",padding:"10px 16px"},{text:"Army of the Dead",url:"signup.html",backgroundColor:"#c62828",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"14px",borderWidth:"0px",borderColor:"transparent",boxShadow:"none",textTransform:"uppercase",radius:"999px",padding:"10px 16px"}]}},{type:"TextBlock",props:{id:"graverobber-signup-title-1",eyebrow:"Join the underground",eyebrowColor:"#c62828",eyebrowFont:"Oswald, sans-serif",eyebrowSize:"1rem",eyebrowWeight:"700",title:"Army of the Dead",titleSize:"4rem",titleColor:"#ffffff",titleFont:"Creepster, cursive",titleWeight:"700",body:"Get show updates, music news, and dispatches from the grave.",bodySize:"1.1rem",bodyColor:"#d6d6d6",bodyFont:"Special Elite, cursive",bodyWeight:"400",align:"center",maxWidth:"850px",backgroundColor:"transparent",textColor:"#ffffff",paddingY:70,paddingX:24,customFontUrl:"",buttons:[]}},{type:"Embed",props:{html:'<form id="signup-form" class="custom-form"><label>Name<input type="text" name="name" required></label><label>Email<input type="email" name="email" required></label><label>Phone<input type="tel" name="phone"></label><label>Message<textarea name="message" rows="5"></textarea></label><button type="submit">Join the Army of the Dead</button><p id="signup-status"></p></form>',backgroundColor:"transparent",paddingY:20,paddingX:24}}]:e==="about"?[{type:"HeaderNav",props:{id:"graverobber-about-header-1",backgroundColor:"rgba(0,0,0,.86)",lineColor:"rgba(198,40,40,.65)",lineShadow:"0 0 24px rgba(198,40,40,.28)",showBack:"show",backText:"Back",backUrl:"index.html",logoUrl:"assets/grave-robber-skull.png",logoAlt:"Grave Robber",logoSize:"52px",logoPlacement:"right",width:"100%",maxWidth:"none",margin:"0",padding:"18px 28px",navPlacement:"center",headerPosition:"full",buttons:[{text:"Home",url:"index.html",backgroundColor:"transparent",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"14px",borderWidth:"1px",borderColor:"rgba(198,40,40,.55)",boxShadow:"none",textTransform:"uppercase",radius:"999px",padding:"10px 16px"},{text:"Shows",url:"shows.html",backgroundColor:"transparent",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"14px",borderWidth:"1px",borderColor:"rgba(198,40,40,.55)",boxShadow:"none",textTransform:"uppercase",radius:"999px",padding:"10px 16px"},{text:"About",url:"about.html",backgroundColor:"#c62828",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"14px",borderWidth:"0px",borderColor:"transparent",boxShadow:"none",textTransform:"uppercase",radius:"999px",padding:"10px 16px"},{text:"Graffiti Wall",url:"graffiti-wall.html",backgroundColor:"transparent",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"14px",borderWidth:"1px",borderColor:"rgba(198,40,40,.55)",boxShadow:"none",textTransform:"uppercase",radius:"999px",padding:"10px 16px"}]}},{type:"TextBlock",props:{id:"graverobber-about-empty-1",eyebrow:"",title:"",body:"",align:"center",maxWidth:"850px",backgroundColor:"transparent",textColor:"#ffffff",paddingY:120,paddingX:24,customFontUrl:"",buttons:[]}}]:e==="graffiti-wall"?[{type:"HeaderNav",props:{id:"graverobber-graffiti-header-1",backgroundColor:"rgba(0,0,0,.86)",lineColor:"rgba(198,40,40,.65)",lineShadow:"0 0 24px rgba(198,40,40,.28)",showBack:"show",backText:"Back",backUrl:"index.html",logoUrl:"assets/grave-robber-skull.png",logoAlt:"Grave Robber",logoSize:"52px",logoPlacement:"right",width:"100%",maxWidth:"none",margin:"0",padding:"18px 28px",navPlacement:"center",headerPosition:"full",buttons:[{text:"Home",url:"index.html",backgroundColor:"transparent",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"14px",borderWidth:"1px",borderColor:"rgba(198,40,40,.55)",boxShadow:"none",textTransform:"uppercase",radius:"999px",padding:"10px 16px"},{text:"Shows",url:"shows.html",backgroundColor:"transparent",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"14px",borderWidth:"1px",borderColor:"rgba(198,40,40,.55)",boxShadow:"none",textTransform:"uppercase",radius:"999px",padding:"10px 16px"},{text:"About",url:"about.html",backgroundColor:"transparent",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"14px",borderWidth:"1px",borderColor:"rgba(198,40,40,.55)",boxShadow:"none",textTransform:"uppercase",radius:"999px",padding:"10px 16px"},{text:"Graffiti Wall",url:"graffiti-wall.html",backgroundColor:"#c62828",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"14px",borderWidth:"0px",borderColor:"transparent",boxShadow:"none",textTransform:"uppercase",radius:"999px",padding:"10px 16px"}]}},{type:"GraffitiWall",props:{id:"graverobber-graffiti-wall-1",eyebrow:"Fan wall",title:"Graffiti Wall",body:"Write a message, upload a photo, or paint something for the band. Submissions appear after admin approval.",nameLabel:"Your name",messageLabel:"Your message",photoLabel:"Photo with the band",paintLabel:"Paint",submitText:"Send for Approval",successMessage:"Submitted. It will appear after admin approval.",backgroundColor:"transparent",textColor:"#ffffff",accentColor:"#00ff04",panelBackground:"rgba(0,0,0,.72)",borderColor:"#bb00ff",paddingY:70,paddingX:24}}]:e==="contact"?[{type:"HeaderNav",props:{id:"graverobber-contact-header-1",backgroundColor:"rgba(0,0,0,.86)",lineColor:"#00ff04",lineShadow:"0 0 24px #00ff04",showBack:"show",backText:"Back",backUrl:"index.html",logoUrl:"assets/grave-robber-skull.png",logoAlt:"Grave Robber",logoSize:"52px",logoPlacement:"right",width:"100%",maxWidth:"none",margin:"0",padding:"18px 28px",navPlacement:"center",headerPosition:"full",buttons:[{text:"Home",url:"index.html",backgroundColor:"transparent",textColor:"#bb00ff",fontFamily:"Oswald, sans-serif",fontSize:"14px",borderWidth:"1px",borderColor:"#00ff04",boxShadow:"0 0 24px #00ff04",textTransform:"uppercase",radius:"999px",padding:"10px 16px"},{text:"Shows",url:"shows.html",backgroundColor:"transparent",textColor:"#bb00ff",fontFamily:"Oswald, sans-serif",fontSize:"14px",borderWidth:"1px",borderColor:"#00ff04",boxShadow:"0 0 24px #00ff04",textTransform:"uppercase",radius:"999px",padding:"10px 16px"},{text:"Music",url:"index.html#music",backgroundColor:"transparent",textColor:"#bb00ff",fontFamily:"Oswald, sans-serif",fontSize:"14px",borderWidth:"1px",borderColor:"#00ff04",boxShadow:"0 0 24px #00ff04",textTransform:"uppercase",radius:"999px",padding:"10px 16px"},{text:"Merch",url:"merch.html",backgroundColor:"transparent",textColor:"#bb00ff",fontFamily:"Oswald, sans-serif",fontSize:"14px",borderWidth:"1px",borderColor:"#00ff04",boxShadow:"0 0 24px #00ff04",textTransform:"uppercase",radius:"999px",padding:"10px 16px"},{text:"Contact",url:"contact.html",backgroundColor:"#000000",textColor:"#bb00ff",fontFamily:"Oswald, sans-serif",fontSize:"14px",borderWidth:"1px",borderColor:"#00ff04",boxShadow:"0 0 24px #00ff04",textTransform:"uppercase",radius:"999px",padding:"10px 16px"}]}},{type:"TextBlock",props:{id:"graverobber-contact-title-1",eyebrow:"Booking / Contact",eyebrowColor:"#00ff04",eyebrowFont:"Oswald, sans-serif",eyebrowSize:"1rem",eyebrowWeight:"700",title:"Contact Grave Robber",titleSize:"4rem",titleColor:"#bb00ff",titleFont:"Creepster, cursive",titleWeight:"700",body:"Use the form below for booking, merch, press, and general contact.",bodySize:"1.1rem",bodyColor:"#ffffff",bodyFont:"Oswald, sans-serif",bodyWeight:"400",align:"center",maxWidth:"850px",backgroundColor:"#000000",textColor:"#ffffff",paddingY:70,paddingX:24,customFontUrl:"",buttons:[]}},{type:"Embed",props:{html:'<div class="graverobber-contact-form-wrap"><iframe class="graverobber-contact-form" src="https://docs.google.com/forms/d/e/1FAIpQLSfvFy-I4z36zqLz4y4boVhM4eTL7KEb5Ip1It7OZyFfxlRgMw/viewform?embedded=true" width="640" height="721" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe></div>',backgroundColor:"#000000",paddingY:30,paddingX:24}}]:e==="merch"?[{type:"HeaderNav",props:{id:"graverobber-merch-header-1",backgroundColor:"rgba(0,0,0,.86)",lineColor:"rgba(198,40,40,.65)",lineShadow:"0 0 24px rgba(198,40,40,.28)",showBack:"show",backText:"Back",backUrl:"index.html",logoUrl:"assets/grave-robber-skull.png",logoAlt:"Grave Robber",logoSize:"52px",logoPlacement:"right",width:"100%",maxWidth:"none",margin:"0",padding:"18px 28px",navPlacement:"center",headerPosition:"full",buttons:[{text:"Home",url:"index.html",backgroundColor:"transparent",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"14px",borderWidth:"1px",borderColor:"rgba(198,40,40,.55)",boxShadow:"none",textTransform:"uppercase",radius:"999px",padding:"10px 16px"},{text:"Shows",url:"shows.html",backgroundColor:"transparent",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"14px",borderWidth:"1px",borderColor:"rgba(198,40,40,.55)",boxShadow:"none",textTransform:"uppercase",radius:"999px",padding:"10px 16px"},{text:"Merch",url:"merch.html",backgroundColor:"#c62828",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"14px",borderWidth:"0px",borderColor:"transparent",boxShadow:"none",textTransform:"uppercase",radius:"999px",padding:"10px 16px"},{text:"Gallery",url:"gallery.html",backgroundColor:"transparent",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"14px",borderWidth:"1px",borderColor:"rgba(198,40,40,.55)",boxShadow:"none",textTransform:"uppercase",radius:"999px",padding:"10px 16px"}]}},{type:"TextBlock",props:{id:"graverobber-merch-title-1",eyebrow:"Official Grave Robber merch",title:"Merch",body:"Add merch items, store links, photos, and announcements here.",align:"center",maxWidth:"850px",backgroundColor:"transparent",textColor:"#ffffff",paddingY:70,paddingX:24,titleColor:"#ffffff",titleFont:"Creepster, cursive",titleSize:"4rem",bodyColor:"#d6d6d6",bodyFont:"Oswald, sans-serif",bodySize:"1.1rem",buttons:[{text:"Visit Merch Store",url:"https://graverobber.bigcartel.com/",backgroundColor:"#c62828",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"16px",borderWidth:"0px",borderColor:"transparent",boxShadow:"0 0 24px rgba(198,40,40,.35)",textTransform:"uppercase",radius:"999px",padding:"16px 34px"}]}}]:e==="gallery"?[{type:"HeaderNav",props:{id:"graverobber-gallery-header-1",backgroundColor:"rgba(0,0,0,.86)",lineColor:"rgba(198,40,40,.65)",lineShadow:"0 0 24px rgba(198,40,40,.28)",showBack:"show",backText:"Back",backUrl:"index.html",logoUrl:"assets/grave-robber-skull.png",logoAlt:"Grave Robber",logoSize:"52px",logoPlacement:"right",width:"100%",maxWidth:"none",margin:"0",padding:"18px 28px",navPlacement:"center",headerPosition:"full",buttons:[{text:"Home",url:"index.html",backgroundColor:"transparent",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"14px",borderWidth:"1px",borderColor:"rgba(198,40,40,.55)",boxShadow:"none",textTransform:"uppercase",radius:"999px",padding:"10px 16px"},{text:"Shows",url:"shows.html",backgroundColor:"transparent",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"14px",borderWidth:"1px",borderColor:"rgba(198,40,40,.55)",boxShadow:"none",textTransform:"uppercase",radius:"999px",padding:"10px 16px"},{text:"Merch",url:"merch.html",backgroundColor:"transparent",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"14px",borderWidth:"1px",borderColor:"rgba(198,40,40,.55)",boxShadow:"none",textTransform:"uppercase",radius:"999px",padding:"10px 16px"},{text:"Gallery",url:"gallery.html",backgroundColor:"#c62828",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"14px",borderWidth:"0px",borderColor:"transparent",boxShadow:"none",textTransform:"uppercase",radius:"999px",padding:"10px 16px"}]}},{type:"TextBlock",props:{id:"graverobber-gallery-title-1",eyebrow:"Photos from the crypt",title:"Gallery",body:"Add photos, flyers, videos, and live shots here.",align:"center",maxWidth:"850px",backgroundColor:"transparent",textColor:"#ffffff",paddingY:70,paddingX:24,titleColor:"#ffffff",titleFont:"Creepster, cursive",titleSize:"4rem",bodyColor:"#d6d6d6",bodyFont:"Oswald, sans-serif",bodySize:"1.1rem",buttons:[]}},{type:"ImageBlock",props:{id:"graverobber-gallery-image-1",title:"",imageUrl:"assets/grave-robber-logo-stacked.png",imageAlt:"Grave Robber gallery image",width:"520px",radius:"12px",shadow:"0 20px 60px rgba(0,0,0,.55)",align:"center",maxWidth:"900px",backgroundColor:"transparent",paddingY:30,paddingX:24}}]:[{type:"HeaderNav",props:{id:"graverobber-home-header-1",backgroundColor:"rgba(0,0,0,.86)",lineColor:"rgba(198,40,40,.65)",lineShadow:"0 0 24px rgba(198,40,40,.28)",showBack:"hide",backText:"Back",backUrl:"index.html",logoUrl:"assets/grave-robber-skull.png",logoAlt:"Grave Robber",logoSize:"52px",logoPlacement:"left",width:"100%",maxWidth:"none",margin:"0",padding:"18px 28px",navPlacement:"center",headerPosition:"full",buttons:[{text:"Home",url:"index.html",backgroundColor:"#c62828",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"14px",borderWidth:"0px",borderColor:"transparent",boxShadow:"none",textTransform:"uppercase",radius:"999px",padding:"10px 16px"},{text:"Shows",url:"shows.html",backgroundColor:"transparent",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"14px",borderWidth:"1px",borderColor:"rgba(198,40,40,.55)",boxShadow:"none",textTransform:"uppercase",radius:"999px",padding:"10px 16px"},{text:"Army of the Dead",url:"signup.html",backgroundColor:"transparent",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"14px",borderWidth:"1px",borderColor:"rgba(198,40,40,.55)",boxShadow:"none",textTransform:"uppercase",radius:"999px",padding:"10px 16px"},{text:"About",url:"about.html",backgroundColor:"transparent",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"14px",borderWidth:"1px",borderColor:"rgba(198,40,40,.55)",boxShadow:"none",textTransform:"uppercase",radius:"999px",padding:"10px 16px"},{text:"Graffiti Wall",url:"graffiti-wall.html",backgroundColor:"transparent",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"14px",borderWidth:"1px",borderColor:"rgba(198,40,40,.55)",boxShadow:"none",textTransform:"uppercase",radius:"999px",padding:"10px 16px"},{text:"Buy Coffee",url:"#",backgroundColor:"transparent",textColor:"#00ff04",fontFamily:"Oswald, sans-serif",fontSize:"14px",borderWidth:"1px",borderColor:"#00ff04",boxShadow:"0 0 18px rgba(57,255,20,.35)",textTransform:"uppercase",radius:"999px",padding:"10px 16px"},{text:"Merch",url:"merch.html",buttonType:"dropdown",dropdownLinks:[{text:"Merch Store",url:"https://graverobber.bigcartel.com/"}],backgroundColor:"transparent",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"14px",borderWidth:"1px",borderColor:"rgba(198,40,40,.55)",boxShadow:"none",textTransform:"uppercase",radius:"999px",padding:"10px 16px"}]}},{type:"GraveRobberHero",props:{id:"graverobber-home-hero-1",title:"Grave Robber",subtitle:"AMERICAN HORROR PUNK",body:"Horror punk from beyond the grave. Shows, music, merch, booking, and updates.",imageUrl:"assets/grave-robber-skull.png",imageAlt:"Grave Robber skull logo",layout:"image-top",imageWidth:"300px",imageRadius:"0px",imageShadow:"0 0 90px rgba(198,40,40,.38)",titleSize:"44px",titleColor:"#f5f0e6",titleFont:"Oswald, sans-serif",titleWeight:"700",subtitleSize:"18px",subtitleColor:"#e52b2b",subtitleFont:"Oswald, sans-serif",subtitleWeight:"700",subtitleLetterSpacing:".45em",subtitleTransform:"uppercase",bodySize:"18px",bodyColor:"#cfd3d6",bodyFont:"Oswald, sans-serif",bodyWeight:"400",backgroundColor:"transparent",textColor:"#ffffff",paddingY:120,paddingX:24,maxWidth:900,gap:34,buttons:[{text:"Shows",url:"shows.html",backgroundColor:"#c62828",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"16px",borderWidth:"0px",borderColor:"transparent",boxShadow:"0 0 24px rgba(198,40,40,.45)",textTransform:"uppercase",radius:"999px",padding:"16px 34px"},{text:"Music",url:"#music",backgroundColor:"#8b3df4",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"16px",borderWidth:"0px",borderColor:"transparent",boxShadow:"0 0 24px rgba(57,255,20,.45)",textTransform:"uppercase",radius:"999px",padding:"16px 34px"},{text:"Join the Army of the Dead",url:"signup.html",backgroundColor:"#b000ff",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"16px",borderWidth:"0px",borderColor:"transparent",boxShadow:"0 0 24px rgba(57,255,20,.55)",textTransform:"uppercase",radius:"999px",padding:"16px 34px"},{text:"About",url:"about.html",backgroundColor:"#8b3df4",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"16px",borderWidth:"0px",borderColor:"transparent",boxShadow:"none",textTransform:"uppercase",radius:"999px",padding:"16px 34px"},{text:"Gallery",url:"gallery.html",backgroundColor:"#8b3df4",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"16px",borderWidth:"0px",borderColor:"transparent",boxShadow:"none",textTransform:"uppercase",radius:"999px",padding:"16px 34px"},{text:"Merch",url:"merch.html",backgroundColor:"#8b3df4",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"16px",borderWidth:"0px",borderColor:"transparent",boxShadow:"none",textTransform:"uppercase",radius:"999px",padding:"16px 34px"},{text:"Graffiti Wall",url:"graffiti-wall.html",backgroundColor:"#8b3df4",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"16px",borderWidth:"0px",borderColor:"transparent",boxShadow:"none",textTransform:"uppercase",radius:"999px",padding:"16px 34px"},{text:"Buy the Band a Coffee",url:"#",backgroundColor:"#000000",textColor:"#00ff04",fontFamily:"Oswald, sans-serif",fontSize:"16px",borderWidth:"1px",borderColor:"#00ff04",boxShadow:"0 0 24px rgba(57,255,20,.45)",textTransform:"uppercase",radius:"999px",padding:"16px 34px"},{text:"Booking",url:"contact.html",backgroundColor:"#b000ff",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"16px",borderWidth:"0px",borderColor:"transparent",boxShadow:"0 0 24px rgba(57,255,20,.45)",textTransform:"uppercase",radius:"999px",padding:"16px 34px"}]}},{type:"Spacer",props:{id:"graverobber-home-divider-space-1",height:40,backgroundColor:"transparent"}},{type:"GraveRobberSocial",props:{id:"graverobber-home-social-1",title:"Follow Grave Robber",titleColor:"#ffffff",titleFont:"Oswald, sans-serif",titleSize:"1rem",backgroundColor:"transparent",textColor:"#ffffff",paddingY:50,paddingX:24,links:[{platform:"facebook",label:"Facebook",url:"https://www.facebook.com/graverobberpunk",iconColor:"#ffffff",backgroundColor:"transparent",borderColor:"rgba(255,255,255,.35)"},{platform:"instagram",label:"Instagram",url:"https://www.instagram.com/graverobberpunk",iconColor:"#ffffff",backgroundColor:"transparent",borderColor:"rgba(255,255,255,.35)"},{platform:"spotify",label:"Spotify",url:"https://open.spotify.com/artist/4D34aUp0OsDs8mAEWPIP7c",iconColor:"#ffffff",backgroundColor:"transparent",borderColor:"rgba(255,255,255,.35)"}]}}]}function ht(e="home"){return{root:{props:{title:`Grave Robber ${e.charAt(0).toUpperCase()+e.slice(1)}`,...fe}},content:xt(e)}}function yt(){if(typeof window>"u")return"home";const e=window.location.pathname.split("/").pop()||"index.html";return e==="index.html"||e===""?"home":e.replace(".html","")}ht(yt());const Y={root:{fields:{title:{type:"text",label:"Page Title"},backgroundStyle:{type:"select",label:"Page Background Style",options:ut},pageBaseColor:l("Base Color"),pageSecondColor:l("Second Color"),pageThirdColor:l("Third / Vignette Color"),pageGlowColor:l("Main Glow / Ombre Color"),pageSecondGlowColor:l("Second Glow Color"),pageThirdGlowColor:l("Third Glow / Darkness Color"),pageTextColor:l("Default Page Text Color"),pageGradientAngle:{type:"text",label:"Gradient Direction / Angle",placeholder:"Example: 180deg, 135deg, 90deg"},pageGlowPosition:{type:"text",label:"Main Glow Position",placeholder:"Example: center 18%, top center, left 20%"},pageGlowSize:{type:"text",label:"Main Glow Spread / Size",placeholder:"Example: 34%, 50%, 420px"},pageSecondGlowPosition:{type:"text",label:"Second Glow Position",placeholder:"Example: center 70%, right center"},pageSecondGlowSize:{type:"text",label:"Second Glow Spread / Size",placeholder:"Example: 45%, 600px"},pageThirdGlowPosition:{type:"text",label:"Third Glow Position",placeholder:"Example: center center, bottom center"},pageThirdGlowSize:{type:"text",label:"Third Glow Spread / Size",placeholder:"Example: 75%, 900px"},customBackgroundCss:{type:"textarea",label:"Custom Background CSS",placeholder:"Example: radial-gradient(circle, red, black)"}},render:({children:e,...t})=>o.jsx("div",{style:{minHeight:"100vh",background:mt(t),color:t.pageTextColor||"#f5f0e6"},children:e})},components:{WelcomeHorrorMessage:{label:"01 Site Block: Animated Horror Welcome Message",fields:{customFontUrl:$("External Font URL For This Block"),theme:{type:"select",label:"Design Theme",options:[{label:"Toxic Grave Pop-Out",value:"toxic"},{label:"Purple Crypt Bounce",value:"crypt"},{label:"Black Fog Fade",value:"fog"},{label:"Slasher Slide Left",value:"slide-left"},{label:"Possessed Slide Top",value:"slide-top"},{label:"Particle Summoning",value:"particles"},{label:"Glitch Demon Signal",value:"glitch"},{label:"Neon Tomb Pulse",value:"tomb"}]},animationStyle:{type:"select",label:"Animation",options:[{label:"Pop Out",value:"pop"},{label:"Bounce Out",value:"bounce"},{label:"Fade In",value:"fade"},{label:"Slide From Left",value:"left"},{label:"Slide From Right",value:"right"},{label:"Drop From Top",value:"top"},{label:"Rise From Bottom",value:"bottom"},{label:"Particles Forming",value:"particles"},{label:"Glitch Flicker",value:"glitch"}]},showInEditor:{type:"select",label:"Show While Editing",options:[{label:"Yes - show so I can design it",value:"yes"},{label:"No - only trigger on exit intent",value:"no"}]},exitTriggerDistance:{type:"number",label:"Exit Trigger Distance From Top"},eyebrow:{type:"text",label:"Small Top Text"},title:{type:"text",label:"Main Welcome Text"},body:{type:"textarea",label:"Message Text"},align:{type:"select",label:"Text Alignment",options:[{label:"Left",value:"left"},{label:"Center",value:"center"},{label:"Right",value:"right"}]},titleColor:l("Title Color"),titleFont:y("Title Font"),titleSize:{type:"text",label:"Title Font Size",placeholder:"48px, 5rem, 9vw"},titleShadow:{type:"text",label:"Title Glow / Shadow",placeholder:"0 0 24px #00ff04"},bodyColor:l("Body Color"),bodyFont:y("Body Font"),bodySize:{type:"text",label:"Body Font Size",placeholder:"18px"},backgroundColor:l("Section Background"),cardBackground:l("Message Box Background"),borderColor:l("Border Color"),glowColor:l("Glow Color"),radius:{type:"text",label:"Rounded Corners",placeholder:"28px"},maxWidth:{type:"text",label:"Message Box Width",placeholder:"900px"},paddingY:{type:"number",label:"Top/Bottom Padding"},paddingX:{type:"number",label:"Left/Right Padding"},buttons:B,noThanksText:{type:"text",label:"No Thanks Button Text"},noThanksBackgroundColor:l("No Thanks Background"),noThanksTextColor:l("No Thanks Text Color"),noThanksBorderColor:l("No Thanks Border Color")},defaultProps:{showInEditor:"yes",exitTriggerDistance:70,theme:"toxic",animationStyle:"pop",eyebrow:"WELCOME TO THE GRAVE",title:"Join the Army of the Dead",body:"You have crossed into Grave Robber territory. Join the Army of the Dead and march with us into the noise.",align:"center",titleColor:"#00ff04",titleFont:"Creepster, cursive",titleSize:"clamp(44px, 8vw, 92px)",titleShadow:"0 0 18px #00ff04, 0 0 42px rgba(187,0,255,.85)",bodyColor:"#ffffff",bodyFont:"Special Elite, cursive",bodySize:"20px",backgroundColor:"transparent",cardBackground:"linear-gradient(135deg, rgba(0,0,0,.92), rgba(32,0,46,.88))",borderColor:"#bb00ff",glowColor:"#00ff04",radius:"28px",maxWidth:"920px",paddingY:70,paddingX:24,customFontUrl:"",noThanksText:"No Thanks",noThanksBackgroundColor:"transparent",noThanksTextColor:"#ffffff",noThanksBorderColor:"rgba(255,255,255,.45)",buttons:[{text:"Join the Army of the Dead",url:"signup.html",backgroundColor:"#bb00ff",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"16px",borderWidth:"2px",borderColor:"#00ff04",boxShadow:"0 0 24px rgba(0,255,4,.75)",textTransform:"uppercase",radius:"999px",padding:"16px 34px"}]},render:e=>{const[t,a]=A.useState(e.showInEditor!=="no");return A.useEffect(()=>{if(e.showInEditor!=="no"){a(!0);return}a(!1);let i=null,r=!1,n=!1;function d(s){const g=Number(e.exitTriggerDistance||70),m=Math.max(g+180,260);s.clientY>=m&&(r=!0);const h=i!==null&&s.clientY<i,w=s.clientY<=g;!n&&r&&h&&w&&(n=!0,a(!0)),i=s.clientY}return document.addEventListener("mousemove",d),()=>document.removeEventListener("mousemove",d)},[e.showInEditor,e.exitTriggerDistance]),t?o.jsxs("section",{className:"puck-section gr-welcome-section gr-exit-popup-wrap",children:[F(e.customFontUrl),o.jsx("style",{children:`
              .gr-exit-popup-wrap{
                position:fixed;
                inset:0;
                z-index:999999;
                display:flex;
                align-items:center;
                justify-content:center;
                padding:24px;
                pointer-events:none;
              }

              .gr-exit-popup-backdrop{
                position:absolute;
                inset:0;
                background:rgba(0,0,0,.82);
                backdrop-filter:blur(8px);
                pointer-events:auto;
              }

              .gr-exit-popup-card{
                width:min(100%, var(--gr-width));
                pointer-events:auto;
              }

              .gr-exit-popup-close{
                position:absolute;
                top:14px;
                right:16px;
                z-index:5;
                width:44px;
                height:44px;
                border-radius:999px;
                border:2px solid #00ff04;
                background:#000000;
                color:#00ff04;
                font-size:28px;
                line-height:1;
                cursor:pointer;
                box-shadow:0 0 24px rgba(0,255,4,.7);
              }

              .gr-welcome-card{
                position:relative;
                overflow:hidden;
                margin:0 auto;
                padding:42px 28px;
                border:2px solid var(--gr-border);
                border-radius:var(--gr-radius);
                max-width:var(--gr-width);
                text-align:var(--gr-align);
                background:var(--gr-bg);
                box-shadow:0 0 28px var(--gr-glow), inset 0 0 34px rgba(187,0,255,.2);
              }

              .gr-welcome-card:before{
                content:"";
                position:absolute;
                inset:-2px;
                background:
                  radial-gradient(circle at 20% 20%,rgba(0,255,4,.28),transparent 28%),
                  radial-gradient(circle at 80% 70%,rgba(187,0,255,.32),transparent 32%);
                pointer-events:none;
              }

              .gr-welcome-content{
                position:relative;
                z-index:2;
              }

              .gr-welcome-eyebrow{
                margin:0 0 12px;
                color:#bb00ff;
                font-family:Oswald,sans-serif;
                font-weight:900;
                letter-spacing:.24em;
                text-transform:uppercase;
                text-shadow:0 0 16px rgba(187,0,255,.9);
              }

              .gr-welcome-title{
                margin:0;
                color:var(--gr-title);
                font-family:var(--gr-title-font);
                font-size:var(--gr-title-size);
                line-height:.95;
                text-shadow:var(--gr-title-shadow);
                text-transform:uppercase;
              }

              .gr-welcome-body{
                margin:22px auto 0;
                color:var(--gr-body);
                font-family:var(--gr-body-font);
                font-size:var(--gr-body-size);
                line-height:1.55;
                max-width:760px;
              }

              .gr-exit-popup-no-thanks{
                margin-left:10px;
                border-radius:999px;
                padding:16px 34px;
                font-family:Oswald,sans-serif;
                font-size:16px;
                font-weight:700;
                text-transform:uppercase;
                cursor:pointer;
              }

              .gr-welcome-particles{
                position:absolute;
                inset:0;
                pointer-events:none;
                z-index:1;
              }

              .gr-welcome-particles span{
                position:absolute;
                width:7px;
                height:7px;
                border-radius:999px;
                background:#00ff04;
                box-shadow:0 0 18px #00ff04;
                animation:grParticle 1.8s ease-out both;
              }

              .gr-welcome-particles span:nth-child(1){left:8%;top:20%;animation-delay:.02s}
              .gr-welcome-particles span:nth-child(2){left:18%;top:80%;animation-delay:.08s}
              .gr-welcome-particles span:nth-child(3){left:32%;top:12%;animation-delay:.14s}
              .gr-welcome-particles span:nth-child(4){left:48%;top:92%;animation-delay:.2s}
              .gr-welcome-particles span:nth-child(5){left:68%;top:18%;animation-delay:.26s}
              .gr-welcome-particles span:nth-child(6){left:88%;top:74%;animation-delay:.32s}
              .gr-welcome-particles span:nth-child(7){left:78%;top:45%;animation-delay:.38s}
              .gr-welcome-particles span:nth-child(8){left:42%;top:52%;animation-delay:.44s}

              .gr-theme-toxic{background:linear-gradient(135deg,rgba(0,0,0,.96),rgba(0,45,2,.92))!important;border-color:#00ff04!important;box-shadow:0 0 44px rgba(0,255,4,.75),inset 0 0 44px rgba(0,255,4,.16)!important;}
              .gr-theme-toxic .gr-welcome-title{color:#00ff04!important;filter:drop-shadow(0 0 18px #00ff04);}
              .gr-theme-toxic:after{content:"";position:absolute;inset:0;background:repeating-linear-gradient(115deg,rgba(0,255,4,.08) 0 2px,transparent 2px 18px);pointer-events:none;}

              .gr-theme-crypt{background:linear-gradient(145deg,rgba(17,0,26,.96),rgba(0,0,0,.94))!important;border-color:#bb00ff!important;box-shadow:0 0 42px rgba(187,0,255,.75),inset 0 0 42px rgba(0,255,4,.18)!important;}
              .gr-theme-crypt .gr-welcome-title{color:#bb00ff!important;letter-spacing:.06em;}

              .gr-theme-fog{background:radial-gradient(circle at center,rgba(30,30,30,.96),rgba(0,0,0,.98))!important;border-color:rgba(255,255,255,.28)!important;box-shadow:0 0 50px rgba(255,255,255,.26),inset 0 0 40px rgba(255,255,255,.1)!important;}
              .gr-theme-fog .gr-welcome-title{color:#f2f2f2!important;}
              .gr-theme-fog:after{content:"";position:absolute;inset:-40%;background:radial-gradient(circle,rgba(255,255,255,.16),transparent 38%);filter:blur(24px);animation:grFogDrift 7s ease-in-out infinite alternate;pointer-events:none;}

              .gr-theme-slide-left{background:linear-gradient(90deg,rgba(0,0,0,.98),rgba(70,0,0,.92))!important;border-color:#ff0033!important;box-shadow:0 0 44px rgba(255,0,51,.55),inset 0 0 35px rgba(187,0,255,.24)!important;}
              .gr-theme-slide-left .gr-welcome-title{color:#ffffff!important;text-shadow:4px 0 0 #bb00ff,-4px 0 0 #00ff04,0 0 28px #ff0033!important;}

              .gr-theme-slide-top{background:linear-gradient(180deg,rgba(35,0,52,.98),rgba(0,0,0,.96))!important;border-color:#bb00ff!important;box-shadow:0 0 44px rgba(187,0,255,.62),inset 0 0 36px rgba(0,255,4,.2)!important;}
              .gr-theme-slide-top:after{content:"";position:absolute;left:0;right:0;top:0;height:45%;background:linear-gradient(180deg,rgba(187,0,255,.28),transparent);pointer-events:none;}

              .gr-theme-particles{background:radial-gradient(circle at center,rgba(0,35,2,.98),rgba(0,0,0,.98))!important;border-color:#00ff04!important;box-shadow:0 0 48px rgba(0,255,4,.65),inset 0 0 42px rgba(187,0,255,.22)!important;}
              .gr-theme-particles .gr-welcome-content{animation:grAssembleContent 1.4s ease-out both;}
              .gr-theme-particles .gr-welcome-title{animation:grTextAssemble 1.6s ease-out both;}
              .gr-theme-particles .gr-welcome-body{animation:grTextAssemble 1.9s ease-out both;}

              .gr-theme-glitch{background:linear-gradient(135deg,rgba(0,0,0,.98),rgba(18,0,26,.96))!important;border-color:#00ff04!important;box-shadow:0 0 44px rgba(187,0,255,.6),inset 0 0 36px rgba(0,255,4,.18)!important;}
              .gr-theme-glitch .gr-welcome-title{animation:grDemonGlitch 1.4s steps(2,end) infinite;color:#00ff04!important;text-shadow:3px 0 #bb00ff,-3px 0 #00ff04,0 0 30px #00ff04!important;}

              .gr-theme-tomb{background:linear-gradient(135deg,rgba(0,0,0,.98),rgba(0,22,1,.94),rgba(40,0,60,.88))!important;border-color:#00ff04!important;box-shadow:0 0 24px #00ff04,0 0 56px rgba(187,0,255,.75),inset 0 0 38px rgba(0,255,4,.2)!important;}

              .gr-anim-pop{animation:grPop .9s cubic-bezier(.2,1.25,.35,1) both;}
              .gr-anim-bounce{animation:grBounce 1.1s both;}
              .gr-anim-fade{animation:grFade 1.4s both;}
              .gr-anim-left{animation:grLeft 1s both;}
              .gr-anim-right{animation:grRight 1s both;}
              .gr-anim-top{animation:grTop 1s both;}
              .gr-anim-bottom{animation:grBottom 1s both;}
              .gr-anim-particles{animation:grParticlesIn 1.4s both;}
              .gr-anim-glitch{animation:grGlitch 1.2s steps(2,end) both;}

              @keyframes grPop{0%{opacity:0;transform:scale(.45) rotate(-4deg)}70%{opacity:1;transform:scale(1.08) rotate(1deg)}100%{transform:scale(1) rotate(0)}}
              @keyframes grBounce{0%{opacity:0;transform:scale(.2) translateY(80px)}55%{opacity:1;transform:scale(1.12) translateY(-18px)}75%{transform:scale(.96) translateY(8px)}100%{transform:scale(1) translateY(0)}}
              @keyframes grFade{from{opacity:0;filter:blur(18px)}to{opacity:1;filter:blur(0)}}
              @keyframes grLeft{from{opacity:0;transform:translateX(-120px)}to{opacity:1;transform:translateX(0)}}
              @keyframes grRight{from{opacity:0;transform:translateX(120px)}to{opacity:1;transform:translateX(0)}}
              @keyframes grTop{from{opacity:0;transform:translateY(-120px)}to{opacity:1;transform:translateY(0)}}
              @keyframes grBottom{from{opacity:0;transform:translateY(120px)}to{opacity:1;transform:translateY(0)}}
              @keyframes grParticlesIn{0%{opacity:0;transform:scale(.75);filter:blur(14px)}100%{opacity:1;transform:scale(1);filter:blur(0)}}
              @keyframes grGlitch{0%{opacity:0;transform:skewX(8deg)}20%{opacity:1;transform:translateX(-8px)}40%{transform:translateX(8px)}60%{transform:translateX(-4px)}80%{transform:translateX(4px)}100%{transform:none}}
              @keyframes grParticle{0%{opacity:0;transform:scale(0) translate(0,0)}50%{opacity:1}100%{opacity:0;transform:scale(1.8) translate(26px,-34px)}}
              @keyframes grFogDrift{from{transform:translate(-8%,-4%) scale(1)}to{transform:translate(8%,4%) scale(1.18)}}
              @keyframes grAssembleContent{0%{opacity:0;filter:blur(18px);transform:scale(1.2)}100%{opacity:1;filter:blur(0);transform:scale(1)}}
              @keyframes grTextAssemble{0%{opacity:0;letter-spacing:.55em;filter:blur(12px);transform:translateY(28px) scale(1.25)}100%{opacity:1;letter-spacing:normal;filter:blur(0);transform:none}}
              @keyframes grDemonGlitch{0%,100%{transform:none}20%{transform:translate(-3px,2px) skewX(8deg)}40%{transform:translate(3px,-2px) skewX(-8deg)}60%{transform:translate(-2px,0)}80%{transform:translate(2px,1px)}}
            `}),o.jsx("div",{className:"gr-exit-popup-backdrop",onClick:()=>a(!1)}),o.jsxs("div",{className:`gr-welcome-card gr-exit-popup-card gr-theme-${e.theme||"toxic"} gr-anim-${e.animationStyle||"pop"}`,style:{"--gr-bg":e.cardBackground||"rgba(0,0,0,.92)","--gr-border":e.borderColor||"#bb00ff","--gr-glow":e.glowColor||"#00ff04","--gr-radius":e.radius||"28px","--gr-width":e.maxWidth||"920px","--gr-align":e.align||"center","--gr-title":e.titleColor||"#00ff04","--gr-title-font":e.titleFont||"Creepster, cursive","--gr-title-size":e.titleSize||"clamp(44px, 8vw, 92px)","--gr-title-shadow":e.titleShadow||"0 0 18px #00ff04","--gr-body":e.bodyColor||"#ffffff","--gr-body-font":e.bodyFont||"Special Elite, cursive","--gr-body-size":e.bodySize||"20px"},children:[o.jsx("button",{className:"gr-exit-popup-close",onClick:()=>a(!1),children:"×"}),(e.theme==="particles"||e.animationStyle==="particles")&&o.jsx("div",{className:"gr-welcome-particles","aria-hidden":"true",children:Array.from({length:8}).map((i,r)=>o.jsx("span",{},r))}),o.jsxs("div",{className:"gr-welcome-content",children:[e.eyebrow&&o.jsx("p",{className:"gr-welcome-eyebrow",children:e.eyebrow}),e.title&&o.jsx("h2",{className:"gr-welcome-title",children:e.title}),e.body&&o.jsx("p",{className:"gr-welcome-body",children:e.body}),(e.buttons||[]).length>0&&o.jsxs("div",{className:"puck-buttons",children:[(e.buttons||[]).map((i,r)=>o.jsx(W,{button:i,index:r},r)),e.noThanksText&&o.jsx("button",{type:"button",className:"puck-btn gr-exit-popup-no-thanks",onClick:()=>a(!1),style:{background:e.noThanksBackgroundColor||"transparent",color:e.noThanksTextColor||"#ffffff",border:`1px solid ${e.noThanksBorderColor||"rgba(255,255,255,.45)"}`},children:e.noThanksText})]})]})]})]}):o.jsx("div",{className:"puck-section",style:{padding:"4px 12px",background:"rgba(0,0,0,.85)",color:"#00ff04",border:"1px dashed #bb00ff",fontSize:"12px",textAlign:"center"},children:"Exit-intent horror popup is hidden until mouse moves toward browser close area."})}},GraveRobberHero:{label:"01 Site Block: Grave Robber Main Horror Hero",fields:{title:{type:"text",label:"Title"},subtitle:{type:"text",label:"Subtitle"},body:{type:"textarea",label:"Body Text"},imageUrl:v("Image"),imageAlt:{type:"text",label:"Image Alt Text"},layout:{type:"select",label:"Layout",options:[{label:"Centered",value:"center"},{label:"Image Top",value:"image-top"},{label:"Text Left / Image Right",value:"text-left"},{label:"Text Right / Image Left",value:"text-right"}]},imageWidth:T("Image Width",{placeholder:"Example: 900px"}),mobileImageWidth:T("Mobile Image Width",{placeholder:"Example: 70vw or 280px"}),imageRadius:T("Image Rounded Corners",{placeholder:"Example: 50%"}),imageShadow:{type:"text",label:"Image Shadow / Glow CSS",placeholder:"Example: 0 0 40px currentColor"},titleSize:T("Title Font Size",{placeholder:"Example: 72px"}),titleColor:l("Title Color"),titleFont:y("Title Font"),subtitleColor:l("Subtitle Color"),bodyColor:l("Body Color"),backgroundColor:l("Section Background"),textColor:l("Default Text Color"),paddingY:{type:"number",label:"Top/Bottom Padding"},paddingX:{type:"number",label:"Left/Right Padding"},buttons:B},defaultProps:{title:"Grave Robber",subtitle:"AMERICAN HORROR PUNK",body:"Horror punk from beyond the grave. Shows, music, merch, booking, and updates.",imageUrl:"assets/grave-robber-skull.png",imageAlt:"Grave Robber skull logo",layout:"center",imageWidth:"300px",mobileImageWidth:"70vw",imageRadius:"0px",imageShadow:"0 0 55px rgba(198,40,40,.45)",titleSize:"80px",titleColor:"#f2f2f2",titleFont:"Creepster, cursive",subtitleColor:"#c62828",bodyColor:"#d6d6d6",backgroundColor:"transparent",textColor:"#ffffff",paddingY:70,paddingX:24,buttons:[{text:"Shows",url:"shows.html",backgroundColor:"#c62828",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"16px",borderWidth:"0px",borderColor:"transparent",boxShadow:"0 0 24px rgba(198,40,40,.35)",textTransform:"uppercase",radius:"999px",padding:"16px 34px"},{text:"Join the Army of the Dead",url:"signup.html",backgroundColor:"transparent",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"16px",borderWidth:"1px",borderColor:"rgba(255,255,255,.35)",radius:"999px",padding:"16px 34px"}]},render:e=>Y.components.Hero.render(e)},GraveRobberLogo:{label:"01 Site Block: Grave Robber Stacked Logo",fields:{imageUrl:v("Logo Image"),imageAlt:{type:"text",label:"Image Alt Text"},width:T("Image Width",{placeholder:"Example: 520px"}),radius:T("Rounded Corners",{placeholder:"Example: 12px"}),shadow:{type:"text",label:"Image Shadow / Glow CSS"},align:{type:"select",label:"Image Placement",options:dt},backgroundColor:l("Section Background"),paddingY:{type:"number",label:"Top/Bottom Padding"},paddingX:{type:"number",label:"Left/Right Padding"}},defaultProps:{imageUrl:"assets/grave-robber-logo-stacked.png",imageAlt:"Grave Robber logo",width:"520px",radius:"12px",shadow:"0 20px 60px rgba(0,0,0,.55)",align:"center",backgroundColor:"transparent",paddingY:30,paddingX:24},render:e=>Y.components.ImageBlock.render(e)},GraveRobberSocial:{label:"01 Site Block: Grave Robber Social / Merch Links",fields:{title:{type:"text",label:"Title"},titleColor:l("Title Color"),titleFont:y("Title Font"),titleSize:{type:"text",label:"Title Font Size"},backgroundColor:l("Section Background"),paddingY:{type:"number",label:"Top/Bottom Padding"},paddingX:{type:"number",label:"Left/Right Padding"},links:{type:"array",label:"Links",arrayFields:{platform:{type:"select",label:"Platform",options:oe},label:{type:"text",label:"Label"},url:{type:"text",label:"URL"},iconColor:l("Icon Color"),backgroundColor:l("Icon Background"),borderWidth:{type:"select",label:"Icon Border",options:[{label:"No Border",value:"0px"},{label:"Thin Border",value:"1px"},{label:"Medium Border",value:"2px"},{label:"Thick Border",value:"4px"}]},borderColor:l("Icon Border"),boxShadow:{type:"text",label:"Icon Glow / Shadow",placeholder:"0 0 24px #00ff04"},radius:{type:"text",label:"Icon Rounded Corners",placeholder:"999px"},size:{type:"text",label:"Icon Button Size",placeholder:"44px"},svgSize:{type:"text",label:"Symbol Size",placeholder:"22px"},padding:{type:"text",label:"Icon Padding",placeholder:"0px"}},defaultItemProps:{platform:"custom",label:"Link",url:"#",iconColor:"#bb00ff",backgroundColor:"#000000",borderWidth:"1px",borderColor:"#00ff04",boxShadow:"0 0 24px #00ff04",radius:"999px",size:"44px",svgSize:"22px",padding:"0px"}}},defaultProps:{title:"Follow Grave Robber",titleColor:"#ffffff",titleFont:"Oswald, sans-serif",titleSize:"1rem",backgroundColor:"transparent",paddingY:50,paddingX:24,links:[{platform:"facebook",label:"Facebook",url:"https://www.facebook.com/graverobberpunk",iconColor:"#ffffff",backgroundColor:"rgba(198,40,40,.18)",borderColor:"rgba(198,40,40,.65)"},{platform:"instagram",label:"Instagram",url:"https://www.instagram.com/graverobberpunk",iconColor:"#ffffff",backgroundColor:"rgba(198,40,40,.18)",borderColor:"rgba(198,40,40,.65)"},{platform:"spotify",label:"Spotify",url:"https://open.spotify.com/artist/4D34aUp0OsDs8mAEWPIP7c",iconColor:"#ffffff",backgroundColor:"rgba(198,40,40,.18)",borderColor:"rgba(198,40,40,.65)"}]},render:e=>Y.components.SocialIcons.render(e)},HeaderNav:{label:"02 Add Block: Header / Page Navigation",fields:{backgroundColor:l("Header Background"),lineColor:l("Bottom Line Color"),lineShadow:{type:"text",label:"Bottom Line Shadow",placeholder:"0 0 24px rgba(77,198,225,.22)"},showBack:{type:"select",label:"Back Button",options:[{label:"Show",value:"show"},{label:"Hide",value:"hide"}]},backText:{type:"text",label:"Back Text"},backUrl:{type:"text",label:"Back Link"},logoUrl:v("Header Logo"),logoAlt:{type:"text",label:"Logo Alt Text"},logoSize:{type:"text",label:"Logo Size",placeholder:"45px"},logoPlacement:{type:"select",label:"Logo Placement",options:[{label:"Left",value:"left"},{label:"Right",value:"right"}]},logoBackgroundColor:l("Logo Background Color"),logoBorderWidth:{type:"text",label:"Logo Border Width",placeholder:"0px or 1px"},logoBorderColor:l("Logo Border Color"),logoRadius:{type:"text",label:"Logo Rounded Corners",placeholder:"999px or 0px"},logoPadding:{type:"text",label:"Logo Padding",placeholder:"0px"},logoBoxShadow:{type:"text",label:"Logo Shadow / Glow",placeholder:"0 0 24px #00ff04"},logoImageShadow:{type:"text",label:"Logo Image Shadow / Glow",placeholder:"0 0 18px #00ff04"},width:{type:"text",label:"Header Width",placeholder:"100%, 1200px, 80vw"},maxWidth:{type:"text",label:"Header Max Width",placeholder:"none or 1200px"},margin:{type:"text",label:"Header Margin",placeholder:"0 auto"},padding:{type:"text",label:"Header Padding",placeholder:"22px 40px"},navPlacement:{type:"select",label:"Button Placement",options:[{label:"Left",value:"left"},{label:"Center",value:"center"},{label:"Right",value:"right"}]},headerPosition:{type:"select",label:"Header Stretch Mode",options:[{label:"Normal",value:"normal"},{label:"Full Browser Width",value:"full"}]},buttons:B},defaultProps:{backgroundColor:"rgba(0,0,0,.72)",lineColor:"rgba(77,198,225,.45)",lineShadow:"0 0 24px rgba(77,198,225,.22)",showBack:"show",backText:"Back",backUrl:"index.html",logoUrl:"assets/grave-robber-skull.png",logoAlt:"Grave Robber Logo",logoSize:"45px",logoPlacement:"left",logoBackgroundColor:"transparent",logoBorderWidth:"0px",logoBorderColor:"transparent",logoRadius:"999px",logoPadding:"0px",logoBoxShadow:"none",logoImageShadow:"none",width:"100%",maxWidth:"none",margin:"0",padding:"22px 40px",navPlacement:"right",headerPosition:"full",buttons:[{text:"Home",url:"index.html",backgroundColor:"transparent",textColor:"#4dc6e1",fontFamily:"inherit",fontSize:"14px",borderWidth:"1px",borderColor:"rgba(77,198,225,.45)",boxShadow:"0 0 16px rgba(77,198,225,.12)",textTransform:"uppercase",radius:"999px",padding:"10px 16px"},{text:"Shows",url:"shows.html",backgroundColor:"transparent",textColor:"#4dc6e1",fontFamily:"inherit",fontSize:"14px",borderWidth:"1px",borderColor:"rgba(77,198,225,.45)",boxShadow:"0 0 16px rgba(77,198,225,.12)",textTransform:"uppercase",radius:"999px",padding:"10px 16px"},{text:"Signup",url:"signup.html",backgroundColor:"transparent",textColor:"#4dc6e1",fontFamily:"inherit",fontSize:"14px",borderWidth:"1px",borderColor:"rgba(77,198,225,.45)",boxShadow:"0 0 16px rgba(77,198,225,.12)",textTransform:"uppercase",radius:"999px",padding:"10px 16px"},{text:"Contact",url:"contact.html",backgroundColor:"transparent",textColor:"#4dc6e1",fontFamily:"inherit",fontSize:"14px",borderWidth:"1px",borderColor:"rgba(77,198,225,.45)",boxShadow:"0 0 16px rgba(77,198,225,.12)",textTransform:"uppercase",radius:"999px",padding:"10px 16px"},{text:"Admin",url:"admin.html",backgroundColor:"transparent",textColor:"#4dc6e1",fontFamily:"inherit",fontSize:"14px",borderWidth:"1px",borderColor:"rgba(77,198,225,.45)",boxShadow:"0 0 16px rgba(77,198,225,.12)",textTransform:"uppercase",radius:"999px",padding:"10px 16px"}]},render:e=>o.jsxs("header",{className:`puck-site-header ${e.headerPosition==="full"?"is-full-width":""}`,style:{background:e.backgroundColor||"rgba(0,0,0,.72)",borderBottom:`1px solid ${e.lineColor||"rgba(77,198,225,.45)"}`,boxShadow:e.lineShadow||"none",width:e.width||"100%",maxWidth:e.maxWidth||"none",margin:e.margin||"0",padding:e.padding||"22px 40px"},children:[o.jsxs("div",{className:"puck-header-left",children:[e.logoUrl&&e.logoPlacement!=="right"&&o.jsx("a",{className:"puck-header-logo-link logo-left",href:"index.html",style:{"--logo-size":e.logoSize||"45px","--logo-image-shadow":e.logoImageShadow||"none",background:e.logoBackgroundColor||"transparent",border:`${e.logoBorderWidth||"0px"} solid ${e.logoBorderColor||"transparent"}`,borderRadius:e.logoRadius||"999px",padding:e.logoPadding||"0px",boxShadow:e.logoBoxShadow||"none"},children:o.jsx("img",{className:"puck-header-logo",src:e.logoUrl,alt:e.logoAlt||"Logo"})}),e.showBack!=="hide"&&o.jsx("a",{className:"puck-header-back",href:e.backUrl||"index.html",children:e.backText||"Back"})]}),o.jsx("nav",{className:`puck-header-nav nav-${e.navPlacement||"right"}`,children:(e.buttons||[]).map((t,a)=>o.jsx(W,{button:t},a))}),o.jsx("div",{className:"puck-header-right",children:e.logoUrl&&e.logoPlacement==="right"&&o.jsx("a",{className:"puck-header-logo-link logo-right",href:"index.html",style:{"--logo-size":e.logoSize||"45px","--logo-image-shadow":e.logoImageShadow||"none",background:e.logoBackgroundColor||"transparent",border:`${e.logoBorderWidth||"0px"} solid ${e.logoBorderColor||"transparent"}`,borderRadius:e.logoRadius||"999px",padding:e.logoPadding||"0px",boxShadow:e.logoBoxShadow||"none"},children:o.jsx("img",{className:"puck-header-logo",src:e.logoUrl,alt:e.logoAlt||"Logo"})})})]})},SongScroll:{label:"02 Add Block: Song Scroll",fields:{backgroundColor:l("Scroll Background"),lineColor:l("Bottom Line Color"),textColor:l("Song Text Color"),textShadow:{type:"text",label:"Song Text Shadow"},buttonBorderColor:l("Song Border Color"),width:{type:"text",label:"Scroll Width",placeholder:"100%, 100vw, 1200px"},maxWidth:{type:"text",label:"Scroll Max Width",placeholder:"none or 1200px"},margin:{type:"text",label:"Scroll Margin",placeholder:"0 auto"},stretchMode:{type:"select",label:"Scroll Stretch Mode",options:[{label:"Normal",value:"normal"},{label:"Full Browser Width",value:"full"}]},items:{type:"array",label:"Songs",arrayFields:{text:{type:"text",label:"Song Title"}},defaultItemProps:{text:"Song Title"}}},defaultProps:{backgroundColor:"rgba(77,198,225,.12)",lineColor:"rgba(77,198,225,.45)",textColor:"#4dc6e1",textShadow:"0 0 12px rgba(77,198,225,.35)",buttonBorderColor:"rgba(77,198,225,.45)",width:"100%",maxWidth:"none",margin:"0",stretchMode:"full",items:[{text:"Get Up"},{text:"Man on the Moon"},{text:"Losing My Religion"},{text:"Finest Worksong"},{text:"Life and How to Live It"},{text:"Fall on Me"},{text:"Superman"},{text:"These Days"},{text:"Stand"},{text:"The One I Love"}]},render:e=>{const t=e.items||[],a=[...t,...t];return o.jsx("section",{className:`songs-section puck-song-scroll ${e.stretchMode==="full"?"is-full-width":""}`,"aria-label":"Songs We Play",style:{background:e.backgroundColor||"rgba(77,198,225,.12)",borderBottom:`1px solid ${e.lineColor||"rgba(77,198,225,.45)"}`,width:e.width||"100%",maxWidth:e.maxWidth||"none",margin:e.margin||"0"},children:o.jsx("div",{className:"songs-scroll-container",children:o.jsx("div",{className:"songs-scroll puck-song-track",children:a.map((i,r)=>o.jsx("span",{className:"song-name",style:{color:e.textColor||"#4dc6e1",textShadow:e.textShadow||"none",borderColor:e.buttonBorderColor||"rgba(77,198,225,.45)"},children:i.text},r))})})})}},Hero:{label:"02 Add Block: Hero: Text + Image",fields:{customFontUrl:$("External Font URL For This Block"),title:{type:"text",label:"Title"},...C("title"),subtitle:{type:"text",label:"Subtitle"},...C("subtitle"),body:{type:"textarea",label:"Body Text"},...C("body"),imageUrl:v("Hero Image Upload"),imageAlt:{type:"text",label:"Image Alt Text"},layout:{type:"select",label:"Layout",options:[{label:"Text Left / Image Right",value:"text-left"},{label:"Text Right / Image Left",value:"text-right"},{label:"Centered",value:"center"},{label:"Image Top",value:"image-top"}]},imageWidth:{type:"text",label:"Image Width",placeholder:"320px or 50%"},mobileImageWidth:{type:"text",label:"Mobile Image Width",placeholder:"Example: 70vw or 280px"},imageRadius:{type:"text",label:"Image Rounded Corners"},imageShadow:{type:"text",label:"Image Shadow",placeholder:"none or 0 20px 60px rgba(0,0,0,.45)"},maxWidth:{type:"number",label:"Max Section Width"},gap:{type:"number",label:"Gap Between Text/Image"},...R,buttons:B},defaultProps:M(N[0].props),render:e=>o.jsxs(j,{...e,children:[F(e.customFontUrl),o.jsxs("div",{className:`puck-inner puck-flex layout-${e.layout||"text-left"}`,style:{"--gap":`${e.gap||50}px`,"--max-width":`${e.maxWidth||1100}px`},children:[o.jsxs("div",{className:"puck-text",children:[e.title&&o.jsx("h1",{className:"band-name puck-title",style:{fontSize:e.titleSize||"5rem",color:e.titleColor||"inherit",fontFamily:e.titleFont||"inherit",fontWeight:e.titleWeight||"inherit",letterSpacing:e.titleLetterSpacing||"normal"},children:e.title}),e.subtitle&&o.jsx("p",{className:"tagline puck-subtitle",style:{fontSize:e.subtitleSize||"1.8rem",color:e.subtitleColor||"inherit",fontFamily:e.subtitleFont||"inherit",fontWeight:e.subtitleWeight||"inherit",letterSpacing:e.subtitleLetterSpacing||"normal"},children:e.subtitle}),e.body&&o.jsx("p",{className:"description puck-body",style:{fontSize:e.bodySize||"1rem",color:e.bodyColor||"inherit",fontFamily:e.bodyFont||"inherit",fontWeight:e.bodyWeight||"inherit",letterSpacing:e.bodyLetterSpacing||"normal"},children:e.body}),(e.buttons||[]).length>0&&o.jsx("div",{className:"puck-buttons",children:(e.buttons||[]).map((t,a)=>o.jsx(W,{button:t,index:a},a))})]}),e.imageUrl&&o.jsx("img",{className:"puck-image puck-mobile-sized-image",src:e.imageUrl,alt:e.imageAlt||e.title||"Image",style:{width:e.imageWidth||"320px","--mobile-image-width":e.mobileImageWidth||e.imageWidth||"320px",borderRadius:e.imageRadius||"8px",boxShadow:e.imageShadow||"none"}})]})]})},TextBlock:{label:"02 Add Block: Text Block",fields:{customFontUrl:$("External Font URL For This Block"),eyebrow:{type:"text",label:"Small Top Text"},...C("eyebrow"),title:{type:"text",label:"Title"},...C("title"),body:{type:"textarea",label:"Body Text"},...C("body"),align:{type:"select",label:"Text Align",options:[{label:"Left",value:"left"},{label:"Center",value:"center"},{label:"Right",value:"right"}]},maxWidth:{type:"text",label:"Text Box Width"},...R,buttons:B},defaultProps:{id:"text-block",eyebrow:"",eyebrowColor:"#ffffff",eyebrowFont:"inherit",eyebrowSize:"1rem",eyebrowWeight:"400",title:"New Text Section",titleSize:"3rem",titleColor:"#ffffff",titleFont:"Playfair Display, serif",titleWeight:"700",body:"Edit this text.",bodySize:"1rem",bodyColor:"#ffffff",bodyFont:"inherit",bodyWeight:"400",align:"center",maxWidth:"850px",backgroundColor:"transparent",textColor:"#ffffff",paddingY:50,paddingX:24,customFontUrl:"",buttons:[]},render:e=>o.jsxs(j,{...e,children:[F(e.customFontUrl),o.jsxs("div",{className:"puck-inner puck-text",style:{textAlign:e.align||"center",maxWidth:e.maxWidth||"850px"},children:[e.eyebrow&&o.jsx("p",{className:"teaser",style:{color:e.eyebrowColor||"inherit",fontFamily:e.eyebrowFont||"inherit",fontSize:e.eyebrowSize||"inherit",fontWeight:e.eyebrowWeight||"inherit",letterSpacing:e.eyebrowLetterSpacing||"normal"},children:e.eyebrow}),e.title&&o.jsx("h2",{className:"puck-title",style:{fontSize:e.titleSize||"3rem",color:e.titleColor||"inherit",fontFamily:e.titleFont||"inherit",fontWeight:e.titleWeight||"inherit",letterSpacing:e.titleLetterSpacing||"normal",textDecoration:e.titleDecoration||"none"},children:e.title}),e.body&&o.jsx("p",{className:"puck-body",style:{fontSize:e.bodySize||"1rem",color:e.bodyColor||"inherit",fontFamily:e.bodyFont||"inherit",fontWeight:e.bodyWeight||"inherit",letterSpacing:e.bodyLetterSpacing||"normal"},children:e.body}),o.jsx("div",{className:"puck-buttons",children:(e.buttons||[]).map((t,a)=>o.jsx(W,{button:t,index:a},a))})]})]})},ImageBlock:{label:"02 Add Block: Image",fields:{customFontUrl:$("External Font URL For This Block"),title:{type:"text",label:"Optional Title"},...C("title"),imageUrl:v("Image Upload"),imageAlt:{type:"text",label:"Image Alt Text"},width:{type:"text",label:"Image Width",placeholder:"900px or 100%"},mobileWidth:{type:"text",label:"Mobile Image Width",placeholder:"Example: 70vw or 280px"},radius:{type:"text",label:"Rounded Corners"},shadow:{type:"text",label:"Image Shadow",placeholder:"none or 0 20px 60px rgba(0,0,0,.45)"},align:{type:"select",label:"Align",options:[{label:"Left",value:"left"},{label:"Center",value:"center"},{label:"Right",value:"right"}]},maxWidth:{type:"text",label:"Container Width"},backgroundColor:l("Background Color"),paddingY:{type:"number",label:"Top/Bottom Padding"},paddingX:{type:"number",label:"Left/Right Padding"}},defaultProps:M(N[1].props),render:e=>o.jsxs("section",{className:"puck-section",style:{background:e.backgroundColor||"transparent",padding:`${e.paddingY||40}px ${e.paddingX||24}px`,textAlign:e.align||"center"},children:[F(e.customFontUrl),o.jsxs("div",{className:"puck-inner",style:{maxWidth:e.maxWidth||"1100px"},children:[e.title&&o.jsx("h2",{className:"puck-title",style:{fontSize:e.titleSize||"3rem",color:e.titleColor||"inherit",fontFamily:e.titleFont||"inherit",fontWeight:e.titleWeight||"inherit"},children:e.title}),e.imageUrl&&o.jsx("img",{className:"puck-image puck-mobile-sized-image",src:e.imageUrl,alt:e.imageAlt||e.title||"Image",style:{width:e.width||"900px","--mobile-image-width":e.mobileWidth||e.width||"900px",borderRadius:e.radius||"8px",boxShadow:e.shadow||"none"}})]})]})},ButtonRow:{label:"02 Add Block: Button Row",fields:{customFontUrl:$("External Font URL For Buttons"),...R,buttons:B},defaultProps:M(N[2].props),render:e=>o.jsxs(j,{...e,children:[F(e.customFontUrl),o.jsx("div",{className:"puck-inner",children:o.jsx("div",{className:"puck-buttons",children:(e.buttons||[]).map((t,a)=>o.jsx(W,{button:t,index:a},a))})})]})},SocialIcons:{label:"02 Add Block: Social Icons",fields:{title:{type:"text",label:"Title"},titleColor:l("Title Color"),titleFont:y("Title Font"),titleSize:{type:"text",label:"Title Font Size"},titleWeight:{type:"select",label:"Title Weight",options:[{label:"Default",value:"inherit"},{label:"Regular",value:"400"},{label:"Bold",value:"700"},{label:"Black",value:"900"}]},...R,links:{type:"array",label:"Social Links - add as many as you want",arrayFields:{platform:{type:"select",label:"Platform",options:oe},label:{type:"text",label:"Custom Label / Title"},url:{type:"text",label:"URL"},iconColor:l("Icon Color"),backgroundColor:l("Icon Background"),borderWidth:{type:"select",label:"Icon Border",options:[{label:"No Border",value:"0px"},{label:"Thin Border",value:"1px"},{label:"Medium Border",value:"2px"},{label:"Thick Border",value:"4px"}]},borderColor:l("Icon Border Color"),boxShadow:{type:"text",label:"Icon Glow / Shadow",placeholder:"0 0 24px #00ff04"},radius:{type:"text",label:"Icon Rounded Corners",placeholder:"999px"},size:{type:"text",label:"Icon Button Size",placeholder:"44px"},svgSize:{type:"text",label:"Symbol Size",placeholder:"22px"},padding:{type:"text",label:"Icon Padding",placeholder:"0px"}},defaultItemProps:{platform:"facebook",label:"Facebook",url:"https://facebook.com",iconColor:"#bb00ff",backgroundColor:"#000000",borderWidth:"1px",borderColor:"#00ff04",boxShadow:"0 0 24px #00ff04",radius:"999px",size:"44px",svgSize:"22px",padding:"0px"}}},defaultProps:M(N[3].props),render:e=>o.jsx(j,{...e,children:o.jsxs("div",{className:"puck-inner",style:{textAlign:"center"},children:[e.title&&o.jsx("p",{className:"teaser",style:{color:e.titleColor||"inherit",fontFamily:e.titleFont||"inherit",fontSize:e.titleSize||"inherit",fontWeight:e.titleWeight||"inherit"},children:e.title}),o.jsx("nav",{className:"puck-social-links social-links",children:(e.links||[]).filter(t=>t.url).map((t,a)=>o.jsx("a",{className:"social-link",href:t.url||"#",title:t.label||t.platform,style:{color:t.iconColor||"inherit",background:t.backgroundColor||"rgba(255,255,255,.03)",border:`${t.borderWidth||"1px"} solid ${t.borderColor||"rgba(255,255,255,.18)"}`,boxShadow:t.boxShadow||"none",borderRadius:t.radius||"999px",width:t.size||"44px",height:t.size||"44px",minWidth:t.size||"44px",minHeight:t.size||"44px",padding:t.padding||"0px","--social-svg-size":t.svgSize||"22px"},children:o.jsx(gt,{platform:t.platform,label:t.label})},a))})]})})},Columns:{label:"02 Add Block: Columns / Cards",fields:{customFontUrl:$("External Font URL For This Block"),columns:{type:"number",label:"Columns"},gap:{type:"number",label:"Gap"},imageRadius:{type:"text",label:"Image Radius"},...R,items:{type:"array",label:"Cards",arrayFields:{title:{type:"text",label:"Title"},titleColor:l("Title Color"),titleFont:y("Title Font"),titleSize:{type:"text",label:"Title Size"},body:{type:"textarea",label:"Body"},bodyColor:l("Body Color"),bodyFont:y("Body Font"),bodySize:{type:"text",label:"Body Size"},imageUrl:v("Card Image Upload"),buttonText:{type:"text",label:"Button Text"},buttonUrl:{type:"text",label:"Button URL"},buttonBackgroundColor:l("Button Background"),buttonTextColor:l("Button Text Color"),buttonFont:y("Button Font"),buttonFontSize:{type:"text",label:"Button Font Size"},buttonBorderWidth:{type:"select",label:"Button Border",options:[{label:"No Border",value:"0px"},{label:"Thin Border",value:"1px"},{label:"Medium Border",value:"2px"},{label:"Thick Border",value:"4px"}]},buttonBorderColor:l("Button Border Color"),buttonBoxShadow:{type:"text",label:"Button Glow / Shadow"},buttonTextTransform:{type:"select",label:"Button Text Case",options:[{label:"Uppercase",value:"uppercase"},{label:"Normal",value:"none"},{label:"Lowercase",value:"lowercase"},{label:"Capitalize",value:"capitalize"}]},buttonRadius:{type:"text",label:"Button Radius"}},defaultItemProps:{title:"Card title",titleColor:"#ffffff",titleFont:"inherit",titleSize:"1.4rem",body:"Card text",bodyColor:"#ffffff",bodyFont:"inherit",bodySize:"1rem",imageUrl:"",buttonText:"",buttonUrl:"#",buttonBackgroundColor:"#8b3df4",buttonTextColor:"#ffffff",buttonFont:"inherit",buttonFontSize:"16px",buttonBorderWidth:"0px",buttonBorderColor:"transparent",buttonBoxShadow:"none",buttonTextTransform:"uppercase",buttonRadius:"999px"}}},defaultProps:{columns:2,gap:24,imageRadius:"8px",backgroundColor:"transparent",textColor:"#ffffff",paddingY:50,paddingX:24,customFontUrl:"",items:[{title:"First Card",body:"Edit this card.",imageUrl:"",buttonText:"",buttonUrl:"#",buttonBorderWidth:"0px",buttonBorderColor:"transparent"},{title:"Second Card",body:"Edit this card.",imageUrl:"",buttonText:"",buttonUrl:"#"}]},render:e=>o.jsxs(j,{...e,children:[F(e.customFontUrl),o.jsx("div",{className:"puck-inner",children:o.jsx("div",{className:"puck-columns",style:{"--cols":e.columns||2,"--gap":`${e.gap||24}px`},children:(e.items||[]).map((t,a)=>o.jsxs("div",{className:"puck-card",children:[t.imageUrl&&o.jsx("img",{className:"puck-image",src:t.imageUrl,alt:t.title||"Column image",style:{width:"100%",borderRadius:e.imageRadius||"8px",marginBottom:16}}),t.title&&o.jsx("h3",{style:{color:t.titleColor||"inherit",fontFamily:t.titleFont||"inherit",fontSize:t.titleSize||"inherit"},children:t.title}),t.body&&o.jsx("p",{style:{color:t.bodyColor||"inherit",fontFamily:t.bodyFont||"inherit",fontSize:t.bodySize||"inherit"},children:t.body}),t.buttonText&&o.jsx(W,{button:{text:t.buttonText,url:t.buttonUrl,backgroundColor:t.buttonBackgroundColor,textColor:t.buttonTextColor,fontFamily:t.buttonFont,fontSize:t.buttonFontSize,borderWidth:t.buttonBorderWidth,borderColor:t.buttonBorderColor,radius:t.buttonRadius,boxShadow:t.buttonBoxShadow,textTransform:t.buttonTextTransform}})]},a))})})]})},GalleryGrid:{label:"02 Add Block: Gallery Grid",fields:{title:{type:"text",label:"Title"},titleColor:l("Title Color"),titleFont:y("Title Font"),titleSize:{type:"text",label:"Title Size"},backgroundColor:l("Section Background"),textColor:l("Default Text Color"),paddingY:{type:"number",label:"Top/Bottom Padding"},paddingX:{type:"number",label:"Left/Right Padding"},columns:{type:"number",label:"Columns"},gap:{type:"number",label:"Gap"},images:{type:"array",label:"Gallery Images",arrayFields:{imageUrl:v("Image"),imageAlt:{type:"text",label:"Alt Text"},caption:{type:"text",label:"Caption"}},defaultItemProps:{imageUrl:"",imageAlt:"Gallery image",caption:""}}},defaultProps:{title:"Gallery",titleColor:"#ffffff",titleFont:"Oswald, sans-serif",titleSize:"2.5rem",backgroundColor:"transparent",textColor:"#ffffff",paddingY:40,paddingX:24,columns:3,gap:18,images:[]},render:e=>o.jsx(j,{...e,children:o.jsxs("div",{className:"puck-inner",children:[e.title&&o.jsx("h2",{className:"puck-title",style:{textAlign:"center",color:e.titleColor||"inherit",fontFamily:e.titleFont||"inherit",fontSize:e.titleSize||"2.5rem"},children:e.title}),o.jsx("div",{className:"puck-gallery-grid",style:{"--cols":e.columns||3,"--gap":`${e.gap||18}px`},children:(e.images||[]).filter(t=>t.imageUrl).map((t,a)=>o.jsxs("figure",{className:"puck-gallery-item",children:[o.jsx("img",{src:t.imageUrl,alt:t.imageAlt||"Gallery image"}),t.caption&&o.jsx("figcaption",{children:t.caption})]},a))})]})})},GraffitiWall:{label:"02 Add Block: Graffiti Wall",fields:{eyebrow:{type:"text",label:"Small Top Text"},title:{type:"text",label:"Title"},body:{type:"textarea",label:"Intro Text"},nameLabel:{type:"text",label:"Name Label"},messageLabel:{type:"text",label:"Message Label"},photoLabel:{type:"text",label:"Photo Label"},paintLabel:{type:"text",label:"Paint Label"},submitText:{type:"text",label:"Submit Button Text"},successMessage:{type:"text",label:"Success Message"},backgroundColor:l("Section Background"),textColor:l("Text Color"),accentColor:l("Accent Color"),panelBackground:l("Panel Background"),borderColor:l("Border Color"),paddingY:{type:"number",label:"Top/Bottom Padding"},paddingX:{type:"number",label:"Left/Right Padding"}},defaultProps:{eyebrow:"Fan wall",title:"Graffiti Wall",body:"Write a message, upload a photo, or paint something for the band. Submissions appear after admin approval.",nameLabel:"Your name",messageLabel:"Your message",photoLabel:"Photo with the band",paintLabel:"Paint",submitText:"Send for Approval",successMessage:"Submitted. It will appear after admin approval.",backgroundColor:"transparent",textColor:"#ffffff",accentColor:"#00ff04",panelBackground:"rgba(0,0,0,.72)",borderColor:"#bb00ff",paddingY:70,paddingX:24},render:e=>o.jsx("section",{className:"puck-section gr-graffiti-wall",style:{background:e.backgroundColor||"transparent",color:e.textColor||"#ffffff",padding:`${e.paddingY||70}px ${e.paddingX||24}px`},children:o.jsxs("div",{className:"puck-inner gr-graffiti-inner",style:{"--gr-graffiti-accent":e.accentColor||"#00ff04","--gr-graffiti-panel":e.panelBackground||"rgba(0,0,0,.72)","--gr-graffiti-border":e.borderColor||"#bb00ff"},children:[o.jsxs("div",{className:"gr-graffiti-copy",children:[e.eyebrow&&o.jsx("p",{className:"teaser",children:e.eyebrow}),e.title&&o.jsx("h2",{className:"puck-title",children:e.title}),e.body&&o.jsx("p",{children:e.body})]}),o.jsxs("div",{className:"gr-graffiti-layout",children:[o.jsxs("form",{className:"gr-graffiti-form",children:[o.jsxs("label",{children:[e.nameLabel||"Your name",o.jsx("input",{type:"text",disabled:!0})]}),o.jsxs("label",{children:[e.messageLabel||"Your message",o.jsx("textarea",{rows:"5",disabled:!0})]}),o.jsxs("label",{children:[e.photoLabel||"Photo with the band",o.jsx("input",{type:"file",disabled:!0})]}),o.jsxs("label",{children:[e.paintLabel||"Paint",o.jsx("canvas",{width:"520",height:"260"})]}),o.jsx("button",{type:"button",children:e.submitText||"Send for Approval"})]}),o.jsx("div",{className:"gr-graffiti-posts",children:o.jsxs("article",{className:"gr-graffiti-post",children:[o.jsx("strong",{children:"Approved fan posts will appear here."}),o.jsx("p",{children:e.successMessage||"Submitted. It will appear after admin approval."})]})})]})]})})},Spacer:{label:"02 Add Block: Spacer",fields:{height:{type:"number",label:"Height"},backgroundColor:l("Background Color")},defaultProps:{height:40,backgroundColor:"transparent"},render:e=>o.jsx("div",{className:"puck-spacer",style:{height:e.height||40,background:e.backgroundColor||"transparent"}})},SignupForm:{label:"02 Add Block: Grave Robber Signup Form",fields:{formAction:{type:"text",label:"Google Form Submit URL"},nameEntry:{type:"text",label:"Name Field Entry ID"},emailEntry:{type:"text",label:"Email Field Entry ID"},phoneEntry:{type:"text",label:"Phone Field Entry ID"},zipEntry:{type:"text",label:"Zip Field Entry ID"},nameLabel:{type:"text",label:"Name Label"},emailLabel:{type:"text",label:"Email Label"},phoneLabel:{type:"text",label:"Phone Label"},zipLabel:{type:"text",label:"Zip Label"},buttonText:{type:"text",label:"Button Text"},successMessage:{type:"text",label:"Success Message"},backgroundColor:l("Section Background"),paddingY:{type:"number",label:"Top Padding"},paddingX:{type:"number",label:"Side Padding"},paddingBottom:{type:"number",label:"Bottom Padding"}},defaultProps:{formAction:"https://docs.google.com/forms/d/e/1FAIpQLSc75dAf3CXeOinDkL-URjVql6_o3E2PcXKPhB3j-mFnl0JBMw/formResponse",nameEntry:"entry.821607845",emailEntry:"entry.216699627",phoneEntry:"entry.1566132030",zipEntry:"entry.848273318",nameLabel:"What are you called?",emailLabel:"What is your email?",phoneLabel:"What is your phone number?",zipLabel:"What is your zip code?",buttonText:"Join the Army of the Dead",successMessage:"Great, you are signed up and we will keep you updated.",backgroundColor:"#000000",paddingY:30,paddingX:24,paddingBottom:80},render:e=>o.jsx(bt,{...e})},ContactForm:{label:"02 Add Block: Grave Robber Contact Form",fields:{formAction:{type:"text",label:"Google Form Submit URL"},nameEntry:{type:"text",label:"Name Field Entry ID"},emailEntry:{type:"text",label:"Email Field Entry ID"},messageEntry:{type:"text",label:"Message Field Entry ID"},nameLabel:{type:"text",label:"Name Label"},emailLabel:{type:"text",label:"Email Label"},messageLabel:{type:"text",label:"Message Label"},messageRows:{type:"number",label:"Message Box Rows"},buttonText:{type:"text",label:"Button Text"},successMessage:{type:"text",label:"Success Message"},backgroundColor:l("Section Background"),paddingY:{type:"number",label:"Top Padding"},paddingX:{type:"number",label:"Side Padding"},paddingBottom:{type:"number",label:"Bottom Padding"}},defaultProps:{formAction:"https://docs.google.com/forms/d/e/1FAIpQLSfvFy-I4z36zqLz4y4boVhM4eTL7KEb5Ip1It7OZyFfxlRgMw/formResponse",nameEntry:"entry.111991046",emailEntry:"entry.709491702",messageEntry:"entry.905150677",nameLabel:"What are you called?",emailLabel:"What is your email?",messageLabel:"What do you want?",messageRows:7,buttonText:"Send Message",successMessage:"Great, your message was sent and we will get back to you shortly.",backgroundColor:"#000000",paddingY:30,paddingX:24,paddingBottom:80},render:e=>o.jsx(ft,{...e})},Embed:{label:"02 Add Block: Custom HTML Embed",fields:{html:{type:"textarea",label:"HTML"},backgroundColor:l("Background Color"),paddingY:{type:"number",label:"Top/Bottom Padding"},paddingX:{type:"number",label:"Left/Right Padding"}},defaultProps:{html:"<p>Custom HTML here</p>",backgroundColor:"transparent",paddingY:30,paddingX:24},render:e=>o.jsx("section",{className:"puck-section",style:{padding:`${e.paddingY||30}px ${e.paddingX||24}px`,background:e.backgroundColor||"transparent"},children:o.jsx("div",{className:"puck-inner",dangerouslySetInnerHTML:{__html:e.html||""}})})}}},ue=He(),wt=ue.replaceAll("#editable-page-root","[data-puck-entry]"),Ct=`
${ue}
${wt}

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

.puck-social-links {
  display: flex;
  gap: 14px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.puck-social-links .social-link {
  width: 44px !important;
  height: 44px !important;
  min-width: 44px !important;
  min-height: 44px !important;
  max-width: 44px !important;
  max-height: 44px !important;
  padding: 0 !important;
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  border-style: solid;
  border-width: 1px;
  border-radius: 999px;
  box-sizing: border-box;
}

.puck-social-links .social-link svg {
  display: block !important;
  width: 22px !important;
  height: 22px !important;
  min-width: 22px !important;
  min-height: 22px !important;
  fill: currentColor !important;
}

.puck-social-letter {
  display: inline-flex !important;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 700;
  line-height: 1;
}
`;export{ge as R,kt as a,Y as b,ht as c,vt as d,He as e,mt as f,ye as g,fe as h,o as j,Ct as p,A as r};
