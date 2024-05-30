const __vite__fileDeps=["assets/AboutView-CpbMoS34.js","assets/logo-Ciy-p8Jt.js","assets/XMarkIcon-BMcRMAdB.js","assets/AuthView-DCBZcpL1.js","assets/FinanceView-BefTihIb.js","assets/operations-CVTXcPt0.js","assets/Header-CVIXVuwj.js","assets/FinanceView-DXxILII8.css","assets/InvestView-BaSv8NUC.js","assets/AdviceView-9QixTQEI.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ti(t,e){const n=new Set(t.split(","));return r=>n.has(r)}const ce={},rn=[],ke=()=>{},Hl=()=>!1,Fr=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ni=t=>t.startsWith("onUpdate:"),de=Object.assign,ri=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Vl=Object.prototype.hasOwnProperty,X=(t,e)=>Vl.call(t,e),B=Array.isArray,sn=t=>Kn(t)==="[object Map]",Br=t=>Kn(t)==="[object Set]",$i=t=>Kn(t)==="[object Date]",q=t=>typeof t=="function",fe=t=>typeof t=="string",rt=t=>typeof t=="symbol",ae=t=>t!==null&&typeof t=="object",Ia=t=>(ae(t)||q(t))&&q(t.then)&&q(t.catch),Sa=Object.prototype.toString,Kn=t=>Sa.call(t),jl=t=>Kn(t).slice(8,-1),Ta=t=>Kn(t)==="[object Object]",si=t=>fe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Tn=ti(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),$r=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Wl=/-(\w)/g,Ge=$r(t=>t.replace(Wl,(e,n)=>n?n.toUpperCase():"")),Kl=/\B([A-Z])/g,_n=$r(t=>t.replace(Kl,"-$1").toLowerCase()),Hr=$r(t=>t.charAt(0).toUpperCase()+t.slice(1)),as=$r(t=>t?`on${Hr(t)}`:""),Rt=(t,e)=>!Object.is(t,e),dr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Ca=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},wr=t=>{const e=parseFloat(t);return isNaN(e)?t:e},zl=t=>{const e=fe(t)?Number(t):NaN;return isNaN(e)?t:e};let Hi;const Ra=()=>Hi||(Hi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ii(t){if(B(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=fe(r)?Yl(r):ii(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(fe(t)||ae(t))return t}const ql=/;(?![^(]*\))/g,Gl=/:([^]+)/,Jl=/\/\*[^]*?\*\//g;function Yl(t){const e={};return t.replace(Jl,"").split(ql).forEach(n=>{if(n){const r=n.split(Gl);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function oi(t){let e="";if(fe(t))e=t;else if(B(t))for(let n=0;n<t.length;n++){const r=oi(t[n]);r&&(e+=r+" ")}else if(ae(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Xl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ql=ti(Xl);function Aa(t){return!!t||t===""}function Zl(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Vr(t[r],e[r]);return n}function Vr(t,e){if(t===e)return!0;let n=$i(t),r=$i(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=rt(t),r=rt(e),n||r)return t===e;if(n=B(t),r=B(e),n||r)return n&&r?Zl(t,e):!1;if(n=ae(t),r=ae(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const c=t.hasOwnProperty(o),a=e.hasOwnProperty(o);if(c&&!a||!c&&a||!Vr(t[o],e[o]))return!1}}return String(t)===String(e)}function eu(t,e){return t.findIndex(n=>Vr(n,e))}const P_=t=>fe(t)?t:t==null?"":B(t)||ae(t)&&(t.toString===Sa||!q(t.toString))?JSON.stringify(t,Pa,2):String(t),Pa=(t,e)=>e&&e.__v_isRef?Pa(t,e.value):sn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[cs(r,i)+" =>"]=s,n),{})}:Br(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>cs(n))}:rt(e)?cs(e):ae(e)&&!B(e)&&!Ta(e)?String(e):e,cs=(t,e="")=>{var n;return rt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Re;class Oa{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Re,!e&&Re&&(this.index=(Re.scopes||(Re.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Re;try{return Re=this,e()}finally{Re=n}}}on(){Re=this}off(){Re=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function ka(t){return new Oa(t)}function tu(t,e=Re){e&&e.active&&e.effects.push(t)}function Na(){return Re}function nu(t){Re&&Re.cleanups.push(t)}let Vt;class ai{constructor(e,n,r,s){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,tu(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Pt();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(ru(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),Ot()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=It,n=Vt;try{return It=!0,Vt=this,this._runnings++,Vi(this),this.fn()}finally{ji(this),this._runnings--,Vt=n,It=e}}stop(){this.active&&(Vi(this),ji(this),this.onStop&&this.onStop(),this.active=!1)}}function ru(t){return t.value}function Vi(t){t._trackId++,t._depsLength=0}function ji(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)La(t.deps[e],t);t.deps.length=t._depsLength}}function La(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let It=!0,Rs=0;const Da=[];function Pt(){Da.push(It),It=!1}function Ot(){const t=Da.pop();It=t===void 0?!0:t}function ci(){Rs++}function li(){for(Rs--;!Rs&&As.length;)As.shift()()}function Ma(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&La(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const As=[];function xa(t,e,n){ci();for(const r of t.keys()){let s;r._dirtyLevel<e&&(s??(s=t.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=e),r._shouldSchedule&&(s??(s=t.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&As.push(r.scheduler)))}li()}const Ua=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},Ir=new WeakMap,jt=Symbol(""),Ps=Symbol("");function Te(t,e,n){if(It&&Vt){let r=Ir.get(t);r||Ir.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Ua(()=>r.delete(n))),Ma(Vt,s)}}function tt(t,e,n,r,s,i){const o=Ir.get(t);if(!o)return;let c=[];if(e==="clear")c=[...o.values()];else if(n==="length"&&B(t)){const a=Number(r);o.forEach((l,u)=>{(u==="length"||!rt(u)&&u>=a)&&c.push(l)})}else switch(n!==void 0&&c.push(o.get(n)),e){case"add":B(t)?si(n)&&c.push(o.get("length")):(c.push(o.get(jt)),sn(t)&&c.push(o.get(Ps)));break;case"delete":B(t)||(c.push(o.get(jt)),sn(t)&&c.push(o.get(Ps)));break;case"set":sn(t)&&c.push(o.get(jt));break}ci();for(const a of c)a&&xa(a,4);li()}function su(t,e){const n=Ir.get(t);return n&&n.get(e)}const iu=ti("__proto__,__v_isRef,__isVue"),Fa=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(rt)),Wi=ou();function ou(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=Q(this);for(let i=0,o=this.length;i<o;i++)Te(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(Q)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Pt(),ci();const r=Q(this)[e].apply(this,n);return li(),Ot(),r}}),t}function au(t){rt(t)||(t=String(t));const e=Q(this);return Te(e,"has",t),e.hasOwnProperty(t)}class Ba{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?bu:ja:i?Va:Ha).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=B(e);if(!s){if(o&&X(Wi,n))return Reflect.get(Wi,n,r);if(n==="hasOwnProperty")return au}const c=Reflect.get(e,n,r);return(rt(n)?Fa.has(n):iu(n))||(s||Te(e,"get",n),i)?c:he(c)?o&&si(n)?c:c.value:ae(c)?s?Ka(c):zn(c):c}}class $a extends Ba{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const a=Dn(i);if(!Sr(r)&&!Dn(r)&&(i=Q(i),r=Q(r)),!B(e)&&he(i)&&!he(r))return a?!1:(i.value=r,!0)}const o=B(e)&&si(n)?Number(n)<e.length:X(e,n),c=Reflect.set(e,n,r,s);return e===Q(s)&&(o?Rt(r,i)&&tt(e,"set",n,r):tt(e,"add",n,r)),c}deleteProperty(e,n){const r=X(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&tt(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!rt(n)||!Fa.has(n))&&Te(e,"has",n),r}ownKeys(e){return Te(e,"iterate",B(e)?"length":jt),Reflect.ownKeys(e)}}class cu extends Ba{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const lu=new $a,uu=new cu,fu=new $a(!0);const ui=t=>t,jr=t=>Reflect.getPrototypeOf(t);function nr(t,e,n=!1,r=!1){t=t.__v_raw;const s=Q(t),i=Q(e);n||(Rt(e,i)&&Te(s,"get",e),Te(s,"get",i));const{has:o}=jr(s),c=r?ui:n?pi:Mn;if(o.call(s,e))return c(t.get(e));if(o.call(s,i))return c(t.get(i));t!==s&&t.get(e)}function rr(t,e=!1){const n=this.__v_raw,r=Q(n),s=Q(t);return e||(Rt(t,s)&&Te(r,"has",t),Te(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function sr(t,e=!1){return t=t.__v_raw,!e&&Te(Q(t),"iterate",jt),Reflect.get(t,"size",t)}function Ki(t){t=Q(t);const e=Q(this);return jr(e).has.call(e,t)||(e.add(t),tt(e,"add",t,t)),this}function zi(t,e){e=Q(e);const n=Q(this),{has:r,get:s}=jr(n);let i=r.call(n,t);i||(t=Q(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Rt(e,o)&&tt(n,"set",t,e):tt(n,"add",t,e),this}function qi(t){const e=Q(this),{has:n,get:r}=jr(e);let s=n.call(e,t);s||(t=Q(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&tt(e,"delete",t,void 0),i}function Gi(){const t=Q(this),e=t.size!==0,n=t.clear();return e&&tt(t,"clear",void 0,void 0),n}function ir(t,e){return function(r,s){const i=this,o=i.__v_raw,c=Q(o),a=e?ui:t?pi:Mn;return!t&&Te(c,"iterate",jt),o.forEach((l,u)=>r.call(s,a(l),a(u),i))}}function or(t,e,n){return function(...r){const s=this.__v_raw,i=Q(s),o=sn(i),c=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,l=s[t](...r),u=n?ui:e?pi:Mn;return!e&&Te(i,"iterate",a?Ps:jt),{next(){const{value:d,done:p}=l.next();return p?{value:d,done:p}:{value:c?[u(d[0]),u(d[1])]:u(d),done:p}},[Symbol.iterator](){return this}}}}function ct(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function du(){const t={get(i){return nr(this,i)},get size(){return sr(this)},has:rr,add:Ki,set:zi,delete:qi,clear:Gi,forEach:ir(!1,!1)},e={get(i){return nr(this,i,!1,!0)},get size(){return sr(this)},has:rr,add:Ki,set:zi,delete:qi,clear:Gi,forEach:ir(!1,!0)},n={get(i){return nr(this,i,!0)},get size(){return sr(this,!0)},has(i){return rr.call(this,i,!0)},add:ct("add"),set:ct("set"),delete:ct("delete"),clear:ct("clear"),forEach:ir(!0,!1)},r={get(i){return nr(this,i,!0,!0)},get size(){return sr(this,!0)},has(i){return rr.call(this,i,!0)},add:ct("add"),set:ct("set"),delete:ct("delete"),clear:ct("clear"),forEach:ir(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=or(i,!1,!1),n[i]=or(i,!0,!1),e[i]=or(i,!1,!0),r[i]=or(i,!0,!0)}),[t,n,e,r]}const[hu,pu,gu,mu]=du();function fi(t,e){const n=e?t?mu:gu:t?pu:hu;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(X(n,s)&&s in r?n:r,s,i)}const _u={get:fi(!1,!1)},vu={get:fi(!1,!0)},yu={get:fi(!0,!1)};const Ha=new WeakMap,Va=new WeakMap,ja=new WeakMap,bu=new WeakMap;function Eu(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function wu(t){return t.__v_skip||!Object.isExtensible(t)?0:Eu(jl(t))}function zn(t){return Dn(t)?t:di(t,!1,lu,_u,Ha)}function Wa(t){return di(t,!1,fu,vu,Va)}function Ka(t){return di(t,!0,uu,yu,ja)}function di(t,e,n,r,s){if(!ae(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=wu(t);if(o===0)return t;const c=new Proxy(t,o===2?r:n);return s.set(t,c),c}function Wt(t){return Dn(t)?Wt(t.__v_raw):!!(t&&t.__v_isReactive)}function Dn(t){return!!(t&&t.__v_isReadonly)}function Sr(t){return!!(t&&t.__v_isShallow)}function za(t){return t?!!t.__v_raw:!1}function Q(t){const e=t&&t.__v_raw;return e?Q(e):t}function hi(t){return Object.isExtensible(t)&&Ca(t,"__v_skip",!0),t}const Mn=t=>ae(t)?zn(t):t,pi=t=>ae(t)?Ka(t):t;class qa{constructor(e,n,r,s){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new ai(()=>e(this._value),()=>hr(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=Q(this);return(!e._cacheable||e.effect.dirty)&&Rt(e._value,e._value=e.effect.run())&&hr(e,4),Ga(e),e.effect._dirtyLevel>=2&&hr(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function Iu(t,e,n=!1){let r,s;const i=q(t);return i?(r=t,s=ke):(r=t.get,s=t.set),new qa(r,s,i||!s,n)}function Ga(t){var e;It&&Vt&&(t=Q(t),Ma(Vt,(e=t.dep)!=null?e:t.dep=Ua(()=>t.dep=void 0,t instanceof qa?t:void 0)))}function hr(t,e=4,n){t=Q(t);const r=t.dep;r&&xa(r,e)}function he(t){return!!(t&&t.__v_isRef===!0)}function gi(t){return Ja(t,!1)}function Su(t){return Ja(t,!0)}function Ja(t,e){return he(t)?t:new Tu(t,e)}class Tu{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Q(e),this._value=n?e:Mn(e)}get value(){return Ga(this),this._value}set value(e){const n=this.__v_isShallow||Sr(e)||Dn(e);e=n?e:Q(e),Rt(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Mn(e),hr(this,4))}}function Kt(t){return he(t)?t.value:t}const Cu={get:(t,e,n)=>Kt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return he(s)&&!he(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Ya(t){return Wt(t)?t:new Proxy(t,Cu)}function Ru(t){const e=B(t)?new Array(t.length):{};for(const n in t)e[n]=Pu(t,n);return e}class Au{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return su(Q(this._object),this._key)}}function Pu(t,e,n){const r=t[e];return he(r)?r:new Au(t,e,n)}/**
* @vue/runtime-core v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function St(t,e,n,r){try{return r?t(...r):t()}catch(s){Wr(s,e,n)}}function Le(t,e,n,r){if(q(t)){const s=St(t,e,n,r);return s&&Ia(s)&&s.catch(i=>{Wr(i,e,n)}),s}if(B(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Le(t[i],e,n,r));return s}}function Wr(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,c)===!1)return}i=i.parent}const a=e.appContext.config.errorHandler;if(a){Pt(),St(a,null,10,[t,o,c]),Ot();return}}Ou(t,n,s,r)}function Ou(t,e,n,r=!0){console.error(t)}let xn=!1,Os=!1;const ve=[];let We=0;const on=[];let pt=null,Ft=0;const Xa=Promise.resolve();let mi=null;function Kr(t){const e=mi||Xa;return t?e.then(this?t.bind(this):t):e}function ku(t){let e=We+1,n=ve.length;for(;e<n;){const r=e+n>>>1,s=ve[r],i=Un(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function _i(t){(!ve.length||!ve.includes(t,xn&&t.allowRecurse?We+1:We))&&(t.id==null?ve.push(t):ve.splice(ku(t.id),0,t),Qa())}function Qa(){!xn&&!Os&&(Os=!0,mi=Xa.then(ec))}function Nu(t){const e=ve.indexOf(t);e>We&&ve.splice(e,1)}function Lu(t){B(t)?on.push(...t):(!pt||!pt.includes(t,t.allowRecurse?Ft+1:Ft))&&on.push(t),Qa()}function Ji(t,e,n=xn?We+1:0){for(;n<ve.length;n++){const r=ve[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;ve.splice(n,1),n--,r()}}}function Za(t){if(on.length){const e=[...new Set(on)].sort((n,r)=>Un(n)-Un(r));if(on.length=0,pt){pt.push(...e);return}for(pt=e,Ft=0;Ft<pt.length;Ft++)pt[Ft]();pt=null,Ft=0}}const Un=t=>t.id==null?1/0:t.id,Du=(t,e)=>{const n=Un(t)-Un(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function ec(t){Os=!1,xn=!0,ve.sort(Du);try{for(We=0;We<ve.length;We++){const e=ve[We];e&&e.active!==!1&&St(e,null,14)}}finally{We=0,ve.length=0,Za(),xn=!1,mi=null,(ve.length||on.length)&&ec()}}function Mu(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||ce;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:p}=r[u]||ce;p&&(s=n.map(m=>fe(m)?m.trim():m)),d&&(s=n.map(wr))}let c,a=r[c=as(e)]||r[c=as(Ge(e))];!a&&i&&(a=r[c=as(_n(e))]),a&&Le(a,t,6,s);const l=r[c+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Le(l,t,6,s)}}function tc(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!q(t)){const a=l=>{const u=tc(l,e,!0);u&&(c=!0,de(o,u))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!i&&!c?(ae(t)&&r.set(t,null),null):(B(i)?i.forEach(a=>o[a]=null):de(o,i),ae(t)&&r.set(t,o),o)}function zr(t,e){return!t||!Fr(e)?!1:(e=e.slice(2).replace(/Once$/,""),X(t,e[0].toLowerCase()+e.slice(1))||X(t,_n(e))||X(t,e))}let ye=null,qr=null;function Tr(t){const e=ye;return ye=t,qr=t&&t.type.__scopeId||null,e}function O_(t){qr=t}function k_(){qr=null}function xu(t,e=ye,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&lo(-1);const i=Tr(e);let o;try{o=t(...s)}finally{Tr(i),r._d&&lo(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function ls(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:a,render:l,renderCache:u,props:d,data:p,setupState:m,ctx:E,inheritAttrs:A}=t,$=Tr(t);let P,N;try{if(n.shapeFlag&4){const W=s||r,V=W;P=je(l.call(V,W,u,d,m,p,E)),N=c}else{const W=e;P=je(W.length>1?W(d,{attrs:c,slots:o,emit:a}):W(d,null)),N=e.props?c:Uu(c)}}catch(W){Pn.length=0,Wr(W,t,1),P=Ae(Ne)}let U=P;if(N&&A!==!1){const W=Object.keys(N),{shapeFlag:V}=U;W.length&&V&7&&(i&&W.some(ni)&&(N=Fu(N,i)),U=At(U,N,!1,!0))}return n.dirs&&(U=At(U,null,!1,!0),U.dirs=U.dirs?U.dirs.concat(n.dirs):n.dirs),n.transition&&(U.transition=n.transition),P=U,Tr($),P}const Uu=t=>{let e;for(const n in t)(n==="class"||n==="style"||Fr(n))&&((e||(e={}))[n]=t[n]);return e},Fu=(t,e)=>{const n={};for(const r in t)(!ni(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Bu(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:a}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return r?Yi(r,o,l):!!o;if(a&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const p=u[d];if(o[p]!==r[p]&&!zr(l,p))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?Yi(r,o,l):!0:!!o;return!1}function Yi(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!zr(n,i))return!0}return!1}function $u({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Hu="components";function N_(t,e){return ju(Hu,t,!0,e)||t}const Vu=Symbol.for("v-ndc");function ju(t,e,n=!0,r=!1){const s=ye||ge;if(s){const i=s.type;{const c=jf(i,!1);if(c&&(c===e||c===Ge(e)||c===Hr(Ge(e))))return i}const o=Xi(s[t]||i[t],e)||Xi(s.appContext[t],e);return!o&&r?i:o}}function Xi(t,e){return t&&(t[e]||t[Ge(e)]||t[Hr(Ge(e))])}const Wu=t=>t.__isSuspense;function Ku(t,e){e&&e.pendingBranch?B(t)?e.effects.push(...t):e.effects.push(t):Lu(t)}const zu=Symbol.for("v-scx"),qu=()=>xe(zu);function L_(t,e){return vi(t,null,e)}const ar={};function Cn(t,e,n){return vi(t,e,n)}function vi(t,e,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:c}=ce){if(e&&i){const M=e;e=(...G)=>{M(...G),V()}}const a=ge,l=M=>r===!0?M:Ht(M,r===!1?1:void 0);let u,d=!1,p=!1;if(he(t)?(u=()=>t.value,d=Sr(t)):Wt(t)?(u=()=>l(t),d=!0):B(t)?(p=!0,d=t.some(M=>Wt(M)||Sr(M)),u=()=>t.map(M=>{if(he(M))return M.value;if(Wt(M))return l(M);if(q(M))return St(M,a,2)})):q(t)?e?u=()=>St(t,a,2):u=()=>(m&&m(),Le(t,a,3,[E])):u=ke,e&&r){const M=u;u=()=>Ht(M())}let m,E=M=>{m=U.onStop=()=>{St(M,a,4),m=U.onStop=void 0}},A;if(Xr)if(E=ke,e?n&&Le(e,a,3,[u(),p?[]:void 0,E]):u(),s==="sync"){const M=qu();A=M.__watcherHandles||(M.__watcherHandles=[])}else return ke;let $=p?new Array(t.length).fill(ar):ar;const P=()=>{if(!(!U.active||!U.dirty))if(e){const M=U.run();(r||d||(p?M.some((G,T)=>Rt(G,$[T])):Rt(M,$)))&&(m&&m(),Le(e,a,3,[M,$===ar?void 0:p&&$[0]===ar?[]:$,E]),$=M)}else U.run()};P.allowRecurse=!!e;let N;s==="sync"?N=P:s==="post"?N=()=>Se(P,a&&a.suspense):(P.pre=!0,a&&(P.id=a.uid),N=()=>_i(P));const U=new ai(u,ke,N),W=Na(),V=()=>{U.stop(),W&&ri(W.effects,U)};return e?n?P():$=U.run():s==="post"?Se(U.run.bind(U),a&&a.suspense):U.run(),A&&A.push(V),V}function Gu(t,e,n){const r=this.proxy,s=fe(t)?t.includes(".")?nc(r,t):()=>r[t]:t.bind(r,r);let i;q(e)?i=e:(i=e.handler,n=e);const o=qn(this),c=vi(s,i.bind(r),n);return o(),c}function nc(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Ht(t,e=1/0,n){if(e<=0||!ae(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,he(t))Ht(t.value,e,n);else if(B(t))for(let r=0;r<t.length;r++)Ht(t[r],e,n);else if(Br(t)||sn(t))t.forEach(r=>{Ht(r,e,n)});else if(Ta(t))for(const r in t)Ht(t[r],e,n);return t}function D_(t,e){if(ye===null)return t;const n=Qr(ye)||ye.proxy,r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,a=ce]=e[s];i&&(q(i)&&(i={mounted:i,updated:i}),i.deep&&Ht(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:a}))}return t}function Lt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let a=c.dir[r];a&&(Pt(),Le(a,n,8,[t.el,c,t,e]),Ot())}}const gt=Symbol("_leaveCb"),cr=Symbol("_enterCb");function Ju(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return yi(()=>{t.isMounted=!0}),cc(()=>{t.isUnmounting=!0}),t}const Pe=[Function,Array],rc={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Pe,onEnter:Pe,onAfterEnter:Pe,onEnterCancelled:Pe,onBeforeLeave:Pe,onLeave:Pe,onAfterLeave:Pe,onLeaveCancelled:Pe,onBeforeAppear:Pe,onAppear:Pe,onAfterAppear:Pe,onAppearCancelled:Pe},Yu={name:"BaseTransition",props:rc,setup(t,{slots:e}){const n=Ff(),r=Ju();return()=>{const s=e.default&&ic(e.default(),!0);if(!s||!s.length)return;let i=s[0];if(s.length>1){for(const p of s)if(p.type!==Ne){i=p;break}}const o=Q(t),{mode:c}=o;if(r.isLeaving)return us(i);const a=Qi(i);if(!a)return us(i);const l=ks(a,o,r,n);Ns(a,l);const u=n.subTree,d=u&&Qi(u);if(d&&d.type!==Ne&&!Bt(a,d)){const p=ks(d,o,r,n);if(Ns(d,p),c==="out-in"&&a.type!==Ne)return r.isLeaving=!0,p.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},us(i);c==="in-out"&&a.type!==Ne&&(p.delayLeave=(m,E,A)=>{const $=sc(r,d);$[String(d.key)]=d,m[gt]=()=>{E(),m[gt]=void 0,delete l.delayedLeave},l.delayedLeave=A})}return i}}},Xu=Yu;function sc(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function ks(t,e,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:c,onEnter:a,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:d,onLeave:p,onAfterLeave:m,onLeaveCancelled:E,onBeforeAppear:A,onAppear:$,onAfterAppear:P,onAppearCancelled:N}=e,U=String(t.key),W=sc(n,t),V=(T,L)=>{T&&Le(T,r,9,L)},M=(T,L)=>{const K=L[1];V(T,L),B(T)?T.every(Z=>Z.length<=1)&&K():T.length<=1&&K()},G={mode:i,persisted:o,beforeEnter(T){let L=c;if(!n.isMounted)if(s)L=A||c;else return;T[gt]&&T[gt](!0);const K=W[U];K&&Bt(t,K)&&K.el[gt]&&K.el[gt](),V(L,[T])},enter(T){let L=a,K=l,Z=u;if(!n.isMounted)if(s)L=$||a,K=P||l,Z=N||u;else return;let D=!1;const ee=T[cr]=me=>{D||(D=!0,me?V(Z,[T]):V(K,[T]),G.delayedLeave&&G.delayedLeave(),T[cr]=void 0)};L?M(L,[T,ee]):ee()},leave(T,L){const K=String(t.key);if(T[cr]&&T[cr](!0),n.isUnmounting)return L();V(d,[T]);let Z=!1;const D=T[gt]=ee=>{Z||(Z=!0,L(),ee?V(E,[T]):V(m,[T]),T[gt]=void 0,W[K]===t&&delete W[K])};W[K]=t,p?M(p,[T,D]):D()},clone(T){return ks(T,e,n,r)}};return G}function us(t){if(Gr(t))return t=At(t),t.children=null,t}function Qi(t){if(!Gr(t))return t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&q(n.default))return n.default()}}function Ns(t,e){t.shapeFlag&6&&t.component?Ns(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function ic(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const c=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Ve?(o.patchFlag&128&&s++,r=r.concat(ic(o.children,e,c))):(e||o.type!==Ne)&&r.push(c!=null?At(o,{key:c}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function oc(t,e){return q(t)?de({name:t.name},e,{setup:t}):t}const pr=t=>!!t.type.__asyncLoader,Gr=t=>t.type.__isKeepAlive;function Qu(t,e){ac(t,"a",e)}function Zu(t,e){ac(t,"da",e)}function ac(t,e,n=ge){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Jr(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Gr(s.parent.vnode)&&ef(r,e,n,s),s=s.parent}}function ef(t,e,n,r){const s=Jr(e,t,r,!0);lc(()=>{ri(r[e],s)},n)}function Jr(t,e,n=ge,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Pt();const c=qn(n),a=Le(e,n,t,o);return c(),Ot(),a});return r?s.unshift(i):s.push(i),i}}const it=t=>(e,n=ge)=>(!Xr||t==="sp")&&Jr(t,(...r)=>e(...r),n),tf=it("bm"),yi=it("m"),nf=it("bu"),rf=it("u"),cc=it("bum"),lc=it("um"),sf=it("sp"),of=it("rtg"),af=it("rtc");function cf(t,e=ge){Jr("ec",t,e)}function M_(t,e,n,r){let s;const i=n;if(B(t)||fe(t)){s=new Array(t.length);for(let o=0,c=t.length;o<c;o++)s[o]=e(t[o],o,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i)}else if(ae(t))if(t[Symbol.iterator])s=Array.from(t,(o,c)=>e(o,c,void 0,i));else{const o=Object.keys(t);s=new Array(o.length);for(let c=0,a=o.length;c<a;c++){const l=o[c];s[c]=e(t[l],l,c,i)}}else s=[];return s}const Ls=t=>t?Rc(t)?Qr(t)||t.proxy:Ls(t.parent):null,Rn=de(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ls(t.parent),$root:t=>Ls(t.root),$emit:t=>t.emit,$options:t=>bi(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,_i(t.update)}),$nextTick:t=>t.n||(t.n=Kr.bind(t.proxy)),$watch:t=>Gu.bind(t)}),fs=(t,e)=>t!==ce&&!t.__isScriptSetup&&X(t,e),lf={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:a}=t;let l;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(fs(r,e))return o[e]=1,r[e];if(s!==ce&&X(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&X(l,e))return o[e]=3,i[e];if(n!==ce&&X(n,e))return o[e]=4,n[e];Ds&&(o[e]=0)}}const u=Rn[e];let d,p;if(u)return e==="$attrs"&&Te(t.attrs,"get",""),u(t);if((d=c.__cssModules)&&(d=d[e]))return d;if(n!==ce&&X(n,e))return o[e]=4,n[e];if(p=a.config.globalProperties,X(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return fs(s,e)?(s[e]=n,!0):r!==ce&&X(r,e)?(r[e]=n,!0):X(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||t!==ce&&X(t,o)||fs(e,o)||(c=i[0])&&X(c,o)||X(r,o)||X(Rn,o)||X(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:X(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Zi(t){return B(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Ds=!0;function uf(t){const e=bi(t),n=t.proxy,r=t.ctx;Ds=!1,e.beforeCreate&&eo(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:a,inject:l,created:u,beforeMount:d,mounted:p,beforeUpdate:m,updated:E,activated:A,deactivated:$,beforeDestroy:P,beforeUnmount:N,destroyed:U,unmounted:W,render:V,renderTracked:M,renderTriggered:G,errorCaptured:T,serverPrefetch:L,expose:K,inheritAttrs:Z,components:D,directives:ee,filters:me}=e;if(l&&ff(l,r,null),o)for(const se in o){const te=o[se];q(te)&&(r[se]=te.bind(n))}if(s){const se=s.call(n,n);ae(se)&&(t.data=zn(se))}if(Ds=!0,i)for(const se in i){const te=i[se],Ye=q(te)?te.bind(n,n):q(te.get)?te.get.bind(n,n):ke,at=!q(te)&&q(te.set)?te.set.bind(n):ke,Be=Oe({get:Ye,set:at});Object.defineProperty(r,se,{enumerable:!0,configurable:!0,get:()=>Be.value,set:Ie=>Be.value=Ie})}if(c)for(const se in c)uc(c[se],r,n,se);if(a){const se=q(a)?a.call(n):a;Reflect.ownKeys(se).forEach(te=>{gr(te,se[te])})}u&&eo(u,t,"c");function Y(se,te){B(te)?te.forEach(Ye=>se(Ye.bind(n))):te&&se(te.bind(n))}if(Y(tf,d),Y(yi,p),Y(nf,m),Y(rf,E),Y(Qu,A),Y(Zu,$),Y(cf,T),Y(af,M),Y(of,G),Y(cc,N),Y(lc,W),Y(sf,L),B(K))if(K.length){const se=t.exposed||(t.exposed={});K.forEach(te=>{Object.defineProperty(se,te,{get:()=>n[te],set:Ye=>n[te]=Ye})})}else t.exposed||(t.exposed={});V&&t.render===ke&&(t.render=V),Z!=null&&(t.inheritAttrs=Z),D&&(t.components=D),ee&&(t.directives=ee)}function ff(t,e,n=ke){B(t)&&(t=Ms(t));for(const r in t){const s=t[r];let i;ae(s)?"default"in s?i=xe(s.from||r,s.default,!0):i=xe(s.from||r):i=xe(s),he(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function eo(t,e,n){Le(B(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function uc(t,e,n,r){const s=r.includes(".")?nc(n,r):()=>n[r];if(fe(t)){const i=e[t];q(i)&&Cn(s,i)}else if(q(t))Cn(s,t.bind(n));else if(ae(t))if(B(t))t.forEach(i=>uc(i,e,n,r));else{const i=q(t.handler)?t.handler.bind(n):e[t.handler];q(i)&&Cn(s,i,t)}}function bi(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let a;return c?a=c:!s.length&&!n&&!r?a=e:(a={},s.length&&s.forEach(l=>Cr(a,l,o,!0)),Cr(a,e,o)),ae(e)&&i.set(e,a),a}function Cr(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Cr(t,i,n,!0),s&&s.forEach(o=>Cr(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=df[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const df={data:to,props:no,emits:no,methods:wn,computed:wn,beforeCreate:we,created:we,beforeMount:we,mounted:we,beforeUpdate:we,updated:we,beforeDestroy:we,beforeUnmount:we,destroyed:we,unmounted:we,activated:we,deactivated:we,errorCaptured:we,serverPrefetch:we,components:wn,directives:wn,watch:pf,provide:to,inject:hf};function to(t,e){return e?t?function(){return de(q(t)?t.call(this,this):t,q(e)?e.call(this,this):e)}:e:t}function hf(t,e){return wn(Ms(t),Ms(e))}function Ms(t){if(B(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function we(t,e){return t?[...new Set([].concat(t,e))]:e}function wn(t,e){return t?de(Object.create(null),t,e):e}function no(t,e){return t?B(t)&&B(e)?[...new Set([...t,...e])]:de(Object.create(null),Zi(t),Zi(e??{})):e}function pf(t,e){if(!t)return e;if(!e)return t;const n=de(Object.create(null),t);for(const r in e)n[r]=we(t[r],e[r]);return n}function fc(){return{app:null,config:{isNativeTag:Hl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let gf=0;function mf(t,e){return function(r,s=null){q(r)||(r=de({},r)),s!=null&&!ae(s)&&(s=null);const i=fc(),o=new WeakSet;let c=!1;const a=i.app={_uid:gf++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Kf,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&q(l.install)?(o.add(l),l.install(a,...u)):q(l)&&(o.add(l),l(a,...u))),a},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),a},component(l,u){return u?(i.components[l]=u,a):i.components[l]},directive(l,u){return u?(i.directives[l]=u,a):i.directives[l]},mount(l,u,d){if(!c){const p=Ae(r,s);return p.appContext=i,d===!0?d="svg":d===!1&&(d=void 0),u&&e?e(p,l):t(p,l,d),c=!0,a._container=l,l.__vue_app__=a,Qr(p.component)||p.component.proxy}},unmount(){c&&(t(null,a._container),delete a._container.__vue_app__)},provide(l,u){return i.provides[l]=u,a},runWithContext(l){const u=an;an=a;try{return l()}finally{an=u}}};return a}}let an=null;function gr(t,e){if(ge){let n=ge.provides;const r=ge.parent&&ge.parent.provides;r===n&&(n=ge.provides=Object.create(r)),n[t]=e}}function xe(t,e,n=!1){const r=ge||ye;if(r||an){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:an._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&q(e)?e.call(r&&r.proxy):e}}function _f(){return!!(ge||ye||an)}const dc={},hc=()=>Object.create(dc),pc=t=>Object.getPrototypeOf(t)===dc;function vf(t,e,n,r=!1){const s={},i=hc();t.propsDefaults=Object.create(null),gc(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Wa(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function yf(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=Q(s),[a]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let p=u[d];if(zr(t.emitsOptions,p))continue;const m=e[p];if(a)if(X(i,p))m!==i[p]&&(i[p]=m,l=!0);else{const E=Ge(p);s[E]=xs(a,c,E,m,t,!1)}else m!==i[p]&&(i[p]=m,l=!0)}}}else{gc(t,e,s,i)&&(l=!0);let u;for(const d in c)(!e||!X(e,d)&&((u=_n(d))===d||!X(e,u)))&&(a?n&&(n[d]!==void 0||n[u]!==void 0)&&(s[d]=xs(a,c,d,void 0,t,!0)):delete s[d]);if(i!==c)for(const d in i)(!e||!X(e,d))&&(delete i[d],l=!0)}l&&tt(t.attrs,"set","")}function gc(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let a in e){if(Tn(a))continue;const l=e[a];let u;s&&X(s,u=Ge(a))?!i||!i.includes(u)?n[u]=l:(c||(c={}))[u]=l:zr(t.emitsOptions,a)||(!(a in r)||l!==r[a])&&(r[a]=l,o=!0)}if(i){const a=Q(n),l=c||ce;for(let u=0;u<i.length;u++){const d=i[u];n[d]=xs(s,a,d,l[d],t,!X(l,d))}}return o}function xs(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=X(o,"default");if(c&&r===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&q(a)){const{propsDefaults:l}=s;if(n in l)r=l[n];else{const u=qn(s);r=l[n]=a.call(null,e),u()}}else r=a}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===_n(n))&&(r=!0))}return r}function mc(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let a=!1;if(!q(t)){const u=d=>{a=!0;const[p,m]=mc(d,e,!0);de(o,p),m&&c.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!a)return ae(t)&&r.set(t,rn),rn;if(B(i))for(let u=0;u<i.length;u++){const d=Ge(i[u]);ro(d)&&(o[d]=ce)}else if(i)for(const u in i){const d=Ge(u);if(ro(d)){const p=i[u],m=o[d]=B(p)||q(p)?{type:p}:de({},p);if(m){const E=oo(Boolean,m.type),A=oo(String,m.type);m[0]=E>-1,m[1]=A<0||E<A,(E>-1||X(m,"default"))&&c.push(d)}}}const l=[o,c];return ae(t)&&r.set(t,l),l}function ro(t){return t[0]!=="$"&&!Tn(t)}function so(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function io(t,e){return so(t)===so(e)}function oo(t,e){return B(e)?e.findIndex(n=>io(n,t)):q(e)&&io(e,t)?0:-1}const _c=t=>t[0]==="_"||t==="$stable",Ei=t=>B(t)?t.map(je):[je(t)],bf=(t,e,n)=>{if(e._n)return e;const r=xu((...s)=>Ei(e(...s)),n);return r._c=!1,r},vc=(t,e,n)=>{const r=t._ctx;for(const s in t){if(_c(s))continue;const i=t[s];if(q(i))e[s]=bf(s,i,r);else if(i!=null){const o=Ei(i);e[s]=()=>o}}},yc=(t,e)=>{const n=Ei(e);t.slots.default=()=>n},Ef=(t,e)=>{const n=t.slots=hc();if(t.vnode.shapeFlag&32){const r=e._;r?(de(n,e),Ca(n,"_",r,!0)):vc(e,n)}else e&&yc(t,e)},wf=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=ce;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:(de(s,e),!n&&c===1&&delete s._):(i=!e.$stable,vc(e,s)),o=e}else e&&(yc(t,e),o={default:1});if(i)for(const c in s)!_c(c)&&o[c]==null&&delete s[c]};function Us(t,e,n,r,s=!1){if(B(t)){t.forEach((p,m)=>Us(p,e&&(B(e)?e[m]:e),n,r,s));return}if(pr(r)&&!s)return;const i=r.shapeFlag&4?Qr(r.component)||r.component.proxy:r.el,o=s?null:i,{i:c,r:a}=t,l=e&&e.r,u=c.refs===ce?c.refs={}:c.refs,d=c.setupState;if(l!=null&&l!==a&&(fe(l)?(u[l]=null,X(d,l)&&(d[l]=null)):he(l)&&(l.value=null)),q(a))St(a,c,12,[o,u]);else{const p=fe(a),m=he(a);if(p||m){const E=()=>{if(t.f){const A=p?X(d,a)?d[a]:u[a]:a.value;s?B(A)&&ri(A,i):B(A)?A.includes(i)||A.push(i):p?(u[a]=[i],X(d,a)&&(d[a]=u[a])):(a.value=[i],t.k&&(u[t.k]=a.value))}else p?(u[a]=o,X(d,a)&&(d[a]=o)):m&&(a.value=o,t.k&&(u[t.k]=o))};o?(E.id=-1,Se(E,n)):E()}}}const Se=Ku;function If(t){return Sf(t)}function Sf(t,e){const n=Ra();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:a,setText:l,setElementText:u,parentNode:d,nextSibling:p,setScopeId:m=ke,insertStaticContent:E}=t,A=(f,h,g,y=null,_=null,I=null,R=void 0,w=null,S=!!h.dynamicChildren)=>{if(f===h)return;f&&!Bt(f,h)&&(y=v(f),Ie(f,_,I,!0),f=null),h.patchFlag===-2&&(S=!1,h.dynamicChildren=null);const{type:b,ref:k,shapeFlag:H}=h;switch(b){case Yr:$(f,h,g,y);break;case Ne:P(f,h,g,y);break;case hs:f==null&&N(h,g,y,R);break;case Ve:D(f,h,g,y,_,I,R,w,S);break;default:H&1?V(f,h,g,y,_,I,R,w,S):H&6?ee(f,h,g,y,_,I,R,w,S):(H&64||H&128)&&b.process(f,h,g,y,_,I,R,w,S,x)}k!=null&&_&&Us(k,f&&f.ref,I,h||f,!h)},$=(f,h,g,y)=>{if(f==null)r(h.el=c(h.children),g,y);else{const _=h.el=f.el;h.children!==f.children&&l(_,h.children)}},P=(f,h,g,y)=>{f==null?r(h.el=a(h.children||""),g,y):h.el=f.el},N=(f,h,g,y)=>{[f.el,f.anchor]=E(f.children,h,g,y,f.el,f.anchor)},U=({el:f,anchor:h},g,y)=>{let _;for(;f&&f!==h;)_=p(f),r(f,g,y),f=_;r(h,g,y)},W=({el:f,anchor:h})=>{let g;for(;f&&f!==h;)g=p(f),s(f),f=g;s(h)},V=(f,h,g,y,_,I,R,w,S)=>{h.type==="svg"?R="svg":h.type==="math"&&(R="mathml"),f==null?M(h,g,y,_,I,R,w,S):L(f,h,_,I,R,w,S)},M=(f,h,g,y,_,I,R,w)=>{let S,b;const{props:k,shapeFlag:H,transition:F,dirs:z}=f;if(S=f.el=o(f.type,I,k&&k.is,k),H&8?u(S,f.children):H&16&&T(f.children,S,null,y,_,ds(f,I),R,w),z&&Lt(f,null,y,"created"),G(S,f,f.scopeId,R,y),k){for(const ie in k)ie!=="value"&&!Tn(ie)&&i(S,ie,null,k[ie],I,f.children,y,_,_e);"value"in k&&i(S,"value",null,k.value,I),(b=k.onVnodeBeforeMount)&&He(b,y,f)}z&&Lt(f,null,y,"beforeMount");const J=Tf(_,F);J&&F.beforeEnter(S),r(S,h,g),((b=k&&k.onVnodeMounted)||J||z)&&Se(()=>{b&&He(b,y,f),J&&F.enter(S),z&&Lt(f,null,y,"mounted")},_)},G=(f,h,g,y,_)=>{if(g&&m(f,g),y)for(let I=0;I<y.length;I++)m(f,y[I]);if(_){let I=_.subTree;if(h===I){const R=_.vnode;G(f,R,R.scopeId,R.slotScopeIds,_.parent)}}},T=(f,h,g,y,_,I,R,w,S=0)=>{for(let b=S;b<f.length;b++){const k=f[b]=w?mt(f[b]):je(f[b]);A(null,k,h,g,y,_,I,R,w)}},L=(f,h,g,y,_,I,R)=>{const w=h.el=f.el;let{patchFlag:S,dynamicChildren:b,dirs:k}=h;S|=f.patchFlag&16;const H=f.props||ce,F=h.props||ce;let z;if(g&&Dt(g,!1),(z=F.onVnodeBeforeUpdate)&&He(z,g,h,f),k&&Lt(h,f,g,"beforeUpdate"),g&&Dt(g,!0),b?K(f.dynamicChildren,b,w,g,y,ds(h,_),I):R||te(f,h,w,null,g,y,ds(h,_),I,!1),S>0){if(S&16)Z(w,h,H,F,g,y,_);else if(S&2&&H.class!==F.class&&i(w,"class",null,F.class,_),S&4&&i(w,"style",H.style,F.style,_),S&8){const J=h.dynamicProps;for(let ie=0;ie<J.length;ie++){const le=J[ie],pe=H[le],De=F[le];(De!==pe||le==="value")&&i(w,le,pe,De,_,f.children,g,y,_e)}}S&1&&f.children!==h.children&&u(w,h.children)}else!R&&b==null&&Z(w,h,H,F,g,y,_);((z=F.onVnodeUpdated)||k)&&Se(()=>{z&&He(z,g,h,f),k&&Lt(h,f,g,"updated")},y)},K=(f,h,g,y,_,I,R)=>{for(let w=0;w<h.length;w++){const S=f[w],b=h[w],k=S.el&&(S.type===Ve||!Bt(S,b)||S.shapeFlag&70)?d(S.el):g;A(S,b,k,null,y,_,I,R,!0)}},Z=(f,h,g,y,_,I,R)=>{if(g!==y){if(g!==ce)for(const w in g)!Tn(w)&&!(w in y)&&i(f,w,g[w],null,R,h.children,_,I,_e);for(const w in y){if(Tn(w))continue;const S=y[w],b=g[w];S!==b&&w!=="value"&&i(f,w,b,S,R,h.children,_,I,_e)}"value"in y&&i(f,"value",g.value,y.value,R)}},D=(f,h,g,y,_,I,R,w,S)=>{const b=h.el=f?f.el:c(""),k=h.anchor=f?f.anchor:c("");let{patchFlag:H,dynamicChildren:F,slotScopeIds:z}=h;z&&(w=w?w.concat(z):z),f==null?(r(b,g,y),r(k,g,y),T(h.children||[],g,k,_,I,R,w,S)):H>0&&H&64&&F&&f.dynamicChildren?(K(f.dynamicChildren,F,g,_,I,R,w),(h.key!=null||_&&h===_.subTree)&&wi(f,h,!0)):te(f,h,g,k,_,I,R,w,S)},ee=(f,h,g,y,_,I,R,w,S)=>{h.slotScopeIds=w,f==null?h.shapeFlag&512?_.ctx.activate(h,g,y,R,S):me(h,g,y,_,I,R,S):Ee(f,h,S)},me=(f,h,g,y,_,I,R)=>{const w=f.component=Uf(f,y,_);if(Gr(f)&&(w.ctx.renderer=x),Bf(w),w.asyncDep){if(_&&_.registerDep(w,Y),!f.el){const S=w.subTree=Ae(Ne);P(null,S,h,g)}}else Y(w,f,h,g,_,I,R)},Ee=(f,h,g)=>{const y=h.component=f.component;if(Bu(f,h,g))if(y.asyncDep&&!y.asyncResolved){se(y,h,g);return}else y.next=h,Nu(y.update),y.effect.dirty=!0,y.update();else h.el=f.el,y.vnode=h},Y=(f,h,g,y,_,I,R)=>{const w=()=>{if(f.isMounted){let{next:k,bu:H,u:F,parent:z,vnode:J}=f;{const Qt=bc(f);if(Qt){k&&(k.el=J.el,se(f,k,R)),Qt.asyncDep.then(()=>{f.isUnmounted||w()});return}}let ie=k,le;Dt(f,!1),k?(k.el=J.el,se(f,k,R)):k=J,H&&dr(H),(le=k.props&&k.props.onVnodeBeforeUpdate)&&He(le,z,k,J),Dt(f,!0);const pe=ls(f),De=f.subTree;f.subTree=pe,A(De,pe,d(De.el),v(De),f,_,I),k.el=pe.el,ie===null&&$u(f,pe.el),F&&Se(F,_),(le=k.props&&k.props.onVnodeUpdated)&&Se(()=>He(le,z,k,J),_)}else{let k;const{el:H,props:F}=h,{bm:z,m:J,parent:ie}=f,le=pr(h);if(Dt(f,!1),z&&dr(z),!le&&(k=F&&F.onVnodeBeforeMount)&&He(k,ie,h),Dt(f,!0),H&&ue){const pe=()=>{f.subTree=ls(f),ue(H,f.subTree,f,_,null)};le?h.type.__asyncLoader().then(()=>!f.isUnmounted&&pe()):pe()}else{const pe=f.subTree=ls(f);A(null,pe,g,y,f,_,I),h.el=pe.el}if(J&&Se(J,_),!le&&(k=F&&F.onVnodeMounted)){const pe=h;Se(()=>He(k,ie,pe),_)}(h.shapeFlag&256||ie&&pr(ie.vnode)&&ie.vnode.shapeFlag&256)&&f.a&&Se(f.a,_),f.isMounted=!0,h=g=y=null}},S=f.effect=new ai(w,ke,()=>_i(b),f.scope),b=f.update=()=>{S.dirty&&S.run()};b.id=f.uid,Dt(f,!0),b()},se=(f,h,g)=>{h.component=f;const y=f.vnode.props;f.vnode=h,f.next=null,yf(f,h.props,y,g),wf(f,h.children,g),Pt(),Ji(f),Ot()},te=(f,h,g,y,_,I,R,w,S=!1)=>{const b=f&&f.children,k=f?f.shapeFlag:0,H=h.children,{patchFlag:F,shapeFlag:z}=h;if(F>0){if(F&128){at(b,H,g,y,_,I,R,w,S);return}else if(F&256){Ye(b,H,g,y,_,I,R,w,S);return}}z&8?(k&16&&_e(b,_,I),H!==b&&u(g,H)):k&16?z&16?at(b,H,g,y,_,I,R,w,S):_e(b,_,I,!0):(k&8&&u(g,""),z&16&&T(H,g,y,_,I,R,w,S))},Ye=(f,h,g,y,_,I,R,w,S)=>{f=f||rn,h=h||rn;const b=f.length,k=h.length,H=Math.min(b,k);let F;for(F=0;F<H;F++){const z=h[F]=S?mt(h[F]):je(h[F]);A(f[F],z,g,null,_,I,R,w,S)}b>k?_e(f,_,I,!0,!1,H):T(h,g,y,_,I,R,w,S,H)},at=(f,h,g,y,_,I,R,w,S)=>{let b=0;const k=h.length;let H=f.length-1,F=k-1;for(;b<=H&&b<=F;){const z=f[b],J=h[b]=S?mt(h[b]):je(h[b]);if(Bt(z,J))A(z,J,g,null,_,I,R,w,S);else break;b++}for(;b<=H&&b<=F;){const z=f[H],J=h[F]=S?mt(h[F]):je(h[F]);if(Bt(z,J))A(z,J,g,null,_,I,R,w,S);else break;H--,F--}if(b>H){if(b<=F){const z=F+1,J=z<k?h[z].el:y;for(;b<=F;)A(null,h[b]=S?mt(h[b]):je(h[b]),g,J,_,I,R,w,S),b++}}else if(b>F)for(;b<=H;)Ie(f[b],_,I,!0),b++;else{const z=b,J=b,ie=new Map;for(b=J;b<=F;b++){const Ce=h[b]=S?mt(h[b]):je(h[b]);Ce.key!=null&&ie.set(Ce.key,b)}let le,pe=0;const De=F-J+1;let Qt=!1,Ui=0;const yn=new Array(De);for(b=0;b<De;b++)yn[b]=0;for(b=z;b<=H;b++){const Ce=f[b];if(pe>=De){Ie(Ce,_,I,!0);continue}let $e;if(Ce.key!=null)$e=ie.get(Ce.key);else for(le=J;le<=F;le++)if(yn[le-J]===0&&Bt(Ce,h[le])){$e=le;break}$e===void 0?Ie(Ce,_,I,!0):(yn[$e-J]=b+1,$e>=Ui?Ui=$e:Qt=!0,A(Ce,h[$e],g,null,_,I,R,w,S),pe++)}const Fi=Qt?Cf(yn):rn;for(le=Fi.length-1,b=De-1;b>=0;b--){const Ce=J+b,$e=h[Ce],Bi=Ce+1<k?h[Ce+1].el:y;yn[b]===0?A(null,$e,g,Bi,_,I,R,w,S):Qt&&(le<0||b!==Fi[le]?Be($e,g,Bi,2):le--)}}},Be=(f,h,g,y,_=null)=>{const{el:I,type:R,transition:w,children:S,shapeFlag:b}=f;if(b&6){Be(f.component.subTree,h,g,y);return}if(b&128){f.suspense.move(h,g,y);return}if(b&64){R.move(f,h,g,x);return}if(R===Ve){r(I,h,g);for(let H=0;H<S.length;H++)Be(S[H],h,g,y);r(f.anchor,h,g);return}if(R===hs){U(f,h,g);return}if(y!==2&&b&1&&w)if(y===0)w.beforeEnter(I),r(I,h,g),Se(()=>w.enter(I),_);else{const{leave:H,delayLeave:F,afterLeave:z}=w,J=()=>r(I,h,g),ie=()=>{H(I,()=>{J(),z&&z()})};F?F(I,J,ie):ie()}else r(I,h,g)},Ie=(f,h,g,y=!1,_=!1)=>{const{type:I,props:R,ref:w,children:S,dynamicChildren:b,shapeFlag:k,patchFlag:H,dirs:F}=f;if(w!=null&&Us(w,null,g,f,!0),k&256){h.ctx.deactivate(f);return}const z=k&1&&F,J=!pr(f);let ie;if(J&&(ie=R&&R.onVnodeBeforeUnmount)&&He(ie,h,f),k&6)tr(f.component,g,y);else{if(k&128){f.suspense.unmount(g,y);return}z&&Lt(f,null,h,"beforeUnmount"),k&64?f.type.remove(f,h,g,_,x,y):b&&(I!==Ve||H>0&&H&64)?_e(b,h,g,!1,!0):(I===Ve&&H&384||!_&&k&16)&&_e(S,h,g),y&&Yt(f)}(J&&(ie=R&&R.onVnodeUnmounted)||z)&&Se(()=>{ie&&He(ie,h,f),z&&Lt(f,null,h,"unmounted")},g)},Yt=f=>{const{type:h,el:g,anchor:y,transition:_}=f;if(h===Ve){Xt(g,y);return}if(h===hs){W(f);return}const I=()=>{s(g),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(f.shapeFlag&1&&_&&!_.persisted){const{leave:R,delayLeave:w}=_,S=()=>R(g,I);w?w(f.el,I,S):S()}else I()},Xt=(f,h)=>{let g;for(;f!==h;)g=p(f),s(f),f=g;s(h)},tr=(f,h,g)=>{const{bum:y,scope:_,update:I,subTree:R,um:w}=f;y&&dr(y),_.stop(),I&&(I.active=!1,Ie(R,f,h,g)),w&&Se(w,h),Se(()=>{f.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},_e=(f,h,g,y=!1,_=!1,I=0)=>{for(let R=I;R<f.length;R++)Ie(f[R],h,g,y,_)},v=f=>f.shapeFlag&6?v(f.component.subTree):f.shapeFlag&128?f.suspense.next():p(f.anchor||f.el);let O=!1;const C=(f,h,g)=>{f==null?h._vnode&&Ie(h._vnode,null,null,!0):A(h._vnode||null,f,h,null,null,null,g),O||(O=!0,Ji(),Za(),O=!1),h._vnode=f},x={p:A,um:Ie,m:Be,r:Yt,mt:me,mc:T,pc:te,pbc:K,n:v,o:t};let ne,ue;return{render:C,hydrate:ne,createApp:mf(C,ne)}}function ds({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Dt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Tf(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function wi(t,e,n=!1){const r=t.children,s=e.children;if(B(r)&&B(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=mt(s[i]),c.el=o.el),n||wi(o,c)),c.type===Yr&&(c.el=o.el)}}function Cf(t){const e=t.slice(),n=[0];let r,s,i,o,c;const a=t.length;for(r=0;r<a;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<l?i=c+1:o=c;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function bc(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:bc(e)}const Rf=t=>t.__isTeleport,An=t=>t&&(t.disabled||t.disabled===""),ao=t=>typeof SVGElement<"u"&&t instanceof SVGElement,co=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,Fs=(t,e)=>{const n=t&&t.to;return fe(n)?e?e(n):null:n},Af={name:"Teleport",__isTeleport:!0,process(t,e,n,r,s,i,o,c,a,l){const{mc:u,pc:d,pbc:p,o:{insert:m,querySelector:E,createText:A,createComment:$}}=l,P=An(e.props);let{shapeFlag:N,children:U,dynamicChildren:W}=e;if(t==null){const V=e.el=A(""),M=e.anchor=A("");m(V,n,r),m(M,n,r);const G=e.target=Fs(e.props,E),T=e.targetAnchor=A("");G&&(m(T,G),o==="svg"||ao(G)?o="svg":(o==="mathml"||co(G))&&(o="mathml"));const L=(K,Z)=>{N&16&&u(U,K,Z,s,i,o,c,a)};P?L(n,M):G&&L(G,T)}else{e.el=t.el;const V=e.anchor=t.anchor,M=e.target=t.target,G=e.targetAnchor=t.targetAnchor,T=An(t.props),L=T?n:M,K=T?V:G;if(o==="svg"||ao(M)?o="svg":(o==="mathml"||co(M))&&(o="mathml"),W?(p(t.dynamicChildren,W,L,s,i,o,c),wi(t,e,!0)):a||d(t,e,L,K,s,i,o,c,!1),P)T?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):lr(e,n,V,l,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const Z=e.target=Fs(e.props,E);Z&&lr(e,Z,null,l,0)}else T&&lr(e,M,G,l,1)}Ec(e)},remove(t,e,n,r,{um:s,o:{remove:i}},o){const{shapeFlag:c,children:a,anchor:l,targetAnchor:u,target:d,props:p}=t;if(d&&i(u),o&&i(l),c&16){const m=o||!An(p);for(let E=0;E<a.length;E++){const A=a[E];s(A,e,n,m,!!A.dynamicChildren)}}},move:lr,hydrate:Pf};function lr(t,e,n,{o:{insert:r},m:s},i=2){i===0&&r(t.targetAnchor,e,n);const{el:o,anchor:c,shapeFlag:a,children:l,props:u}=t,d=i===2;if(d&&r(o,e,n),(!d||An(u))&&a&16)for(let p=0;p<l.length;p++)s(l[p],e,n,2);d&&r(c,e,n)}function Pf(t,e,n,r,s,i,{o:{nextSibling:o,parentNode:c,querySelector:a}},l){const u=e.target=Fs(e.props,a);if(u){const d=u._lpa||u.firstChild;if(e.shapeFlag&16)if(An(e.props))e.anchor=l(o(t),e,c(t),n,r,s,i),e.targetAnchor=d;else{e.anchor=o(t);let p=d;for(;p;)if(p=o(p),p&&p.nodeType===8&&p.data==="teleport anchor"){e.targetAnchor=p,u._lpa=e.targetAnchor&&o(e.targetAnchor);break}l(d,e,u,n,r,s,i)}Ec(e)}return e.anchor&&o(e.anchor)}const x_=Af;function Ec(t){const e=t.ctx;if(e&&e.ut){let n=t.children[0].el;for(;n&&n!==t.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",e.uid),n=n.nextSibling;e.ut()}}const Ve=Symbol.for("v-fgt"),Yr=Symbol.for("v-txt"),Ne=Symbol.for("v-cmt"),hs=Symbol.for("v-stc"),Pn=[];let Me=null;function wc(t=!1){Pn.push(Me=t?null:[])}function Of(){Pn.pop(),Me=Pn[Pn.length-1]||null}let Fn=1;function lo(t){Fn+=t}function Ic(t){return t.dynamicChildren=Fn>0?Me||rn:null,Of(),Fn>0&&Me&&Me.push(t),t}function U_(t,e,n,r,s,i){return Ic(Cc(t,e,n,r,s,i,!0))}function Sc(t,e,n,r,s){return Ic(Ae(t,e,n,r,s,!0))}function Bs(t){return t?t.__v_isVNode===!0:!1}function Bt(t,e){return t.type===e.type&&t.key===e.key}const Tc=({key:t})=>t??null,mr=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?fe(t)||he(t)||q(t)?{i:ye,r:t,k:e,f:!!n}:t:null);function Cc(t,e=null,n=null,r=0,s=null,i=t===Ve?0:1,o=!1,c=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Tc(e),ref:e&&mr(e),scopeId:qr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:ye};return c?(Ii(a,n),i&128&&t.normalize(a)):n&&(a.shapeFlag|=fe(n)?8:16),Fn>0&&!o&&Me&&(a.patchFlag>0||i&6)&&a.patchFlag!==32&&Me.push(a),a}const Ae=kf;function kf(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Vu)&&(t=Ne),Bs(t)){const c=At(t,e,!0);return n&&Ii(c,n),Fn>0&&!i&&Me&&(c.shapeFlag&6?Me[Me.indexOf(t)]=c:Me.push(c)),c.patchFlag|=-2,c}if(Wf(t)&&(t=t.__vccOpts),e){e=Nf(e);let{class:c,style:a}=e;c&&!fe(c)&&(e.class=oi(c)),ae(a)&&(za(a)&&!B(a)&&(a=de({},a)),e.style=ii(a))}const o=fe(t)?1:Wu(t)?128:Rf(t)?64:ae(t)?4:q(t)?2:0;return Cc(t,e,n,r,s,o,i,!0)}function Nf(t){return t?za(t)||pc(t)?de({},t):t:null}function At(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:a}=t,l=e?Df(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&Tc(l),ref:e&&e.ref?n&&i?B(i)?i.concat(mr(e)):[i,mr(e)]:mr(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ve?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:a,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&At(t.ssContent),ssFallback:t.ssFallback&&At(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return a&&r&&(u.transition=a.clone(u)),u}function Lf(t=" ",e=0){return Ae(Yr,null,t,e)}function F_(t="",e=!1){return e?(wc(),Sc(Ne,null,t)):Ae(Ne,null,t)}function je(t){return t==null||typeof t=="boolean"?Ae(Ne):B(t)?Ae(Ve,null,t.slice()):typeof t=="object"?mt(t):Ae(Yr,null,String(t))}function mt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:At(t)}function Ii(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(B(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Ii(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!pc(e)?e._ctx=ye:s===3&&ye&&(ye.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else q(e)?(e={default:e,_ctx:ye},n=32):(e=String(e),r&64?(n=16,e=[Lf(e)]):n=8);t.children=e,t.shapeFlag|=n}function Df(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=oi([e.class,r.class]));else if(s==="style")e.style=ii([e.style,r.style]);else if(Fr(s)){const i=e[s],o=r[s];o&&i!==o&&!(B(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function He(t,e,n,r=null){Le(t,e,7,[n,r])}const Mf=fc();let xf=0;function Uf(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Mf,i={uid:xf++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Oa(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:mc(r,s),emitsOptions:tc(r,s),emit:null,emitted:null,propsDefaults:ce,inheritAttrs:r.inheritAttrs,ctx:ce,data:ce,props:ce,attrs:ce,slots:ce,refs:ce,setupState:ce,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Mu.bind(null,i),t.ce&&t.ce(i),i}let ge=null;const Ff=()=>ge||ye;let Rr,$s;{const t=Ra(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Rr=e("__VUE_INSTANCE_SETTERS__",n=>ge=n),$s=e("__VUE_SSR_SETTERS__",n=>Xr=n)}const qn=t=>{const e=ge;return Rr(t),t.scope.on(),()=>{t.scope.off(),Rr(e)}},uo=()=>{ge&&ge.scope.off(),Rr(null)};function Rc(t){return t.vnode.shapeFlag&4}let Xr=!1;function Bf(t,e=!1){e&&$s(e);const{props:n,children:r}=t.vnode,s=Rc(t);vf(t,n,s,e),Ef(t,r);const i=s?$f(t,e):void 0;return e&&$s(!1),i}function $f(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,lf);const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Vf(t):null,i=qn(t);Pt();const o=St(r,t,0,[t.props,s]);if(Ot(),i(),Ia(o)){if(o.then(uo,uo),e)return o.then(c=>{fo(t,c,e)}).catch(c=>{Wr(c,t,0)});t.asyncDep=o}else fo(t,o,e)}else Ac(t,e)}function fo(t,e,n){q(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ae(e)&&(t.setupState=Ya(e)),Ac(t,n)}let ho;function Ac(t,e,n){const r=t.type;if(!t.render){if(!e&&ho&&!r.render){const s=r.template||bi(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:c,compilerOptions:a}=r,l=de(de({isCustomElement:i,delimiters:c},o),a);r.render=ho(s,l)}}t.render=r.render||ke}{const s=qn(t);Pt();try{uf(t)}finally{Ot(),s()}}}const Hf={get(t,e){return Te(t,"get",""),t[e]}};function Vf(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Hf),slots:t.slots,emit:t.emit,expose:e}}function Qr(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Ya(hi(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Rn)return Rn[n](t)},has(e,n){return n in e||n in Rn}}))}function jf(t,e=!0){return q(t)?t.displayName||t.name:t.name||e&&t.__name}function Wf(t){return q(t)&&"__vccOpts"in t}const Oe=(t,e)=>Iu(t,e,Xr);function Si(t,e,n){const r=arguments.length;return r===2?ae(e)&&!B(e)?Bs(e)?Ae(t,null,[e]):Ae(t,e):Ae(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Bs(n)&&(n=[n]),Ae(t,e,n))}const Kf="3.4.26";/**
* @vue/runtime-dom v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const zf="http://www.w3.org/2000/svg",qf="http://www.w3.org/1998/Math/MathML",_t=typeof document<"u"?document:null,po=_t&&_t.createElement("template"),Gf={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?_t.createElementNS(zf,t):e==="mathml"?_t.createElementNS(qf,t):_t.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>_t.createTextNode(t),createComment:t=>_t.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>_t.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{po.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const c=po.content;if(r==="svg"||r==="mathml"){const a=c.firstChild;for(;a.firstChild;)c.appendChild(a.firstChild);c.removeChild(a)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},lt="transition",bn="animation",Bn=Symbol("_vtc"),Pc=(t,{slots:e})=>Si(Xu,Jf(t),e);Pc.displayName="Transition";const Oc={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Pc.props=de({},rc,Oc);const Mt=(t,e=[])=>{B(t)?t.forEach(n=>n(...e)):t&&t(...e)},go=t=>t?B(t)?t.some(e=>e.length>1):t.length>1:!1;function Jf(t){const e={};for(const D in t)D in Oc||(e[D]=t[D]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:a=i,appearActiveClass:l=o,appearToClass:u=c,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=t,E=Yf(s),A=E&&E[0],$=E&&E[1],{onBeforeEnter:P,onEnter:N,onEnterCancelled:U,onLeave:W,onLeaveCancelled:V,onBeforeAppear:M=P,onAppear:G=N,onAppearCancelled:T=U}=e,L=(D,ee,me)=>{xt(D,ee?u:c),xt(D,ee?l:o),me&&me()},K=(D,ee)=>{D._isLeaving=!1,xt(D,d),xt(D,m),xt(D,p),ee&&ee()},Z=D=>(ee,me)=>{const Ee=D?G:N,Y=()=>L(ee,D,me);Mt(Ee,[ee,Y]),mo(()=>{xt(ee,D?a:i),ut(ee,D?u:c),go(Ee)||_o(ee,r,A,Y)})};return de(e,{onBeforeEnter(D){Mt(P,[D]),ut(D,i),ut(D,o)},onBeforeAppear(D){Mt(M,[D]),ut(D,a),ut(D,l)},onEnter:Z(!1),onAppear:Z(!0),onLeave(D,ee){D._isLeaving=!0;const me=()=>K(D,ee);ut(D,d),ut(D,p),Zf(),mo(()=>{D._isLeaving&&(xt(D,d),ut(D,m),go(W)||_o(D,r,$,me))}),Mt(W,[D,me])},onEnterCancelled(D){L(D,!1),Mt(U,[D])},onAppearCancelled(D){L(D,!0),Mt(T,[D])},onLeaveCancelled(D){K(D),Mt(V,[D])}})}function Yf(t){if(t==null)return null;if(ae(t))return[ps(t.enter),ps(t.leave)];{const e=ps(t);return[e,e]}}function ps(t){return zl(t)}function ut(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Bn]||(t[Bn]=new Set)).add(e)}function xt(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Bn];n&&(n.delete(e),n.size||(t[Bn]=void 0))}function mo(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Xf=0;function _o(t,e,n,r){const s=t._endId=++Xf,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:c,propCount:a}=Qf(t,e);if(!o)return r();const l=o+"end";let u=0;const d=()=>{t.removeEventListener(l,p),i()},p=m=>{m.target===t&&++u>=a&&d()};setTimeout(()=>{u<a&&d()},c+1),t.addEventListener(l,p)}function Qf(t,e){const n=window.getComputedStyle(t),r=E=>(n[E]||"").split(", "),s=r(`${lt}Delay`),i=r(`${lt}Duration`),o=vo(s,i),c=r(`${bn}Delay`),a=r(`${bn}Duration`),l=vo(c,a);let u=null,d=0,p=0;e===lt?o>0&&(u=lt,d=o,p=i.length):e===bn?l>0&&(u=bn,d=l,p=a.length):(d=Math.max(o,l),u=d>0?o>l?lt:bn:null,p=u?u===lt?i.length:a.length:0);const m=u===lt&&/\b(transform|all)(,|$)/.test(r(`${lt}Property`).toString());return{type:u,timeout:d,propCount:p,hasTransform:m}}function vo(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>yo(n)+yo(t[r])))}function yo(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Zf(){return document.body.offsetHeight}function ed(t,e,n){const r=t[Bn];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const bo=Symbol("_vod"),td=Symbol("_vsh"),nd=Symbol(""),rd=/(^|;)\s*display\s*:/;function sd(t,e,n){const r=t.style,s=fe(n);let i=!1;if(n&&!s){if(e)if(fe(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&_r(r,c,"")}else for(const o in e)n[o]==null&&_r(r,o,"");for(const o in n)o==="display"&&(i=!0),_r(r,o,n[o])}else if(s){if(e!==n){const o=r[nd];o&&(n+=";"+o),r.cssText=n,i=rd.test(n)}}else e&&t.removeAttribute("style");bo in t&&(t[bo]=i?r.display:"",t[td]&&(r.display="none"))}const Eo=/\s*!important$/;function _r(t,e,n){if(B(n))n.forEach(r=>_r(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=id(t,e);Eo.test(n)?t.setProperty(_n(r),n.replace(Eo,""),"important"):t[r]=n}}const wo=["Webkit","Moz","ms"],gs={};function id(t,e){const n=gs[e];if(n)return n;let r=Ge(e);if(r!=="filter"&&r in t)return gs[e]=r;r=Hr(r);for(let s=0;s<wo.length;s++){const i=wo[s]+r;if(i in t)return gs[e]=i}return e}const Io="http://www.w3.org/1999/xlink";function od(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Io,e.slice(6,e.length)):t.setAttributeNS(Io,e,n);else{const i=Ql(e);n==null||i&&!Aa(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function ad(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const c=t.tagName;if(e==="value"&&c!=="PROGRESS"&&!c.includes("-")){const l=c==="OPTION"?t.getAttribute("value")||"":t.value,u=n??"";(l!==u||!("_value"in t))&&(t.value=u),n==null&&t.removeAttribute(e),t._value=n;return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Aa(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function $t(t,e,n,r){t.addEventListener(e,n,r)}function cd(t,e,n,r){t.removeEventListener(e,n,r)}const So=Symbol("_vei");function ld(t,e,n,r,s=null){const i=t[So]||(t[So]={}),o=i[e];if(r&&o)o.value=r;else{const[c,a]=ud(e);if(r){const l=i[e]=hd(r,s);$t(t,c,l,a)}else o&&(cd(t,c,o,a),i[e]=void 0)}}const To=/(?:Once|Passive|Capture)$/;function ud(t){let e;if(To.test(t)){e={};let r;for(;r=t.match(To);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):_n(t.slice(2)),e]}let ms=0;const fd=Promise.resolve(),dd=()=>ms||(fd.then(()=>ms=0),ms=Date.now());function hd(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Le(pd(r,n.value),e,5,[r])};return n.value=t,n.attached=dd(),n}function pd(t,e){if(B(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Co=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,gd=(t,e,n,r,s,i,o,c,a)=>{const l=s==="svg";e==="class"?ed(t,r,l):e==="style"?sd(t,n,r):Fr(e)?ni(e)||ld(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):md(t,e,r,l))?ad(t,e,r,i,o,c,a):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),od(t,e,r,l))};function md(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Co(e)&&q(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Co(e)&&fe(n)?!1:e in t}const Ar=t=>{const e=t.props["onUpdate:modelValue"]||!1;return B(e)?n=>dr(e,n):e};function _d(t){t.target.composing=!0}function Ro(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const cn=Symbol("_assign"),B_={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[cn]=Ar(s);const i=r||s.props&&s.props.type==="number";$t(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=wr(c)),t[cn](c)}),n&&$t(t,"change",()=>{t.value=t.value.trim()}),e||($t(t,"compositionstart",_d),$t(t,"compositionend",Ro),$t(t,"change",Ro))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t[cn]=Ar(i),t.composing)return;const o=(s||t.type==="number")&&!/^0\d/.test(t.value)?wr(t.value):t.value,c=e??"";o!==c&&(document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===c)||(t.value=c))}},$_={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Br(e);$t(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?wr(Pr(o)):Pr(o));t[cn](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,Kr(()=>{t._assigning=!1})}),t[cn]=Ar(r)},mounted(t,{value:e,modifiers:{number:n}}){Ao(t,e)},beforeUpdate(t,e,n){t[cn]=Ar(n)},updated(t,{value:e,modifiers:{number:n}}){t._assigning||Ao(t,e)}};function Ao(t,e,n){const r=t.multiple,s=B(e);if(!(r&&!s&&!Br(e))){for(let i=0,o=t.options.length;i<o;i++){const c=t.options[i],a=Pr(c);if(r)if(s){const l=typeof a;l==="string"||l==="number"?c.selected=e.some(u=>String(u)===String(a)):c.selected=eu(e,a)>-1}else c.selected=e.has(a);else if(Vr(Pr(c),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!r&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Pr(t){return"_value"in t?t._value:t.value}const vd=de({patchProp:gd},Gf);let Po;function yd(){return Po||(Po=If(vd))}const bd=(...t)=>{const e=yd().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=wd(r);if(!s)return;const i=e._component;!q(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,Ed(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Ed(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function wd(t){return fe(t)?document.querySelector(t):t}var Id=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let kc;const Zr=t=>kc=t,Nc=Symbol();function Hs(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var On;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(On||(On={}));function Sd(){const t=ka(!0),e=t.run(()=>gi({}));let n=[],r=[];const s=hi({install(i){Zr(s),s._a=i,i.provide(Nc,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!Id?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Lc=()=>{};function Oo(t,e,n,r=Lc){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Na()&&nu(s),s}function Zt(t,...e){t.slice().forEach(n=>{n(...e)})}const Td=t=>t();function Vs(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Hs(s)&&Hs(r)&&t.hasOwnProperty(n)&&!he(r)&&!Wt(r)?t[n]=Vs(s,r):t[n]=r}return t}const Cd=Symbol();function Rd(t){return!Hs(t)||!t.hasOwnProperty(Cd)}const{assign:ht}=Object;function Ad(t){return!!(he(t)&&t.effect)}function Pd(t,e,n,r){const{state:s,actions:i,getters:o}=e,c=n.state.value[t];let a;function l(){c||(n.state.value[t]=s?s():{});const u=Ru(n.state.value[t]);return ht(u,i,Object.keys(o||{}).reduce((d,p)=>(d[p]=hi(Oe(()=>{Zr(n);const m=n._s.get(t);return o[p].call(m,m)})),d),{}))}return a=Dc(t,l,e,n,r,!0),a}function Dc(t,e,n={},r,s,i){let o;const c=ht({actions:{}},n),a={deep:!0};let l,u,d=[],p=[],m;const E=r.state.value[t];!i&&!E&&(r.state.value[t]={}),gi({});let A;function $(T){let L;l=u=!1,typeof T=="function"?(T(r.state.value[t]),L={type:On.patchFunction,storeId:t,events:m}):(Vs(r.state.value[t],T),L={type:On.patchObject,payload:T,storeId:t,events:m});const K=A=Symbol();Kr().then(()=>{A===K&&(l=!0)}),u=!0,Zt(d,L,r.state.value[t])}const P=i?function(){const{state:L}=n,K=L?L():{};this.$patch(Z=>{ht(Z,K)})}:Lc;function N(){o.stop(),d=[],p=[],r._s.delete(t)}function U(T,L){return function(){Zr(r);const K=Array.from(arguments),Z=[],D=[];function ee(Y){Z.push(Y)}function me(Y){D.push(Y)}Zt(p,{args:K,name:T,store:V,after:ee,onError:me});let Ee;try{Ee=L.apply(this&&this.$id===t?this:V,K)}catch(Y){throw Zt(D,Y),Y}return Ee instanceof Promise?Ee.then(Y=>(Zt(Z,Y),Y)).catch(Y=>(Zt(D,Y),Promise.reject(Y))):(Zt(Z,Ee),Ee)}}const W={_p:r,$id:t,$onAction:Oo.bind(null,p),$patch:$,$reset:P,$subscribe(T,L={}){const K=Oo(d,T,L.detached,()=>Z()),Z=o.run(()=>Cn(()=>r.state.value[t],D=>{(L.flush==="sync"?u:l)&&T({storeId:t,type:On.direct,events:m},D)},ht({},a,L)));return K},$dispose:N},V=zn(W);r._s.set(t,V);const G=(r._a&&r._a.runWithContext||Td)(()=>r._e.run(()=>(o=ka()).run(e)));for(const T in G){const L=G[T];if(he(L)&&!Ad(L)||Wt(L))i||(E&&Rd(L)&&(he(L)?L.value=E[T]:Vs(L,E[T])),r.state.value[t][T]=L);else if(typeof L=="function"){const K=U(T,L);G[T]=K,c.actions[T]=L}}return ht(V,G),ht(Q(V),G),Object.defineProperty(V,"$state",{get:()=>r.state.value[t],set:T=>{$(L=>{ht(L,T)})}}),r._p.forEach(T=>{ht(V,o.run(()=>T({store:V,app:r._a,pinia:r,options:c})))}),E&&i&&n.hydrate&&n.hydrate(V.$state,E),l=!0,u=!0,V}function Od(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(c,a){const l=_f();return c=c||(l?xe(Nc,null):null),c&&Zr(c),c=kc,c._s.has(r)||(i?Dc(r,e,s,c):Pd(r,s,c)),c._s.get(r)}return o.$id=r,o}var ko={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mc=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},kd=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],a=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},xc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,a=s+2<t.length,l=a?t[s+2]:0,u=i>>2,d=(i&3)<<4|c>>4;let p=(c&15)<<2|l>>6,m=l&63;a||(m=64,o||(p=64)),r.push(n[u],n[d],n[p],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Mc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):kd(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||l==null||d==null)throw new Nd;const p=i<<2|c>>4;if(r.push(p),l!==64){const m=c<<4&240|l>>2;if(r.push(m),d!==64){const E=l<<6&192|d;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Nd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ld=function(t){const e=Mc(t);return xc.encodeByteArray(e,!0)},Or=function(t){return Ld(t).replace(/\./g,"")},Uc=function(t){try{return xc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Md=()=>Dd().__FIREBASE_DEFAULTS__,xd=()=>{if(typeof process>"u"||typeof ko>"u")return;const t=ko.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Ud=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Uc(t[1]);return e&&JSON.parse(e)},es=()=>{try{return Md()||xd()||Ud()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Fc=t=>{var e,n;return(n=(e=es())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},H_=t=>{const e=Fc(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Bc=()=>{var t;return(t=es())===null||t===void 0?void 0:t.config},$c=t=>{var e;return(e=es())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Or(JSON.stringify(n)),Or(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Bd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(be())}function $d(){var t;const e=(t=es())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Hd(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Vd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function jd(){const t=be();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function j_(){return!$d()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Wd(){try{return typeof indexedDB=="object"}catch{return!1}}function Kd(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zd="FirebaseError";class kt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=zd,Object.setPrototypeOf(this,kt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Gn.prototype.create)}}class Gn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?qd(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new kt(s,c,r)}}function qd(t,e){return t.replace(Gd,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Gd=/\{\$([^}]+)}/g;function Jd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function kr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(No(i)&&No(o)){if(!kr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function No(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function In(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Sn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Yd(t,e){const n=new Xd(t,e);return n.subscribe.bind(n)}class Xd{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Qd(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=_s),s.error===void 0&&(s.error=_s),s.complete===void 0&&(s.complete=_s);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Qd(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function _s(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(t){return t&&t._delegate?t._delegate:t}class hn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ut="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Fd;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(th(e))try{this.getOrInitializeService({instanceIdentifier:Ut})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Ut){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ut){return this.instances.has(e)}getOptions(e=Ut){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:eh(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ut){return this.component?this.component.multipleInstances?e:Ut:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function eh(t){return t===Ut?void 0:t}function th(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Zd(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(oe||(oe={}));const rh={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},sh=oe.INFO,ih={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},oh=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=ih[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Hc{constructor(e){this.name=e,this._logLevel=sh,this._logHandler=oh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?rh[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}const ah=(t,e)=>e.some(n=>t instanceof n);let Lo,Do;function ch(){return Lo||(Lo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function lh(){return Do||(Do=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Vc=new WeakMap,js=new WeakMap,jc=new WeakMap,vs=new WeakMap,Ti=new WeakMap;function uh(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Tt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Vc.set(n,t)}).catch(()=>{}),Ti.set(e,t),e}function fh(t){if(js.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});js.set(t,e)}let Ws={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return js.get(t);if(e==="objectStoreNames")return t.objectStoreNames||jc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Tt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function dh(t){Ws=t(Ws)}function hh(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ys(this),e,...n);return jc.set(r,e.sort?e.sort():[e]),Tt(r)}:lh().includes(t)?function(...e){return t.apply(ys(this),e),Tt(Vc.get(this))}:function(...e){return Tt(t.apply(ys(this),e))}}function ph(t){return typeof t=="function"?hh(t):(t instanceof IDBTransaction&&fh(t),ah(t,ch())?new Proxy(t,Ws):t)}function Tt(t){if(t instanceof IDBRequest)return uh(t);if(vs.has(t))return vs.get(t);const e=ph(t);return e!==t&&(vs.set(t,e),Ti.set(e,t)),e}const ys=t=>Ti.get(t);function gh(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=Tt(o);return r&&o.addEventListener("upgradeneeded",a=>{r(Tt(o.result),a.oldVersion,a.newVersion,Tt(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),c.then(a=>{i&&a.addEventListener("close",()=>i()),s&&a.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),c}const mh=["get","getKey","getAll","getAllKeys","count"],_h=["put","add","delete","clear"],bs=new Map;function Mo(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(bs.get(e))return bs.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=_h.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||mh.includes(n)))return;const i=async function(o,...c){const a=this.transaction(o,s?"readwrite":"readonly");let l=a.store;return r&&(l=l.index(c.shift())),(await Promise.all([l[n](...c),s&&a.done]))[0]};return bs.set(e,i),i}dh(t=>({...t,get:(e,n,r)=>Mo(e,n)||t.get(e,n,r),has:(e,n)=>!!Mo(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(yh(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function yh(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ks="@firebase/app",xo="0.10.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zt=new Hc("@firebase/app"),bh="@firebase/app-compat",Eh="@firebase/analytics-compat",wh="@firebase/analytics",Ih="@firebase/app-check-compat",Sh="@firebase/app-check",Th="@firebase/auth",Ch="@firebase/auth-compat",Rh="@firebase/database",Ah="@firebase/database-compat",Ph="@firebase/functions",Oh="@firebase/functions-compat",kh="@firebase/installations",Nh="@firebase/installations-compat",Lh="@firebase/messaging",Dh="@firebase/messaging-compat",Mh="@firebase/performance",xh="@firebase/performance-compat",Uh="@firebase/remote-config",Fh="@firebase/remote-config-compat",Bh="@firebase/storage",$h="@firebase/storage-compat",Hh="@firebase/firestore",Vh="@firebase/firestore-compat",jh="firebase",Wh="10.11.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zs="[DEFAULT]",Kh={[Ks]:"fire-core",[bh]:"fire-core-compat",[wh]:"fire-analytics",[Eh]:"fire-analytics-compat",[Sh]:"fire-app-check",[Ih]:"fire-app-check-compat",[Th]:"fire-auth",[Ch]:"fire-auth-compat",[Rh]:"fire-rtdb",[Ah]:"fire-rtdb-compat",[Ph]:"fire-fn",[Oh]:"fire-fn-compat",[kh]:"fire-iid",[Nh]:"fire-iid-compat",[Lh]:"fire-fcm",[Dh]:"fire-fcm-compat",[Mh]:"fire-perf",[xh]:"fire-perf-compat",[Uh]:"fire-rc",[Fh]:"fire-rc-compat",[Bh]:"fire-gcs",[$h]:"fire-gcs-compat",[Hh]:"fire-fst",[Vh]:"fire-fst-compat","fire-js":"fire-js",[jh]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nr=new Map,zh=new Map,qs=new Map;function Uo(t,e){try{t.container.addComponent(e)}catch(n){zt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function $n(t){const e=t.name;if(qs.has(e))return zt.debug(`There were multiple attempts to register component ${e}.`),!1;qs.set(e,t);for(const n of Nr.values())Uo(n,t);for(const n of zh.values())Uo(n,t);return!0}function Wc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ke(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ct=new Gn("app","Firebase",qh);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new hn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ct.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yn=Wh;function Kc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:zs,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Ct.create("bad-app-name",{appName:String(s)});if(n||(n=Bc()),!n)throw Ct.create("no-options");const i=Nr.get(s);if(i){if(kr(n,i.options)&&kr(r,i.config))return i;throw Ct.create("duplicate-app",{appName:s})}const o=new nh(s);for(const a of qs.values())o.addComponent(a);const c=new Gh(n,r,o);return Nr.set(s,c),c}function Jh(t=zs){const e=Nr.get(t);if(!e&&t===zs&&Bc())return Kc();if(!e)throw Ct.create("no-app",{appName:t});return e}function ln(t,e,n){var r;let s=(r=Kh[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),zt.warn(c.join(" "));return}$n(new hn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yh="firebase-heartbeat-database",Xh=1,Hn="firebase-heartbeat-store";let Es=null;function zc(){return Es||(Es=gh(Yh,Xh,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Hn)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ct.create("idb-open",{originalErrorMessage:t.message})})),Es}async function Qh(t){try{const n=(await zc()).transaction(Hn),r=await n.objectStore(Hn).get(qc(t));return await n.done,r}catch(e){if(e instanceof kt)zt.warn(e.message);else{const n=Ct.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});zt.warn(n.message)}}}async function Fo(t,e){try{const r=(await zc()).transaction(Hn,"readwrite");await r.objectStore(Hn).put(e,qc(t)),await r.done}catch(n){if(n instanceof kt)zt.warn(n.message);else{const r=Ct.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});zt.warn(r.message)}}}function qc(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zh=1024,ep=30*24*60*60*1e3;class tp{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new rp(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Bo();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=ep}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Bo(),{heartbeatsToSend:r,unsentEntries:s}=np(this._heartbeatsCache.heartbeats),i=Or(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Bo(){return new Date().toISOString().substring(0,10)}function np(t,e=Zh){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),$o(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),$o(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class rp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Wd()?Kd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Qh(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Fo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Fo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function $o(t){return Or(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sp(t){$n(new hn("platform-logger",e=>new vh(e),"PRIVATE")),$n(new hn("heartbeat",e=>new tp(e),"PRIVATE")),ln(Ks,xo,t),ln(Ks,xo,"esm2017"),ln("fire-js","")}sp("");var ip="firebase",op="10.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ln(ip,op,"app");/*!
  * vue-router v4.3.2
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const tn=typeof document<"u";function ap(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const re=Object.assign;function ws(t,e){const n={};for(const r in e){const s=e[r];n[r]=Ue(s)?s.map(t):t(s)}return n}const kn=()=>{},Ue=Array.isArray,Gc=/#/g,cp=/&/g,lp=/\//g,up=/=/g,fp=/\?/g,Jc=/\+/g,dp=/%5B/g,hp=/%5D/g,Yc=/%5E/g,pp=/%60/g,Xc=/%7B/g,gp=/%7C/g,Qc=/%7D/g,mp=/%20/g;function Ci(t){return encodeURI(""+t).replace(gp,"|").replace(dp,"[").replace(hp,"]")}function _p(t){return Ci(t).replace(Xc,"{").replace(Qc,"}").replace(Yc,"^")}function Gs(t){return Ci(t).replace(Jc,"%2B").replace(mp,"+").replace(Gc,"%23").replace(cp,"%26").replace(pp,"`").replace(Xc,"{").replace(Qc,"}").replace(Yc,"^")}function vp(t){return Gs(t).replace(up,"%3D")}function yp(t){return Ci(t).replace(Gc,"%23").replace(fp,"%3F")}function bp(t){return t==null?"":yp(t).replace(lp,"%2F")}function Vn(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Ep=/\/$/,wp=t=>t.replace(Ep,"");function Is(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let a=e.indexOf("?");return c<a&&c>=0&&(a=-1),a>-1&&(r=e.slice(0,a),i=e.slice(a+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=Cp(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Vn(o)}}function Ip(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Ho(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Sp(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&pn(e.matched[r],n.matched[s])&&Zc(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function pn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Zc(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Tp(t[n],e[n]))return!1;return!0}function Tp(t,e){return Ue(t)?Vo(t,e):Ue(e)?Vo(e,t):t===e}function Vo(t,e){return Ue(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Cp(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}var jn;(function(t){t.pop="pop",t.push="push"})(jn||(jn={}));var Nn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Nn||(Nn={}));function Rp(t){if(!t)if(tn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),wp(t)}const Ap=/^[^#]+#/;function Pp(t,e){return t.replace(Ap,"#")+e}function Op(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const ts=()=>({left:window.scrollX,top:window.scrollY});function kp(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Op(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function jo(t,e){return(history.state?history.state.position-e:-1)+t}const Js=new Map;function Np(t,e){Js.set(t,e)}function Lp(t){const e=Js.get(t);return Js.delete(t),e}let Dp=()=>location.protocol+"//"+location.host;function el(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,a=s.slice(c);return a[0]!=="/"&&(a="/"+a),Ho(a,"")}return Ho(n,t)+r+s}function Mp(t,e,n,r){let s=[],i=[],o=null;const c=({state:p})=>{const m=el(t,location),E=n.value,A=e.value;let $=0;if(p){if(n.value=m,e.value=p,o&&o===E){o=null;return}$=A?p.position-A.position:0}else r(m);s.forEach(P=>{P(n.value,E,{delta:$,type:jn.pop,direction:$?$>0?Nn.forward:Nn.back:Nn.unknown})})};function a(){o=n.value}function l(p){s.push(p);const m=()=>{const E=s.indexOf(p);E>-1&&s.splice(E,1)};return i.push(m),m}function u(){const{history:p}=window;p.state&&p.replaceState(re({},p.state,{scroll:ts()}),"")}function d(){for(const p of i)p();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:a,listen:l,destroy:d}}function Wo(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?ts():null}}function xp(t){const{history:e,location:n}=window,r={value:el(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(a,l,u){const d=t.indexOf("#"),p=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+a:Dp()+t+a;try{e[u?"replaceState":"pushState"](l,"",p),s.value=l}catch(m){console.error(m),n[u?"replace":"assign"](p)}}function o(a,l){const u=re({},e.state,Wo(s.value.back,a,s.value.forward,!0),l,{position:s.value.position});i(a,u,!0),r.value=a}function c(a,l){const u=re({},s.value,e.state,{forward:a,scroll:ts()});i(u.current,u,!0);const d=re({},Wo(r.value,a,null),{position:u.position+1},l);i(a,d,!1),r.value=a}return{location:r,state:s,push:c,replace:o}}function Up(t){t=Rp(t);const e=xp(t),n=Mp(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=re({location:"",base:t,go:r,createHref:Pp.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Fp(t){return typeof t=="string"||t&&typeof t=="object"}function tl(t){return typeof t=="string"||typeof t=="symbol"}const ft={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},nl=Symbol("");var Ko;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Ko||(Ko={}));function gn(t,e){return re(new Error,{type:t,[nl]:!0},e)}function Xe(t,e){return t instanceof Error&&nl in t&&(e==null||!!(t.type&e))}const zo="[^/]+?",Bp={sensitive:!1,strict:!1,start:!0,end:!0},$p=/[.+*?^${}()[\]/\\]/g;function Hp(t,e){const n=re({},Bp,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let d=0;d<l.length;d++){const p=l[d];let m=40+(n.sensitive?.25:0);if(p.type===0)d||(s+="/"),s+=p.value.replace($p,"\\$&"),m+=40;else if(p.type===1){const{value:E,repeatable:A,optional:$,regexp:P}=p;i.push({name:E,repeatable:A,optional:$});const N=P||zo;if(N!==zo){m+=10;try{new RegExp(`(${N})`)}catch(W){throw new Error(`Invalid custom RegExp for param "${E}" (${N}): `+W.message)}}let U=A?`((?:${N})(?:/(?:${N}))*)`:`(${N})`;d||(U=$&&l.length<2?`(?:/${U})`:"/"+U),$&&(U+="?"),s+=U,m+=20,$&&(m+=-8),A&&(m+=-20),N===".*"&&(m+=-50)}u.push(m)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(l){const u=l.match(o),d={};if(!u)return null;for(let p=1;p<u.length;p++){const m=u[p]||"",E=i[p-1];d[E.name]=m&&E.repeatable?m.split("/"):m}return d}function a(l){let u="",d=!1;for(const p of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const m of p)if(m.type===0)u+=m.value;else if(m.type===1){const{value:E,repeatable:A,optional:$}=m,P=E in l?l[E]:"";if(Ue(P)&&!A)throw new Error(`Provided param "${E}" is an array but it is not repeatable (* or + modifiers)`);const N=Ue(P)?P.join("/"):P;if(!N)if($)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${E}"`);u+=N}}return u||"/"}return{re:o,score:r,keys:i,parse:c,stringify:a}}function Vp(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function jp(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Vp(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(qo(r))return 1;if(qo(s))return-1}return s.length-r.length}function qo(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Wp={type:0,value:""},Kp=/[a-zA-Z0-9_]/;function zp(t){if(!t)return[[]];if(t==="/")return[[Wp]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${l}": ${m}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,a,l="",u="";function d(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(a==="*"||a==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):e("Invalid state to consume buffer"),l="")}function p(){l+=a}for(;c<t.length;){if(a=t[c++],a==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:a==="/"?(l&&d(),o()):a===":"?(d(),n=1):p();break;case 4:p(),n=r;break;case 1:a==="("?n=2:Kp.test(a)?p():(d(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--);break;case 2:a===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:d(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),d(),o(),s}function qp(t,e,n){const r=Hp(zp(t.path),n),s=re(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Gp(t,e){const n=[],r=new Map;e=Yo({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,d,p){const m=!p,E=Jp(u);E.aliasOf=p&&p.record;const A=Yo(e,u),$=[E];if("alias"in u){const U=typeof u.alias=="string"?[u.alias]:u.alias;for(const W of U)$.push(re({},E,{components:p?p.record.components:E.components,path:W,aliasOf:p?p.record:E}))}let P,N;for(const U of $){const{path:W}=U;if(d&&W[0]!=="/"){const V=d.record.path,M=V[V.length-1]==="/"?"":"/";U.path=d.record.path+(W&&M+W)}if(P=qp(U,d,A),p?p.alias.push(P):(N=N||P,N!==P&&N.alias.push(P),m&&u.name&&!Jo(P)&&o(u.name)),E.children){const V=E.children;for(let M=0;M<V.length;M++)i(V[M],P,p&&p.children[M])}p=p||P,(P.record.components&&Object.keys(P.record.components).length||P.record.name||P.record.redirect)&&a(P)}return N?()=>{o(N)}:kn}function o(u){if(tl(u)){const d=r.get(u);d&&(r.delete(u),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(u);d>-1&&(n.splice(d,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function c(){return n}function a(u){let d=0;for(;d<n.length&&jp(u,n[d])>=0&&(u.record.path!==n[d].record.path||!rl(u,n[d]));)d++;n.splice(d,0,u),u.record.name&&!Jo(u)&&r.set(u.record.name,u)}function l(u,d){let p,m={},E,A;if("name"in u&&u.name){if(p=r.get(u.name),!p)throw gn(1,{location:u});A=p.record.name,m=re(Go(d.params,p.keys.filter(N=>!N.optional).concat(p.parent?p.parent.keys.filter(N=>N.optional):[]).map(N=>N.name)),u.params&&Go(u.params,p.keys.map(N=>N.name))),E=p.stringify(m)}else if(u.path!=null)E=u.path,p=n.find(N=>N.re.test(E)),p&&(m=p.parse(E),A=p.record.name);else{if(p=d.name?r.get(d.name):n.find(N=>N.re.test(d.path)),!p)throw gn(1,{location:u,currentLocation:d});A=p.record.name,m=re({},d.params,u.params),E=p.stringify(m)}const $=[];let P=p;for(;P;)$.unshift(P.record),P=P.parent;return{name:A,path:E,params:m,matched:$,meta:Xp($)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:c,getRecordMatcher:s}}function Go(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Jp(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Yp(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Yp(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Jo(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Xp(t){return t.reduce((e,n)=>re(e,n.meta),{})}function Yo(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function rl(t,e){return e.children.some(n=>n===t||rl(t,n))}function Qp(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Jc," "),o=i.indexOf("="),c=Vn(o<0?i:i.slice(0,o)),a=o<0?null:Vn(i.slice(o+1));if(c in e){let l=e[c];Ue(l)||(l=e[c]=[l]),l.push(a)}else e[c]=a}return e}function Xo(t){let e="";for(let n in t){const r=t[n];if(n=vp(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ue(r)?r.map(i=>i&&Gs(i)):[r&&Gs(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Zp(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Ue(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const eg=Symbol(""),Qo=Symbol(""),ns=Symbol(""),sl=Symbol(""),Ys=Symbol("");function En(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function vt(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,a)=>{const l=p=>{p===!1?a(gn(4,{from:n,to:e})):p instanceof Error?a(p):Fp(p)?a(gn(2,{from:e,to:p})):(o&&r.enterCallbacks[s]===o&&typeof p=="function"&&o.push(p),c())},u=i(()=>t.call(r&&r.instances[s],e,n,l));let d=Promise.resolve(u);t.length<3&&(d=d.then(l)),d.catch(p=>a(p))})}function Ss(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let a=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(tg(a)){const u=(a.__vccOpts||a)[e];u&&i.push(vt(u,n,r,o,c,s))}else{let l=a();i.push(()=>l.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${c}" at "${o.path}"`));const d=ap(u)?u.default:u;o.components[c]=d;const m=(d.__vccOpts||d)[e];return m&&vt(m,n,r,o,c,s)()}))}}return i}function tg(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Zo(t){const e=xe(ns),n=xe(sl),r=Oe(()=>{const a=Kt(t.to);return e.resolve(a)}),s=Oe(()=>{const{matched:a}=r.value,{length:l}=a,u=a[l-1],d=n.matched;if(!u||!d.length)return-1;const p=d.findIndex(pn.bind(null,u));if(p>-1)return p;const m=ea(a[l-2]);return l>1&&ea(u)===m&&d[d.length-1].path!==m?d.findIndex(pn.bind(null,a[l-2])):p}),i=Oe(()=>s.value>-1&&ig(n.params,r.value.params)),o=Oe(()=>s.value>-1&&s.value===n.matched.length-1&&Zc(n.params,r.value.params));function c(a={}){return sg(a)?e[Kt(t.replace)?"replace":"push"](Kt(t.to)).catch(kn):Promise.resolve()}return{route:r,href:Oe(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}const ng=oc({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Zo,setup(t,{slots:e}){const n=zn(Zo(t)),{options:r}=xe(ns),s=Oe(()=>({[ta(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[ta(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Si("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),rg=ng;function sg(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function ig(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Ue(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function ea(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const ta=(t,e,n)=>t??e??n,og=oc({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=xe(Ys),s=Oe(()=>t.route||r.value),i=xe(Qo,0),o=Oe(()=>{let l=Kt(i);const{matched:u}=s.value;let d;for(;(d=u[l])&&!d.components;)l++;return l}),c=Oe(()=>s.value.matched[o.value]);gr(Qo,Oe(()=>o.value+1)),gr(eg,c),gr(Ys,s);const a=gi();return Cn(()=>[a.value,c.value,t.name],([l,u,d],[p,m,E])=>{u&&(u.instances[d]=l,m&&m!==u&&l&&l===p&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),l&&u&&(!m||!pn(u,m)||!p)&&(u.enterCallbacks[d]||[]).forEach(A=>A(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,d=c.value,p=d&&d.components[u];if(!p)return na(n.default,{Component:p,route:l});const m=d.props[u],E=m?m===!0?l.params:typeof m=="function"?m(l):m:null,$=Si(p,re({},E,e,{onVnodeUnmounted:P=>{P.component.isUnmounted&&(d.instances[u]=null)},ref:a}));return na(n.default,{Component:$,route:l})||$}}});function na(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const il=og;function ag(t){const e=Gp(t.routes,t),n=t.parseQuery||Qp,r=t.stringifyQuery||Xo,s=t.history,i=En(),o=En(),c=En(),a=Su(ft);let l=ft;tn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ws.bind(null,v=>""+v),d=ws.bind(null,bp),p=ws.bind(null,Vn);function m(v,O){let C,x;return tl(v)?(C=e.getRecordMatcher(v),x=O):x=v,e.addRoute(x,C)}function E(v){const O=e.getRecordMatcher(v);O&&e.removeRoute(O)}function A(){return e.getRoutes().map(v=>v.record)}function $(v){return!!e.getRecordMatcher(v)}function P(v,O){if(O=re({},O||a.value),typeof v=="string"){const h=Is(n,v,O.path),g=e.resolve({path:h.path},O),y=s.createHref(h.fullPath);return re(h,g,{params:p(g.params),hash:Vn(h.hash),redirectedFrom:void 0,href:y})}let C;if(v.path!=null)C=re({},v,{path:Is(n,v.path,O.path).path});else{const h=re({},v.params);for(const g in h)h[g]==null&&delete h[g];C=re({},v,{params:d(h)}),O.params=d(O.params)}const x=e.resolve(C,O),ne=v.hash||"";x.params=u(p(x.params));const ue=Ip(r,re({},v,{hash:_p(ne),path:x.path})),f=s.createHref(ue);return re({fullPath:ue,hash:ne,query:r===Xo?Zp(v.query):v.query||{}},x,{redirectedFrom:void 0,href:f})}function N(v){return typeof v=="string"?Is(n,v,a.value.path):re({},v)}function U(v,O){if(l!==v)return gn(8,{from:O,to:v})}function W(v){return G(v)}function V(v){return W(re(N(v),{replace:!0}))}function M(v){const O=v.matched[v.matched.length-1];if(O&&O.redirect){const{redirect:C}=O;let x=typeof C=="function"?C(v):C;return typeof x=="string"&&(x=x.includes("?")||x.includes("#")?x=N(x):{path:x},x.params={}),re({query:v.query,hash:v.hash,params:x.path!=null?{}:v.params},x)}}function G(v,O){const C=l=P(v),x=a.value,ne=v.state,ue=v.force,f=v.replace===!0,h=M(C);if(h)return G(re(N(h),{state:typeof h=="object"?re({},ne,h.state):ne,force:ue,replace:f}),O||C);const g=C;g.redirectedFrom=O;let y;return!ue&&Sp(r,x,C)&&(y=gn(16,{to:g,from:x}),Be(x,x,!0,!1)),(y?Promise.resolve(y):K(g,x)).catch(_=>Xe(_)?Xe(_,2)?_:at(_):te(_,g,x)).then(_=>{if(_){if(Xe(_,2))return G(re({replace:f},N(_.to),{state:typeof _.to=="object"?re({},ne,_.to.state):ne,force:ue}),O||g)}else _=D(g,x,!0,f,ne);return Z(g,x,_),_})}function T(v,O){const C=U(v,O);return C?Promise.reject(C):Promise.resolve()}function L(v){const O=Xt.values().next().value;return O&&typeof O.runWithContext=="function"?O.runWithContext(v):v()}function K(v,O){let C;const[x,ne,ue]=cg(v,O);C=Ss(x.reverse(),"beforeRouteLeave",v,O);for(const h of x)h.leaveGuards.forEach(g=>{C.push(vt(g,v,O))});const f=T.bind(null,v,O);return C.push(f),_e(C).then(()=>{C=[];for(const h of i.list())C.push(vt(h,v,O));return C.push(f),_e(C)}).then(()=>{C=Ss(ne,"beforeRouteUpdate",v,O);for(const h of ne)h.updateGuards.forEach(g=>{C.push(vt(g,v,O))});return C.push(f),_e(C)}).then(()=>{C=[];for(const h of ue)if(h.beforeEnter)if(Ue(h.beforeEnter))for(const g of h.beforeEnter)C.push(vt(g,v,O));else C.push(vt(h.beforeEnter,v,O));return C.push(f),_e(C)}).then(()=>(v.matched.forEach(h=>h.enterCallbacks={}),C=Ss(ue,"beforeRouteEnter",v,O,L),C.push(f),_e(C))).then(()=>{C=[];for(const h of o.list())C.push(vt(h,v,O));return C.push(f),_e(C)}).catch(h=>Xe(h,8)?h:Promise.reject(h))}function Z(v,O,C){c.list().forEach(x=>L(()=>x(v,O,C)))}function D(v,O,C,x,ne){const ue=U(v,O);if(ue)return ue;const f=O===ft,h=tn?history.state:{};C&&(x||f?s.replace(v.fullPath,re({scroll:f&&h&&h.scroll},ne)):s.push(v.fullPath,ne)),a.value=v,Be(v,O,C,f),at()}let ee;function me(){ee||(ee=s.listen((v,O,C)=>{if(!tr.listening)return;const x=P(v),ne=M(x);if(ne){G(re(ne,{replace:!0}),x).catch(kn);return}l=x;const ue=a.value;tn&&Np(jo(ue.fullPath,C.delta),ts()),K(x,ue).catch(f=>Xe(f,12)?f:Xe(f,2)?(G(f.to,x).then(h=>{Xe(h,20)&&!C.delta&&C.type===jn.pop&&s.go(-1,!1)}).catch(kn),Promise.reject()):(C.delta&&s.go(-C.delta,!1),te(f,x,ue))).then(f=>{f=f||D(x,ue,!1),f&&(C.delta&&!Xe(f,8)?s.go(-C.delta,!1):C.type===jn.pop&&Xe(f,20)&&s.go(-1,!1)),Z(x,ue,f)}).catch(kn)}))}let Ee=En(),Y=En(),se;function te(v,O,C){at(v);const x=Y.list();return x.length?x.forEach(ne=>ne(v,O,C)):console.error(v),Promise.reject(v)}function Ye(){return se&&a.value!==ft?Promise.resolve():new Promise((v,O)=>{Ee.add([v,O])})}function at(v){return se||(se=!v,me(),Ee.list().forEach(([O,C])=>v?C(v):O()),Ee.reset()),v}function Be(v,O,C,x){const{scrollBehavior:ne}=t;if(!tn||!ne)return Promise.resolve();const ue=!C&&Lp(jo(v.fullPath,0))||(x||!C)&&history.state&&history.state.scroll||null;return Kr().then(()=>ne(v,O,ue)).then(f=>f&&kp(f)).catch(f=>te(f,v,O))}const Ie=v=>s.go(v);let Yt;const Xt=new Set,tr={currentRoute:a,listening:!0,addRoute:m,removeRoute:E,hasRoute:$,getRoutes:A,resolve:P,options:t,push:W,replace:V,go:Ie,back:()=>Ie(-1),forward:()=>Ie(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:Y.add,isReady:Ye,install(v){const O=this;v.component("RouterLink",rg),v.component("RouterView",il),v.config.globalProperties.$router=O,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>Kt(a)}),tn&&!Yt&&a.value===ft&&(Yt=!0,W(s.location).catch(ne=>{}));const C={};for(const ne in ft)Object.defineProperty(C,ne,{get:()=>a.value[ne],enumerable:!0});v.provide(ns,O),v.provide(sl,Wa(C)),v.provide(Ys,a);const x=v.unmount;Xt.add(v),v.unmount=function(){Xt.delete(v),Xt.size<1&&(l=ft,ee&&ee(),ee=null,a.value=ft,Yt=!1,se=!1),x()}}};function _e(v){return v.reduce((O,C)=>O.then(()=>L(C)),Promise.resolve())}return tr}function cg(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(l=>pn(l,c))?r.push(c):n.push(c));const a=t.matched[o];a&&(e.matched.find(l=>pn(l,a))||s.push(a))}return[n,r,s]}function W_(){return xe(ns)}const lg=Od("user",()=>({userId:"",userName:""}));function Ri(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function ol(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ug=ol,al=new Gn("auth","Firebase",ol());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lr=new Hc("@firebase/auth");function fg(t,...e){Lr.logLevel<=oe.WARN&&Lr.warn(`Auth (${Yn}): ${t}`,...e)}function vr(t,...e){Lr.logLevel<=oe.ERROR&&Lr.error(`Auth (${Yn}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(t,...e){throw Ai(t,...e)}function ze(t,...e){return Ai(t,...e)}function cl(t,e,n){const r=Object.assign(Object.assign({},ug()),{[e]:n});return new Gn("auth","Firebase",r).create(e,{appName:t.name})}function nt(t){return cl(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ai(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return al.create(t,...e)}function j(t,e,...n){if(!t)throw Ai(e,...n)}function Qe(t){const e="INTERNAL ASSERTION FAILED: "+t;throw vr(e),new Error(e)}function st(t,e){t||Qe(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xs(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function dg(){return ra()==="http:"||ra()==="https:"}function ra(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hg(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(dg()||Hd()||"connection"in navigator)?navigator.onLine:!0}function pg(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e,n){this.shortDelay=e,this.longDelay=n,st(n>e,"Short delay should be less than long delay!"),this.isMobile=Bd()||Vd()}get(){return hg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pi(t,e){st(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Qe("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Qe("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Qe("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mg=new Xn(3e4,6e4);function Nt(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ot(t,e,n,r,s={}){return ul(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=Jn(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),ll.fetch()(fl(t,t.config.apiHost,n,c),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},i))})}async function ul(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},gg),e);try{const s=new vg(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ur(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[a,l]=c.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw ur(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw ur(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw ur(t,"user-disabled",o);const u=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw cl(t,u,l);Fe(t,u)}}catch(s){if(s instanceof kt)throw s;Fe(t,"network-request-failed",{message:String(s)})}}async function Qn(t,e,n,r,s={}){const i=await ot(t,e,n,r,s);return"mfaPendingCredential"in i&&Fe(t,"multi-factor-auth-required",{_serverResponse:i}),i}function fl(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Pi(t.config,s):`${t.config.apiScheme}://${s}`}function _g(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class vg{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ze(this.auth,"network-request-failed")),mg.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ur(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=ze(t,e,r);return s.customData._tokenResponse=n,s}function sa(t){return t!==void 0&&t.enterprise!==void 0}class yg{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return _g(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function bg(t,e){return ot(t,"GET","/v2/recaptchaConfig",Nt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Eg(t,e){return ot(t,"POST","/v1/accounts:delete",e)}async function dl(t,e){return ot(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function wg(t,e=!1){const n=Je(t),r=await n.getIdToken(e),s=Oi(r);j(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ln(Ts(s.auth_time)),issuedAtTime:Ln(Ts(s.iat)),expirationTime:Ln(Ts(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ts(t){return Number(t)*1e3}function Oi(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return vr("JWT malformed, contained fewer than 3 sections"),null;try{const s=Uc(n);return s?JSON.parse(s):(vr("Failed to decode base64 JWT payload"),null)}catch(s){return vr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function ia(t){const e=Oi(t);return j(e,"internal-error"),j(typeof e.exp<"u","internal-error"),j(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof kt&&Ig(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Ig({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ln(this.lastLoginAt),this.creationTime=Ln(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dr(t){var e;const n=t.auth,r=await t.getIdToken(),s=await mn(t,dl(n,{idToken:r}));j(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?hl(i.providerUserInfo):[],c=Cg(t.providerData,o),a=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),u=a?l:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Qs(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function Tg(t){const e=Je(t);await Dr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Cg(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function hl(t){return t.map(e=>{var{providerId:n}=e,r=Ri(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rg(t,e){const n=await ul(t,{},async()=>{const r=Jn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=fl(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",ll.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Ag(t,e){return ot(t,"POST","/v2/accounts:revokeToken",Nt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){j(e.idToken,"internal-error"),j(typeof e.idToken<"u","internal-error"),j(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ia(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){j(e.length!==0,"internal-error");const n=ia(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(j(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Rg(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new un;return r&&(j(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(j(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(j(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new un,this.toJSON())}_performRefresh(){return Qe("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(t,e){j(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ze{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Ri(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Sg(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Qs(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await mn(this,this.stsTokenManager.getToken(this.auth,e));return j(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return wg(this,e)}reload(){return Tg(this)}_assign(e){this!==e&&(j(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ze(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){j(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Dr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ke(this.auth.app))return Promise.reject(nt(this.auth));const e=await this.getIdToken();return await mn(this,Eg(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,a,l,u;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,E=(o=n.photoURL)!==null&&o!==void 0?o:void 0,A=(c=n.tenantId)!==null&&c!==void 0?c:void 0,$=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,P=(l=n.createdAt)!==null&&l!==void 0?l:void 0,N=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:U,emailVerified:W,isAnonymous:V,providerData:M,stsTokenManager:G}=n;j(U&&G,e,"internal-error");const T=un.fromJSON(this.name,G);j(typeof U=="string",e,"internal-error"),dt(d,e.name),dt(p,e.name),j(typeof W=="boolean",e,"internal-error"),j(typeof V=="boolean",e,"internal-error"),dt(m,e.name),dt(E,e.name),dt(A,e.name),dt($,e.name),dt(P,e.name),dt(N,e.name);const L=new Ze({uid:U,auth:e,email:p,emailVerified:W,displayName:d,isAnonymous:V,photoURL:E,phoneNumber:m,tenantId:A,stsTokenManager:T,createdAt:P,lastLoginAt:N});return M&&Array.isArray(M)&&(L.providerData=M.map(K=>Object.assign({},K))),$&&(L._redirectEventId=$),L}static async _fromIdTokenResponse(e,n,r=!1){const s=new un;s.updateFromServerResponse(n);const i=new Ze({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Dr(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];j(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?hl(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new un;c.updateFromIdToken(r);const a=new Ze({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Qs(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(a,l),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oa=new Map;function et(t){st(t instanceof Function,"Expected a class definition");let e=oa.get(t);return e?(st(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,oa.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}pl.type="NONE";const aa=pl;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yr(t,e,n){return`firebase:${t}:${e}:${n}`}class fn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=yr(this.userKey,s.apiKey,i),this.fullPersistenceKey=yr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ze._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new fn(et(aa),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||et(aa);const o=yr(r,e.config.apiKey,e.name);let c=null;for(const l of n)try{const u=await l._get(o);if(u){const d=Ze._fromJSON(e,u);l!==i&&(c=d),i=l;break}}catch{}const a=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!a.length?new fn(i,e,r):(i=a[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new fn(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ca(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(_l(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(gl(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(yl(e))return"Blackberry";if(bl(e))return"Webos";if(ki(e))return"Safari";if((e.includes("chrome/")||ml(e))&&!e.includes("edge/"))return"Chrome";if(vl(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function gl(t=be()){return/firefox\//i.test(t)}function ki(t=be()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ml(t=be()){return/crios\//i.test(t)}function _l(t=be()){return/iemobile/i.test(t)}function vl(t=be()){return/android/i.test(t)}function yl(t=be()){return/blackberry/i.test(t)}function bl(t=be()){return/webos/i.test(t)}function rs(t=be()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Pg(t=be()){var e;return rs(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Og(){return jd()&&document.documentMode===10}function El(t=be()){return rs(t)||vl(t)||bl(t)||yl(t)||/windows phone/i.test(t)||_l(t)}function kg(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wl(t,e=[]){let n;switch(t){case"Browser":n=ca(be());break;case"Worker":n=`${ca(be())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Yn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const a=e(i);o(a)}catch(a){c(a)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lg(t,e={}){return ot(t,"GET","/v2/passwordPolicy",Nt(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dg=6;class Mg{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Dg,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,c;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(s=a.containsLowercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(i=a.containsUppercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(c=a.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),a}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new la(this),this.idTokenSubscription=new la(this),this.beforeStateQueue=new Ng(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=al,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=et(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await fn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await dl(this,{idToken:e}),r=await Ze._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Ke(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===c)&&(a!=null&&a.user)&&(s=a.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return j(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Dr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=pg()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ke(this.app))return Promise.reject(nt(this));const n=e?Je(e):null;return n&&j(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&j(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ke(this.app)?Promise.reject(nt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ke(this.app)?Promise.reject(nt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(et(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Lg(this),n=new Mg(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Gn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Ag(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&et(e)||this._popupRedirectResolver;j(n,this,"argument-error"),this.redirectPersistenceManager=await fn.create(this,[et(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(j(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,s);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return j(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=wl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&fg(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Jt(t){return Je(t)}class la{constructor(e){this.auth=e,this.observer=null,this.addObserver=Yd(n=>this.observer=n)}get next(){return j(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ss={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ug(t){ss=t}function Il(t){return ss.loadJS(t)}function Fg(){return ss.recaptchaEnterpriseScript}function Bg(){return ss.gapiScript}function $g(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Hg="recaptcha-enterprise",Vg="NO_RECAPTCHA";class jg{constructor(e){this.type=Hg,this.auth=Jt(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{bg(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const l=new yg(a);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(a=>{c(a)})})}function s(i,o,c){const a=window.grecaptcha;sa(a)?a.enterprise.ready(()=>{a.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(Vg)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&sa(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let a=Fg();a.length!==0&&(a+=c),Il(a).then(()=>{s(c,i,o)}).catch(l=>{o(l)})}}).catch(c=>{o(c)})})}}async function ua(t,e,n,r=!1){const s=new jg(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Zs(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await ua(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await ua(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wg(t,e){const n=Wc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(kr(i,e??{}))return s;Fe(s,"already-initialized")}return n.initialize({options:e})}function Kg(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(et);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function zg(t,e,n){const r=Jt(t);j(r._canInitEmulator,r,"emulator-config-failed"),j(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Sl(e),{host:o,port:c}=qg(e),a=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),Gg()}function Sl(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function qg(t){const e=Sl(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:fa(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:fa(o)}}}function fa(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Gg(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Qe("not implemented")}_getIdTokenResponse(e){return Qe("not implemented")}_linkToIdToken(e,n){return Qe("not implemented")}_getReauthenticationResolver(e){return Qe("not implemented")}}async function Jg(t,e){return ot(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yg(t,e){return Qn(t,"POST","/v1/accounts:signInWithPassword",Nt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xg(t,e){return Qn(t,"POST","/v1/accounts:signInWithEmailLink",Nt(t,e))}async function Qg(t,e){return Qn(t,"POST","/v1/accounts:signInWithEmailLink",Nt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn extends Ni{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Wn(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Wn(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zs(e,n,"signInWithPassword",Yg);case"emailLink":return Xg(e,{email:this._email,oobCode:this._password});default:Fe(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zs(e,r,"signUpPassword",Jg);case"emailLink":return Qg(e,{idToken:n,email:this._email,oobCode:this._password});default:Fe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dn(t,e){return Qn(t,"POST","/v1/accounts:signInWithIdp",Nt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zg="http://localhost";class qt extends Ni{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new qt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Fe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Ri(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new qt(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return dn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,dn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,dn(e,n)}buildRequest(){const e={requestUri:Zg,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Jn(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function em(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function tm(t){const e=In(Sn(t)).link,n=e?In(Sn(e)).deep_link_id:null,r=In(Sn(t)).deep_link_id;return(r?In(Sn(r)).link:null)||r||n||e||t}class Li{constructor(e){var n,r,s,i,o,c;const a=In(Sn(e)),l=(n=a.apiKey)!==null&&n!==void 0?n:null,u=(r=a.oobCode)!==null&&r!==void 0?r:null,d=em((s=a.mode)!==null&&s!==void 0?s:null);j(l&&u&&d,"argument-error"),this.apiKey=l,this.operation=d,this.code=u,this.continueUrl=(i=a.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=a.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=a.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=tm(e);try{return new Li(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(){this.providerId=vn.PROVIDER_ID}static credential(e,n){return Wn._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Li.parseLink(n);return j(r,"argument-error"),Wn._fromEmailAndCode(e,r.code,r.tenantId)}}vn.PROVIDER_ID="password";vn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";vn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn extends Tl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt extends Zn{constructor(){super("facebook.com")}static credential(e){return qt._fromParams({providerId:yt.PROVIDER_ID,signInMethod:yt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yt.credentialFromTaggedObject(e)}static credentialFromError(e){return yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yt.credential(e.oauthAccessToken)}catch{return null}}}yt.FACEBOOK_SIGN_IN_METHOD="facebook.com";yt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt extends Zn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return qt._fromParams({providerId:bt.PROVIDER_ID,signInMethod:bt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return bt.credentialFromTaggedObject(e)}static credentialFromError(e){return bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return bt.credential(n,r)}catch{return null}}}bt.GOOGLE_SIGN_IN_METHOD="google.com";bt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et extends Zn{constructor(){super("github.com")}static credential(e){return qt._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Et.credentialFromTaggedObject(e)}static credentialFromError(e){return Et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Et.credential(e.oauthAccessToken)}catch{return null}}}Et.GITHUB_SIGN_IN_METHOD="github.com";Et.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt extends Zn{constructor(){super("twitter.com")}static credential(e,n){return qt._fromParams({providerId:wt.PROVIDER_ID,signInMethod:wt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return wt.credentialFromTaggedObject(e)}static credentialFromError(e){return wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return wt.credential(n,r)}catch{return null}}}wt.TWITTER_SIGN_IN_METHOD="twitter.com";wt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nm(t,e){return Qn(t,"POST","/v1/accounts:signUp",Nt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Ze._fromIdTokenResponse(e,r,s),o=da(r);return new Gt({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=da(r);return new Gt({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function da(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr extends kt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Mr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Mr(e,n,r,s)}}function Cl(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Mr._fromErrorAndOperation(t,i,e,r):i})}async function rm(t,e,n=!1){const r=await mn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Gt._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sm(t,e,n=!1){const{auth:r}=t;if(Ke(r.app))return Promise.reject(nt(r));const s="reauthenticate";try{const i=await mn(t,Cl(r,s,e,t),n);j(i.idToken,r,"internal-error");const o=Oi(i.idToken);j(o,r,"internal-error");const{sub:c}=o;return j(t.uid===c,r,"user-mismatch"),Gt._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Fe(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rl(t,e,n=!1){if(Ke(t.app))return Promise.reject(nt(t));const r="signIn",s=await Cl(t,r,e),i=await Gt._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function im(t,e){return Rl(Jt(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Al(t){const e=Jt(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function K_(t,e,n){if(Ke(t.app))return Promise.reject(nt(t));const r=Jt(t),o=await Zs(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",nm).catch(a=>{throw a.code==="auth/password-does-not-meet-requirements"&&Al(t),a}),c=await Gt._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function z_(t,e,n){return Ke(t.app)?Promise.reject(nt(t)):im(Je(t),vn.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Al(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function om(t,e){return ot(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q_(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Je(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await mn(r,om(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const c=r.providerData.find(({providerId:a})=>a==="password");c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function am(t,e,n,r){return Je(t).onIdTokenChanged(e,n,r)}function cm(t,e,n){return Je(t).beforeAuthStateChanged(e,n)}function Pl(t,e,n,r){return Je(t).onAuthStateChanged(e,n,r)}function G_(t){return Je(t).signOut()}const xr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(xr,"1"),this.storage.removeItem(xr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lm(){const t=be();return ki(t)||rs(t)}const um=1e3,fm=10;class kl extends Ol{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=lm()&&kg(),this.fallbackToPolling=El(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,a)=>{this.notifyListeners(o,a)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Og()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,fm):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},um)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}kl.type="LOCAL";const dm=kl;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl extends Ol{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Nl.type="SESSION";const Ll=Nl;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hm(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new is(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async l=>l(n.origin,i)),a=await hm(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}is.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Di(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pm{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,a)=>{const l=Di("",20);s.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const p=d;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(p.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(){return window}function gm(t){qe().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dl(){return typeof qe().WorkerGlobalScope<"u"&&typeof qe().importScripts=="function"}async function mm(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function _m(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function vm(){return Dl()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ml="firebaseLocalStorageDb",ym=1,Ur="firebaseLocalStorage",xl="fbase_key";class er{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function os(t,e){return t.transaction([Ur],e?"readwrite":"readonly").objectStore(Ur)}function bm(){const t=indexedDB.deleteDatabase(Ml);return new er(t).toPromise()}function ei(){const t=indexedDB.open(Ml,ym);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ur,{keyPath:xl})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ur)?e(r):(r.close(),await bm(),e(await ei()))})})}async function ha(t,e,n){const r=os(t,!0).put({[xl]:e,value:n});return new er(r).toPromise()}async function Em(t,e){const n=os(t,!1).get(e),r=await new er(n).toPromise();return r===void 0?null:r.value}function pa(t,e){const n=os(t,!0).delete(e);return new er(n).toPromise()}const wm=800,Im=3;class Ul{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ei(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Im)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Dl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=is._getInstance(vm()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await mm(),!this.activeServiceWorker)return;this.sender=new pm(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||_m()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ei();return await ha(e,xr,"1"),await pa(e,xr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ha(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Em(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>pa(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=os(s,!1).getAll();return new er(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),wm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ul.type="LOCAL";const Sm=Ul;new Xn(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tm(t,e){return e?et(e):(j(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi extends Ni{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return dn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return dn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return dn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Cm(t){return Rl(t.auth,new Mi(t),t.bypassAuthState)}function Rm(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),sm(n,new Mi(t),t.bypassAuthState)}async function Am(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),rm(n,new Mi(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(a))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Cm;case"linkViaPopup":case"linkViaRedirect":return Am;case"reauthViaPopup":case"reauthViaRedirect":return Rm;default:Fe(this.auth,"internal-error")}}resolve(e){st(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){st(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pm=new Xn(2e3,1e4);class nn extends Fl{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,nn.currentPopupAction&&nn.currentPopupAction.cancel(),nn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return j(e,this.auth,"internal-error"),e}async onExecution(){st(this.filter.length===1,"Popup operations only handle one event");const e=Di();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ze(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ze(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,nn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ze(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Pm.get())};e()}}nn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Om="pendingRedirect",br=new Map;class km extends Fl{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=br.get(this.auth._key());if(!e){try{const r=await Nm(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}br.set(this.auth._key(),e)}return this.bypassAuthState||br.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Nm(t,e){const n=Mm(e),r=Dm(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Lm(t,e){br.set(t._key(),e)}function Dm(t){return et(t._redirectPersistence)}function Mm(t){return yr(Om,t.config.apiKey,t.name)}async function xm(t,e,n=!1){if(Ke(t.app))return Promise.reject(nt(t));const r=Jt(t),s=Tm(r,e),o=await new km(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Um=10*60*1e3;class Fm{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Bm(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Bl(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ze(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Um&&this.cachedEventUids.clear(),this.cachedEventUids.has(ga(e))}saveEventToCache(e){this.cachedEventUids.add(ga(e)),this.lastProcessedEventTime=Date.now()}}function ga(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Bl({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Bm(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Bl(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $m(t,e={}){return ot(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hm=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Vm=/^https?/;async function jm(t){if(t.config.emulator)return;const{authorizedDomains:e}=await $m(t);for(const n of e)try{if(Wm(n))return}catch{}Fe(t,"unauthorized-domain")}function Wm(t){const e=Xs(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Vm.test(n))return!1;if(Hm.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Km=new Xn(3e4,6e4);function ma(){const t=qe().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function zm(t){return new Promise((e,n)=>{var r,s,i;function o(){ma(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ma(),n(ze(t,"network-request-failed"))},timeout:Km.get()})}if(!((s=(r=qe().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=qe().gapi)===null||i===void 0)&&i.load)o();else{const c=$g("iframefcb");return qe()[c]=()=>{gapi.load?o():n(ze(t,"network-request-failed"))},Il(`${Bg()}?onload=${c}`).catch(a=>n(a))}}).catch(e=>{throw Er=null,e})}let Er=null;function qm(t){return Er=Er||zm(t),Er}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gm=new Xn(5e3,15e3),Jm="__/auth/iframe",Ym="emulator/auth/iframe",Xm={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Qm=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Zm(t){const e=t.config;j(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Pi(e,Ym):`https://${t.config.authDomain}/${Jm}`,r={apiKey:e.apiKey,appName:t.name,v:Yn},s=Qm.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Jn(r).slice(1)}`}async function e_(t){const e=await qm(t),n=qe().gapi;return j(n,t,"internal-error"),e.open({where:document.body,url:Zm(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Xm,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=ze(t,"network-request-failed"),c=qe().setTimeout(()=>{i(o)},Gm.get());function a(){qe().clearTimeout(c),s(r)}r.ping(a).then(a,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},n_=500,r_=600,s_="_blank",i_="http://localhost";class _a{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function o_(t,e,n,r=n_,s=r_){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const a=Object.assign(Object.assign({},t_),{width:r.toString(),height:s.toString(),top:i,left:o}),l=be().toLowerCase();n&&(c=ml(l)?s_:n),gl(l)&&(e=e||i_,a.scrollbars="yes");const u=Object.entries(a).reduce((p,[m,E])=>`${p}${m}=${E},`,"");if(Pg(l)&&c!=="_self")return a_(e||"",c),new _a(null);const d=window.open(e||"",c,u);j(d,t,"popup-blocked");try{d.focus()}catch{}return new _a(d)}function a_(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c_="__/auth/handler",l_="emulator/auth/handler",u_=encodeURIComponent("fac");async function va(t,e,n,r,s,i){j(t.config.authDomain,t,"auth-domain-config-required"),j(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Yn,eventId:s};if(e instanceof Tl){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Jd(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries({}))o[u]=d}if(e instanceof Zn){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const u of Object.keys(c))c[u]===void 0&&delete c[u];const a=await t._getAppCheckToken(),l=a?`#${u_}=${encodeURIComponent(a)}`:"";return`${f_(t)}?${Jn(c).slice(1)}${l}`}function f_({config:t}){return t.emulator?Pi(t,l_):`https://${t.authDomain}/${c_}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cs="webStorageSupport";class d_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ll,this._completeRedirectFn=xm,this._overrideRedirectResult=Lm}async _openPopup(e,n,r,s){var i;st((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await va(e,n,r,Xs(),s);return o_(e,o,Di())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await va(e,n,r,Xs(),s);return gm(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(st(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await e_(e),r=new Fm(e);return n.register("authEvent",s=>(j(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Cs,{type:Cs},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Cs];o!==void 0&&n(!!o),Fe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=jm(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return El()||ki()||rs()}}const h_=d_;var ya="@firebase/auth",ba="1.7.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){j(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g_(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function m_(t){$n(new hn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;j(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:wl(t)},l=new xg(r,s,i,a);return Kg(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),$n(new hn("auth-internal",e=>{const n=Jt(e.getProvider("auth").getImmediate());return(r=>new p_(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ln(ya,ba,g_(t)),ln(ya,ba,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const __=5*60,v_=$c("authIdTokenMaxAge")||__;let Ea=null;const y_=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>v_)return;const s=n==null?void 0:n.token;Ea!==s&&(Ea=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function $l(t=Jh()){const e=Wc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Wg(t,{popupRedirectResolver:h_,persistence:[Sm,dm,Ll]}),r=$c("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=y_(i.toString());cm(n,o,()=>o(n.currentUser)),am(n,c=>o(c))}}const s=Fc("auth");return s&&zg(n,`http://${s}`),n}function b_(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Ug({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=ze("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",b_().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});m_("Browser");const E_=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},w_={__name:"App",setup(t){const e=lg();return yi(()=>{Pl($l(),n=>{n?(e.userId=n.uid,e.userName=n.displayName):e.userId=""})}),(n,r)=>(wc(),Sc(Kt(il)))}},I_=E_(w_,[["__scopeId","data-v-d1a1ffbd"]]),S_="modulepreload",T_=function(t){return"/"+t},wa={},en=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),o=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));s=Promise.all(n.map(c=>{if(c=T_(c),c in wa)return;wa[c]=!0;const a=c.endsWith(".css"),l=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${l}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":S_,a||(u.as="script",u.crossOrigin=""),u.href=c,o&&u.setAttribute("nonce",o),document.head.appendChild(u),a)return new Promise((d,p)=>{u.addEventListener("load",d),u.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${c}`)))})}))}return s.then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})},fr=(t,e,n)=>{let r=!1;Pl($l(),s=>{s&&!r?(r=!0,n()):!s&&!r&&(r=!0,n("/auth"))})},C_=[{path:"/",name:"home",component:()=>en(()=>import("./AboutView-CpbMoS34.js"),__vite__mapDeps([0,1,2]))},{path:"/about",name:"about",component:()=>en(()=>import("./AboutView-CpbMoS34.js"),__vite__mapDeps([0,1,2])),beforeEnter:fr},{path:"/auth",name:"auth",component:()=>en(()=>import("./AuthView-DCBZcpL1.js"),__vite__mapDeps([3,1]))},{path:"/finance",name:"finance",component:()=>en(()=>import("./FinanceView-BefTihIb.js"),__vite__mapDeps([4,5,2,6,1,7])),beforeEnter:fr},{path:"/invests",name:"invests",component:()=>en(()=>import("./InvestView-BaSv8NUC.js"),__vite__mapDeps([8,5,6,1,2])),beforeEnter:fr},{path:"/advice",name:"advice",component:()=>en(()=>import("./AdviceView-9QixTQEI.js"),__vite__mapDeps([9,6,1,2])),beforeEnter:fr}],R_=ag({history:Up("/"),routes:C_}),A_={apiKey:"AIzaSyDO75mcqK9aqLkx2ZZorcTPeVnixp1MRPk",authDomain:"expensestat.firebaseapp.com",projectId:"expensestat",storageBucket:"expensestat.appspot.com",messagingSenderId:"851123002621",appId:"1:851123002621:web:a8ec1476ce18b8b4983294"};Kc(A_);const xi=bd(I_);xi.use(Sd());xi.use(R_);xi.mount("#app");export{oe as $,F_ as A,K_ as B,$l as C,q_ as D,z_ as E,Ve as F,Kf as G,Q as H,za as I,N_ as J,O_ as K,k_ as L,Sc as M,lg as N,$_ as O,Od as P,oi as Q,Hc as R,$n as S,x_ as T,hn as U,ln as V,kt as W,Jh as X,Wc as Y,H_ as Z,E_ as _,lc as a,V_ as a0,Yn as a1,Je as a2,j_ as a3,be as a4,Pc as a5,G_ as a6,At as a7,Cn as b,Oe as c,oc as d,zn as e,U_ as f,Ff as g,Si as h,xe as i,Cc as j,Ae as k,Lf as l,xu as m,Kr as n,yi as o,gr as p,wc as q,gi as r,Su as s,M_ as t,Kt as u,W_ as v,L_ as w,P_ as x,D_ as y,B_ as z};
