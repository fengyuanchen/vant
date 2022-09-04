import{u as _,b as k,V as I}from"./index.a91d3dd2.js";import{c as N,M as A,n as D,r as F,O as $,a as q}from"./use-translate.0ff6f26f.js";import{c as z,m as M,t as H,w as O}from"./with-install.8a446ba3.js";import{u as Z}from"./use-expose.13900254.js";import{L as j}from"./index.7464c8e4.js";import{z as P,C as p,x as E,Z as G,N as J,e as a,q as K,o as g,c as x,w as f,B as n,a as C,b as B,F as L}from"./vue-libs.a65f1bfc.js";import{V as R}from"./index.71212820.js";import{V as Q}from"./index.5961221b.js";import"./use-id.8a05d67e.js";import"./use-route.985ba6da.js";import"./index.d41c2225.js";import"./use-touch.ffb74f5c.js";import"./on-popup-reopen.76ccb88c.js";import"./constant.80c6de18.js";import"./interceptor.755576c9.js";import"./use-refs.9d0b72bf.js";import"./index.04948286.js";import"./index.d1116377.js";const[W,h,X]=N("list"),Y={error:Boolean,offset:z(300),loading:Boolean,finished:Boolean,errorText:String,direction:M("down"),loadingText:String,finishedText:String,immediateCheck:H},ee=P({name:W,props:Y,emits:["load","update:error","update:loading"],setup(i,{emit:l,slots:t}){const s=p(!1),c=p(),u=p(),e=_(),r=A(c),d=()=>{K(()=>{if(s.value||i.finished||i.error||(e==null?void 0:e.value)===!1)return;const{offset:o,direction:v}=i,m=F(r);if(!m.height||$(c))return;let T=!1;const b=F(u);v==="up"?T=m.top-b.top<=o:T=b.bottom-m.bottom<=o,T&&(s.value=!0,l("update:loading",!0),l("load"))})},U=()=>{if(i.finished){const o=t.finished?t.finished():i.finishedText;if(o)return a("div",{class:h("finished-text")},[o])}},w=()=>{l("update:error",!1),d()},S=()=>{if(i.error){const o=t.error?t.error():i.errorText;if(o)return a("div",{role:"button",class:h("error-text"),tabindex:0,onClick:w},[o])}},y=()=>{if(s.value&&!i.finished)return a("div",{class:h("loading")},[t.loading?t.loading():a(j,{class:h("loading-icon")},{default:()=>[i.loadingText||X("loading")]})])};return E(()=>[i.loading,i.finished,i.error],d),e&&E(e,o=>{o&&d()}),G(()=>{s.value=i.loading}),J(()=>{i.immediateCheck&&d()}),Z({check:d}),D("scroll",d,{target:r,passive:!0}),()=>{var m;const o=(m=t.default)==null?void 0:m.call(t),v=a("div",{ref:u,class:h("placeholder")},null);return a("div",{ref:c,role:"feed",class:h(),"aria-busy":s.value},[i.direction==="down"?o:v,y(),U(),S(),i.direction==="up"?o:v])}}}),te=O(ee),V=te,ke=P({__name:"index",setup(i){const l=q({"zh-CN":{errorInfo:"\u9519\u8BEF\u63D0\u793A",errorText:"\u8BF7\u6C42\u5931\u8D25\uFF0C\u70B9\u51FB\u91CD\u65B0\u52A0\u8F7D",pullRefresh:"\u4E0B\u62C9\u5237\u65B0",finishedText:"\u6CA1\u6709\u66F4\u591A\u4E86"},"en-US":{errorInfo:"Error Info",errorText:"Request failed. Click to reload",pullRefresh:"PullRefresh",finishedText:"Finished"}}),t=p([{items:[],refreshing:!1,loading:!1,error:!1,finished:!1},{items:[],refreshing:!1,loading:!1,error:!1,finished:!1},{items:[],refreshing:!1,loading:!1,error:!1,finished:!1}]),s=u=>{const e=t.value[u];e.loading=!0,setTimeout(()=>{e.refreshing&&(e.items=[],e.refreshing=!1);for(let r=0;r<10;r++){const d=e.items.length+1;e.items.push(d<10?"0"+d:String(d))}e.loading=!1,e.refreshing=!1,u===1&&e.items.length===10&&!e.error?e.error=!0:e.error=!1,e.items.length>=40&&(e.finished=!0)},1e3)},c=u=>{t.value[u].finished=!1,s(u)};return(u,e)=>(g(),x(n(I),null,{default:f(()=>[a(n(k),{title:n(l)("basicUsage")},{default:f(()=>[a(n(V),{loading:t.value[0].loading,"onUpdate:loading":e[0]||(e[0]=r=>t.value[0].loading=r),finished:t.value[0].finished,"finished-text":n(l)("finishedText"),onLoad:e[1]||(e[1]=r=>s(0))},{default:f(()=>[(g(!0),C(L,null,B(t.value[0].items,r=>(g(),x(n(R),{key:r,title:r},null,8,["title"]))),128))]),_:1},8,["loading","finished","finished-text"])]),_:1},8,["title"]),a(n(k),{title:n(l)("errorInfo")},{default:f(()=>[a(n(V),{loading:t.value[1].loading,"onUpdate:loading":e[2]||(e[2]=r=>t.value[1].loading=r),error:t.value[1].error,"onUpdate:error":e[3]||(e[3]=r=>t.value[1].error=r),finished:t.value[1].finished,"error-text":n(l)("errorText"),onLoad:e[4]||(e[4]=r=>s(1))},{default:f(()=>[(g(!0),C(L,null,B(t.value[1].items,r=>(g(),x(n(R),{key:r,title:r},null,8,["title"]))),128))]),_:1},8,["loading","error","finished","error-text"])]),_:1},8,["title"]),a(n(k),{title:n(l)("pullRefresh")},{default:f(()=>[a(n(Q),{modelValue:t.value[2].refreshing,"onUpdate:modelValue":e[7]||(e[7]=r=>t.value[2].refreshing=r),onRefresh:e[8]||(e[8]=r=>c(2))},{default:f(()=>[a(n(V),{loading:t.value[2].loading,"onUpdate:loading":e[5]||(e[5]=r=>t.value[2].loading=r),finished:t.value[2].finished,"finished-text":n(l)("finishedText"),onLoad:e[6]||(e[6]=r=>s(2))},{default:f(()=>[(g(!0),C(L,null,B(t.value[2].items,r=>(g(),x(n(R),{key:r,title:r},null,8,["title"]))),128))]),_:1},8,["loading","finished","finished-text"])]),_:1},8,["modelValue"])]),_:1},8,["title"])]),_:1}))}});export{ke as default};
