var app=function(){"use strict";function t(){}const n=t=>t;function e(t,n){for(const e in n)t[e]=n[e];return t}function r(t){return t()}function o(){return Object.create(null)}function c(t){t.forEach(r)}function l(t){return"function"==typeof t}function a(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function i(t,n,r){return t[1]?e({},e(n.$$scope.ctx,t[1](r?r(n):{}))):n.$$scope.ctx}const s="undefined"!=typeof window;let u=s?()=>window.performance.now():()=>Date.now(),d=s?t=>requestAnimationFrame(t):t;const f=new Set;let m,p=!1;function $(){f.forEach(t=>{t[0](u())||(f.delete(t),t[1]())}),(p=f.size>0)&&d($)}function h(t,n){t.appendChild(n)}function g(t,n,e){t.insertBefore(n,e||null)}function v(t){t.parentNode.removeChild(t)}function b(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function y(t){return document.createElement(t)}function k(t){return document.createTextNode(t)}function x(){return k(" ")}function _(){return k("")}function w(t,n,e,r){return t.addEventListener(n,e,r),()=>t.removeEventListener(n,e,r)}function E(t,n,e){null==e?t.removeAttribute(n):t.setAttribute(n,e)}function L(t,n){n=""+n,t.data!==n&&(t.data=n)}function N(t,n){const e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,n),e}let T,I=0,C={};function D(t,n,e,r,o,c,l,a=0){const i=16.666/r;let s="{\n";for(let t=0;t<=1;t+=i){const r=n+(e-n)*c(t);s+=100*t+`%{${l(r,1-r)}}\n`}const u=s+`100% {${l(e,1-e)}}\n}`,d=`__svelte_${function(t){let n=5381,e=t.length;for(;e--;)n=(n<<5)-n^t.charCodeAt(e);return n>>>0}(u)}_${a}`;if(!C[d]){if(!m){const t=y("style");document.head.appendChild(t),m=t.sheet}C[d]=!0,m.insertRule(`@keyframes ${d} ${u}`,m.cssRules.length)}const f=t.style.animation||"";return t.style.animation=`${f?`${f}, `:""}${d} ${r}ms linear ${o}ms 1 both`,I+=1,d}function M(t,n){t.style.animation=(t.style.animation||"").split(", ").filter(n?t=>t.indexOf(n)<0:t=>-1===t.indexOf("__svelte")).join(", "),n&&!--I&&d(()=>{if(I)return;let t=m.cssRules.length;for(;t--;)m.deleteRule(t);C={}})}function R(t){T=t}const j=[],A=[],O=[],H=[],S=Promise.resolve();let B,z=!1;function P(t){O.push(t)}function Y(){const t=new Set;do{for(;j.length;){const t=j.shift();R(t),F(t.$$)}for(;A.length;)A.pop()();for(let n=0;n<O.length;n+=1){const e=O[n];t.has(e)||(e(),t.add(e))}O.length=0}while(j.length);for(;H.length;)H.pop()();z=!1}function F(t){t.fragment&&(t.update(t.dirty),c(t.before_update),t.fragment.p(t.dirty,t.ctx),t.dirty=null,t.after_update.forEach(P))}function G(t,n,e){t.dispatchEvent(N(`${n?"intro":"outro"}${e}`))}const q=new Set;let J;function K(){J={r:0,c:[],p:J}}function Q(){J.r||c(J.c),J=J.p}function U(t,n){t&&t.i&&(q.delete(t),t.i(n))}function V(t,n,e,r){if(t&&t.o){if(q.has(t))return;q.add(t),J.c.push(()=>{q.delete(t),r&&(e&&t.d(1),r())}),t.o(n)}}const W={duration:0};function X(e,r,o,a){let i=r(e,o),s=a?0:1,m=null,h=null,g=null;function v(){g&&M(e,g)}function b(t,n){const e=t.b-s;return n*=Math.abs(e),{a:s,b:t.b,d:e,duration:n,start:t.start,end:t.start+n,group:t.group}}function y(r){const{delay:o=0,duration:l=300,easing:a=n,tick:y=t,css:k}=i||W,x={start:u()+o,b:r};r||(x.group=J,J.r+=1),m?h=x:(k&&(v(),g=D(e,s,r,l,o,a,k)),r&&y(0,1),m=b(x,l),P(()=>G(e,r,"start")),function(t){let n;p||(p=!0,d($)),new Promise(e=>{f.add(n=[t,e])})}(t=>{if(h&&t>h.start&&(m=b(h,l),h=null,G(e,m.b,"start"),k&&(v(),g=D(e,s,m.b,m.duration,0,a,i.css))),m)if(t>=m.end)y(s=m.b,1-s),G(e,m.b,"end"),h||(m.b?v():--m.group.r||c(m.group.c)),m=null;else if(t>=m.start){const n=t-m.start;s=m.a+m.d*a(n/m.duration),y(s,1-s)}return!(!m&&!h)}))}return{run(t){l(i)?(B||(B=Promise.resolve()).then(()=>{B=null}),B).then(()=>{i=i(),y(t)}):y(t)},end(){v(),m=h=null}}}function Z(t,n,e){const{fragment:o,on_mount:a,on_destroy:i,after_update:s}=t.$$;o.m(n,e),P(()=>{const n=a.map(r).filter(l);i?i.push(...n):c(n),t.$$.on_mount=[]}),s.forEach(P)}function tt(t,n){t.$$.fragment&&(c(t.$$.on_destroy),t.$$.fragment.d(n),t.$$.on_destroy=t.$$.fragment=null,t.$$.ctx={})}function nt(t,n){t.$$.dirty||(j.push(t),z||(z=!0,S.then(Y)),t.$$.dirty=o()),t.$$.dirty[n]=!0}function et(n,e,r,l,a,i){const s=T;R(n);const u=e.props||{},d=n.$$={fragment:null,ctx:null,props:i,update:t,not_equal:a,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(s?s.$$.context:[]),callbacks:o(),dirty:null};let f=!1;var m;d.ctx=r?r(n,u,(t,e,r=e)=>(d.ctx&&a(d.ctx[t],d.ctx[t]=r)&&(d.bound[t]&&d.bound[t](r),f&&nt(n,t)),e)):u,d.update(),f=!0,c(d.before_update),d.fragment=l(d.ctx),e.target&&(e.hydrate?d.fragment.l((m=e.target,Array.from(m.childNodes))):d.fragment.c(),e.intro&&U(n.$$.fragment),Z(n,e.target,e.anchor),Y()),R(s)}class rt{$destroy(){tt(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}function ot(t){var n,r,o;const c=t.$$slots.default,l=function(t,n,e){if(t){const r=i(t,n,e);return t[0](r)}}(c,t,null);return{c(){n=y("div"),l&&l.c(),E(n,"class","tile gradientBorder svelte-245kjv"),o=w(n,"click",t.click_handler)},l(t){l&&l.l(div_nodes)},m(t,e){g(t,n,e),l&&l.m(n,null),r=!0},p(t,n){l&&l.p&&t.$$scope&&l.p(function(t,n,r,o){return t[1]?e({},e(n.$$scope.changed||{},t[1](o?o(r):{}))):n.$$scope.changed||{}}(c,n,t,null),i(c,n,null))},i(t){r||(U(l,t),r=!0)},o(t){V(l,t),r=!1},d(t){t&&v(n),l&&l.d(t),o()}}}function ct(t,n,e){let{src:r}=n,{$$slots:o={},$$scope:c}=n;return t.$set=(t=>{"src"in t&&e("src",r=t.src),"$$scope"in t&&e("$$scope",c=t.$$scope)}),{src:r,click_handler:function(n){!function(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(t=>t(n))}(t,n)},$$slots:o,$$scope:c}}class lt extends rt{constructor(t){super(),et(this,t,ct,ot,a,["src"])}}function at(t,{delay:n=0,duration:e=400}){const r=+getComputedStyle(t).opacity;return{delay:n,duration:e,css:t=>`opacity: ${t*r}`}}function it(n){var e,r;return{c(){e=y("a"),E(r=y("iframe"),"title",n.title),E(r,"src",n.url),E(r,"class","svelte-17t83rb"),E(e,"href",n.url),E(e,"class","site-thumbnail svelte-17t83rb")},m(t,n){g(t,e,n),h(e,r)},p(t,n){t.title&&E(r,"title",n.title),t.url&&(E(r,"src",n.url),E(e,"href",n.url))},i:t,o:t,d(t){t&&v(e)}}}function st(t,n,e){let{url:r,title:o=""}=n;return t.$set=(t=>{"url"in t&&e("url",r=t.url),"title"in t&&e("title",o=t.title)}),{url:r,title:o}}class ut extends rt{constructor(t){super(),et(this,t,st,it,a,["url","title"])}}function dt(t,n,e){const r=Object.create(t);return r.entry=n[e],r}function ft(t){var n,e,r=t.data.title+"";return{c(){n=y("h1"),e=k(r)},m(t,r){g(t,n,r),h(n,e)},p(t,n){t.data&&r!==(r=n.data.title+"")&&L(e,r)},d(t){t&&v(n)}}}function mt(t){var n,e;function r(t,e){return(null==n||t.data)&&(n=!!Array.isArray(e.data.content)),n?$t:pt}var o=r(null,t),c=o(t);return{c(){c.c(),e=_()},m(t,n){c.m(t,n),g(t,e,n)},p(t,n){o===(o=r(t,n))&&c?c.p(t,n):(c.d(1),(c=o(n))&&(c.c(),c.m(e.parentNode,e)))},d(t){c.d(t),t&&v(e)}}}function pt(t){var n,e=t.data.content+"";return{c(){n=y("p")},m(t,r){g(t,n,r),n.innerHTML=e},p(t,r){t.data&&e!==(e=r.data.content+"")&&(n.innerHTML=e)},d(t){t&&v(n)}}}function $t(t){var n;let e=t.data.content,r=[];for(let n=0;n<e.length;n+=1)r[n]=ht(dt(t,e,n));return{c(){n=y("ul");for(let t=0;t<r.length;t+=1)r[t].c()},m(t,e){g(t,n,e);for(let t=0;t<r.length;t+=1)r[t].m(n,null)},p(t,o){if(t.data){let c;for(e=o.data.content,c=0;c<e.length;c+=1){const l=dt(o,e,c);r[c]?r[c].p(t,l):(r[c]=ht(l),r[c].c(),r[c].m(n,null))}for(;c<r.length;c+=1)r[c].d(1);r.length=e.length}},d(t){t&&v(n),b(r,t)}}}function ht(t){var n,e=t.entry+"";return{c(){n=y("li")},m(t,r){g(t,n,r),n.innerHTML=e},p(t,r){t.data&&e!==(e=r.entry+"")&&(n.innerHTML=e)},d(t){t&&v(n)}}}function gt(t){var n;function e(t,n){return n.commitID?bt:vt}var r=e(0,t),o=r(t);return{c(){o.c(),n=_()},m(t,e){o.m(t,e),g(t,n,e)},p(t,c){r===(r=e(0,c))&&o?o.p(t,c):(o.d(1),(o=r(c))&&(o.c(),o.m(n.parentNode,n)))},d(t){o.d(t),t&&v(n)}}}function vt(t){var n,e,r,o,c;return{c(){n=y("p"),e=k("Link: "),r=y("a"),o=k(t.link),E(r,"href",c=t.data.link)},m(t,c){g(t,n,c),h(n,e),h(n,r),h(r,o)},p(t,n){t.link&&L(o,n.link),t.data&&c!==(c=n.data.link)&&E(r,"href",c)},d(t){t&&v(n)}}}function bt(t){var n,e,r,o,c;return{c(){n=y("p"),e=k("Commit: "),r=y("a"),o=k(t.commitID),E(r,"href",c=t.data.link)},m(t,c){g(t,n,c),h(n,e),h(n,r),h(r,o)},p(t,n){t.commitID&&L(o,n.commitID),t.data&&c!==(c=n.data.link)&&E(r,"href",c)},d(t){t&&v(n)}}}function yt(t){var n,e=new ut({props:{url:t.data.frame.url,title:t.data.frame.title}});return{c(){e.$$.fragment.c()},m(t,r){Z(e,t,r),n=!0},p(t,n){var r={};t.data&&(r.url=n.data.frame.url),t.data&&(r.title=n.data.frame.title),e.$set(r)},i(t){n||(U(e.$$.fragment,t),n=!0)},o(t){V(e.$$.fragment,t),n=!1},d(t){tt(e,t)}}}function kt(t){var n,e,r,o,c,l=t.data.title&&ft(t),a=t.data.content&&mt(t),i=t.data.link&&gt(t),s=t.data.frame&&yt(t);return{c(){l&&l.c(),n=x(),a&&a.c(),e=x(),i&&i.c(),r=x(),s&&s.c(),o=_()},m(t,u){l&&l.m(t,u),g(t,n,u),a&&a.m(t,u),g(t,e,u),i&&i.m(t,u),g(t,r,u),s&&s.m(t,u),g(t,o,u),c=!0},p(t,c){c.data.title?l?l.p(t,c):((l=ft(c)).c(),l.m(n.parentNode,n)):l&&(l.d(1),l=null),c.data.content?a?a.p(t,c):((a=mt(c)).c(),a.m(e.parentNode,e)):a&&(a.d(1),a=null),c.data.link?i?i.p(t,c):((i=gt(c)).c(),i.m(r.parentNode,r)):i&&(i.d(1),i=null),c.data.frame?s?(s.p(t,c),U(s,1)):((s=yt(c)).c(),U(s,1),s.m(o.parentNode,o)):s&&(K(),V(s,1,1,()=>{s=null}),Q())},i(t){c||(U(s),c=!0)},o(t){V(s),c=!1},d(t){l&&l.d(t),t&&v(n),a&&a.d(t),t&&v(e),i&&i.d(t),t&&v(r),s&&s.d(t),t&&v(o)}}}function xt(t,n,e){let{data:r}=n,o="",c="";return t.$set=(t=>{"data"in t&&e("data",r=t.data)}),t.$$.update=((t={data:1,link:1})=>{if(t.data||t.link){e("link",c=(r.link||"").replace(/^https?:\/\//i,""));let t=/^github.com\/.+?\/blob\/(.+?)\//i.exec(c);t&&e("commitID",o=t[1].slice(0,8))}}),{data:r,commitID:o,link:c}}class _t extends rt{constructor(t){super(),et(this,t,xt,kt,a,["data"])}}function wt(t){var n,e,r,o,c,l,a,i=new _t({props:{data:t.data}});return{c(){n=y("div"),e=y("div"),r=x(),o=y("div"),i.$$.fragment.c(),E(e,"class","background svelte-1si5li3"),E(o,"class","content svelte-1si5li3"),E(n,"class","lightbox svelte-1si5li3"),a=w(e,"click",t.close)},m(t,c){g(t,n,c),h(n,e),h(n,r),h(n,o),Z(i,o,null),l=!0},p(t,n){var e={};t.data&&(e.data=n.data),i.$set(e)},i(t){l||(U(i.$$.fragment,t),P(()=>{c||(c=X(n,at,{duration:300},!0)),c.run(1)}),l=!0)},o(t){V(i.$$.fragment,t),c||(c=X(n,at,{duration:300},!1)),c.run(0),l=!1},d(t){t&&v(n),tt(i),t&&c&&c.end(),a()}}}function Et(t,n,e){const r=function(){const t=T;return(n,e)=>{const r=t.$$.callbacks[n];if(r){const o=N(n,e);r.slice().forEach(n=>{n.call(t,o)})}}}();let{data:o}=n;return t.$set=(t=>{"data"in t&&e("data",o=t.data)}),{close:function(){r("destroy")},data:o}}class Lt extends rt{constructor(t){super(),et(this,t,Et,wt,a,["data"])}}function Nt(t,n,e){const r=Object.create(t);return r.item=n[e],r}function Tt(t){var n,e;let r=t.items.content,o=[];for(let n=0;n<r.length;n+=1)o[n]=Mt(Nt(t,r,n));const c=t=>V(o[t],1,1,()=>{o[t]=null});return{c(){for(let t=0;t<o.length;t+=1)o[t].c();n=_()},m(t,r){for(let n=0;n<o.length;n+=1)o[n].m(t,r);g(t,n,r),e=!0},p(t,e){if(t.items){let l;for(r=e.items.content,l=0;l<r.length;l+=1){const c=Nt(e,r,l);o[l]?(o[l].p(t,c),U(o[l],1)):(o[l]=Mt(c),o[l].c(),U(o[l],1),o[l].m(n.parentNode,n))}for(K(),l=r.length;l<o.length;l+=1)c(l);Q()}},i(t){if(!e){for(let t=0;t<r.length;t+=1)U(o[t]);e=!0}},o(t){o=o.filter(Boolean);for(let t=0;t<o.length;t+=1)V(o[t]);e=!1},d(t){b(o,t),t&&v(n)}}}function It(t){var n,e=t.item.title+"";return{c(){n=k(e)},m(t,e){g(t,n,e)},p(t,r){t.items&&e!==(e=r.item.title+"")&&L(n,e)},d(t){t&&v(n)}}}function Ct(t){var n,e,r=t.item.date+"";return{c(){n=y("div"),e=k(r),E(n,"class","subtitle svelte-1o5s72l")},m(t,r){g(t,n,r),h(n,e)},p(t,n){t.items&&r!==(r=n.item.date+"")&&L(e,r)},d(t){t&&v(n)}}}function Dt(t){var n,e,r=t.item.title&&It(t),o=t.item.date&&Ct(t);return{c(){r&&r.c(),n=x(),o&&o.c(),e=_()},m(t,c){r&&r.m(t,c),g(t,n,c),o&&o.m(t,c),g(t,e,c)},p(t,c){c.item.title?r?r.p(t,c):((r=It(c)).c(),r.m(n.parentNode,n)):r&&(r.d(1),r=null),c.item.date?o?o.p(t,c):((o=Ct(c)).c(),o.m(e.parentNode,e)):o&&(o.d(1),o=null)},d(t){r&&r.d(t),t&&v(n),o&&o.d(t),t&&v(e)}}}function Mt(t){var n,e,r;var o=new lt({props:{$$slots:{default:[Dt]},$$scope:{ctx:t}}});return o.$on("click",function(){return t.click_handler(t)}),{c(){n=y("div"),o.$$.fragment.c(),e=x(),E(n,"class","spacer svelte-1o5s72l")},m(t,c){g(t,n,c),Z(o,n,null),h(n,e),r=!0},p(n,e){t=e;var r={};(n.$$scope||n.items)&&(r.$$scope={changed:n,ctx:t}),o.$set(r)},i(t){r||(U(o.$$.fragment,t),r=!0)},o(t){V(o.$$.fragment,t),r=!1},d(t){t&&v(n),tt(o)}}}function Rt(t){var n,e,r,o,c,l,a=t.items.title+"",i=t.items.content&&Tt(t);return{c(){n=y("div"),e=y("div"),r=y("h2"),o=k(a),c=x(),i&&i.c(),E(e,"class","title svelte-1o5s72l"),E(n,"class","filmstrip svelte-1o5s72l")},m(t,a){g(t,n,a),h(n,e),h(e,r),h(r,o),h(n,c),i&&i.m(n,null),l=!0},p(t,e){l&&!t.items||a===(a=e.items.title+"")||L(o,a),e.items.content?i?(i.p(t,e),U(i,1)):((i=Tt(e)).c(),U(i,1),i.m(n,null)):i&&(K(),V(i,1,1,()=>{i=null}),Q())},i(t){l||(U(i),l=!0)},o(t){V(i),l=!1},d(t){t&&v(n),i&&i.d()}}}function jt(t,n,e){let{items:r={title:"",content:[]}}=n;return t.$set=(t=>{"items"in t&&e("items",r=t.items)}),{items:r,click_handler:({item:t})=>Lt.createLightbox({...t,title:[r.title,t.title,t.date].filter(t=>t).join(" - ")})}}Lt.createLightbox=function(t){const n=new Lt({target:document.body,props:{data:t},intro:!0});return n.$on("destroy",()=>{n.$destroy()}),n.promise};class At extends rt{constructor(t){super(),et(this,t,jt,Rt,a,["items"])}}var Ot=[{title:"TITLE",content:[{title:"TITLE",date:"DD/MM/YYYY",content:"STRING OR STRING[]",link:"HREF",frame:{url:"HREF",title:"TITLE"}}]}];function Ht(t,n,e){const r=Object.create(t);return r.data=n[e],r}function St(n){var e,r=new At({props:{items:n.data}});return{c(){r.$$.fragment.c()},m(t,n){Z(r,t,n),e=!0},p:t,i(t){e||(U(r.$$.fragment,t),e=!0)},o(t){V(r.$$.fragment,t),e=!1},d(t){tt(r,t)}}}function Bt(t){var n,e,r,o,c;let l=Ot.filter(zt),a=[];for(let n=0;n<l.length;n+=1)a[n]=St(Ht(t,l,n));const i=t=>V(a[t],1,1,()=>{a[t]=null});return{c(){n=y("div"),(e=y("div")).innerHTML="<h1>Generic Cards List Page</h1>",r=x(),o=y("div");for(let t=0;t<a.length;t+=1)a[t].c();E(e,"class","titleBlock gradientAnim svelte-1odhz5a"),E(o,"class","overflowContainer svelte-1odhz5a"),E(n,"class","container svelte-1odhz5a")},m(t,l){g(t,n,l),h(n,e),h(n,r),h(n,o);for(let t=0;t<a.length;t+=1)a[t].m(o,null);c=!0},p(t,n){if(t.siteData){let e;for(l=Ot.filter(zt),e=0;e<l.length;e+=1){const r=Ht(n,l,e);a[e]?(a[e].p(t,r),U(a[e],1)):(a[e]=St(r),a[e].c(),U(a[e],1),a[e].m(o,null))}for(K(),e=l.length;e<a.length;e+=1)i(e);Q()}},i(t){if(!c){for(let t=0;t<l.length;t+=1)U(a[t]);c=!0}},o(t){a=a.filter(Boolean);for(let t=0;t<a.length;t+=1)V(a[t]);c=!1},d(t){t&&v(n),b(a,t)}}}const zt=t=>t.content&&t.content.length;return new class extends rt{constructor(t){super(),et(this,t,null,Bt,a,[])}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
