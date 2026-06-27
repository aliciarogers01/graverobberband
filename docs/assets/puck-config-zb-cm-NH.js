function Ce(e,t){for(var r=0;r<t.length;r++){const n=t[r];if(typeof n!="string"&&!Array.isArray(n)){for(const a in n)if(a!=="default"&&!(a in e)){const i=Object.getOwnPropertyDescriptor(n,a);i&&Object.defineProperty(e,a,i.get?i:{enumerable:!0,get:()=>n[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(a){if(a.ep)return;a.ep=!0;const i=r(a);fetch(a.href,i)}})();function Se(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var le={exports:{}},O={},se={exports:{}},u={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I=Symbol.for("react.element"),Te=Symbol.for("react.portal"),ze=Symbol.for("react.fragment"),$e=Symbol.for("react.strict_mode"),Be=Symbol.for("react.profiler"),Fe=Symbol.for("react.provider"),Pe=Symbol.for("react.context"),je=Symbol.for("react.forward_ref"),Le=Symbol.for("react.suspense"),Re=Symbol.for("react.memo"),We=Symbol.for("react.lazy"),ee=Symbol.iterator;function Ge(e){return e===null||typeof e!="object"?null:(e=ee&&e[ee]||e["@@iterator"],typeof e=="function"?e:null)}var de={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},pe=Object.assign,ce={};function R(e,t,r){this.props=e,this.context=t,this.refs=ce,this.updater=r||de}R.prototype.isReactComponent={};R.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};R.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ge(){}ge.prototype=R.prototype;function J(e,t,r){this.props=e,this.context=t,this.refs=ce,this.updater=r||de}var K=J.prototype=new ge;K.constructor=J;pe(K,R.prototype);K.isPureReactComponent=!0;var te=Array.isArray,be=Object.prototype.hasOwnProperty,Q={current:null},me={key:!0,ref:!0,__self:!0,__source:!0};function ue(e,t,r){var n,a={},i=null,s=null;if(t!=null)for(n in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(i=""+t.key),t)be.call(t,n)&&!me.hasOwnProperty(n)&&(a[n]=t[n]);var d=arguments.length-2;if(d===1)a.children=r;else if(1<d){for(var l=Array(d),b=0;b<d;b++)l[b]=arguments[b+2];a.children=l}if(e&&e.defaultProps)for(n in d=e.defaultProps,d)a[n]===void 0&&(a[n]=d[n]);return{$$typeof:I,type:e,key:i,ref:s,props:a,_owner:Q.current}}function Ie(e,t){return{$$typeof:I,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Z(e){return typeof e=="object"&&e!==null&&e.$$typeof===I}function Ne(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var re=/\/+/g;function V(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ne(""+e.key):t.toString(36)}function U(e,t,r,n,a){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case I:case Te:s=!0}}if(s)return s=e,a=a(s),e=n===""?"."+V(s,0):n,te(a)?(r="",e!=null&&(r=e.replace(re,"$&/")+"/"),U(a,t,r,"",function(b){return b})):a!=null&&(Z(a)&&(a=Ie(a,r+(!a.key||s&&s.key===a.key?"":(""+a.key).replace(re,"$&/")+"/")+e)),t.push(a)),1;if(s=0,n=n===""?".":n+":",te(e))for(var d=0;d<e.length;d++){i=e[d];var l=n+V(i,d);s+=U(i,t,r,l,a)}else if(l=Ge(e),typeof l=="function")for(e=l.call(e),d=0;!(i=e.next()).done;)i=i.value,l=n+V(i,d++),s+=U(i,t,r,l,a);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function M(e,t,r){if(e==null)return e;var n=[],a=0;return U(e,n,"","",function(i){return t.call(r,i,a++)}),n}function Me(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var y={current:null},H={transition:null},Ae={ReactCurrentDispatcher:y,ReactCurrentBatchConfig:H,ReactCurrentOwner:Q};u.Children={map:M,forEach:function(e,t,r){M(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return M(e,function(){t++}),t},toArray:function(e){return M(e,function(t){return t})||[]},only:function(e){if(!Z(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};u.Component=R;u.Fragment=ze;u.Profiler=Be;u.PureComponent=J;u.StrictMode=$e;u.Suspense=Le;u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ae;u.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=pe({},e.props),a=e.key,i=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,s=Q.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var d=e.type.defaultProps;for(l in t)be.call(t,l)&&!me.hasOwnProperty(l)&&(n[l]=t[l]===void 0&&d!==void 0?d[l]:t[l])}var l=arguments.length-2;if(l===1)n.children=r;else if(1<l){d=Array(l);for(var b=0;b<l;b++)d[b]=arguments[b+2];n.children=d}return{$$typeof:I,type:e.type,key:a,ref:i,props:n,_owner:s}};u.createContext=function(e){return e={$$typeof:Pe,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Fe,_context:e},e.Consumer=e};u.createElement=ue;u.createFactory=function(e){var t=ue.bind(null,e);return t.type=e,t};u.createRef=function(){return{current:null}};u.forwardRef=function(e){return{$$typeof:je,render:e}};u.isValidElement=Z;u.lazy=function(e){return{$$typeof:We,_payload:{_status:-1,_result:e},_init:Me}};u.memo=function(e,t){return{$$typeof:Re,type:e,compare:t===void 0?null:t}};u.startTransition=function(e){var t=H.transition;H.transition={};try{e()}finally{H.transition=t}};u.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};u.useCallback=function(e,t){return y.current.useCallback(e,t)};u.useContext=function(e){return y.current.useContext(e)};u.useDebugValue=function(){};u.useDeferredValue=function(e){return y.current.useDeferredValue(e)};u.useEffect=function(e,t){return y.current.useEffect(e,t)};u.useId=function(){return y.current.useId()};u.useImperativeHandle=function(e,t,r){return y.current.useImperativeHandle(e,t,r)};u.useInsertionEffect=function(e,t){return y.current.useInsertionEffect(e,t)};u.useLayoutEffect=function(e,t){return y.current.useLayoutEffect(e,t)};u.useMemo=function(e,t){return y.current.useMemo(e,t)};u.useReducer=function(e,t,r){return y.current.useReducer(e,t,r)};u.useRef=function(e){return y.current.useRef(e)};u.useState=function(e){return y.current.useState(e)};u.useSyncExternalStore=function(e,t,r){return y.current.useSyncExternalStore(e,t,r)};u.useTransition=function(){return y.current.useTransition()};u.version="18.2.0";se.exports=u;var G=se.exports;const fe=Se(G),Wt=Ce({__proto__:null,default:fe},[G]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ee=G,Ue=Symbol.for("react.element"),He=Symbol.for("react.fragment"),Oe=Object.prototype.hasOwnProperty,De=Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_e={key:!0,ref:!0,__self:!0,__source:!0};function he(e,t,r){var n,a={},i=null,s=null;r!==void 0&&(i=""+r),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(s=t.ref);for(n in t)Oe.call(t,n)&&!_e.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)a[n]===void 0&&(a[n]=t[n]);return{$$typeof:Ue,type:e,key:i,ref:s,props:a,_owner:De.current}}O.Fragment=He;O.jsx=he;O.jsxs=he;le.exports=O;var o=le.exports;function m(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function c(e){return m(e).trim()}function f(e){return String(e??"").trim().length>0}function N(e){return m(e).replaceAll(`
`,"<br>")}function g(e={}){return Object.entries(e).filter(([,t])=>t!=null&&t!=="").map(([t,r])=>`${t.replace(/[A-Z]/g,n=>`-${n.toLowerCase()}`)}:${r}`).join(";")}function Ye(e){const t=Number(String(e||"").replace(/[^0-9.]/g,""));return Number.isFinite(t)&&t>0?t:920}function Xe(e={}){const t=(e.images||[]).filter(d=>f(d.imageUrl));if((e.layoutMode||"grid")!=="freeform"||!t.length)return e;const r=Ye(e.canvasHeight),n=t.reduce((d,l)=>{const b=Number.isFinite(Number(l.y))?Number(l.y):0;return Math.min(d,Math.min(100,Math.max(0,b))/100*r)},1/0),a=t.map((d,l)=>{const b=Number.isFinite(Number(d.y))?Number(d.y):0,h=Math.min(100,Math.max(0,b))/100*r-n,x=Number.isFinite(Number(d.x))?d.x:l%3*32+5;return{...d,x,yPx:Math.max(0,h)}}),i=a.reduce((d,l)=>{const b=Number(String(l.width||"280").replace(/[^0-9.]/g,""))||280,h=Math.min(520,Math.max(170,b*.72));return Math.max(d,l.yPx+h+22)},0),s=Math.max(260,Math.ceil(i));return{...e,canvasHeight:`${s}px`,images:a.map(d=>({...d,y:s?d.yPx/s*100:0}))}}function z(e={},t=""){return{fontSize:e[`${t}Size`]||"inherit",color:e[`${t}Color`]||"inherit",fontFamily:e[`${t}Font`]||"inherit",fontWeight:e[`${t}Weight`]||"inherit",fontStyle:e[`${t}Style`]||"inherit",textDecoration:e[`${t}Decoration`]||"none",textTransform:e[`${t}Transform`]||"none",letterSpacing:e[`${t}LetterSpacing`]||"normal",lineHeight:e[`${t}LineHeight`]||"normal",textShadow:e[`${t}Shadow`]||"none"}}function B(e){return f(e)?`<style>@import url('${c(e)}');</style>`:""}function Ve(e="custom"){return String(e||"custom").toLowerCase().trim()}function qe(e,t=""){const r=Ve(e),n='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M8 12h8M12 8v8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',a={facebook:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.019 4.388 10.994 10.125 11.854v-8.385H7.078v-3.469h3.047V9.431c0-3.007 1.791-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.249h3.328l-.532 3.469h-2.796v8.385C19.612 23.067 24 18.092 24 12.073z"/></svg>',instagram:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3.5A4.5 4.5 0 1112 16a4.5 4.5 0 010-9zm0 2A2.5 2.5 0 1012 14a2.5 2.5 0 000-5zm5.25-3.25a1.25 1.25 0 11-1.25 1.25 1.25 1.25 0 011.25-1.25z"/></svg>',tiktok:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19.589 6.686a4.793 4.793 0 01-3.77-4.187V2h-3.358v13.743a2.89 2.89 0 11-2.89-2.89c.213 0 .421.023.622.067V9.51a6.248 6.248 0 00-.622-.033A6.248 6.248 0 1015.82 15.72V8.687a8.154 8.154 0 004.77 1.539V6.686z"/></svg>',youtube:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 00.5 6.2 31.5 31.5 0 000 12a31.5 31.5 0 00.5 5.8 3 3 0 002.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 002.1-2.1A31.5 31.5 0 0024 12a31.5 31.5 0 00-.5-5.8zM9.6 15.6V8.4L15.8 12l-6.2 3.6z"/></svg>',spotify:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 1.8A10.2 10.2 0 1022.2 12 10.2 10.2 0 0012 1.8zm4.68 14.72a.76.76 0 01-1.05.25 9.58 9.58 0 00-7.28-.78.76.76 0 11-.44-1.46 11.13 11.13 0 018.52.94.76.76 0 01.25 1.05zm1.25-2.77a.9.9 0 01-1.24.3 11.75 11.75 0 00-8.62-.96.9.9 0 11-.52-1.72 13.5 13.5 0 019.96 1.14.9.9 0 01.42 1.24zm.13-2.94a14.15 14.15 0 00-10.4-1.13 1.05 1.05 0 11-.61-2.01 16.3 16.3 0 0112.08 1.32 1.05 1.05 0 11-1.07 1.82z"/></svg>',bandcamp:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7.1 6h14L16.9 18h-14L7.1 6z"/></svg>',soundcloud:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.8 10.1A4.8 4.8 0 0020 19H8.5V7.5a7 7 0 019.3 2.6zM3 13h1v6H3v-6zm2-2h1v8H5v-8zm2 1h1v7H7v-7z"/></svg>',apple:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16.4 2.2c.1 1.1-.4 2.2-1.1 3-.7.8-1.8 1.4-2.8 1.3-.1-1.1.4-2.2 1.1-3 .8-.8 1.9-1.3 2.8-1.3zM20.2 17.1c-.5 1.1-.8 1.6-1.5 2.6-1 1.5-2.4 3.3-4.1 3.3-1.5 0-1.9-1-4-1s-2.6 1-4 1c-1.7 0-3-1.6-4-3.1-2.8-4.2-3.1-9.1-1.4-11.7 1.2-1.8 3-2.8 4.7-2.8 1.8 0 2.9 1 4.3 1 1.4 0 2.3-1 4.3-1 1.5 0 3.2.8 4.3 2.3-3.8 2.1-3.2 7.6.4 9.4z"/></svg>',x:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-4.9-7-5.6 7H3.3l7.3-8.4L2.8 2h6.4l4.4 6.4L18.9 2zm-1.1 17.9h1.7L8.3 4H6.5l11.3 15.9z"/></svg>',twitter:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-4.9-7-5.6 7H3.3l7.3-8.4L2.8 2h6.4l4.4 6.4L18.9 2zm-1.1 17.9h1.7L8.3 4H6.5l11.3 15.9z"/></svg>',threads:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.2 2C6.8 2 3 5.8 3 12s3.8 10 9.3 10c4.7 0 8.2-2.7 8.2-6.5 0-2.5-1.4-4.2-3.8-5 .3-3.2-1.6-5.4-4.8-5.4-2.8 0-4.7 1.5-5.3 4h2.2c.4-1.3 1.5-2 3.1-2 1.8 0 2.8 1 2.9 2.8-.8-.1-1.6-.2-2.6-.2-3.3 0-5.4 1.5-5.4 4 0 2.2 1.8 3.8 4.4 3.8 2.8 0 4.7-1.6 5.3-4.3 1.2.5 1.9 1.3 1.9 2.5 0 2.5-2.4 4.2-6.1 4.2-4.4 0-7.1-3-7.1-7.9s2.7-7.9 7-7.9c3.4 0 5.7 1.7 6.4 4.7h2.2C20.1 4.5 16.9 2 12.2 2zm-.8 13.5c-1.4 0-2.3-.7-2.3-1.8 0-1.3 1.2-2 3.3-2 .9 0 1.8.1 2.6.3-.3 2.2-1.6 3.5-3.6 3.5z"/></svg>',bluesky:n,linkedin:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5A2.5 2.5 0 110 3.5a2.5 2.5 0 014.98 0zM.5 8h4.9v16H.5V8zm7.8 0H13v2.2h.1c.7-1.3 2.4-2.7 4.9-2.7 5.2 0 6.2 3.4 6.2 7.9V24h-4.9v-7.6c0-1.8 0-4.1-2.5-4.1s-2.9 2-2.9 4v7.7H8.3V8z"/></svg>',snapchat:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2c3.1 0 5 2.2 5 5.7v2.1c.4.2.9.3 1.4.3.7 0 1.1.4 1.1.9 0 .7-.8 1.1-1.8 1.5.4 1.2 1.4 2.2 2.9 2.8.5.2.7.6.6 1-.1.5-.6.8-1.5.9-.4 0-.6.2-.8.5-.3.5-.8.7-1.5.5-.8-.2-1.4-.3-2 .1-.8.6-1.7 1.7-3.4 1.7s-2.6-1.1-3.4-1.7c-.6-.4-1.2-.3-2-.1-.7.2-1.2 0-1.5-.5-.2-.3-.4-.5-.8-.5-.9-.1-1.4-.4-1.5-.9-.1-.4.1-.8.6-1 1.5-.6 2.5-1.6 2.9-2.8-1-.4-1.8-.8-1.8-1.5 0-.5.4-.9 1.1-.9.5 0 1-.1 1.4-.3V7.7C7 4.2 8.9 2 12 2z"/></svg>',pinterest:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.1 2C6.6 2 3 5.7 3 10.2c0 2.1 1.1 4.6 2.8 5.4.3.1.5.1.6-.2l.5-2c.1-.3 0-.4-.2-.7-.6-.7-.9-1.5-.9-2.6 0-3.1 2.4-6 6.1-6 3.3 0 5.2 2 5.2 4.8 0 3.6-1.6 6.6-4 6.6-1.3 0-2.2-1.1-1.9-2.4.4-1.6 1.2-3.3 1.2-4.4 0-1-.6-1.9-1.7-1.9-1.3 0-2.4 1.4-2.4 3.3 0 1.2.4 2 .4 2s-1.4 5.9-1.7 6.9c-.5 2.1-.1 4.6 0 4.8.1.1.2.1.3 0 .1-.2 1.8-2.2 2.3-4.2.2-.6.9-3.4.9-3.4.5.9 1.8 1.6 3.2 1.6 4.2 0 7.1-3.9 7.1-9.1C20.8 5 17.4 2 12.1 2z"/></svg>',twitch:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4 2h17v12l-5 5h-4l-3 3H6v-3H2V6l2-4zm2 3v11h4v3l3-3h4l2-2V5H6zm5 3h2v5h-2V8zm5 0h2v5h-2V8z"/></svg>',discord:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19.5 5.2A16 16 0 0015.6 4l-.2.4a14.8 14.8 0 013.4 1.7 12.8 12.8 0 00-10.8 0 14.8 14.8 0 013.4-1.7L11.2 4a16 16 0 00-3.9 1.2C4.8 8.9 4.1 12.5 4.4 16c1.6 1.2 3.1 1.9 4.6 2.3l.9-1.5c-.5-.2-1-.4-1.5-.7l.4-.3a11.5 11.5 0 006.8 0l.4.3c-.5.3-1 .5-1.5.7l.9 1.5c1.5-.4 3-1.1 4.6-2.3.5-4.1-.8-7.6-2.5-10.8zM9.5 14.1c-.9 0-1.6-.8-1.6-1.8s.7-1.8 1.6-1.8 1.6.8 1.6 1.8-.7 1.8-1.6 1.8zm5 0c-.9 0-1.6-.8-1.6-1.8s.7-1.8 1.6-1.8 1.6.8 1.6 1.8-.7 1.8-1.6 1.8z"/></svg>',reddit:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22 12a2.4 2.4 0 00-4.1-1.7 11.6 11.6 0 00-5.1-1.4l.9-4.1 2.9.6a2 2 0 104-.4 2 2 0 00-3.5-1.2l-3.7-.8a.8.8 0 00-.9.6l-1.1 5.2a11.8 11.8 0 00-5.3 1.4A2.4 2.4 0 102.5 13c0 1 .6 1.8 1.4 2.2 0 .2-.1.4-.1.6 0 3.8 3.7 6.8 8.2 6.8s8.2-3 8.2-6.8c0-.2 0-.4-.1-.6A2.4 2.4 0 0022 12zM8.5 14.6a1.4 1.4 0 111.4-1.4 1.4 1.4 0 01-1.4 1.4zm6.9 3.8c-1 .8-2.1 1.1-3.4 1.1s-2.4-.4-3.4-1.1a.7.7 0 11.9-1.1c.7.5 1.5.8 2.5.8s1.8-.3 2.5-.8a.7.7 0 11.9 1.1zm.1-3.8a1.4 1.4 0 111.4-1.4 1.4 1.4 0 01-1.4 1.4z"/></svg>',patreon:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4 3h4v18H4V3zm11 0a6 6 0 110 12 6 6 0 010-12z"/></svg>',venmo:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.5 4.5c.4 6.6-5.6 15.2-10.1 15.2H6.2L4.5 6.2l3.7-.4 1 9.6c1.8-3 3.2-6.8 3-9.5l3.8-.8c.3 2.1-.1 4.2-.9 6.1 1.3-2.1 2-4.5 1.8-6.8h3.6z"/></svg>',cashapp:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.2 2l-.5 2.1c2 .2 3.5.9 4.7 1.9l-1.8 2.5c-1.1-.8-2.3-1.3-3.7-1.3-1.3 0-2.1.5-2.1 1.3 0 .9.8 1.2 2.9 2 3 .9 4.7 2.1 4.7 5 0 2.6-1.7 4.4-4.5 5l-.5 2.5H9.9l.5-2.4a8.6 8.6 0 01-5.1-2.3l2-2.5c1.3 1.1 2.8 1.8 4.5 1.8 1.5 0 2.4-.6 2.4-1.6 0-.9-.7-1.3-2.8-1.9-3.2-.9-4.8-2.2-4.8-4.8 0-2.5 1.7-4.3 4.4-4.9l.5-2.4h1.7z"/></svg>',email:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3 5h18a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V6a1 1 0 011-1zm9 8.2L4.8 7H4v.7l8 6.9 8-6.9V7h-.8L12 13.2z"/></svg>',website:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm6.9 9h-3.2a15.7 15.7 0 00-1.1-5 8.1 8.1 0 014.3 5zM12 4.1c.7 1 1.4 3.4 1.6 6.9h-3.2c.2-3.5.9-5.9 1.6-6.9zM4.1 13h3.2c.1 1.8.5 3.5 1.1 5a8.1 8.1 0 01-4.3-5zm3.2-2H4.1a8.1 8.1 0 014.3-5 15.7 15.7 0 00-1.1 5zM12 19.9c-.7-1-1.4-3.4-1.6-6.9h3.2c-.2 3.5-.9 5.9-1.6 6.9zm3.6-1.9c.6-1.5 1-3.2 1.1-5h3.2a8.1 8.1 0 01-4.3 5z"/></svg>',custom:n};return a[r]||a.custom}function $(e={}){if(!f(e.text))return"";const t=e.borderWidth||"0px",r=e.borderColor||"transparent",n=g({background:e.backgroundColor||"transparent",color:e.textColor||"inherit",fontFamily:e.fontFamily||"inherit",fontSize:e.fontSize||"inherit",fontWeight:e.fontWeight||"inherit",border:`${t} solid ${r}`,boxShadow:e.boxShadow||"none",textTransform:e.textTransform||"uppercase",borderRadius:e.radius||"0px",padding:e.padding||"14px 24px",textDecoration:"none",display:"inline-flex",alignItems:"center",justifyContent:"center",cursor:"pointer"});if(e.buttonType==="dropdown"){const a=g({background:e.dropdownBackgroundColor||"rgba(0,0,0,.96)",borderColor:e.dropdownBorderColor||"rgba(57,255,20,.55)",boxShadow:e.dropdownBoxShadow||"0 0 24px rgba(57,255,20,.35)",borderRadius:e.dropdownRadius||"16px",padding:e.dropdownPadding||"10px",minWidth:e.dropdownMinWidth||"190px"}),i=(e.dropdownLinks||[]).filter(s=>f(s.text)).map(s=>{const d=g({background:s.backgroundColor||"transparent",color:s.textColor||"#ffffff",fontFamily:s.fontFamily||"inherit",fontSize:s.fontSize||"14px",borderColor:s.borderColor||"transparent",boxShadow:s.boxShadow||"none",textTransform:s.textTransform||"uppercase",borderRadius:s.radius||"10px",padding:s.padding||"10px 12px"});return`<a href="${c(s.url||"#")}" target="_blank" rel="noopener noreferrer" style="${d}">${m(s.text)}</a>`}).join("");return`<div class="puck-dropdown"><button class="puck-btn puck-dropdown-trigger" type="button" style="${n}">${m(e.text)}</button><div class="puck-dropdown-menu" style="${a}">${i}</div></div>`}return`<a class="puck-btn" href="${c(e.url||"#")}" style="${n}">${m(e.text)}</a>`}function Je(){return`
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

[data-page="gallery"],
body[data-page="gallery"] #editable-page-root{
  background-size:100% 100vh!important;
  background-repeat:no-repeat!important;
  background-color:#030000!important;
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

#editable-page-root .puck-section:not(.puck-site-header):not(.gr-exit-popup-wrap),
#editable-page-root .puck-section:not(.puck-site-header):not(.gr-exit-popup-wrap)::before,
#editable-page-root .puck-section:not(.puck-site-header):not(.gr-exit-popup-wrap)::after{
  border-top:0!important;
  border-bottom:0!important;
  outline:0!important;
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
  height:var(--gallery-height,920px);
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
`}function Ke(e){return B(e.fontUrl)}function Qe(e){const t=(e.buttons||[]).map($).join(""),r=(e.leftButtons||[]).map($).join("");return`<header class="puck-site-header ${e.headerPosition==="full"?"is-full-width":""}" style="${g({background:e.backgroundColor||"rgba(0,0,0,.72)",borderBottom:e.lineColor?`1px solid ${e.lineColor}`:"none",boxShadow:e.lineShadow||"none",width:e.width||"100%",maxWidth:e.maxWidth||"none",margin:e.margin||"0",padding:e.padding||"22px 40px"})}">
    <div class="puck-header-left">
      ${r}
      ${e.logoUrl&&e.logoPlacement!=="right"?`<a class="puck-header-logo-link logo-left" href="index.html" style="${g({"--logo-size":e.logoSize||"45px",background:e.logoBackgroundColor||"transparent",border:`${e.logoBorderWidth||"0px"} solid ${e.logoBorderColor||"transparent"}`,borderRadius:e.logoRadius||"999px",padding:e.logoPadding||"0px",boxShadow:e.logoBoxShadow||"none","--logo-image-shadow":e.logoImageShadow||"none"})}"><img class="puck-header-logo" src="${c(e.logoUrl)}" alt="${c(e.logoAlt||"Logo")}"></a>`:""}
      ${e.showBack!=="hide"?`<a class="puck-header-back" href="${c(e.backUrl||"index.html")}">${m(e.backText||"Back")}</a>`:""}
    </div>
    <nav class="puck-header-nav nav-${c(e.navPlacement||"right")}">${t}</nav>
    <div class="puck-header-right">
      ${e.logoUrl&&e.logoPlacement==="right"?`<a class="puck-header-logo-link logo-right" href="index.html" style="${g({"--logo-size":e.logoSize||"45px",background:e.logoBackgroundColor||"transparent",border:`${e.logoBorderWidth||"0px"} solid ${e.logoBorderColor||"transparent"}`,borderRadius:e.logoRadius||"999px",padding:e.logoPadding||"0px",boxShadow:e.logoBoxShadow||"none","--logo-image-shadow":e.logoImageShadow||"none"})}"><img class="puck-header-logo" src="${c(e.logoUrl)}" alt="${c(e.logoAlt||"Logo")}"></a>`:""}
    </div>
  </header>`}function Ze(e){const t=e.items||[],r=[...t,...t].map(n=>`<span class="song-name" style="${g({color:e.textColor||"var(--cream)",textShadow:e.textShadow||"none",borderColor:e.buttonBorderColor||"rgba(212, 162, 76, 0.25)"})}">${m(n.text)}</span>`).join("");return`<section class="songs-section puck-song-scroll ${e.stretchMode==="full"?"is-full-width":""}" aria-label="Songs We Play" style="${g({background:e.backgroundColor||"linear-gradient(90deg, var(--blue-deep) 0%, var(--charcoal-light) 50%, var(--blue-deep) 100%)",borderBottom:e.lineColor?`1px solid ${e.lineColor}`:"none",width:e.width||"100%",maxWidth:e.maxWidth||"none",margin:e.margin||"0"})}"><div class="songs-scroll-container"><div class="songs-scroll puck-song-track">${r}</div></div></section>`}function et(e){const t=e.theme,r=Array.from({length:8}).map(()=>"<span></span>").join(""),n=(e.buttons||[]).map($).join(""),a=f(e.noThanksText)?`<button class="puck-btn gr-exit-popup-no-thanks" type="button" style="${g({background:e.noThanksBackgroundColor||"transparent",color:e.noThanksTextColor||"#ffffff",border:`1px solid ${e.noThanksBorderColor||"rgba(255,255,255,.45)"}`,borderRadius:"999px",padding:"16px 34px",fontFamily:"Oswald, sans-serif",fontSize:"16px",fontWeight:"700",textTransform:"uppercase",cursor:"pointer"})}">${m(e.noThanksText)}</button>`:"",i=`gr-exit-popup-${Math.random().toString(36).slice(2)}`;return`${B(e.customFontUrl)}
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
    data-trigger-distance="${Number(e.exitTriggerDistance||120)}"
    style="${g({background:e.backgroundColor||"transparent",padding:`${e.paddingY||70}px ${e.paddingX||24}px`})}"
  >
    <div class="gr-exit-popup-backdrop"></div>

    <div
      class="gr-welcome-card gr-exit-popup-card gr-theme-${c(t||"toxic")} gr-anim-${c(e.animationStyle||"pop")}"
      style="${g({"--gr-bg":e.cardBackground||"rgba(0,0,0,.92)","--gr-border":e.borderColor||"#bb00ff","--gr-glow":e.glowColor||"#00ff04","--gr-radius":e.radius||"28px","--gr-width":e.maxWidth||"920px","--gr-align":e.align||"center","--gr-title":e.titleColor||"#00ff04","--gr-title-font":e.titleFont||"Creepster, cursive","--gr-title-size":e.titleSize||"clamp(44px, 8vw, 92px)","--gr-title-shadow":e.titleShadow||"0 0 18px #00ff04","--gr-body":e.bodyColor||"#ffffff","--gr-body-font":e.bodyFont||"Special Elite, cursive","--gr-body-size":e.bodySize||"20px"})}"
    >
      <button class="gr-exit-popup-close" type="button">×</button>

      ${e.theme==="particles"||e.animationStyle==="particles"?`<div class="gr-welcome-particles" aria-hidden="true">${r}</div>`:""}

      <div class="gr-welcome-content">
        ${f(e.eyebrow)?`<p class="gr-welcome-eyebrow">${m(e.eyebrow)}</p>`:""}

        ${f(e.title)?`<h2 class="gr-welcome-title">${m(e.title)}</h2>`:""}

        ${f(e.body)?`<p class="gr-welcome-body">${N(e.body)}</p>`:""}

        ${n||a?`<div class="puck-buttons">${n}${a}</div>`:""}
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

      const triggerDistance = ${Number(e.exitTriggerDistance||120)};

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
  <\/script>`}function oe(e){const t=g({background:e.backgroundColor||"transparent",color:e.textColor||"inherit",padding:`${e.paddingY||70}px ${e.paddingX||24}px`}),r=g({width:e.imageWidth||"320px","--mobile-image-width":e.mobileImageWidth||e.imageWidth||"320px",borderRadius:e.imageRadius||"8px",boxShadow:e.imageShadow||"none"}),n=f(e.title)?`<h1 class="band-name puck-title" style="${g(z(e,"title"))}">${m(e.title)}</h1>`:"",a=f(e.subtitle)?`<p class="tagline puck-subtitle" style="${g(z(e,"subtitle"))}">${m(e.subtitle)}</p>`:"",i=f(e.body)?`<p class="description puck-body" style="${g(z(e,"body"))}">${N(e.body)}</p>`:"",s=(e.buttons||[]).map($).join(""),d=n||a||i||s?`<div class="puck-text">${n}${a}${i}${s?`<div class="puck-buttons">${s}</div>`:""}</div>`:"",l=e.imageUrl?`<img class="puck-image puck-mobile-sized-image" src="${c(e.imageUrl)}" alt="${c(e.imageAlt||e.title||"Image")}" style="${r}">`:"";return`${B(e.customFontUrl)}<section class="puck-section" style="${t}"><div class="puck-inner puck-flex layout-${c(e.layout||"text-left")}" style="--gap:${Number(e.gap||50)}px;--max-width:${c(e.maxWidth||"1100px")}">${d}${l}</div></section>`}function tt(e){const t=e.align||"center",r=g({background:e.backgroundColor||"transparent",color:e.textColor||"inherit",padding:`${e.paddingY||50}px ${e.paddingX||24}px`,textAlign:t}),n=f(e.eyebrow)?`<p class="teaser" style="${g(z(e,"eyebrow"))}">${m(e.eyebrow)}</p>`:"",a=f(e.title)?`<h2 class="puck-title" style="${g(z(e,"title"))}">${m(e.title)}</h2>`:"",i=f(e.body)?`<p class="puck-body" style="${g(z(e,"body"))}">${N(e.body)}</p>`:"",s=(e.buttons||[]).map($).join("");return`${B(e.customFontUrl)}<section class="puck-section" style="${r}"><div class="puck-inner puck-text" style="max-width:${c(e.maxWidth||"850px")}">${n}${a}${i}${s?`<div class="puck-buttons">${s}</div>`:""}</div></section>`}function ae(e){const t=g({background:e.backgroundColor||"transparent",padding:`${e.paddingY||40}px ${e.paddingX||24}px`,textAlign:e.align||"center"}),r=g({width:e.width||"900px","--mobile-image-width":e.mobileWidth||e.width||"900px",borderRadius:e.radius||"8px",boxShadow:e.shadow||"none"}),n=f(e.title)?`<h2 class="puck-title" style="${g(z(e,"title"))}">${m(e.title)}</h2>`:"",a=e.imageUrl?`<img class="puck-image puck-mobile-sized-image" src="${c(e.imageUrl)}" alt="${c(e.imageAlt||e.title||"Image")}" style="${r}">`:"";return`${B(e.customFontUrl)}<section class="puck-section" style="${t}"><div class="puck-inner" style="max-width:${c(e.maxWidth||"1100px")}">${n}${a}</div></section>`}function rt(e){const t=g({background:e.backgroundColor||"transparent",color:e.textColor||"inherit",padding:`${e.paddingY||50}px ${e.paddingX||24}px`,textAlign:"center"}),r=(e.buttons||[]).map($).join("");return r?`${B(e.customFontUrl)}<section class="puck-section" style="${t}"><div class="puck-inner"><div class="puck-buttons">${r}</div></div></section>`:""}function ne(e){const t=g({background:e.backgroundColor||"transparent",color:e.textColor||"inherit",padding:`${e.paddingY||60}px ${e.paddingX||24}px`,textAlign:"center"}),r=e.links||[],n=f(e.title)?`<p class="teaser" style="${g({color:e.titleColor||"inherit",fontFamily:e.titleFont||"inherit",fontSize:e.titleSize||"inherit",fontWeight:e.titleWeight||"inherit"})}">${m(e.title)}</p>`:"",a=r.filter(i=>f(i.url)).map(i=>`<a class="social-link" href="${c(i.url)}" target="_blank" rel="noopener noreferrer" title="${c(i.label||i.platform)}" style="${g({background:i.backgroundColor||"rgba(255,255,255,.03)",color:i.iconColor||"inherit",border:`${i.borderWidth||"1px"} solid ${i.borderColor||"rgba(255,255,255,.18)"}`,boxShadow:i.boxShadow||"none",borderRadius:i.radius||"999px",width:i.size||"44px",height:i.size||"44px",minWidth:i.size||"44px",minHeight:i.size||"44px",padding:i.padding||"0px","--social-svg-size":i.svgSize||"22px"})}">${qe(i.platform,i.label)}</a>`).join("");return!n&&!a?"":`<footer class="puck-section social-section is-full-width" style="${t}"><div class="puck-inner">${n}${a?`<nav class="puck-social-links social-links">${a}</nav>`:""}</div></footer>`}function ot(e){e=Xe(e);const r=(e.layoutMode||"grid")==="freeform",n=g({background:e.backgroundColor||"transparent",color:e.textColor||"inherit",padding:`${e.paddingY||40}px ${e.paddingX||24}px`,textAlign:"center"}),a=f(e.title)?`<h2 class="puck-title" style="${g({color:e.titleColor||"inherit",fontFamily:e.titleFont||"inherit",fontSize:e.titleSize||"2.5rem"})}">${m(e.title)}</h2>`:"",i=(e.images||[]).filter(l=>f(l.imageUrl)).map((l,b)=>{const h=`gallery-modal-${b}`,x=Number.isFinite(Number(l.x))?Number(l.x):0,v=Number.isFinite(Number(l.y))?Number(l.y):0,D=Number.isFinite(Number(l.rotation))?Number(l.rotation):0,_=Number.isFinite(Number(l.zIndex))?Number(l.zIndex):b+1,we=Number.isFinite(Number(l.opacity))?Math.min(100,Math.max(0,Number(l.opacity)))/100:1,Y=l.mediaType==="video"||/\.(mp4|webm|mov|m4v|ogv)(\?|#|$)/i.test(String(l.imageUrl||"")),X=l.imageAlt||(Y?"Gallery video":"Gallery image"),ve=Y?`<video src="${c(l.imageUrl)}" muted playsinline preload="metadata"></video>`:`<img src="${c(l.imageUrl)}" alt="${c(X)}">`,ke=Y?`<video src="${c(l.imageUrl)}" controls playsinline preload="metadata"></video>`:`<img src="${c(l.imageUrl)}" alt="${c(X)}">`;return`
        <figure class="puck-gallery-item" style="${r?g({"--gallery-x":`${Math.min(100,Math.max(0,x))}%`,"--gallery-y":`${Math.min(100,Math.max(0,v))}%`,"--gallery-width":l.width||"280px","--gallery-rotation":`${D}deg`,"--gallery-layer":_,"--gallery-opacity":we,"--gallery-fit":l.objectFit||"cover",borderRadius:l.radius||"16px",boxShadow:l.shadow||"0 0 34px rgba(57,255,20,.35)"}):""}">
          <a href="#${h}" class="puck-gallery-open" aria-label="Open ${c(X)}">
            ${ve}
          </a>
          ${f(l.caption)?`<figcaption>${m(l.caption)}</figcaption>`:""}
        </figure>

        <div id="${h}" class="puck-gallery-modal">
          <a href="#" class="puck-gallery-modal-backdrop" aria-label="Close gallery image"></a>
          <div class="puck-gallery-modal-content">
            <a href="#" class="puck-gallery-close" aria-label="Close gallery image">×</a>
            ${ke}
            ${f(l.caption)?`<p>${m(l.caption)}</p>`:""}
          </div>
        </div>
      `}).join(""),s=r?"puck-gallery-freeform":"puck-gallery-grid",d=r?`--gallery-height:${c(e.canvasHeight||"920px")}`:`--cols:${Number(e.columns||3)};--gap:${Number(e.gap||18)}px`;return`<section class="puck-section" style="${n}"><div class="puck-inner">${a}<div class="${s}" style="${d}">${i}</div></div></section>`}function at(e){const t=g({background:e.backgroundColor||"transparent",color:e.textColor||"#ffffff",padding:`${e.paddingY||70}px ${e.paddingX||24}px`}),r=g({"--gr-graffiti-accent":e.accentColor||"#00ff04","--gr-graffiti-panel":e.panelBackground||"rgba(0,0,0,.72)","--gr-graffiti-border":e.borderColor||"#bb00ff"});return`<section class="puck-section gr-graffiti-wall" style="${t}">
    <div class="puck-inner gr-graffiti-inner" style="${r}">
      <div class="gr-graffiti-copy">
        ${f(e.eyebrow)?`<p class="teaser">${m(e.eyebrow)}</p>`:""}
        ${f(e.title)?`<h2 class="puck-title">${m(e.title)}</h2>`:""}
        ${f(e.body)?`<p>${N(e.body)}</p>`:""}
      </div>

      <div class="gr-graffiti-layout">
        <form class="gr-graffiti-form">
          <label>${m(e.nameLabel||"Your name")}<input type="text" name="fan_name" maxlength="120"></label>
          <label>${m(e.messageLabel||"Your message")}<textarea name="message" rows="5" maxlength="1200" required></textarea></label>
          <label>${m(e.photoLabel||"Photo with the band")}<input type="file" name="fan_photo" accept="image/*"></label>
          <label>${m(e.paintLabel||"Paint")}<canvas class="gr-graffiti-canvas" width="520" height="260"></canvas></label>
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
          <button type="submit">${m(e.submitText||"Send for Approval")}</button>
          <p class="gr-graffiti-status" data-success-message="${c(e.successMessage||"Submitted. It will appear after admin approval.")}" aria-live="polite"></p>
        </form>

        <div class="gr-graffiti-posts" data-graffiti-posts>
          <p>Loading approved posts...</p>
        </div>
      </div>
    </div>
  </section>`}function nt(e){return`<div class="puck-spacer" style="height:${Number(e.height||40)}px;background:${c(e.backgroundColor||"transparent")}"></div>`}function it(e){const t=g({background:e.backgroundColor||"transparent",color:e.textColor||"inherit",padding:`${e.paddingY||50}px ${e.paddingX||24}px`}),n=(e.items||[]).map(a=>{const i=a.imageUrl?`<img class="puck-image" src="${c(a.imageUrl)}" alt="${c(a.title||"Column image")}" style="width:100%;border-radius:${c(e.imageRadius||"8px")};margin-bottom:16px;">`:"",s=f(a.title)?`<h3 style="${g({color:a.titleColor||"inherit",fontFamily:a.titleFont||"inherit",fontSize:a.titleSize||"inherit",fontWeight:a.titleWeight||"inherit"})}">${m(a.title)}</h3>`:"",d=f(a.body)?`<p style="${g({color:a.bodyColor||"inherit",fontFamily:a.bodyFont||"inherit",fontSize:a.bodySize||"inherit",fontWeight:a.bodyWeight||"inherit"})}">${N(a.body)}</p>`:"",l=$({text:a.buttonText,url:a.buttonUrl,backgroundColor:a.buttonBackgroundColor,textColor:a.buttonTextColor,fontFamily:a.buttonFont,fontSize:a.buttonFontSize,borderWidth:a.buttonBorderWidth,borderColor:a.buttonBorderColor,radius:a.buttonRadius,boxShadow:a.buttonBoxShadow,textTransform:a.buttonTextTransform});return i||s||d||l?`<div class="puck-card">${i}${s}${d}${l}</div>`:""}).join("");return n?`${B(e.customFontUrl)}<section class="puck-section" style="${t}"><div class="puck-inner"><div class="puck-columns" style="--cols:${Number(e.columns||2)};--gap:${Number(e.gap||24)}px">${n}</div></div></section>`:""}function lt(e){const t=g({background:e.backgroundColor||"#000000",padding:`${e.paddingY||30}px ${e.paddingX||24}px ${e.paddingBottom||80}px`}),r=e.formAction||"https://docs.google.com/forms/d/e/1FAIpQLSc75dAf3CXeOinDkL-URjVql6_o3E2PcXKPhB3j-mFnl0JBMw/formResponse",n=e.nameEntry||"entry.821607845",a=e.emailEntry||"entry.216699627",i=e.phoneEntry||"entry.1566132030",s=e.zipEntry||"entry.848273318",d=e.successMessage||"Great, you are signed up and we will keep you updated.";return`<section class="puck-section graverobber-contact-form-section graverobber-signup-form-section" style="${t}">
    <div class="puck-inner graverobber-contact-inner">
      <form class="graverobber-custom-contact-form" action="${c(r)}" method="POST" target="graverobber-signup-hidden-frame" onsubmit="setTimeout(() => { this.reset(); this.querySelector('.graverobber-contact-success').textContent='${c(d)}'; }, 350);">
        <label>
          ${m(e.nameLabel||"What are you called?")}
          <input type="text" name="${c(n)}" required>
        </label>

        <label>
          ${m(e.emailLabel||"What is your email?")}
          <input type="email" name="${c(a)}" required>
        </label>

        <label>
          ${m(e.phoneLabel||"What is your phone number?")}
          <input type="tel" name="${c(i)}">
        </label>

        <label>
          ${m(e.zipLabel||"What is your zip code?")}
          <input type="text" name="${c(s)}">
        </label>

        <button type="submit">${m(e.buttonText||"Join the Army of the Dead")}</button>
        <p class="graverobber-contact-success" aria-live="polite"></p>
      </form>

      <iframe class="graverobber-hidden-submit-frame" name="graverobber-signup-hidden-frame" title="Hidden signup submit frame"></iframe>
    </div>
  </section>`}function st(e){const t=g({background:e.backgroundColor||"#000000",padding:`${e.paddingY||30}px ${e.paddingX||24}px ${e.paddingBottom||80}px`}),r=e.formAction||"https://docs.google.com/forms/d/e/1FAIpQLSfvFy-I4z36zqLz4y4boVhM4eTL7KEb5Ip1It7OZyFfxlRgMw/formResponse",n=e.nameEntry||"entry.111991046",a=e.emailEntry||"entry.709491702",i=e.messageEntry||"entry.905150677",s=e.successMessage||"Great, your message was sent and we will get back to you shortly.";return`<section class="puck-section graverobber-contact-form-section" style="${t}">
    <div class="puck-inner graverobber-contact-inner">
      <form class="graverobber-custom-contact-form" action="${c(r)}" method="POST" target="graverobber-contact-hidden-frame" onsubmit="setTimeout(() => { this.reset(); this.querySelector('.graverobber-contact-success').textContent='${c(s)}'; }, 350);">
        <label>
          ${m(e.nameLabel||"What are you called?")}
          <input type="text" name="${c(n)}" required>
        </label>

        <label>
          ${m(e.emailLabel||"What is your email?")}
          <input type="email" name="${c(a)}" required>
        </label>

        <label>
          ${m(e.messageLabel||"What do you want?")}
          <textarea name="${c(i)}" rows="${Number(e.messageRows||7)}" required></textarea>
        </label>

        <button type="submit">${m(e.buttonText||"Send Message")}</button>
        <p class="graverobber-contact-success" aria-live="polite"></p>
      </form>

      <iframe class="graverobber-hidden-submit-frame" name="graverobber-contact-hidden-frame" title="Hidden contact submit frame"></iframe>
    </div>
  </section>`}function dt(e){return`<section class="puck-section" style="${g({padding:`${e.paddingY||30}px ${e.paddingX||24}px`,background:e.backgroundColor||"transparent"})}"><div class="puck-inner">${e.html||""}</div></section>`}const pt={GalleryGrid:ot,WelcomeHorrorMessage:et,GraveRobberHero:oe,GraveRobberLogo:ae,GraveRobberSocial:ne,HeaderNav:Qe,SongScroll:Ze,FontLoader:Ke,Hero:oe,TextBlock:tt,ImageBlock:ae,ButtonRow:rt,SocialIcons:ne,Spacer:nt,Columns:it,GraffitiWall:at,SignupForm:lt,ContactForm:st,Embed:dt};function Gt(e){return((e==null?void 0:e.content)||[]).map(r=>{const n=pt[r.type];return n?n(r.props||{}):""}).join(`
`)}const ct=`<!DOCTYPE html>\r
<html lang="en">\r
<head>\r
  <meta charset="UTF-8">\r
  <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
  <script>\r
    if (location.protocol === "http:" && !/^(localhost|127\\.0\\.0\\.1)$/.test(location.hostname)) {\r
      location.replace(\`https://\${location.host}\${location.pathname}\${location.search}\${location.hash}\`);\r
    }\r
  <\/script>\r
  <title>Privacy Policy | Grave Robber</title>\r
  <meta name="description" content="Privacy Policy for the Grave Robber website and mobile app.">\r
  <link rel="canonical" href="https://graverobberpunk.com/privacy.html">\r
  <meta property="og:title" content="Privacy Policy | Grave Robber">\r
  <meta property="og:site_name" content="Grave Robber">\r
  <meta property="og:type" content="website">\r
  <meta property="og:url" content="https://graverobberpunk.com/privacy.html">\r
  <meta property="og:description" content="Privacy Policy for the Grave Robber website and mobile app.">\r
  <meta property="og:image" content="https://graverobberpunk.com/assets/grave-robber-skull.png">\r
  <meta property="og:image:secure_url" content="https://graverobberpunk.com/assets/grave-robber-skull.png">\r
  <meta property="og:image:type" content="image/png">\r
  <meta property="og:image:width" content="1024">\r
  <meta property="og:image:height" content="1024">\r
  <meta property="og:image:alt" content="Grave Robber skull logo">\r
  <meta name="twitter:card" content="summary_large_image">\r
  <meta name="twitter:title" content="Privacy Policy | Grave Robber">\r
  <meta name="twitter:description" content="Privacy Policy for the Grave Robber website and mobile app.">\r
  <meta name="twitter:image" content="https://graverobberpunk.com/assets/grave-robber-skull.png">\r
  <meta name="theme-color" content="#000000">\r
  <link rel="icon" type="image/png" href="/assets/grave-robber-skull.png">\r
  <link rel="apple-touch-icon" href="/assets/grave-robber-skull.png">\r
  <link rel="preconnect" href="https://fonts.googleapis.com">\r
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\r
  <link href="https://fonts.googleapis.com/css2?family=Creepster&family=Oswald:wght@400;500;700&family=Special+Elite&display=swap" rel="stylesheet">\r
  <style>\r
    :root {\r
      --green: #00ff04;\r
      --purple: #bb00ff;\r
      --black: #000000;\r
      --white: #ffffff;\r
    }\r
\r
    * {\r
      box-sizing: border-box;\r
    }\r
\r
    html,\r
    body {\r
      margin: 0;\r
      min-height: 100%;\r
      background:\r
        radial-gradient(circle at center 20%, rgba(0, 255, 4, .45), rgba(0, 42, 0, .2) 34%, transparent 58%),\r
        linear-gradient(180deg, #000, #030003 66%, #000);\r
      color: var(--white);\r
      font-family: "Special Elite", Georgia, serif;\r
    }\r
\r
    body {\r
      padding-bottom: 48px;\r
    }\r
\r
    a {\r
      color: var(--purple);\r
    }\r
\r
    .site-header {\r
      display: grid;\r
      grid-template-columns: minmax(210px, auto) 1fr auto;\r
      align-items: center;\r
      gap: 22px;\r
      padding: 22px 34px;\r
      background: #000;\r
      border-top: 4px solid var(--purple);\r
      border-bottom: 2px solid var(--purple);\r
      box-shadow: 0 0 24px var(--purple);\r
    }\r
\r
    .coffee-link,\r
    .nav-link {\r
      display: inline-flex;\r
      align-items: center;\r
      justify-content: center;\r
      gap: 8px;\r
      min-height: 42px;\r
      padding: 10px 18px;\r
      border: 1px solid var(--green);\r
      border-radius: 999px;\r
      background: #000;\r
      color: var(--purple);\r
      box-shadow: 0 0 24px var(--green);\r
      font-family: "Oswald", sans-serif;\r
      font-size: 14px;\r
      font-weight: 500;\r
      text-decoration: none;\r
      text-transform: uppercase;\r
    }\r
\r
    .main-nav {\r
      display: flex;\r
      justify-content: center;\r
      flex-wrap: wrap;\r
      gap: 14px;\r
    }\r
\r
    .header-logo {\r
      width: 56px;\r
      height: 56px;\r
      object-fit: contain;\r
    }\r
\r
    .policy-wrap {\r
      width: min(980px, calc(100% - 36px));\r
      margin: 70px auto 0;\r
      padding: 36px;\r
      border: 1px solid var(--purple);\r
      border-radius: 12px;\r
      background: rgba(0, 0, 0, .72);\r
      box-shadow: 0 0 36px rgba(0, 255, 4, .35);\r
    }\r
\r
    .eyebrow {\r
      margin: 0 0 12px;\r
      color: var(--green);\r
      font-family: "Oswald", sans-serif;\r
      font-size: 14px;\r
      font-weight: 700;\r
      letter-spacing: 0;\r
      text-transform: uppercase;\r
    }\r
\r
    h1,\r
    h2 {\r
      margin: 0;\r
      color: var(--white);\r
    }\r
\r
    h1 {\r
      font-family: "Creepster", cursive;\r
      font-size: clamp(3rem, 10vw, 5.5rem);\r
      font-weight: 400;\r
      line-height: .95;\r
    }\r
\r
    h2 {\r
      margin-top: 34px;\r
      color: var(--green);\r
      font-family: "Oswald", sans-serif;\r
      font-size: 1.35rem;\r
      text-transform: uppercase;\r
    }\r
\r
    p,\r
    li {\r
      color: #f4f4f4;\r
      font-size: 1rem;\r
      line-height: 1.7;\r
    }\r
\r
    ul {\r
      padding-left: 22px;\r
    }\r
\r
    .updated {\r
      margin: 18px 0 0;\r
      color: #d8d8d8;\r
      font-family: "Oswald", sans-serif;\r
    }\r
\r
    .policy-footer {\r
      margin-top: 40px;\r
      padding-top: 24px;\r
      border-top: 1px solid rgba(187, 0, 255, .55);\r
    }\r
\r
    @media (max-width: 760px) {\r
      .site-header {\r
        grid-template-columns: 1fr;\r
        justify-items: center;\r
        padding: 22px 18px;\r
      }\r
\r
      .policy-wrap {\r
        margin-top: 36px;\r
        padding: 24px 18px;\r
      }\r
\r
      .coffee-link,\r
      .nav-link {\r
        width: 100%;\r
        max-width: 320px;\r
      }\r
    }\r
  </style>\r
</head>\r
<body data-page="privacy">
  <div id="editable-page-root">
  <!-- PUCK_LEGAL_START -->
  <header class="site-header">
    <a\r
      class="coffee-link"\r
      href="https://www.paypal.com/donate/?business=graverobber.punk%40gmail.com&currency_code=USD"\r
      target="_blank"\r
      rel="noopener noreferrer"\r
    >\r
      <span aria-hidden="true">&#9749;</span>\r
      <span>Buy Grave Robber a Coffee</span>\r
    </a>\r
\r
    <nav class="main-nav" aria-label="Main navigation">\r
      <a class="nav-link" href="/">Home</a>\r
      <a class="nav-link" href="/shows.html">Shows</a>\r
      <a class="nav-link" href="/about.html">Bio</a>\r
      <a class="nav-link" href="/graffiti-wall.html">Graffiti Wall</a>\r
      <a class="nav-link" href="/contact.html">Contact</a>\r
      <a class="nav-link" href="/terms.html">Terms</a>\r
    </nav>\r
\r
    <img class="header-logo" src="/assets/grave-robber-skull.png" alt="Grave Robber skull logo">\r
  </header>\r
\r
  <main class="policy-wrap">\r
    <p class="eyebrow">Grave Robber website and app</p>\r
    <h1>Privacy Policy</h1>\r
    <p class="updated">Last updated: June 16, 2026</p>\r
\r
    <p>\r
      This Privacy Policy explains what information is collected when visitors use the Grave Robber website at\r
      graverobberpunk.com and the Grave Robber mobile app, how that information is used, and what choices visitors have.\r
    </p>\r
\r
    <h2>Information We Collect</h2>\r
    <p>We may collect the following information when visitors use the website or app:</p>\r
    <ul>\r
      <li>Daily visitor information, including IP address, browser or device user agent, first seen time, and last seen time.</li>\r
      <li>Contact or signup information submitted through forms, such as name, email address, phone number, zip code, and message content.</li>\r
      <li>Graffiti Wall submissions, including fan name, optional email address, message text, uploaded photo, and artwork created with the paint tool.</li>\r
      <li>Uploaded media files, such as photos, drawings, or other images submitted through public features or managed by site administrators.</li>\r
      <li>Basic technical information that may be received automatically by hosting, database, media hosting, form, payment, social media, and widget providers.</li>\r
    </ul>\r
\r
    <h2>How We Use Information</h2>\r
    <p>Information is used to:</p>\r
    <ul>\r
      <li>Count daily home page visitors.</li>\r
      <li>Respond to contact, booking, merch, press, signup, or general messages.</li>\r
      <li>Review, approve, hide, or delete Graffiti Wall posts before they appear publicly.</li>\r
      <li>Display approved fan posts, photos, and artwork on the Graffiti Wall.</li>\r
      <li>Operate, maintain, secure, and improve the website, app, admin panel, forms, uploads, and media features.</li>\r
    </ul>\r
\r
    <h2>Daily Visitor IP Address Storage</h2>\r
    <p>\r
      The website records IP addresses and user agents for the home page visitor counter. These records are grouped by day\r
      and are used to count unique daily visitors. Visitor IP records older than the current day are deleted by the system\r
      when the visitor counter runs, so this daily tracking is intended to reset each day.\r
    </p>\r
\r
    <h2>Public Graffiti Wall Posts</h2>\r
    <p>\r
      Graffiti Wall submissions are not posted publicly automatically. They are stored for admin review. If approved, the\r
      fan name, message, uploaded photo, artwork, and submission date may appear publicly on the website and in the app.\r
      Email addresses submitted with Graffiti Wall posts are used for administration and are not shown publicly by the\r
      public Graffiti Wall display.\r
    </p>\r
\r
    <h2>Contact, Signup, and Email Information</h2>\r
    <p>\r
      If visitors submit a contact form, signup form, or email message, the information provided may be stored and used to\r
      reply, manage band communication, provide updates, or handle booking and fan requests. This can include name, email\r
      address, phone number, zip code, and the contents of the message.\r
    </p>\r
\r
    <h2>Photos, Artwork, and Uploads</h2>\r
    <p>\r
      Photos, fan-submitted artwork, and other uploaded images may be stored with a media hosting provider and may remain\r
      stored until removed by an administrator. Visitors should only upload photos or artwork they have the right to submit\r
      and should not upload private information they do not want reviewed by the site administrator.\r
    </p>\r
\r
    <h2>Third-Party Services</h2>\r
    <p>\r
      The website and app may use third-party services to operate features, including hosting, database storage, media\r
      uploads, forms, show widgets, social media links, and payment links. These may include services such as Railway,\r
      Cloudinary, Google Forms, Bandsintown, PayPal, Facebook, Instagram, Spotify, TikTok, X, Threads, and YouTube. When\r
      visitors use or open those services, the third party may collect information under its own privacy policy.\r
    </p>\r
\r
    <h2>Sharing Information</h2>\r
    <p>\r
      We do not sell visitor personal information. Information may be shared with service providers that help operate the\r
      website, app, forms, uploads, payments, hosting, database, analytics-like visitor counting, and public display\r
      features. Information may also be disclosed if required by law or to protect the website, app, band, visitors, or\r
      others.\r
    </p>\r
\r
    <h2>Retention</h2>\r
    <p>\r
      Daily visitor IP records are intended to be deleted after the current day as described above. Contact messages,\r
      signup submissions, Graffiti Wall submissions, uploaded photos, artwork, and admin-managed content may be kept until\r
      they are no longer needed or until an administrator deletes them.\r
    </p>\r
\r
    <h2>Security</h2>\r
    <p>\r
      Reasonable steps are taken to protect stored information, but no website, app, database, upload service, or internet\r
      transmission can be guaranteed to be completely secure.\r
    </p>\r
\r
    <h2>Children</h2>\r
    <p>\r
      The website and app are intended for general band, music, and fan community use. They are not directed to children\r
      under 13. Children should not submit personal information without permission from a parent or guardian.\r
    </p>\r
\r
    <h2>Privacy Requests</h2>\r
    <p>\r
      Visitors may request deletion or correction of information they submitted by contacting Grave Robber at\r
      <a href="mailto:graverobber.punk@gmail.com">graverobber.punk@gmail.com</a>. Please include enough detail to identify\r
      the submission or message.\r
    </p>\r
\r
    <h2>Changes to This Policy</h2>\r
    <p>\r
      This Privacy Policy may be updated from time to time. Updates will be posted on this page with a new last updated\r
      date.\r
    </p>\r
\r
    <div class="policy-footer">\r
      <p>\r
        Legal pages:\r
        <a href="/terms.html">Terms and Conditions</a>\r
      </p>\r
      <p>\r
        Contact:\r
        <a href="mailto:graverobber.punk@gmail.com">graverobber.punk@gmail.com</a>\r
      </p>\r
    </div>\r
  </main>
  <!-- PUCK_LEGAL_END -->
  </div>
  <script src="api-config.js"><\/script>
  <script type="module" src="/src/public-page.js"><\/script>
</body>
</html>\r
`,gt=`<!DOCTYPE html>\r
<html lang="en">\r
<head>\r
  <meta charset="UTF-8">\r
  <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
  <script>\r
    if (location.protocol === "http:" && !/^(localhost|127\\.0\\.0\\.1)$/.test(location.hostname)) {\r
      location.replace(\`https://\${location.host}\${location.pathname}\${location.search}\${location.hash}\`);\r
    }\r
  <\/script>\r
  <title>Terms and Conditions | Grave Robber</title>\r
  <meta name="description" content="Terms and Conditions for graverobberpunk.com and the Grave Robber mobile app.">\r
  <link rel="canonical" href="https://graverobberpunk.com/terms.html">\r
  <meta property="og:title" content="Terms and Conditions | Grave Robber">\r
  <meta property="og:site_name" content="Grave Robber">\r
  <meta property="og:type" content="website">\r
  <meta property="og:url" content="https://graverobberpunk.com/terms.html">\r
  <meta property="og:description" content="Terms and Conditions for graverobberpunk.com and the Grave Robber mobile app.">\r
  <meta property="og:image" content="https://graverobberpunk.com/assets/grave-robber-skull.png">\r
  <meta property="og:image:secure_url" content="https://graverobberpunk.com/assets/grave-robber-skull.png">\r
  <meta property="og:image:type" content="image/png">\r
  <meta property="og:image:width" content="1024">\r
  <meta property="og:image:height" content="1024">\r
  <meta property="og:image:alt" content="Grave Robber skull logo">\r
  <meta name="twitter:card" content="summary_large_image">\r
  <meta name="twitter:title" content="Terms and Conditions | Grave Robber">\r
  <meta name="twitter:description" content="Terms and Conditions for graverobberpunk.com and the Grave Robber mobile app.">\r
  <meta name="twitter:image" content="https://graverobberpunk.com/assets/grave-robber-skull.png">\r
  <meta name="theme-color" content="#000000">\r
  <link rel="icon" type="image/png" href="/assets/grave-robber-skull.png">\r
  <link rel="apple-touch-icon" href="/assets/grave-robber-skull.png">\r
  <link rel="preconnect" href="https://fonts.googleapis.com">\r
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\r
  <link href="https://fonts.googleapis.com/css2?family=Creepster&family=Oswald:wght@400;500;700&family=Special+Elite&display=swap" rel="stylesheet">\r
  <style>\r
    :root {\r
      --green: #00ff04;\r
      --purple: #bb00ff;\r
      --black: #000000;\r
      --white: #ffffff;\r
    }\r
\r
    * {\r
      box-sizing: border-box;\r
    }\r
\r
    html,\r
    body {\r
      margin: 0;\r
      min-height: 100%;\r
      background:\r
        radial-gradient(circle at center 20%, rgba(0, 255, 4, .45), rgba(0, 42, 0, .2) 34%, transparent 58%),\r
        linear-gradient(180deg, #000, #030003 66%, #000);\r
      color: var(--white);\r
      font-family: "Special Elite", Georgia, serif;\r
    }\r
\r
    body {\r
      padding-bottom: 48px;\r
    }\r
\r
    a {\r
      color: var(--purple);\r
    }\r
\r
    .site-header {\r
      display: grid;\r
      grid-template-columns: minmax(210px, auto) 1fr auto;\r
      align-items: center;\r
      gap: 22px;\r
      padding: 22px 34px;\r
      background: #000;\r
      border-top: 4px solid var(--purple);\r
      border-bottom: 2px solid var(--purple);\r
      box-shadow: 0 0 24px var(--purple);\r
    }\r
\r
    .coffee-link,\r
    .nav-link {\r
      display: inline-flex;\r
      align-items: center;\r
      justify-content: center;\r
      gap: 8px;\r
      min-height: 42px;\r
      padding: 10px 18px;\r
      border: 1px solid var(--green);\r
      border-radius: 999px;\r
      background: #000;\r
      color: var(--purple);\r
      box-shadow: 0 0 24px var(--green);\r
      font-family: "Oswald", sans-serif;\r
      font-size: 14px;\r
      font-weight: 500;\r
      text-decoration: none;\r
      text-transform: uppercase;\r
    }\r
\r
    .main-nav {\r
      display: flex;\r
      justify-content: center;\r
      flex-wrap: wrap;\r
      gap: 14px;\r
    }\r
\r
    .header-logo {\r
      width: 56px;\r
      height: 56px;\r
      object-fit: contain;\r
    }\r
\r
    .policy-wrap {\r
      width: min(980px, calc(100% - 36px));\r
      margin: 70px auto 0;\r
      padding: 36px;\r
      border: 1px solid var(--purple);\r
      border-radius: 12px;\r
      background: rgba(0, 0, 0, .72);\r
      box-shadow: 0 0 36px rgba(0, 255, 4, .35);\r
    }\r
\r
    .eyebrow {\r
      margin: 0 0 12px;\r
      color: var(--green);\r
      font-family: "Oswald", sans-serif;\r
      font-size: 14px;\r
      font-weight: 700;\r
      letter-spacing: 0;\r
      text-transform: uppercase;\r
    }\r
\r
    h1,\r
    h2 {\r
      margin: 0;\r
      color: var(--white);\r
    }\r
\r
    h1 {\r
      font-family: "Creepster", cursive;\r
      font-size: clamp(3rem, 10vw, 5.5rem);\r
      font-weight: 400;\r
      line-height: .95;\r
    }\r
\r
    h2 {\r
      margin-top: 34px;\r
      color: var(--green);\r
      font-family: "Oswald", sans-serif;\r
      font-size: 1.35rem;\r
      text-transform: uppercase;\r
    }\r
\r
    p,\r
    li {\r
      color: #f4f4f4;\r
      font-size: 1rem;\r
      line-height: 1.7;\r
    }\r
\r
    ul {\r
      padding-left: 22px;\r
    }\r
\r
    .updated {\r
      margin: 18px 0 0;\r
      color: #d8d8d8;\r
      font-family: "Oswald", sans-serif;\r
    }\r
\r
    .policy-footer {\r
      margin-top: 40px;\r
      padding-top: 24px;\r
      border-top: 1px solid rgba(187, 0, 255, .55);\r
    }\r
\r
    @media (max-width: 760px) {\r
      .site-header {\r
        grid-template-columns: 1fr;\r
        justify-items: center;\r
        padding: 22px 18px;\r
      }\r
\r
      .policy-wrap {\r
        margin-top: 36px;\r
        padding: 24px 18px;\r
      }\r
\r
      .coffee-link,\r
      .nav-link {\r
        width: 100%;\r
        max-width: 320px;\r
      }\r
    }\r
  </style>\r
</head>\r
<body data-page="terms">
  <div id="editable-page-root">
  <!-- PUCK_LEGAL_START -->
  <header class="site-header">
    <a\r
      class="coffee-link"\r
      href="https://www.paypal.com/donate/?business=graverobber.punk%40gmail.com&currency_code=USD"\r
      target="_blank"\r
      rel="noopener noreferrer"\r
    >\r
      <span aria-hidden="true">&#9749;</span>\r
      <span>Buy Grave Robber a Coffee</span>\r
    </a>\r
\r
    <nav class="main-nav" aria-label="Main navigation">\r
      <a class="nav-link" href="/">Home</a>\r
      <a class="nav-link" href="/shows.html">Shows</a>\r
      <a class="nav-link" href="/about.html">Bio</a>\r
      <a class="nav-link" href="/graffiti-wall.html">Graffiti Wall</a>\r
      <a class="nav-link" href="/contact.html">Contact</a>\r
      <a class="nav-link" href="/privacy.html">Privacy</a>\r
    </nav>\r
\r
    <img class="header-logo" src="/assets/grave-robber-skull.png" alt="Grave Robber skull logo">\r
  </header>\r
\r
  <main class="policy-wrap">\r
    <p class="eyebrow">Grave Robber website and app</p>\r
    <h1>Terms and Conditions</h1>\r
    <p class="updated">Last updated: June 24, 2026</p>\r
\r
    <p>\r
      These Terms and Conditions apply to graverobberpunk.com and the Grave Robber mobile app, including pages, forms,\r
      fan features, media uploads, show information, social links, merch or donation links, and any other Grave Robber\r
      website or app feature that links to these Terms. By using the website or app, visitors agree to these Terms.\r
    </p>\r
\r
    <h2>Use of the Website and App</h2>\r
    <p>\r
      The website and app are provided for Grave Robber music, shows, news, fan community features, media, merch links,\r
      booking or contact requests, and related band communication. Visitors agree to use the website and app only for\r
      lawful purposes and in a way that does not interfere with the site, app, admin tools, backend services, or other\r
      visitors.\r
    </p>\r
\r
    <h2>Fan Submissions and Uploads</h2>\r
    <p>\r
      The website and app may allow visitors to submit messages, signup forms, contact requests, photos, drawings,\r
      artwork, and Graffiti Wall posts. By submitting content, visitors confirm that they have the right to submit it and\r
      that it does not violate another person's rights, privacy, copyright, trademark, publicity rights, or other legal\r
      rights.\r
    </p>\r
    <p>\r
      Visitors should not submit private information, offensive material, illegal content, threats, harassment, spam,\r
      malicious files, or content they do not want reviewed by Grave Robber or its site administrators.\r
    </p>\r
\r
    <h2>Graffiti Wall</h2>\r
    <p>\r
      Graffiti Wall posts, photos, and painted artwork are submitted for admin review and are not guaranteed to appear\r
      publicly. Grave Robber may approve, reject, edit, hide, or delete submissions at any time and for any reason,\r
      including content that is inappropriate, unlawful, promotional, abusive, misleading, or unrelated to the fan\r
      community.\r
    </p>\r
\r
    <h2>Permission to Display Submitted Content</h2>\r
    <p>\r
      By submitting a message, photo, drawing, artwork, or other content through the website or app, visitors give Grave\r
      Robber permission to store, review, display, publish, repost, resize, format, and use that submitted content in\r
      connection with the Grave Robber website, mobile app, social media, fan community features, promotional materials,\r
      and related band activity. This permission is non-exclusive, worldwide, royalty-free, and may continue until the\r
      content is removed by an administrator.\r
    </p>\r
\r
    <h2>Contact, Signup, and Booking Requests</h2>\r
    <p>\r
      Contact forms, signup forms, fan messages, booking requests, and email links are provided for communication with\r
      Grave Robber. Submitting a form does not guarantee a response, booking, newsletter subscription, merch request,\r
      approval, or any specific action.\r
    </p>\r
\r
    <h2>Merch, Donations, Payments, and Third-Party Links</h2>\r
    <p>\r
      The website and app may link to third-party services for donations, payments, merch, music, shows, videos, social\r
      media, streaming, forms, and other features. These services may include PayPal, Bandsintown, Facebook, Instagram,\r
      Spotify, TikTok, X, Threads, YouTube, Google Forms, hosting providers, upload providers, and similar services.\r
      Grave Robber is not responsible for third-party websites, apps, services, checkout systems, policies, availability,\r
      fees, refunds, order fulfillment, or data practices.\r
    </p>\r
\r
    <h2>Show Information</h2>\r
    <p>\r
      Show dates, locations, times, ticket links, and related event information are provided for convenience and may\r
      change without notice. Visitors should confirm event details with the venue, ticket provider, promoter, or linked\r
      third-party service before making plans or purchases.\r
    </p>\r
\r
    <h2>Intellectual Property</h2>\r
    <p>\r
      The Grave Robber name, logos, images, artwork, page designs, text, music-related content, app content, and other\r
      materials on the website and app are owned by Grave Robber or used with permission, unless otherwise stated.\r
      Visitors may not copy, reproduce, sell, modify, distribute, or use these materials for commercial purposes without\r
      written permission.\r
    </p>\r
\r
    <h2>Acceptable Use</h2>\r
    <p>Visitors agree not to:</p>\r
    <ul>\r
      <li>Use the website or app to submit unlawful, abusive, hateful, threatening, harassing, explicit, or spam content.</li>\r
      <li>Upload content that contains malware, tracking code, or harmful files.</li>\r
      <li>Impersonate another person or misrepresent a connection to Grave Robber.</li>\r
      <li>Attempt to access admin-only areas, accounts, databases, servers, or systems without permission.</li>\r
      <li>Interfere with the website, app, hosting, uploads, forms, visitor counting, public display features, or backend services.</li>\r
      <li>Use the website or app in a way that violates applicable law or the rights of others.</li>\r
    </ul>\r
\r
    <h2>Admin Review and Removal</h2>\r
    <p>\r
      Grave Robber and its administrators may review, moderate, remove, hide, edit, preserve, or refuse any submitted\r
      content or account-related activity when needed to operate the website or app, protect visitors, enforce these\r
      Terms, comply with law, or maintain the fan community.\r
    </p>\r
\r
    <h2>No Warranty</h2>\r
    <p>\r
      The website and app are provided as-is and as-available. Grave Robber does not guarantee that the website, app,\r
      forms, uploads, visitor counter, show widgets, Graffiti Wall, media, third-party links, or other features will be\r
      uninterrupted, error-free, secure, current, or always available.\r
    </p>\r
\r
    <h2>Limitation of Liability</h2>\r
    <p>\r
      To the fullest extent allowed by law, Grave Robber is not responsible for damages, losses, claims, costs, or\r
      problems arising from use of the website or app, inability to use the website or app, user submissions, third-party\r
      services, event changes, uploads, data loss, technical issues, or unauthorized access.\r
    </p>\r
\r
    <h2>Privacy</h2>\r
    <p>\r
      Use of the website and app is also governed by the\r
      <a href="/privacy.html">Privacy Policy</a>, which explains what information may be collected and how it may be\r
      used.\r
    </p>\r
\r
    <h2>Changes to These Terms</h2>\r
    <p>\r
      These Terms may be updated from time to time. Updates will be posted on this page with a new last updated date.\r
      Continued use of the website or app after updates means visitors accept the updated Terms.\r
    </p>\r
\r
    <h2>Contact</h2>\r
    <p>\r
      Questions about these Terms may be sent to\r
      <a href="mailto:graverobber.punk@gmail.com">graverobber.punk@gmail.com</a>.\r
    </p>\r
\r
    <div class="policy-footer">\r
      <p>\r
        Legal pages:\r
        <a href="/privacy.html">Privacy Policy</a>\r
      </p>\r
      <p>\r
        Contact:\r
        <a href="mailto:graverobber.punk@gmail.com">graverobber.punk@gmail.com</a>\r
      </p>\r
    </div>\r
  </main>
  <!-- PUCK_LEGAL_END -->
  </div>
  <script src="api-config.js"><\/script>
  <script type="module" src="/src/public-page.js"><\/script>
</body>
</html>\r
`,bt="graverobber",mt=["inherit","Arial, sans-serif","Helvetica, sans-serif","Verdana, sans-serif","Tahoma, sans-serif","Trebuchet MS, sans-serif","Georgia, serif","Times New Roman, serif","Garamond, serif","Courier New, monospace","Lucida Console, monospace","Impact, sans-serif","Palatino, serif","Gill Sans, sans-serif","Century Gothic, sans-serif","Playfair Display, serif","Montserrat, sans-serif","Oswald, sans-serif","Roboto, sans-serif","Open Sans, sans-serif","Lato, sans-serif","Poppins, sans-serif","Raleway, sans-serif","Bebas Neue, sans-serif","Anton, sans-serif","Inter, sans-serif","Nunito, sans-serif","Merriweather, serif","Lora, serif","Cinzel, serif","Cormorant Garamond, serif","Abril Fatface, serif","Permanent Marker, cursive","Rock Salt, cursive","Bangers, cursive","Creepster, cursive","Metal Mania, cursive","Special Elite, cursive","Rye, cursive","Orbitron, sans-serif","Audiowide, cursive","Black Ops One, cursive","Russo One, sans-serif","Libre Baskerville, serif","Source Sans 3, sans-serif","Source Serif 4, serif","Josefin Sans, sans-serif","Quicksand, sans-serif","Dancing Script, cursive","Pacifico, cursive","Satisfy, cursive","Shadows Into Light, cursive","Fira Sans, sans-serif","Fira Code, monospace","Ubuntu, sans-serif","Work Sans, sans-serif","DM Sans, sans-serif","Space Grotesk, sans-serif","Manrope, sans-serif"],ie=[{label:"Facebook",value:"facebook"},{label:"Instagram",value:"instagram"},{label:"TikTok",value:"tiktok"},{label:"YouTube",value:"youtube"},{label:"Spotify",value:"spotify"},{label:"Bandcamp",value:"bandcamp"},{label:"SoundCloud",value:"soundcloud"},{label:"Apple Music",value:"apple"},{label:"X / Twitter",value:"x"},{label:"Threads",value:"threads"},{label:"Bluesky",value:"bluesky"},{label:"LinkedIn",value:"linkedin"},{label:"Snapchat",value:"snapchat"},{label:"Pinterest",value:"pinterest"},{label:"Twitch",value:"twitch"},{label:"Discord",value:"discord"},{label:"Reddit",value:"reddit"},{label:"Patreon",value:"patreon"},{label:"Venmo",value:"venmo"},{label:"Cash App",value:"cashapp"},{label:"Email",value:"email"},{label:"Website",value:"website"},{label:"Custom",value:"custom"}];function A(e){return JSON.parse(JSON.stringify(e))}function ut(e){var n;const t=((n=e.match(/<!-- PUCK_LEGAL_START -->([\s\S]*?)<!-- PUCK_LEGAL_END -->/i))==null?void 0:n[1])||"";return`<style>${Array.from(e.matchAll(/<style>([\s\S]*?)<\/style>/gi)).map(a=>a[1]).join(`
`)}
.puck-legal-page{width:100vw;margin-left:calc(50% - 50vw);}
.puck-legal-page .site-header,.puck-legal-page .policy-wrap{max-width:none;}
</style><div class="puck-legal-page">${t}</div>`}function ft(e){const t=Number(String(e||"").replace(/[^0-9.]/g,""));return Number.isFinite(t)&&t>0?t:920}function ht(e={}){const t=(e.images||[]).filter(d=>d.imageUrl);if((e.layoutMode||"grid")!=="freeform"||!t.length)return e;const r=ft(e.canvasHeight),n=t.reduce((d,l)=>{const b=Number.isFinite(Number(l.y))?Number(l.y):0;return Math.min(d,Math.min(100,Math.max(0,b))/100*r)},1/0),a=t.map((d,l)=>{const b=Number.isFinite(Number(d.y))?Number(d.y):0,h=Math.min(100,Math.max(0,b))/100*r-n,x=Number.isFinite(Number(d.x))?d.x:l%3*32+5;return{...d,x,yPx:Math.max(0,h)}}),i=a.reduce((d,l)=>{const b=Number(String(l.width||"280").replace(/[^0-9.]/g,""))||280,h=Math.min(520,Math.max(170,b*.72));return Math.max(d,l.yPx+h+22)},0),s=Math.max(260,Math.ceil(i));return{...e,canvasHeight:`${s}px`,images:a.map(d=>({...d,y:s?d.yPx/s*100:0}))}}function xt(){const e=localStorage.getItem("adminToken")||"";return e?{Authorization:`Bearer ${e}`}:{}}function yt({value:e,onChange:t,label:r}){const n=e&&String(e).startsWith("#")?e:"#ffffff";return o.jsxs("div",{className:"puck-custom-field puck-color-field",children:[o.jsx("label",{children:r}),o.jsxs("div",{className:"puck-color-row",children:[o.jsx("input",{type:"color",value:n,onChange:a=>t(a.target.value)}),o.jsx("input",{type:"text",value:e||"",placeholder:"#ffffff, transparent, inherit",onChange:a=>t(a.target.value)})]})]})}const wt=[{label:"Left",value:"left"},{label:"Center",value:"center"},{label:"Right",value:"right"}];function F(e,t={}){return{type:"text",label:e,placeholder:t.placeholder||"Example: 100px"}}function p(e){return{type:"custom",label:e,render:({value:t,onChange:r})=>o.jsx(yt,{value:t||"",onChange:r,label:e})}}function vt({value:e,onChange:t,label:r}){return o.jsxs("div",{className:"puck-custom-field",children:[o.jsx("label",{children:r}),o.jsx("select",{value:e||"inherit",onChange:n=>t(n.target.value),children:mt.map(n=>o.jsx("option",{value:n,children:n},n))}),o.jsx("input",{type:"text",value:e||"",placeholder:"Or type any font-family name",onChange:n=>t(n.target.value)})]})}function w(e){return{type:"custom",label:e,render:({value:t,onChange:r})=>o.jsx(vt,{value:t||"inherit",onChange:r,label:e})}}function kt({value:e,onChange:t,label:r}){const[n,a]=fe.useState("");async function i(s){var h;const d=(h=s.target.files)==null?void 0:h[0];if(!d)return;if(!d.type.startsWith("image/")){a("Please choose an image file.");return}const l=window.BAND_API_BASE;if(!l){a("Upload failed: API base is missing.");return}const b=new FormData;b.append("image",d),a("Uploading image...");try{const x=await fetch(`${l}/uploads/${bt}`,{method:"POST",headers:xt(),body:b}),v=await x.json();if(!x.ok||!v.url){a(v.error||"Upload failed.");return}t(v.url),a("Image uploaded. Click Publish to save the page.")}catch{a("Upload failed. Make sure backend/Cloudinary are working.")}finally{s.target.value=""}}return o.jsxs("div",{className:"puck-upload-field",children:[o.jsx("label",{children:r||"Image"}),e?o.jsxs("div",{className:"puck-upload-preview",children:[o.jsx("img",{src:e,alt:"Selected upload"}),o.jsx("code",{children:e})]}):o.jsx("p",{className:"puck-upload-empty",children:"No image selected."}),o.jsx("input",{type:"file",accept:"image/*",onChange:i}),o.jsx("button",{type:"button",onClick:()=>t(""),children:"Remove Image"}),n&&o.jsx("p",{className:"puck-upload-status",children:n})]})}function k(e){return{type:"custom",label:e,render:({value:t,onChange:r})=>o.jsx(kt,{value:t||"",onChange:r,label:e})}}function Ct({value:e,onChange:t,label:r}){return o.jsxs("div",{className:"puck-custom-field",children:[o.jsx("label",{children:r}),o.jsx("input",{type:"text",value:e||"",placeholder:"Paste Google Fonts @import URL or font CSS URL",onChange:n=>t(n.target.value)}),o.jsx("small",{children:"Example: https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"})]})}function P(e="External Font URL"){return{type:"custom",label:e,render:({value:t,onChange:r})=>o.jsx(Ct,{value:t||"",onChange:r,label:e})}}const C=e=>({[`${e}Color`]:p("Text Color"),[`${e}Font`]:w("Font"),[`${e}Size`]:{type:"text",label:"Font Size",placeholder:"3rem, 48px, 120%"},[`${e}Weight`]:{type:"select",label:"Bold / Normal",options:[{label:"Default",value:"inherit"},{label:"Normal",value:"400"},{label:"Bold",value:"700"},{label:"Extra Bold",value:"900"},{label:"Light",value:"300"}]},[`${e}Style`]:{type:"select",label:"Italic",options:[{label:"Default",value:"inherit"},{label:"Normal",value:"normal"},{label:"Italic",value:"italic"}]},[`${e}Decoration`]:{type:"select",label:"Underline",options:[{label:"None",value:"none"},{label:"Underline",value:"underline"},{label:"Line Through",value:"line-through"}]},[`${e}Transform`]:{type:"select",label:"Text Case",options:[{label:"Default",value:"none"},{label:"UPPERCASE",value:"uppercase"},{label:"lowercase",value:"lowercase"},{label:"Capitalize",value:"capitalize"}]},[`${e}LetterSpacing`]:{type:"text",label:"Letter Spacing",placeholder:"normal, 2px, .08em"},[`${e}LineHeight`]:{type:"text",label:"Line Height",placeholder:"normal, 1.2, 32px"},[`${e}Shadow`]:{type:"text",label:"Text Shadow",placeholder:"none or 0 0 10px #22d3ee"}}),S={type:"array",label:"Buttons",arrayFields:{text:{type:"text",label:"Button Text"},url:{type:"text",label:"Button Link"},buttonType:{type:"select",label:"Button Type",options:[{label:"Normal Link Button",value:"link"},{label:"Dropdown Button",value:"dropdown"}]},dropdownLinks:{type:"array",label:"Dropdown Links",arrayFields:{text:{type:"text",label:"Dropdown Link Text"},url:{type:"text",label:"Dropdown Link URL"},backgroundColor:p("Dropdown Link Background"),textColor:p("Dropdown Link Text Color"),fontFamily:w("Dropdown Link Font"),fontSize:{type:"text",label:"Dropdown Link Font Size",placeholder:"14px"},borderColor:p("Dropdown Link Border Color"),boxShadow:{type:"text",label:"Dropdown Link Glow / Shadow",placeholder:"none or 0 0 14px #00ff04"},textTransform:{type:"select",label:"Dropdown Link Text Case",options:[{label:"Default",value:""},{label:"Uppercase",value:"uppercase"},{label:"Normal",value:"none"},{label:"Lowercase",value:"lowercase"},{label:"Capitalize",value:"capitalize"}]},radius:{type:"text",label:"Dropdown Link Rounded Corners",placeholder:"10px"},padding:{type:"text",label:"Dropdown Link Padding",placeholder:"10px 12px"}},defaultItemProps:{text:"New Dropdown Link",url:"#",backgroundColor:"transparent",textColor:"#ffffff",fontFamily:"inherit",fontSize:"14px",borderColor:"transparent",boxShadow:"none",textTransform:"uppercase",radius:"10px",padding:"10px 12px"}},dropdownBackgroundColor:p("Dropdown Menu Background"),dropdownBorderColor:p("Dropdown Menu Border Color"),dropdownBoxShadow:{type:"text",label:"Dropdown Menu Glow / Shadow",placeholder:"0 0 24px rgba(57,255,20,.35)"},dropdownRadius:{type:"text",label:"Dropdown Menu Rounded Corners",placeholder:"16px"},dropdownPadding:{type:"text",label:"Dropdown Menu Padding",placeholder:"10px"},dropdownMinWidth:{type:"text",label:"Dropdown Menu Width",placeholder:"190px"},backgroundColor:p("Button Background"),textColor:p("Button Text Color"),fontFamily:w("Button Font"),fontSize:{type:"text",label:"Button Font Size",placeholder:"16px"},borderWidth:{type:"select",label:"Border",options:[{label:"No Border",value:"0px"},{label:"Thin Border",value:"1px"},{label:"Medium Border",value:"2px"},{label:"Thick Border",value:"4px"}]},borderColor:p("Border Color"),boxShadow:{type:"text",label:"Button Glow / Shadow",placeholder:"none or 0 0 20px #22d3ee"},textTransform:{type:"select",label:"Text Case",options:[{label:"Default",value:""},{label:"Uppercase",value:"uppercase"},{label:"Normal",value:"none"},{label:"Lowercase",value:"lowercase"},{label:"Capitalize",value:"capitalize"}]},radius:{type:"text",label:"Button Rounded Corners",placeholder:"999px"},padding:{type:"text",label:"Button Padding",placeholder:"14px 24px"}},defaultItemProps:{text:"New Button",url:"#",buttonType:"link",dropdownLinks:[],dropdownBackgroundColor:"rgba(0,0,0,.96)",dropdownBorderColor:"rgba(57,255,20,.55)",dropdownBoxShadow:"0 0 24px rgba(57,255,20,.35)",dropdownRadius:"16px",dropdownPadding:"10px",dropdownMinWidth:"190px",backgroundColor:"#8b3df4",textColor:"#ffffff",fontFamily:"inherit",fontSize:"16px",borderWidth:"0px",borderColor:"rgba(255,255,255,.25)",boxShadow:"none",textTransform:"uppercase",radius:"999px",padding:"14px 24px"}},W={backgroundColor:p("Section Background"),textColor:p("Default Text Color"),paddingY:{type:"number",label:"Top/Bottom Padding"},paddingX:{type:"number",label:"Left/Right Padding"}};function j(e){return e?o.jsx("style",{children:`@import url('${e}');`}):null}function T({button:e}){if(!(e!=null&&e.text))return null;const t=e.borderWidth||"0px",r=e.borderColor||"transparent",n={background:e.backgroundColor||"transparent",color:e.textColor||"inherit",fontFamily:e.fontFamily||"inherit",fontSize:e.fontSize||"inherit",fontWeight:e.fontWeight||"inherit",border:`${t} solid ${r}`,boxShadow:e.boxShadow||"none",textTransform:e.textTransform||"uppercase",borderRadius:e.radius||"0px",padding:e.padding||"14px 24px",textDecoration:"none",display:"inline-flex",alignItems:"center",justifyContent:"center",cursor:"pointer"};return e.buttonType==="dropdown"?o.jsxs("div",{className:"puck-dropdown",children:[o.jsx("button",{className:"puck-btn puck-dropdown-trigger",type:"button",style:n,children:e.text}),o.jsx("div",{className:"puck-dropdown-menu",style:{background:e.dropdownBackgroundColor||"rgba(0,0,0,.96)",borderColor:e.dropdownBorderColor||"rgba(57,255,20,.55)",boxShadow:e.dropdownBoxShadow||"0 0 24px rgba(57,255,20,.35)",borderRadius:e.dropdownRadius||"16px",padding:e.dropdownPadding||"10px",minWidth:e.dropdownMinWidth||"190px"},children:(e.dropdownLinks||[]).map((a,i)=>o.jsx("a",{href:a.url||"#",style:{background:a.backgroundColor||"transparent",color:a.textColor||"#ffffff",fontFamily:a.fontFamily||"inherit",fontSize:a.fontSize||"14px",borderColor:a.borderColor||"transparent",boxShadow:a.boxShadow||"none",textTransform:a.textTransform||"uppercase",borderRadius:a.radius||"10px",padding:a.padding||"10px 12px"},children:a.text||"Dropdown Link"},i))})]}):o.jsx("a",{className:"puck-btn",href:e.url||"#",style:n,children:e.text})}function St({platform:e,label:t}){const r=String(e||"custom").toLowerCase().trim();return r==="facebook"?o.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:o.jsx("path",{d:"M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.019 4.388 10.994 10.125 11.854v-8.385H7.078v-3.469h3.047V9.431c0-3.007 1.791-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.249h3.328l-.532 3.469h-2.796v8.385C19.612 23.067 24 18.092 24 12.073z"})}):r==="instagram"?o.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:o.jsx("path",{d:"M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3.5A4.5 4.5 0 1112 16a4.5 4.5 0 010-9zm0 2A2.5 2.5 0 1012 14a2.5 2.5 0 000-5zm5.25-3.25a1.25 1.25 0 11-1.25 1.25 1.25 1.25 0 011.25-1.25z"})}):r==="spotify"?o.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:o.jsx("path",{d:"M12 1.8A10.2 10.2 0 1022.2 12 10.2 10.2 0 0012 1.8zm4.68 14.72a.76.76 0 01-1.05.25 9.58 9.58 0 00-7.28-.78.76.76 0 11-.44-1.46 11.13 11.13 0 018.52.94.76.76 0 01.25 1.05zm1.25-2.77a.9.9 0 01-1.24.3 11.75 11.75 0 00-8.62-.96.9.9 0 11-.52-1.72 13.5 13.5 0 019.96 1.14.9.9 0 01.42 1.24zm.13-2.94a14.15 14.15 0 00-10.4-1.13 1.05 1.05 0 11-.61-2.01 16.3 16.3 0 0112.08 1.32 1.05 1.05 0 11-1.07 1.82z"})}):r==="youtube"?o.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:o.jsx("path",{d:"M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 00.5 6.2 31.5 31.5 0 000 12a31.5 31.5 0 00.5 5.8 3 3 0 002.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 002.1-2.1A31.5 31.5 0 0024 12a31.5 31.5 0 00-.5-5.8zM9.6 15.6V8.4L15.8 12l-6.2 3.6z"})}):o.jsxs("svg",{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:[o.jsx("circle",{cx:"12",cy:"12",r:"9"}),o.jsx("path",{d:"M8 12h8M12 8v8",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})]})}function L({children:e,backgroundColor:t="transparent",textColor:r="inherit",paddingY:n=50,paddingX:a=24}){return o.jsx("section",{className:"puck-section",style:{background:t,color:r,padding:`${n}px ${a}px`},children:e})}function Tt(e){return o.jsx("section",{className:"puck-section graverobber-contact-form-section graverobber-signup-form-section",style:{background:e.backgroundColor||"#000000",padding:`${e.paddingY||30}px ${e.paddingX||24}px ${e.paddingBottom||80}px`},children:o.jsxs("div",{className:"puck-inner graverobber-contact-inner",children:[o.jsxs("form",{className:"graverobber-custom-contact-form",onSubmit:t=>t.preventDefault(),children:[o.jsxs("label",{children:[e.nameLabel||"What are you called?",o.jsx("input",{type:"text",name:e.nameEntry||"entry.821607845"})]}),o.jsxs("label",{children:[e.emailLabel||"What is your email?",o.jsx("input",{type:"email",name:e.emailEntry||"entry.216699627"})]}),o.jsxs("label",{children:[e.phoneLabel||"What is your phone number?",o.jsx("input",{type:"tel",name:e.phoneEntry||"entry.1566132030"})]}),o.jsxs("label",{children:[e.zipLabel||"What is your zip code?",o.jsx("input",{type:"text",name:e.zipEntry||"entry.848273318"})]}),o.jsx("button",{type:"submit",children:e.buttonText||"Join the Army of the Dead"}),o.jsx("p",{className:"graverobber-contact-success","aria-live":"polite",children:e.successMessage||""})]}),o.jsx("iframe",{className:"graverobber-hidden-submit-frame",name:"graverobber-signup-hidden-frame",title:"Hidden signup submit frame"})]})})}function zt(e){return o.jsx("section",{className:"puck-section graverobber-contact-form-section",style:{background:e.backgroundColor||"#000000",padding:`${e.paddingY||30}px ${e.paddingX||24}px ${e.paddingBottom||80}px`},children:o.jsxs("div",{className:"puck-inner graverobber-contact-inner",children:[o.jsxs("form",{className:"graverobber-custom-contact-form",onSubmit:t=>t.preventDefault(),children:[o.jsxs("label",{children:[e.nameLabel||"What are you called?",o.jsx("input",{type:"text",name:e.nameEntry||"entry.111991046"})]}),o.jsxs("label",{children:[e.emailLabel||"What is your email?",o.jsx("input",{type:"email",name:e.emailEntry||"entry.709491702"})]}),o.jsxs("label",{children:[e.messageLabel||"What do you want?",o.jsx("textarea",{name:e.messageEntry||"entry.905150677",rows:Number(e.messageRows||7)})]}),o.jsx("button",{type:"submit",children:e.buttonText||"Send Message"}),o.jsx("p",{className:"graverobber-contact-success","aria-live":"polite",children:e.successMessage||""})]}),o.jsx("iframe",{className:"graverobber-hidden-submit-frame",name:"graverobber-contact-hidden-frame",title:"Hidden contact submit frame"})]})})}const E=[{type:"Hero",props:{id:"graverobber-hero-1",title:"Grave Robber",subtitle:"AMERICAN HORROR PUNK",body:"Horror punk from beyond the grave. Shows, music, merch, booking, and updates.",imageUrl:"assets/grave-robber-skull.png",imageAlt:"Grave Robber skull logo",layout:"center",titleSize:"5rem",titleColor:"#f2f2f2",titleFont:"Creepster, cursive",titleWeight:"700",titleLetterSpacing:"normal",subtitleSize:"1.25rem",subtitleColor:"#c62828",subtitleFont:"Oswald, sans-serif",subtitleWeight:"700",subtitleLetterSpacing:".14em",bodySize:"1.1rem",bodyColor:"#d6d6d6",bodyFont:"Special Elite, cursive",bodyWeight:"400",bodyLetterSpacing:"normal",imageWidth:"300px",imageRadius:"0px",imageShadow:"0 0 55px rgba(198,40,40,.45)",maxWidth:1e3,gap:35,backgroundColor:"transparent",textColor:"#ffffff",paddingY:70,paddingX:24,customFontUrl:"",buttons:[{text:"Shows",url:"shows.html",backgroundColor:"#c62828",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"16px",borderWidth:"0px",borderColor:"transparent",boxShadow:"0 0 24px rgba(198,40,40,.35)",textTransform:"uppercase",radius:"999px",padding:"16px 34px"},{text:"Join the Army of the Dead",url:"signup.html",backgroundColor:"transparent",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"16px",borderWidth:"1px",borderColor:"rgba(255,255,255,.35)",boxShadow:"none",textTransform:"uppercase",radius:"999px",padding:"16px 34px"},{text:"Booking",url:"mailto:graverobber.punk@gmail.com",backgroundColor:"transparent",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"16px",borderWidth:"1px",borderColor:"rgba(198,40,40,.65)",boxShadow:"none",textTransform:"uppercase",radius:"999px",padding:"16px 34px"}]}},{type:"ImageBlock",props:{id:"graverobber-image-1",title:"",titleSize:"3rem",titleColor:"#ffffff",titleFont:"Creepster, cursive",imageUrl:"assets/grave-robber-logo-stacked.png",imageAlt:"Grave Robber logo",width:"520px",radius:"12px",shadow:"0 20px 60px rgba(0,0,0,.55)",align:"center",maxWidth:"900px",backgroundColor:"transparent",paddingY:30,paddingX:24,customFontUrl:""}},{type:"ButtonRow",props:{id:"graverobber-buttons-1",backgroundColor:"transparent",textColor:"#ffffff",paddingY:40,paddingX:24,customFontUrl:"",buttons:[{text:"Shows",url:"shows.html",backgroundColor:"#c62828",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"16px",borderWidth:"0px",borderColor:"transparent",boxShadow:"0 0 24px rgba(198,40,40,.35)",textTransform:"uppercase",radius:"999px",padding:"16px 34px"},{text:"Army of the Dead",url:"signup.html",backgroundColor:"transparent",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"16px",borderWidth:"1px",borderColor:"rgba(255,255,255,.35)",boxShadow:"none",textTransform:"uppercase",radius:"999px",padding:"16px 34px"}]}},{type:"SocialIcons",props:{id:"graverobber-social-1",title:"Follow Grave Robber",titleColor:"#ffffff",titleFont:"Oswald, sans-serif",titleSize:"1rem",titleWeight:"700",backgroundColor:"transparent",textColor:"#ffffff",paddingY:50,paddingX:24,links:[{platform:"facebook",label:"Facebook",url:"https://www.facebook.com/graverobberpunk",iconColor:"#ffffff",backgroundColor:"rgba(198,40,40,.14)",borderColor:"rgba(198,40,40,.55)"},{platform:"instagram",label:"Instagram",url:"https://www.instagram.com/graverobberpunk",iconColor:"#ffffff",backgroundColor:"rgba(198,40,40,.14)",borderColor:"rgba(198,40,40,.55)"},{platform:"x",label:"X",url:"https://x.com/graverobberpunk",iconColor:"#ffffff",backgroundColor:"rgba(198,40,40,.14)",borderColor:"rgba(198,40,40,.55)"},{platform:"threads",label:"Threads",url:"https://www.threads.net/@graverobberpunk",iconColor:"#ffffff",backgroundColor:"rgba(198,40,40,.14)",borderColor:"rgba(198,40,40,.55)"},{platform:"tiktok",label:"TikTok",url:"https://www.tiktok.com/@graverobberpunk",iconColor:"#ffffff",backgroundColor:"rgba(198,40,40,.14)",borderColor:"rgba(198,40,40,.55)"},{platform:"spotify",label:"Spotify",url:"https://open.spotify.com/artist/4D34aUp0OsDs8mAEWPIP7c",iconColor:"#ffffff",backgroundColor:"rgba(198,40,40,.14)",borderColor:"rgba(198,40,40,.55)"},{platform:"youtube",label:"YouTube",url:"https://www.youtube.com/@GraveRobberPunk",iconColor:"#ffffff",backgroundColor:"rgba(198,40,40,.14)",borderColor:"rgba(198,40,40,.55)"},{platform:"bandcamp",label:"Bandcamp",url:"https://graverobberpunk.bandcamp.com/",iconColor:"#ffffff",backgroundColor:"rgba(198,40,40,.14)",borderColor:"rgba(198,40,40,.55)"},{platform:"soundcloud",label:"SoundCloud",url:"https://soundcloud.com/graverobberofficial",iconColor:"#ffffff",backgroundColor:"rgba(198,40,40,.14)",borderColor:"rgba(198,40,40,.55)"},{platform:"apple",label:"Apple Music",url:"https://music.apple.com/us/artist/grave-robber/279558434",iconColor:"#ffffff",backgroundColor:"rgba(198,40,40,.14)",borderColor:"rgba(198,40,40,.55)"},{platform:"website",label:"Merch Store",url:"https://graverobber.bigcartel.com/",iconColor:"#ffffff",backgroundColor:"rgba(198,40,40,.14)",borderColor:"rgba(198,40,40,.55)"},{platform:"email",label:"Email",url:"mailto:graverobber.punk@gmail.com",iconColor:"#ffffff",backgroundColor:"rgba(198,40,40,.14)",borderColor:"rgba(198,40,40,.55)"}]}}],$t=[{label:"Grave Robber Ombre",value:"grave-ombre"},{label:"Solid Color",value:"solid"},{label:"Vertical Gradient",value:"vertical-gradient"},{label:"Horizontal Gradient",value:"horizontal-gradient"},{label:"Diagonal Gradient",value:"diagonal-gradient"},{label:"Radial Center Glow",value:"radial-glow"},{label:"Top Spotlight",value:"top-glow"},{label:"Bottom Spotlight",value:"bottom-glow"},{label:"Left Glow",value:"left-glow"},{label:"Right Glow",value:"right-glow"},{label:"Double Glow",value:"double-glow"},{label:"Triple Horror Fog",value:"triple-fog"},{label:"Red Black Vignette",value:"red-vignette"},{label:"Custom CSS",value:"custom"}],xe={backgroundStyle:"grave-ombre",pageBaseColor:"#030000",pageSecondColor:"#000000",pageThirdColor:"",pageGlowColor:"#00ff04",pageSecondGlowColor:"#000000",pageThirdGlowColor:"",pageTextColor:"#f5f0e6",pageGradientAngle:"180deg",pageGlowPosition:"center 18%",pageGlowSize:"34%",pageSecondGlowPosition:"center 70%",pageSecondGlowSize:"45%",pageThirdGlowPosition:"center center",pageThirdGlowSize:"75%",customBackgroundCss:""};function Bt(e={}){const t={...xe,...e||{}},r=t.pageBaseColor||"#030000",n=t.pageSecondColor||"#160000",a=t.pageThirdColor||"#000000",i=t.pageGlowColor||"rgba(198,40,40,.18)",s=t.pageSecondGlowColor||"rgba(198,40,40,.10)",d=t.pageThirdGlowColor||"rgba(0,0,0,.65)",l=t.pageGradientAngle||"180deg",b=t.pageGlowPosition||"center 18%",h=t.pageGlowSize||"34%",x=t.pageSecondGlowPosition||"center 70%",v=t.pageSecondGlowSize||"45%",D=t.pageThirdGlowPosition||"center center",_=t.pageThirdGlowSize||"75%";return t.backgroundStyle==="solid"?r:t.backgroundStyle==="vertical-gradient"?`linear-gradient(180deg, ${n} 0%, ${r} 55%, ${a} 100%)`:t.backgroundStyle==="horizontal-gradient"?`linear-gradient(90deg, ${n} 0%, ${r} 50%, ${a} 100%)`:t.backgroundStyle==="diagonal-gradient"?`linear-gradient(${l}, ${n} 0%, ${r} 52%, ${a} 100%)`:t.backgroundStyle==="radial-glow"?`radial-gradient(circle at ${b}, ${i}, transparent ${h}), ${r}`:t.backgroundStyle==="top-glow"?`radial-gradient(circle at top center, ${i}, transparent ${h}), linear-gradient(180deg, ${n}, ${r})`:t.backgroundStyle==="bottom-glow"?`radial-gradient(circle at bottom center, ${i}, transparent ${h}), linear-gradient(180deg, ${r}, ${n})`:t.backgroundStyle==="left-glow"?`radial-gradient(circle at left center, ${i}, transparent ${h}), linear-gradient(90deg, ${n}, ${r})`:t.backgroundStyle==="right-glow"?`radial-gradient(circle at right center, ${i}, transparent ${h}), linear-gradient(90deg, ${r}, ${n})`:t.backgroundStyle==="double-glow"?`radial-gradient(circle at ${b}, ${i}, transparent ${h}), radial-gradient(circle at ${x}, ${s}, transparent ${v}), ${r}`:t.backgroundStyle==="triple-fog"?`radial-gradient(circle at ${b}, ${i}, transparent ${h}), radial-gradient(circle at ${x}, ${s}, transparent ${v}), radial-gradient(circle at ${D}, ${d}, transparent ${_}), linear-gradient(${l}, ${n}, ${r}, ${a})`:t.backgroundStyle==="red-vignette"?`radial-gradient(circle at ${b}, ${i}, transparent ${h}), radial-gradient(circle at center, transparent 0%, transparent 52%, ${d} 100%), linear-gradient(${l}, ${n}, ${r}, ${a})`:t.backgroundStyle==="custom"?t.customBackgroundCss||r:`radial-gradient(circle at ${b}, ${i}, transparent ${h}), radial-gradient(circle at ${x}, ${s}, transparent ${v}), linear-gradient(180deg, ${n}, ${r})`}function Ft(e="home"){if(e==="privacy"||e==="terms")return[{type:"Embed",props:{id:`graverobber-${e}-page-1`,html:ut(e==="privacy"?ct:gt),backgroundColor:"transparent",paddingY:0,paddingX:0}}];const t={text:"☕ Buy Grave Robber a Coffee",url:"https://www.paypal.com/donate/?business=graverobber.punk%40gmail.com&currency_code=USD",backgroundColor:"#000000",textColor:"#bb00ff",fontFamily:"Oswald, sans-serif",fontSize:"14px",borderWidth:"1px",borderColor:"#00ff04",boxShadow:"0 0 24px #00ff04",textTransform:"uppercase",radius:"999px",padding:"10px 16px"},r=[{text:"Home",url:"index.html",backgroundColor:"#000000",textColor:"#bb00ff",fontFamily:"Oswald, sans-serif",fontSize:"14px",borderWidth:"1px",borderColor:"#00ff04",boxShadow:"0 0 24px #00ff04",textTransform:"uppercase",radius:"999px",padding:"10px 16px"},{text:"Shows",url:"shows.html",backgroundColor:"#000000",textColor:"#bb00ff",fontFamily:"Oswald, sans-serif",fontSize:"14px",borderWidth:"1px",borderColor:"#00ff04",boxShadow:"0 0 24px #00ff04",textTransform:"uppercase",radius:"999px",padding:"10px 16px"},{text:"About",url:"about.html",backgroundColor:"#000000",textColor:"#bb00ff",fontFamily:"Oswald, sans-serif",fontSize:"14px",borderWidth:"1px",borderColor:"#00ff04",boxShadow:"0 0 24px #00ff04",textTransform:"uppercase",radius:"999px",padding:"10px 16px"},{text:"Graffiti Wall",url:"graffiti-wall.html",backgroundColor:"#000000",textColor:"#bb00ff",fontFamily:"Oswald, sans-serif",fontSize:"14px",borderWidth:"1px",borderColor:"#00ff04",boxShadow:"0 0 24px #00ff04",textTransform:"uppercase",radius:"999px",padding:"10px 16px"},{text:"Admin",url:"admin.html",backgroundColor:"#000000",textColor:"#bb00ff",fontFamily:"Oswald, sans-serif",fontSize:"14px",borderWidth:"1px",borderColor:"#00ff04",boxShadow:"0 0 24px #00ff04",textTransform:"uppercase",radius:"999px",padding:"10px 16px"}],n={backgroundColor:"#000000",lineColor:"#bb00ff",lineShadow:"0 0 24px #bb00ff",showBack:"hide",backText:"Back",backUrl:"index.html",logoUrl:"assets/grave-robber-skull.png",logoAlt:"Grave Robber",logoSize:"52px",logoPlacement:"right",width:"100%",maxWidth:"none",margin:"0",padding:"18px 28px",navPlacement:"center",headerPosition:"full",buttons:r},a={showBack:"hide",leftButtons:[t]},i={id:`graverobber-${e}-popup-1`,showInEditor:"no",exitTriggerDistance:70,theme:"toxic",animationStyle:"pop",eyebrow:"WELCOME TO THE GRAVE",title:"Join the Army of the Dead",body:"You have crossed into Grave Robber territory. Join the Army of the Dead and march with us into the noise.",align:"center",titleColor:"#00ff04",titleFont:"Creepster, cursive",titleSize:"clamp(44px, 8vw, 92px)",titleShadow:"0 0 18px #00ff04, 0 0 42px rgba(187,0,255,.85)",bodyColor:"#ffffff",bodyFont:"Special Elite, cursive",bodySize:"20px",backgroundColor:"transparent",cardBackground:"linear-gradient(135deg, rgba(0,0,0,.92), rgba(32,0,46,.88))",borderColor:"#bb00ff",glowColor:"#00ff04",radius:"28px",maxWidth:"920px",paddingY:70,paddingX:24,customFontUrl:"",noThanksText:"No Thanks",noThanksBackgroundColor:"transparent",noThanksTextColor:"#ffffff",noThanksBorderColor:"rgba(255,255,255,.45)",buttons:[{text:"Join the Army of the Dead",url:"signup.html",backgroundColor:"#bb00ff",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"16px",borderWidth:"2px",borderColor:"#00ff04",boxShadow:"0 0 24px rgba(0,255,4,.75)",textTransform:"uppercase",radius:"999px",padding:"14px 28px"}]};return e==="contact"?[{type:"HeaderNav",props:{id:"graverobber-contact-header-1",backgroundColor:"#000000",lineColor:"#bb00ff",lineShadow:"0 0 24px #bb00ff",showBack:"show",backText:"Back",backUrl:"index.html",logoUrl:"assets/grave-robber-skull.png",logoAlt:"Grave Robber",logoSize:"52px",logoPlacement:"right",width:"100%",maxWidth:"none",margin:"0",padding:"18px 28px",navPlacement:"center",headerPosition:"full",buttons:r,...a}},{type:"ContactForm",props:{id:"graverobber-contact-form-1",formAction:"https://docs.google.com/forms/d/e/1FAIpQLSfvFy-I4z36zqLz4y4boVhM4eTL7KEb5Ip1It7OZyFfxlRgMw/formResponse",nameEntry:"entry.111991046",emailEntry:"entry.709491702",messageEntry:"entry.905150677",nameLabel:"What are you called?",emailLabel:"What is your email?",messageLabel:"What do you want?",messageRows:7,buttonText:"Send Message",successMessage:"Great, your message was sent and we will get back to you shortly.",backgroundColor:"#000000",paddingY:30,paddingX:24,paddingBottom:80}},{type:"GraveRobberSocial",props:{id:"graverobber-contact-social-1",title:"Follow Grave Robber",titleColor:"#00ff04",titleFont:"Oswald, sans-serif",titleSize:"1rem",backgroundColor:"#000000",textColor:"#00ff04",paddingY:50,paddingX:24,links:[{platform:"facebook",label:"Facebook",url:"https://www.facebook.com/graverobberpunk",iconColor:"#bb00ff",backgroundColor:"#000000",borderColor:"#00ff04"},{platform:"instagram",label:"Instagram",url:"https://www.instagram.com/graverobberpunk",iconColor:"#bb00ff",backgroundColor:"#000000",borderColor:"#00ff04"},{platform:"spotify",label:"Spotify",url:"https://open.spotify.com/artist/4D34aUp0OsDs8mAEWPIP7c",iconColor:"#bb00ff",backgroundColor:"#000000",borderColor:"#00ff04"},{platform:"youtube",label:"YouTube",url:"https://www.youtube.com/@GraveRobberPunk",iconColor:"#bb00ff",backgroundColor:"#000000",borderColor:"#00ff04"},{platform:"email",label:"Email",url:"mailto:graverobber.punk@gmail.com",iconColor:"#bb00ff",backgroundColor:"#000000",borderColor:"#00ff04"}]}}]:e==="shows"?[{type:"HeaderNav",props:{id:"graverobber-shows-header-1",backgroundColor:"rgba(0,0,0,.86)",lineColor:"rgba(198,40,40,.65)",lineShadow:"0 0 24px rgba(198,40,40,.28)",showBack:"show",backText:"Back",backUrl:"index.html",logoUrl:"assets/grave-robber-skull.png",logoAlt:"Grave Robber",logoSize:"52px",logoPlacement:"right",width:"100%",maxWidth:"none",margin:"0",padding:"18px 28px",navPlacement:"center",headerPosition:"full",buttons:r,...a}},{type:"TextBlock",props:{id:"graverobber-shows-title-1",eyebrow:"Live with the Army of the Dead",eyebrowColor:"#c62828",eyebrowFont:"Oswald, sans-serif",eyebrowSize:"1rem",eyebrowWeight:"700",title:"Shows",titleSize:"4rem",titleColor:"#ffffff",titleFont:"Creepster, cursive",titleWeight:"700",body:"Join the Army of the Dead to hear when the next haunt is announced.",bodySize:"1.1rem",bodyColor:"#d6d6d6",bodyFont:"Special Elite, cursive",bodyWeight:"400",align:"center",maxWidth:"850px",backgroundColor:"transparent",textColor:"#ffffff",paddingY:70,paddingX:24,customFontUrl:"",buttons:[{text:"Get Notified",url:"signup.html",backgroundColor:"#c62828",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"16px",borderWidth:"0px",borderColor:"transparent",boxShadow:"0 0 24px rgba(198,40,40,.35)",textTransform:"uppercase",radius:"999px",padding:"16px 34px"}]}},{type:"Embed",props:{html:'<div class="gr-bandsintown-widget"><style>.gr-bandsintown-widget,.gr-bandsintown-widget .bit-widget,.gr-bandsintown-widget [class*="bit-event"]{background:transparent!important;color:#ffffff!important}.gr-bandsintown-widget a,.gr-bandsintown-widget [class*="bit-date"],.gr-bandsintown-widget [class*="bit-location"],.gr-bandsintown-widget [class*="bit-venue"]{color:#ffffff!important}.gr-bandsintown-widget button,.gr-bandsintown-widget [class*="bit-button"],.gr-bandsintown-widget [class*="bit-cta"],.gr-bandsintown-widget a[class*="bit-rsvp"],.gr-bandsintown-widget a[class*="bit-offers"]{background:#000000!important;color:#bb00ff!important;border:1px solid #00ff04!important;box-shadow:0 0 24px rgba(0,255,4,.75)!important}</style><script charset="utf-8" src="https://widgetv3.bandsintown.com/main.min.js"><\/script><a class="bit-widget-initializer" data-artist-name="id_370380" data-app-id="b6eb44f4c7b30b8e877c0dffa1414f0a" data-background-color="rgba(0,0,0,0)" data-text-color="#ffffff" data-link-color="#00ff04" data-link-text-color="#bb00ff" data-separator-color="rgba(0,255,4,.55)" data-popup-background-color="#000000" data-event-ticket-cta-text-color="#bb00ff" data-event-ticket-cta-bg-color="#000000" data-event-ticket-cta-border-color="#00ff04" data-event-ticket-cta-border-width="1px" data-event-rsvp-cta-text-color="#bb00ff" data-event-rsvp-cta-bg-color="#000000" data-event-rsvp-cta-border-color="#00ff04" data-event-rsvp-cta-border-width="1px" data-follow-section-cta-text-color="#bb00ff" data-follow-section-cta-bg-color="#000000" data-follow-section-cta-border-color="#00ff04" data-follow-section-cta-border-width="1px" data-play-my-city-cta-text-color="#bb00ff" data-play-my-city-cta-bg-color="#000000" data-play-my-city-cta-border-color="#00ff04" data-play-my-city-cta-border-width="1px"></a></div>',backgroundColor:"transparent",paddingY:20,paddingX:24}}]:e==="signup"?[{type:"HeaderNav",props:{id:"graverobber-signup-header-1",backgroundColor:"rgba(0,0,0,.86)",lineColor:"rgba(198,40,40,.65)",lineShadow:"0 0 24px rgba(198,40,40,.28)",showBack:"show",backText:"Back",backUrl:"index.html",logoUrl:"assets/grave-robber-skull.png",logoAlt:"Grave Robber",logoSize:"52px",logoPlacement:"right",width:"100%",maxWidth:"none",margin:"0",padding:"18px 28px",navPlacement:"center",headerPosition:"full",buttons:r,...a}},{type:"TextBlock",props:{id:"graverobber-signup-title-1",eyebrow:"Join the underground",eyebrowColor:"#c62828",eyebrowFont:"Oswald, sans-serif",eyebrowSize:"1rem",eyebrowWeight:"700",title:"Army of the Dead",titleSize:"4rem",titleColor:"#ffffff",titleFont:"Creepster, cursive",titleWeight:"700",body:"Get show updates, music news, and dispatches from the grave.",bodySize:"1.1rem",bodyColor:"#d6d6d6",bodyFont:"Special Elite, cursive",bodyWeight:"400",align:"center",maxWidth:"850px",backgroundColor:"transparent",textColor:"#ffffff",paddingY:70,paddingX:24,customFontUrl:"",buttons:[]}},{type:"Embed",props:{html:'<form id="signup-form" class="custom-form"><label>Name<input type="text" name="name" required></label><label>Email<input type="email" name="email" required></label><label>Phone<input type="tel" name="phone"></label><label>Message<textarea name="message" rows="5"></textarea></label><button type="submit">Join the Army of the Dead</button><p id="signup-status"></p></form>',backgroundColor:"transparent",paddingY:20,paddingX:24}}]:e==="about"?[{type:"HeaderNav",props:{id:"graverobber-about-header-1",...n,...a}},{type:"WelcomeHorrorMessage",props:i},{type:"TextBlock",props:{id:"graverobber-about-empty-1",eyebrow:"",title:"",body:"",align:"center",maxWidth:"850px",backgroundColor:"transparent",textColor:"#ffffff",paddingY:120,paddingX:24,customFontUrl:"",buttons:[]}}]:e==="graffiti-wall"?[{type:"HeaderNav",props:{id:"graverobber-graffiti-header-1",...n,...a}},{type:"GraffitiWall",props:{id:"graverobber-graffiti-wall-1",eyebrow:"Fan wall",title:"Graffiti Wall",body:"Write a message, upload a photo, or paint something for the band. Submissions appear after admin approval.",nameLabel:"Your name",messageLabel:"Your message",photoLabel:"Photo with the band",paintLabel:"Paint",submitText:"Send for Approval",successMessage:"Submitted. It will appear after admin approval.",backgroundColor:"transparent",textColor:"#ffffff",accentColor:"#00ff04",panelBackground:"rgba(0,0,0,.72)",borderColor:"#bb00ff",paddingY:70,paddingX:24}}]:e==="contact"?[{type:"HeaderNav",props:{id:"graverobber-contact-header-1",backgroundColor:"rgba(0,0,0,.86)",lineColor:"#00ff04",lineShadow:"0 0 24px #00ff04",showBack:"show",backText:"Back",backUrl:"index.html",logoUrl:"assets/grave-robber-skull.png",logoAlt:"Grave Robber",logoSize:"52px",logoPlacement:"right",width:"100%",maxWidth:"none",margin:"0",padding:"18px 28px",navPlacement:"center",headerPosition:"full",buttons:r,...a}},{type:"TextBlock",props:{id:"graverobber-contact-title-1",eyebrow:"Booking / Contact",eyebrowColor:"#00ff04",eyebrowFont:"Oswald, sans-serif",eyebrowSize:"1rem",eyebrowWeight:"700",title:"Contact Grave Robber",titleSize:"4rem",titleColor:"#bb00ff",titleFont:"Creepster, cursive",titleWeight:"700",body:"Use the form below for booking, merch, press, and general contact.",bodySize:"1.1rem",bodyColor:"#ffffff",bodyFont:"Oswald, sans-serif",bodyWeight:"400",align:"center",maxWidth:"850px",backgroundColor:"#000000",textColor:"#ffffff",paddingY:70,paddingX:24,customFontUrl:"",buttons:[]}},{type:"Embed",props:{html:'<div class="graverobber-contact-form-wrap"><iframe class="graverobber-contact-form" src="https://docs.google.com/forms/d/e/1FAIpQLSfvFy-I4z36zqLz4y4boVhM4eTL7KEb5Ip1It7OZyFfxlRgMw/viewform?embedded=true" width="640" height="721" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe></div>',backgroundColor:"#000000",paddingY:30,paddingX:24}}]:e==="merch"?[{type:"HeaderNav",props:{id:"graverobber-merch-header-1",backgroundColor:"rgba(0,0,0,.86)",lineColor:"rgba(198,40,40,.65)",lineShadow:"0 0 24px rgba(198,40,40,.28)",showBack:"show",backText:"Back",backUrl:"index.html",logoUrl:"assets/grave-robber-skull.png",logoAlt:"Grave Robber",logoSize:"52px",logoPlacement:"right",width:"100%",maxWidth:"none",margin:"0",padding:"18px 28px",navPlacement:"center",headerPosition:"full",buttons:r,...a}},{type:"TextBlock",props:{id:"graverobber-merch-title-1",eyebrow:"Official Grave Robber merch",title:"Merch",body:"Add merch items, store links, photos, and announcements here.",align:"center",maxWidth:"850px",backgroundColor:"transparent",textColor:"#ffffff",paddingY:70,paddingX:24,titleColor:"#ffffff",titleFont:"Creepster, cursive",titleSize:"4rem",bodyColor:"#d6d6d6",bodyFont:"Oswald, sans-serif",bodySize:"1.1rem",buttons:[{text:"Visit Merch Store",url:"https://graverobber.bigcartel.com/",backgroundColor:"#c62828",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"16px",borderWidth:"0px",borderColor:"transparent",boxShadow:"0 0 24px rgba(198,40,40,.35)",textTransform:"uppercase",radius:"999px",padding:"16px 34px"}]}}]:e==="gallery"?[{type:"HeaderNav",props:{id:"graverobber-gallery-header-1",backgroundColor:"rgba(0,0,0,.86)",lineColor:"rgba(198,40,40,.65)",lineShadow:"0 0 24px rgba(198,40,40,.28)",showBack:"show",backText:"Back",backUrl:"index.html",logoUrl:"assets/grave-robber-skull.png",logoAlt:"Grave Robber",logoSize:"52px",logoPlacement:"right",width:"100%",maxWidth:"none",margin:"0",padding:"18px 28px",navPlacement:"center",headerPosition:"full",buttons:r,...a}},{type:"GalleryGrid",props:{title:"",id:"graverobber-gallery-grid-1",titleColor:"#ffffff",titleFont:"Oswald, sans-serif",titleSize:"2.5rem",backgroundColor:"transparent",textColor:"#ffffff",paddingY:40,paddingX:24,layoutMode:"freeform",canvasHeight:"920px",columns:3,gap:18,images:[]}}]:[{type:"HeaderNav",props:{id:"graverobber-home-header-1",...n,leftButtons:[t]}},{type:"GraveRobberHero",props:{id:"graverobber-home-hero-1",title:"Grave Robber",subtitle:"AMERICAN HORROR PUNK",body:"Horror punk from beyond the grave. Shows, music, merch, booking, and updates.",imageUrl:"assets/grave-robber-skull.png",imageAlt:"Grave Robber skull logo",layout:"image-top",imageWidth:"300px",imageRadius:"0px",imageShadow:"0 0 90px rgba(198,40,40,.38)",titleSize:"44px",titleColor:"#f5f0e6",titleFont:"Oswald, sans-serif",titleWeight:"700",subtitleSize:"18px",subtitleColor:"#e52b2b",subtitleFont:"Oswald, sans-serif",subtitleWeight:"700",subtitleLetterSpacing:".45em",subtitleTransform:"uppercase",bodySize:"18px",bodyColor:"#cfd3d6",bodyFont:"Oswald, sans-serif",bodyWeight:"400",backgroundColor:"transparent",textColor:"#ffffff",paddingY:120,paddingX:24,maxWidth:900,gap:34,buttons:[{text:"Shows",url:"shows.html",backgroundColor:"#c62828",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"16px",borderWidth:"0px",borderColor:"transparent",boxShadow:"0 0 24px rgba(198,40,40,.45)",textTransform:"uppercase",radius:"999px",padding:"16px 34px"},{text:"Music",url:"#music",backgroundColor:"#8b3df4",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"16px",borderWidth:"0px",borderColor:"transparent",boxShadow:"0 0 24px rgba(57,255,20,.45)",textTransform:"uppercase",radius:"999px",padding:"16px 34px"},{text:"Join the Army of the Dead",url:"signup.html",backgroundColor:"#b000ff",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"16px",borderWidth:"0px",borderColor:"transparent",boxShadow:"0 0 24px rgba(57,255,20,.55)",textTransform:"uppercase",radius:"999px",padding:"16px 34px"},{text:"About",url:"about.html",backgroundColor:"#8b3df4",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"16px",borderWidth:"0px",borderColor:"transparent",boxShadow:"none",textTransform:"uppercase",radius:"999px",padding:"16px 34px"},{text:"Gallery",url:"gallery.html",backgroundColor:"#8b3df4",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"16px",borderWidth:"0px",borderColor:"transparent",boxShadow:"none",textTransform:"uppercase",radius:"999px",padding:"16px 34px"},{text:"Merch",url:"merch.html",backgroundColor:"#8b3df4",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"16px",borderWidth:"0px",borderColor:"transparent",boxShadow:"none",textTransform:"uppercase",radius:"999px",padding:"16px 34px"},{text:"Graffiti Wall",url:"graffiti-wall.html",backgroundColor:"#8b3df4",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"16px",borderWidth:"0px",borderColor:"transparent",boxShadow:"none",textTransform:"uppercase",radius:"999px",padding:"16px 34px"},{text:"Buy the Band a Coffee",url:"https://www.paypal.com/donate/?business=graverobber.punk%40gmail.com&currency_code=USD",backgroundColor:"#000000",textColor:"#00ff04",fontFamily:"Oswald, sans-serif",fontSize:"16px",borderWidth:"1px",borderColor:"#00ff04",boxShadow:"0 0 24px rgba(57,255,20,.45)",textTransform:"uppercase",radius:"999px",padding:"16px 34px"},{text:"Booking",url:"contact.html",backgroundColor:"#b000ff",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"16px",borderWidth:"0px",borderColor:"transparent",boxShadow:"0 0 24px rgba(57,255,20,.45)",textTransform:"uppercase",radius:"999px",padding:"16px 34px"}]}},{type:"Spacer",props:{id:"graverobber-home-divider-space-1",height:40,backgroundColor:"transparent"}},{type:"GraveRobberSocial",props:{id:"graverobber-home-social-1",title:"Follow Grave Robber",titleColor:"#ffffff",titleFont:"Oswald, sans-serif",titleSize:"1rem",backgroundColor:"transparent",textColor:"#ffffff",paddingY:50,paddingX:24,links:[{platform:"facebook",label:"Facebook",url:"https://www.facebook.com/graverobberpunk",iconColor:"#ffffff",backgroundColor:"transparent",borderColor:"rgba(255,255,255,.35)"},{platform:"instagram",label:"Instagram",url:"https://www.instagram.com/graverobberpunk",iconColor:"#ffffff",backgroundColor:"transparent",borderColor:"rgba(255,255,255,.35)"},{platform:"spotify",label:"Spotify",url:"https://open.spotify.com/artist/4D34aUp0OsDs8mAEWPIP7c",iconColor:"#ffffff",backgroundColor:"transparent",borderColor:"rgba(255,255,255,.35)"}]}}]}function Pt(e="home"){return{root:{props:{title:`Grave Robber ${e.charAt(0).toUpperCase()+e.slice(1)}`,...xe}},content:Ft(e)}}function jt(){if(typeof window>"u")return"home";const e=window.location.pathname.split("/").pop()||"index.html";return e==="index.html"||e===""?"home":e.replace(".html","")}Pt(jt());const q={root:{fields:{title:{type:"text",label:"Page Title"},backgroundStyle:{type:"select",label:"Page Background Style",options:$t},pageBaseColor:p("Base Color"),pageSecondColor:p("Second Color"),pageThirdColor:p("Third / Vignette Color"),pageGlowColor:p("Main Glow / Ombre Color"),pageSecondGlowColor:p("Second Glow Color"),pageThirdGlowColor:p("Third Glow / Darkness Color"),pageTextColor:p("Default Page Text Color"),pageGradientAngle:{type:"text",label:"Gradient Direction / Angle",placeholder:"Example: 180deg, 135deg, 90deg"},pageGlowPosition:{type:"text",label:"Main Glow Position",placeholder:"Example: center 18%, top center, left 20%"},pageGlowSize:{type:"text",label:"Main Glow Spread / Size",placeholder:"Example: 34%, 50%, 420px"},pageSecondGlowPosition:{type:"text",label:"Second Glow Position",placeholder:"Example: center 70%, right center"},pageSecondGlowSize:{type:"text",label:"Second Glow Spread / Size",placeholder:"Example: 45%, 600px"},pageThirdGlowPosition:{type:"text",label:"Third Glow Position",placeholder:"Example: center center, bottom center"},pageThirdGlowSize:{type:"text",label:"Third Glow Spread / Size",placeholder:"Example: 75%, 900px"},customBackgroundCss:{type:"textarea",label:"Custom Background CSS",placeholder:"Example: radial-gradient(circle, red, black)"}},render:({children:e,...t})=>o.jsx("div",{"data-page":t.pageName||void 0,style:{minHeight:"100vh",background:Bt(t),color:t.pageTextColor||"#f5f0e6"},children:e})},components:{WelcomeHorrorMessage:{label:"01 Site Block: Animated Horror Welcome Message",fields:{customFontUrl:P("External Font URL For This Block"),theme:{type:"select",label:"Design Theme",options:[{label:"Toxic Grave Pop-Out",value:"toxic"},{label:"Purple Bounce",value:"purple"},{label:"Black Fog Fade",value:"fog"},{label:"Slasher Slide Left",value:"slide-left"},{label:"Possessed Slide Top",value:"slide-top"},{label:"Particle Summoning",value:"particles"},{label:"Glitch Demon Signal",value:"glitch"},{label:"Neon Tomb Pulse",value:"tomb"}]},animationStyle:{type:"select",label:"Animation",options:[{label:"Pop Out",value:"pop"},{label:"Bounce Out",value:"bounce"},{label:"Fade In",value:"fade"},{label:"Slide From Left",value:"left"},{label:"Slide From Right",value:"right"},{label:"Drop From Top",value:"top"},{label:"Rise From Bottom",value:"bottom"},{label:"Particles Forming",value:"particles"},{label:"Glitch Flicker",value:"glitch"}]},showInEditor:{type:"select",label:"Show While Editing",options:[{label:"Yes - show so I can design it",value:"yes"},{label:"No - only trigger on exit intent",value:"no"}]},exitTriggerDistance:{type:"number",label:"Exit Trigger Distance From Top"},eyebrow:{type:"text",label:"Small Top Text"},title:{type:"text",label:"Main Welcome Text"},body:{type:"textarea",label:"Message Text"},align:{type:"select",label:"Text Alignment",options:[{label:"Left",value:"left"},{label:"Center",value:"center"},{label:"Right",value:"right"}]},titleColor:p("Title Color"),titleFont:w("Title Font"),titleSize:{type:"text",label:"Title Font Size",placeholder:"48px, 5rem, 9vw"},titleShadow:{type:"text",label:"Title Glow / Shadow",placeholder:"0 0 24px #00ff04"},bodyColor:p("Body Color"),bodyFont:w("Body Font"),bodySize:{type:"text",label:"Body Font Size",placeholder:"18px"},backgroundColor:p("Section Background"),cardBackground:p("Message Box Background"),borderColor:p("Border Color"),glowColor:p("Glow Color"),radius:{type:"text",label:"Rounded Corners",placeholder:"28px"},maxWidth:{type:"text",label:"Message Box Width",placeholder:"900px"},paddingY:{type:"number",label:"Top/Bottom Padding"},paddingX:{type:"number",label:"Left/Right Padding"},buttons:S,noThanksText:{type:"text",label:"No Thanks Button Text"},noThanksBackgroundColor:p("No Thanks Background"),noThanksTextColor:p("No Thanks Text Color"),noThanksBorderColor:p("No Thanks Border Color")},defaultProps:{showInEditor:"yes",exitTriggerDistance:70,theme:"toxic",animationStyle:"pop",eyebrow:"WELCOME TO THE GRAVE",title:"Join the Army of the Dead",body:"You have crossed into Grave Robber territory. Join the Army of the Dead and march with us into the noise.",align:"center",titleColor:"#00ff04",titleFont:"Creepster, cursive",titleSize:"clamp(44px, 8vw, 92px)",titleShadow:"0 0 18px #00ff04, 0 0 42px rgba(187,0,255,.85)",bodyColor:"#ffffff",bodyFont:"Special Elite, cursive",bodySize:"20px",backgroundColor:"transparent",cardBackground:"linear-gradient(135deg, rgba(0,0,0,.92), rgba(32,0,46,.88))",borderColor:"#bb00ff",glowColor:"#00ff04",radius:"28px",maxWidth:"920px",paddingY:70,paddingX:24,customFontUrl:"",noThanksText:"No Thanks",noThanksBackgroundColor:"transparent",noThanksTextColor:"#ffffff",noThanksBorderColor:"rgba(255,255,255,.45)",buttons:[{text:"Join the Army of the Dead",url:"signup.html",backgroundColor:"#bb00ff",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"16px",borderWidth:"2px",borderColor:"#00ff04",boxShadow:"0 0 24px rgba(0,255,4,.75)",textTransform:"uppercase",radius:"999px",padding:"16px 34px"}]},render:e=>{const[t,r]=G.useState(e.showInEditor!=="no");return G.useEffect(()=>{if(e.showInEditor!=="no"){r(!0);return}r(!1);let n=null,a=!1,i=!1;function s(d){const l=Number(e.exitTriggerDistance||70),b=Math.max(l+180,260);d.clientY>=b&&(a=!0);const h=n!==null&&d.clientY<n,x=d.clientY<=l;!i&&a&&h&&x&&(i=!0,r(!0)),n=d.clientY}return document.addEventListener("mousemove",s),()=>document.removeEventListener("mousemove",s)},[e.showInEditor,e.exitTriggerDistance]),t?o.jsxs("section",{className:"puck-section gr-welcome-section gr-exit-popup-wrap",children:[j(e.customFontUrl),o.jsx("style",{children:`
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

              .gr-theme-purple{background:linear-gradient(145deg,rgba(17,0,26,.96),rgba(0,0,0,.94))!important;border-color:#bb00ff!important;box-shadow:0 0 42px rgba(187,0,255,.75),inset 0 0 42px rgba(0,255,4,.18)!important;}
              .gr-theme-purple .gr-welcome-title{color:#bb00ff!important;letter-spacing:.06em;}

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
            `}),o.jsx("div",{className:"gr-exit-popup-backdrop",onClick:()=>r(!1)}),o.jsxs("div",{className:`gr-welcome-card gr-exit-popup-card gr-theme-${e.theme||"toxic"} gr-anim-${e.animationStyle||"pop"}`,style:{"--gr-bg":e.cardBackground||"rgba(0,0,0,.92)","--gr-border":e.borderColor||"#bb00ff","--gr-glow":e.glowColor||"#00ff04","--gr-radius":e.radius||"28px","--gr-width":e.maxWidth||"920px","--gr-align":e.align||"center","--gr-title":e.titleColor||"#00ff04","--gr-title-font":e.titleFont||"Creepster, cursive","--gr-title-size":e.titleSize||"clamp(44px, 8vw, 92px)","--gr-title-shadow":e.titleShadow||"0 0 18px #00ff04","--gr-body":e.bodyColor||"#ffffff","--gr-body-font":e.bodyFont||"Special Elite, cursive","--gr-body-size":e.bodySize||"20px"},children:[o.jsx("button",{className:"gr-exit-popup-close",onClick:()=>r(!1),children:"×"}),(e.theme==="particles"||e.animationStyle==="particles")&&o.jsx("div",{className:"gr-welcome-particles","aria-hidden":"true",children:Array.from({length:8}).map((n,a)=>o.jsx("span",{},a))}),o.jsxs("div",{className:"gr-welcome-content",children:[e.eyebrow&&o.jsx("p",{className:"gr-welcome-eyebrow",children:e.eyebrow}),e.title&&o.jsx("h2",{className:"gr-welcome-title",children:e.title}),e.body&&o.jsx("p",{className:"gr-welcome-body",children:e.body}),(e.buttons||[]).length>0&&o.jsxs("div",{className:"puck-buttons",children:[(e.buttons||[]).map((n,a)=>o.jsx(T,{button:n,index:a},a)),e.noThanksText&&o.jsx("button",{type:"button",className:"puck-btn gr-exit-popup-no-thanks",onClick:()=>r(!1),style:{background:e.noThanksBackgroundColor||"transparent",color:e.noThanksTextColor||"#ffffff",border:`1px solid ${e.noThanksBorderColor||"rgba(255,255,255,.45)"}`},children:e.noThanksText})]})]})]})]}):o.jsx("div",{className:"puck-section",style:{padding:"4px 12px",background:"rgba(0,0,0,.85)",color:"#00ff04",border:"1px dashed #bb00ff",fontSize:"12px",textAlign:"center"},children:"Exit-intent horror popup is hidden until mouse moves toward browser close area."})}},GraveRobberHero:{label:"01 Site Block: Grave Robber Main Horror Hero",fields:{title:{type:"text",label:"Title"},subtitle:{type:"text",label:"Subtitle"},body:{type:"textarea",label:"Body Text"},imageUrl:k("Image"),imageAlt:{type:"text",label:"Image Alt Text"},layout:{type:"select",label:"Layout",options:[{label:"Centered",value:"center"},{label:"Image Top",value:"image-top"},{label:"Text Left / Image Right",value:"text-left"},{label:"Text Right / Image Left",value:"text-right"}]},imageWidth:F("Image Width",{placeholder:"Example: 900px"}),mobileImageWidth:F("Mobile Image Width",{placeholder:"Example: 70vw or 280px"}),imageRadius:F("Image Rounded Corners",{placeholder:"Example: 50%"}),imageShadow:{type:"text",label:"Image Shadow / Glow CSS",placeholder:"Example: 0 0 40px currentColor"},titleSize:F("Title Font Size",{placeholder:"Example: 72px"}),titleColor:p("Title Color"),titleFont:w("Title Font"),subtitleColor:p("Subtitle Color"),bodyColor:p("Body Color"),backgroundColor:p("Section Background"),textColor:p("Default Text Color"),paddingY:{type:"number",label:"Top/Bottom Padding"},paddingX:{type:"number",label:"Left/Right Padding"},buttons:S},defaultProps:{title:"Grave Robber",subtitle:"AMERICAN HORROR PUNK",body:"Horror punk from beyond the grave. Shows, music, merch, booking, and updates.",imageUrl:"assets/grave-robber-skull.png",imageAlt:"Grave Robber skull logo",layout:"center",imageWidth:"300px",mobileImageWidth:"70vw",imageRadius:"0px",imageShadow:"0 0 55px rgba(198,40,40,.45)",titleSize:"80px",titleColor:"#f2f2f2",titleFont:"Creepster, cursive",subtitleColor:"#c62828",bodyColor:"#d6d6d6",backgroundColor:"transparent",textColor:"#ffffff",paddingY:70,paddingX:24,buttons:[{text:"Shows",url:"shows.html",backgroundColor:"#c62828",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"16px",borderWidth:"0px",borderColor:"transparent",boxShadow:"0 0 24px rgba(198,40,40,.35)",textTransform:"uppercase",radius:"999px",padding:"16px 34px"},{text:"Join the Army of the Dead",url:"signup.html",backgroundColor:"transparent",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"16px",borderWidth:"1px",borderColor:"rgba(255,255,255,.35)",radius:"999px",padding:"16px 34px"}]},render:e=>q.components.Hero.render(e)},GraveRobberLogo:{label:"01 Site Block: Grave Robber Stacked Logo",fields:{imageUrl:k("Logo Image"),imageAlt:{type:"text",label:"Image Alt Text"},width:F("Image Width",{placeholder:"Example: 520px"}),radius:F("Rounded Corners",{placeholder:"Example: 12px"}),shadow:{type:"text",label:"Image Shadow / Glow CSS"},align:{type:"select",label:"Image Placement",options:wt},backgroundColor:p("Section Background"),paddingY:{type:"number",label:"Top/Bottom Padding"},paddingX:{type:"number",label:"Left/Right Padding"}},defaultProps:{imageUrl:"assets/grave-robber-logo-stacked.png",imageAlt:"Grave Robber logo",width:"520px",radius:"12px",shadow:"0 20px 60px rgba(0,0,0,.55)",align:"center",backgroundColor:"transparent",paddingY:30,paddingX:24},render:e=>q.components.ImageBlock.render(e)},GraveRobberSocial:{label:"01 Site Block: Grave Robber Social / Merch Links",fields:{title:{type:"text",label:"Title"},titleColor:p("Title Color"),titleFont:w("Title Font"),titleSize:{type:"text",label:"Title Font Size"},backgroundColor:p("Section Background"),paddingY:{type:"number",label:"Top/Bottom Padding"},paddingX:{type:"number",label:"Left/Right Padding"},links:{type:"array",label:"Links",arrayFields:{platform:{type:"select",label:"Platform",options:ie},label:{type:"text",label:"Label"},url:{type:"text",label:"URL"},iconColor:p("Icon Color"),backgroundColor:p("Icon Background"),borderWidth:{type:"select",label:"Icon Border",options:[{label:"No Border",value:"0px"},{label:"Thin Border",value:"1px"},{label:"Medium Border",value:"2px"},{label:"Thick Border",value:"4px"}]},borderColor:p("Icon Border"),boxShadow:{type:"text",label:"Icon Glow / Shadow",placeholder:"0 0 24px #00ff04"},radius:{type:"text",label:"Icon Rounded Corners",placeholder:"999px"},size:{type:"text",label:"Icon Button Size",placeholder:"44px"},svgSize:{type:"text",label:"Symbol Size",placeholder:"22px"},padding:{type:"text",label:"Icon Padding",placeholder:"0px"}},defaultItemProps:{platform:"custom",label:"Link",url:"#",iconColor:"#bb00ff",backgroundColor:"#000000",borderWidth:"1px",borderColor:"#00ff04",boxShadow:"0 0 24px #00ff04",radius:"999px",size:"44px",svgSize:"22px",padding:"0px"}}},defaultProps:{title:"Follow Grave Robber",titleColor:"#ffffff",titleFont:"Oswald, sans-serif",titleSize:"1rem",backgroundColor:"transparent",paddingY:50,paddingX:24,links:[{platform:"facebook",label:"Facebook",url:"https://www.facebook.com/graverobberpunk",iconColor:"#ffffff",backgroundColor:"rgba(198,40,40,.18)",borderColor:"rgba(198,40,40,.65)"},{platform:"instagram",label:"Instagram",url:"https://www.instagram.com/graverobberpunk",iconColor:"#ffffff",backgroundColor:"rgba(198,40,40,.18)",borderColor:"rgba(198,40,40,.65)"},{platform:"spotify",label:"Spotify",url:"https://open.spotify.com/artist/4D34aUp0OsDs8mAEWPIP7c",iconColor:"#ffffff",backgroundColor:"rgba(198,40,40,.18)",borderColor:"rgba(198,40,40,.65)"}]},render:e=>q.components.SocialIcons.render(e)},HeaderNav:{label:"02 Add Block: Header / Page Navigation",fields:{backgroundColor:p("Header Background"),lineColor:p("Bottom Line Color"),lineShadow:{type:"text",label:"Bottom Line Shadow",placeholder:"0 0 24px rgba(77,198,225,.22)"},showBack:{type:"select",label:"Back Button",options:[{label:"Show",value:"show"},{label:"Hide",value:"hide"}]},backText:{type:"text",label:"Back Text"},backUrl:{type:"text",label:"Back Link"},logoUrl:k("Header Logo"),logoAlt:{type:"text",label:"Logo Alt Text"},logoSize:{type:"text",label:"Logo Size",placeholder:"45px"},logoPlacement:{type:"select",label:"Logo Placement",options:[{label:"Left",value:"left"},{label:"Right",value:"right"}]},logoBackgroundColor:p("Logo Background Color"),logoBorderWidth:{type:"text",label:"Logo Border Width",placeholder:"0px or 1px"},logoBorderColor:p("Logo Border Color"),logoRadius:{type:"text",label:"Logo Rounded Corners",placeholder:"999px or 0px"},logoPadding:{type:"text",label:"Logo Padding",placeholder:"0px"},logoBoxShadow:{type:"text",label:"Logo Shadow / Glow",placeholder:"0 0 24px #00ff04"},logoImageShadow:{type:"text",label:"Logo Image Shadow / Glow",placeholder:"0 0 18px #00ff04"},width:{type:"text",label:"Header Width",placeholder:"100%, 1200px, 80vw"},maxWidth:{type:"text",label:"Header Max Width",placeholder:"none or 1200px"},margin:{type:"text",label:"Header Margin",placeholder:"0 auto"},padding:{type:"text",label:"Header Padding",placeholder:"22px 40px"},navPlacement:{type:"select",label:"Button Placement",options:[{label:"Left",value:"left"},{label:"Center",value:"center"},{label:"Right",value:"right"}]},headerPosition:{type:"select",label:"Header Stretch Mode",options:[{label:"Normal",value:"normal"},{label:"Full Browser Width",value:"full"}]},leftButtons:{...S,label:"Far Left Header Buttons"},buttons:S},defaultProps:{backgroundColor:"rgba(0,0,0,.72)",lineColor:"rgba(77,198,225,.45)",lineShadow:"0 0 24px rgba(77,198,225,.22)",showBack:"show",backText:"Back",backUrl:"index.html",logoUrl:"assets/grave-robber-skull.png",logoAlt:"Grave Robber Logo",logoSize:"45px",logoPlacement:"left",logoBackgroundColor:"transparent",logoBorderWidth:"0px",logoBorderColor:"transparent",logoRadius:"999px",logoPadding:"0px",logoBoxShadow:"none",logoImageShadow:"none",width:"100%",maxWidth:"none",margin:"0",padding:"22px 40px",navPlacement:"right",headerPosition:"full",leftButtons:[],buttons:[{text:"Home",url:"index.html",backgroundColor:"#000000",textColor:"#bb00ff",fontFamily:"Oswald, sans-serif",fontSize:"14px",borderWidth:"1px",borderColor:"#00ff04",boxShadow:"0 0 24px #00ff04",textTransform:"uppercase",radius:"999px",padding:"10px 16px"},{text:"Shows",url:"shows.html",backgroundColor:"#000000",textColor:"#bb00ff",fontFamily:"Oswald, sans-serif",fontSize:"14px",borderWidth:"1px",borderColor:"#00ff04",boxShadow:"0 0 24px #00ff04",textTransform:"uppercase",radius:"999px",padding:"10px 16px"},{text:"About",url:"about.html",backgroundColor:"#000000",textColor:"#bb00ff",fontFamily:"Oswald, sans-serif",fontSize:"14px",borderWidth:"1px",borderColor:"#00ff04",boxShadow:"0 0 24px #00ff04",textTransform:"uppercase",radius:"999px",padding:"10px 16px"},{text:"Graffiti Wall",url:"graffiti-wall.html",backgroundColor:"#000000",textColor:"#bb00ff",fontFamily:"Oswald, sans-serif",fontSize:"14px",borderWidth:"1px",borderColor:"#00ff04",boxShadow:"0 0 24px #00ff04",textTransform:"uppercase",radius:"999px",padding:"10px 16px"},{text:"Admin",url:"admin.html",backgroundColor:"#000000",textColor:"#bb00ff",fontFamily:"Oswald, sans-serif",fontSize:"14px",borderWidth:"1px",borderColor:"#00ff04",boxShadow:"0 0 24px #00ff04",textTransform:"uppercase",radius:"999px",padding:"10px 16px"}]},render:e=>o.jsxs("header",{className:`puck-site-header ${e.headerPosition==="full"?"is-full-width":""}`,style:{background:e.backgroundColor||"rgba(0,0,0,.72)",borderBottom:`1px solid ${e.lineColor||"rgba(77,198,225,.45)"}`,boxShadow:e.lineShadow||"none",width:e.width||"100%",maxWidth:e.maxWidth||"none",margin:e.margin||"0",padding:e.padding||"22px 40px"},children:[o.jsxs("div",{className:"puck-header-left",children:[(e.leftButtons||[]).map((t,r)=>o.jsx(T,{button:t},`left-${r}`)),e.logoUrl&&e.logoPlacement!=="right"&&o.jsx("a",{className:"puck-header-logo-link logo-left",href:"index.html",style:{"--logo-size":e.logoSize||"45px","--logo-image-shadow":e.logoImageShadow||"none",background:e.logoBackgroundColor||"transparent",border:`${e.logoBorderWidth||"0px"} solid ${e.logoBorderColor||"transparent"}`,borderRadius:e.logoRadius||"999px",padding:e.logoPadding||"0px",boxShadow:e.logoBoxShadow||"none"},children:o.jsx("img",{className:"puck-header-logo",src:e.logoUrl,alt:e.logoAlt||"Logo"})}),e.showBack!=="hide"&&o.jsx("a",{className:"puck-header-back",href:e.backUrl||"index.html",children:e.backText||"Back"})]}),o.jsx("nav",{className:`puck-header-nav nav-${e.navPlacement||"right"}`,children:(e.buttons||[]).map((t,r)=>o.jsx(T,{button:t},r))}),o.jsx("div",{className:"puck-header-right",children:e.logoUrl&&e.logoPlacement==="right"&&o.jsx("a",{className:"puck-header-logo-link logo-right",href:"index.html",style:{"--logo-size":e.logoSize||"45px","--logo-image-shadow":e.logoImageShadow||"none",background:e.logoBackgroundColor||"transparent",border:`${e.logoBorderWidth||"0px"} solid ${e.logoBorderColor||"transparent"}`,borderRadius:e.logoRadius||"999px",padding:e.logoPadding||"0px",boxShadow:e.logoBoxShadow||"none"},children:o.jsx("img",{className:"puck-header-logo",src:e.logoUrl,alt:e.logoAlt||"Logo"})})})]})},SongScroll:{label:"02 Add Block: Song Scroll",fields:{backgroundColor:p("Scroll Background"),lineColor:p("Bottom Line Color"),textColor:p("Song Text Color"),textShadow:{type:"text",label:"Song Text Shadow"},buttonBorderColor:p("Song Border Color"),width:{type:"text",label:"Scroll Width",placeholder:"100%, 100vw, 1200px"},maxWidth:{type:"text",label:"Scroll Max Width",placeholder:"none or 1200px"},margin:{type:"text",label:"Scroll Margin",placeholder:"0 auto"},stretchMode:{type:"select",label:"Scroll Stretch Mode",options:[{label:"Normal",value:"normal"},{label:"Full Browser Width",value:"full"}]},items:{type:"array",label:"Songs",arrayFields:{text:{type:"text",label:"Song Title"}},defaultItemProps:{text:"Song Title"}}},defaultProps:{backgroundColor:"rgba(77,198,225,.12)",lineColor:"rgba(77,198,225,.45)",textColor:"#4dc6e1",textShadow:"0 0 12px rgba(77,198,225,.35)",buttonBorderColor:"rgba(77,198,225,.45)",width:"100%",maxWidth:"none",margin:"0",stretchMode:"full",items:[{text:"Get Up"},{text:"Man on the Moon"},{text:"Losing My Religion"},{text:"Finest Worksong"},{text:"Life and How to Live It"},{text:"Fall on Me"},{text:"Superman"},{text:"These Days"},{text:"Stand"},{text:"The One I Love"}]},render:e=>{const t=e.items||[],r=[...t,...t];return o.jsx("section",{className:`songs-section puck-song-scroll ${e.stretchMode==="full"?"is-full-width":""}`,"aria-label":"Songs We Play",style:{background:e.backgroundColor||"rgba(77,198,225,.12)",borderBottom:`1px solid ${e.lineColor||"rgba(77,198,225,.45)"}`,width:e.width||"100%",maxWidth:e.maxWidth||"none",margin:e.margin||"0"},children:o.jsx("div",{className:"songs-scroll-container",children:o.jsx("div",{className:"songs-scroll puck-song-track",children:r.map((n,a)=>o.jsx("span",{className:"song-name",style:{color:e.textColor||"#4dc6e1",textShadow:e.textShadow||"none",borderColor:e.buttonBorderColor||"rgba(77,198,225,.45)"},children:n.text},a))})})})}},Hero:{label:"02 Add Block: Hero: Text + Image",fields:{customFontUrl:P("External Font URL For This Block"),title:{type:"text",label:"Title"},...C("title"),subtitle:{type:"text",label:"Subtitle"},...C("subtitle"),body:{type:"textarea",label:"Body Text"},...C("body"),imageUrl:k("Hero Image Upload"),imageAlt:{type:"text",label:"Image Alt Text"},layout:{type:"select",label:"Layout",options:[{label:"Text Left / Image Right",value:"text-left"},{label:"Text Right / Image Left",value:"text-right"},{label:"Centered",value:"center"},{label:"Image Top",value:"image-top"}]},imageWidth:{type:"text",label:"Image Width",placeholder:"320px or 50%"},mobileImageWidth:{type:"text",label:"Mobile Image Width",placeholder:"Example: 70vw or 280px"},imageRadius:{type:"text",label:"Image Rounded Corners"},imageShadow:{type:"text",label:"Image Shadow",placeholder:"none or 0 20px 60px rgba(0,0,0,.45)"},maxWidth:{type:"number",label:"Max Section Width"},gap:{type:"number",label:"Gap Between Text/Image"},...W,buttons:S},defaultProps:A(E[0].props),render:e=>o.jsxs(L,{...e,children:[j(e.customFontUrl),o.jsxs("div",{className:`puck-inner puck-flex layout-${e.layout||"text-left"}`,style:{"--gap":`${e.gap||50}px`,"--max-width":`${e.maxWidth||1100}px`},children:[o.jsxs("div",{className:"puck-text",children:[e.title&&o.jsx("h1",{className:"band-name puck-title",style:{fontSize:e.titleSize||"5rem",color:e.titleColor||"inherit",fontFamily:e.titleFont||"inherit",fontWeight:e.titleWeight||"inherit",letterSpacing:e.titleLetterSpacing||"normal"},children:e.title}),e.subtitle&&o.jsx("p",{className:"tagline puck-subtitle",style:{fontSize:e.subtitleSize||"1.8rem",color:e.subtitleColor||"inherit",fontFamily:e.subtitleFont||"inherit",fontWeight:e.subtitleWeight||"inherit",letterSpacing:e.subtitleLetterSpacing||"normal"},children:e.subtitle}),e.body&&o.jsx("p",{className:"description puck-body",style:{fontSize:e.bodySize||"1rem",color:e.bodyColor||"inherit",fontFamily:e.bodyFont||"inherit",fontWeight:e.bodyWeight||"inherit",letterSpacing:e.bodyLetterSpacing||"normal"},children:e.body}),(e.buttons||[]).length>0&&o.jsx("div",{className:"puck-buttons",children:(e.buttons||[]).map((t,r)=>o.jsx(T,{button:t,index:r},r))})]}),e.imageUrl&&o.jsx("img",{className:"puck-image puck-mobile-sized-image",src:e.imageUrl,alt:e.imageAlt||e.title||"Image",style:{width:e.imageWidth||"320px","--mobile-image-width":e.mobileImageWidth||e.imageWidth||"320px",borderRadius:e.imageRadius||"8px",boxShadow:e.imageShadow||"none"}})]})]})},TextBlock:{label:"02 Add Block: Text Block",fields:{customFontUrl:P("External Font URL For This Block"),eyebrow:{type:"text",label:"Small Top Text"},...C("eyebrow"),title:{type:"text",label:"Title"},...C("title"),body:{type:"textarea",label:"Body Text"},...C("body"),align:{type:"select",label:"Text Align",options:[{label:"Left",value:"left"},{label:"Center",value:"center"},{label:"Right",value:"right"}]},maxWidth:{type:"text",label:"Text Box Width"},...W,buttons:S},defaultProps:{id:"text-block",eyebrow:"",eyebrowColor:"#ffffff",eyebrowFont:"inherit",eyebrowSize:"1rem",eyebrowWeight:"400",title:"New Text Section",titleSize:"3rem",titleColor:"#ffffff",titleFont:"Playfair Display, serif",titleWeight:"700",body:"Edit this text.",bodySize:"1rem",bodyColor:"#ffffff",bodyFont:"inherit",bodyWeight:"400",align:"center",maxWidth:"850px",backgroundColor:"transparent",textColor:"#ffffff",paddingY:50,paddingX:24,customFontUrl:"",buttons:[]},render:e=>o.jsxs(L,{...e,children:[j(e.customFontUrl),o.jsxs("div",{className:"puck-inner puck-text",style:{textAlign:e.align||"center",maxWidth:e.maxWidth||"850px"},children:[e.eyebrow&&o.jsx("p",{className:"teaser",style:{color:e.eyebrowColor||"inherit",fontFamily:e.eyebrowFont||"inherit",fontSize:e.eyebrowSize||"inherit",fontWeight:e.eyebrowWeight||"inherit",letterSpacing:e.eyebrowLetterSpacing||"normal"},children:e.eyebrow}),e.title&&o.jsx("h2",{className:"puck-title",style:{fontSize:e.titleSize||"3rem",color:e.titleColor||"inherit",fontFamily:e.titleFont||"inherit",fontWeight:e.titleWeight||"inherit",letterSpacing:e.titleLetterSpacing||"normal",textDecoration:e.titleDecoration||"none"},children:e.title}),e.body&&o.jsx("p",{className:"puck-body",style:{fontSize:e.bodySize||"1rem",color:e.bodyColor||"inherit",fontFamily:e.bodyFont||"inherit",fontWeight:e.bodyWeight||"inherit",letterSpacing:e.bodyLetterSpacing||"normal"},children:e.body}),o.jsx("div",{className:"puck-buttons",children:(e.buttons||[]).map((t,r)=>o.jsx(T,{button:t,index:r},r))})]})]})},ImageBlock:{label:"02 Add Block: Image",fields:{customFontUrl:P("External Font URL For This Block"),title:{type:"text",label:"Optional Title"},...C("title"),imageUrl:k("Image Upload"),imageAlt:{type:"text",label:"Image Alt Text"},width:{type:"text",label:"Image Width",placeholder:"900px or 100%"},mobileWidth:{type:"text",label:"Mobile Image Width",placeholder:"Example: 70vw or 280px"},radius:{type:"text",label:"Rounded Corners"},shadow:{type:"text",label:"Image Shadow",placeholder:"none or 0 20px 60px rgba(0,0,0,.45)"},align:{type:"select",label:"Align",options:[{label:"Left",value:"left"},{label:"Center",value:"center"},{label:"Right",value:"right"}]},maxWidth:{type:"text",label:"Container Width"},backgroundColor:p("Background Color"),paddingY:{type:"number",label:"Top/Bottom Padding"},paddingX:{type:"number",label:"Left/Right Padding"}},defaultProps:A(E[1].props),render:e=>o.jsxs("section",{className:"puck-section",style:{background:e.backgroundColor||"transparent",padding:`${e.paddingY||40}px ${e.paddingX||24}px`,textAlign:e.align||"center"},children:[j(e.customFontUrl),o.jsxs("div",{className:"puck-inner",style:{maxWidth:e.maxWidth||"1100px"},children:[e.title&&o.jsx("h2",{className:"puck-title",style:{fontSize:e.titleSize||"3rem",color:e.titleColor||"inherit",fontFamily:e.titleFont||"inherit",fontWeight:e.titleWeight||"inherit"},children:e.title}),e.imageUrl&&o.jsx("img",{className:"puck-image puck-mobile-sized-image",src:e.imageUrl,alt:e.imageAlt||e.title||"Image",style:{width:e.width||"900px","--mobile-image-width":e.mobileWidth||e.width||"900px",borderRadius:e.radius||"8px",boxShadow:e.shadow||"none"}})]})]})},ButtonRow:{label:"02 Add Block: Button Row",fields:{customFontUrl:P("External Font URL For Buttons"),...W,buttons:S},defaultProps:A(E[2].props),render:e=>o.jsxs(L,{...e,children:[j(e.customFontUrl),o.jsx("div",{className:"puck-inner",children:o.jsx("div",{className:"puck-buttons",children:(e.buttons||[]).map((t,r)=>o.jsx(T,{button:t,index:r},r))})})]})},SocialIcons:{label:"02 Add Block: Social Icons",fields:{title:{type:"text",label:"Title"},titleColor:p("Title Color"),titleFont:w("Title Font"),titleSize:{type:"text",label:"Title Font Size"},titleWeight:{type:"select",label:"Title Weight",options:[{label:"Default",value:"inherit"},{label:"Regular",value:"400"},{label:"Bold",value:"700"},{label:"Black",value:"900"}]},...W,links:{type:"array",label:"Social Links - add as many as you want",arrayFields:{platform:{type:"select",label:"Platform",options:ie},label:{type:"text",label:"Custom Label / Title"},url:{type:"text",label:"URL"},iconColor:p("Icon Color"),backgroundColor:p("Icon Background"),borderWidth:{type:"select",label:"Icon Border",options:[{label:"No Border",value:"0px"},{label:"Thin Border",value:"1px"},{label:"Medium Border",value:"2px"},{label:"Thick Border",value:"4px"}]},borderColor:p("Icon Border Color"),boxShadow:{type:"text",label:"Icon Glow / Shadow",placeholder:"0 0 24px #00ff04"},radius:{type:"text",label:"Icon Rounded Corners",placeholder:"999px"},size:{type:"text",label:"Icon Button Size",placeholder:"44px"},svgSize:{type:"text",label:"Symbol Size",placeholder:"22px"},padding:{type:"text",label:"Icon Padding",placeholder:"0px"}},defaultItemProps:{platform:"facebook",label:"Facebook",url:"https://facebook.com",iconColor:"#bb00ff",backgroundColor:"#000000",borderWidth:"1px",borderColor:"#00ff04",boxShadow:"0 0 24px #00ff04",radius:"999px",size:"44px",svgSize:"22px",padding:"0px"}}},defaultProps:A(E[3].props),render:e=>o.jsx(L,{...e,children:o.jsxs("div",{className:"puck-inner",style:{textAlign:"center"},children:[e.title&&o.jsx("p",{className:"teaser",style:{color:e.titleColor||"inherit",fontFamily:e.titleFont||"inherit",fontSize:e.titleSize||"inherit",fontWeight:e.titleWeight||"inherit"},children:e.title}),o.jsx("nav",{className:"puck-social-links social-links",children:(e.links||[]).filter(t=>t.url).map((t,r)=>o.jsx("a",{className:"social-link",href:t.url||"#",title:t.label||t.platform,style:{color:t.iconColor||"inherit",background:t.backgroundColor||"rgba(255,255,255,.03)",border:`${t.borderWidth||"1px"} solid ${t.borderColor||"rgba(255,255,255,.18)"}`,boxShadow:t.boxShadow||"none",borderRadius:t.radius||"999px",width:t.size||"44px",height:t.size||"44px",minWidth:t.size||"44px",minHeight:t.size||"44px",padding:t.padding||"0px","--social-svg-size":t.svgSize||"22px"},children:o.jsx(St,{platform:t.platform,label:t.label})},r))})]})})},Columns:{label:"02 Add Block: Columns / Cards",fields:{customFontUrl:P("External Font URL For This Block"),columns:{type:"number",label:"Columns"},gap:{type:"number",label:"Gap"},imageRadius:{type:"text",label:"Image Radius"},...W,items:{type:"array",label:"Cards",arrayFields:{title:{type:"text",label:"Title"},titleColor:p("Title Color"),titleFont:w("Title Font"),titleSize:{type:"text",label:"Title Size"},body:{type:"textarea",label:"Body"},bodyColor:p("Body Color"),bodyFont:w("Body Font"),bodySize:{type:"text",label:"Body Size"},imageUrl:k("Card Image Upload"),buttonText:{type:"text",label:"Button Text"},buttonUrl:{type:"text",label:"Button URL"},buttonBackgroundColor:p("Button Background"),buttonTextColor:p("Button Text Color"),buttonFont:w("Button Font"),buttonFontSize:{type:"text",label:"Button Font Size"},buttonBorderWidth:{type:"select",label:"Button Border",options:[{label:"No Border",value:"0px"},{label:"Thin Border",value:"1px"},{label:"Medium Border",value:"2px"},{label:"Thick Border",value:"4px"}]},buttonBorderColor:p("Button Border Color"),buttonBoxShadow:{type:"text",label:"Button Glow / Shadow"},buttonTextTransform:{type:"select",label:"Button Text Case",options:[{label:"Uppercase",value:"uppercase"},{label:"Normal",value:"none"},{label:"Lowercase",value:"lowercase"},{label:"Capitalize",value:"capitalize"}]},buttonRadius:{type:"text",label:"Button Radius"}},defaultItemProps:{title:"Card title",titleColor:"#ffffff",titleFont:"inherit",titleSize:"1.4rem",body:"Card text",bodyColor:"#ffffff",bodyFont:"inherit",bodySize:"1rem",imageUrl:"",buttonText:"",buttonUrl:"#",buttonBackgroundColor:"#8b3df4",buttonTextColor:"#ffffff",buttonFont:"inherit",buttonFontSize:"16px",buttonBorderWidth:"0px",buttonBorderColor:"transparent",buttonBoxShadow:"none",buttonTextTransform:"uppercase",buttonRadius:"999px"}}},defaultProps:{columns:2,gap:24,imageRadius:"8px",backgroundColor:"transparent",textColor:"#ffffff",paddingY:50,paddingX:24,customFontUrl:"",items:[{title:"First Card",body:"Edit this card.",imageUrl:"",buttonText:"",buttonUrl:"#",buttonBorderWidth:"0px",buttonBorderColor:"transparent"},{title:"Second Card",body:"Edit this card.",imageUrl:"",buttonText:"",buttonUrl:"#"}]},render:e=>o.jsxs(L,{...e,children:[j(e.customFontUrl),o.jsx("div",{className:"puck-inner",children:o.jsx("div",{className:"puck-columns",style:{"--cols":e.columns||2,"--gap":`${e.gap||24}px`},children:(e.items||[]).map((t,r)=>o.jsxs("div",{className:"puck-card",children:[t.imageUrl&&o.jsx("img",{className:"puck-image",src:t.imageUrl,alt:t.title||"Column image",style:{width:"100%",borderRadius:e.imageRadius||"8px",marginBottom:16}}),t.title&&o.jsx("h3",{style:{color:t.titleColor||"inherit",fontFamily:t.titleFont||"inherit",fontSize:t.titleSize||"inherit"},children:t.title}),t.body&&o.jsx("p",{style:{color:t.bodyColor||"inherit",fontFamily:t.bodyFont||"inherit",fontSize:t.bodySize||"inherit"},children:t.body}),t.buttonText&&o.jsx(T,{button:{text:t.buttonText,url:t.buttonUrl,backgroundColor:t.buttonBackgroundColor,textColor:t.buttonTextColor,fontFamily:t.buttonFont,fontSize:t.buttonFontSize,borderWidth:t.buttonBorderWidth,borderColor:t.buttonBorderColor,radius:t.buttonRadius,boxShadow:t.buttonBoxShadow,textTransform:t.buttonTextTransform}})]},r))})})]})},GalleryGrid:{label:"02 Add Block: Gallery Grid",fields:{title:{type:"text",label:"Title"},titleColor:p("Title Color"),titleFont:w("Title Font"),titleSize:{type:"text",label:"Title Size"},backgroundColor:p("Section Background"),textColor:p("Default Text Color"),paddingY:{type:"number",label:"Top/Bottom Padding"},paddingX:{type:"number",label:"Left/Right Padding"},layoutMode:{type:"select",label:"Gallery Layout",options:[{label:"Freeform Placement",value:"freeform"},{label:"Grid",value:"grid"}]},canvasHeight:{type:"text",label:"Freeform Canvas Height"},columns:{type:"number",label:"Columns"},gap:{type:"number",label:"Gap"},images:{type:"array",label:"Gallery Images",arrayFields:{imageUrl:k("Image"),mediaType:{type:"select",label:"Media Type",options:[{label:"Image",value:"image"},{label:"Video",value:"video"}]},imageAlt:{type:"text",label:"Alt Text"},caption:{type:"text",label:"Caption"},x:{type:"number",label:"X Position %"},y:{type:"number",label:"Y Position %"},width:{type:"text",label:"Width"},rotation:{type:"number",label:"Rotation Degrees"},zIndex:{type:"number",label:"Layer"},radius:{type:"text",label:"Corner Radius"},shadow:{type:"text",label:"Glow / Shadow"},opacity:{type:"number",label:"Opacity %"},objectFit:{type:"select",label:"Image Fit",options:[{label:"Cover",value:"cover"},{label:"Contain",value:"contain"},{label:"Stretch",value:"fill"}]}},defaultItemProps:{imageUrl:"",mediaType:"image",imageAlt:"Gallery image",caption:"",x:8,y:8,width:"280px",rotation:0,zIndex:1,radius:"16px",shadow:"0 0 34px rgba(57,255,20,.35)",opacity:100,objectFit:"cover"}}},defaultProps:{title:"",titleColor:"#ffffff",titleFont:"Oswald, sans-serif",titleSize:"2.5rem",backgroundColor:"transparent",textColor:"#ffffff",paddingY:40,paddingX:24,layoutMode:"grid",canvasHeight:"920px",columns:3,gap:18,images:[]},render:e=>{const t=ht(e);return o.jsx(L,{...t,children:o.jsxs("div",{className:"puck-inner",children:[t.title&&o.jsx("h2",{className:"puck-title",style:{textAlign:"center",color:t.titleColor||"inherit",fontFamily:t.titleFont||"inherit",fontSize:t.titleSize||"2.5rem"},children:t.title}),o.jsx("div",{className:t.layoutMode==="freeform"?"puck-gallery-freeform":"puck-gallery-grid",style:t.layoutMode==="freeform"?{"--gallery-height":t.canvasHeight||"920px"}:{"--cols":t.columns||3,"--gap":`${t.gap||18}px`},children:(t.images||[]).filter(r=>r.imageUrl).map((r,n)=>o.jsxs("figure",{className:"puck-gallery-item",style:t.layoutMode==="freeform"?{"--gallery-x":`${Number.isFinite(Number(r.x))?r.x:0}%`,"--gallery-y":`${Number.isFinite(Number(r.y))?r.y:0}%`,"--gallery-width":r.width||"280px","--gallery-rotation":`${Number.isFinite(Number(r.rotation))?r.rotation:0}deg`,"--gallery-layer":Number.isFinite(Number(r.zIndex))?r.zIndex:n+1,"--gallery-opacity":Number.isFinite(Number(r.opacity))?Math.min(100,Math.max(0,Number(r.opacity)))/100:1,"--gallery-fit":r.objectFit||"cover",borderRadius:r.radius||"16px",boxShadow:r.shadow||"0 0 34px rgba(57,255,20,.35)"}:void 0,children:[r.mediaType==="video"||/\.(mp4|webm|mov|m4v|ogv)(\?|#|$)/i.test(String(r.imageUrl||""))?o.jsx("video",{src:r.imageUrl,controls:!0,preload:"metadata"}):o.jsx("img",{src:r.imageUrl,alt:r.imageAlt||"Gallery image"}),r.caption&&o.jsx("figcaption",{children:r.caption})]},n))})]})})}},GraffitiWall:{label:"02 Add Block: Graffiti Wall",fields:{eyebrow:{type:"text",label:"Small Top Text"},title:{type:"text",label:"Title"},body:{type:"textarea",label:"Intro Text"},nameLabel:{type:"text",label:"Name Label"},messageLabel:{type:"text",label:"Message Label"},photoLabel:{type:"text",label:"Photo Label"},paintLabel:{type:"text",label:"Paint Label"},submitText:{type:"text",label:"Submit Button Text"},successMessage:{type:"text",label:"Success Message"},backgroundColor:p("Section Background"),textColor:p("Text Color"),accentColor:p("Accent Color"),panelBackground:p("Panel Background"),borderColor:p("Border Color"),paddingY:{type:"number",label:"Top/Bottom Padding"},paddingX:{type:"number",label:"Left/Right Padding"}},defaultProps:{eyebrow:"Fan wall",title:"Graffiti Wall",body:"Write a message, upload a photo, or paint something for the band. Submissions appear after admin approval.",nameLabel:"Your name",messageLabel:"Your message",photoLabel:"Photo with the band",paintLabel:"Paint",submitText:"Send for Approval",successMessage:"Submitted. It will appear after admin approval.",backgroundColor:"transparent",textColor:"#ffffff",accentColor:"#00ff04",panelBackground:"rgba(0,0,0,.72)",borderColor:"#bb00ff",paddingY:70,paddingX:24},render:e=>o.jsx("section",{className:"puck-section gr-graffiti-wall",style:{background:e.backgroundColor||"transparent",color:e.textColor||"#ffffff",padding:`${e.paddingY||70}px ${e.paddingX||24}px`},children:o.jsxs("div",{className:"puck-inner gr-graffiti-inner",style:{"--gr-graffiti-accent":e.accentColor||"#00ff04","--gr-graffiti-panel":e.panelBackground||"rgba(0,0,0,.72)","--gr-graffiti-border":e.borderColor||"#bb00ff"},children:[o.jsxs("div",{className:"gr-graffiti-copy",children:[e.eyebrow&&o.jsx("p",{className:"teaser",children:e.eyebrow}),e.title&&o.jsx("h2",{className:"puck-title",children:e.title}),e.body&&o.jsx("p",{children:e.body})]}),o.jsxs("div",{className:"gr-graffiti-layout",children:[o.jsxs("form",{className:"gr-graffiti-form",children:[o.jsxs("label",{children:[e.nameLabel||"Your name",o.jsx("input",{type:"text",disabled:!0})]}),o.jsxs("label",{children:[e.messageLabel||"Your message",o.jsx("textarea",{rows:"5",disabled:!0})]}),o.jsxs("label",{children:[e.photoLabel||"Photo with the band",o.jsx("input",{type:"file",disabled:!0})]}),o.jsxs("label",{children:[e.paintLabel||"Paint",o.jsx("canvas",{className:"gr-graffiti-canvas",width:"520",height:"260"})]}),o.jsx("button",{type:"button",children:e.submitText||"Send for Approval"})]}),o.jsx("div",{className:"gr-graffiti-posts",children:o.jsxs("article",{className:"gr-graffiti-post",children:[o.jsx("strong",{children:"Approved fan posts will appear here."}),o.jsx("p",{children:e.successMessage||"Submitted. It will appear after admin approval."})]})})]})]})})},Spacer:{label:"02 Add Block: Spacer",fields:{height:{type:"number",label:"Height"},backgroundColor:p("Background Color")},defaultProps:{height:40,backgroundColor:"transparent"},render:e=>o.jsx("div",{className:"puck-spacer",style:{height:e.height||40,background:e.backgroundColor||"transparent"}})},SignupForm:{label:"02 Add Block: Grave Robber Signup Form",fields:{formAction:{type:"text",label:"Google Form Submit URL"},nameEntry:{type:"text",label:"Name Field Entry ID"},emailEntry:{type:"text",label:"Email Field Entry ID"},phoneEntry:{type:"text",label:"Phone Field Entry ID"},zipEntry:{type:"text",label:"Zip Field Entry ID"},nameLabel:{type:"text",label:"Name Label"},emailLabel:{type:"text",label:"Email Label"},phoneLabel:{type:"text",label:"Phone Label"},zipLabel:{type:"text",label:"Zip Label"},buttonText:{type:"text",label:"Button Text"},successMessage:{type:"text",label:"Success Message"},backgroundColor:p("Section Background"),paddingY:{type:"number",label:"Top Padding"},paddingX:{type:"number",label:"Side Padding"},paddingBottom:{type:"number",label:"Bottom Padding"}},defaultProps:{formAction:"https://docs.google.com/forms/d/e/1FAIpQLSc75dAf3CXeOinDkL-URjVql6_o3E2PcXKPhB3j-mFnl0JBMw/formResponse",nameEntry:"entry.821607845",emailEntry:"entry.216699627",phoneEntry:"entry.1566132030",zipEntry:"entry.848273318",nameLabel:"What are you called?",emailLabel:"What is your email?",phoneLabel:"What is your phone number?",zipLabel:"What is your zip code?",buttonText:"Join the Army of the Dead",successMessage:"Great, you are signed up and we will keep you updated.",backgroundColor:"#000000",paddingY:30,paddingX:24,paddingBottom:80},render:e=>o.jsx(Tt,{...e})},ContactForm:{label:"02 Add Block: Grave Robber Contact Form",fields:{formAction:{type:"text",label:"Google Form Submit URL"},nameEntry:{type:"text",label:"Name Field Entry ID"},emailEntry:{type:"text",label:"Email Field Entry ID"},messageEntry:{type:"text",label:"Message Field Entry ID"},nameLabel:{type:"text",label:"Name Label"},emailLabel:{type:"text",label:"Email Label"},messageLabel:{type:"text",label:"Message Label"},messageRows:{type:"number",label:"Message Box Rows"},buttonText:{type:"text",label:"Button Text"},successMessage:{type:"text",label:"Success Message"},backgroundColor:p("Section Background"),paddingY:{type:"number",label:"Top Padding"},paddingX:{type:"number",label:"Side Padding"},paddingBottom:{type:"number",label:"Bottom Padding"}},defaultProps:{formAction:"https://docs.google.com/forms/d/e/1FAIpQLSfvFy-I4z36zqLz4y4boVhM4eTL7KEb5Ip1It7OZyFfxlRgMw/formResponse",nameEntry:"entry.111991046",emailEntry:"entry.709491702",messageEntry:"entry.905150677",nameLabel:"What are you called?",emailLabel:"What is your email?",messageLabel:"What do you want?",messageRows:7,buttonText:"Send Message",successMessage:"Great, your message was sent and we will get back to you shortly.",backgroundColor:"#000000",paddingY:30,paddingX:24,paddingBottom:80},render:e=>o.jsx(zt,{...e})},Embed:{label:"02 Add Block: Custom HTML Embed",fields:{html:{type:"textarea",label:"HTML"},backgroundColor:p("Background Color"),paddingY:{type:"number",label:"Top/Bottom Padding"},paddingX:{type:"number",label:"Left/Right Padding"}},defaultProps:{html:"<p>Custom HTML here</p>",backgroundColor:"transparent",paddingY:30,paddingX:24},render:e=>o.jsx("section",{className:"puck-section",style:{padding:`${e.paddingY||30}px ${e.paddingX||24}px`,background:e.backgroundColor||"transparent"},children:o.jsx("div",{className:"puck-inner",dangerouslySetInnerHTML:{__html:e.html||""}})})}}},ye=Je(),Lt=ye.replaceAll("#editable-page-root","[data-puck-entry]"),It=`
${ye}
${Lt}

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
`;export{fe as R,Wt as a,q as b,Pt as c,Gt as d,Je as e,Bt as f,Se as g,xe as h,o as j,It as p,G as r};
