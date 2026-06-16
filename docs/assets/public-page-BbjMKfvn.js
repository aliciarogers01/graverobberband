(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function o(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(r){if(r.ep)return;r.ep=!0;const i=o(r);fetch(r.href,i)}})();var H={},Q={exports:{}},g={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $=Symbol.for("react.element"),gt=Symbol.for("react.portal"),bt=Symbol.for("react.fragment"),ft=Symbol.for("react.strict_mode"),ut=Symbol.for("react.profiler"),mt=Symbol.for("react.provider"),ht=Symbol.for("react.context"),xt=Symbol.for("react.forward_ref"),yt=Symbol.for("react.suspense"),wt=Symbol.for("react.memo"),vt=Symbol.for("react.lazy"),I=Symbol.iterator;function kt(t){return t===null||typeof t!="object"?null:(t=I&&t[I]||t["@@iterator"],typeof t=="function"?t:null)}var Z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},tt=Object.assign,et={};function k(t,e,o){this.props=t,this.context=e,this.refs=et,this.updater=o||Z}k.prototype.isReactComponent={};k.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};k.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function ot(){}ot.prototype=k.prototype;function O(t,e,o){this.props=t,this.context=e,this.refs=et,this.updater=o||Z}var M=O.prototype=new ot;M.constructor=O;tt(M,k.prototype);M.isPureReactComponent=!0;var U=Array.isArray,rt=Object.prototype.hasOwnProperty,j={current:null},at={key:!0,ref:!0,__self:!0,__source:!0};function it(t,e,o){var a,r={},i=null,l=null;if(e!=null)for(a in e.ref!==void 0&&(l=e.ref),e.key!==void 0&&(i=""+e.key),e)rt.call(e,a)&&!at.hasOwnProperty(a)&&(r[a]=e[a]);var s=arguments.length-2;if(s===1)r.children=o;else if(1<s){for(var n=Array(s),b=0;b<s;b++)n[b]=arguments[b+2];r.children=n}if(t&&t.defaultProps)for(a in s=t.defaultProps,s)r[a]===void 0&&(r[a]=s[a]);return{$$typeof:$,type:t,key:i,ref:l,props:r,_owner:j.current}}function Ct(t,e){return{$$typeof:$,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function _(t){return typeof t=="object"&&t!==null&&t.$$typeof===$}function $t(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(o){return e[o]})}var Y=/\/+/g;function A(t,e){return typeof t=="object"&&t!==null&&t.key!=null?$t(""+t.key):e.toString(36)}function P(t,e,o,a,r){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var l=!1;if(t===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case $:case gt:l=!0}}if(l)return l=t,r=r(l),t=a===""?"."+A(l,0):a,U(r)?(o="",t!=null&&(o=t.replace(Y,"$&/")+"/"),P(r,e,o,"",function(b){return b})):r!=null&&(_(r)&&(r=Ct(r,o+(!r.key||l&&l.key===r.key?"":(""+r.key).replace(Y,"$&/")+"/")+t)),e.push(r)),1;if(l=0,a=a===""?".":a+":",U(t))for(var s=0;s<t.length;s++){i=t[s];var n=a+A(i,s);l+=P(i,e,o,n,r)}else if(n=kt(t),typeof n=="function")for(t=n.call(t),s=0;!(i=t.next()).done;)i=i.value,n=a+A(i,s++),l+=P(i,e,o,n,r);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return l}function z(t,e,o){if(t==null)return t;var a=[],r=0;return P(t,a,"","",function(i){return e.call(o,i,r++)}),a}function St(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(o){(t._status===0||t._status===-1)&&(t._status=1,t._result=o)},function(o){(t._status===0||t._status===-1)&&(t._status=2,t._result=o)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var m={current:null},B={transition:null},zt={ReactCurrentDispatcher:m,ReactCurrentBatchConfig:B,ReactCurrentOwner:j};g.Children={map:z,forEach:function(t,e,o){z(t,function(){e.apply(this,arguments)},o)},count:function(t){var e=0;return z(t,function(){e++}),e},toArray:function(t){return z(t,function(e){return e})||[]},only:function(t){if(!_(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};g.Component=k;g.Fragment=bt;g.Profiler=ut;g.PureComponent=O;g.StrictMode=ft;g.Suspense=yt;g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zt;g.cloneElement=function(t,e,o){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var a=tt({},t.props),r=t.key,i=t.ref,l=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,l=j.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var s=t.type.defaultProps;for(n in e)rt.call(e,n)&&!at.hasOwnProperty(n)&&(a[n]=e[n]===void 0&&s!==void 0?s[n]:e[n])}var n=arguments.length-2;if(n===1)a.children=o;else if(1<n){s=Array(n);for(var b=0;b<n;b++)s[b]=arguments[b+2];a.children=s}return{$$typeof:$,type:t.type,key:r,ref:i,props:a,_owner:l}};g.createContext=function(t){return t={$$typeof:ht,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:mt,_context:t},t.Consumer=t};g.createElement=it;g.createFactory=function(t){var e=it.bind(null,t);return e.type=t,e};g.createRef=function(){return{current:null}};g.forwardRef=function(t){return{$$typeof:xt,render:t}};g.isValidElement=_;g.lazy=function(t){return{$$typeof:vt,_payload:{_status:-1,_result:t},_init:St}};g.memo=function(t,e){return{$$typeof:wt,type:t,compare:e===void 0?null:e}};g.startTransition=function(t){var e=B.transition;B.transition={};try{t()}finally{B.transition=e}};g.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};g.useCallback=function(t,e){return m.current.useCallback(t,e)};g.useContext=function(t){return m.current.useContext(t)};g.useDebugValue=function(){};g.useDeferredValue=function(t){return m.current.useDeferredValue(t)};g.useEffect=function(t,e){return m.current.useEffect(t,e)};g.useId=function(){return m.current.useId()};g.useImperativeHandle=function(t,e,o){return m.current.useImperativeHandle(t,e,o)};g.useInsertionEffect=function(t,e){return m.current.useInsertionEffect(t,e)};g.useLayoutEffect=function(t,e){return m.current.useLayoutEffect(t,e)};g.useMemo=function(t,e){return m.current.useMemo(t,e)};g.useReducer=function(t,e,o){return m.current.useReducer(t,e,o)};g.useRef=function(t){return m.current.useRef(t)};g.useState=function(t){return m.current.useState(t)};g.useSyncExternalStore=function(t,e,o){return m.current.useSyncExternalStore(t,e,o)};g.useTransition=function(){return m.current.useTransition()};g.version="18.2.0";Q.exports=g;var Tt=Q.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ft=Tt,Pt=Symbol.for("react.element"),Bt=Symbol.for("react.fragment"),Wt=Object.prototype.hasOwnProperty,Et=Ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Lt={key:!0,ref:!0,__self:!0,__source:!0};function nt(t,e,o){var a,r={},i=null,l=null;o!==void 0&&(i=""+o),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(l=e.ref);for(a in e)Wt.call(e,a)&&!Lt.hasOwnProperty(a)&&(r[a]=e[a]);if(t&&t.defaultProps)for(a in e=t.defaultProps,e)r[a]===void 0&&(r[a]=e[a]);return{$$typeof:Pt,type:t,key:i,ref:l,props:r,_owner:Et.current}}H.Fragment=Bt;H.jsx=nt;H.jsxs=nt;function c(t){return String(t??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function d(t){return c(t).trim()}function f(t){return String(t??"").trim().length>0}function S(t){return c(t).replaceAll(`
`,"<br>")}function p(t={}){return Object.entries(t).filter(([,e])=>e!=null&&e!=="").map(([e,o])=>`${e.replace(/[A-Z]/g,a=>`-${a.toLowerCase()}`)}:${o}`).join(";")}function x(t={},e=""){return{fontSize:t[`${e}Size`]||"inherit",color:t[`${e}Color`]||"inherit",fontFamily:t[`${e}Font`]||"inherit",fontWeight:t[`${e}Weight`]||"inherit",fontStyle:t[`${e}Style`]||"inherit",textDecoration:t[`${e}Decoration`]||"none",textTransform:t[`${e}Transform`]||"none",letterSpacing:t[`${e}LetterSpacing`]||"normal",lineHeight:t[`${e}LineHeight`]||"normal",textShadow:t[`${e}Shadow`]||"none"}}function w(t){return f(t)?`<style>@import url('${d(t)}');</style>`:""}function Rt(t="custom"){return String(t||"custom").toLowerCase().trim()}function At(t,e=""){const o=Rt(t),a='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M8 12h8M12 8v8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',r={facebook:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.019 4.388 10.994 10.125 11.854v-8.385H7.078v-3.469h3.047V9.431c0-3.007 1.791-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.249h3.328l-.532 3.469h-2.796v8.385C19.612 23.067 24 18.092 24 12.073z"/></svg>',instagram:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3.5A4.5 4.5 0 1112 16a4.5 4.5 0 010-9zm0 2A2.5 2.5 0 1012 14a2.5 2.5 0 000-5zm5.25-3.25a1.25 1.25 0 11-1.25 1.25 1.25 1.25 0 011.25-1.25z"/></svg>',tiktok:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19.589 6.686a4.793 4.793 0 01-3.77-4.187V2h-3.358v13.743a2.89 2.89 0 11-2.89-2.89c.213 0 .421.023.622.067V9.51a6.248 6.248 0 00-.622-.033A6.248 6.248 0 1015.82 15.72V8.687a8.154 8.154 0 004.77 1.539V6.686z"/></svg>',youtube:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 00.5 6.2 31.5 31.5 0 000 12a31.5 31.5 0 00.5 5.8 3 3 0 002.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 002.1-2.1A31.5 31.5 0 0024 12a31.5 31.5 0 00-.5-5.8zM9.6 15.6V8.4L15.8 12l-6.2 3.6z"/></svg>',spotify:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 1.8A10.2 10.2 0 1022.2 12 10.2 10.2 0 0012 1.8zm4.68 14.72a.76.76 0 01-1.05.25 9.58 9.58 0 00-7.28-.78.76.76 0 11-.44-1.46 11.13 11.13 0 018.52.94.76.76 0 01.25 1.05zm1.25-2.77a.9.9 0 01-1.24.3 11.75 11.75 0 00-8.62-.96.9.9 0 11-.52-1.72 13.5 13.5 0 019.96 1.14.9.9 0 01.42 1.24zm.13-2.94a14.15 14.15 0 00-10.4-1.13 1.05 1.05 0 11-.61-2.01 16.3 16.3 0 0112.08 1.32 1.05 1.05 0 11-1.07 1.82z"/></svg>',bandcamp:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7.1 6h14L16.9 18h-14L7.1 6z"/></svg>',soundcloud:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.8 10.1A4.8 4.8 0 0020 19H8.5V7.5a7 7 0 019.3 2.6zM3 13h1v6H3v-6zm2-2h1v8H5v-8zm2 1h1v7H7v-7z"/></svg>',apple:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16.4 2.2c.1 1.1-.4 2.2-1.1 3-.7.8-1.8 1.4-2.8 1.3-.1-1.1.4-2.2 1.1-3 .8-.8 1.9-1.3 2.8-1.3zM20.2 17.1c-.5 1.1-.8 1.6-1.5 2.6-1 1.5-2.4 3.3-4.1 3.3-1.5 0-1.9-1-4-1s-2.6 1-4 1c-1.7 0-3-1.6-4-3.1-2.8-4.2-3.1-9.1-1.4-11.7 1.2-1.8 3-2.8 4.7-2.8 1.8 0 2.9 1 4.3 1 1.4 0 2.3-1 4.3-1 1.5 0 3.2.8 4.3 2.3-3.8 2.1-3.2 7.6.4 9.4z"/></svg>',x:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-4.9-7-5.6 7H3.3l7.3-8.4L2.8 2h6.4l4.4 6.4L18.9 2zm-1.1 17.9h1.7L8.3 4H6.5l11.3 15.9z"/></svg>',twitter:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-4.9-7-5.6 7H3.3l7.3-8.4L2.8 2h6.4l4.4 6.4L18.9 2zm-1.1 17.9h1.7L8.3 4H6.5l11.3 15.9z"/></svg>',threads:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.2 2C6.8 2 3 5.8 3 12s3.8 10 9.3 10c4.7 0 8.2-2.7 8.2-6.5 0-2.5-1.4-4.2-3.8-5 .3-3.2-1.6-5.4-4.8-5.4-2.8 0-4.7 1.5-5.3 4h2.2c.4-1.3 1.5-2 3.1-2 1.8 0 2.8 1 2.9 2.8-.8-.1-1.6-.2-2.6-.2-3.3 0-5.4 1.5-5.4 4 0 2.2 1.8 3.8 4.4 3.8 2.8 0 4.7-1.6 5.3-4.3 1.2.5 1.9 1.3 1.9 2.5 0 2.5-2.4 4.2-6.1 4.2-4.4 0-7.1-3-7.1-7.9s2.7-7.9 7-7.9c3.4 0 5.7 1.7 6.4 4.7h2.2C20.1 4.5 16.9 2 12.2 2zm-.8 13.5c-1.4 0-2.3-.7-2.3-1.8 0-1.3 1.2-2 3.3-2 .9 0 1.8.1 2.6.3-.3 2.2-1.6 3.5-3.6 3.5z"/></svg>',bluesky:a,linkedin:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5A2.5 2.5 0 110 3.5a2.5 2.5 0 014.98 0zM.5 8h4.9v16H.5V8zm7.8 0H13v2.2h.1c.7-1.3 2.4-2.7 4.9-2.7 5.2 0 6.2 3.4 6.2 7.9V24h-4.9v-7.6c0-1.8 0-4.1-2.5-4.1s-2.9 2-2.9 4v7.7H8.3V8z"/></svg>',snapchat:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2c3.1 0 5 2.2 5 5.7v2.1c.4.2.9.3 1.4.3.7 0 1.1.4 1.1.9 0 .7-.8 1.1-1.8 1.5.4 1.2 1.4 2.2 2.9 2.8.5.2.7.6.6 1-.1.5-.6.8-1.5.9-.4 0-.6.2-.8.5-.3.5-.8.7-1.5.5-.8-.2-1.4-.3-2 .1-.8.6-1.7 1.7-3.4 1.7s-2.6-1.1-3.4-1.7c-.6-.4-1.2-.3-2-.1-.7.2-1.2 0-1.5-.5-.2-.3-.4-.5-.8-.5-.9-.1-1.4-.4-1.5-.9-.1-.4.1-.8.6-1 1.5-.6 2.5-1.6 2.9-2.8-1-.4-1.8-.8-1.8-1.5 0-.5.4-.9 1.1-.9.5 0 1-.1 1.4-.3V7.7C7 4.2 8.9 2 12 2z"/></svg>',pinterest:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.1 2C6.6 2 3 5.7 3 10.2c0 2.1 1.1 4.6 2.8 5.4.3.1.5.1.6-.2l.5-2c.1-.3 0-.4-.2-.7-.6-.7-.9-1.5-.9-2.6 0-3.1 2.4-6 6.1-6 3.3 0 5.2 2 5.2 4.8 0 3.6-1.6 6.6-4 6.6-1.3 0-2.2-1.1-1.9-2.4.4-1.6 1.2-3.3 1.2-4.4 0-1-.6-1.9-1.7-1.9-1.3 0-2.4 1.4-2.4 3.3 0 1.2.4 2 .4 2s-1.4 5.9-1.7 6.9c-.5 2.1-.1 4.6 0 4.8.1.1.2.1.3 0 .1-.2 1.8-2.2 2.3-4.2.2-.6.9-3.4.9-3.4.5.9 1.8 1.6 3.2 1.6 4.2 0 7.1-3.9 7.1-9.1C20.8 5 17.4 2 12.1 2z"/></svg>',twitch:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4 2h17v12l-5 5h-4l-3 3H6v-3H2V6l2-4zm2 3v11h4v3l3-3h4l2-2V5H6zm5 3h2v5h-2V8zm5 0h2v5h-2V8z"/></svg>',discord:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19.5 5.2A16 16 0 0015.6 4l-.2.4a14.8 14.8 0 013.4 1.7 12.8 12.8 0 00-10.8 0 14.8 14.8 0 013.4-1.7L11.2 4a16 16 0 00-3.9 1.2C4.8 8.9 4.1 12.5 4.4 16c1.6 1.2 3.1 1.9 4.6 2.3l.9-1.5c-.5-.2-1-.4-1.5-.7l.4-.3a11.5 11.5 0 006.8 0l.4.3c-.5.3-1 .5-1.5.7l.9 1.5c1.5-.4 3-1.1 4.6-2.3.5-4.1-.8-7.6-2.5-10.8zM9.5 14.1c-.9 0-1.6-.8-1.6-1.8s.7-1.8 1.6-1.8 1.6.8 1.6 1.8-.7 1.8-1.6 1.8zm5 0c-.9 0-1.6-.8-1.6-1.8s.7-1.8 1.6-1.8 1.6.8 1.6 1.8-.7 1.8-1.6 1.8z"/></svg>',reddit:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22 12a2.4 2.4 0 00-4.1-1.7 11.6 11.6 0 00-5.1-1.4l.9-4.1 2.9.6a2 2 0 104-.4 2 2 0 00-3.5-1.2l-3.7-.8a.8.8 0 00-.9.6l-1.1 5.2a11.8 11.8 0 00-5.3 1.4A2.4 2.4 0 102.5 13c0 1 .6 1.8 1.4 2.2 0 .2-.1.4-.1.6 0 3.8 3.7 6.8 8.2 6.8s8.2-3 8.2-6.8c0-.2 0-.4-.1-.6A2.4 2.4 0 0022 12zM8.5 14.6a1.4 1.4 0 111.4-1.4 1.4 1.4 0 01-1.4 1.4zm6.9 3.8c-1 .8-2.1 1.1-3.4 1.1s-2.4-.4-3.4-1.1a.7.7 0 11.9-1.1c.7.5 1.5.8 2.5.8s1.8-.3 2.5-.8a.7.7 0 11.9 1.1zm.1-3.8a1.4 1.4 0 111.4-1.4 1.4 1.4 0 01-1.4 1.4z"/></svg>',patreon:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4 3h4v18H4V3zm11 0a6 6 0 110 12 6 6 0 010-12z"/></svg>',venmo:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.5 4.5c.4 6.6-5.6 15.2-10.1 15.2H6.2L4.5 6.2l3.7-.4 1 9.6c1.8-3 3.2-6.8 3-9.5l3.8-.8c.3 2.1-.1 4.2-.9 6.1 1.3-2.1 2-4.5 1.8-6.8h3.6z"/></svg>',cashapp:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.2 2l-.5 2.1c2 .2 3.5.9 4.7 1.9l-1.8 2.5c-1.1-.8-2.3-1.3-3.7-1.3-1.3 0-2.1.5-2.1 1.3 0 .9.8 1.2 2.9 2 3 .9 4.7 2.1 4.7 5 0 2.6-1.7 4.4-4.5 5l-.5 2.5H9.9l.5-2.4a8.6 8.6 0 01-5.1-2.3l2-2.5c1.3 1.1 2.8 1.8 4.5 1.8 1.5 0 2.4-.6 2.4-1.6 0-.9-.7-1.3-2.8-1.9-3.2-.9-4.8-2.2-4.8-4.8 0-2.5 1.7-4.3 4.4-4.9l.5-2.4h1.7z"/></svg>',email:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3 5h18a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V6a1 1 0 011-1zm9 8.2L4.8 7H4v.7l8 6.9 8-6.9V7h-.8L12 13.2z"/></svg>',website:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm6.9 9h-3.2a15.7 15.7 0 00-1.1-5 8.1 8.1 0 014.3 5zM12 4.1c.7 1 1.4 3.4 1.6 6.9h-3.2c.2-3.5.9-5.9 1.6-6.9zM4.1 13h3.2c.1 1.8.5 3.5 1.1 5a8.1 8.1 0 01-4.3-5zm3.2-2H4.1a8.1 8.1 0 014.3-5 15.7 15.7 0 00-1.1 5zM12 19.9c-.7-1-1.4-3.4-1.6-6.9h3.2c-.2 3.5-.9 5.9-1.6 6.9zm3.6-1.9c.6-1.5 1-3.2 1.1-5h3.2a8.1 8.1 0 01-4.3 5z"/></svg>',custom:a};return r[o]||r.custom}function y(t={}){if(!f(t.text))return"";const e=t.borderWidth||"0px",o=t.borderColor||"transparent",a=p({background:t.backgroundColor||"transparent",color:t.textColor||"inherit",fontFamily:t.fontFamily||"inherit",fontSize:t.fontSize||"inherit",fontWeight:t.fontWeight||"inherit",border:`${e} solid ${o}`,boxShadow:t.boxShadow||"none",textTransform:t.textTransform||"uppercase",borderRadius:t.radius||"0px",padding:t.padding||"14px 24px",textDecoration:"none",display:"inline-flex",alignItems:"center",justifyContent:"center",cursor:"pointer"});if(t.buttonType==="dropdown"){const r=p({background:t.dropdownBackgroundColor||"rgba(0,0,0,.96)",borderColor:t.dropdownBorderColor||"rgba(57,255,20,.55)",boxShadow:t.dropdownBoxShadow||"0 0 24px rgba(57,255,20,.35)",borderRadius:t.dropdownRadius||"16px",padding:t.dropdownPadding||"10px",minWidth:t.dropdownMinWidth||"190px"}),i=(t.dropdownLinks||[]).filter(l=>f(l.text)).map(l=>{const s=p({background:l.backgroundColor||"transparent",color:l.textColor||"#ffffff",fontFamily:l.fontFamily||"inherit",fontSize:l.fontSize||"14px",borderColor:l.borderColor||"transparent",boxShadow:l.boxShadow||"none",textTransform:l.textTransform||"uppercase",borderRadius:l.radius||"10px",padding:l.padding||"10px 12px"});return`<a href="${d(l.url||"#")}" target="_blank" rel="noopener noreferrer" style="${s}">${c(l.text)}</a>`}).join("");return`<div class="puck-dropdown"><button class="puck-btn puck-dropdown-trigger" type="button" style="${a}">${c(t.text)}</button><div class="puck-dropdown-menu" style="${r}">${i}</div></div>`}return`<a class="puck-btn" href="${d(t.url||"#")}" style="${a}">${c(t.text)}</a>`}function Ht(){return`
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

#editable-page-root .puck-gallery-freeform{
  position:relative;
  min-height:var(--gallery-height,920px);
  width:100%;
  overflow:visible;
}

#editable-page-root .puck-gallery-item{
  margin:0;
  border-radius:16px;
  overflow:hidden;
  background:rgba(255,255,255,.04);
  border:1px solid rgba(255,255,255,.12);
}

#editable-page-root .puck-gallery-item img,
#editable-page-root .puck-gallery-item video{
  display:block;
  width:100%;
  height:260px;
  object-fit:cover;
}

#editable-page-root .puck-gallery-freeform .puck-gallery-item{
  position:absolute;
  left:var(--gallery-x,0%);
  top:var(--gallery-y,0%);
  width:var(--gallery-width,280px);
  z-index:var(--gallery-layer,1);
  transform:rotate(var(--gallery-rotation,0deg));
  opacity:var(--gallery-opacity,1);
}

#editable-page-root .puck-gallery-freeform .puck-gallery-item img,
#editable-page-root .puck-gallery-freeform .puck-gallery-item video{
  height:auto;
  max-height:520px;
  object-fit:var(--gallery-fit,cover);
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

#editable-page-root .puck-gallery-freeform .puck-gallery-item:hover{
  transform:rotate(var(--gallery-rotation,0deg)) scale(1.04);
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

#editable-page-root .puck-gallery-modal-content img,
#editable-page-root .puck-gallery-modal-content video{
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
  grid-template-columns:minmax(0,390px) minmax(0,520px);
  gap:22px;
  align-items:start;
  justify-content:center;
}

#editable-page-root .gr-graffiti-form,
#editable-page-root .gr-graffiti-post{
  box-sizing:border-box;
  min-width:0;
  background:var(--gr-graffiti-panel);
  border:1px solid var(--gr-graffiti-border);
  border-radius:18px;
  box-shadow:0 0 28px color-mix(in srgb,var(--gr-graffiti-accent),transparent 72%);
}

#editable-page-root .gr-graffiti-form{
  display:grid;
  gap:14px;
  padding:18px;
  overflow:hidden;
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
  max-width:100%;
  min-width:0;
  box-sizing:border-box;
  border:1px solid rgba(255,255,255,.2);
  border-radius:12px;
  background:#050505;
  color:#ffffff;
  padding:12px;
}

#editable-page-root .gr-graffiti-canvas{
  display:block;
  width:100%;
  max-width:100%;
  box-sizing:border-box;
  height:260px;
  border:1px solid var(--gr-graffiti-accent);
  border-radius:14px;
  background:#111;
  touch-action:none;
  cursor:crosshair;
}

#editable-page-root .gr-graffiti-tools{
  display:flex;
  gap:26px;
  align-items:flex-start;
  flex-wrap:wrap;
}

#editable-page-root .gr-graffiti-tool-label{
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  gap:9px;
  color:var(--gr-graffiti-accent);
  font-weight:900;
  text-transform:uppercase;
  letter-spacing:.08em;
  margin-top:8px;
}

#editable-page-root .gr-graffiti-tool-label span{
  font-size:12px;
  line-height:14px;
  min-height:14px;
  white-space:nowrap;
}

#editable-page-root .gr-graffiti-tools input[type="range"]{
  width:min(130px,100%);
}

#editable-page-root .gr-graffiti-form button{
  width:100%;
  max-width:100%;
  box-sizing:border-box;
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

  #editable-page-root .puck-gallery-freeform{
    display:grid!important;
    grid-template-columns:1fr!important;
    gap:22px!important;
    min-height:0!important;
    height:auto!important;
    overflow:visible!important;
  }

  #editable-page-root .puck-gallery-freeform .puck-gallery-item{
    position:relative!important;
    left:auto!important;
    top:auto!important;
    width:min(100%, 360px)!important;
    max-width:100%!important;
    justify-self:center!important;
    transform:none!important;
    opacity:1!important;
    z-index:auto!important;
  }

  #editable-page-root .puck-gallery-freeform .puck-gallery-item:hover{
    transform:none!important;
  }

  #editable-page-root .puck-gallery-freeform .puck-gallery-item img,
  #editable-page-root .puck-gallery-freeform .puck-gallery-item video{
    width:100%!important;
    height:auto!important;
    max-height:none!important;
    object-fit:contain!important;
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
`}function Ot(t){return w(t.fontUrl)}function Mt(t){const e=(t.buttons||[]).map(y).join(""),o=(t.leftButtons||[]).map(y).join("");return`<header class="puck-site-header ${t.headerPosition==="full"?"is-full-width":""}" style="${p({background:t.backgroundColor||"rgba(0,0,0,.72)",borderBottom:t.lineColor?`1px solid ${t.lineColor}`:"none",boxShadow:t.lineShadow||"none",width:t.width||"100%",maxWidth:t.maxWidth||"none",margin:t.margin||"0",padding:t.padding||"22px 40px"})}">
    <div class="puck-header-left">
      ${o}
      ${t.logoUrl&&t.logoPlacement!=="right"?`<a class="puck-header-logo-link logo-left" href="index.html" style="${p({"--logo-size":t.logoSize||"45px",background:t.logoBackgroundColor||"transparent",border:`${t.logoBorderWidth||"0px"} solid ${t.logoBorderColor||"transparent"}`,borderRadius:t.logoRadius||"999px",padding:t.logoPadding||"0px",boxShadow:t.logoBoxShadow||"none","--logo-image-shadow":t.logoImageShadow||"none"})}"><img class="puck-header-logo" src="${d(t.logoUrl)}" alt="${d(t.logoAlt||"Logo")}"></a>`:""}
      ${t.showBack!=="hide"?`<a class="puck-header-back" href="${d(t.backUrl||"index.html")}">${c(t.backText||"Back")}</a>`:""}
    </div>
    <nav class="puck-header-nav nav-${d(t.navPlacement||"right")}">${e}</nav>
    <div class="puck-header-right">
      ${t.logoUrl&&t.logoPlacement==="right"?`<a class="puck-header-logo-link logo-right" href="index.html" style="${p({"--logo-size":t.logoSize||"45px",background:t.logoBackgroundColor||"transparent",border:`${t.logoBorderWidth||"0px"} solid ${t.logoBorderColor||"transparent"}`,borderRadius:t.logoRadius||"999px",padding:t.logoPadding||"0px",boxShadow:t.logoBoxShadow||"none","--logo-image-shadow":t.logoImageShadow||"none"})}"><img class="puck-header-logo" src="${d(t.logoUrl)}" alt="${d(t.logoAlt||"Logo")}"></a>`:""}
    </div>
  </header>`}function jt(t){const e=t.items||[],o=[...e,...e].map(a=>`<span class="song-name" style="${p({color:t.textColor||"var(--cream)",textShadow:t.textShadow||"none",borderColor:t.buttonBorderColor||"rgba(212, 162, 76, 0.25)"})}">${c(a.text)}</span>`).join("");return`<section class="songs-section puck-song-scroll ${t.stretchMode==="full"?"is-full-width":""}" aria-label="Songs We Play" style="${p({background:t.backgroundColor||"linear-gradient(90deg, var(--blue-deep) 0%, var(--charcoal-light) 50%, var(--blue-deep) 100%)",borderBottom:t.lineColor?`1px solid ${t.lineColor}`:"none",width:t.width||"100%",maxWidth:t.maxWidth||"none",margin:t.margin||"0"})}"><div class="songs-scroll-container"><div class="songs-scroll puck-song-track">${o}</div></div></section>`}function _t(t){const e=t.theme,o=Array.from({length:8}).map(()=>"<span></span>").join(""),a=(t.buttons||[]).map(y).join(""),r=f(t.noThanksText)?`<button class="puck-btn gr-exit-popup-no-thanks" type="button" style="${p({background:t.noThanksBackgroundColor||"transparent",color:t.noThanksTextColor||"#ffffff",border:`1px solid ${t.noThanksBorderColor||"rgba(255,255,255,.45)"}`,borderRadius:"999px",padding:"16px 34px",fontFamily:"Oswald, sans-serif",fontSize:"16px",fontWeight:"700",textTransform:"uppercase",cursor:"pointer"})}">${c(t.noThanksText)}</button>`:"",i=`gr-exit-popup-${Math.random().toString(36).slice(2)}`;return`${w(t.customFontUrl)}
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

    #editable-page-root .gr-theme-purple{background:linear-gradient(145deg,rgba(17,0,26,.96),rgba(0,0,0,.94))!important;border-color:#bb00ff!important;box-shadow:0 0 42px rgba(187,0,255,.75),inset 0 0 42px rgba(0,255,4,.18)!important;}
    #editable-page-root .gr-theme-purple .gr-welcome-title{color:#bb00ff!important;letter-spacing:.06em;}

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
    id="${i}"
    class="puck-section gr-exit-popup-wrap"
    data-gr-exit-popup="true"
    data-trigger-distance="${Number(t.exitTriggerDistance||120)}"
    style="${p({background:t.backgroundColor||"transparent",padding:`${t.paddingY||70}px ${t.paddingX||24}px`})}"
  >
    <div class="gr-exit-popup-backdrop"></div>

    <div
      class="gr-welcome-card gr-exit-popup-card gr-theme-${d(e||"toxic")} gr-anim-${d(t.animationStyle||"pop")}"
      style="${p({"--gr-bg":t.cardBackground||"rgba(0,0,0,.92)","--gr-border":t.borderColor||"#bb00ff","--gr-glow":t.glowColor||"#00ff04","--gr-radius":t.radius||"28px","--gr-width":t.maxWidth||"920px","--gr-align":t.align||"center","--gr-title":t.titleColor||"#00ff04","--gr-title-font":t.titleFont||"Creepster, cursive","--gr-title-size":t.titleSize||"clamp(44px, 8vw, 92px)","--gr-title-shadow":t.titleShadow||"0 0 18px #00ff04","--gr-body":t.bodyColor||"#ffffff","--gr-body-font":t.bodyFont||"Special Elite, cursive","--gr-body-size":t.bodySize||"20px"})}"
    >
      <button class="gr-exit-popup-close" type="button">×</button>

      ${t.theme==="particles"||t.animationStyle==="particles"?`<div class="gr-welcome-particles" aria-hidden="true">${o}</div>`:""}

      <div class="gr-welcome-content">
        ${f(t.eyebrow)?`<p class="gr-welcome-eyebrow">${c(t.eyebrow)}</p>`:""}

        ${f(t.title)?`<h2 class="gr-welcome-title">${c(t.title)}</h2>`:""}

        ${f(t.body)?`<p class="gr-welcome-body">${S(t.body)}</p>`:""}

        ${a||r?`<div class="puck-buttons">${a}${r}</div>`:""}
      </div>
    </div>
  </section>

  <script>
    (function(){
      const popup = document.getElementById("${i}");
      if (!popup) return;

      let shown = popup.classList.contains("is-visible") || popup.classList.contains("was-triggered");
      let lastY = null;
      let hasBeenLowerOnPage = false;

      const triggerDistance = ${Number(t.exitTriggerDistance||120)};

      function showPopup(){
        if (shown) return;

        shown = true;
        popup.classList.add("is-visible");
        popup.classList.add("was-triggered");
      }

      function hidePopup(){
        popup.classList.remove("is-visible");
      }

      document.addEventListener("mousemove", function(event){
        if (popup.dataset.disableExitIntent === "true") return;

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
  <\/script>`}function N(t){const e=p({background:t.backgroundColor||"transparent",color:t.textColor||"inherit",padding:`${t.paddingY||70}px ${t.paddingX||24}px`}),o=p({width:t.imageWidth||"320px","--mobile-image-width":t.mobileImageWidth||t.imageWidth||"320px",borderRadius:t.imageRadius||"8px",boxShadow:t.imageShadow||"none"}),a=f(t.title)?`<h1 class="band-name puck-title" style="${p(x(t,"title"))}">${c(t.title)}</h1>`:"",r=f(t.subtitle)?`<p class="tagline puck-subtitle" style="${p(x(t,"subtitle"))}">${c(t.subtitle)}</p>`:"",i=f(t.body)?`<p class="description puck-body" style="${p(x(t,"body"))}">${S(t.body)}</p>`:"",l=(t.buttons||[]).map(y).join(""),s=a||r||i||l?`<div class="puck-text">${a}${r}${i}${l?`<div class="puck-buttons">${l}</div>`:""}</div>`:"",n=t.imageUrl?`<img class="puck-image puck-mobile-sized-image" src="${d(t.imageUrl)}" alt="${d(t.imageAlt||t.title||"Image")}" style="${o}">`:"";return`${w(t.customFontUrl)}<section class="puck-section" style="${e}"><div class="puck-inner puck-flex layout-${d(t.layout||"text-left")}" style="--gap:${Number(t.gap||50)}px;--max-width:${d(t.maxWidth||"1100px")}">${s}${n}</div></section>`}function Gt(t){const e=t.align||"center",o=p({background:t.backgroundColor||"transparent",color:t.textColor||"inherit",padding:`${t.paddingY||50}px ${t.paddingX||24}px`,textAlign:e}),a=f(t.eyebrow)?`<p class="teaser" style="${p(x(t,"eyebrow"))}">${c(t.eyebrow)}</p>`:"",r=f(t.title)?`<h2 class="puck-title" style="${p(x(t,"title"))}">${c(t.title)}</h2>`:"",i=f(t.body)?`<p class="puck-body" style="${p(x(t,"body"))}">${S(t.body)}</p>`:"",l=(t.buttons||[]).map(y).join("");return`${w(t.customFontUrl)}<section class="puck-section" style="${o}"><div class="puck-inner puck-text" style="max-width:${d(t.maxWidth||"850px")}">${a}${r}${i}${l?`<div class="puck-buttons">${l}</div>`:""}</div></section>`}function X(t){const e=p({background:t.backgroundColor||"transparent",padding:`${t.paddingY||40}px ${t.paddingX||24}px`,textAlign:t.align||"center"}),o=p({width:t.width||"900px","--mobile-image-width":t.mobileWidth||t.width||"900px",borderRadius:t.radius||"8px",boxShadow:t.shadow||"none"}),a=f(t.title)?`<h2 class="puck-title" style="${p(x(t,"title"))}">${c(t.title)}</h2>`:"",r=t.imageUrl?`<img class="puck-image puck-mobile-sized-image" src="${d(t.imageUrl)}" alt="${d(t.imageAlt||t.title||"Image")}" style="${o}">`:"";return`${w(t.customFontUrl)}<section class="puck-section" style="${e}"><div class="puck-inner" style="max-width:${d(t.maxWidth||"1100px")}">${a}${r}</div></section>`}function It(t){const e=p({background:t.backgroundColor||"transparent",color:t.textColor||"inherit",padding:`${t.paddingY||50}px ${t.paddingX||24}px`,textAlign:"center"}),o=(t.buttons||[]).map(y).join("");return o?`${w(t.customFontUrl)}<section class="puck-section" style="${e}"><div class="puck-inner"><div class="puck-buttons">${o}</div></div></section>`:""}function D(t){const e=p({background:t.backgroundColor||"transparent",color:t.textColor||"inherit",padding:`${t.paddingY||60}px ${t.paddingX||24}px`,textAlign:"center"}),o=t.links||[],a=f(t.title)?`<p class="teaser" style="${p({color:t.titleColor||"inherit",fontFamily:t.titleFont||"inherit",fontSize:t.titleSize||"inherit",fontWeight:t.titleWeight||"inherit"})}">${c(t.title)}</p>`:"",r=o.filter(i=>f(i.url)).map(i=>`<a class="social-link" href="${d(i.url)}" target="_blank" rel="noopener noreferrer" title="${d(i.label||i.platform)}" style="${p({background:i.backgroundColor||"rgba(255,255,255,.03)",color:i.iconColor||"inherit",border:`${i.borderWidth||"1px"} solid ${i.borderColor||"rgba(255,255,255,.18)"}`,boxShadow:i.boxShadow||"none",borderRadius:i.radius||"999px",width:i.size||"44px",height:i.size||"44px",minWidth:i.size||"44px",minHeight:i.size||"44px",padding:i.padding||"0px","--social-svg-size":i.svgSize||"22px"})}">${At(i.platform,i.label)}</a>`).join("");return!a&&!r?"":`<footer class="puck-section social-section is-full-width" style="${e}"><div class="puck-inner">${a}${r?`<nav class="puck-social-links social-links">${r}</nav>`:""}</div></footer>`}function Ut(t){const o=(t.layoutMode||"grid")==="freeform",a=p({background:t.backgroundColor||"transparent",color:t.textColor||"inherit",padding:`${t.paddingY||40}px ${t.paddingX||24}px`,textAlign:"center"}),r=f(t.title)?`<h2 class="puck-title" style="${p({color:t.titleColor||"inherit",fontFamily:t.titleFont||"inherit",fontSize:t.titleSize||"2.5rem"})}">${c(t.title)}</h2>`:"",i=(t.images||[]).filter(n=>f(n.imageUrl)).map((n,b)=>{const u=`gallery-modal-${b}`,h=Number.isFinite(Number(n.x))?Number(n.x):0,C=Number.isFinite(Number(n.y))?Number(n.y):0,W=Number.isFinite(Number(n.rotation))?Number(n.rotation):0,E=Number.isFinite(Number(n.zIndex))?Number(n.zIndex):b+1,st=Number.isFinite(Number(n.opacity))?Math.min(100,Math.max(0,Number(n.opacity)))/100:1,L=n.mediaType==="video"||/\.(mp4|webm|mov|m4v|ogv)(\?|#|$)/i.test(String(n.imageUrl||"")),R=n.imageAlt||(L?"Gallery video":"Gallery image"),pt=L?`<video src="${d(n.imageUrl)}" muted playsinline preload="metadata"></video>`:`<img src="${d(n.imageUrl)}" alt="${d(R)}">`,ct=L?`<video src="${d(n.imageUrl)}" controls playsinline preload="metadata"></video>`:`<img src="${d(n.imageUrl)}" alt="${d(R)}">`;return`
        <figure class="puck-gallery-item" style="${o?p({"--gallery-x":`${Math.min(100,Math.max(0,h))}%`,"--gallery-y":`${Math.min(100,Math.max(0,C))}%`,"--gallery-width":n.width||"280px","--gallery-rotation":`${W}deg`,"--gallery-layer":E,"--gallery-opacity":st,"--gallery-fit":n.objectFit||"cover",borderRadius:n.radius||"16px",boxShadow:n.shadow||"0 0 34px rgba(57,255,20,.35)"}):""}">
          <a href="#${u}" class="puck-gallery-open" aria-label="Open ${d(R)}">
            ${pt}
          </a>
          ${f(n.caption)?`<figcaption>${c(n.caption)}</figcaption>`:""}
        </figure>

        <div id="${u}" class="puck-gallery-modal">
          <a href="#" class="puck-gallery-modal-backdrop" aria-label="Close gallery image"></a>
          <div class="puck-gallery-modal-content">
            <a href="#" class="puck-gallery-close" aria-label="Close gallery image">×</a>
            ${ct}
            ${f(n.caption)?`<p>${c(n.caption)}</p>`:""}
          </div>
        </div>
      `}).join(""),l=o?"puck-gallery-freeform":"puck-gallery-grid",s=o?`--gallery-height:${d(t.canvasHeight||"920px")}`:`--cols:${Number(t.columns||3)};--gap:${Number(t.gap||18)}px`;return`<section class="puck-section" style="${a}"><div class="puck-inner">${r}<div class="${l}" style="${s}">${i}</div></div></section>`}function Yt(t){const e=p({background:t.backgroundColor||"transparent",color:t.textColor||"#ffffff",padding:`${t.paddingY||70}px ${t.paddingX||24}px`}),o=p({"--gr-graffiti-accent":t.accentColor||"#00ff04","--gr-graffiti-panel":t.panelBackground||"rgba(0,0,0,.72)","--gr-graffiti-border":t.borderColor||"#bb00ff"});return`<section class="puck-section gr-graffiti-wall" style="${e}">
    <div class="puck-inner gr-graffiti-inner" style="${o}">
      <div class="gr-graffiti-copy">
        ${f(t.eyebrow)?`<p class="teaser">${c(t.eyebrow)}</p>`:""}
        ${f(t.title)?`<h2 class="puck-title">${c(t.title)}</h2>`:""}
        ${f(t.body)?`<p>${S(t.body)}</p>`:""}
      </div>

      <div class="gr-graffiti-layout">
        <form class="gr-graffiti-form">
          <label>${c(t.nameLabel||"Your name")}<input type="text" name="fan_name" maxlength="120"></label>
          <label>${c(t.messageLabel||"Your message")}<textarea name="message" rows="5" maxlength="1200" required></textarea></label>
          <label>${c(t.photoLabel||"Photo with the band")}<input type="file" name="fan_photo" accept="image/*"></label>
          <label>${c(t.paintLabel||"Paint")}<canvas class="gr-graffiti-canvas" width="520" height="260"></canvas></label>
          <div class="gr-graffiti-tools">
            <label class="gr-graffiti-tool-label">
              <span>Paint Color</span>
              <input type="color" name="paint_color" value="#00ff04" aria-label="Paint color">
            </label>

            <label class="gr-graffiti-tool-label">
              <span>Brush Size</span>
              <input type="range" name="paint_size" min="2" max="28" value="8" aria-label="Brush size">
            </label>

            <button type="button" data-graffiti-clear>Clear Paint</button>
          </div>
          <button type="submit">${c(t.submitText||"Send for Approval")}</button>
          <p class="gr-graffiti-status" data-success-message="${d(t.successMessage||"Submitted. It will appear after admin approval.")}" aria-live="polite"></p>
        </form>

        <div class="gr-graffiti-posts" data-graffiti-posts>
          <p>Loading approved posts...</p>
        </div>
      </div>
    </div>
  </section>`}function Nt(t){return`<div class="puck-spacer" style="height:${Number(t.height||40)}px;background:${d(t.backgroundColor||"transparent")}"></div>`}function Xt(t){const e=p({background:t.backgroundColor||"transparent",color:t.textColor||"inherit",padding:`${t.paddingY||50}px ${t.paddingX||24}px`}),a=(t.items||[]).map(r=>{const i=r.imageUrl?`<img class="puck-image" src="${d(r.imageUrl)}" alt="${d(r.title||"Column image")}" style="width:100%;border-radius:${d(t.imageRadius||"8px")};margin-bottom:16px;">`:"",l=f(r.title)?`<h3 style="${p({color:r.titleColor||"inherit",fontFamily:r.titleFont||"inherit",fontSize:r.titleSize||"inherit",fontWeight:r.titleWeight||"inherit"})}">${c(r.title)}</h3>`:"",s=f(r.body)?`<p style="${p({color:r.bodyColor||"inherit",fontFamily:r.bodyFont||"inherit",fontSize:r.bodySize||"inherit",fontWeight:r.bodyWeight||"inherit"})}">${S(r.body)}</p>`:"",n=y({text:r.buttonText,url:r.buttonUrl,backgroundColor:r.buttonBackgroundColor,textColor:r.buttonTextColor,fontFamily:r.buttonFont,fontSize:r.buttonFontSize,borderWidth:r.buttonBorderWidth,borderColor:r.buttonBorderColor,radius:r.buttonRadius,boxShadow:r.buttonBoxShadow,textTransform:r.buttonTextTransform});return i||l||s||n?`<div class="puck-card">${i}${l}${s}${n}</div>`:""}).join("");return a?`${w(t.customFontUrl)}<section class="puck-section" style="${e}"><div class="puck-inner"><div class="puck-columns" style="--cols:${Number(t.columns||2)};--gap:${Number(t.gap||24)}px">${a}</div></div></section>`:""}function Dt(t){const e=p({background:t.backgroundColor||"#000000",padding:`${t.paddingY||30}px ${t.paddingX||24}px ${t.paddingBottom||80}px`}),o=t.formAction||"https://docs.google.com/forms/d/e/1FAIpQLSc75dAf3CXeOinDkL-URjVql6_o3E2PcXKPhB3j-mFnl0JBMw/formResponse",a=t.nameEntry||"entry.821607845",r=t.emailEntry||"entry.216699627",i=t.phoneEntry||"entry.1566132030",l=t.zipEntry||"entry.848273318",s=t.successMessage||"Great, you are signed up and we will keep you updated.";return`<section class="puck-section graverobber-contact-form-section graverobber-signup-form-section" style="${e}">
    <div class="puck-inner graverobber-contact-inner">
      <form class="graverobber-custom-contact-form" action="${d(o)}" method="POST" target="graverobber-signup-hidden-frame" onsubmit="setTimeout(() => { this.reset(); this.querySelector('.graverobber-contact-success').textContent='${d(s)}'; }, 350);">
        <label>
          ${c(t.nameLabel||"What are you called?")}
          <input type="text" name="${d(a)}" required>
        </label>

        <label>
          ${c(t.emailLabel||"What is your email?")}
          <input type="email" name="${d(r)}" required>
        </label>

        <label>
          ${c(t.phoneLabel||"What is your phone number?")}
          <input type="tel" name="${d(i)}">
        </label>

        <label>
          ${c(t.zipLabel||"What is your zip code?")}
          <input type="text" name="${d(l)}">
        </label>

        <button type="submit">${c(t.buttonText||"Join the Army of the Dead")}</button>
        <p class="graverobber-contact-success" aria-live="polite"></p>
      </form>

      <iframe class="graverobber-hidden-submit-frame" name="graverobber-signup-hidden-frame" title="Hidden signup submit frame"></iframe>
    </div>
  </section>`}function Vt(t){const e=p({background:t.backgroundColor||"#000000",padding:`${t.paddingY||30}px ${t.paddingX||24}px ${t.paddingBottom||80}px`}),o=t.formAction||"https://docs.google.com/forms/d/e/1FAIpQLSfvFy-I4z36zqLz4y4boVhM4eTL7KEb5Ip1It7OZyFfxlRgMw/formResponse",a=t.nameEntry||"entry.111991046",r=t.emailEntry||"entry.709491702",i=t.messageEntry||"entry.905150677",l=t.successMessage||"Great, your message was sent and we will get back to you shortly.";return`<section class="puck-section graverobber-contact-form-section" style="${e}">
    <div class="puck-inner graverobber-contact-inner">
      <form class="graverobber-custom-contact-form" action="${d(o)}" method="POST" target="graverobber-contact-hidden-frame" onsubmit="setTimeout(() => { this.reset(); this.querySelector('.graverobber-contact-success').textContent='${d(l)}'; }, 350);">
        <label>
          ${c(t.nameLabel||"What are you called?")}
          <input type="text" name="${d(a)}" required>
        </label>

        <label>
          ${c(t.emailLabel||"What is your email?")}
          <input type="email" name="${d(r)}" required>
        </label>

        <label>
          ${c(t.messageLabel||"What do you want?")}
          <textarea name="${d(i)}" rows="${Number(t.messageRows||7)}" required></textarea>
        </label>

        <button type="submit">${c(t.buttonText||"Send Message")}</button>
        <p class="graverobber-contact-success" aria-live="polite"></p>
      </form>

      <iframe class="graverobber-hidden-submit-frame" name="graverobber-contact-hidden-frame" title="Hidden contact submit frame"></iframe>
    </div>
  </section>`}function qt(t){return`<section class="puck-section" style="${p({padding:`${t.paddingY||30}px ${t.paddingX||24}px`,background:t.backgroundColor||"transparent"})}"><div class="puck-inner">${t.html||""}</div></section>`}const Jt={GalleryGrid:Ut,WelcomeHorrorMessage:_t,GraveRobberHero:N,GraveRobberLogo:X,GraveRobberSocial:D,HeaderNav:Mt,SongScroll:jt,FontLoader:Ot,Hero:N,TextBlock:Gt,ImageBlock:X,ButtonRow:It,SocialIcons:D,Spacer:Nt,Columns:Xt,GraffitiWall:Yt,SignupForm:Dt,ContactForm:Vt,Embed:qt};function V(t){return((t==null?void 0:t.content)||[]).map(o=>{const a=Jt[o.type];return a?a(o.props||{}):""}).join(`
`)}function T(t){return JSON.parse(JSON.stringify(t))}function v(t,e={}){return{type:"text",label:t,placeholder:e.placeholder||"Example: 100px"}}const F=[{type:"Hero",props:{id:"graverobber-hero-1",title:"Grave Robber",subtitle:"AMERICAN HORROR PUNK",body:"Horror punk from beyond the grave. Shows, music, merch, booking, and updates.",imageUrl:"assets/grave-robber-skull.png",imageAlt:"Grave Robber skull logo",layout:"center",titleSize:"5rem",titleColor:"#f2f2f2",titleFont:"Creepster, cursive",titleWeight:"700",titleLetterSpacing:"normal",subtitleSize:"1.25rem",subtitleColor:"#c62828",subtitleFont:"Oswald, sans-serif",subtitleWeight:"700",subtitleLetterSpacing:".14em",bodySize:"1.1rem",bodyColor:"#d6d6d6",bodyFont:"Special Elite, cursive",bodyWeight:"400",bodyLetterSpacing:"normal",imageWidth:"300px",imageRadius:"0px",imageShadow:"0 0 55px rgba(198,40,40,.45)",maxWidth:1e3,gap:35,backgroundColor:"transparent",textColor:"#ffffff",paddingY:70,paddingX:24,customFontUrl:"",buttons:[{text:"Shows",url:"shows.html",backgroundColor:"#c62828",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"16px",borderWidth:"0px",borderColor:"transparent",boxShadow:"0 0 24px rgba(198,40,40,.35)",textTransform:"uppercase",radius:"999px",padding:"16px 34px"},{text:"Join the Army of the Dead",url:"signup.html",backgroundColor:"transparent",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"16px",borderWidth:"1px",borderColor:"rgba(255,255,255,.35)",boxShadow:"none",textTransform:"uppercase",radius:"999px",padding:"16px 34px"},{text:"Booking",url:"mailto:graverobber.punk@gmail.com",backgroundColor:"transparent",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"16px",borderWidth:"1px",borderColor:"rgba(198,40,40,.65)",boxShadow:"none",textTransform:"uppercase",radius:"999px",padding:"16px 34px"}]}},{type:"ImageBlock",props:{id:"graverobber-image-1",title:"",titleSize:"3rem",titleColor:"#ffffff",titleFont:"Creepster, cursive",imageUrl:"assets/grave-robber-logo-stacked.png",imageAlt:"Grave Robber logo",width:"520px",radius:"12px",shadow:"0 20px 60px rgba(0,0,0,.55)",align:"center",maxWidth:"900px",backgroundColor:"transparent",paddingY:30,paddingX:24,customFontUrl:""}},{type:"ButtonRow",props:{id:"graverobber-buttons-1",backgroundColor:"transparent",textColor:"#ffffff",paddingY:40,paddingX:24,customFontUrl:"",buttons:[{text:"Shows",url:"shows.html",backgroundColor:"#c62828",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"16px",borderWidth:"0px",borderColor:"transparent",boxShadow:"0 0 24px rgba(198,40,40,.35)",textTransform:"uppercase",radius:"999px",padding:"16px 34px"},{text:"Army of the Dead",url:"signup.html",backgroundColor:"transparent",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"16px",borderWidth:"1px",borderColor:"rgba(255,255,255,.35)",boxShadow:"none",textTransform:"uppercase",radius:"999px",padding:"16px 34px"}]}},{type:"SocialIcons",props:{id:"graverobber-social-1",title:"Follow Grave Robber",titleColor:"#ffffff",titleFont:"Oswald, sans-serif",titleSize:"1rem",titleWeight:"700",backgroundColor:"transparent",textColor:"#ffffff",paddingY:50,paddingX:24,links:[{platform:"facebook",label:"Facebook",url:"https://www.facebook.com/graverobberpunk",iconColor:"#ffffff",backgroundColor:"rgba(198,40,40,.14)",borderColor:"rgba(198,40,40,.55)"},{platform:"instagram",label:"Instagram",url:"https://www.instagram.com/graverobberpunk",iconColor:"#ffffff",backgroundColor:"rgba(198,40,40,.14)",borderColor:"rgba(198,40,40,.55)"},{platform:"x",label:"X",url:"https://x.com/graverobberpunk",iconColor:"#ffffff",backgroundColor:"rgba(198,40,40,.14)",borderColor:"rgba(198,40,40,.55)"},{platform:"threads",label:"Threads",url:"https://www.threads.net/@graverobberpunk",iconColor:"#ffffff",backgroundColor:"rgba(198,40,40,.14)",borderColor:"rgba(198,40,40,.55)"},{platform:"tiktok",label:"TikTok",url:"https://www.tiktok.com/@graverobberpunk",iconColor:"#ffffff",backgroundColor:"rgba(198,40,40,.14)",borderColor:"rgba(198,40,40,.55)"},{platform:"spotify",label:"Spotify",url:"https://open.spotify.com/artist/4D34aUp0OsDs8mAEWPIP7c",iconColor:"#ffffff",backgroundColor:"rgba(198,40,40,.14)",borderColor:"rgba(198,40,40,.55)"},{platform:"youtube",label:"YouTube",url:"https://www.youtube.com/@GraveRobberPunk",iconColor:"#ffffff",backgroundColor:"rgba(198,40,40,.14)",borderColor:"rgba(198,40,40,.55)"},{platform:"bandcamp",label:"Bandcamp",url:"https://graverobberpunk.bandcamp.com/",iconColor:"#ffffff",backgroundColor:"rgba(198,40,40,.14)",borderColor:"rgba(198,40,40,.55)"},{platform:"soundcloud",label:"SoundCloud",url:"https://soundcloud.com/graverobberofficial",iconColor:"#ffffff",backgroundColor:"rgba(198,40,40,.14)",borderColor:"rgba(198,40,40,.55)"},{platform:"apple",label:"Apple Music",url:"https://music.apple.com/us/artist/grave-robber/279558434",iconColor:"#ffffff",backgroundColor:"rgba(198,40,40,.14)",borderColor:"rgba(198,40,40,.55)"},{platform:"website",label:"Merch Store",url:"https://graverobber.bigcartel.com/",iconColor:"#ffffff",backgroundColor:"rgba(198,40,40,.14)",borderColor:"rgba(198,40,40,.55)"},{platform:"email",label:"Email",url:"mailto:graverobber.punk@gmail.com",iconColor:"#ffffff",backgroundColor:"rgba(198,40,40,.14)",borderColor:"rgba(198,40,40,.55)"}]}}],G={backgroundStyle:"grave-ombre",pageBaseColor:"#030000",pageSecondColor:"#000000",pageThirdColor:"",pageGlowColor:"#00ff04",pageSecondGlowColor:"#000000",pageThirdGlowColor:"",pageTextColor:"#f5f0e6",pageGradientAngle:"180deg",pageGlowPosition:"center 18%",pageGlowSize:"34%",pageSecondGlowPosition:"center 70%",pageSecondGlowSize:"45%",pageThirdGlowPosition:"center center",pageThirdGlowSize:"75%",customBackgroundCss:""};function Kt(t={}){const e={...G,...t||{}},o=e.pageBaseColor||"#030000",a=e.pageSecondColor||"#160000",r=e.pageThirdColor||"#000000",i=e.pageGlowColor||"rgba(198,40,40,.18)",l=e.pageSecondGlowColor||"rgba(198,40,40,.10)",s=e.pageThirdGlowColor||"rgba(0,0,0,.65)",n=e.pageGradientAngle||"180deg",b=e.pageGlowPosition||"center 18%",u=e.pageGlowSize||"34%",h=e.pageSecondGlowPosition||"center 70%",C=e.pageSecondGlowSize||"45%",W=e.pageThirdGlowPosition||"center center",E=e.pageThirdGlowSize||"75%";return e.backgroundStyle==="solid"?o:e.backgroundStyle==="vertical-gradient"?`linear-gradient(180deg, ${a} 0%, ${o} 55%, ${r} 100%)`:e.backgroundStyle==="horizontal-gradient"?`linear-gradient(90deg, ${a} 0%, ${o} 50%, ${r} 100%)`:e.backgroundStyle==="diagonal-gradient"?`linear-gradient(${n}, ${a} 0%, ${o} 52%, ${r} 100%)`:e.backgroundStyle==="radial-glow"?`radial-gradient(circle at ${b}, ${i}, transparent ${u}), ${o}`:e.backgroundStyle==="top-glow"?`radial-gradient(circle at top center, ${i}, transparent ${u}), linear-gradient(180deg, ${a}, ${o})`:e.backgroundStyle==="bottom-glow"?`radial-gradient(circle at bottom center, ${i}, transparent ${u}), linear-gradient(180deg, ${o}, ${a})`:e.backgroundStyle==="left-glow"?`radial-gradient(circle at left center, ${i}, transparent ${u}), linear-gradient(90deg, ${a}, ${o})`:e.backgroundStyle==="right-glow"?`radial-gradient(circle at right center, ${i}, transparent ${u}), linear-gradient(90deg, ${o}, ${a})`:e.backgroundStyle==="double-glow"?`radial-gradient(circle at ${b}, ${i}, transparent ${u}), radial-gradient(circle at ${h}, ${l}, transparent ${C}), ${o}`:e.backgroundStyle==="triple-fog"?`radial-gradient(circle at ${b}, ${i}, transparent ${u}), radial-gradient(circle at ${h}, ${l}, transparent ${C}), radial-gradient(circle at ${W}, ${s}, transparent ${E}), linear-gradient(${n}, ${a}, ${o}, ${r})`:e.backgroundStyle==="red-vignette"?`radial-gradient(circle at ${b}, ${i}, transparent ${u}), radial-gradient(circle at center, transparent 0%, transparent 52%, ${s} 100%), linear-gradient(${n}, ${a}, ${o}, ${r})`:e.backgroundStyle==="custom"?e.customBackgroundCss||o:`radial-gradient(circle at ${b}, ${i}, transparent ${u}), radial-gradient(circle at ${h}, ${l}, transparent ${C}), linear-gradient(180deg, ${a}, ${o})`}function Qt(t="home"){const e={text:"☕ Buy Grave Robber a Coffee",url:"https://www.paypal.com/donate/?business=graverobber.punk%40gmail.com&currency_code=USD",backgroundColor:"#000000",textColor:"#bb00ff",fontFamily:"Oswald, sans-serif",fontSize:"14px",borderWidth:"1px",borderColor:"#00ff04",boxShadow:"0 0 24px #00ff04",textTransform:"uppercase",radius:"999px",padding:"10px 16px"},o=[{text:"Home",url:"index.html",backgroundColor:"#000000",textColor:"#bb00ff",fontFamily:"Oswald, sans-serif",fontSize:"14px",borderWidth:"1px",borderColor:"#00ff04",boxShadow:"0 0 24px #00ff04",textTransform:"uppercase",radius:"999px",padding:"10px 16px"},{text:"Shows",url:"shows.html",backgroundColor:"#000000",textColor:"#bb00ff",fontFamily:"Oswald, sans-serif",fontSize:"14px",borderWidth:"1px",borderColor:"#00ff04",boxShadow:"0 0 24px #00ff04",textTransform:"uppercase",radius:"999px",padding:"10px 16px"},{text:"About",url:"about.html",backgroundColor:"#000000",textColor:"#bb00ff",fontFamily:"Oswald, sans-serif",fontSize:"14px",borderWidth:"1px",borderColor:"#00ff04",boxShadow:"0 0 24px #00ff04",textTransform:"uppercase",radius:"999px",padding:"10px 16px"},{text:"Graffiti Wall",url:"graffiti-wall.html",backgroundColor:"#000000",textColor:"#bb00ff",fontFamily:"Oswald, sans-serif",fontSize:"14px",borderWidth:"1px",borderColor:"#00ff04",boxShadow:"0 0 24px #00ff04",textTransform:"uppercase",radius:"999px",padding:"10px 16px"},{text:"Admin",url:"admin.html",backgroundColor:"#000000",textColor:"#bb00ff",fontFamily:"Oswald, sans-serif",fontSize:"14px",borderWidth:"1px",borderColor:"#00ff04",boxShadow:"0 0 24px #00ff04",textTransform:"uppercase",radius:"999px",padding:"10px 16px"}],a={backgroundColor:"#000000",lineColor:"#bb00ff",lineShadow:"0 0 24px #bb00ff",showBack:"hide",backText:"Back",backUrl:"index.html",logoUrl:"assets/grave-robber-skull.png",logoAlt:"Grave Robber",logoSize:"52px",logoPlacement:"right",width:"100%",maxWidth:"none",margin:"0",padding:"18px 28px",navPlacement:"center",headerPosition:"full",buttons:o},r={showBack:"hide",leftButtons:[e]},i={id:`graverobber-${t}-popup-1`,showInEditor:"no",exitTriggerDistance:70,theme:"toxic",animationStyle:"pop",eyebrow:"WELCOME TO THE GRAVE",title:"Join the Army of the Dead",body:"You have crossed into Grave Robber territory. Join the Army of the Dead and march with us into the noise.",align:"center",titleColor:"#00ff04",titleFont:"Creepster, cursive",titleSize:"clamp(44px, 8vw, 92px)",titleShadow:"0 0 18px #00ff04, 0 0 42px rgba(187,0,255,.85)",bodyColor:"#ffffff",bodyFont:"Special Elite, cursive",bodySize:"20px",backgroundColor:"transparent",cardBackground:"linear-gradient(135deg, rgba(0,0,0,.92), rgba(32,0,46,.88))",borderColor:"#bb00ff",glowColor:"#00ff04",radius:"28px",maxWidth:"920px",paddingY:70,paddingX:24,customFontUrl:"",noThanksText:"No Thanks",noThanksBackgroundColor:"transparent",noThanksTextColor:"#ffffff",noThanksBorderColor:"rgba(255,255,255,.45)",buttons:[{text:"Join the Army of the Dead",url:"signup.html",backgroundColor:"#bb00ff",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"16px",borderWidth:"2px",borderColor:"#00ff04",boxShadow:"0 0 24px rgba(0,255,4,.75)",textTransform:"uppercase",radius:"999px",padding:"14px 28px"}]};return t==="contact"?[{type:"HeaderNav",props:{id:"graverobber-contact-header-1",backgroundColor:"#000000",lineColor:"#bb00ff",lineShadow:"0 0 24px #bb00ff",showBack:"show",backText:"Back",backUrl:"index.html",logoUrl:"assets/grave-robber-skull.png",logoAlt:"Grave Robber",logoSize:"52px",logoPlacement:"right",width:"100%",maxWidth:"none",margin:"0",padding:"18px 28px",navPlacement:"center",headerPosition:"full",buttons:o,...r}},{type:"ContactForm",props:{id:"graverobber-contact-form-1",formAction:"https://docs.google.com/forms/d/e/1FAIpQLSfvFy-I4z36zqLz4y4boVhM4eTL7KEb5Ip1It7OZyFfxlRgMw/formResponse",nameEntry:"entry.111991046",emailEntry:"entry.709491702",messageEntry:"entry.905150677",nameLabel:"What are you called?",emailLabel:"What is your email?",messageLabel:"What do you want?",messageRows:7,buttonText:"Send Message",successMessage:"Great, your message was sent and we will get back to you shortly.",backgroundColor:"#000000",paddingY:30,paddingX:24,paddingBottom:80}},{type:"GraveRobberSocial",props:{id:"graverobber-contact-social-1",title:"Follow Grave Robber",titleColor:"#00ff04",titleFont:"Oswald, sans-serif",titleSize:"1rem",backgroundColor:"#000000",textColor:"#00ff04",paddingY:50,paddingX:24,links:[{platform:"facebook",label:"Facebook",url:"https://www.facebook.com/graverobberpunk",iconColor:"#bb00ff",backgroundColor:"#000000",borderColor:"#00ff04"},{platform:"instagram",label:"Instagram",url:"https://www.instagram.com/graverobberpunk",iconColor:"#bb00ff",backgroundColor:"#000000",borderColor:"#00ff04"},{platform:"spotify",label:"Spotify",url:"https://open.spotify.com/artist/4D34aUp0OsDs8mAEWPIP7c",iconColor:"#bb00ff",backgroundColor:"#000000",borderColor:"#00ff04"},{platform:"youtube",label:"YouTube",url:"https://www.youtube.com/@GraveRobberPunk",iconColor:"#bb00ff",backgroundColor:"#000000",borderColor:"#00ff04"},{platform:"email",label:"Email",url:"mailto:graverobber.punk@gmail.com",iconColor:"#bb00ff",backgroundColor:"#000000",borderColor:"#00ff04"}]}}]:t==="shows"?[{type:"HeaderNav",props:{id:"graverobber-shows-header-1",backgroundColor:"rgba(0,0,0,.86)",lineColor:"rgba(198,40,40,.65)",lineShadow:"0 0 24px rgba(198,40,40,.28)",showBack:"show",backText:"Back",backUrl:"index.html",logoUrl:"assets/grave-robber-skull.png",logoAlt:"Grave Robber",logoSize:"52px",logoPlacement:"right",width:"100%",maxWidth:"none",margin:"0",padding:"18px 28px",navPlacement:"center",headerPosition:"full",buttons:o,...r}},{type:"TextBlock",props:{id:"graverobber-shows-title-1",eyebrow:"Live with the Army of the Dead",eyebrowColor:"#c62828",eyebrowFont:"Oswald, sans-serif",eyebrowSize:"1rem",eyebrowWeight:"700",title:"Shows",titleSize:"4rem",titleColor:"#ffffff",titleFont:"Creepster, cursive",titleWeight:"700",body:"Join the Army of the Dead to hear when the next haunt is announced.",bodySize:"1.1rem",bodyColor:"#d6d6d6",bodyFont:"Special Elite, cursive",bodyWeight:"400",align:"center",maxWidth:"850px",backgroundColor:"transparent",textColor:"#ffffff",paddingY:70,paddingX:24,customFontUrl:"",buttons:[{text:"Get Notified",url:"signup.html",backgroundColor:"#c62828",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"16px",borderWidth:"0px",borderColor:"transparent",boxShadow:"0 0 24px rgba(198,40,40,.35)",textTransform:"uppercase",radius:"999px",padding:"16px 34px"}]}},{type:"Embed",props:{html:'<div class="gr-bandsintown-widget"><style>.gr-bandsintown-widget,.gr-bandsintown-widget .bit-widget,.gr-bandsintown-widget [class*="bit-event"]{background:transparent!important;color:#ffffff!important}.gr-bandsintown-widget a,.gr-bandsintown-widget [class*="bit-date"],.gr-bandsintown-widget [class*="bit-location"],.gr-bandsintown-widget [class*="bit-venue"]{color:#ffffff!important}.gr-bandsintown-widget button,.gr-bandsintown-widget [class*="bit-button"],.gr-bandsintown-widget [class*="bit-cta"],.gr-bandsintown-widget a[class*="bit-rsvp"],.gr-bandsintown-widget a[class*="bit-offers"]{background:#000000!important;color:#bb00ff!important;border:1px solid #00ff04!important;box-shadow:0 0 24px rgba(0,255,4,.75)!important}</style><script charset="utf-8" src="https://widgetv3.bandsintown.com/main.min.js"><\/script><a class="bit-widget-initializer" data-artist-name="id_370380" data-app-id="b6eb44f4c7b30b8e877c0dffa1414f0a" data-background-color="rgba(0,0,0,0)" data-text-color="#ffffff" data-link-color="#00ff04" data-link-text-color="#bb00ff" data-separator-color="rgba(0,255,4,.55)" data-popup-background-color="#000000" data-event-ticket-cta-text-color="#bb00ff" data-event-ticket-cta-bg-color="#000000" data-event-ticket-cta-border-color="#00ff04" data-event-ticket-cta-border-width="1px" data-event-rsvp-cta-text-color="#bb00ff" data-event-rsvp-cta-bg-color="#000000" data-event-rsvp-cta-border-color="#00ff04" data-event-rsvp-cta-border-width="1px" data-follow-section-cta-text-color="#bb00ff" data-follow-section-cta-bg-color="#000000" data-follow-section-cta-border-color="#00ff04" data-follow-section-cta-border-width="1px" data-play-my-city-cta-text-color="#bb00ff" data-play-my-city-cta-bg-color="#000000" data-play-my-city-cta-border-color="#00ff04" data-play-my-city-cta-border-width="1px"></a></div>',backgroundColor:"transparent",paddingY:20,paddingX:24}}]:t==="signup"?[{type:"HeaderNav",props:{id:"graverobber-signup-header-1",backgroundColor:"rgba(0,0,0,.86)",lineColor:"rgba(198,40,40,.65)",lineShadow:"0 0 24px rgba(198,40,40,.28)",showBack:"show",backText:"Back",backUrl:"index.html",logoUrl:"assets/grave-robber-skull.png",logoAlt:"Grave Robber",logoSize:"52px",logoPlacement:"right",width:"100%",maxWidth:"none",margin:"0",padding:"18px 28px",navPlacement:"center",headerPosition:"full",buttons:o,...r}},{type:"TextBlock",props:{id:"graverobber-signup-title-1",eyebrow:"Join the underground",eyebrowColor:"#c62828",eyebrowFont:"Oswald, sans-serif",eyebrowSize:"1rem",eyebrowWeight:"700",title:"Army of the Dead",titleSize:"4rem",titleColor:"#ffffff",titleFont:"Creepster, cursive",titleWeight:"700",body:"Get show updates, music news, and dispatches from the grave.",bodySize:"1.1rem",bodyColor:"#d6d6d6",bodyFont:"Special Elite, cursive",bodyWeight:"400",align:"center",maxWidth:"850px",backgroundColor:"transparent",textColor:"#ffffff",paddingY:70,paddingX:24,customFontUrl:"",buttons:[]}},{type:"Embed",props:{html:'<form id="signup-form" class="custom-form"><label>Name<input type="text" name="name" required></label><label>Email<input type="email" name="email" required></label><label>Phone<input type="tel" name="phone"></label><label>Message<textarea name="message" rows="5"></textarea></label><button type="submit">Join the Army of the Dead</button><p id="signup-status"></p></form>',backgroundColor:"transparent",paddingY:20,paddingX:24}}]:t==="about"?[{type:"HeaderNav",props:{id:"graverobber-about-header-1",...a,...r}},{type:"WelcomeHorrorMessage",props:i},{type:"TextBlock",props:{id:"graverobber-about-empty-1",eyebrow:"",title:"",body:"",align:"center",maxWidth:"850px",backgroundColor:"transparent",textColor:"#ffffff",paddingY:120,paddingX:24,customFontUrl:"",buttons:[]}}]:t==="graffiti-wall"?[{type:"HeaderNav",props:{id:"graverobber-graffiti-header-1",...a,...r}},{type:"GraffitiWall",props:{id:"graverobber-graffiti-wall-1",eyebrow:"Fan wall",title:"Graffiti Wall",body:"Write a message, upload a photo, or paint something for the band. Submissions appear after admin approval.",nameLabel:"Your name",messageLabel:"Your message",photoLabel:"Photo with the band",paintLabel:"Paint",submitText:"Send for Approval",successMessage:"Submitted. It will appear after admin approval.",backgroundColor:"transparent",textColor:"#ffffff",accentColor:"#00ff04",panelBackground:"rgba(0,0,0,.72)",borderColor:"#bb00ff",paddingY:70,paddingX:24}}]:t==="contact"?[{type:"HeaderNav",props:{id:"graverobber-contact-header-1",backgroundColor:"rgba(0,0,0,.86)",lineColor:"#00ff04",lineShadow:"0 0 24px #00ff04",showBack:"show",backText:"Back",backUrl:"index.html",logoUrl:"assets/grave-robber-skull.png",logoAlt:"Grave Robber",logoSize:"52px",logoPlacement:"right",width:"100%",maxWidth:"none",margin:"0",padding:"18px 28px",navPlacement:"center",headerPosition:"full",buttons:o,...r}},{type:"TextBlock",props:{id:"graverobber-contact-title-1",eyebrow:"Booking / Contact",eyebrowColor:"#00ff04",eyebrowFont:"Oswald, sans-serif",eyebrowSize:"1rem",eyebrowWeight:"700",title:"Contact Grave Robber",titleSize:"4rem",titleColor:"#bb00ff",titleFont:"Creepster, cursive",titleWeight:"700",body:"Use the form below for booking, merch, press, and general contact.",bodySize:"1.1rem",bodyColor:"#ffffff",bodyFont:"Oswald, sans-serif",bodyWeight:"400",align:"center",maxWidth:"850px",backgroundColor:"#000000",textColor:"#ffffff",paddingY:70,paddingX:24,customFontUrl:"",buttons:[]}},{type:"Embed",props:{html:'<div class="graverobber-contact-form-wrap"><iframe class="graverobber-contact-form" src="https://docs.google.com/forms/d/e/1FAIpQLSfvFy-I4z36zqLz4y4boVhM4eTL7KEb5Ip1It7OZyFfxlRgMw/viewform?embedded=true" width="640" height="721" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe></div>',backgroundColor:"#000000",paddingY:30,paddingX:24}}]:t==="merch"?[{type:"HeaderNav",props:{id:"graverobber-merch-header-1",backgroundColor:"rgba(0,0,0,.86)",lineColor:"rgba(198,40,40,.65)",lineShadow:"0 0 24px rgba(198,40,40,.28)",showBack:"show",backText:"Back",backUrl:"index.html",logoUrl:"assets/grave-robber-skull.png",logoAlt:"Grave Robber",logoSize:"52px",logoPlacement:"right",width:"100%",maxWidth:"none",margin:"0",padding:"18px 28px",navPlacement:"center",headerPosition:"full",buttons:o,...r}},{type:"TextBlock",props:{id:"graverobber-merch-title-1",eyebrow:"Official Grave Robber merch",title:"Merch",body:"Add merch items, store links, photos, and announcements here.",align:"center",maxWidth:"850px",backgroundColor:"transparent",textColor:"#ffffff",paddingY:70,paddingX:24,titleColor:"#ffffff",titleFont:"Creepster, cursive",titleSize:"4rem",bodyColor:"#d6d6d6",bodyFont:"Oswald, sans-serif",bodySize:"1.1rem",buttons:[{text:"Visit Merch Store",url:"https://graverobber.bigcartel.com/",backgroundColor:"#c62828",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"16px",borderWidth:"0px",borderColor:"transparent",boxShadow:"0 0 24px rgba(198,40,40,.35)",textTransform:"uppercase",radius:"999px",padding:"16px 34px"}]}}]:t==="gallery"?[{type:"HeaderNav",props:{id:"graverobber-gallery-header-1",backgroundColor:"rgba(0,0,0,.86)",lineColor:"rgba(198,40,40,.65)",lineShadow:"0 0 24px rgba(198,40,40,.28)",showBack:"show",backText:"Back",backUrl:"index.html",logoUrl:"assets/grave-robber-skull.png",logoAlt:"Grave Robber",logoSize:"52px",logoPlacement:"right",width:"100%",maxWidth:"none",margin:"0",padding:"18px 28px",navPlacement:"center",headerPosition:"full",buttons:o,...r}},{type:"GalleryGrid",props:{title:"Gallery",id:"graverobber-gallery-grid-1",titleColor:"#ffffff",titleFont:"Oswald, sans-serif",titleSize:"2.5rem",backgroundColor:"transparent",textColor:"#ffffff",paddingY:40,paddingX:24,layoutMode:"freeform",canvasHeight:"920px",columns:3,gap:18,images:[]}}]:[{type:"HeaderNav",props:{id:"graverobber-home-header-1",...a,leftButtons:[e]}},{type:"GraveRobberHero",props:{id:"graverobber-home-hero-1",title:"Grave Robber",subtitle:"AMERICAN HORROR PUNK",body:"Horror punk from beyond the grave. Shows, music, merch, booking, and updates.",imageUrl:"assets/grave-robber-skull.png",imageAlt:"Grave Robber skull logo",layout:"image-top",imageWidth:"300px",imageRadius:"0px",imageShadow:"0 0 90px rgba(198,40,40,.38)",titleSize:"44px",titleColor:"#f5f0e6",titleFont:"Oswald, sans-serif",titleWeight:"700",subtitleSize:"18px",subtitleColor:"#e52b2b",subtitleFont:"Oswald, sans-serif",subtitleWeight:"700",subtitleLetterSpacing:".45em",subtitleTransform:"uppercase",bodySize:"18px",bodyColor:"#cfd3d6",bodyFont:"Oswald, sans-serif",bodyWeight:"400",backgroundColor:"transparent",textColor:"#ffffff",paddingY:120,paddingX:24,maxWidth:900,gap:34,buttons:[{text:"Shows",url:"shows.html",backgroundColor:"#c62828",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"16px",borderWidth:"0px",borderColor:"transparent",boxShadow:"0 0 24px rgba(198,40,40,.45)",textTransform:"uppercase",radius:"999px",padding:"16px 34px"},{text:"Music",url:"#music",backgroundColor:"#8b3df4",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"16px",borderWidth:"0px",borderColor:"transparent",boxShadow:"0 0 24px rgba(57,255,20,.45)",textTransform:"uppercase",radius:"999px",padding:"16px 34px"},{text:"Join the Army of the Dead",url:"signup.html",backgroundColor:"#b000ff",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"16px",borderWidth:"0px",borderColor:"transparent",boxShadow:"0 0 24px rgba(57,255,20,.55)",textTransform:"uppercase",radius:"999px",padding:"16px 34px"},{text:"About",url:"about.html",backgroundColor:"#8b3df4",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"16px",borderWidth:"0px",borderColor:"transparent",boxShadow:"none",textTransform:"uppercase",radius:"999px",padding:"16px 34px"},{text:"Gallery",url:"gallery.html",backgroundColor:"#8b3df4",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"16px",borderWidth:"0px",borderColor:"transparent",boxShadow:"none",textTransform:"uppercase",radius:"999px",padding:"16px 34px"},{text:"Merch",url:"merch.html",backgroundColor:"#8b3df4",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"16px",borderWidth:"0px",borderColor:"transparent",boxShadow:"none",textTransform:"uppercase",radius:"999px",padding:"16px 34px"},{text:"Graffiti Wall",url:"graffiti-wall.html",backgroundColor:"#8b3df4",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"16px",borderWidth:"0px",borderColor:"transparent",boxShadow:"none",textTransform:"uppercase",radius:"999px",padding:"16px 34px"},{text:"Buy the Band a Coffee",url:"https://www.paypal.com/donate/?business=graverobber.punk%40gmail.com&currency_code=USD",backgroundColor:"#000000",textColor:"#00ff04",fontFamily:"Oswald, sans-serif",fontSize:"16px",borderWidth:"1px",borderColor:"#00ff04",boxShadow:"0 0 24px rgba(57,255,20,.45)",textTransform:"uppercase",radius:"999px",padding:"16px 34px"},{text:"Booking",url:"contact.html",backgroundColor:"#b000ff",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"16px",borderWidth:"0px",borderColor:"transparent",boxShadow:"0 0 24px rgba(57,255,20,.45)",textTransform:"uppercase",radius:"999px",padding:"16px 34px"}]}},{type:"Spacer",props:{id:"graverobber-home-divider-space-1",height:40,backgroundColor:"transparent"}},{type:"GraveRobberSocial",props:{id:"graverobber-home-social-1",title:"Follow Grave Robber",titleColor:"#ffffff",titleFont:"Oswald, sans-serif",titleSize:"1rem",backgroundColor:"transparent",textColor:"#ffffff",paddingY:50,paddingX:24,links:[{platform:"facebook",label:"Facebook",url:"https://www.facebook.com/graverobberpunk",iconColor:"#ffffff",backgroundColor:"transparent",borderColor:"rgba(255,255,255,.35)"},{platform:"instagram",label:"Instagram",url:"https://www.instagram.com/graverobberpunk",iconColor:"#ffffff",backgroundColor:"transparent",borderColor:"rgba(255,255,255,.35)"},{platform:"spotify",label:"Spotify",url:"https://open.spotify.com/artist/4D34aUp0OsDs8mAEWPIP7c",iconColor:"#ffffff",backgroundColor:"transparent",borderColor:"rgba(255,255,255,.35)"}]}}]}function lt(t="home"){return{root:{props:{title:`Grave Robber ${t.charAt(0).toUpperCase()+t.slice(1)}`,...G}},content:Qt(t)}}function Zt(){if(typeof window>"u")return"home";const t=window.location.pathname.split("/").pop()||"index.html";return t==="index.html"||t===""?"home":t.replace(".html","")}lt(Zt());v("Image Width",{placeholder:"Example: 900px"}),v("Mobile Image Width",{placeholder:"Example: 70vw or 280px"}),v("Image Rounded Corners",{placeholder:"Example: 50%"}),v("Title Font Size",{placeholder:"Example: 72px"}),v("Image Width",{placeholder:"Example: 520px"}),v("Rounded Corners",{placeholder:"Example: 12px"}),T(F[0].props),T(F[1].props),T(F[2].props),T(F[3].props);const dt="graverobber";function te(){try{if(!document.referrer)return!1;const t=new URL(document.referrer).hostname.replace(/^www\./,""),e=window.location.hostname.replace(/^www\./,"");return t===e}catch{return!1}}function ee(){var t,e;try{const o=(e=(t=performance.getEntriesByType)==null?void 0:t.call(performance,"navigation"))==null?void 0:e[0];return(o==null?void 0:o.type)==="reload"}catch{return!1}}function oe(t){return t==="home"&&!te()&&!ee()}async function re(t){try{await fetch(`${t}/visitors/${dt}/track`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({page:"home"})})}catch(e){console.warn("Visitor tracking failed:",e)}}function q(t,e){const o=document.querySelectorAll(".gr-exit-popup-wrap, .gr-welcome-section, [data-gr-exit-popup]");if(t!=="home"){o.forEach(a=>a.remove());return}if(!oe(t)){o.forEach(a=>a.remove());return}o.forEach(a=>{a.classList.add("is-visible"),a.classList.add("was-triggered"),a.dataset.disableExitIntent="true"}),re(e)}function ae(){var o,a;const t=(a=(o=document.body)==null?void 0:o.dataset)==null?void 0:a.page,e=(()=>{const r=window.location.pathname.split("/").pop()||"index.html";return r==="index.html"||r===""?"home":r.replace(".html","")})();return t&&t!=="home"?t:e}function ie(t){if(typeof t!="string")return t;try{return JSON.parse(t)}catch(e){return console.warn("project_data was a string but could not be parsed",e,t),null}}function ne(t,e){return!(t!=null&&t.content)||!Array.isArray(t.content)||!t.content.length?!1:e==="contact"?t.content.some(o=>(o==null?void 0:o.type)==="ContactForm"):!0}function J(t){t.querySelectorAll("[data-gr-exit-popup]").forEach(e=>{if(e.dataset.grExitPopupBound==="true")return;e.dataset.grExitPopupBound="true";let o=e.classList.contains("is-visible")||e.classList.contains("was-triggered"),a=null,r=!1;const i=Number(e.dataset.triggerDistance||120);function l(){o||(o=!0,e.classList.add("is-visible"),e.classList.add("was-triggered"))}function s(){e.classList.remove("is-visible")}document.addEventListener("mousemove",n=>{if(e.dataset.disableExitIntent==="true")return;const b=Math.max(i+180,260);n.clientY>=b&&(r=!0);const u=a!==null&&n.clientY<a,h=n.clientY<=i;r&&u&&h&&l(),a=n.clientY}),e.addEventListener("click",n=>{(n.target.classList.contains("gr-exit-popup-backdrop")||n.target.classList.contains("gr-exit-popup-close")||n.target.classList.contains("gr-exit-popup-no-thanks"))&&s()})})}function K(t){t.querySelectorAll("script").forEach(e=>{if(e.dataset.executedRenderedScript==="true")return;const o=document.createElement("script");Array.from(e.attributes).forEach(a=>{a.name!=="data-executed-rendered-script"&&o.setAttribute(a.name,a.value)}),o.dataset.executedRenderedScript="true",o.textContent=e.textContent,e.replaceWith(o)})}async function le(){var l,s;const t=document.getElementById("editable-page-root");if(!t)return;const e=document.createElement("style");e.textContent=Ht(),document.head.appendChild(e);const o=ae(),a=window.BAND_API_BASE||"https://band-admin-backend-production.up.railway.app/api";function r(n={}){const b={...G,...n||{}},u=Kt(b);document.documentElement.style.background=u,document.body.style.background=u,document.body.style.color=b.pageTextColor||"#f5f0e6",t.style.minHeight="100vh",t.style.background=u,t.style.color=b.pageTextColor||"#f5f0e6"}try{const n=await fetch(`${a}/visual-pages/${dt}/${o}?_=${Date.now()}`);if(!n.ok)throw new Error(`Public page fetch failed: ${n.status}`);const b=await n.json(),u=(b==null?void 0:b.page)||b||{},h=ie(u.project_data);if(ne(h,o)){r((l=h.root)==null?void 0:l.props),t.innerHTML=V(h),q(o,a),K(t),J(t),document.documentElement.classList.add("visual-page-ready"),window.dispatchEvent(new CustomEvent("visualPageRendered",{detail:{pageName:o}}));return}u.html&&u.html.trim()&&console.warn("Ignoring saved page.html because it can contain old raw fallback HTML.")}catch(n){console.warn("Published page failed to load. Rendering default page.",n)}const i=lt(o);r((s=i.root)==null?void 0:s.props),t.innerHTML=V(i),q(o,a),K(t),J(t),document.documentElement.classList.add("visual-page-ready"),window.dispatchEvent(new CustomEvent("visualPageRendered",{detail:{pageName:o}}))}le();
