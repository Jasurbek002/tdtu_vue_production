import{_ as r}from"./Table.vue_vue_type_script_setup_true_lang-20aca6d7.js";import{_ as l}from"./Row.vue_vue_type_script_setup_true_lang-e4b9052c.js";import{d,k as c,D as m,o as _,b as u,w as f,g as p,e as x}from"./index-450de636.js";import{r as h}from"./data-92ea73ee.js";const j=d({__name:"intern",setup(k){const i=h();let e=c([{doc_id:1,full_name:"Kamolov Ahmadjon Abduraximovich",job:"Samarqand davalar arxitektura va qurulish inistituti dekan orinbosari",special:"01.04.04 - fizik Elektronika",type:"ds"}]);m.getData("/doctorate").then(a=>{var t,o;e.value=(o=(t=a==null?void 0:a.data)==null?void 0:t.data)==null?void 0:o.filter(s=>s.type==="intern")});const n=[{title:"F.I.O",dataIndex:"full_name"},{title:"Ixtisosligi",className:"column-money",dataIndex:"job"},{title:"Ish Joyi",dataIndex:"special"}];return console.log(i.getnews),(a,t)=>(_(),u(l,{label:"Stajor tadqiqotchi"},{default:f(()=>[p(r,{class:"w-11/12",data:x(e),columns:n},null,8,["data"])]),_:1}))}});export{j as default};