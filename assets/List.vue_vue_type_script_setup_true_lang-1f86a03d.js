import{d as n,o as l,b as i,a as e,n as s,t as a}from"./index-e323c371.js";const o=["src"],r={class:"w-10/12 text-center"},c={class:"text-xl text-center font-bold text-gray-50"},d={class:"text-xl text-center text-gray-50"},u=n({__name:"List",props:{image:String,title:String,text:String,styles:String},setup(t){return(g,x)=>(l(),i("div",{class:s(` flex-col my-3 w-11/12 flex items-center justify-around p-2 flex-wrap rounded-lg shadow-gray-800 shadow-lg ${t.styles}`)},[e("div",{class:s(`w-10/12 ${t.styles} rounded-md`)},[e("img",{class:"w-full h-full rounded-md object-fill transition duration-500 ease-in-out",src:t.image,alt:"img/png/jpg/svg"},null,8,o)],2),e("div",r,[e("h3",c,a(t.title),1),e("p",d,a(t.text),1)])],2))}});export{u as _};