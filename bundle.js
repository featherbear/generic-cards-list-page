var app=function(){"use strict";function t(){}const e=t=>t;function n(t,e){for(const n in e)t[n]=e[n];return t}function r(t){return t()}function o(){return Object.create(null)}function i(t){t.forEach(r)}function l(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(t,e,r){return t[1]?n({},n(e.$$scope.ctx,t[1](r?r(e):{}))):e.$$scope.ctx}function s(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}const u="undefined"!=typeof window;let f=u?()=>window.performance.now():()=>Date.now(),d=u?t=>requestAnimationFrame(t):t;const m=new Set;let p,$=!1;function h(){m.forEach(t=>{t[0](f())||(m.delete(t),t[1]())}),($=m.size>0)&&d(h)}function g(t,e){t.appendChild(e)}function v(t,e,n){t.insertBefore(e,n||null)}function b(t){t.parentNode.removeChild(t)}function w(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function x(t){return document.createElement(t)}function y(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function k(t){return document.createTextNode(t)}function _(){return k(" ")}function E(){return k("")}function R(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function C(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function N(t,e){for(const n in e)C(t,n,e[n])}function L(t){return Array.from(t.childNodes)}function H(t,e,n,r){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===e){for(let t=0;t<o.attributes.length;t+=1){const e=o.attributes[t];n[e.name]||o.removeAttribute(e.name)}return t.splice(r,1)[0]}}return r?y(e):x(e)}function T(t,e){e=""+e,t.data!==e&&(t.data=e)}function B(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}let M,D=0,I={};function j(t,e,n,r,o,i,l,c=0){const a=16.666/r;let s="{\n";for(let t=0;t<=1;t+=a){const r=e+(n-e)*i(t);s+=100*t+`%{${l(r,1-r)}}\n`}const u=s+`100% {${l(n,1-n)}}\n}`,f=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${c}`;if(!I[f]){if(!p){const t=x("style");document.head.appendChild(t),p=t.sheet}I[f]=!0,p.insertRule(`@keyframes ${f} ${u}`,p.cssRules.length)}const d=t.style.animation||"";return t.style.animation=`${d?`${d}, `:""}${f} ${r}ms linear ${o}ms 1 both`,D+=1,f}function z(t,e){t.style.animation=(t.style.animation||"").split(", ").filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")).join(", "),e&&!--D&&d(()=>{if(D)return;let t=p.cssRules.length;for(;t--;)p.deleteRule(t);I={}})}function A(t){M=t}const O=[],V=[],S=[],P=[],Y=Promise.resolve();let F,G=!1;function q(t){S.push(t)}function J(){const t=new Set;do{for(;O.length;){const t=O.shift();A(t),K(t.$$)}for(;V.length;)V.pop()();for(let e=0;e<S.length;e+=1){const n=S[e];t.has(n)||(n(),t.add(n))}S.length=0}while(O.length);for(;P.length;)P.pop()();G=!1}function K(t){t.fragment&&(t.update(t.dirty),i(t.before_update),t.fragment.p(t.dirty,t.ctx),t.dirty=null,t.after_update.forEach(q))}function Q(t,e,n){t.dispatchEvent(B(`${e?"intro":"outro"}${n}`))}const U=new Set;let W;function X(){W={r:0,c:[],p:W}}function Z(){W.r||i(W.c),W=W.p}function tt(t,e){t&&t.i&&(U.delete(t),t.i(e))}function et(t,e,n,r){if(t&&t.o){if(U.has(t))return;U.add(t),W.c.push(()=>{U.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}const nt={duration:0};function rt(n,r,o,c){let a=r(n,o),s=c?0:1,u=null,p=null,g=null;function v(){g&&z(n,g)}function b(t,e){const n=t.b-s;return e*=Math.abs(n),{a:s,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function w(r){const{delay:o=0,duration:l=300,easing:c=e,tick:w=t,css:x}=a||nt,y={start:f()+o,b:r};r||(y.group=W,W.r+=1),u?p=y:(x&&(v(),g=j(n,s,r,l,o,c,x)),r&&w(0,1),u=b(y,l),q(()=>Q(n,r,"start")),function(t){let e;$||($=!0,d(h)),new Promise(n=>{m.add(e=[t,n])})}(t=>{if(p&&t>p.start&&(u=b(p,l),p=null,Q(n,u.b,"start"),x&&(v(),g=j(n,s,u.b,u.duration,0,c,a.css))),u)if(t>=u.end)w(s=u.b,1-s),Q(n,u.b,"end"),p||(u.b?v():--u.group.r||i(u.group.c)),u=null;else if(t>=u.start){const e=t-u.start;s=u.a+u.d*c(e/u.duration),w(s,1-s)}return!(!u&&!p)}))}return{run(t){l(a)?(F||(F=Promise.resolve()).then(()=>{F=null}),F).then(()=>{a=a(),w(t)}):w(t)},end(){v(),u=p=null}}}function ot(t,e){const n={},r={},o={$$scope:1};let i=t.length;for(;i--;){const l=t[i],c=e[i];if(c){for(const t in l)t in c||(r[t]=1);for(const t in c)o[t]||(n[t]=c[t],o[t]=1);t[i]=c}else for(const t in l)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function it(t,e,n){const{fragment:o,on_mount:c,on_destroy:a,after_update:s}=t.$$;o.m(e,n),q(()=>{const e=c.map(r).filter(l);a?a.push(...e):i(e),t.$$.on_mount=[]}),s.forEach(q)}function lt(t,e){t.$$.fragment&&(i(t.$$.on_destroy),t.$$.fragment.d(e),t.$$.on_destroy=t.$$.fragment=null,t.$$.ctx={})}function ct(t,e){t.$$.dirty||(O.push(t),G||(G=!0,Y.then(J)),t.$$.dirty=o()),t.$$.dirty[e]=!0}function at(e,n,r,l,c,a){const s=M;A(e);const u=n.props||{},f=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:c,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(s?s.$$.context:[]),callbacks:o(),dirty:null};let d=!1;f.ctx=r?r(e,u,(t,n,r=n)=>(f.ctx&&c(f.ctx[t],f.ctx[t]=r)&&(f.bound[t]&&f.bound[t](r),d&&ct(e,t)),n)):u,f.update(),d=!0,i(f.before_update),f.fragment=l(f.ctx),n.target&&(n.hydrate?f.fragment.l(L(n.target)):f.fragment.c(),n.intro&&tt(e.$$.fragment),it(e,n.target,n.anchor),J()),A(s)}class st{$destroy(){lt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function ut(t){var e,r,o;const i=t.$$slots.default,l=function(t,e,n){if(t){const r=a(t,e,n);return t[0](r)}}(i,t,null);return{c(){e=x("div"),l&&l.c(),C(e,"class","tile gradientBorder svelte-245kjv"),o=R(e,"click",t.click_handler)},l(t){l&&l.l(div_nodes)},m(t,n){v(t,e,n),l&&l.m(e,null),r=!0},p(t,e){l&&l.p&&t.$$scope&&l.p(function(t,e,r,o){return t[1]?n({},n(e.$$scope.changed||{},t[1](o?o(r):{}))):e.$$scope.changed||{}}(i,e,t,null),a(i,e,null))},i(t){r||(tt(l,t),r=!0)},o(t){et(l,t),r=!1},d(t){t&&b(e),l&&l.d(t),o()}}}function ft(t,e,n){let{src:r}=e,{$$slots:o={},$$scope:i}=e;return t.$set=(t=>{"src"in t&&n("src",r=t.src),"$$scope"in t&&n("$$scope",i=t.$$scope)}),{src:r,click_handler:function(e){!function(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(t=>t(e))}(t,e)},$$slots:o,$$scope:i}}class dt extends st{constructor(t){super(),at(this,t,ft,ut,c,["src"])}}function mt(t,{delay:e=0,duration:n=400}){const r=+getComputedStyle(t).opacity;return{delay:e,duration:n,css:t=>`opacity: ${t*r}`}}function pt(e){var n,r;return{c(){n=x("a"),C(r=x("iframe"),"title",e.title),C(r,"src",e.url),C(r,"class","svelte-17t83rb"),C(n,"href",e.url),C(n,"class","site-thumbnail svelte-17t83rb")},m(t,e){v(t,n,e),g(n,r)},p(t,e){t.title&&C(r,"title",e.title),t.url&&(C(r,"src",e.url),C(n,"href",e.url))},i:t,o:t,d(t){t&&b(n)}}}function $t(t,e,n){let{url:r,title:o=""}=e;return t.$set=(t=>{"url"in t&&n("url",r=t.url),"title"in t&&n("title",o=t.title)}),{url:r,title:o}}class ht extends st{constructor(t){super(),at(this,t,$t,pt,c,["url","title"])}}function gt(t,e,n){const r=Object.create(t);return r.entry=e[n],r}function vt(t){var e,n,r=t.data.title+"";return{c(){e=x("h1"),n=k(r)},m(t,r){v(t,e,r),g(e,n)},p(t,e){t.data&&r!==(r=e.data.title+"")&&T(n,r)},d(t){t&&b(e)}}}function bt(t){var e,n;function r(t,n){return(null==e||t.data)&&(e=!!Array.isArray(n.data.content)),e?xt:wt}var o=r(null,t),i=o(t);return{c(){i.c(),n=E()},m(t,e){i.m(t,e),v(t,n,e)},p(t,e){o===(o=r(t,e))&&i?i.p(t,e):(i.d(1),(i=o(e))&&(i.c(),i.m(n.parentNode,n)))},d(t){i.d(t),t&&b(n)}}}function wt(t){var e,n=t.data.content+"";return{c(){e=x("p")},m(t,r){v(t,e,r),e.innerHTML=n},p(t,r){t.data&&n!==(n=r.data.content+"")&&(e.innerHTML=n)},d(t){t&&b(e)}}}function xt(t){var e;let n=t.data.content,r=[];for(let e=0;e<n.length;e+=1)r[e]=yt(gt(t,n,e));return{c(){e=x("ul");for(let t=0;t<r.length;t+=1)r[t].c()},m(t,n){v(t,e,n);for(let t=0;t<r.length;t+=1)r[t].m(e,null)},p(t,o){if(t.data){let i;for(n=o.data.content,i=0;i<n.length;i+=1){const l=gt(o,n,i);r[i]?r[i].p(t,l):(r[i]=yt(l),r[i].c(),r[i].m(e,null))}for(;i<r.length;i+=1)r[i].d(1);r.length=n.length}},d(t){t&&b(e),w(r,t)}}}function yt(t){var e,n=t.entry+"";return{c(){e=x("li")},m(t,r){v(t,e,r),e.innerHTML=n},p(t,r){t.data&&n!==(n=r.entry+"")&&(e.innerHTML=n)},d(t){t&&b(e)}}}function kt(t){var e;function n(t,e){return e.commitID?Et:_t}var r=n(0,t),o=r(t);return{c(){o.c(),e=E()},m(t,n){o.m(t,n),v(t,e,n)},p(t,i){r===(r=n(0,i))&&o?o.p(t,i):(o.d(1),(o=r(i))&&(o.c(),o.m(e.parentNode,e)))},d(t){o.d(t),t&&b(e)}}}function _t(t){var e,n,r,o,i;return{c(){e=x("p"),n=k("Link: "),r=x("a"),o=k(t.link),C(r,"href",i=t.data.link)},m(t,i){v(t,e,i),g(e,n),g(e,r),g(r,o)},p(t,e){t.link&&T(o,e.link),t.data&&i!==(i=e.data.link)&&C(r,"href",i)},d(t){t&&b(e)}}}function Et(t){var e,n,r,o,i;return{c(){e=x("p"),n=k("Commit: "),r=x("a"),o=k(t.commitID),C(r,"href",i=t.data.link)},m(t,i){v(t,e,i),g(e,n),g(e,r),g(r,o)},p(t,e){t.commitID&&T(o,e.commitID),t.data&&i!==(i=e.data.link)&&C(r,"href",i)},d(t){t&&b(e)}}}function Rt(t){var e,n=new ht({props:{url:t.data.frame.url,title:t.data.frame.title}});return{c(){n.$$.fragment.c()},m(t,r){it(n,t,r),e=!0},p(t,e){var r={};t.data&&(r.url=e.data.frame.url),t.data&&(r.title=e.data.frame.title),n.$set(r)},i(t){e||(tt(n.$$.fragment,t),e=!0)},o(t){et(n.$$.fragment,t),e=!1},d(t){lt(n,t)}}}function Ct(t){var e,n,r,o,i,l=t.data.title&&vt(t),c=t.data.content&&bt(t),a=t.data.link&&kt(t),s=t.data.frame&&Rt(t);return{c(){l&&l.c(),e=_(),c&&c.c(),n=_(),a&&a.c(),r=_(),s&&s.c(),o=E()},m(t,u){l&&l.m(t,u),v(t,e,u),c&&c.m(t,u),v(t,n,u),a&&a.m(t,u),v(t,r,u),s&&s.m(t,u),v(t,o,u),i=!0},p(t,i){i.data.title?l?l.p(t,i):((l=vt(i)).c(),l.m(e.parentNode,e)):l&&(l.d(1),l=null),i.data.content?c?c.p(t,i):((c=bt(i)).c(),c.m(n.parentNode,n)):c&&(c.d(1),c=null),i.data.link?a?a.p(t,i):((a=kt(i)).c(),a.m(r.parentNode,r)):a&&(a.d(1),a=null),i.data.frame?s?(s.p(t,i),tt(s,1)):((s=Rt(i)).c(),tt(s,1),s.m(o.parentNode,o)):s&&(X(),et(s,1,1,()=>{s=null}),Z())},i(t){i||(tt(s),i=!0)},o(t){et(s),i=!1},d(t){l&&l.d(t),t&&b(e),c&&c.d(t),t&&b(n),a&&a.d(t),t&&b(r),s&&s.d(t),t&&b(o)}}}function Nt(t,e,n){let{data:r}=e,o="",i="";return t.$set=(t=>{"data"in t&&n("data",r=t.data)}),t.$$.update=((t={data:1,link:1})=>{if(t.data||t.link){n("link",i=(r.link||"").replace(/^https?:\/\//i,""));let t=/^github.com\/.+?\/blob\/(.+?)\//i.exec(i);t&&n("commitID",o=t[1].slice(0,8))}}),{data:r,commitID:o,link:i}}class Lt extends st{constructor(t){super(),at(this,t,Nt,Ct,c,["data"])}}function Ht(t){var e,n,r,o,i,l,c,a=new Lt({props:{data:t.data}});return{c(){e=x("div"),n=x("div"),r=_(),o=x("div"),a.$$.fragment.c(),C(n,"class","background svelte-1si5li3"),C(o,"class","content svelte-1si5li3"),C(e,"class","lightbox svelte-1si5li3"),c=R(n,"click",t.close)},m(t,i){v(t,e,i),g(e,n),g(e,r),g(e,o),it(a,o,null),l=!0},p(t,e){var n={};t.data&&(n.data=e.data),a.$set(n)},i(t){l||(tt(a.$$.fragment,t),q(()=>{i||(i=rt(e,mt,{duration:300},!0)),i.run(1)}),l=!0)},o(t){et(a.$$.fragment,t),i||(i=rt(e,mt,{duration:300},!1)),i.run(0),l=!1},d(t){t&&b(e),lt(a),t&&i&&i.end(),c()}}}function Tt(t,e,n){const r=function(){const t=M;return(e,n)=>{const r=t.$$.callbacks[e];if(r){const o=B(e,n);r.slice().forEach(e=>{e.call(t,o)})}}}();let{data:o}=e;return t.$set=(t=>{"data"in t&&n("data",o=t.data)}),{close:function(){r("destroy")},data:o}}class Bt extends st{constructor(t){super(),at(this,t,Tt,Ht,c,["data"])}}function Mt(t,e,n){const r=Object.create(t);return r.item=e[n],r}function Dt(t){var e,n;let r=t.items.content,o=[];for(let e=0;e<r.length;e+=1)o[e]=At(Mt(t,r,e));const i=t=>et(o[t],1,1,()=>{o[t]=null});return{c(){for(let t=0;t<o.length;t+=1)o[t].c();e=E()},m(t,r){for(let e=0;e<o.length;e+=1)o[e].m(t,r);v(t,e,r),n=!0},p(t,n){if(t.items){let l;for(r=n.items.content,l=0;l<r.length;l+=1){const i=Mt(n,r,l);o[l]?(o[l].p(t,i),tt(o[l],1)):(o[l]=At(i),o[l].c(),tt(o[l],1),o[l].m(e.parentNode,e))}for(X(),l=r.length;l<o.length;l+=1)i(l);Z()}},i(t){if(!n){for(let t=0;t<r.length;t+=1)tt(o[t]);n=!0}},o(t){o=o.filter(Boolean);for(let t=0;t<o.length;t+=1)et(o[t]);n=!1},d(t){w(o,t),t&&b(e)}}}function It(t){var e,n=t.item.title+"";return{c(){e=k(n)},m(t,n){v(t,e,n)},p(t,r){t.items&&n!==(n=r.item.title+"")&&T(e,n)},d(t){t&&b(e)}}}function jt(t){var e,n,r=t.item.date+"";return{c(){e=x("div"),n=k(r),C(e,"class","subtitle svelte-1o5s72l")},m(t,r){v(t,e,r),g(e,n)},p(t,e){t.items&&r!==(r=e.item.date+"")&&T(n,r)},d(t){t&&b(e)}}}function zt(t){var e,n,r=t.item.title&&It(t),o=t.item.date&&jt(t);return{c(){r&&r.c(),e=_(),o&&o.c(),n=E()},m(t,i){r&&r.m(t,i),v(t,e,i),o&&o.m(t,i),v(t,n,i)},p(t,i){i.item.title?r?r.p(t,i):((r=It(i)).c(),r.m(e.parentNode,e)):r&&(r.d(1),r=null),i.item.date?o?o.p(t,i):((o=jt(i)).c(),o.m(n.parentNode,n)):o&&(o.d(1),o=null)},d(t){r&&r.d(t),t&&b(e),o&&o.d(t),t&&b(n)}}}function At(t){var e,n,r;var o=new dt({props:{$$slots:{default:[zt]},$$scope:{ctx:t}}});return o.$on("click",function(){return t.click_handler(t)}),{c(){e=x("div"),o.$$.fragment.c(),n=_(),C(e,"class","spacer svelte-1o5s72l")},m(t,i){v(t,e,i),it(o,e,null),g(e,n),r=!0},p(e,n){t=n;var r={};(e.$$scope||e.items)&&(r.$$scope={changed:e,ctx:t}),o.$set(r)},i(t){r||(tt(o.$$.fragment,t),r=!0)},o(t){et(o.$$.fragment,t),r=!1},d(t){t&&b(e),lt(o)}}}function Ot(t){var e,n,r,o,i,l,c=t.items.title+"",a=t.items.content&&Dt(t);return{c(){e=x("div"),n=x("div"),r=x("h2"),o=k(c),i=_(),a&&a.c(),C(n,"class","title svelte-1o5s72l"),C(e,"class","filmstrip svelte-1o5s72l")},m(t,c){v(t,e,c),g(e,n),g(n,r),g(r,o),g(e,i),a&&a.m(e,null),l=!0},p(t,n){l&&!t.items||c===(c=n.items.title+"")||T(o,c),n.items.content?a?(a.p(t,n),tt(a,1)):((a=Dt(n)).c(),tt(a,1),a.m(e,null)):a&&(X(),et(a,1,1,()=>{a=null}),Z())},i(t){l||(tt(a),l=!0)},o(t){et(a),l=!1},d(t){t&&b(e),a&&a.d()}}}function Vt(t,e,n){let{items:r={title:"",content:[]}}=e;return t.$set=(t=>{"items"in t&&n("items",r=t.items)}),{items:r,click_handler:({item:t})=>Bt.createLightbox({...t,title:[r.title,t.title,t.date].filter(t=>t).join(" - ")})}}Bt.createLightbox=function(t){const e=new Bt({target:document.body,props:{data:t},intro:!0});return e.$on("destroy",()=>{e.$destroy()}),e.promise};class St extends st{constructor(t){super(),at(this,t,Vt,Ot,c,["items"])}}var Pt=[{title:"TITLE",content:[{title:"TITLE",date:"DD/MM/YYYY",content:"STRING OR STRING[]",link:"HREF",frame:{url:"HREF",title:"TITLE"}}]}];function Yt(e){for(var r,o,i=[{"aria-hidden":"true"},{focusable:"false"},{"data-prefix":"far"},{"data-icon":"file-alt"},{class:"svg-inline--fa fa-file-alt fa-w-12"},{role:"img"},{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 384 512"},e.$$props],l={},c=0;c<i.length;c+=1)l=n(l,i[c]);return{c(){r=y("svg"),o=y("path"),this.h()},l(t){var e=L(r=H(t,"svg",{"aria-hidden":!0,focusable:!0,"data-prefix":!0,"data-icon":!0,class:!0,role:!0,xmlns:!0,viewBox:!0},!0));L(o=H(e,"path",{fill:!0,d:!0},!0)).forEach(b),e.forEach(b),this.h()},h(){C(o,"fill","currentColor"),C(o,"d","M288 248v28c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-28c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm-12 72H108c-6.6 0-12 5.4-12 12v28c0 6.6 5.4 12 12 12h168c6.6 0 12-5.4 12-12v-28c0-6.6-5.4-12-12-12zm108-188.1V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V48C0 21.5 21.5 0 48 0h204.1C264.8 0 277 5.1 286 14.1L369.9 98c9 8.9 14.1 21.2 14.1 33.9zm-128-80V128h76.1L256 51.9zM336 464V176H232c-13.3 0-24-10.7-24-24V48H48v416h288z"),N(r,l)},m(t,n){v(t,r,n),g(r,o),e.svg_binding(r)},p(t,e){N(r,ot(i,[{"aria-hidden":"true"},{focusable:"false"},{"data-prefix":"far"},{"data-icon":"file-alt"},{class:"svg-inline--fa fa-file-alt fa-w-12"},{role:"img"},{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 384 512"},t.$$props&&e.$$props]))},i:t,o:t,d(t){t&&b(r),e.svg_binding(null)}}}function Ft(t,e,r){let{elemRef:o}=e;return t.$set=(t=>{r("$$props",e=n(n({},e),t)),"elemRef"in t&&r("elemRef",o=t.elemRef)}),{elemRef:o,$$props:e,svg_binding:function(t){V[t?"unshift":"push"](()=>{r("elemRef",o=t)})},$$props:e=s(e)}}class Gt extends st{constructor(t){super(),at(this,t,Ft,Yt,c,["elemRef"])}}function qt(e){for(var r,o,i=[{"aria-hidden":"true"},{focusable:"false"},{"data-prefix":"fas"},{"data-icon":"columns"},{class:"svg-inline--fa fa-columns fa-w-16"},{role:"img"},{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 512 512"},e.$$props],l={},c=0;c<i.length;c+=1)l=n(l,i[c]);return{c(){r=y("svg"),o=y("path"),this.h()},l(t){var e=L(r=H(t,"svg",{"aria-hidden":!0,focusable:!0,"data-prefix":!0,"data-icon":!0,class:!0,role:!0,xmlns:!0,viewBox:!0},!0));L(o=H(e,"path",{fill:!0,d:!0},!0)).forEach(b),e.forEach(b),this.h()},h(){C(o,"fill","currentColor"),C(o,"d","M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM224 416H64V160h160v256zm224 0H288V160h160v256z"),N(r,l)},m(t,n){v(t,r,n),g(r,o),e.svg_binding(r)},p(t,e){N(r,ot(i,[{"aria-hidden":"true"},{focusable:"false"},{"data-prefix":"fas"},{"data-icon":"columns"},{class:"svg-inline--fa fa-columns fa-w-16"},{role:"img"},{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 512 512"},t.$$props&&e.$$props]))},i:t,o:t,d(t){t&&b(r),e.svg_binding(null)}}}function Jt(t,e,r){let{elemRef:o}=e;return t.$set=(t=>{r("$$props",e=n(n({},e),t)),"elemRef"in t&&r("elemRef",o=t.elemRef)}),{elemRef:o,$$props:e,svg_binding:function(t){V[t?"unshift":"push"](()=>{r("elemRef",o=t)})},$$props:e=s(e)}}class Kt extends st{constructor(t){super(),at(this,t,Jt,qt,c,["elemRef"])}}function Qt(t,e,n){const r=Object.create(t);return r.data=e[n],r}function Ut(t,e,n){const r=Object.create(t);return r.content=e[n],r}function Wt(t){var e,n;let r=Pt.filter(oe),o=[];for(let e=0;e<r.length;e+=1)o[e]=Zt(Qt(t,r,e));const i=t=>et(o[t],1,1,()=>{o[t]=null});return{c(){e=x("div");for(let t=0;t<o.length;t+=1)o[t].c();C(e,"class","overflowContainer svelte-8pvidv")},m(t,r){v(t,e,r);for(let t=0;t<o.length;t+=1)o[t].m(e,null);n=!0},p(t,n){if(t.siteData){let l;for(r=Pt.filter(oe),l=0;l<r.length;l+=1){const i=Qt(n,r,l);o[l]?(o[l].p(t,i),tt(o[l],1)):(o[l]=Zt(i),o[l].c(),tt(o[l],1),o[l].m(e,null))}for(X(),l=r.length;l<o.length;l+=1)i(l);Z()}},i(t){if(!n){for(let t=0;t<r.length;t+=1)tt(o[t]);n=!0}},o(t){o=o.filter(Boolean);for(let t=0;t<o.length;t+=1)et(o[t]);n=!1},d(t){t&&b(e),w(o,t)}}}function Xt(t){var e,n,r;let o=Pt.filter(ne).map(re).flat(),i=[];for(let e=0;e<o.length;e+=1)i[e]=te(Ut(t,o,e));const l=t=>et(i[t],1,1,()=>{i[t]=null});return{c(){e=x("div"),n=x("div");for(let t=0;t<i.length;t+=1)i[t].c();C(n,"class","boring svelte-8pvidv"),C(e,"class","boringContainer svelte-8pvidv")},m(t,o){v(t,e,o),g(e,n);for(let t=0;t<i.length;t+=1)i[t].m(n,null);r=!0},p(t,e){if(t.siteData){let r;for(o=Pt.filter(ne).map(re).flat(),r=0;r<o.length;r+=1){const l=Ut(e,o,r);i[r]?(i[r].p(t,l),tt(i[r],1)):(i[r]=te(l),i[r].c(),tt(i[r],1),i[r].m(n,null))}for(X(),r=o.length;r<i.length;r+=1)l(r);Z()}},i(t){if(!r){for(let t=0;t<o.length;t+=1)tt(i[t]);r=!0}},o(t){i=i.filter(Boolean);for(let t=0;t<i.length;t+=1)et(i[t]);r=!1},d(t){t&&b(e),w(i,t)}}}function Zt(e){var n,r=new St({props:{items:e.data}});return{c(){r.$$.fragment.c()},m(t,e){it(r,t,e),n=!0},p:t,i(t){n||(tt(r.$$.fragment,t),n=!0)},o(t){et(r.$$.fragment,t),n=!1},d(t){lt(r,t)}}}function te(e){var n,r=new Lt({props:{data:e.content}});return{c(){r.$$.fragment.c()},m(t,e){it(r,t,e),n=!0},p:t,i(t){n||(tt(r.$$.fragment,t),n=!0)},o(t){et(r.$$.fragment,t),n=!1},d(t){lt(r,t)}}}function ee(t){var e,n,r,o,i,l,c,a,s,u,f=t.boring?Gt:Kt;if(f)var d=new f({});var m=[Xt,Wt],p=[];function $(t,e){return e.boring?0:1}return c=$(0,t),a=p[c]=m[c](t),{c(){e=x("div"),n=x("div"),(r=x("h1")).textContent="Generic Cards List Page",o=_(),i=x("div"),d&&d.$$.fragment.c(),l=_(),a.c(),C(i,"class","modeToggle svelte-8pvidv"),C(n,"class","titleBlock gradientAnim svelte-8pvidv"),C(e,"class","container svelte-8pvidv"),u=R(i,"click",t.click_handler)},m(t,a){v(t,e,a),g(e,n),g(n,r),g(n,o),g(n,i),d&&it(d,i,null),g(e,l),p[c].m(e,null),s=!0},p(t,n){if(f!==(f=n.boring?Gt:Kt)){if(d){X();const t=d;et(t.$$.fragment,1,0,()=>{lt(t,1)}),Z()}f?((d=new f({})).$$.fragment.c(),tt(d.$$.fragment,1),it(d,i,null)):d=null}var r=c;(c=$(0,n))===r?p[c].p(t,n):(X(),et(p[r],1,1,()=>{p[r]=null}),Z(),(a=p[c])||(a=p[c]=m[c](n)).c(),tt(a,1),a.m(e,null))},i(t){s||(d&&tt(d.$$.fragment,t),tt(a),s=!0)},o(t){d&&et(d.$$.fragment,t),et(a),s=!1},d(t){t&&b(e),d&&lt(d),p[c].d(),u()}}}const ne=t=>t.content&&t.content.length,re=t=>t.content.map(e=>({...e,title:[t.title,e.title,e.date].filter(t=>t).join(" - ")})),oe=t=>t.content&&t.content.length;function ie(t,e,n){let r=!1;"#boring"===location.hash&&(n("boring",r=!0),location.hash="");return{boring:r,click_handler:()=>n("boring",r=!r)}}return new class extends st{constructor(t){super(),at(this,t,ie,ee,c,[])}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map