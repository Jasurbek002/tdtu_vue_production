import{_ as l}from"./Table.vue_vue_type_script_setup_true_lang-1d32803d.js";import{_ as r}from"./Row.vue_vue_type_script_setup_true_lang-3ceabcdb.js";import{d,k as c,D as m,c as u,w as _,o as f,g as p,u as k}from"./index-b7ccf87d.js";import{r as x}from"./data-b33ff8b7.js";const D=d({__name:"ds",setup(h){const s=x();let e=c([{doc_id:1,full_name:"Kamolov Ahmadjon Abduraximovich",job:"Samarqand davalar arxitektura va qurulish inistituti dekan orinbosari",special:"01.04.04 - fizik Elektronika",type:"ds"}]);m.getData("/doctorate").then(a=>{var t,o;e.value=(o=(t=a==null?void 0:a.data)==null?void 0:t.data)==null?void 0:o.filter(n=>n.type==="ds")});const i=[{title:"F.I.O",dataIndex:"full_name"},{title:"Ixtisosligi",className:"column-money",dataIndex:"job"},{title:"Ish Joyi",dataIndex:"special"}];return console.log(s.getnews),(a,t)=>(f(),u(r,{label:"DS doktarant"},{default:_(()=>[p(l,{class:"w-11/12",data:k(e),columns:i},null,8,["data"])]),_:1}))}});export{D as default};