import{c as w}from"./climate-ea5fdc1b.js";import{d as p,f as g,k as v,D as y,o as e,c as s,a as c,g as k,e as o,l as b,t as n,K as D}from"./index-8be0a5e5.js";const z={class:"w-full flex flex-col min-h-[100vh] items-center bg-green-800"},B={key:0,class:"w-10/12 text-center text-2xl font-bold text-white my-10"},C={key:1,class:"w-10/12 text-center text-2xl font-bold text-white my-10"},N={key:2,class:"max-w-[1200px] h-[400px]"},V=["src"],O={key:3,class:"max-w-[1200px] h-[400px]"},S=["src"],j={key:4,class:"text-xl font-normal w-10/12 text-white my-5"},A={key:5,class:"text-xl font-normal w-10/12 text-white my-5"},T=p({__name:"Climate",setup(E){var d;const{id:i}=g().params,t=v({}),l=i.split("-");l.length>1?y.getOneData("brm/data",l[1]).then(a=>{t.value=a.data.data}):t.value=(d=w)==null?void 0:d.find(a=>(a==null?void 0:a.id)==i);const f=()=>{window.history.back()};return(a,K)=>{var r,h,u,m,x,_;return e(),s("div",z,[c("button",{onClick:f,class:"w-[120px] h-[50px] bg-white rounded-md my-5 flex items-center justify-around mr-auto ml-10 text-xl"},[k(o(D)),b(" back ")]),o(l).length<2?(e(),s("h1",B,n((r=t.value)==null?void 0:r.title),1)):(e(),s("h1",C,n((h=t.value)==null?void 0:h.title_uz),1)),o(l).length<2?(e(),s("div",N,[c("img",{class:"w-full h-full rounded shadow-white",src:(u=t.value)==null?void 0:u.image,alt:""},null,8,V)])):(e(),s("div",O,[c("img",{class:"w-full h-full rounded shadow-white",src:`https://api.devnugget.uz/${(m=t.value)==null?void 0:m.brm_image}`,alt:""},null,8,S)])),o(l).length>2?(e(),s("p",j,n((x=t.value)==null?void 0:x.text),1)):(e(),s("p",A,n((_=t.value)==null?void 0:_.text_uz),1))])}}});export{T as default};
