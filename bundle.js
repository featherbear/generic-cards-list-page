var app=function(){"use strict";function t(){}const e=t=>t;function n(t,e){for(const n in e)t[n]=e[n];return t}function r(t){return t()}function o(){return Object.create(null)}function l(t){t.forEach(r)}function i(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,e,r){return t[1]?n({},n(e.$$scope.ctx,t[1](r?r(e):{}))):e.$$scope.ctx}function s(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}const u="undefined"!=typeof window;let f=u?()=>window.performance.now():()=>Date.now(),d=u?t=>requestAnimationFrame(t):t;const m=new Set;let p,$=!1;function h(){m.forEach(t=>{t[0](f())||(m.delete(t),t[1]())}),($=m.size>0)&&d(h)}function g(t,e){t.appendChild(e)}function v(t,e,n){t.insertBefore(e,n||null)}function w(t){t.parentNode.removeChild(t)}function b(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function x(t){return document.createElement(t)}function y(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function k(t){return document.createTextNode(t)}function _(){return k(" ")}function E(){return k("")}function R(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function C(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function N(t,e){for(const n in e)C(t,n,e[n])}function V(t){return Array.from(t.childNodes)}function L(t,e,n,r){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===e){for(let t=0;t<o.attributes.length;t+=1){const e=o.attributes[t];n[e.name]||o.removeAttribute(e.name)}return t.splice(r,1)[0]}}return r?y(e):x(e)}function H(t,e){e=""+e,t.data!==e&&(t.data=e)}function T(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}let B,M=0,D={};function I(t,e,n,r,o,l,i,a=0){const c=16.666/r;let s="{\n";for(let t=0;t<=1;t+=c){const r=e+(n-e)*l(t);s+=100*t+`%{${i(r,1-r)}}\n`}const u=s+`100% {${i(n,1-n)}}\n}`,f=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${a}`;if(!D[f]){if(!p){const t=x("style");document.head.appendChild(t),p=t.sheet}D[f]=!0,p.insertRule(`@keyframes ${f} ${u}`,p.cssRules.length)}const d=t.style.animation||"";return t.style.animation=`${d?`${d}, `:""}${f} ${r}ms linear ${o}ms 1 both`,M+=1,f}function j(t,e){t.style.animation=(t.style.animation||"").split(", ").filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")).join(", "),e&&!--M&&d(()=>{if(M)return;let t=p.cssRules.length;for(;t--;)p.deleteRule(t);D={}})}function z(t){B=t}const A=[],F=[],O=[],S=[],P=Promise.resolve();let Y,G=!1;function q(t){O.push(t)}function J(){const t=new Set;do{for(;A.length;){const t=A.shift();z(t),K(t.$$)}for(;F.length;)F.pop()();for(let e=0;e<O.length;e+=1){const n=O[e];t.has(n)||(n(),t.add(n))}O.length=0}while(A.length);for(;S.length;)S.pop()();G=!1}function K(t){t.fragment&&(t.update(t.dirty),l(t.before_update),t.fragment.p(t.dirty,t.ctx),t.dirty=null,t.after_update.forEach(q))}function Q(t,e,n){t.dispatchEvent(T(`${e?"intro":"outro"}${n}`))}const U=new Set;let W;function X(){W={r:0,c:[],p:W}}function Z(){W.r||l(W.c),W=W.p}function tt(t,e){t&&t.i&&(U.delete(t),t.i(e))}function et(t,e,n,r){if(t&&t.o){if(U.has(t))return;U.add(t),W.c.push(()=>{U.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}const nt={duration:0};function rt(n,r,o,a){let c=r(n,o),s=a?0:1,u=null,p=null,g=null;function v(){g&&j(n,g)}function w(t,e){const n=t.b-s;return e*=Math.abs(n),{a:s,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function b(r){const{delay:o=0,duration:i=300,easing:a=e,tick:b=t,css:x}=c||nt,y={start:f()+o,b:r};r||(y.group=W,W.r+=1),u?p=y:(x&&(v(),g=I(n,s,r,i,o,a,x)),r&&b(0,1),u=w(y,i),q(()=>Q(n,r,"start")),function(t){let e;$||($=!0,d(h)),new Promise(n=>{m.add(e=[t,n])})}(t=>{if(p&&t>p.start&&(u=w(p,i),p=null,Q(n,u.b,"start"),x&&(v(),g=I(n,s,u.b,u.duration,0,a,c.css))),u)if(t>=u.end)b(s=u.b,1-s),Q(n,u.b,"end"),p||(u.b?v():--u.group.r||l(u.group.c)),u=null;else if(t>=u.start){const e=t-u.start;s=u.a+u.d*a(e/u.duration),b(s,1-s)}return!(!u&&!p)}))}return{run(t){i(c)?(Y||(Y=Promise.resolve()).then(()=>{Y=null}),Y).then(()=>{c=c(),b(t)}):b(t)},end(){v(),u=p=null}}}function ot(t,e){const n={},r={},o={$$scope:1};let l=t.length;for(;l--;){const i=t[l],a=e[l];if(a){for(const t in i)t in a||(r[t]=1);for(const t in a)o[t]||(n[t]=a[t],o[t]=1);t[l]=a}else for(const t in i)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function lt(t,e,n){const{fragment:o,on_mount:a,on_destroy:c,after_update:s}=t.$$;o.m(e,n),q(()=>{const e=a.map(r).filter(i);c?c.push(...e):l(e),t.$$.on_mount=[]}),s.forEach(q)}function it(t,e){t.$$.fragment&&(l(t.$$.on_destroy),t.$$.fragment.d(e),t.$$.on_destroy=t.$$.fragment=null,t.$$.ctx={})}function at(t,e){t.$$.dirty||(A.push(t),G||(G=!0,P.then(J)),t.$$.dirty=o()),t.$$.dirty[e]=!0}function ct(e,n,r,i,a,c){const s=B;z(e);const u=n.props||{},f=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:a,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(s?s.$$.context:[]),callbacks:o(),dirty:null};let d=!1;f.ctx=r?r(e,u,(t,n,r=n)=>(f.ctx&&a(f.ctx[t],f.ctx[t]=r)&&(f.bound[t]&&f.bound[t](r),d&&at(e,t)),n)):u,f.update(),d=!0,l(f.before_update),f.fragment=i(f.ctx),n.target&&(n.hydrate?f.fragment.l(V(n.target)):f.fragment.c(),n.intro&&tt(e.$$.fragment),lt(e,n.target,n.anchor),J()),z(s)}class st{$destroy(){it(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function ut(t){var e,r,o;const l=t.$$slots.default,i=function(t,e,n){if(t){const r=c(t,e,n);return t[0](r)}}(l,t,null);return{c(){e=x("div"),i&&i.c(),C(e,"class","tile gradientBorder svelte-245kjv"),o=R(e,"click",t.click_handler)},l(t){i&&i.l(div_nodes)},m(t,n){v(t,e,n),i&&i.m(e,null),r=!0},p(t,e){i&&i.p&&t.$$scope&&i.p(function(t,e,r,o){return t[1]?n({},n(e.$$scope.changed||{},t[1](o?o(r):{}))):e.$$scope.changed||{}}(l,e,t,null),c(l,e,null))},i(t){r||(tt(i,t),r=!0)},o(t){et(i,t),r=!1},d(t){t&&w(e),i&&i.d(t),o()}}}function ft(t,e,n){let{src:r}=e,{$$slots:o={},$$scope:l}=e;return t.$set=(t=>{"src"in t&&n("src",r=t.src),"$$scope"in t&&n("$$scope",l=t.$$scope)}),{src:r,click_handler:function(e){!function(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(t=>t(e))}(t,e)},$$slots:o,$$scope:l}}class dt extends st{constructor(t){super(),ct(this,t,ft,ut,a,["src"])}}function mt(t,{delay:e=0,duration:n=400}){const r=+getComputedStyle(t).opacity;return{delay:e,duration:n,css:t=>`opacity: ${t*r}`}}function pt(e){var n,r;return{c(){n=x("a"),C(r=x("iframe"),"title",e.title),C(r,"src",e.url),C(r,"class","svelte-17t83rb"),C(n,"href",e.url),C(n,"class","site-thumbnail svelte-17t83rb")},m(t,e){v(t,n,e),g(n,r)},p(t,e){t.title&&C(r,"title",e.title),t.url&&(C(r,"src",e.url),C(n,"href",e.url))},i:t,o:t,d(t){t&&w(n)}}}function $t(t,e,n){let{url:r,title:o=""}=e;return t.$set=(t=>{"url"in t&&n("url",r=t.url),"title"in t&&n("title",o=t.title)}),{url:r,title:o}}class ht extends st{constructor(t){super(),ct(this,t,$t,pt,a,["url","title"])}}function gt(t,e,n){const r=Object.create(t);return r.entry=e[n],r}function vt(t){var e,n,r=t.data.title+"";return{c(){e=x("h1"),n=k(r)},m(t,r){v(t,e,r),g(e,n)},p(t,e){t.data&&r!==(r=e.data.title+"")&&H(n,r)},d(t){t&&w(e)}}}function wt(t){var e,n;function r(t,n){return(null==e||t.data)&&(e=!!Array.isArray(n.data.content)),e?xt:bt}var o=r(null,t),l=o(t);return{c(){l.c(),n=E()},m(t,e){l.m(t,e),v(t,n,e)},p(t,e){o===(o=r(t,e))&&l?l.p(t,e):(l.d(1),(l=o(e))&&(l.c(),l.m(n.parentNode,n)))},d(t){l.d(t),t&&w(n)}}}function bt(t){var e,n=t.data.content+"";return{c(){e=x("p")},m(t,r){v(t,e,r),e.innerHTML=n},p(t,r){t.data&&n!==(n=r.data.content+"")&&(e.innerHTML=n)},d(t){t&&w(e)}}}function xt(t){var e;let n=t.data.content,r=[];for(let e=0;e<n.length;e+=1)r[e]=yt(gt(t,n,e));return{c(){e=x("ul");for(let t=0;t<r.length;t+=1)r[t].c()},m(t,n){v(t,e,n);for(let t=0;t<r.length;t+=1)r[t].m(e,null)},p(t,o){if(t.data){let l;for(n=o.data.content,l=0;l<n.length;l+=1){const i=gt(o,n,l);r[l]?r[l].p(t,i):(r[l]=yt(i),r[l].c(),r[l].m(e,null))}for(;l<r.length;l+=1)r[l].d(1);r.length=n.length}},d(t){t&&w(e),b(r,t)}}}function yt(t){var e,n=t.entry+"";return{c(){e=x("li")},m(t,r){v(t,e,r),e.innerHTML=n},p(t,r){t.data&&n!==(n=r.entry+"")&&(e.innerHTML=n)},d(t){t&&w(e)}}}function kt(t){var e;function n(t,e){return e.commitID?Et:_t}var r=n(0,t),o=r(t);return{c(){o.c(),e=E()},m(t,n){o.m(t,n),v(t,e,n)},p(t,l){r===(r=n(0,l))&&o?o.p(t,l):(o.d(1),(o=r(l))&&(o.c(),o.m(e.parentNode,e)))},d(t){o.d(t),t&&w(e)}}}function _t(t){var e,n,r,o,l;return{c(){e=x("p"),n=k("Link: "),r=x("a"),o=k(t.link),C(r,"href",l=t.data.link)},m(t,l){v(t,e,l),g(e,n),g(e,r),g(r,o)},p(t,e){t.link&&H(o,e.link),t.data&&l!==(l=e.data.link)&&C(r,"href",l)},d(t){t&&w(e)}}}function Et(t){var e,n,r,o,l;return{c(){e=x("p"),n=k("Commit: "),r=x("a"),o=k(t.commitID),C(r,"href",l=t.data.link)},m(t,l){v(t,e,l),g(e,n),g(e,r),g(r,o)},p(t,e){t.commitID&&H(o,e.commitID),t.data&&l!==(l=e.data.link)&&C(r,"href",l)},d(t){t&&w(e)}}}function Rt(t){var e,n=new ht({props:{url:t.data.frame.url,title:t.data.frame.title}});return{c(){n.$$.fragment.c()},m(t,r){lt(n,t,r),e=!0},p(t,e){var r={};t.data&&(r.url=e.data.frame.url),t.data&&(r.title=e.data.frame.title),n.$set(r)},i(t){e||(tt(n.$$.fragment,t),e=!0)},o(t){et(n.$$.fragment,t),e=!1},d(t){it(n,t)}}}function Ct(t){var e,n,r,o,l,i=t.data.title&&vt(t),a=t.data.content&&wt(t),c=t.data.link&&kt(t),s=t.data.frame&&Rt(t);return{c(){i&&i.c(),e=_(),a&&a.c(),n=_(),c&&c.c(),r=_(),s&&s.c(),o=E()},m(t,u){i&&i.m(t,u),v(t,e,u),a&&a.m(t,u),v(t,n,u),c&&c.m(t,u),v(t,r,u),s&&s.m(t,u),v(t,o,u),l=!0},p(t,l){l.data.title?i?i.p(t,l):((i=vt(l)).c(),i.m(e.parentNode,e)):i&&(i.d(1),i=null),l.data.content?a?a.p(t,l):((a=wt(l)).c(),a.m(n.parentNode,n)):a&&(a.d(1),a=null),l.data.link?c?c.p(t,l):((c=kt(l)).c(),c.m(r.parentNode,r)):c&&(c.d(1),c=null),l.data.frame?s?(s.p(t,l),tt(s,1)):((s=Rt(l)).c(),tt(s,1),s.m(o.parentNode,o)):s&&(X(),et(s,1,1,()=>{s=null}),Z())},i(t){l||(tt(s),l=!0)},o(t){et(s),l=!1},d(t){i&&i.d(t),t&&w(e),a&&a.d(t),t&&w(n),c&&c.d(t),t&&w(r),s&&s.d(t),t&&w(o)}}}function Nt(t,e,n){let{data:r}=e,o="",l="";return t.$set=(t=>{"data"in t&&n("data",r=t.data)}),t.$$.update=((t={data:1,link:1})=>{if(t.data||t.link){n("link",l=(r.link||"").replace(/^https?:\/\//i,""));let t=/^github.com\/.+?\/blob\/(.+?)\//i.exec(l);t&&n("commitID",o=t[1].slice(0,8))}}),{data:r,commitID:o,link:l}}class Vt extends st{constructor(t){super(),ct(this,t,Nt,Ct,a,["data"])}}function Lt(t){var e,n,r,o,l,i,a,c=new Vt({props:{data:t.data}});return{c(){e=x("div"),n=x("div"),r=_(),o=x("div"),c.$$.fragment.c(),C(n,"class","background svelte-1si5li3"),C(o,"class","content svelte-1si5li3"),C(e,"class","lightbox svelte-1si5li3"),a=R(n,"click",t.close)},m(t,l){v(t,e,l),g(e,n),g(e,r),g(e,o),lt(c,o,null),i=!0},p(t,e){var n={};t.data&&(n.data=e.data),c.$set(n)},i(t){i||(tt(c.$$.fragment,t),q(()=>{l||(l=rt(e,mt,{duration:300},!0)),l.run(1)}),i=!0)},o(t){et(c.$$.fragment,t),l||(l=rt(e,mt,{duration:300},!1)),l.run(0),i=!1},d(t){t&&w(e),it(c),t&&l&&l.end(),a()}}}function Ht(t,e,n){const r=function(){const t=B;return(e,n)=>{const r=t.$$.callbacks[e];if(r){const o=T(e,n);r.slice().forEach(e=>{e.call(t,o)})}}}();let{data:o}=e;return t.$set=(t=>{"data"in t&&n("data",o=t.data)}),{close:function(){r("destroy")},data:o}}class Tt extends st{constructor(t){super(),ct(this,t,Ht,Lt,a,["data"])}}function Bt(t,e,n){const r=Object.create(t);return r.item=e[n],r}function Mt(t){var e,n;let r=t.items.content,o=[];for(let e=0;e<r.length;e+=1)o[e]=zt(Bt(t,r,e));const l=t=>et(o[t],1,1,()=>{o[t]=null});return{c(){for(let t=0;t<o.length;t+=1)o[t].c();e=E()},m(t,r){for(let e=0;e<o.length;e+=1)o[e].m(t,r);v(t,e,r),n=!0},p(t,n){if(t.items){let i;for(r=n.items.content,i=0;i<r.length;i+=1){const l=Bt(n,r,i);o[i]?(o[i].p(t,l),tt(o[i],1)):(o[i]=zt(l),o[i].c(),tt(o[i],1),o[i].m(e.parentNode,e))}for(X(),i=r.length;i<o.length;i+=1)l(i);Z()}},i(t){if(!n){for(let t=0;t<r.length;t+=1)tt(o[t]);n=!0}},o(t){o=o.filter(Boolean);for(let t=0;t<o.length;t+=1)et(o[t]);n=!1},d(t){b(o,t),t&&w(e)}}}function Dt(t){var e,n=t.item.title+"";return{c(){e=k(n)},m(t,n){v(t,e,n)},p(t,r){t.items&&n!==(n=r.item.title+"")&&H(e,n)},d(t){t&&w(e)}}}function It(t){var e,n,r=t.item.date+"";return{c(){e=x("div"),n=k(r),C(e,"class","subtitle svelte-1o5s72l")},m(t,r){v(t,e,r),g(e,n)},p(t,e){t.items&&r!==(r=e.item.date+"")&&H(n,r)},d(t){t&&w(e)}}}function jt(t){var e,n,r=t.item.title&&Dt(t),o=t.item.date&&It(t);return{c(){r&&r.c(),e=_(),o&&o.c(),n=E()},m(t,l){r&&r.m(t,l),v(t,e,l),o&&o.m(t,l),v(t,n,l)},p(t,l){l.item.title?r?r.p(t,l):((r=Dt(l)).c(),r.m(e.parentNode,e)):r&&(r.d(1),r=null),l.item.date?o?o.p(t,l):((o=It(l)).c(),o.m(n.parentNode,n)):o&&(o.d(1),o=null)},d(t){r&&r.d(t),t&&w(e),o&&o.d(t),t&&w(n)}}}function zt(t){var e,n,r;var o=new dt({props:{$$slots:{default:[jt]},$$scope:{ctx:t}}});return o.$on("click",function(){return t.click_handler(t)}),{c(){e=x("div"),o.$$.fragment.c(),n=_(),C(e,"class","spacer svelte-1o5s72l")},m(t,l){v(t,e,l),lt(o,e,null),g(e,n),r=!0},p(e,n){t=n;var r={};(e.$$scope||e.items)&&(r.$$scope={changed:e,ctx:t}),o.$set(r)},i(t){r||(tt(o.$$.fragment,t),r=!0)},o(t){et(o.$$.fragment,t),r=!1},d(t){t&&w(e),it(o)}}}function At(t){var e,n,r,o,l,i,a=t.items.title+"",c=t.items.content&&Mt(t);return{c(){e=x("div"),n=x("div"),r=x("h2"),o=k(a),l=_(),c&&c.c(),C(n,"class","title svelte-1o5s72l"),C(e,"class","filmstrip svelte-1o5s72l")},m(t,a){v(t,e,a),g(e,n),g(n,r),g(r,o),g(e,l),c&&c.m(e,null),i=!0},p(t,n){i&&!t.items||a===(a=n.items.title+"")||H(o,a),n.items.content?c?(c.p(t,n),tt(c,1)):((c=Mt(n)).c(),tt(c,1),c.m(e,null)):c&&(X(),et(c,1,1,()=>{c=null}),Z())},i(t){i||(tt(c),i=!0)},o(t){et(c),i=!1},d(t){t&&w(e),c&&c.d()}}}function Ft(t,e,n){let{items:r={title:"",content:[]}}=e;return t.$set=(t=>{"items"in t&&n("items",r=t.items)}),{items:r,click_handler:({item:t})=>Tt.createLightbox({...t,title:[r.title,t.title,t.date].filter(t=>t).join(" - ")})}}Tt.createLightbox=function(t){const e=new Tt({target:document.body,props:{data:t},intro:!0});return e.$on("destroy",()=>{e.$destroy()}),e.promise};class Ot extends st{constructor(t){super(),ct(this,t,Ft,At,a,["items"])}}var St=[{title:"TITLE",content:[{title:"TITLE",date:"DD/MM/YYYY",content:"STRING OR STRING[]",link:"HREF",frame:{url:"HREF",title:"TITLE"}}]}];function Pt(e){for(var r,o,l=[{"aria-hidden":"true"},{focusable:"false"},{"data-prefix":"far"},{"data-icon":"file-alt"},{class:"svg-inline--fa fa-file-alt fa-w-12"},{role:"img"},{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 384 512"},e.$$props],i={},a=0;a<l.length;a+=1)i=n(i,l[a]);return{c(){r=y("svg"),o=y("path"),this.h()},l(t){var e=V(r=L(t,"svg",{"aria-hidden":!0,focusable:!0,"data-prefix":!0,"data-icon":!0,class:!0,role:!0,xmlns:!0,viewBox:!0},!0));V(o=L(e,"path",{fill:!0,d:!0},!0)).forEach(w),e.forEach(w),this.h()},h(){C(o,"fill","currentColor"),C(o,"d","M288 248v28c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-28c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm-12 72H108c-6.6 0-12 5.4-12 12v28c0 6.6 5.4 12 12 12h168c6.6 0 12-5.4 12-12v-28c0-6.6-5.4-12-12-12zm108-188.1V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V48C0 21.5 21.5 0 48 0h204.1C264.8 0 277 5.1 286 14.1L369.9 98c9 8.9 14.1 21.2 14.1 33.9zm-128-80V128h76.1L256 51.9zM336 464V176H232c-13.3 0-24-10.7-24-24V48H48v416h288z"),N(r,i)},m(t,n){v(t,r,n),g(r,o),e.svg_binding(r)},p(t,e){N(r,ot(l,[{"aria-hidden":"true"},{focusable:"false"},{"data-prefix":"far"},{"data-icon":"file-alt"},{class:"svg-inline--fa fa-file-alt fa-w-12"},{role:"img"},{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 384 512"},t.$$props&&e.$$props]))},i:t,o:t,d(t){t&&w(r),e.svg_binding(null)}}}function Yt(t,e,r){let{elemRef:o}=e;return t.$set=(t=>{r("$$props",e=n(n({},e),t)),"elemRef"in t&&r("elemRef",o=t.elemRef)}),{elemRef:o,$$props:e,svg_binding:function(t){F[t?"unshift":"push"](()=>{r("elemRef",o=t)})},$$props:e=s(e)}}class Gt extends st{constructor(t){super(),ct(this,t,Yt,Pt,a,["elemRef"])}}function qt(e){for(var r,o,l=[{"aria-hidden":"true"},{focusable:"false"},{"data-prefix":"fas"},{"data-icon":"columns"},{class:"svg-inline--fa fa-columns fa-w-16"},{role:"img"},{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 512 512"},e.$$props],i={},a=0;a<l.length;a+=1)i=n(i,l[a]);return{c(){r=y("svg"),o=y("path"),this.h()},l(t){var e=V(r=L(t,"svg",{"aria-hidden":!0,focusable:!0,"data-prefix":!0,"data-icon":!0,class:!0,role:!0,xmlns:!0,viewBox:!0},!0));V(o=L(e,"path",{fill:!0,d:!0},!0)).forEach(w),e.forEach(w),this.h()},h(){C(o,"fill","currentColor"),C(o,"d","M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM224 416H64V160h160v256zm224 0H288V160h160v256z"),N(r,i)},m(t,n){v(t,r,n),g(r,o),e.svg_binding(r)},p(t,e){N(r,ot(l,[{"aria-hidden":"true"},{focusable:"false"},{"data-prefix":"fas"},{"data-icon":"columns"},{class:"svg-inline--fa fa-columns fa-w-16"},{role:"img"},{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 512 512"},t.$$props&&e.$$props]))},i:t,o:t,d(t){t&&w(r),e.svg_binding(null)}}}function Jt(t,e,r){let{elemRef:o}=e;return t.$set=(t=>{r("$$props",e=n(n({},e),t)),"elemRef"in t&&r("elemRef",o=t.elemRef)}),{elemRef:o,$$props:e,svg_binding:function(t){F[t?"unshift":"push"](()=>{r("elemRef",o=t)})},$$props:e=s(e)}}class Kt extends st{constructor(t){super(),ct(this,t,Jt,qt,a,["elemRef"])}}function Qt(t,e,n){const r=Object.create(t);return r.data=e[n],r}function Ut(t,e,n){const r=Object.create(t);return r.content=e[n],r}function Wt(t){var e,n;let r=St.filter(oe),o=[];for(let e=0;e<r.length;e+=1)o[e]=Zt(Qt(t,r,e));const l=t=>et(o[t],1,1,()=>{o[t]=null});return{c(){e=x("div");for(let t=0;t<o.length;t+=1)o[t].c();C(e,"class","overflowContainer svelte-1nmn9re")},m(t,r){v(t,e,r);for(let t=0;t<o.length;t+=1)o[t].m(e,null);n=!0},p(t,n){if(t.siteData){let i;for(r=St.filter(oe),i=0;i<r.length;i+=1){const l=Qt(n,r,i);o[i]?(o[i].p(t,l),tt(o[i],1)):(o[i]=Zt(l),o[i].c(),tt(o[i],1),o[i].m(e,null))}for(X(),i=r.length;i<o.length;i+=1)l(i);Z()}},i(t){if(!n){for(let t=0;t<r.length;t+=1)tt(o[t]);n=!0}},o(t){o=o.filter(Boolean);for(let t=0;t<o.length;t+=1)et(o[t]);n=!1},d(t){t&&w(e),b(o,t)}}}function Xt(t){var e,n,r;let o=St.filter(ne).map(re).flat(),l=[];for(let e=0;e<o.length;e+=1)l[e]=te(Ut(t,o,e));const i=t=>et(l[t],1,1,()=>{l[t]=null});return{c(){e=x("div"),n=x("div");for(let t=0;t<l.length;t+=1)l[t].c();C(n,"class","flatView svelte-1nmn9re"),C(e,"class","flatViewContainer svelte-1nmn9re")},m(t,o){v(t,e,o),g(e,n);for(let t=0;t<l.length;t+=1)l[t].m(n,null);r=!0},p(t,e){if(t.siteData){let r;for(o=St.filter(ne).map(re).flat(),r=0;r<o.length;r+=1){const i=Ut(e,o,r);l[r]?(l[r].p(t,i),tt(l[r],1)):(l[r]=te(i),l[r].c(),tt(l[r],1),l[r].m(n,null))}for(X(),r=o.length;r<l.length;r+=1)i(r);Z()}},i(t){if(!r){for(let t=0;t<o.length;t+=1)tt(l[t]);r=!0}},o(t){l=l.filter(Boolean);for(let t=0;t<l.length;t+=1)et(l[t]);r=!1},d(t){t&&w(e),b(l,t)}}}function Zt(e){var n,r=new Ot({props:{items:e.data}});return{c(){r.$$.fragment.c()},m(t,e){lt(r,t,e),n=!0},p:t,i(t){n||(tt(r.$$.fragment,t),n=!0)},o(t){et(r.$$.fragment,t),n=!1},d(t){it(r,t)}}}function te(e){var n,r=new Vt({props:{data:e.content}});return{c(){r.$$.fragment.c()},m(t,e){lt(r,t,e),n=!0},p:t,i(t){n||(tt(r.$$.fragment,t),n=!0)},o(t){et(r.$$.fragment,t),n=!1},d(t){it(r,t)}}}function ee(t){var e,n,r,o,l,i,a,c,s,u,f=t.showFlatView?Gt:Kt;if(f)var d=new f({});var m=[Xt,Wt],p=[];function $(t,e){return e.showFlatView?0:1}return a=$(0,t),c=p[a]=m[a](t),{c(){e=x("div"),n=x("div"),(r=x("h1")).textContent="Generic Cards List Page",o=_(),l=x("div"),d&&d.$$.fragment.c(),i=_(),c.c(),C(l,"class","modeToggle svelte-1nmn9re"),C(n,"class","titleBlock gradientAnim svelte-1nmn9re"),C(e,"class","container svelte-1nmn9re"),u=R(l,"click",t.click_handler)},m(t,c){v(t,e,c),g(e,n),g(n,r),g(n,o),g(n,l),d&&lt(d,l,null),g(e,i),p[a].m(e,null),s=!0},p(t,n){if(f!==(f=n.showFlatView?Gt:Kt)){if(d){X();const t=d;et(t.$$.fragment,1,0,()=>{it(t,1)}),Z()}f?((d=new f({})).$$.fragment.c(),tt(d.$$.fragment,1),lt(d,l,null)):d=null}var r=a;(a=$(0,n))===r?p[a].p(t,n):(X(),et(p[r],1,1,()=>{p[r]=null}),Z(),(c=p[a])||(c=p[a]=m[a](n)).c(),tt(c,1),c.m(e,null))},i(t){s||(d&&tt(d.$$.fragment,t),tt(c),s=!0)},o(t){d&&et(d.$$.fragment,t),et(c),s=!1},d(t){t&&w(e),d&&it(d),p[a].d(),u()}}}const ne=t=>t.content&&t.content.length,re=t=>t.content.map(e=>({...e,title:[t.title,e.title,e.date].filter(t=>t).join(" - ")})),oe=t=>t.content&&t.content.length;function le(t,e,n){let r=!1;"#flat"===location.hash&&(n("showFlatView",r=!0),location.hash="");return{showFlatView:r,click_handler:()=>n("showFlatView",r=!r)}}return new class extends st{constructor(t){super(),ct(this,t,le,ee,a,[])}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map