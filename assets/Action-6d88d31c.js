import{_ as b}from"./Row.vue_vue_type_script_setup_true_lang-e4b9052c.js";import{c as h}from"./climate-ea5fdc1b.js";import{d as g,k as m,D as v,o as t,b as w,w as l,c as s,h as d,a as u,g as _,l as f,t as p,F as x,m as y}from"./index-450de636.js";const k=["src"],z=["src"],C=g({__name:"Action",setup(B){const c=m([]),i=m([]);return c.value=h.slice(0,16),v.getData("/brm/data/all").then(n=>{var o;i.value=(o=n.data.data)==null?void 0:o.filter(a=>a.category==="action")}),(n,o)=>{const a=y("RouterLink");return t(),w(b,{label:"Sustainable action",styles:"bg-black/40"},{default:l(()=>[(t(!0),s(x,null,d(c.value,(e,r)=>(t(),s("div",{"data-aos":"zoom-in",key:r,class:"w-[450px] bg-white shadow-amber-200 p-3 rounded-md my-5 flex justify-evenly items-center flex-col"},[u("img",{class:"w-full h-[300px]",src:e.image===""?"../../assets/static/brm/item1.jpg":e.image,alt:""},null,8,k),_(a,{class:"text-xl hover:text-red-700",to:`/brm/action/view/${e.id}`},{default:l(()=>[f(p(e.title),1)]),_:2},1032,["to"])]))),128)),(t(!0),s(x,null,d(i.value,(e,r)=>(t(),s("div",{"data-aos":"zoom-in",key:r,class:"w-[450px] bg-white shadow-amber-200 p-3 rounded-md my-5 flex justify-evenly items-center flex-col"},[u("img",{class:"w-full h-[300px]",src:`https://science.tdtu.uz/${e.brm_image}`,alt:""},null,8,z),_(a,{class:"text-xl hover:text-red-700",to:`/brm/action/view/${e.brm_id}`},{default:l(()=>[f(p(e.title_uz),1)]),_:2},1032,["to"])]))),128))]),_:1})}}});export{C as default};