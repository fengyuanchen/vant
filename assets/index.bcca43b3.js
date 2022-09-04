import{c as K,e as S,p as j,W as f,F as E,J as N}from"./use-translate.0ff6f26f.js";import{c as O,m as te,w as ae}from"./with-install.8a446ba3.js";import{u as q}from"./use-expose.13900254.js";import{s as L,t as Q,p as R,a as U,g as _,b as ne}from"./utils.90723eb6.js";import{P as X}from"./index.e7be0d0b.js";import{z,C as w,D as C,N as A,q as g,x as y,e as B,A as J}from"./vue-libs.a65f1bfc.js";const[ue]=K("time-picker"),W=z({name:ue,props:S({},L,{minHour:O(0),maxHour:O(23),minMinute:O(0),maxMinute:O(59),modelValue:String}),emits:["confirm","cancel","change","update:modelValue"],setup(t,{emit:s,slots:$}){const d=u=>{const{minHour:e,maxHour:a,maxMinute:n,minMinute:r}=t;u||(u=`${f(e)}:${f(r)}`);let[i,c]=u.split(":");return i=f(E(+i,+e,+a)),c=f(E(+c,+r,+n)),`${i}:${c}`},m=w(),o=w(d(t.modelValue)),P=C(()=>[{type:"hour",range:[+t.minHour,+t.maxHour]},{type:"minute",range:[+t.minMinute,+t.maxMinute]}]),Y=C(()=>P.value.map(({type:u,range:e})=>{let a=Q(e[1]-e[0]+1,n=>f(e[0]+n));return t.filter&&(a=t.filter(u,a)),{type:u,values:a}})),x=C(()=>Y.value.map(u=>({values:u.values.map(e=>t.formatter(u.type,e))}))),k=()=>{const u=o.value.split(":"),e=[t.formatter("hour",u[0]),t.formatter("minute",u[1])];g(()=>{var a;(a=m.value)==null||a.setValues(e)})},D=()=>{const[u,e]=m.value.getIndexes(),[a,n]=Y.value,r=a.values[u]||a.values[0],i=n.values[e]||n.values[0];o.value=d(`${r}:${i}`),k()},V=()=>s("confirm",o.value),I=()=>s("cancel"),F=()=>{D(),g(()=>{g(()=>s("change",o.value))})};return A(()=>{k(),g(D)}),y(x,k),y(()=>[t.filter,t.maxHour,t.minMinute,t.maxMinute],D),y(()=>t.minHour,()=>{g(D)}),y(o,u=>s("update:modelValue",u)),y(()=>t.modelValue,u=>{u=d(u),u!==o.value&&(o.value=u,k())}),q({getPicker:()=>m.value&&U(m.value,D)}),()=>B(X,J({ref:m,columns:x.value,onChange:F,onCancel:I,onConfirm:V},j(t,R)),$)}}),G=new Date().getFullYear(),[oe]=K("date-picker"),Z=z({name:oe,props:S({},L,{type:te("datetime"),modelValue:Date,minDate:{type:Date,default:()=>new Date(G-10,0,1),validator:N},maxDate:{type:Date,default:()=>new Date(G+10,11,31),validator:N}}),emits:["confirm","cancel","change","update:modelValue"],setup(t,{emit:s,slots:$}){const d=e=>{if(N(e)){const a=E(e.getTime(),t.minDate.getTime(),t.maxDate.getTime());return new Date(a)}},m=w(),o=w(d(t.modelValue)),P=(e,a)=>{const n=t[`${e}Date`],r=n.getFullYear();let i=1,c=1,h=0,v=0;return e==="max"&&(i=12,c=_(a.getFullYear(),a.getMonth()+1),h=23,v=59),a.getFullYear()===r&&(i=n.getMonth()+1,a.getMonth()+1===i&&(c=n.getDate(),a.getDate()===c&&(h=n.getHours(),a.getHours()===h&&(v=n.getMinutes())))),{[`${e}Year`]:r,[`${e}Month`]:i,[`${e}Date`]:c,[`${e}Hour`]:h,[`${e}Minute`]:v}},Y=C(()=>{const{maxYear:e,maxDate:a,maxMonth:n,maxHour:r,maxMinute:i}=P("max",o.value||t.minDate),{minYear:c,minDate:h,minMonth:v,minHour:b,minMinute:T}=P("min",o.value||t.minDate);let l=[{type:"year",range:[c,e]},{type:"month",range:[v,n]},{type:"day",range:[h,a]},{type:"hour",range:[b,r]},{type:"minute",range:[T,i]}];switch(t.type){case"date":l=l.slice(0,3);break;case"year-month":l=l.slice(0,2);break;case"month-day":l=l.slice(1,3);break;case"datehour":l=l.slice(0,4);break}if(t.columnsOrder){const M=t.columnsOrder.concat(l.map(H=>H.type));l.sort((H,p)=>M.indexOf(H.type)-M.indexOf(p.type))}return l}),x=C(()=>Y.value.map(({type:e,range:a})=>{let n=Q(a[1]-a[0]+1,r=>f(a[0]+r));return t.filter&&(n=t.filter(e,n)),{type:e,values:n}})),k=C(()=>x.value.map(e=>({values:e.values.map(a=>t.formatter(e.type,a))}))),D=()=>{const e=o.value||t.minDate,{formatter:a}=t,n=x.value.map(r=>{switch(r.type){case"year":return a("year",`${e.getFullYear()}`);case"month":return a("month",f(e.getMonth()+1));case"day":return a("day",f(e.getDate()));case"hour":return a("hour",f(e.getHours()));case"minute":return a("minute",f(e.getMinutes()));default:return""}});g(()=>{var r;(r=m.value)==null||r.setValues(n)})},V=()=>{const{type:e}=t,a=m.value.getIndexes(),n=l=>{let M=0;x.value.forEach((p,ee)=>{l===p.type&&(M=ee)});const{values:H}=x.value[M];return ne(H[a[M]])};let r,i,c;e==="month-day"?(r=(o.value||t.minDate).getFullYear(),i=n("month"),c=n("day")):(r=n("year"),i=n("month"),c=e==="year-month"?1:n("day"));const h=_(r,i);c=c>h?h:c;let v=0,b=0;e==="datehour"&&(v=n("hour")),e==="datetime"&&(v=n("hour"),b=n("minute"));const T=new Date(r,i-1,c,v,b);o.value=d(T)},I=()=>{s("update:modelValue",o.value),s("confirm",o.value)},F=()=>s("cancel"),u=()=>{V(),g(()=>{V(),g(()=>s("change",o.value))})};return A(()=>{D(),g(V)}),y(k,D),y(o,(e,a)=>s("update:modelValue",a?e:null)),y(()=>[t.filter,t.minDate,t.maxDate],()=>{g(V)}),y(()=>t.modelValue,e=>{var a;e=d(e),e&&e.valueOf()!==((a=o.value)==null?void 0:a.valueOf())&&(o.value=e)}),q({getPicker:()=>m.value&&U(m.value,V)}),()=>B(X,J({ref:m,columns:k.value,onChange:u,onCancel:F,onConfirm:I},j(t,R)),$)}}),[re,me]=K("datetime-picker"),ie=Object.keys(W.props),ce=Object.keys(Z.props),le=S({},W.props,Z.props,{modelValue:[String,Date]}),se=z({name:re,props:le,setup(t,{attrs:s,slots:$}){const d=w();return q({getPicker:()=>{var m;return(m=d.value)==null?void 0:m.getPicker()}}),()=>{const m=t.type==="time",o=m?W:Z,P=j(t,m?ie:ce);return B(o,J({ref:d,class:me()},P,s),$)}}}),de=ae(se),xe=de;export{xe as V};
