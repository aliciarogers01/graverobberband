function he(e,t){for(var a=0;a<t.length;a++){const l=t[a];if(typeof l!="string"&&!Array.isArray(l)){for(const o in l)if(o!=="default"&&!(o in e)){const n=Object.getOwnPropertyDescriptor(l,o);n&&Object.defineProperty(e,o,n.get?n:{enumerable:!0,get:()=>l[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function a(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(o){if(o.ep)return;o.ep=!0;const n=a(o);fetch(o.href,n)}})();function ye(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var re={exports:{}},N={},ae={exports:{}},p={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P=Symbol.for("react.element"),we=Symbol.for("react.portal"),ke=Symbol.for("react.fragment"),ve=Symbol.for("react.strict_mode"),Ce=Symbol.for("react.profiler"),Se=Symbol.for("react.provider"),ze=Symbol.for("react.context"),$e=Symbol.for("react.forward_ref"),Be=Symbol.for("react.suspense"),Fe=Symbol.for("react.memo"),Te=Symbol.for("react.lazy"),J=Symbol.iterator;function We(e){return e===null||typeof e!="object"?null:(e=J&&e[J]||e["@@iterator"],typeof e=="function"?e:null)}var le={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ne=Object.assign,ie={};function B(e,t,a){this.props=e,this.context=t,this.refs=ie,this.updater=a||le}B.prototype.isReactComponent={};B.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};B.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function de(){}de.prototype=B.prototype;function D(e,t,a){this.props=e,this.context=t,this.refs=ie,this.updater=a||le}var _=D.prototype=new de;_.constructor=D;ne(_,B.prototype);_.isPureReactComponent=!0;var K=Array.isArray,se=Object.prototype.hasOwnProperty,X={current:null},ce={key:!0,ref:!0,__self:!0,__source:!0};function pe(e,t,a){var l,o={},n=null,i=null;if(t!=null)for(l in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(n=""+t.key),t)se.call(t,l)&&!ce.hasOwnProperty(l)&&(o[l]=t[l]);var c=arguments.length-2;if(c===1)o.children=a;else if(1<c){for(var b=Array(c),m=0;m<c;m++)b[m]=arguments[m+2];o.children=b}if(e&&e.defaultProps)for(l in c=e.defaultProps,c)o[l]===void 0&&(o[l]=c[l]);return{$$typeof:P,type:e,key:n,ref:i,props:o,_owner:X.current}}function je(e,t){return{$$typeof:P,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Y(e){return typeof e=="object"&&e!==null&&e.$$typeof===P}function Le(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(a){return t[a]})}var Q=/\/+/g;function O(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Le(""+e.key):t.toString(36)}function U(e,t,a,l,o){var n=typeof e;(n==="undefined"||n==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(n){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case P:case we:i=!0}}if(i)return i=e,o=o(i),e=l===""?"."+O(i,0):l,K(o)?(a="",e!=null&&(a=e.replace(Q,"$&/")+"/"),U(o,t,a,"",function(m){return m})):o!=null&&(Y(o)&&(o=je(o,a+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(Q,"$&/")+"/")+e)),t.push(o)),1;if(i=0,l=l===""?".":l+":",K(e))for(var c=0;c<e.length;c++){n=e[c];var b=l+O(n,c);i+=U(n,t,a,b,o)}else if(b=We(e),typeof b=="function")for(e=b.call(e),c=0;!(n=e.next()).done;)n=n.value,b=l+O(n,c++),i+=U(n,t,a,b,o);else if(n==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function A(e,t,a){if(e==null)return e;var l=[],o=0;return U(e,l,"","",function(n){return t.call(a,n,o++)}),l}function Re(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(a){(e._status===0||e._status===-1)&&(e._status=1,e._result=a)},function(a){(e._status===0||e._status===-1)&&(e._status=2,e._result=a)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var x={current:null},G={transition:null},Pe={ReactCurrentDispatcher:x,ReactCurrentBatchConfig:G,ReactCurrentOwner:X};p.Children={map:A,forEach:function(e,t,a){A(e,function(){t.apply(this,arguments)},a)},count:function(e){var t=0;return A(e,function(){t++}),t},toArray:function(e){return A(e,function(t){return t})||[]},only:function(e){if(!Y(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};p.Component=B;p.Fragment=ke;p.Profiler=Ce;p.PureComponent=D;p.StrictMode=ve;p.Suspense=Be;p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pe;p.cloneElement=function(e,t,a){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var l=ne({},e.props),o=e.key,n=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(n=t.ref,i=X.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(b in t)se.call(t,b)&&!ce.hasOwnProperty(b)&&(l[b]=t[b]===void 0&&c!==void 0?c[b]:t[b])}var b=arguments.length-2;if(b===1)l.children=a;else if(1<b){c=Array(b);for(var m=0;m<b;m++)c[m]=arguments[m+2];l.children=c}return{$$typeof:P,type:e.type,key:o,ref:n,props:l,_owner:i}};p.createContext=function(e){return e={$$typeof:ze,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Se,_context:e},e.Consumer=e};p.createElement=pe;p.createFactory=function(e){var t=pe.bind(null,e);return t.type=e,t};p.createRef=function(){return{current:null}};p.forwardRef=function(e){return{$$typeof:$e,render:e}};p.isValidElement=Y;p.lazy=function(e){return{$$typeof:Te,_payload:{_status:-1,_result:e},_init:Re}};p.memo=function(e,t){return{$$typeof:Fe,type:e,compare:t===void 0?null:t}};p.startTransition=function(e){var t=G.transition;G.transition={};try{e()}finally{G.transition=t}};p.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};p.useCallback=function(e,t){return x.current.useCallback(e,t)};p.useContext=function(e){return x.current.useContext(e)};p.useDebugValue=function(){};p.useDeferredValue=function(e){return x.current.useDeferredValue(e)};p.useEffect=function(e,t){return x.current.useEffect(e,t)};p.useId=function(){return x.current.useId()};p.useImperativeHandle=function(e,t,a){return x.current.useImperativeHandle(e,t,a)};p.useInsertionEffect=function(e,t){return x.current.useInsertionEffect(e,t)};p.useLayoutEffect=function(e,t){return x.current.useLayoutEffect(e,t)};p.useMemo=function(e,t){return x.current.useMemo(e,t)};p.useReducer=function(e,t,a){return x.current.useReducer(e,t,a)};p.useRef=function(e){return x.current.useRef(e)};p.useState=function(e){return x.current.useState(e)};p.useSyncExternalStore=function(e,t,a){return x.current.useSyncExternalStore(e,t,a)};p.useTransition=function(){return x.current.useTransition()};p.version="18.2.0";ae.exports=p;var V=ae.exports;const be=ye(V),yt=he({__proto__:null,default:be},[V]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ie=V,Ae=Symbol.for("react.element"),Ee=Symbol.for("react.fragment"),Me=Object.prototype.hasOwnProperty,Ue=Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ge={key:!0,ref:!0,__self:!0,__source:!0};function ge(e,t,a){var l,o={},n=null,i=null;a!==void 0&&(n=""+a),t.key!==void 0&&(n=""+t.key),t.ref!==void 0&&(i=t.ref);for(l in t)Me.call(t,l)&&!Ge.hasOwnProperty(l)&&(o[l]=t[l]);if(e&&e.defaultProps)for(l in t=e.defaultProps,t)o[l]===void 0&&(o[l]=t[l]);return{$$typeof:Ae,type:e,key:n,ref:i,props:o,_owner:Ue.current}}N.Fragment=Ee;N.jsx=ge;N.jsxs=ge;re.exports=N;var r=re.exports;function u(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function s(e){return u(e).trim()}function f(e){return String(e??"").trim().length>0}function q(e){return u(e).replaceAll(`
`,"<br>")}function g(e={}){return Object.entries(e).filter(([,t])=>t!=null&&t!=="").map(([t,a])=>`${t.replace(/[A-Z]/g,l=>`-${l.toLowerCase()}`)}:${a}`).join(";")}function S(e={},t=""){return{fontSize:e[`${t}Size`]||"inherit",color:e[`${t}Color`]||"inherit",fontFamily:e[`${t}Font`]||"inherit",fontWeight:e[`${t}Weight`]||"inherit",fontStyle:e[`${t}Style`]||"inherit",textDecoration:e[`${t}Decoration`]||"none",textTransform:e[`${t}Transform`]||"none",letterSpacing:e[`${t}LetterSpacing`]||"normal",lineHeight:e[`${t}LineHeight`]||"normal",textShadow:e[`${t}Shadow`]||"none"}}function F(e){return f(e)?`<style>@import url('${s(e)}');</style>`:""}function Ne(e="custom"){return String(e||"custom").toLowerCase().trim()}function Oe(e,t=""){const a=Ne(e),l='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M8 12h8M12 8v8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',o={facebook:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.019 4.388 10.994 10.125 11.854v-8.385H7.078v-3.469h3.047V9.431c0-3.007 1.791-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.249h3.328l-.532 3.469h-2.796v8.385C19.612 23.067 24 18.092 24 12.073z"/></svg>',instagram:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3.5A4.5 4.5 0 1112 16a4.5 4.5 0 010-9zm0 2A2.5 2.5 0 1012 14a2.5 2.5 0 000-5zm5.25-3.25a1.25 1.25 0 11-1.25 1.25 1.25 1.25 0 011.25-1.25z"/></svg>',tiktok:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19.589 6.686a4.793 4.793 0 01-3.77-4.187V2h-3.358v13.743a2.89 2.89 0 11-2.89-2.89c.213 0 .421.023.622.067V9.51a6.248 6.248 0 00-.622-.033A6.248 6.248 0 1015.82 15.72V8.687a8.154 8.154 0 004.77 1.539V6.686z"/></svg>',youtube:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 00.5 6.2 31.5 31.5 0 000 12a31.5 31.5 0 00.5 5.8 3 3 0 002.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 002.1-2.1A31.5 31.5 0 0024 12a31.5 31.5 0 00-.5-5.8zM9.6 15.6V8.4L15.8 12l-6.2 3.6z"/></svg>',spotify:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 1.8A10.2 10.2 0 1022.2 12 10.2 10.2 0 0012 1.8zm4.68 14.72a.76.76 0 01-1.05.25 9.58 9.58 0 00-7.28-.78.76.76 0 11-.44-1.46 11.13 11.13 0 018.52.94.76.76 0 01.25 1.05zm1.25-2.77a.9.9 0 01-1.24.3 11.75 11.75 0 00-8.62-.96.9.9 0 11-.52-1.72 13.5 13.5 0 019.96 1.14.9.9 0 01.42 1.24zm.13-2.94a14.15 14.15 0 00-10.4-1.13 1.05 1.05 0 11-.61-2.01 16.3 16.3 0 0112.08 1.32 1.05 1.05 0 11-1.07 1.82z"/></svg>',bandcamp:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7.1 6h14L16.9 18h-14L7.1 6z"/></svg>',soundcloud:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.8 10.1A4.8 4.8 0 0020 19H8.5V7.5a7 7 0 019.3 2.6zM3 13h1v6H3v-6zm2-2h1v8H5v-8zm2 1h1v7H7v-7z"/></svg>',apple:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16.4 2.2c.1 1.1-.4 2.2-1.1 3-.7.8-1.8 1.4-2.8 1.3-.1-1.1.4-2.2 1.1-3 .8-.8 1.9-1.3 2.8-1.3zM20.2 17.1c-.5 1.1-.8 1.6-1.5 2.6-1 1.5-2.4 3.3-4.1 3.3-1.5 0-1.9-1-4-1s-2.6 1-4 1c-1.7 0-3-1.6-4-3.1-2.8-4.2-3.1-9.1-1.4-11.7 1.2-1.8 3-2.8 4.7-2.8 1.8 0 2.9 1 4.3 1 1.4 0 2.3-1 4.3-1 1.5 0 3.2.8 4.3 2.3-3.8 2.1-3.2 7.6.4 9.4z"/></svg>',x:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-4.9-7-5.6 7H3.3l7.3-8.4L2.8 2h6.4l4.4 6.4L18.9 2zm-1.1 17.9h1.7L8.3 4H6.5l11.3 15.9z"/></svg>',twitter:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-4.9-7-5.6 7H3.3l7.3-8.4L2.8 2h6.4l4.4 6.4L18.9 2zm-1.1 17.9h1.7L8.3 4H6.5l11.3 15.9z"/></svg>',threads:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.2 2C6.8 2 3 5.8 3 12s3.8 10 9.3 10c4.7 0 8.2-2.7 8.2-6.5 0-2.5-1.4-4.2-3.8-5 .3-3.2-1.6-5.4-4.8-5.4-2.8 0-4.7 1.5-5.3 4h2.2c.4-1.3 1.5-2 3.1-2 1.8 0 2.8 1 2.9 2.8-.8-.1-1.6-.2-2.6-.2-3.3 0-5.4 1.5-5.4 4 0 2.2 1.8 3.8 4.4 3.8 2.8 0 4.7-1.6 5.3-4.3 1.2.5 1.9 1.3 1.9 2.5 0 2.5-2.4 4.2-6.1 4.2-4.4 0-7.1-3-7.1-7.9s2.7-7.9 7-7.9c3.4 0 5.7 1.7 6.4 4.7h2.2C20.1 4.5 16.9 2 12.2 2zm-.8 13.5c-1.4 0-2.3-.7-2.3-1.8 0-1.3 1.2-2 3.3-2 .9 0 1.8.1 2.6.3-.3 2.2-1.6 3.5-3.6 3.5z"/></svg>',bluesky:l,linkedin:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5A2.5 2.5 0 110 3.5a2.5 2.5 0 014.98 0zM.5 8h4.9v16H.5V8zm7.8 0H13v2.2h.1c.7-1.3 2.4-2.7 4.9-2.7 5.2 0 6.2 3.4 6.2 7.9V24h-4.9v-7.6c0-1.8 0-4.1-2.5-4.1s-2.9 2-2.9 4v7.7H8.3V8z"/></svg>',snapchat:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2c3.1 0 5 2.2 5 5.7v2.1c.4.2.9.3 1.4.3.7 0 1.1.4 1.1.9 0 .7-.8 1.1-1.8 1.5.4 1.2 1.4 2.2 2.9 2.8.5.2.7.6.6 1-.1.5-.6.8-1.5.9-.4 0-.6.2-.8.5-.3.5-.8.7-1.5.5-.8-.2-1.4-.3-2 .1-.8.6-1.7 1.7-3.4 1.7s-2.6-1.1-3.4-1.7c-.6-.4-1.2-.3-2-.1-.7.2-1.2 0-1.5-.5-.2-.3-.4-.5-.8-.5-.9-.1-1.4-.4-1.5-.9-.1-.4.1-.8.6-1 1.5-.6 2.5-1.6 2.9-2.8-1-.4-1.8-.8-1.8-1.5 0-.5.4-.9 1.1-.9.5 0 1-.1 1.4-.3V7.7C7 4.2 8.9 2 12 2z"/></svg>',pinterest:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.1 2C6.6 2 3 5.7 3 10.2c0 2.1 1.1 4.6 2.8 5.4.3.1.5.1.6-.2l.5-2c.1-.3 0-.4-.2-.7-.6-.7-.9-1.5-.9-2.6 0-3.1 2.4-6 6.1-6 3.3 0 5.2 2 5.2 4.8 0 3.6-1.6 6.6-4 6.6-1.3 0-2.2-1.1-1.9-2.4.4-1.6 1.2-3.3 1.2-4.4 0-1-.6-1.9-1.7-1.9-1.3 0-2.4 1.4-2.4 3.3 0 1.2.4 2 .4 2s-1.4 5.9-1.7 6.9c-.5 2.1-.1 4.6 0 4.8.1.1.2.1.3 0 .1-.2 1.8-2.2 2.3-4.2.2-.6.9-3.4.9-3.4.5.9 1.8 1.6 3.2 1.6 4.2 0 7.1-3.9 7.1-9.1C20.8 5 17.4 2 12.1 2z"/></svg>',twitch:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4 2h17v12l-5 5h-4l-3 3H6v-3H2V6l2-4zm2 3v11h4v3l3-3h4l2-2V5H6zm5 3h2v5h-2V8zm5 0h2v5h-2V8z"/></svg>',discord:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19.5 5.2A16 16 0 0015.6 4l-.2.4a14.8 14.8 0 013.4 1.7 12.8 12.8 0 00-10.8 0 14.8 14.8 0 013.4-1.7L11.2 4a16 16 0 00-3.9 1.2C4.8 8.9 4.1 12.5 4.4 16c1.6 1.2 3.1 1.9 4.6 2.3l.9-1.5c-.5-.2-1-.4-1.5-.7l.4-.3a11.5 11.5 0 006.8 0l.4.3c-.5.3-1 .5-1.5.7l.9 1.5c1.5-.4 3-1.1 4.6-2.3.5-4.1-.8-7.6-2.5-10.8zM9.5 14.1c-.9 0-1.6-.8-1.6-1.8s.7-1.8 1.6-1.8 1.6.8 1.6 1.8-.7 1.8-1.6 1.8zm5 0c-.9 0-1.6-.8-1.6-1.8s.7-1.8 1.6-1.8 1.6.8 1.6 1.8-.7 1.8-1.6 1.8z"/></svg>',reddit:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22 12a2.4 2.4 0 00-4.1-1.7 11.6 11.6 0 00-5.1-1.4l.9-4.1 2.9.6a2 2 0 104-.4 2 2 0 00-3.5-1.2l-3.7-.8a.8.8 0 00-.9.6l-1.1 5.2a11.8 11.8 0 00-5.3 1.4A2.4 2.4 0 102.5 13c0 1 .6 1.8 1.4 2.2 0 .2-.1.4-.1.6 0 3.8 3.7 6.8 8.2 6.8s8.2-3 8.2-6.8c0-.2 0-.4-.1-.6A2.4 2.4 0 0022 12zM8.5 14.6a1.4 1.4 0 111.4-1.4 1.4 1.4 0 01-1.4 1.4zm6.9 3.8c-1 .8-2.1 1.1-3.4 1.1s-2.4-.4-3.4-1.1a.7.7 0 11.9-1.1c.7.5 1.5.8 2.5.8s1.8-.3 2.5-.8a.7.7 0 11.9 1.1zm.1-3.8a1.4 1.4 0 111.4-1.4 1.4 1.4 0 01-1.4 1.4z"/></svg>',patreon:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4 3h4v18H4V3zm11 0a6 6 0 110 12 6 6 0 010-12z"/></svg>',venmo:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.5 4.5c.4 6.6-5.6 15.2-10.1 15.2H6.2L4.5 6.2l3.7-.4 1 9.6c1.8-3 3.2-6.8 3-9.5l3.8-.8c.3 2.1-.1 4.2-.9 6.1 1.3-2.1 2-4.5 1.8-6.8h3.6z"/></svg>',cashapp:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.2 2l-.5 2.1c2 .2 3.5.9 4.7 1.9l-1.8 2.5c-1.1-.8-2.3-1.3-3.7-1.3-1.3 0-2.1.5-2.1 1.3 0 .9.8 1.2 2.9 2 3 .9 4.7 2.1 4.7 5 0 2.6-1.7 4.4-4.5 5l-.5 2.5H9.9l.5-2.4a8.6 8.6 0 01-5.1-2.3l2-2.5c1.3 1.1 2.8 1.8 4.5 1.8 1.5 0 2.4-.6 2.4-1.6 0-.9-.7-1.3-2.8-1.9-3.2-.9-4.8-2.2-4.8-4.8 0-2.5 1.7-4.3 4.4-4.9l.5-2.4h1.7z"/></svg>',email:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3 5h18a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V6a1 1 0 011-1zm9 8.2L4.8 7H4v.7l8 6.9 8-6.9V7h-.8L12 13.2z"/></svg>',website:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm6.9 9h-3.2a15.7 15.7 0 00-1.1-5 8.1 8.1 0 014.3 5zM12 4.1c.7 1 1.4 3.4 1.6 6.9h-3.2c.2-3.5.9-5.9 1.6-6.9zM4.1 13h3.2c.1 1.8.5 3.5 1.1 5a8.1 8.1 0 01-4.3-5zm3.2-2H4.1a8.1 8.1 0 014.3-5 15.7 15.7 0 00-1.1 5zM12 19.9c-.7-1-1.4-3.4-1.6-6.9h3.2c-.2 3.5-.9 5.9-1.6 6.9zm3.6-1.9c.6-1.5 1-3.2 1.1-5h3.2a8.1 8.1 0 01-4.3 5z"/></svg>',custom:l};return o[a]||o.custom}function I(e={}){if(!f(e.text))return"";const t=e.borderWidth||"0px",a=e.borderColor||"transparent",l=g({background:e.backgroundColor||"transparent",color:e.textColor||"inherit",fontFamily:e.fontFamily||"inherit",fontSize:e.fontSize||"inherit",fontWeight:e.fontWeight||"inherit",border:`${t} solid ${a}`,boxShadow:e.boxShadow||"none",textTransform:e.textTransform||"uppercase",borderRadius:e.radius||"0px",padding:e.padding||"14px 24px",textDecoration:"none",display:"inline-flex",alignItems:"center",justifyContent:"center",cursor:"pointer"});if(e.buttonType==="dropdown"){const o=g({background:e.dropdownBackgroundColor||"rgba(0,0,0,.96)",borderColor:e.dropdownBorderColor||"rgba(57,255,20,.55)",boxShadow:e.dropdownBoxShadow||"0 0 24px rgba(57,255,20,.35)",borderRadius:e.dropdownRadius||"16px",padding:e.dropdownPadding||"10px",minWidth:e.dropdownMinWidth||"190px"}),n=(e.dropdownLinks||[]).filter(i=>f(i.text)).map(i=>{const c=g({background:i.backgroundColor||"transparent",color:i.textColor||"#ffffff",fontFamily:i.fontFamily||"inherit",fontSize:i.fontSize||"14px",borderColor:i.borderColor||"transparent",boxShadow:i.boxShadow||"none",textTransform:i.textTransform||"uppercase",borderRadius:i.radius||"10px",padding:i.padding||"10px 12px"});return`<a href="${s(i.url||"#")}" target="_blank" rel="noopener noreferrer" style="${c}">${u(i.text)}</a>`}).join("");return`<div class="puck-dropdown"><button class="puck-btn puck-dropdown-trigger" type="button" style="${l}">${u(e.text)}</button><div class="puck-dropdown-menu" style="${o}">${n}</div></div>`}return`<a class="puck-btn" href="${s(e.url||"#")}" style="${l}">${u(e.text)}</a>`}function He(){return`
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
`}function De(e){return F(e.fontUrl)}function _e(e){const t=(e.buttons||[]).map(I).join("");return`<header class="puck-site-header ${e.headerPosition==="full"?"is-full-width":""}" style="${g({background:e.backgroundColor||"rgba(0,0,0,.72)",borderBottom:e.lineColor?`1px solid ${e.lineColor}`:"none",boxShadow:e.lineShadow||"none",width:e.width||"100%",maxWidth:e.maxWidth||"none",margin:e.margin||"0",padding:e.padding||"22px 40px"})}">
    <div class="puck-header-left">
      ${e.logoUrl&&e.logoPlacement!=="right"?`<a class="puck-header-logo-link logo-left" href="index.html" style="${g({"--logo-size":e.logoSize||"45px",background:e.logoBackgroundColor||"transparent",border:`${e.logoBorderWidth||"0px"} solid ${e.logoBorderColor||"transparent"}`,borderRadius:e.logoRadius||"999px",padding:e.logoPadding||"0px",boxShadow:e.logoBoxShadow||"none","--logo-image-shadow":e.logoImageShadow||"none"})}"><img class="puck-header-logo" src="${s(e.logoUrl)}" alt="${s(e.logoAlt||"Logo")}"></a>`:""}
      ${e.showBack!=="hide"?`<a class="puck-header-back" href="${s(e.backUrl||"index.html")}">${u(e.backText||"Back")}</a>`:""}
    </div>
    <nav class="puck-header-nav nav-${s(e.navPlacement||"right")}">${t}</nav>
    <div class="puck-header-right">
      ${e.logoUrl&&e.logoPlacement==="right"?`<a class="puck-header-logo-link logo-right" href="index.html" style="${g({"--logo-size":e.logoSize||"45px",background:e.logoBackgroundColor||"transparent",border:`${e.logoBorderWidth||"0px"} solid ${e.logoBorderColor||"transparent"}`,borderRadius:e.logoRadius||"999px",padding:e.logoPadding||"0px",boxShadow:e.logoBoxShadow||"none","--logo-image-shadow":e.logoImageShadow||"none"})}"><img class="puck-header-logo" src="${s(e.logoUrl)}" alt="${s(e.logoAlt||"Logo")}"></a>`:""}
    </div>
  </header>`}function Xe(e){const t=e.items||[],a=[...t,...t].map(l=>`<span class="song-name" style="${g({color:e.textColor||"var(--cream)",textShadow:e.textShadow||"none",borderColor:e.buttonBorderColor||"rgba(212, 162, 76, 0.25)"})}">${u(l.text)}</span>`).join("");return`<section class="songs-section puck-song-scroll ${e.stretchMode==="full"?"is-full-width":""}" aria-label="Songs We Play" style="${g({background:e.backgroundColor||"linear-gradient(90deg, var(--blue-deep) 0%, var(--charcoal-light) 50%, var(--blue-deep) 100%)",borderBottom:e.lineColor?`1px solid ${e.lineColor}`:"none",width:e.width||"100%",maxWidth:e.maxWidth||"none",margin:e.margin||"0"})}"><div class="songs-scroll-container"><div class="songs-scroll puck-song-track">${a}</div></div></section>`}function Z(e){const t=g({background:e.backgroundColor||"transparent",color:e.textColor||"inherit",padding:`${e.paddingY||70}px ${e.paddingX||24}px`}),a=g({width:e.imageWidth||"320px","--mobile-image-width":e.mobileImageWidth||e.imageWidth||"320px",borderRadius:e.imageRadius||"8px",boxShadow:e.imageShadow||"none"}),l=f(e.title)?`<h1 class="band-name puck-title" style="${g(S(e,"title"))}">${u(e.title)}</h1>`:"",o=f(e.subtitle)?`<p class="tagline puck-subtitle" style="${g(S(e,"subtitle"))}">${u(e.subtitle)}</p>`:"",n=f(e.body)?`<p class="description puck-body" style="${g(S(e,"body"))}">${q(e.body)}</p>`:"",i=(e.buttons||[]).map(I).join(""),c=l||o||n||i?`<div class="puck-text">${l}${o}${n}${i?`<div class="puck-buttons">${i}</div>`:""}</div>`:"",b=e.imageUrl?`<img class="puck-image puck-mobile-sized-image" src="${s(e.imageUrl)}" alt="${s(e.imageAlt||e.title||"Image")}" style="${a}">`:"";return`${F(e.customFontUrl)}<section class="puck-section" style="${t}"><div class="puck-inner puck-flex layout-${s(e.layout||"text-left")}" style="--gap:${Number(e.gap||50)}px;--max-width:${s(e.maxWidth||"1100px")}">${c}${b}</div></section>`}function Ye(e){const t=e.align||"center",a=g({background:e.backgroundColor||"transparent",color:e.textColor||"inherit",padding:`${e.paddingY||50}px ${e.paddingX||24}px`,textAlign:t}),l=f(e.eyebrow)?`<p class="teaser" style="${g(S(e,"eyebrow"))}">${u(e.eyebrow)}</p>`:"",o=f(e.title)?`<h2 class="puck-title" style="${g(S(e,"title"))}">${u(e.title)}</h2>`:"",n=f(e.body)?`<p class="puck-body" style="${g(S(e,"body"))}">${q(e.body)}</p>`:"",i=(e.buttons||[]).map(I).join("");return`${F(e.customFontUrl)}<section class="puck-section" style="${a}"><div class="puck-inner puck-text" style="max-width:${s(e.maxWidth||"850px")}">${l}${o}${n}${i?`<div class="puck-buttons">${i}</div>`:""}</div></section>`}function ee(e){const t=g({background:e.backgroundColor||"transparent",padding:`${e.paddingY||40}px ${e.paddingX||24}px`,textAlign:e.align||"center"}),a=g({width:e.width||"900px","--mobile-image-width":e.mobileWidth||e.width||"900px",borderRadius:e.radius||"8px",boxShadow:e.shadow||"none"}),l=f(e.title)?`<h2 class="puck-title" style="${g(S(e,"title"))}">${u(e.title)}</h2>`:"",o=e.imageUrl?`<img class="puck-image puck-mobile-sized-image" src="${s(e.imageUrl)}" alt="${s(e.imageAlt||e.title||"Image")}" style="${a}">`:"";return`${F(e.customFontUrl)}<section class="puck-section" style="${t}"><div class="puck-inner" style="max-width:${s(e.maxWidth||"1100px")}">${l}${o}</div></section>`}function Ve(e){const t=g({background:e.backgroundColor||"transparent",color:e.textColor||"inherit",padding:`${e.paddingY||50}px ${e.paddingX||24}px`,textAlign:"center"}),a=(e.buttons||[]).map(I).join("");return a?`${F(e.customFontUrl)}<section class="puck-section" style="${t}"><div class="puck-inner"><div class="puck-buttons">${a}</div></div></section>`:""}function te(e){const t=g({background:e.backgroundColor||"transparent",color:e.textColor||"inherit",padding:`${e.paddingY||60}px ${e.paddingX||24}px`,textAlign:"center"}),a=e.links||[],l=f(e.title)?`<p class="teaser" style="${g({color:e.titleColor||"inherit",fontFamily:e.titleFont||"inherit",fontSize:e.titleSize||"inherit",fontWeight:e.titleWeight||"inherit"})}">${u(e.title)}</p>`:"",o=a.filter(n=>f(n.url)).map(n=>`<a class="social-link" href="${s(n.url)}" target="_blank" rel="noopener noreferrer" title="${s(n.label||n.platform)}" style="${g({background:n.backgroundColor||"rgba(255,255,255,.03)",color:n.iconColor||"inherit",border:`${n.borderWidth||"1px"} solid ${n.borderColor||"rgba(255,255,255,.18)"}`,boxShadow:n.boxShadow||"none",borderRadius:n.radius||"999px",width:n.size||"44px",height:n.size||"44px",minWidth:n.size||"44px",minHeight:n.size||"44px",padding:n.padding||"0px","--social-svg-size":n.svgSize||"22px"})}">${Oe(n.platform,n.label)}</a>`).join("");return!l&&!o?"":`<footer class="puck-section social-section is-full-width" style="${t}"><div class="puck-inner">${l}${o?`<nav class="puck-social-links social-links">${o}</nav>`:""}</div></footer>`}function qe(e){const t=g({background:e.backgroundColor||"transparent",color:e.textColor||"inherit",padding:`${e.paddingY||40}px ${e.paddingX||24}px`,textAlign:"center"}),a=f(e.title)?`<h2 class="puck-title" style="${g({color:e.titleColor||"inherit",fontFamily:e.titleFont||"inherit",fontSize:e.titleSize||"2.5rem"})}">${u(e.title)}</h2>`:"",l=(e.images||[]).filter(o=>f(o.imageUrl)).map((o,n)=>{const i=`gallery-modal-${n}`;return`
        <figure class="puck-gallery-item">
          <a href="#${i}" class="puck-gallery-open">
            <img src="${s(o.imageUrl)}" alt="${s(o.imageAlt||"Gallery image")}">
          </a>
          ${f(o.caption)?`<figcaption>${u(o.caption)}</figcaption>`:""}
        </figure>

        <div id="${i}" class="puck-gallery-modal">
          <a href="#" class="puck-gallery-modal-backdrop" aria-label="Close gallery image"></a>
          <div class="puck-gallery-modal-content">
            <a href="#" class="puck-gallery-close" aria-label="Close gallery image">×</a>
            <img src="${s(o.imageUrl)}" alt="${s(o.imageAlt||"Gallery image")}">
            ${f(o.caption)?`<p>${u(o.caption)}</p>`:""}
          </div>
        </div>
      `}).join("");return`<section class="puck-section" style="${t}"><div class="puck-inner">${a}<div class="puck-gallery-grid" style="--cols:${Number(e.columns||3)};--gap:${Number(e.gap||18)}px">${l}</div></div></section>`}function Je(e){return`<div class="puck-spacer" style="height:${Number(e.height||40)}px;background:${s(e.backgroundColor||"transparent")}"></div>`}function Ke(e){const t=g({background:e.backgroundColor||"transparent",color:e.textColor||"inherit",padding:`${e.paddingY||50}px ${e.paddingX||24}px`}),l=(e.items||[]).map(o=>{const n=o.imageUrl?`<img class="puck-image" src="${s(o.imageUrl)}" alt="${s(o.title||"Column image")}" style="width:100%;border-radius:${s(e.imageRadius||"8px")};margin-bottom:16px;">`:"",i=f(o.title)?`<h3 style="${g({color:o.titleColor||"inherit",fontFamily:o.titleFont||"inherit",fontSize:o.titleSize||"inherit",fontWeight:o.titleWeight||"inherit"})}">${u(o.title)}</h3>`:"",c=f(o.body)?`<p style="${g({color:o.bodyColor||"inherit",fontFamily:o.bodyFont||"inherit",fontSize:o.bodySize||"inherit",fontWeight:o.bodyWeight||"inherit"})}">${q(o.body)}</p>`:"",b=I({text:o.buttonText,url:o.buttonUrl,backgroundColor:o.buttonBackgroundColor,textColor:o.buttonTextColor,fontFamily:o.buttonFont,fontSize:o.buttonFontSize,borderWidth:o.buttonBorderWidth,borderColor:o.buttonBorderColor,radius:o.buttonRadius,boxShadow:o.buttonBoxShadow,textTransform:o.buttonTextTransform});return n||i||c||b?`<div class="puck-card">${n}${i}${c}${b}</div>`:""}).join("");return l?`${F(e.customFontUrl)}<section class="puck-section" style="${t}"><div class="puck-inner"><div class="puck-columns" style="--cols:${Number(e.columns||2)};--gap:${Number(e.gap||24)}px">${l}</div></div></section>`:""}function Qe(e){const t=g({background:e.backgroundColor||"#000000",padding:`${e.paddingY||30}px ${e.paddingX||24}px ${e.paddingBottom||80}px`}),a=e.formAction||"https://docs.google.com/forms/d/e/1FAIpQLSc75dAf3CXeOinDkL-URjVql6_o3E2PcXKPhB3j-mFnl0JBMw/formResponse",l=e.nameEntry||"entry.821607845",o=e.emailEntry||"entry.216699627",n=e.phoneEntry||"entry.1566132030",i=e.zipEntry||"entry.848273318",c=e.successMessage||"Great, you are signed up and we will keep you updated.";return`<section class="puck-section graverobber-contact-form-section graverobber-signup-form-section" style="${t}">
    <div class="puck-inner graverobber-contact-inner">
      <form class="graverobber-custom-contact-form" action="${s(a)}" method="POST" target="graverobber-signup-hidden-frame" onsubmit="setTimeout(() => { this.reset(); this.querySelector('.graverobber-contact-success').textContent='${s(c)}'; }, 350);">
        <label>
          ${u(e.nameLabel||"What are you called?")}
          <input type="text" name="${s(l)}" required>
        </label>

        <label>
          ${u(e.emailLabel||"What is your email?")}
          <input type="email" name="${s(o)}" required>
        </label>

        <label>
          ${u(e.phoneLabel||"What is your phone number?")}
          <input type="tel" name="${s(n)}">
        </label>

        <label>
          ${u(e.zipLabel||"What is your zip code?")}
          <input type="text" name="${s(i)}">
        </label>

        <button type="submit">${u(e.buttonText||"Join the Crypt List")}</button>
        <p class="graverobber-contact-success" aria-live="polite"></p>
      </form>

      <iframe class="graverobber-hidden-submit-frame" name="graverobber-signup-hidden-frame" title="Hidden signup submit frame"></iframe>
    </div>
  </section>`}function Ze(e){const t=g({background:e.backgroundColor||"#000000",padding:`${e.paddingY||30}px ${e.paddingX||24}px ${e.paddingBottom||80}px`}),a=e.formAction||"https://docs.google.com/forms/d/e/1FAIpQLSfvFy-I4z36zqLz4y4boVhM4eTL7KEb5Ip1It7OZyFfxlRgMw/formResponse",l=e.nameEntry||"entry.111991046",o=e.emailEntry||"entry.709491702",n=e.messageEntry||"entry.905150677",i=e.successMessage||"Great, your message was sent and we will get back to you shortly.";return`<section class="puck-section graverobber-contact-form-section" style="${t}">
    <div class="puck-inner graverobber-contact-inner">
      <form class="graverobber-custom-contact-form" action="${s(a)}" method="POST" target="graverobber-contact-hidden-frame" onsubmit="setTimeout(() => { this.reset(); this.querySelector('.graverobber-contact-success').textContent='${s(i)}'; }, 350);">
        <label>
          ${u(e.nameLabel||"What are you called?")}
          <input type="text" name="${s(l)}" required>
        </label>

        <label>
          ${u(e.emailLabel||"What is your email?")}
          <input type="email" name="${s(o)}" required>
        </label>

        <label>
          ${u(e.messageLabel||"What do you want?")}
          <textarea name="${s(n)}" rows="${Number(e.messageRows||7)}" required></textarea>
        </label>

        <button type="submit">${u(e.buttonText||"Send Message")}</button>
        <p class="graverobber-contact-success" aria-live="polite"></p>
      </form>

      <iframe class="graverobber-hidden-submit-frame" name="graverobber-contact-hidden-frame" title="Hidden contact submit frame"></iframe>
    </div>
  </section>`}function et(e){return`<section class="puck-section" style="${g({padding:`${e.paddingY||30}px ${e.paddingX||24}px`,background:e.backgroundColor||"transparent"})}"><div class="puck-inner">${e.html||""}</div></section>`}const tt={GalleryGrid:qe,GraveRobberHero:Z,GraveRobberLogo:ee,GraveRobberSocial:te,HeaderNav:_e,SongScroll:Xe,FontLoader:De,Hero:Z,TextBlock:Ye,ImageBlock:ee,ButtonRow:Ve,SocialIcons:te,Spacer:Je,Columns:Ke,SignupForm:Qe,ContactForm:Ze,Embed:et};function wt(e){return((e==null?void 0:e.content)||[]).map(a=>{const l=tt[a.type];return l?l(a.props||{}):""}).join(`
`)}const ot="graverobberpunk",rt=["inherit","Arial, sans-serif","Helvetica, sans-serif","Verdana, sans-serif","Tahoma, sans-serif","Trebuchet MS, sans-serif","Georgia, serif","Times New Roman, serif","Garamond, serif","Courier New, monospace","Lucida Console, monospace","Impact, sans-serif","Palatino, serif","Gill Sans, sans-serif","Century Gothic, sans-serif","Playfair Display, serif","Montserrat, sans-serif","Oswald, sans-serif","Roboto, sans-serif","Open Sans, sans-serif","Lato, sans-serif","Poppins, sans-serif","Raleway, sans-serif","Bebas Neue, sans-serif","Anton, sans-serif","Inter, sans-serif","Nunito, sans-serif","Merriweather, serif","Lora, serif","Cinzel, serif","Cormorant Garamond, serif","Abril Fatface, serif","Permanent Marker, cursive","Rock Salt, cursive","Bangers, cursive","Creepster, cursive","Metal Mania, cursive","Special Elite, cursive","Rye, cursive","Orbitron, sans-serif","Audiowide, cursive","Black Ops One, cursive","Russo One, sans-serif","Libre Baskerville, serif","Source Sans 3, sans-serif","Source Serif 4, serif","Josefin Sans, sans-serif","Quicksand, sans-serif","Dancing Script, cursive","Pacifico, cursive","Satisfy, cursive","Shadows Into Light, cursive","Fira Sans, sans-serif","Fira Code, monospace","Ubuntu, sans-serif","Work Sans, sans-serif","DM Sans, sans-serif","Space Grotesk, sans-serif","Manrope, sans-serif"],oe=[{label:"Facebook",value:"facebook"},{label:"Instagram",value:"instagram"},{label:"TikTok",value:"tiktok"},{label:"YouTube",value:"youtube"},{label:"Spotify",value:"spotify"},{label:"Bandcamp",value:"bandcamp"},{label:"SoundCloud",value:"soundcloud"},{label:"Apple Music",value:"apple"},{label:"X / Twitter",value:"x"},{label:"Threads",value:"threads"},{label:"Bluesky",value:"bluesky"},{label:"LinkedIn",value:"linkedin"},{label:"Snapchat",value:"snapchat"},{label:"Pinterest",value:"pinterest"},{label:"Twitch",value:"twitch"},{label:"Discord",value:"discord"},{label:"Reddit",value:"reddit"},{label:"Patreon",value:"patreon"},{label:"Venmo",value:"venmo"},{label:"Cash App",value:"cashapp"},{label:"Email",value:"email"},{label:"Website",value:"website"},{label:"Custom",value:"custom"}];function E(e){return JSON.parse(JSON.stringify(e))}function at(){const e=localStorage.getItem("adminToken")||"";return e?{Authorization:`Bearer ${e}`}:{}}function lt({value:e,onChange:t,label:a}){const l=e&&String(e).startsWith("#")?e:"#ffffff";return r.jsxs("div",{className:"puck-custom-field puck-color-field",children:[r.jsx("label",{children:a}),r.jsxs("div",{className:"puck-color-row",children:[r.jsx("input",{type:"color",value:l,onChange:o=>t(o.target.value)}),r.jsx("input",{type:"text",value:e||"",placeholder:"#ffffff, transparent, inherit",onChange:o=>t(o.target.value)})]})]})}const nt=[{label:"Left",value:"left"},{label:"Center",value:"center"},{label:"Right",value:"right"}];function z(e,t={}){return{type:"text",label:e,placeholder:t.placeholder||"Example: 100px"}}function d(e){return{type:"custom",label:e,render:({value:t,onChange:a})=>r.jsx(lt,{value:t||"",onChange:a,label:e})}}function it({value:e,onChange:t,label:a}){return r.jsxs("div",{className:"puck-custom-field",children:[r.jsx("label",{children:a}),r.jsx("select",{value:e||"inherit",onChange:l=>t(l.target.value),children:rt.map(l=>r.jsx("option",{value:l,children:l},l))}),r.jsx("input",{type:"text",value:e||"",placeholder:"Or type any font-family name",onChange:l=>t(l.target.value)})]})}function y(e){return{type:"custom",label:e,render:({value:t,onChange:a})=>r.jsx(it,{value:t||"inherit",onChange:a,label:e})}}function dt({value:e,onChange:t,label:a}){const[l,o]=be.useState("");async function n(i){var h;const c=(h=i.target.files)==null?void 0:h[0];if(!c)return;if(!c.type.startsWith("image/")){o("Please choose an image file.");return}const b=window.BAND_API_BASE;if(!b){o("Upload failed: API base is missing.");return}const m=new FormData;m.append("image",c),o("Uploading image...");try{const w=await fetch(`${b}/uploads/${ot}`,{method:"POST",headers:at(),body:m}),k=await w.json();if(!w.ok||!k.url){o(k.error||"Upload failed.");return}t(k.url),o("Image uploaded. Click Publish to save the page.")}catch{o("Upload failed. Make sure backend/Cloudinary are working.")}finally{i.target.value=""}}return r.jsxs("div",{className:"puck-upload-field",children:[r.jsx("label",{children:a||"Image"}),e?r.jsxs("div",{className:"puck-upload-preview",children:[r.jsx("img",{src:e,alt:"Selected upload"}),r.jsx("code",{children:e})]}):r.jsx("p",{className:"puck-upload-empty",children:"No image selected."}),r.jsx("input",{type:"file",accept:"image/*",onChange:n}),r.jsx("button",{type:"button",onClick:()=>t(""),children:"Remove Image"}),l&&r.jsx("p",{className:"puck-upload-status",children:l})]})}function v(e){return{type:"custom",label:e,render:({value:t,onChange:a})=>r.jsx(dt,{value:t||"",onChange:a,label:e})}}function st({value:e,onChange:t,label:a}){return r.jsxs("div",{className:"puck-custom-field",children:[r.jsx("label",{children:a}),r.jsx("input",{type:"text",value:e||"",placeholder:"Paste Google Fonts @import URL or font CSS URL",onChange:l=>t(l.target.value)}),r.jsx("small",{children:"Example: https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"})]})}function T(e="External Font URL"){return{type:"custom",label:e,render:({value:t,onChange:a})=>r.jsx(st,{value:t||"",onChange:a,label:e})}}const C=e=>({[`${e}Color`]:d("Text Color"),[`${e}Font`]:y("Font"),[`${e}Size`]:{type:"text",label:"Font Size",placeholder:"3rem, 48px, 120%"},[`${e}Weight`]:{type:"select",label:"Bold / Normal",options:[{label:"Default",value:"inherit"},{label:"Normal",value:"400"},{label:"Bold",value:"700"},{label:"Extra Bold",value:"900"},{label:"Light",value:"300"}]},[`${e}Style`]:{type:"select",label:"Italic",options:[{label:"Default",value:"inherit"},{label:"Normal",value:"normal"},{label:"Italic",value:"italic"}]},[`${e}Decoration`]:{type:"select",label:"Underline",options:[{label:"None",value:"none"},{label:"Underline",value:"underline"},{label:"Line Through",value:"line-through"}]},[`${e}Transform`]:{type:"select",label:"Text Case",options:[{label:"Default",value:"none"},{label:"UPPERCASE",value:"uppercase"},{label:"lowercase",value:"lowercase"},{label:"Capitalize",value:"capitalize"}]},[`${e}LetterSpacing`]:{type:"text",label:"Letter Spacing",placeholder:"normal, 2px, .08em"},[`${e}LineHeight`]:{type:"text",label:"Line Height",placeholder:"normal, 1.2, 32px"},[`${e}Shadow`]:{type:"text",label:"Text Shadow",placeholder:"none or 0 0 10px #22d3ee"}}),W={type:"array",label:"Buttons",arrayFields:{text:{type:"text",label:"Button Text"},url:{type:"text",label:"Button Link"},buttonType:{type:"select",label:"Button Type",options:[{label:"Normal Link Button",value:"link"},{label:"Dropdown Button",value:"dropdown"}]},dropdownLinks:{type:"array",label:"Dropdown Links",arrayFields:{text:{type:"text",label:"Dropdown Link Text"},url:{type:"text",label:"Dropdown Link URL"},backgroundColor:d("Dropdown Link Background"),textColor:d("Dropdown Link Text Color"),fontFamily:y("Dropdown Link Font"),fontSize:{type:"text",label:"Dropdown Link Font Size",placeholder:"14px"},borderColor:d("Dropdown Link Border Color"),boxShadow:{type:"text",label:"Dropdown Link Glow / Shadow",placeholder:"none or 0 0 14px #00ff04"},textTransform:{type:"select",label:"Dropdown Link Text Case",options:[{label:"Default",value:""},{label:"Uppercase",value:"uppercase"},{label:"Normal",value:"none"},{label:"Lowercase",value:"lowercase"},{label:"Capitalize",value:"capitalize"}]},radius:{type:"text",label:"Dropdown Link Rounded Corners",placeholder:"10px"},padding:{type:"text",label:"Dropdown Link Padding",placeholder:"10px 12px"}},defaultItemProps:{text:"New Dropdown Link",url:"#",backgroundColor:"transparent",textColor:"#ffffff",fontFamily:"inherit",fontSize:"14px",borderColor:"transparent",boxShadow:"none",textTransform:"uppercase",radius:"10px",padding:"10px 12px"}},dropdownBackgroundColor:d("Dropdown Menu Background"),dropdownBorderColor:d("Dropdown Menu Border Color"),dropdownBoxShadow:{type:"text",label:"Dropdown Menu Glow / Shadow",placeholder:"0 0 24px rgba(57,255,20,.35)"},dropdownRadius:{type:"text",label:"Dropdown Menu Rounded Corners",placeholder:"16px"},dropdownPadding:{type:"text",label:"Dropdown Menu Padding",placeholder:"10px"},dropdownMinWidth:{type:"text",label:"Dropdown Menu Width",placeholder:"190px"},backgroundColor:d("Button Background"),textColor:d("Button Text Color"),fontFamily:y("Button Font"),fontSize:{type:"text",label:"Button Font Size",placeholder:"16px"},borderWidth:{type:"select",label:"Border",options:[{label:"No Border",value:"0px"},{label:"Thin Border",value:"1px"},{label:"Medium Border",value:"2px"},{label:"Thick Border",value:"4px"}]},borderColor:d("Border Color"),boxShadow:{type:"text",label:"Button Glow / Shadow",placeholder:"none or 0 0 20px #22d3ee"},textTransform:{type:"select",label:"Text Case",options:[{label:"Default",value:""},{label:"Uppercase",value:"uppercase"},{label:"Normal",value:"none"},{label:"Lowercase",value:"lowercase"},{label:"Capitalize",value:"capitalize"}]},radius:{type:"text",label:"Button Rounded Corners",placeholder:"999px"},padding:{type:"text",label:"Button Padding",placeholder:"14px 24px"}},defaultItemProps:{text:"New Button",url:"#",buttonType:"link",dropdownLinks:[],dropdownBackgroundColor:"rgba(0,0,0,.96)",dropdownBorderColor:"rgba(57,255,20,.55)",dropdownBoxShadow:"0 0 24px rgba(57,255,20,.35)",dropdownRadius:"16px",dropdownPadding:"10px",dropdownMinWidth:"190px",backgroundColor:"#8b3df4",textColor:"#ffffff",fontFamily:"inherit",fontSize:"16px",borderWidth:"0px",borderColor:"rgba(255,255,255,.25)",boxShadow:"none",textTransform:"uppercase",radius:"999px",padding:"14px 24px"}},j={backgroundColor:d("Section Background"),textColor:d("Default Text Color"),paddingY:{type:"number",label:"Top/Bottom Padding"},paddingX:{type:"number",label:"Left/Right Padding"}};function L(e){return e?r.jsx("style",{children:`@import url('${e}');`}):null}function R({button:e}){if(!(e!=null&&e.text))return null;const t=e.borderWidth||"0px",a=e.borderColor||"transparent",l={background:e.backgroundColor||"transparent",color:e.textColor||"inherit",fontFamily:e.fontFamily||"inherit",fontSize:e.fontSize||"inherit",fontWeight:e.fontWeight||"inherit",border:`${t} solid ${a}`,boxShadow:e.boxShadow||"none",textTransform:e.textTransform||"uppercase",borderRadius:e.radius||"0px",padding:e.padding||"14px 24px",textDecoration:"none",display:"inline-flex",alignItems:"center",justifyContent:"center",cursor:"pointer"};return e.buttonType==="dropdown"?r.jsxs("div",{className:"puck-dropdown",children:[r.jsx("button",{className:"puck-btn puck-dropdown-trigger",type:"button",style:l,children:e.text}),r.jsx("div",{className:"puck-dropdown-menu",style:{background:e.dropdownBackgroundColor||"rgba(0,0,0,.96)",borderColor:e.dropdownBorderColor||"rgba(57,255,20,.55)",boxShadow:e.dropdownBoxShadow||"0 0 24px rgba(57,255,20,.35)",borderRadius:e.dropdownRadius||"16px",padding:e.dropdownPadding||"10px",minWidth:e.dropdownMinWidth||"190px"},children:(e.dropdownLinks||[]).map((o,n)=>r.jsx("a",{href:o.url||"#",style:{background:o.backgroundColor||"transparent",color:o.textColor||"#ffffff",fontFamily:o.fontFamily||"inherit",fontSize:o.fontSize||"14px",borderColor:o.borderColor||"transparent",boxShadow:o.boxShadow||"none",textTransform:o.textTransform||"uppercase",borderRadius:o.radius||"10px",padding:o.padding||"10px 12px"},children:o.text||"Dropdown Link"},n))})]}):r.jsx("a",{className:"puck-btn",href:e.url||"#",style:l,children:e.text})}function ct({platform:e,label:t}){const a=String(e||"custom").toLowerCase().trim();return a==="facebook"?r.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.019 4.388 10.994 10.125 11.854v-8.385H7.078v-3.469h3.047V9.431c0-3.007 1.791-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.249h3.328l-.532 3.469h-2.796v8.385C19.612 23.067 24 18.092 24 12.073z"})}):a==="instagram"?r.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3.5A4.5 4.5 0 1112 16a4.5 4.5 0 010-9zm0 2A2.5 2.5 0 1012 14a2.5 2.5 0 000-5zm5.25-3.25a1.25 1.25 0 11-1.25 1.25 1.25 1.25 0 011.25-1.25z"})}):a==="spotify"?r.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M12 1.8A10.2 10.2 0 1022.2 12 10.2 10.2 0 0012 1.8zm4.68 14.72a.76.76 0 01-1.05.25 9.58 9.58 0 00-7.28-.78.76.76 0 11-.44-1.46 11.13 11.13 0 018.52.94.76.76 0 01.25 1.05zm1.25-2.77a.9.9 0 01-1.24.3 11.75 11.75 0 00-8.62-.96.9.9 0 11-.52-1.72 13.5 13.5 0 019.96 1.14.9.9 0 01.42 1.24zm.13-2.94a14.15 14.15 0 00-10.4-1.13 1.05 1.05 0 11-.61-2.01 16.3 16.3 0 0112.08 1.32 1.05 1.05 0 11-1.07 1.82z"})}):a==="youtube"?r.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 00.5 6.2 31.5 31.5 0 000 12a31.5 31.5 0 00.5 5.8 3 3 0 002.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 002.1-2.1A31.5 31.5 0 0024 12a31.5 31.5 0 00-.5-5.8zM9.6 15.6V8.4L15.8 12l-6.2 3.6z"})}):r.jsxs("svg",{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:[r.jsx("circle",{cx:"12",cy:"12",r:"9"}),r.jsx("path",{d:"M8 12h8M12 8v8",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})]})}function $({children:e,backgroundColor:t="transparent",textColor:a="inherit",paddingY:l=50,paddingX:o=24}){return r.jsx("section",{className:"puck-section",style:{background:t,color:a,padding:`${l}px ${o}px`},children:e})}function pt(e){return r.jsx("section",{className:"puck-section graverobber-contact-form-section graverobber-signup-form-section",style:{background:e.backgroundColor||"#000000",padding:`${e.paddingY||30}px ${e.paddingX||24}px ${e.paddingBottom||80}px`},children:r.jsxs("div",{className:"puck-inner graverobber-contact-inner",children:[r.jsxs("form",{className:"graverobber-custom-contact-form",onSubmit:t=>t.preventDefault(),children:[r.jsxs("label",{children:[e.nameLabel||"What are you called?",r.jsx("input",{type:"text",name:e.nameEntry||"entry.821607845"})]}),r.jsxs("label",{children:[e.emailLabel||"What is your email?",r.jsx("input",{type:"email",name:e.emailEntry||"entry.216699627"})]}),r.jsxs("label",{children:[e.phoneLabel||"What is your phone number?",r.jsx("input",{type:"tel",name:e.phoneEntry||"entry.1566132030"})]}),r.jsxs("label",{children:[e.zipLabel||"What is your zip code?",r.jsx("input",{type:"text",name:e.zipEntry||"entry.848273318"})]}),r.jsx("button",{type:"submit",children:e.buttonText||"Join the Crypt List"}),r.jsx("p",{className:"graverobber-contact-success","aria-live":"polite",children:e.successMessage||""})]}),r.jsx("iframe",{className:"graverobber-hidden-submit-frame",name:"graverobber-signup-hidden-frame",title:"Hidden signup submit frame"})]})})}function bt(e){return r.jsx("section",{className:"puck-section graverobber-contact-form-section",style:{background:e.backgroundColor||"#000000",padding:`${e.paddingY||30}px ${e.paddingX||24}px ${e.paddingBottom||80}px`},children:r.jsxs("div",{className:"puck-inner graverobber-contact-inner",children:[r.jsxs("form",{className:"graverobber-custom-contact-form",onSubmit:t=>t.preventDefault(),children:[r.jsxs("label",{children:[e.nameLabel||"What are you called?",r.jsx("input",{type:"text",name:e.nameEntry||"entry.111991046"})]}),r.jsxs("label",{children:[e.emailLabel||"What is your email?",r.jsx("input",{type:"email",name:e.emailEntry||"entry.709491702"})]}),r.jsxs("label",{children:[e.messageLabel||"What do you want?",r.jsx("textarea",{name:e.messageEntry||"entry.905150677",rows:Number(e.messageRows||7)})]}),r.jsx("button",{type:"submit",children:e.buttonText||"Send Message"}),r.jsx("p",{className:"graverobber-contact-success","aria-live":"polite",children:e.successMessage||""})]}),r.jsx("iframe",{className:"graverobber-hidden-submit-frame",name:"graverobber-contact-hidden-frame",title:"Hidden contact submit frame"})]})})}const M=[{type:"Hero",props:{id:"graverobber-hero-1",title:"Grave Robber",subtitle:"AMERICAN HORROR PUNK",body:"Horror punk from beyond the grave. Shows, music, merch, booking, and updates.",imageUrl:"assets/grave-robber-skull.png",imageAlt:"Grave Robber skull logo",layout:"center",titleSize:"5rem",titleColor:"#f2f2f2",titleFont:"Creepster, cursive",titleWeight:"700",titleLetterSpacing:"normal",subtitleSize:"1.25rem",subtitleColor:"#c62828",subtitleFont:"Oswald, sans-serif",subtitleWeight:"700",subtitleLetterSpacing:".14em",bodySize:"1.1rem",bodyColor:"#d6d6d6",bodyFont:"Special Elite, cursive",bodyWeight:"400",bodyLetterSpacing:"normal",imageWidth:"300px",imageRadius:"0px",imageShadow:"0 0 55px rgba(198,40,40,.45)",maxWidth:1e3,gap:35,backgroundColor:"transparent",textColor:"#ffffff",paddingY:70,paddingX:24,customFontUrl:"",buttons:[{text:"Shows",url:"shows.html",backgroundColor:"#c62828",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"16px",borderWidth:"0px",borderColor:"transparent",boxShadow:"0 0 24px rgba(198,40,40,.35)",textTransform:"uppercase",radius:"999px",padding:"16px 34px"},{text:"Join the Crypt List",url:"signup.html",backgroundColor:"transparent",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"16px",borderWidth:"1px",borderColor:"rgba(255,255,255,.35)",boxShadow:"none",textTransform:"uppercase",radius:"999px",padding:"16px 34px"},{text:"Booking",url:"mailto:graverobber.punk@gmail.com",backgroundColor:"transparent",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"16px",borderWidth:"1px",borderColor:"rgba(198,40,40,.65)",boxShadow:"none",textTransform:"uppercase",radius:"999px",padding:"16px 34px"}]}},{type:"ImageBlock",props:{id:"graverobber-image-1",title:"",titleSize:"3rem",titleColor:"#ffffff",titleFont:"Creepster, cursive",imageUrl:"assets/grave-robber-logo-stacked.png",imageAlt:"Grave Robber logo",width:"520px",radius:"12px",shadow:"0 20px 60px rgba(0,0,0,.55)",align:"center",maxWidth:"900px",backgroundColor:"transparent",paddingY:30,paddingX:24,customFontUrl:""}},{type:"ButtonRow",props:{id:"graverobber-buttons-1",backgroundColor:"transparent",textColor:"#ffffff",paddingY:40,paddingX:24,customFontUrl:"",buttons:[{text:"Shows",url:"shows.html",backgroundColor:"#c62828",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"16px",borderWidth:"0px",borderColor:"transparent",boxShadow:"0 0 24px rgba(198,40,40,.35)",textTransform:"uppercase",radius:"999px",padding:"16px 34px"},{text:"Crypt List",url:"signup.html",backgroundColor:"transparent",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"16px",borderWidth:"1px",borderColor:"rgba(255,255,255,.35)",boxShadow:"none",textTransform:"uppercase",radius:"999px",padding:"16px 34px"}]}},{type:"SocialIcons",props:{id:"graverobber-social-1",title:"Follow Grave Robber",titleColor:"#ffffff",titleFont:"Oswald, sans-serif",titleSize:"1rem",titleWeight:"700",backgroundColor:"transparent",textColor:"#ffffff",paddingY:50,paddingX:24,links:[{platform:"facebook",label:"Facebook",url:"https://www.facebook.com/graverobberpunk",iconColor:"#ffffff",backgroundColor:"rgba(198,40,40,.14)",borderColor:"rgba(198,40,40,.55)"},{platform:"instagram",label:"Instagram",url:"https://www.instagram.com/graverobberpunk",iconColor:"#ffffff",backgroundColor:"rgba(198,40,40,.14)",borderColor:"rgba(198,40,40,.55)"},{platform:"x",label:"X",url:"https://x.com/graverobberpunk",iconColor:"#ffffff",backgroundColor:"rgba(198,40,40,.14)",borderColor:"rgba(198,40,40,.55)"},{platform:"threads",label:"Threads",url:"https://www.threads.net/@graverobberpunk",iconColor:"#ffffff",backgroundColor:"rgba(198,40,40,.14)",borderColor:"rgba(198,40,40,.55)"},{platform:"tiktok",label:"TikTok",url:"https://www.tiktok.com/@graverobberpunk",iconColor:"#ffffff",backgroundColor:"rgba(198,40,40,.14)",borderColor:"rgba(198,40,40,.55)"},{platform:"spotify",label:"Spotify",url:"https://open.spotify.com/artist/4D34aUp0OsDs8mAEWPIP7c",iconColor:"#ffffff",backgroundColor:"rgba(198,40,40,.14)",borderColor:"rgba(198,40,40,.55)"},{platform:"youtube",label:"YouTube",url:"https://www.youtube.com/@GraveRobberPunk",iconColor:"#ffffff",backgroundColor:"rgba(198,40,40,.14)",borderColor:"rgba(198,40,40,.55)"},{platform:"bandcamp",label:"Bandcamp",url:"https://graverobberpunk.bandcamp.com/",iconColor:"#ffffff",backgroundColor:"rgba(198,40,40,.14)",borderColor:"rgba(198,40,40,.55)"},{platform:"soundcloud",label:"SoundCloud",url:"https://soundcloud.com/graverobberofficial",iconColor:"#ffffff",backgroundColor:"rgba(198,40,40,.14)",borderColor:"rgba(198,40,40,.55)"},{platform:"apple",label:"Apple Music",url:"https://music.apple.com/us/artist/grave-robber/279558434",iconColor:"#ffffff",backgroundColor:"rgba(198,40,40,.14)",borderColor:"rgba(198,40,40,.55)"},{platform:"website",label:"Merch Store",url:"https://graverobber.bigcartel.com/",iconColor:"#ffffff",backgroundColor:"rgba(198,40,40,.14)",borderColor:"rgba(198,40,40,.55)"},{platform:"email",label:"Email",url:"mailto:graverobber.punk@gmail.com",iconColor:"#ffffff",backgroundColor:"rgba(198,40,40,.14)",borderColor:"rgba(198,40,40,.55)"}]}}],gt=[{label:"Grave Robber Ombre",value:"grave-ombre"},{label:"Solid Color",value:"solid"},{label:"Vertical Gradient",value:"vertical-gradient"},{label:"Horizontal Gradient",value:"horizontal-gradient"},{label:"Diagonal Gradient",value:"diagonal-gradient"},{label:"Radial Center Glow",value:"radial-glow"},{label:"Top Spotlight",value:"top-glow"},{label:"Bottom Spotlight",value:"bottom-glow"},{label:"Left Glow",value:"left-glow"},{label:"Right Glow",value:"right-glow"},{label:"Double Glow",value:"double-glow"},{label:"Triple Horror Fog",value:"triple-fog"},{label:"Red Black Vignette",value:"red-vignette"},{label:"Custom CSS",value:"custom"}],ue={backgroundStyle:"grave-ombre",pageBaseColor:"#030000",pageSecondColor:"#160000",pageThirdColor:"#000000",pageGlowColor:"rgba(198,40,40,.18)",pageSecondGlowColor:"rgba(198,40,40,.10)",pageThirdGlowColor:"rgba(0,0,0,.65)",pageTextColor:"#f5f0e6",pageGradientAngle:"180deg",pageGlowPosition:"center 18%",pageGlowSize:"34%",pageSecondGlowPosition:"center 70%",pageSecondGlowSize:"45%",pageThirdGlowPosition:"center center",pageThirdGlowSize:"75%",customBackgroundCss:""};function ut(e={}){const t={...ue,...e||{}},a=t.pageBaseColor||"#030000",l=t.pageSecondColor||"#160000",o=t.pageThirdColor||"#000000",n=t.pageGlowColor||"rgba(198,40,40,.18)",i=t.pageSecondGlowColor||"rgba(198,40,40,.10)",c=t.pageThirdGlowColor||"rgba(0,0,0,.65)",b=t.pageGradientAngle||"180deg",m=t.pageGlowPosition||"center 18%",h=t.pageGlowSize||"34%",w=t.pageSecondGlowPosition||"center 70%",k=t.pageSecondGlowSize||"45%",fe=t.pageThirdGlowPosition||"center center",xe=t.pageThirdGlowSize||"75%";return t.backgroundStyle==="solid"?a:t.backgroundStyle==="vertical-gradient"?`linear-gradient(180deg, ${l} 0%, ${a} 55%, ${o} 100%)`:t.backgroundStyle==="horizontal-gradient"?`linear-gradient(90deg, ${l} 0%, ${a} 50%, ${o} 100%)`:t.backgroundStyle==="diagonal-gradient"?`linear-gradient(${b}, ${l} 0%, ${a} 52%, ${o} 100%)`:t.backgroundStyle==="radial-glow"?`radial-gradient(circle at ${m}, ${n}, transparent ${h}), ${a}`:t.backgroundStyle==="top-glow"?`radial-gradient(circle at top center, ${n}, transparent ${h}), linear-gradient(180deg, ${l}, ${a})`:t.backgroundStyle==="bottom-glow"?`radial-gradient(circle at bottom center, ${n}, transparent ${h}), linear-gradient(180deg, ${a}, ${l})`:t.backgroundStyle==="left-glow"?`radial-gradient(circle at left center, ${n}, transparent ${h}), linear-gradient(90deg, ${l}, ${a})`:t.backgroundStyle==="right-glow"?`radial-gradient(circle at right center, ${n}, transparent ${h}), linear-gradient(90deg, ${a}, ${l})`:t.backgroundStyle==="double-glow"?`radial-gradient(circle at ${m}, ${n}, transparent ${h}), radial-gradient(circle at ${w}, ${i}, transparent ${k}), ${a}`:t.backgroundStyle==="triple-fog"?`radial-gradient(circle at ${m}, ${n}, transparent ${h}), radial-gradient(circle at ${w}, ${i}, transparent ${k}), radial-gradient(circle at ${fe}, ${c}, transparent ${xe}), linear-gradient(${b}, ${l}, ${a}, ${o})`:t.backgroundStyle==="red-vignette"?`radial-gradient(circle at ${m}, ${n}, transparent ${h}), radial-gradient(circle at center, transparent 0%, transparent 52%, ${c} 100%), linear-gradient(${b}, ${l}, ${a}, ${o})`:t.backgroundStyle==="custom"?t.customBackgroundCss||a:`radial-gradient(circle at ${m}, ${n}, transparent ${h}), radial-gradient(circle at ${w}, ${i}, transparent ${k}), linear-gradient(180deg, ${l}, ${a})`}function mt(e="home"){return e==="contact"?[{type:"HeaderNav",props:{id:"graverobber-contact-header-1",backgroundColor:"#000000",lineColor:"#bb00ff",lineShadow:"0 0 24px #bb00ff",showBack:"show",backText:"Back",backUrl:"index.html",logoUrl:"assets/grave-robber-skull.png",logoAlt:"Grave Robber",logoSize:"52px",logoPlacement:"right",width:"100%",maxWidth:"none",margin:"0",padding:"18px 28px",navPlacement:"center",headerPosition:"full",buttons:[{text:"Home",url:"index.html",backgroundColor:"#000000",textColor:"#bb00ff",fontFamily:"Oswald, sans-serif",fontSize:"14px",borderWidth:"1px",borderColor:"#00ff04",boxShadow:"0 0 24px #00ff04",textTransform:"uppercase",radius:"999px",padding:"10px 16px"},{text:"Shows",url:"shows.html",backgroundColor:"#000000",textColor:"#bb00ff",fontFamily:"Oswald, sans-serif",fontSize:"14px",borderWidth:"1px",borderColor:"#00ff04",boxShadow:"0 0 24px #00ff04",textTransform:"uppercase",radius:"999px",padding:"10px 16px"},{text:"Admin",url:"admin.html",backgroundColor:"#000000",textColor:"#bb00ff",fontFamily:"Oswald, sans-serif",fontSize:"14px",borderWidth:"1px",borderColor:"#00ff04",boxShadow:"0 0 24px #00ff04",textTransform:"uppercase",radius:"999px",padding:"10px 16px"}]}},{type:"ContactForm",props:{id:"graverobber-contact-form-1",formAction:"https://docs.google.com/forms/d/e/1FAIpQLSfvFy-I4z36zqLz4y4boVhM4eTL7KEb5Ip1It7OZyFfxlRgMw/formResponse",nameEntry:"entry.111991046",emailEntry:"entry.709491702",messageEntry:"entry.905150677",nameLabel:"What are you called?",emailLabel:"What is your email?",messageLabel:"What do you want?",messageRows:7,buttonText:"Send Message",successMessage:"Great, your message was sent and we will get back to you shortly.",backgroundColor:"#000000",paddingY:30,paddingX:24,paddingBottom:80}},{type:"GraveRobberSocial",props:{id:"graverobber-contact-social-1",title:"Follow Grave Robber",titleColor:"#00ff04",titleFont:"Oswald, sans-serif",titleSize:"1rem",backgroundColor:"#000000",textColor:"#00ff04",paddingY:50,paddingX:24,links:[{platform:"facebook",label:"Facebook",url:"https://www.facebook.com/graverobberpunk",iconColor:"#bb00ff",backgroundColor:"#000000",borderColor:"#00ff04"},{platform:"instagram",label:"Instagram",url:"https://www.instagram.com/graverobberpunk",iconColor:"#bb00ff",backgroundColor:"#000000",borderColor:"#00ff04"},{platform:"spotify",label:"Spotify",url:"https://open.spotify.com/artist/4D34aUp0OsDs8mAEWPIP7c",iconColor:"#bb00ff",backgroundColor:"#000000",borderColor:"#00ff04"},{platform:"youtube",label:"YouTube",url:"https://www.youtube.com/@GraveRobberPunk",iconColor:"#bb00ff",backgroundColor:"#000000",borderColor:"#00ff04"},{platform:"email",label:"Email",url:"mailto:graverobber.punk@gmail.com",iconColor:"#bb00ff",backgroundColor:"#000000",borderColor:"#00ff04"}]}}]:e==="shows"?[{type:"HeaderNav",props:{id:"graverobber-shows-header-1",backgroundColor:"rgba(0,0,0,.86)",lineColor:"rgba(198,40,40,.65)",lineShadow:"0 0 24px rgba(198,40,40,.28)",showBack:"show",backText:"Back",backUrl:"index.html",logoUrl:"assets/grave-robber-skull.png",logoAlt:"Grave Robber",logoSize:"52px",logoPlacement:"right",width:"100%",maxWidth:"none",margin:"0",padding:"18px 28px",navPlacement:"center",headerPosition:"full",buttons:[{text:"Home",url:"index.html",backgroundColor:"transparent",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"14px",borderWidth:"1px",borderColor:"rgba(198,40,40,.55)",boxShadow:"none",textTransform:"uppercase",radius:"999px",padding:"10px 16px"},{text:"Shows",url:"shows.html",backgroundColor:"#c62828",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"14px",borderWidth:"0px",borderColor:"transparent",boxShadow:"none",textTransform:"uppercase",radius:"999px",padding:"10px 16px"},{text:"Crypt List",url:"signup.html",backgroundColor:"transparent",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"14px",borderWidth:"1px",borderColor:"rgba(198,40,40,.55)",boxShadow:"none",textTransform:"uppercase",radius:"999px",padding:"10px 16px"}]}},{type:"TextBlock",props:{id:"graverobber-shows-title-1",eyebrow:"Live from the crypt",eyebrowColor:"#c62828",eyebrowFont:"Oswald, sans-serif",eyebrowSize:"1rem",eyebrowWeight:"700",title:"Shows",titleSize:"4rem",titleColor:"#ffffff",titleFont:"Creepster, cursive",titleWeight:"700",body:"Join the crypt list to hear when the next haunt is announced.",bodySize:"1.1rem",bodyColor:"#d6d6d6",bodyFont:"Special Elite, cursive",bodyWeight:"400",align:"center",maxWidth:"850px",backgroundColor:"transparent",textColor:"#ffffff",paddingY:70,paddingX:24,customFontUrl:"",buttons:[{text:"Get Notified",url:"signup.html",backgroundColor:"#c62828",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"16px",borderWidth:"0px",borderColor:"transparent",boxShadow:"0 0 24px rgba(198,40,40,.35)",textTransform:"uppercase",radius:"999px",padding:"16px 34px"}]}},{type:"Embed",props:{html:'<div id="upcoming-shows"></div><div id="no-shows-message" class="empty-state"><h2>Shows Coming Soon</h2><p>Join the crypt list to hear when the next haunt is announced.</p><a href="signup.html" class="primary-btn">Get Notified</a></div><section class="past-shows-section hidden"><h2>Past Shows</h2><div id="past-shows"></div></section>',backgroundColor:"transparent",paddingY:20,paddingX:24}}]:e==="signup"?[{type:"HeaderNav",props:{id:"graverobber-signup-header-1",backgroundColor:"rgba(0,0,0,.86)",lineColor:"rgba(198,40,40,.65)",lineShadow:"0 0 24px rgba(198,40,40,.28)",showBack:"show",backText:"Back",backUrl:"index.html",logoUrl:"assets/grave-robber-skull.png",logoAlt:"Grave Robber",logoSize:"52px",logoPlacement:"right",width:"100%",maxWidth:"none",margin:"0",padding:"18px 28px",navPlacement:"center",headerPosition:"full",buttons:[{text:"Home",url:"index.html",backgroundColor:"transparent",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"14px",borderWidth:"1px",borderColor:"rgba(198,40,40,.55)",boxShadow:"none",textTransform:"uppercase",radius:"999px",padding:"10px 16px"},{text:"Shows",url:"shows.html",backgroundColor:"transparent",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"14px",borderWidth:"1px",borderColor:"rgba(198,40,40,.55)",boxShadow:"none",textTransform:"uppercase",radius:"999px",padding:"10px 16px"},{text:"Crypt List",url:"signup.html",backgroundColor:"#c62828",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"14px",borderWidth:"0px",borderColor:"transparent",boxShadow:"none",textTransform:"uppercase",radius:"999px",padding:"10px 16px"}]}},{type:"TextBlock",props:{id:"graverobber-signup-title-1",eyebrow:"Join the underground",eyebrowColor:"#c62828",eyebrowFont:"Oswald, sans-serif",eyebrowSize:"1rem",eyebrowWeight:"700",title:"Crypt List",titleSize:"4rem",titleColor:"#ffffff",titleFont:"Creepster, cursive",titleWeight:"700",body:"Get show updates, music news, and dispatches from the grave.",bodySize:"1.1rem",bodyColor:"#d6d6d6",bodyFont:"Special Elite, cursive",bodyWeight:"400",align:"center",maxWidth:"850px",backgroundColor:"transparent",textColor:"#ffffff",paddingY:70,paddingX:24,customFontUrl:"",buttons:[]}},{type:"Embed",props:{html:'<form id="signup-form" class="custom-form"><label>Name<input type="text" name="name" required></label><label>Email<input type="email" name="email" required></label><label>Phone<input type="tel" name="phone"></label><label>Message<textarea name="message" rows="5"></textarea></label><button type="submit">Join the Crypt List</button><p id="signup-status"></p></form>',backgroundColor:"transparent",paddingY:20,paddingX:24}}]:e==="contact"?[{type:"HeaderNav",props:{id:"graverobber-contact-header-1",backgroundColor:"rgba(0,0,0,.86)",lineColor:"#00ff04",lineShadow:"0 0 24px #00ff04",showBack:"show",backText:"Back",backUrl:"index.html",logoUrl:"assets/grave-robber-skull.png",logoAlt:"Grave Robber",logoSize:"52px",logoPlacement:"right",width:"100%",maxWidth:"none",margin:"0",padding:"18px 28px",navPlacement:"center",headerPosition:"full",buttons:[{text:"Home",url:"index.html",backgroundColor:"transparent",textColor:"#bb00ff",fontFamily:"Oswald, sans-serif",fontSize:"14px",borderWidth:"1px",borderColor:"#00ff04",boxShadow:"0 0 24px #00ff04",textTransform:"uppercase",radius:"999px",padding:"10px 16px"},{text:"Shows",url:"shows.html",backgroundColor:"transparent",textColor:"#bb00ff",fontFamily:"Oswald, sans-serif",fontSize:"14px",borderWidth:"1px",borderColor:"#00ff04",boxShadow:"0 0 24px #00ff04",textTransform:"uppercase",radius:"999px",padding:"10px 16px"},{text:"Music",url:"index.html#music",backgroundColor:"transparent",textColor:"#bb00ff",fontFamily:"Oswald, sans-serif",fontSize:"14px",borderWidth:"1px",borderColor:"#00ff04",boxShadow:"0 0 24px #00ff04",textTransform:"uppercase",radius:"999px",padding:"10px 16px"},{text:"Merch",url:"merch.html",backgroundColor:"transparent",textColor:"#bb00ff",fontFamily:"Oswald, sans-serif",fontSize:"14px",borderWidth:"1px",borderColor:"#00ff04",boxShadow:"0 0 24px #00ff04",textTransform:"uppercase",radius:"999px",padding:"10px 16px"},{text:"Contact",url:"contact.html",backgroundColor:"#000000",textColor:"#bb00ff",fontFamily:"Oswald, sans-serif",fontSize:"14px",borderWidth:"1px",borderColor:"#00ff04",boxShadow:"0 0 24px #00ff04",textTransform:"uppercase",radius:"999px",padding:"10px 16px"}]}},{type:"TextBlock",props:{id:"graverobber-contact-title-1",eyebrow:"Booking / Contact",eyebrowColor:"#00ff04",eyebrowFont:"Oswald, sans-serif",eyebrowSize:"1rem",eyebrowWeight:"700",title:"Contact Grave Robber",titleSize:"4rem",titleColor:"#bb00ff",titleFont:"Creepster, cursive",titleWeight:"700",body:"Use the form below for booking, merch, press, and general contact.",bodySize:"1.1rem",bodyColor:"#ffffff",bodyFont:"Oswald, sans-serif",bodyWeight:"400",align:"center",maxWidth:"850px",backgroundColor:"#000000",textColor:"#ffffff",paddingY:70,paddingX:24,customFontUrl:"",buttons:[]}},{type:"Embed",props:{html:'<div class="graverobber-contact-form-wrap"><iframe class="graverobber-contact-form" src="https://docs.google.com/forms/d/e/1FAIpQLSfvFy-I4z36zqLz4y4boVhM4eTL7KEb5Ip1It7OZyFfxlRgMw/viewform?embedded=true" width="640" height="721" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe></div>',backgroundColor:"#000000",paddingY:30,paddingX:24}}]:e==="merch"?[{type:"HeaderNav",props:{id:"graverobber-merch-header-1",backgroundColor:"rgba(0,0,0,.86)",lineColor:"rgba(198,40,40,.65)",lineShadow:"0 0 24px rgba(198,40,40,.28)",showBack:"show",backText:"Back",backUrl:"index.html",logoUrl:"assets/grave-robber-skull.png",logoAlt:"Grave Robber",logoSize:"52px",logoPlacement:"right",width:"100%",maxWidth:"none",margin:"0",padding:"18px 28px",navPlacement:"center",headerPosition:"full",buttons:[{text:"Home",url:"index.html",backgroundColor:"transparent",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"14px",borderWidth:"1px",borderColor:"rgba(198,40,40,.55)",boxShadow:"none",textTransform:"uppercase",radius:"999px",padding:"10px 16px"},{text:"Shows",url:"shows.html",backgroundColor:"transparent",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"14px",borderWidth:"1px",borderColor:"rgba(198,40,40,.55)",boxShadow:"none",textTransform:"uppercase",radius:"999px",padding:"10px 16px"},{text:"Merch",url:"merch.html",backgroundColor:"#c62828",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"14px",borderWidth:"0px",borderColor:"transparent",boxShadow:"none",textTransform:"uppercase",radius:"999px",padding:"10px 16px"},{text:"Gallery",url:"gallery.html",backgroundColor:"transparent",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"14px",borderWidth:"1px",borderColor:"rgba(198,40,40,.55)",boxShadow:"none",textTransform:"uppercase",radius:"999px",padding:"10px 16px"}]}},{type:"TextBlock",props:{id:"graverobber-merch-title-1",eyebrow:"Official Grave Robber merch",title:"Merch",body:"Add merch items, store links, photos, and announcements here.",align:"center",maxWidth:"850px",backgroundColor:"transparent",textColor:"#ffffff",paddingY:70,paddingX:24,titleColor:"#ffffff",titleFont:"Creepster, cursive",titleSize:"4rem",bodyColor:"#d6d6d6",bodyFont:"Oswald, sans-serif",bodySize:"1.1rem",buttons:[{text:"Visit Merch Store",url:"https://graverobber.bigcartel.com/",backgroundColor:"#c62828",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"16px",borderWidth:"0px",borderColor:"transparent",boxShadow:"0 0 24px rgba(198,40,40,.35)",textTransform:"uppercase",radius:"999px",padding:"16px 34px"}]}}]:e==="gallery"?[{type:"HeaderNav",props:{id:"graverobber-gallery-header-1",backgroundColor:"rgba(0,0,0,.86)",lineColor:"rgba(198,40,40,.65)",lineShadow:"0 0 24px rgba(198,40,40,.28)",showBack:"show",backText:"Back",backUrl:"index.html",logoUrl:"assets/grave-robber-skull.png",logoAlt:"Grave Robber",logoSize:"52px",logoPlacement:"right",width:"100%",maxWidth:"none",margin:"0",padding:"18px 28px",navPlacement:"center",headerPosition:"full",buttons:[{text:"Home",url:"index.html",backgroundColor:"transparent",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"14px",borderWidth:"1px",borderColor:"rgba(198,40,40,.55)",boxShadow:"none",textTransform:"uppercase",radius:"999px",padding:"10px 16px"},{text:"Shows",url:"shows.html",backgroundColor:"transparent",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"14px",borderWidth:"1px",borderColor:"rgba(198,40,40,.55)",boxShadow:"none",textTransform:"uppercase",radius:"999px",padding:"10px 16px"},{text:"Merch",url:"merch.html",backgroundColor:"transparent",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"14px",borderWidth:"1px",borderColor:"rgba(198,40,40,.55)",boxShadow:"none",textTransform:"uppercase",radius:"999px",padding:"10px 16px"},{text:"Gallery",url:"gallery.html",backgroundColor:"#c62828",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"14px",borderWidth:"0px",borderColor:"transparent",boxShadow:"none",textTransform:"uppercase",radius:"999px",padding:"10px 16px"}]}},{type:"TextBlock",props:{id:"graverobber-gallery-title-1",eyebrow:"Photos from the crypt",title:"Gallery",body:"Add photos, flyers, videos, and live shots here.",align:"center",maxWidth:"850px",backgroundColor:"transparent",textColor:"#ffffff",paddingY:70,paddingX:24,titleColor:"#ffffff",titleFont:"Creepster, cursive",titleSize:"4rem",bodyColor:"#d6d6d6",bodyFont:"Oswald, sans-serif",bodySize:"1.1rem",buttons:[]}},{type:"ImageBlock",props:{id:"graverobber-gallery-image-1",title:"",imageUrl:"assets/grave-robber-logo-stacked.png",imageAlt:"Grave Robber gallery image",width:"520px",radius:"12px",shadow:"0 20px 60px rgba(0,0,0,.55)",align:"center",maxWidth:"900px",backgroundColor:"transparent",paddingY:30,paddingX:24}}]:[{type:"HeaderNav",props:{id:"graverobber-home-header-1",backgroundColor:"rgba(0,0,0,.86)",lineColor:"rgba(198,40,40,.65)",lineShadow:"0 0 24px rgba(198,40,40,.28)",showBack:"hide",backText:"Back",backUrl:"index.html",logoUrl:"assets/grave-robber-skull.png",logoAlt:"Grave Robber",logoSize:"52px",logoPlacement:"left",width:"100%",maxWidth:"none",margin:"0",padding:"18px 28px",navPlacement:"center",headerPosition:"full",buttons:[{text:"Home",url:"index.html",backgroundColor:"#c62828",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"14px",borderWidth:"0px",borderColor:"transparent",boxShadow:"none",textTransform:"uppercase",radius:"999px",padding:"10px 16px"},{text:"Shows",url:"shows.html",backgroundColor:"transparent",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"14px",borderWidth:"1px",borderColor:"rgba(198,40,40,.55)",boxShadow:"none",textTransform:"uppercase",radius:"999px",padding:"10px 16px"},{text:"Crypt List",url:"signup.html",backgroundColor:"transparent",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"14px",borderWidth:"1px",borderColor:"rgba(198,40,40,.55)",boxShadow:"none",textTransform:"uppercase",radius:"999px",padding:"10px 16px"},{text:"Merch",url:"merch.html",buttonType:"dropdown",dropdownLinks:[{text:"Merch Store",url:"https://graverobber.bigcartel.com/"}],backgroundColor:"transparent",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"14px",borderWidth:"1px",borderColor:"rgba(198,40,40,.55)",boxShadow:"none",textTransform:"uppercase",radius:"999px",padding:"10px 16px"}]}},{type:"GraveRobberHero",props:{id:"graverobber-home-hero-1",title:"Grave Robber",subtitle:"AMERICAN HORROR PUNK",body:"Horror punk from beyond the grave. Shows, music, merch, booking, and updates.",imageUrl:"assets/grave-robber-skull.png",imageAlt:"Grave Robber skull logo",layout:"image-top",imageWidth:"300px",imageRadius:"0px",imageShadow:"0 0 90px rgba(198,40,40,.38)",titleSize:"44px",titleColor:"#f5f0e6",titleFont:"Oswald, sans-serif",titleWeight:"700",subtitleSize:"18px",subtitleColor:"#e52b2b",subtitleFont:"Oswald, sans-serif",subtitleWeight:"700",subtitleLetterSpacing:".45em",subtitleTransform:"uppercase",bodySize:"18px",bodyColor:"#cfd3d6",bodyFont:"Oswald, sans-serif",bodyWeight:"400",backgroundColor:"transparent",textColor:"#ffffff",paddingY:120,paddingX:24,maxWidth:900,gap:34,buttons:[{text:"Shows",url:"shows.html",backgroundColor:"#c62828",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"16px",borderWidth:"0px",borderColor:"transparent",boxShadow:"0 0 24px rgba(198,40,40,.45)",textTransform:"uppercase",radius:"999px",padding:"16px 34px"},{text:"Music",url:"#music",backgroundColor:"#8b3df4",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"16px",borderWidth:"0px",borderColor:"transparent",boxShadow:"0 0 24px rgba(57,255,20,.45)",textTransform:"uppercase",radius:"999px",padding:"16px 34px"},{text:"Join the Army of the Dead",url:"signup.html",backgroundColor:"#b000ff",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"16px",borderWidth:"0px",borderColor:"transparent",boxShadow:"0 0 24px rgba(57,255,20,.55)",textTransform:"uppercase",radius:"999px",padding:"16px 34px"},{text:"Gallery",url:"gallery.html",backgroundColor:"#8b3df4",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"16px",borderWidth:"0px",borderColor:"transparent",boxShadow:"none",textTransform:"uppercase",radius:"999px",padding:"16px 34px"},{text:"Merch",url:"merch.html",backgroundColor:"#8b3df4",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"16px",borderWidth:"0px",borderColor:"transparent",boxShadow:"none",textTransform:"uppercase",radius:"999px",padding:"16px 34px"},{text:"Booking",url:"contact.html",backgroundColor:"#b000ff",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"16px",borderWidth:"0px",borderColor:"transparent",boxShadow:"0 0 24px rgba(57,255,20,.45)",textTransform:"uppercase",radius:"999px",padding:"16px 34px"}]}},{type:"Spacer",props:{id:"graverobber-home-divider-space-1",height:40,backgroundColor:"transparent"}},{type:"GraveRobberSocial",props:{id:"graverobber-home-social-1",title:"Follow Grave Robber",titleColor:"#ffffff",titleFont:"Oswald, sans-serif",titleSize:"1rem",backgroundColor:"transparent",textColor:"#ffffff",paddingY:50,paddingX:24,links:[{platform:"facebook",label:"Facebook",url:"https://www.facebook.com/graverobberpunk",iconColor:"#ffffff",backgroundColor:"transparent",borderColor:"rgba(255,255,255,.35)"},{platform:"instagram",label:"Instagram",url:"https://www.instagram.com/graverobberpunk",iconColor:"#ffffff",backgroundColor:"transparent",borderColor:"rgba(255,255,255,.35)"},{platform:"spotify",label:"Spotify",url:"https://open.spotify.com/artist/4D34aUp0OsDs8mAEWPIP7c",iconColor:"#ffffff",backgroundColor:"transparent",borderColor:"rgba(255,255,255,.35)"}]}}]}function ft(e="home"){return{root:{props:{title:`Grave Robber ${e.charAt(0).toUpperCase()+e.slice(1)}`,...ue}},content:mt(e)}}function xt(){if(typeof window>"u")return"home";const e=window.location.pathname.split("/").pop()||"index.html";return e==="index.html"||e===""?"home":e.replace(".html","")}ft(xt());const H={root:{fields:{title:{type:"text",label:"Page Title"},backgroundStyle:{type:"select",label:"Page Background Style",options:gt},pageBaseColor:d("Base Color"),pageSecondColor:d("Second Color"),pageThirdColor:d("Third / Vignette Color"),pageGlowColor:d("Main Glow / Ombre Color"),pageSecondGlowColor:d("Second Glow Color"),pageThirdGlowColor:d("Third Glow / Darkness Color"),pageTextColor:d("Default Page Text Color"),pageGradientAngle:{type:"text",label:"Gradient Direction / Angle",placeholder:"Example: 180deg, 135deg, 90deg"},pageGlowPosition:{type:"text",label:"Main Glow Position",placeholder:"Example: center 18%, top center, left 20%"},pageGlowSize:{type:"text",label:"Main Glow Spread / Size",placeholder:"Example: 34%, 50%, 420px"},pageSecondGlowPosition:{type:"text",label:"Second Glow Position",placeholder:"Example: center 70%, right center"},pageSecondGlowSize:{type:"text",label:"Second Glow Spread / Size",placeholder:"Example: 45%, 600px"},pageThirdGlowPosition:{type:"text",label:"Third Glow Position",placeholder:"Example: center center, bottom center"},pageThirdGlowSize:{type:"text",label:"Third Glow Spread / Size",placeholder:"Example: 75%, 900px"},customBackgroundCss:{type:"textarea",label:"Custom Background CSS",placeholder:"Example: radial-gradient(circle, red, black)"}},render:({children:e,...t})=>r.jsx("div",{style:{minHeight:"100vh",background:ut(t),color:t.pageTextColor||"#f5f0e6"},children:e})},components:{GraveRobberHero:{label:"01 Site Block: Grave Robber Main Horror Hero",fields:{title:{type:"text",label:"Title"},subtitle:{type:"text",label:"Subtitle"},body:{type:"textarea",label:"Body Text"},imageUrl:v("Image"),imageAlt:{type:"text",label:"Image Alt Text"},layout:{type:"select",label:"Layout",options:[{label:"Centered",value:"center"},{label:"Image Top",value:"image-top"},{label:"Text Left / Image Right",value:"text-left"},{label:"Text Right / Image Left",value:"text-right"}]},imageWidth:z("Image Width",{placeholder:"Example: 900px"}),mobileImageWidth:z("Mobile Image Width",{placeholder:"Example: 70vw or 280px"}),imageRadius:z("Image Rounded Corners",{placeholder:"Example: 50%"}),imageShadow:{type:"text",label:"Image Shadow / Glow CSS",placeholder:"Example: 0 0 40px currentColor"},titleSize:z("Title Font Size",{placeholder:"Example: 72px"}),titleColor:d("Title Color"),titleFont:y("Title Font"),subtitleColor:d("Subtitle Color"),bodyColor:d("Body Color"),backgroundColor:d("Section Background"),textColor:d("Default Text Color"),paddingY:{type:"number",label:"Top/Bottom Padding"},paddingX:{type:"number",label:"Left/Right Padding"},buttons:W},defaultProps:{title:"Grave Robber",subtitle:"AMERICAN HORROR PUNK",body:"Horror punk from beyond the grave. Shows, music, merch, booking, and updates.",imageUrl:"assets/grave-robber-skull.png",imageAlt:"Grave Robber skull logo",layout:"center",imageWidth:"300px",mobileImageWidth:"70vw",imageRadius:"0px",imageShadow:"0 0 55px rgba(198,40,40,.45)",titleSize:"80px",titleColor:"#f2f2f2",titleFont:"Creepster, cursive",subtitleColor:"#c62828",bodyColor:"#d6d6d6",backgroundColor:"transparent",textColor:"#ffffff",paddingY:70,paddingX:24,buttons:[{text:"Shows",url:"shows.html",backgroundColor:"#c62828",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"16px",borderWidth:"0px",borderColor:"transparent",boxShadow:"0 0 24px rgba(198,40,40,.35)",textTransform:"uppercase",radius:"999px",padding:"16px 34px"},{text:"Join the Crypt List",url:"signup.html",backgroundColor:"transparent",textColor:"#ffffff",fontFamily:"Oswald, sans-serif",fontSize:"16px",borderWidth:"1px",borderColor:"rgba(255,255,255,.35)",radius:"999px",padding:"16px 34px"}]},render:e=>H.components.Hero.render(e)},GraveRobberLogo:{label:"01 Site Block: Grave Robber Stacked Logo",fields:{imageUrl:v("Logo Image"),imageAlt:{type:"text",label:"Image Alt Text"},width:z("Image Width",{placeholder:"Example: 520px"}),radius:z("Rounded Corners",{placeholder:"Example: 12px"}),shadow:{type:"text",label:"Image Shadow / Glow CSS"},align:{type:"select",label:"Image Placement",options:nt},backgroundColor:d("Section Background"),paddingY:{type:"number",label:"Top/Bottom Padding"},paddingX:{type:"number",label:"Left/Right Padding"}},defaultProps:{imageUrl:"assets/grave-robber-logo-stacked.png",imageAlt:"Grave Robber logo",width:"520px",radius:"12px",shadow:"0 20px 60px rgba(0,0,0,.55)",align:"center",backgroundColor:"transparent",paddingY:30,paddingX:24},render:e=>H.components.ImageBlock.render(e)},GraveRobberSocial:{label:"01 Site Block: Grave Robber Social / Merch Links",fields:{title:{type:"text",label:"Title"},titleColor:d("Title Color"),titleFont:y("Title Font"),titleSize:{type:"text",label:"Title Font Size"},backgroundColor:d("Section Background"),paddingY:{type:"number",label:"Top/Bottom Padding"},paddingX:{type:"number",label:"Left/Right Padding"},links:{type:"array",label:"Links",arrayFields:{platform:{type:"select",label:"Platform",options:oe},label:{type:"text",label:"Label"},url:{type:"text",label:"URL"},iconColor:d("Icon Color"),backgroundColor:d("Icon Background"),borderWidth:{type:"select",label:"Icon Border",options:[{label:"No Border",value:"0px"},{label:"Thin Border",value:"1px"},{label:"Medium Border",value:"2px"},{label:"Thick Border",value:"4px"}]},borderColor:d("Icon Border"),boxShadow:{type:"text",label:"Icon Glow / Shadow",placeholder:"0 0 24px #00ff04"},radius:{type:"text",label:"Icon Rounded Corners",placeholder:"999px"},size:{type:"text",label:"Icon Button Size",placeholder:"44px"},svgSize:{type:"text",label:"Symbol Size",placeholder:"22px"},padding:{type:"text",label:"Icon Padding",placeholder:"0px"}},defaultItemProps:{platform:"custom",label:"Link",url:"#",iconColor:"#bb00ff",backgroundColor:"#000000",borderWidth:"1px",borderColor:"#00ff04",boxShadow:"0 0 24px #00ff04",radius:"999px",size:"44px",svgSize:"22px",padding:"0px"}}},defaultProps:{title:"Follow Grave Robber",titleColor:"#ffffff",titleFont:"Oswald, sans-serif",titleSize:"1rem",backgroundColor:"transparent",paddingY:50,paddingX:24,links:[{platform:"facebook",label:"Facebook",url:"https://www.facebook.com/graverobberpunk",iconColor:"#ffffff",backgroundColor:"rgba(198,40,40,.18)",borderColor:"rgba(198,40,40,.65)"},{platform:"instagram",label:"Instagram",url:"https://www.instagram.com/graverobberpunk",iconColor:"#ffffff",backgroundColor:"rgba(198,40,40,.18)",borderColor:"rgba(198,40,40,.65)"},{platform:"spotify",label:"Spotify",url:"https://open.spotify.com/artist/4D34aUp0OsDs8mAEWPIP7c",iconColor:"#ffffff",backgroundColor:"rgba(198,40,40,.18)",borderColor:"rgba(198,40,40,.65)"}]},render:e=>H.components.SocialIcons.render(e)},HeaderNav:{label:"02 Add Block: Header / Page Navigation",fields:{backgroundColor:d("Header Background"),lineColor:d("Bottom Line Color"),lineShadow:{type:"text",label:"Bottom Line Shadow",placeholder:"0 0 24px rgba(77,198,225,.22)"},showBack:{type:"select",label:"Back Button",options:[{label:"Show",value:"show"},{label:"Hide",value:"hide"}]},backText:{type:"text",label:"Back Text"},backUrl:{type:"text",label:"Back Link"},logoUrl:v("Header Logo"),logoAlt:{type:"text",label:"Logo Alt Text"},logoSize:{type:"text",label:"Logo Size",placeholder:"45px"},logoPlacement:{type:"select",label:"Logo Placement",options:[{label:"Left",value:"left"},{label:"Right",value:"right"}]},logoBackgroundColor:d("Logo Background Color"),logoBorderWidth:{type:"text",label:"Logo Border Width",placeholder:"0px or 1px"},logoBorderColor:d("Logo Border Color"),logoRadius:{type:"text",label:"Logo Rounded Corners",placeholder:"999px or 0px"},logoPadding:{type:"text",label:"Logo Padding",placeholder:"0px"},logoBoxShadow:{type:"text",label:"Logo Shadow / Glow",placeholder:"0 0 24px #00ff04"},logoImageShadow:{type:"text",label:"Logo Image Shadow / Glow",placeholder:"0 0 18px #00ff04"},width:{type:"text",label:"Header Width",placeholder:"100%, 1200px, 80vw"},maxWidth:{type:"text",label:"Header Max Width",placeholder:"none or 1200px"},margin:{type:"text",label:"Header Margin",placeholder:"0 auto"},padding:{type:"text",label:"Header Padding",placeholder:"22px 40px"},navPlacement:{type:"select",label:"Button Placement",options:[{label:"Left",value:"left"},{label:"Center",value:"center"},{label:"Right",value:"right"}]},headerPosition:{type:"select",label:"Header Stretch Mode",options:[{label:"Normal",value:"normal"},{label:"Full Browser Width",value:"full"}]},buttons:W},defaultProps:{backgroundColor:"rgba(0,0,0,.72)",lineColor:"rgba(77,198,225,.45)",lineShadow:"0 0 24px rgba(77,198,225,.22)",showBack:"show",backText:"Back",backUrl:"index.html",logoUrl:"assets/grave-robber-skull.png",logoAlt:"Grave Robber Logo",logoSize:"45px",logoPlacement:"left",logoBackgroundColor:"transparent",logoBorderWidth:"0px",logoBorderColor:"transparent",logoRadius:"999px",logoPadding:"0px",logoBoxShadow:"none",logoImageShadow:"none",width:"100%",maxWidth:"none",margin:"0",padding:"22px 40px",navPlacement:"right",headerPosition:"full",buttons:[{text:"Home",url:"index.html",backgroundColor:"transparent",textColor:"#4dc6e1",fontFamily:"inherit",fontSize:"14px",borderWidth:"1px",borderColor:"rgba(77,198,225,.45)",boxShadow:"0 0 16px rgba(77,198,225,.12)",textTransform:"uppercase",radius:"999px",padding:"10px 16px"},{text:"Shows",url:"shows.html",backgroundColor:"transparent",textColor:"#4dc6e1",fontFamily:"inherit",fontSize:"14px",borderWidth:"1px",borderColor:"rgba(77,198,225,.45)",boxShadow:"0 0 16px rgba(77,198,225,.12)",textTransform:"uppercase",radius:"999px",padding:"10px 16px"},{text:"Signup",url:"signup.html",backgroundColor:"transparent",textColor:"#4dc6e1",fontFamily:"inherit",fontSize:"14px",borderWidth:"1px",borderColor:"rgba(77,198,225,.45)",boxShadow:"0 0 16px rgba(77,198,225,.12)",textTransform:"uppercase",radius:"999px",padding:"10px 16px"},{text:"Contact",url:"contact.html",backgroundColor:"transparent",textColor:"#4dc6e1",fontFamily:"inherit",fontSize:"14px",borderWidth:"1px",borderColor:"rgba(77,198,225,.45)",boxShadow:"0 0 16px rgba(77,198,225,.12)",textTransform:"uppercase",radius:"999px",padding:"10px 16px"},{text:"Admin",url:"admin.html",backgroundColor:"transparent",textColor:"#4dc6e1",fontFamily:"inherit",fontSize:"14px",borderWidth:"1px",borderColor:"rgba(77,198,225,.45)",boxShadow:"0 0 16px rgba(77,198,225,.12)",textTransform:"uppercase",radius:"999px",padding:"10px 16px"}]},render:e=>r.jsxs("header",{className:`puck-site-header ${e.headerPosition==="full"?"is-full-width":""}`,style:{background:e.backgroundColor||"rgba(0,0,0,.72)",borderBottom:`1px solid ${e.lineColor||"rgba(77,198,225,.45)"}`,boxShadow:e.lineShadow||"none",width:e.width||"100%",maxWidth:e.maxWidth||"none",margin:e.margin||"0",padding:e.padding||"22px 40px"},children:[r.jsxs("div",{className:"puck-header-left",children:[e.logoUrl&&e.logoPlacement!=="right"&&r.jsx("a",{className:"puck-header-logo-link logo-left",href:"index.html",style:{"--logo-size":e.logoSize||"45px","--logo-image-shadow":e.logoImageShadow||"none",background:e.logoBackgroundColor||"transparent",border:`${e.logoBorderWidth||"0px"} solid ${e.logoBorderColor||"transparent"}`,borderRadius:e.logoRadius||"999px",padding:e.logoPadding||"0px",boxShadow:e.logoBoxShadow||"none"},children:r.jsx("img",{className:"puck-header-logo",src:e.logoUrl,alt:e.logoAlt||"Logo"})}),e.showBack!=="hide"&&r.jsx("a",{className:"puck-header-back",href:e.backUrl||"index.html",children:e.backText||"Back"})]}),r.jsx("nav",{className:`puck-header-nav nav-${e.navPlacement||"right"}`,children:(e.buttons||[]).map((t,a)=>r.jsx(R,{button:t},a))}),r.jsx("div",{className:"puck-header-right",children:e.logoUrl&&e.logoPlacement==="right"&&r.jsx("a",{className:"puck-header-logo-link logo-right",href:"index.html",style:{"--logo-size":e.logoSize||"45px","--logo-image-shadow":e.logoImageShadow||"none",background:e.logoBackgroundColor||"transparent",border:`${e.logoBorderWidth||"0px"} solid ${e.logoBorderColor||"transparent"}`,borderRadius:e.logoRadius||"999px",padding:e.logoPadding||"0px",boxShadow:e.logoBoxShadow||"none"},children:r.jsx("img",{className:"puck-header-logo",src:e.logoUrl,alt:e.logoAlt||"Logo"})})})]})},SongScroll:{label:"02 Add Block: Song Scroll",fields:{backgroundColor:d("Scroll Background"),lineColor:d("Bottom Line Color"),textColor:d("Song Text Color"),textShadow:{type:"text",label:"Song Text Shadow"},buttonBorderColor:d("Song Border Color"),width:{type:"text",label:"Scroll Width",placeholder:"100%, 100vw, 1200px"},maxWidth:{type:"text",label:"Scroll Max Width",placeholder:"none or 1200px"},margin:{type:"text",label:"Scroll Margin",placeholder:"0 auto"},stretchMode:{type:"select",label:"Scroll Stretch Mode",options:[{label:"Normal",value:"normal"},{label:"Full Browser Width",value:"full"}]},items:{type:"array",label:"Songs",arrayFields:{text:{type:"text",label:"Song Title"}},defaultItemProps:{text:"Song Title"}}},defaultProps:{backgroundColor:"rgba(77,198,225,.12)",lineColor:"rgba(77,198,225,.45)",textColor:"#4dc6e1",textShadow:"0 0 12px rgba(77,198,225,.35)",buttonBorderColor:"rgba(77,198,225,.45)",width:"100%",maxWidth:"none",margin:"0",stretchMode:"full",items:[{text:"Get Up"},{text:"Man on the Moon"},{text:"Losing My Religion"},{text:"Finest Worksong"},{text:"Life and How to Live It"},{text:"Fall on Me"},{text:"Superman"},{text:"These Days"},{text:"Stand"},{text:"The One I Love"}]},render:e=>{const t=e.items||[];return r.jsx("section",{className:`songs-section puck-song-scroll ${e.stretchMode==="full"?"is-full-width":""}`,"aria-label":"Songs We Play",style:{background:e.backgroundColor||"linear-gradient(90deg, var(--blue-deep) 0%, var(--charcoal-light) 50%, var(--blue-deep) 100%)",borderBottom:`1px solid ${e.lineColor||"rgba(212, 162, 76, 0.2)"}`,width:e.width||"100%",maxWidth:e.maxWidth||"none",margin:e.margin||"0"},children:r.jsx("div",{className:"songs-scroll-container",children:r.jsx("div",{className:"songs-scroll puck-song-track",children:[...t,...t].map((a,l)=>r.jsx("span",{className:"song-name",style:{color:e.textColor||"var(--cream)",textShadow:e.textShadow||"none",borderColor:e.buttonBorderColor||"rgba(212, 162, 76, 0.25)"},children:a.text},l))})})})}},Hero:{label:"02 Add Block: Hero: Text + Image",fields:{customFontUrl:T("External Font URL For This Block"),title:{type:"text",label:"Title"},...C("title"),subtitle:{type:"text",label:"Subtitle"},...C("subtitle"),body:{type:"textarea",label:"Body Text"},...C("body"),imageUrl:v("Hero Image Upload"),imageAlt:{type:"text",label:"Image Alt Text"},layout:{type:"select",label:"Layout",options:[{label:"Text Left / Image Right",value:"text-left"},{label:"Text Right / Image Left",value:"text-right"},{label:"Centered",value:"center"},{label:"Image Top",value:"image-top"}]},imageWidth:{type:"text",label:"Image Width",placeholder:"320px or 50%"},mobileImageWidth:{type:"text",label:"Mobile Image Width",placeholder:"Example: 70vw or 280px"},imageRadius:{type:"text",label:"Image Rounded Corners"},imageShadow:{type:"text",label:"Image Shadow",placeholder:"none or 0 20px 60px rgba(0,0,0,.45)"},maxWidth:{type:"number",label:"Max Section Width"},gap:{type:"number",label:"Gap Between Text/Image"},...j,buttons:W},defaultProps:E(M[0].props),render:e=>r.jsxs($,{...e,children:[L(e.customFontUrl),r.jsxs("div",{className:`puck-inner puck-flex layout-${e.layout||"text-left"}`,style:{"--gap":`${e.gap||50}px`,"--max-width":`${e.maxWidth||1100}px`},children:[r.jsxs("div",{className:"puck-text",children:[e.title&&r.jsx("h1",{className:"band-name puck-title",style:{fontSize:e.titleSize||"5rem",color:e.titleColor||"inherit",fontFamily:e.titleFont||"inherit",fontWeight:e.titleWeight||"inherit",letterSpacing:e.titleLetterSpacing||"normal"},children:e.title}),e.subtitle&&r.jsx("p",{className:"tagline puck-subtitle",style:{fontSize:e.subtitleSize||"1.8rem",color:e.subtitleColor||"inherit",fontFamily:e.subtitleFont||"inherit",fontWeight:e.subtitleWeight||"inherit",letterSpacing:e.subtitleLetterSpacing||"normal"},children:e.subtitle}),e.body&&r.jsx("p",{className:"description puck-body",style:{fontSize:e.bodySize||"1rem",color:e.bodyColor||"inherit",fontFamily:e.bodyFont||"inherit",fontWeight:e.bodyWeight||"inherit",letterSpacing:e.bodyLetterSpacing||"normal"},children:e.body}),(e.buttons||[]).length>0&&r.jsx("div",{className:"puck-buttons",children:(e.buttons||[]).map((t,a)=>r.jsx(R,{button:t,index:a},a))})]}),e.imageUrl&&r.jsx("img",{className:"puck-image puck-mobile-sized-image",src:e.imageUrl,alt:e.imageAlt||e.title||"Image",style:{width:e.imageWidth||"320px","--mobile-image-width":e.mobileImageWidth||e.imageWidth||"320px",borderRadius:e.imageRadius||"8px",boxShadow:e.imageShadow||"none"}})]})]})},TextBlock:{label:"02 Add Block: Text Block",fields:{customFontUrl:T("External Font URL For This Block"),eyebrow:{type:"text",label:"Small Top Text"},...C("eyebrow"),title:{type:"text",label:"Title"},...C("title"),body:{type:"textarea",label:"Body Text"},...C("body"),align:{type:"select",label:"Text Align",options:[{label:"Left",value:"left"},{label:"Center",value:"center"},{label:"Right",value:"right"}]},maxWidth:{type:"text",label:"Text Box Width"},...j,buttons:W},defaultProps:{id:"text-block",eyebrow:"",eyebrowColor:"#ffffff",eyebrowFont:"inherit",eyebrowSize:"1rem",eyebrowWeight:"400",title:"New Text Section",titleSize:"3rem",titleColor:"#ffffff",titleFont:"Playfair Display, serif",titleWeight:"700",body:"Edit this text.",bodySize:"1rem",bodyColor:"#ffffff",bodyFont:"inherit",bodyWeight:"400",align:"center",maxWidth:"850px",backgroundColor:"transparent",textColor:"#ffffff",paddingY:50,paddingX:24,customFontUrl:"",buttons:[]},render:e=>r.jsxs($,{...e,children:[L(e.customFontUrl),r.jsxs("div",{className:"puck-inner puck-text",style:{textAlign:e.align||"center",maxWidth:e.maxWidth||"850px"},children:[e.eyebrow&&r.jsx("p",{className:"teaser",style:{color:e.eyebrowColor||"inherit",fontFamily:e.eyebrowFont||"inherit",fontSize:e.eyebrowSize||"inherit",fontWeight:e.eyebrowWeight||"inherit",letterSpacing:e.eyebrowLetterSpacing||"normal"},children:e.eyebrow}),e.title&&r.jsx("h2",{className:"puck-title",style:{fontSize:e.titleSize||"3rem",color:e.titleColor||"inherit",fontFamily:e.titleFont||"inherit",fontWeight:e.titleWeight||"inherit",letterSpacing:e.titleLetterSpacing||"normal",textDecoration:e.titleDecoration||"none"},children:e.title}),e.body&&r.jsx("p",{className:"puck-body",style:{fontSize:e.bodySize||"1rem",color:e.bodyColor||"inherit",fontFamily:e.bodyFont||"inherit",fontWeight:e.bodyWeight||"inherit",letterSpacing:e.bodyLetterSpacing||"normal"},children:e.body}),r.jsx("div",{className:"puck-buttons",children:(e.buttons||[]).map((t,a)=>r.jsx(R,{button:t,index:a},a))})]})]})},ImageBlock:{label:"02 Add Block: Image",fields:{customFontUrl:T("External Font URL For This Block"),title:{type:"text",label:"Optional Title"},...C("title"),imageUrl:v("Image Upload"),imageAlt:{type:"text",label:"Image Alt Text"},width:{type:"text",label:"Image Width",placeholder:"900px or 100%"},mobileWidth:{type:"text",label:"Mobile Image Width",placeholder:"Example: 70vw or 280px"},radius:{type:"text",label:"Rounded Corners"},shadow:{type:"text",label:"Image Shadow",placeholder:"none or 0 20px 60px rgba(0,0,0,.45)"},align:{type:"select",label:"Align",options:[{label:"Left",value:"left"},{label:"Center",value:"center"},{label:"Right",value:"right"}]},maxWidth:{type:"text",label:"Container Width"},backgroundColor:d("Background Color"),paddingY:{type:"number",label:"Top/Bottom Padding"},paddingX:{type:"number",label:"Left/Right Padding"}},defaultProps:E(M[1].props),render:e=>r.jsxs("section",{className:"puck-section",style:{background:e.backgroundColor||"transparent",padding:`${e.paddingY||40}px ${e.paddingX||24}px`,textAlign:e.align||"center"},children:[L(e.customFontUrl),r.jsxs("div",{className:"puck-inner",style:{maxWidth:e.maxWidth||"1100px"},children:[e.title&&r.jsx("h2",{className:"puck-title",style:{fontSize:e.titleSize||"3rem",color:e.titleColor||"inherit",fontFamily:e.titleFont||"inherit",fontWeight:e.titleWeight||"inherit"},children:e.title}),e.imageUrl&&r.jsx("img",{className:"puck-image puck-mobile-sized-image",src:e.imageUrl,alt:e.imageAlt||e.title||"Image",style:{width:e.width||"900px","--mobile-image-width":e.mobileWidth||e.width||"900px",borderRadius:e.radius||"8px",boxShadow:e.shadow||"none"}})]})]})},ButtonRow:{label:"02 Add Block: Button Row",fields:{customFontUrl:T("External Font URL For Buttons"),...j,buttons:W},defaultProps:E(M[2].props),render:e=>r.jsxs($,{...e,children:[L(e.customFontUrl),r.jsx("div",{className:"puck-inner",children:r.jsx("div",{className:"puck-buttons",children:(e.buttons||[]).map((t,a)=>r.jsx(R,{button:t,index:a},a))})})]})},SocialIcons:{label:"02 Add Block: Social Icons",fields:{title:{type:"text",label:"Title"},titleColor:d("Title Color"),titleFont:y("Title Font"),titleSize:{type:"text",label:"Title Font Size"},titleWeight:{type:"select",label:"Title Weight",options:[{label:"Default",value:"inherit"},{label:"Regular",value:"400"},{label:"Bold",value:"700"},{label:"Black",value:"900"}]},...j,links:{type:"array",label:"Social Links - add as many as you want",arrayFields:{platform:{type:"select",label:"Platform",options:oe},label:{type:"text",label:"Custom Label / Title"},url:{type:"text",label:"URL"},iconColor:d("Icon Color"),backgroundColor:d("Icon Background"),borderWidth:{type:"select",label:"Icon Border",options:[{label:"No Border",value:"0px"},{label:"Thin Border",value:"1px"},{label:"Medium Border",value:"2px"},{label:"Thick Border",value:"4px"}]},borderColor:d("Icon Border Color"),boxShadow:{type:"text",label:"Icon Glow / Shadow",placeholder:"0 0 24px #00ff04"},radius:{type:"text",label:"Icon Rounded Corners",placeholder:"999px"},size:{type:"text",label:"Icon Button Size",placeholder:"44px"},svgSize:{type:"text",label:"Symbol Size",placeholder:"22px"},padding:{type:"text",label:"Icon Padding",placeholder:"0px"}},defaultItemProps:{platform:"facebook",label:"Facebook",url:"https://facebook.com",iconColor:"#bb00ff",backgroundColor:"#000000",borderWidth:"1px",borderColor:"#00ff04",boxShadow:"0 0 24px #00ff04",radius:"999px",size:"44px",svgSize:"22px",padding:"0px"}}},defaultProps:E(M[3].props),render:e=>r.jsx($,{...e,children:r.jsxs("div",{className:"puck-inner",style:{textAlign:"center"},children:[e.title&&r.jsx("p",{className:"teaser",style:{color:e.titleColor||"inherit",fontFamily:e.titleFont||"inherit",fontSize:e.titleSize||"inherit",fontWeight:e.titleWeight||"inherit"},children:e.title}),r.jsx("nav",{className:"puck-social-links social-links",children:(e.links||[]).filter(t=>t.url).map((t,a)=>r.jsx("a",{className:"social-link",href:t.url||"#",title:t.label||t.platform,style:{color:t.iconColor||"inherit",background:t.backgroundColor||"rgba(255,255,255,.03)",border:`${t.borderWidth||"1px"} solid ${t.borderColor||"rgba(255,255,255,.18)"}`,boxShadow:t.boxShadow||"none",borderRadius:t.radius||"999px",width:t.size||"44px",height:t.size||"44px",minWidth:t.size||"44px",minHeight:t.size||"44px",padding:t.padding||"0px","--social-svg-size":t.svgSize||"22px"},children:r.jsx(ct,{platform:t.platform,label:t.label})},a))})]})})},Columns:{label:"02 Add Block: Columns / Cards",fields:{customFontUrl:T("External Font URL For This Block"),columns:{type:"number",label:"Columns"},gap:{type:"number",label:"Gap"},imageRadius:{type:"text",label:"Image Radius"},...j,items:{type:"array",label:"Cards",arrayFields:{title:{type:"text",label:"Title"},titleColor:d("Title Color"),titleFont:y("Title Font"),titleSize:{type:"text",label:"Title Size"},body:{type:"textarea",label:"Body"},bodyColor:d("Body Color"),bodyFont:y("Body Font"),bodySize:{type:"text",label:"Body Size"},imageUrl:v("Card Image Upload"),buttonText:{type:"text",label:"Button Text"},buttonUrl:{type:"text",label:"Button URL"},buttonBackgroundColor:d("Button Background"),buttonTextColor:d("Button Text Color"),buttonFont:y("Button Font"),buttonFontSize:{type:"text",label:"Button Font Size"},buttonBorderWidth:{type:"select",label:"Button Border",options:[{label:"No Border",value:"0px"},{label:"Thin Border",value:"1px"},{label:"Medium Border",value:"2px"},{label:"Thick Border",value:"4px"}]},buttonBorderColor:d("Button Border Color"),buttonBoxShadow:{type:"text",label:"Button Glow / Shadow"},buttonTextTransform:{type:"select",label:"Button Text Case",options:[{label:"Uppercase",value:"uppercase"},{label:"Normal",value:"none"},{label:"Lowercase",value:"lowercase"},{label:"Capitalize",value:"capitalize"}]},buttonRadius:{type:"text",label:"Button Radius"}},defaultItemProps:{title:"Card title",titleColor:"#ffffff",titleFont:"inherit",titleSize:"1.4rem",body:"Card text",bodyColor:"#ffffff",bodyFont:"inherit",bodySize:"1rem",imageUrl:"",buttonText:"",buttonUrl:"#",buttonBackgroundColor:"#8b3df4",buttonTextColor:"#ffffff",buttonFont:"inherit",buttonFontSize:"16px",buttonBorderWidth:"0px",buttonBorderColor:"transparent",buttonBoxShadow:"none",buttonTextTransform:"uppercase",buttonRadius:"999px"}}},defaultProps:{columns:2,gap:24,imageRadius:"8px",backgroundColor:"transparent",textColor:"#ffffff",paddingY:50,paddingX:24,customFontUrl:"",items:[{title:"First Card",body:"Edit this card.",imageUrl:"",buttonText:"",buttonUrl:"#",buttonBorderWidth:"0px",buttonBorderColor:"transparent"},{title:"Second Card",body:"Edit this card.",imageUrl:"",buttonText:"",buttonUrl:"#"}]},render:e=>r.jsxs($,{...e,children:[L(e.customFontUrl),r.jsx("div",{className:"puck-inner",children:r.jsx("div",{className:"puck-columns",style:{"--cols":e.columns||2,"--gap":`${e.gap||24}px`},children:(e.items||[]).map((t,a)=>r.jsxs("div",{className:"puck-card",children:[t.imageUrl&&r.jsx("img",{className:"puck-image",src:t.imageUrl,alt:t.title||"Column image",style:{width:"100%",borderRadius:e.imageRadius||"8px",marginBottom:16}}),t.title&&r.jsx("h3",{style:{color:t.titleColor||"inherit",fontFamily:t.titleFont||"inherit",fontSize:t.titleSize||"inherit"},children:t.title}),t.body&&r.jsx("p",{style:{color:t.bodyColor||"inherit",fontFamily:t.bodyFont||"inherit",fontSize:t.bodySize||"inherit"},children:t.body}),t.buttonText&&r.jsx(R,{button:{text:t.buttonText,url:t.buttonUrl,backgroundColor:t.buttonBackgroundColor,textColor:t.buttonTextColor,fontFamily:t.buttonFont,fontSize:t.buttonFontSize,borderWidth:t.buttonBorderWidth,borderColor:t.buttonBorderColor,radius:t.buttonRadius,boxShadow:t.buttonBoxShadow,textTransform:t.buttonTextTransform}})]},a))})})]})},GalleryGrid:{label:"02 Add Block: Gallery Grid",fields:{title:{type:"text",label:"Title"},titleColor:d("Title Color"),titleFont:y("Title Font"),titleSize:{type:"text",label:"Title Size"},backgroundColor:d("Section Background"),textColor:d("Default Text Color"),paddingY:{type:"number",label:"Top/Bottom Padding"},paddingX:{type:"number",label:"Left/Right Padding"},columns:{type:"number",label:"Columns"},gap:{type:"number",label:"Gap"},images:{type:"array",label:"Gallery Images",arrayFields:{imageUrl:v("Image"),imageAlt:{type:"text",label:"Alt Text"},caption:{type:"text",label:"Caption"}},defaultItemProps:{imageUrl:"",imageAlt:"Gallery image",caption:""}}},defaultProps:{title:"Gallery",titleColor:"#ffffff",titleFont:"Oswald, sans-serif",titleSize:"2.5rem",backgroundColor:"transparent",textColor:"#ffffff",paddingY:40,paddingX:24,columns:3,gap:18,images:[]},render:e=>r.jsx($,{...e,children:r.jsxs("div",{className:"puck-inner",children:[e.title&&r.jsx("h2",{className:"puck-title",style:{textAlign:"center",color:e.titleColor||"inherit",fontFamily:e.titleFont||"inherit",fontSize:e.titleSize||"2.5rem"},children:e.title}),r.jsx("div",{className:"puck-gallery-grid",style:{"--cols":e.columns||3,"--gap":`${e.gap||18}px`},children:(e.images||[]).filter(t=>t.imageUrl).map((t,a)=>r.jsxs("figure",{className:"puck-gallery-item",children:[r.jsx("img",{src:t.imageUrl,alt:t.imageAlt||"Gallery image"}),t.caption&&r.jsx("figcaption",{children:t.caption})]},a))})]})})},Spacer:{label:"02 Add Block: Spacer",fields:{height:{type:"number",label:"Height"},backgroundColor:d("Background Color")},defaultProps:{height:40,backgroundColor:"transparent"},render:e=>r.jsx("div",{className:"puck-spacer",style:{height:e.height||40,background:e.backgroundColor||"transparent"}})},SignupForm:{label:"02 Add Block: Grave Robber Signup Form",fields:{formAction:{type:"text",label:"Google Form Submit URL"},nameEntry:{type:"text",label:"Name Field Entry ID"},emailEntry:{type:"text",label:"Email Field Entry ID"},phoneEntry:{type:"text",label:"Phone Field Entry ID"},zipEntry:{type:"text",label:"Zip Field Entry ID"},nameLabel:{type:"text",label:"Name Label"},emailLabel:{type:"text",label:"Email Label"},phoneLabel:{type:"text",label:"Phone Label"},zipLabel:{type:"text",label:"Zip Label"},buttonText:{type:"text",label:"Button Text"},successMessage:{type:"text",label:"Success Message"},backgroundColor:d("Section Background"),paddingY:{type:"number",label:"Top Padding"},paddingX:{type:"number",label:"Side Padding"},paddingBottom:{type:"number",label:"Bottom Padding"}},defaultProps:{formAction:"https://docs.google.com/forms/d/e/1FAIpQLSc75dAf3CXeOinDkL-URjVql6_o3E2PcXKPhB3j-mFnl0JBMw/formResponse",nameEntry:"entry.821607845",emailEntry:"entry.216699627",phoneEntry:"entry.1566132030",zipEntry:"entry.848273318",nameLabel:"What are you called?",emailLabel:"What is your email?",phoneLabel:"What is your phone number?",zipLabel:"What is your zip code?",buttonText:"Join the Crypt List",successMessage:"Great, you are signed up and we will keep you updated.",backgroundColor:"#000000",paddingY:30,paddingX:24,paddingBottom:80},render:e=>r.jsx(pt,{...e})},ContactForm:{label:"02 Add Block: Grave Robber Contact Form",fields:{formAction:{type:"text",label:"Google Form Submit URL"},nameEntry:{type:"text",label:"Name Field Entry ID"},emailEntry:{type:"text",label:"Email Field Entry ID"},messageEntry:{type:"text",label:"Message Field Entry ID"},nameLabel:{type:"text",label:"Name Label"},emailLabel:{type:"text",label:"Email Label"},messageLabel:{type:"text",label:"Message Label"},messageRows:{type:"number",label:"Message Box Rows"},buttonText:{type:"text",label:"Button Text"},successMessage:{type:"text",label:"Success Message"},backgroundColor:d("Section Background"),paddingY:{type:"number",label:"Top Padding"},paddingX:{type:"number",label:"Side Padding"},paddingBottom:{type:"number",label:"Bottom Padding"}},defaultProps:{formAction:"https://docs.google.com/forms/d/e/1FAIpQLSfvFy-I4z36zqLz4y4boVhM4eTL7KEb5Ip1It7OZyFfxlRgMw/formResponse",nameEntry:"entry.111991046",emailEntry:"entry.709491702",messageEntry:"entry.905150677",nameLabel:"What are you called?",emailLabel:"What is your email?",messageLabel:"What do you want?",messageRows:7,buttonText:"Send Message",successMessage:"Great, your message was sent and we will get back to you shortly.",backgroundColor:"#000000",paddingY:30,paddingX:24,paddingBottom:80},render:e=>r.jsx(bt,{...e})},Embed:{label:"02 Add Block: Custom HTML Embed",fields:{html:{type:"textarea",label:"HTML"},backgroundColor:d("Background Color"),paddingY:{type:"number",label:"Top/Bottom Padding"},paddingX:{type:"number",label:"Left/Right Padding"}},defaultProps:{html:"<p>Custom HTML here</p>",backgroundColor:"transparent",paddingY:30,paddingX:24},render:e=>r.jsx("section",{className:"puck-section",style:{padding:`${e.paddingY||30}px ${e.paddingX||24}px`,background:e.backgroundColor||"transparent"},children:r.jsx("div",{className:"puck-inner",dangerouslySetInnerHTML:{__html:e.html||""}})})}}},me=He(),ht=me.replaceAll("#editable-page-root","[data-puck-entry]"),kt=`
${me}
${ht}

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
`;export{be as R,yt as a,H as b,ft as c,wt as d,He as e,ut as f,ye as g,ue as h,r as j,kt as p,V as r};
