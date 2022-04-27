import{c as D,b as N,e as U,u as z,T as $,p as A,K as j,a as q}from"./use-translate.d5447508.js";import{t as y,w as T,n as H}from"./with-install.cb9a7594.js";import{b as K}from"./constant.80c6de18.js";import{A as h,e as a,x as v,D as S,y as M,B as Y,q as G,j as J,v as Q,r as W,o as X,a as Z,w as u,C as e,h as r,t as c,F as ee}from"./vue-libs.84c45047.js";import{c as w,C as te}from"./index.4a885ed5.js";import{u as le}from"./use-expose.fb587d91.js";import{u as ae}from"./use-lazy-render.20e241a7.js";import{I as ue}from"./index.62b8e91e.js";import"./use-route.7c55373a.js";const[P,oe]=D("collapse"),R=Symbol(P),ne={border:y,accordion:Boolean,modelValue:{type:[String,Number,Array],default:""}};var ie=h({name:P,props:ne,emits:["change","update:modelValue"],setup(d,{emit:t,slots:o}){const{linkChildren:p}=N(R),m=l=>{t("change",l),t("update:modelValue",l)};return p({toggle:(l,s)=>{const{accordion:n,modelValue:_}=d;m(n?l===_?"":l:s?_.concat(l):_.filter(b=>b!==l))},isExpanded:l=>{const{accordion:s,modelValue:n}=d;return s?n===l:n.includes(l)}}),()=>{var l;return a("div",{class:[oe(),{[K]:d.border}]},[(l=o.default)==null?void 0:l.call(o)])}}});const g=T(ie),[se,F]=D("collapse-item"),de=["icon","title","value","label","right-icon"],re=U({},w,{name:H,isLink:y,disabled:Boolean,readonly:Boolean,lazyRender:y});var ce=h({name:se,props:re,setup(d,{slots:t}){const o=v(),p=v(),{parent:m,index:x}=z(R);if(!m)return;const E=S(()=>{var i;return(i=d.name)!=null?i:x.value}),l=S(()=>m.isExpanded(E.value)),s=v(l.value),n=ae(()=>s.value||!d.lazyRender),_=()=>{l.value?o.value&&(o.value.style.height=""):s.value=!1};M(l,(i,B)=>{if(B===null)return;i&&(s.value=!0),(i?G:j)(()=>{if(!p.value||!o.value)return;const{offsetHeight:C}=p.value;if(C){const k=`${C}px`;o.value.style.height=i?"0":k,$(()=>{o.value&&(o.value.style.height=i?k:"0")})}else _()})});const b=(i=!l.value)=>{m.toggle(E.value,i)},L=()=>{!d.disabled&&!d.readonly&&b()},O=()=>{const{border:i,disabled:B,readonly:V}=d,C=A(d,Object.keys(w));return V&&(C.isLink=!1),(B||V)&&(C.clickable=!1),a(te,Y({role:"button",class:F("title",{disabled:B,expanded:l.value,borderless:!i}),"aria-expanded":String(l.value),onClick:L},C),A(t,de))},I=n(()=>{var i;return J(a("div",{ref:o,class:F("wrapper"),onTransitionend:_},[a("div",{ref:p,class:F("content")},[(i=t.default)==null?void 0:i.call(t)])]),[[Q,s.value]])});return le({toggle:b}),()=>a("div",{class:[F({border:x.value&&d.border})]},[O(),I()])}});const f=T(ce);const Be=h({setup(d){const t=q({"zh-CN":{text1:"\u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C\u3002",text2:"\u6280\u672F\u65E0\u975E\u5C31\u662F\u90A3\u4E9B\u5F00\u53D1\u5B83\u7684\u4EBA\u7684\u5171\u540C\u7075\u9B42\u3002",text3:"\u5728\u4EE3\u7801\u9605\u8BFB\u8FC7\u7A0B\u4E2D\u4EBA\u4EEC\u8BF4\u810F\u8BDD\u7684\u9891\u7387\u662F\u8861\u91CF\u4EE3\u7801\u8D28\u91CF\u7684\u552F\u4E00\u6807\u51C6\u3002",accordion:"\u624B\u98CE\u7434",titleSlot:"\u81EA\u5B9A\u4E49\u6807\u9898\u5185\u5BB9"},"en-US":{text1:"Content 1",text2:"Content 2",text3:"Content 3",accordion:"Accordion",titleSlot:"Custom title"}}),o=v([0]),p=v(0),m=v([]),x=v([]);return(E,l)=>{const s=W("demo-block");return X(),Z(ee,null,[a(s,{title:e(t)("basicUsage")},{default:u(()=>[a(e(g),{modelValue:o.value,"onUpdate:modelValue":l[0]||(l[0]=n=>o.value=n)},{default:u(()=>[a(e(f),{title:e(t)("title")+1},{default:u(()=>[r(c(e(t)("text1")),1)]),_:1},8,["title"]),a(e(f),{title:e(t)("title")+2},{default:u(()=>[r(c(e(t)("text2")),1)]),_:1},8,["title"]),a(e(f),{title:e(t)("title")+3},{default:u(()=>[r(c(e(t)("text3")),1)]),_:1},8,["title"])]),_:1},8,["modelValue"])]),_:1},8,["title"]),a(s,{title:e(t)("accordion")},{default:u(()=>[a(e(g),{modelValue:p.value,"onUpdate:modelValue":l[1]||(l[1]=n=>p.value=n),accordion:""},{default:u(()=>[a(e(f),{title:e(t)("title")+1},{default:u(()=>[r(c(e(t)("text1")),1)]),_:1},8,["title"]),a(e(f),{title:e(t)("title")+2},{default:u(()=>[r(c(e(t)("text2")),1)]),_:1},8,["title"]),a(e(f),{title:e(t)("title")+3},{default:u(()=>[r(c(e(t)("text3")),1)]),_:1},8,["title"])]),_:1},8,["modelValue"])]),_:1},8,["title"]),a(s,{title:e(t)("disabled")},{default:u(()=>[a(e(g),{modelValue:m.value,"onUpdate:modelValue":l[2]||(l[2]=n=>m.value=n)},{default:u(()=>[a(e(f),{title:e(t)("title")+1},{default:u(()=>[r(c(e(t)("text1")),1)]),_:1},8,["title"]),a(e(f),{title:e(t)("title")+2,disabled:""},{default:u(()=>[r(c(e(t)("text2")),1)]),_:1},8,["title"]),a(e(f),{title:e(t)("title")+3,disabled:""},{default:u(()=>[r(c(e(t)("text3")),1)]),_:1},8,["title"])]),_:1},8,["modelValue"])]),_:1},8,["title"]),a(s,{title:e(t)("titleSlot")},{default:u(()=>[a(e(g),{modelValue:x.value,"onUpdate:modelValue":l[3]||(l[3]=n=>x.value=n)},{default:u(()=>[a(e(f),null,{title:u(()=>[r(c(e(t)("title")+1),1),a(e(ue),{name:"question-o"})]),default:u(()=>[r(" "+c(e(t)("text1")),1)]),_:1}),a(e(f),{title:e(t)("title")+2,value:e(t)("content"),icon:"shop-o"},{default:u(()=>[r(c(e(t)("text2")),1)]),_:1},8,["title","value"])]),_:1},8,["modelValue"])]),_:1},8,["title"])],64)}}});export{Be as default};