import{_ as d}from"./Row.vue_vue_type_script_setup_true_lang-775a44b2.js";import{d as i,f as _,k as m,J as u,b as p,w as x,o as t,a,t as o,c as r,i as f,F as h}from"./index-0d0cd573.js";const b={class:"w-11/12 bg-slate-600 rounded-md p-2"},v={class:"text-xl text-center text-white"},g={class:"text-xl text-center text-white"},C=i({__name:"Brm",setup(w){const{id:n}=_().params,e=m({});return u.get(`https://tdtu-server.onrender.com/v1/brm/${n}`).then(s=>{e.value=s.data.data}),console.log(e),(s,k)=>(t(),p(d,{label:e.value.title_en},{default:x(()=>[a("div",b,[a("p",v,o(e.value.text_en),1)]),(t(!0),r(h,null,f(e.value.items,(l,c)=>(t(),r("div",{"data-aos":"fade-down-right",key:c,class:"w-11/12 bg-slate-600 rounded-md p-2 my-3"},[a("p",g,o(l.subtext_en),1)]))),128))]),_:1},8,["label"]))}});export{C as default};
