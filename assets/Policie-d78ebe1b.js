import{_ as b}from"./Row.vue_vue_type_script_setup_true_lang-991c9aa5.js";import{c as g}from"./climate-ea5fdc1b.js";import{d as h,k as m,D as v,o as t,b as w,w as r,c as s,h as d,a as u,g as _,l as p,t as f,F as x,m as y}from"./index-7764a801.js";const k=["src"],z=["src"],C=h({__name:"Policie",setup(B){const i=m([]),c=m([]);return i.value=g.slice(16,29),v.getData("/brm/data/all").then(n=>{var o;c.value=(o=n.data.data)==null?void 0:o.filter(a=>a.category==="policies")}),(n,o)=>{const a=y("RouterLink");return t(),w(b,{label:"sustainable policies",styles:"bg-black/40"},{default:r(()=>[(t(!0),s(x,null,d(i.value,(e,l)=>(t(),s("div",{"data-aos":"zoom-in",key:l,class:"w-[450px] bg-white shadow-amber-200 p-3 rounded-md my-5 flex justify-evenly items-center flex-col"},[u("img",{class:"w-full h-[300px]",src:e.image===""?"../../assets/static/brm/item1.jpg":e.image,alt:"image"},null,8,k),_(a,{class:"text-xl hover:text-red-700",to:`/brm/action/view/${e.id}`},{default:r(()=>[p(f(e.title),1)]),_:2},1032,["to"])]))),128)),(t(!0),s(x,null,d(c.value,(e,l)=>(t(),s("div",{"data-aos":"zoom-in",key:l,class:"w-[450px] bg-white shadow-amber-200 p-3 rounded-md my-5 flex justify-evenly items-center flex-col"},[u("img",{class:"w-full h-[300px]",src:`https://science.tdtu.uz/${e.brm_image}`,alt:""},null,8,z),_(a,{class:"text-xl hover:text-red-700",to:`/brm/action/view/${e.brm_id}`},{default:r(()=>[p(f(e.title_uz),1)]),_:2},1032,["to"])]))),128))]),_:1})}}});export{C as default};
