import{d as c,o as t,c as m,w as e,b as _,t as i,e as u,f as d,g as k,_ as y,a as p}from"./index-eee6c81b.js";const f={key:0},x=c({__name:"Table",props:{data:Array,columns:Array},setup(a){return(n,o)=>{const s=k("a-table");return t(),m(s,{columns:a.columns,"data-source":a.data,bordered:""},{bodyCell:e(({column:r,text:l})=>[r.dataIndex==="name"?(t(),_("a",f,i(l),1)):u("",!0)]),title:e(()=>[d("Header")]),footer:e(()=>[d("Footer")]),_:1},8,["columns","data-source"])}}}),b=c({__name:"independent",setup(a){const n=[{title:"Name",dataIndex:"name"},{title:"Cash Assets",className:"column-money",dataIndex:"money"},{title:"Address",dataIndex:"address"}],o=[{key:"1",name:"John Brown",money:"￥300,000.00",address:"New York No. 1 Lake Park"},{key:"2",name:"Jim Green",money:"￥1,256,000.00",address:"London No. 1 Lake Park"},{key:"3",name:"Joe Black",money:"￥120,000.00",address:"Sidney No. 1 Lake Park"}];return(s,r)=>(t(),m(y,{label:"Mustaqil izlanuvchilar"},{default:e(()=>[p(x,{data:o,columns:n})]),_:1}))}});export{b as default};
