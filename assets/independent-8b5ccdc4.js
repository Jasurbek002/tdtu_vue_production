import{_ as l}from"./Table.vue_vue_type_script_setup_true_lang-1d32803d.js";import{_ as d}from"./Row.vue_vue_type_script_setup_true_lang-3ceabcdb.js";import{d as s,k as r,D as c,c as m,w as u,o as _,g as f,u as p}from"./index-b7ccf87d.js";const I=s({__name:"independent",setup(x){let e=r([{doc_id:1,full_name:"Kamolov Ahmadjon Abduraximovich",job:"Samarqand davalar arxitektura va qurulish inistituti dekan orinbosari",special:"01.04.04 - fizik Elektronika",type:"ds"}]);c.getData("/doctorate").then(a=>{var t,i;e.value=(i=(t=a==null?void 0:a.data)==null?void 0:t.data)==null?void 0:i.filter(o=>o.type==="independet")});const n=[{title:"F.I.O",dataIndex:"full_name"},{title:"Ixtisosligi",className:"column-money",dataIndex:"job"},{title:"Ish Joyi",dataIndex:"special"}];return(a,t)=>(_(),m(d,{label:"Mustaqil izlanuvchilar"},{default:u(()=>[f(l,{class:"w-11/12",data:p(e),columns:n},null,8,["data"])]),_:1}))}});export{I as default};