import{d,o as u,c as m,a as e,t as _,r as p,n as x,u as h,b as g,w as i,e as l,f as w,g as b}from"./index-b4f090a6.js";import{_ as y}from"./Col.vue_vue_type_script_setup_true_lang-43604fdf.js";const S={"data-aos":"flip-left",class:"text-2xl py-5 w-2/3 text-center text-grenn font-bold uppercase"},$=d({__name:"Wrapper",props:{label:String,styles:String},setup(t){return(s,f)=>(u(),m("div",{class:x(`w-full flex items-center flex-col ${t.styles}`)},[e("h1",S,_(t.label),1),p(s.$slots,"default")],2))}}),k={class:"w-10/12 h-[600px] rounded-md my-4"},B=["src"],C={class:"w-10/12 text-xl text-start text-black"},z=d({__name:"More",setup(t){var o;const s=w(),a=h().getOneNews(+((o=s.params)==null?void 0:o.id));return(N,v)=>{var r;return u(),g($,{label:(r=l(a))==null?void 0:r.title,styles:"bg-white"},{default:i(()=>[b(y,null,{default:i(()=>{var n,c;return[e("div",k,[e("img",{class:"w-full h-full rounded-md",src:(n=l(a))==null?void 0:n.img,alt:"img"},null,8,B)]),e("p",C,_((c=l(a))==null?void 0:c.text),1)]}),_:1})]),_:1},8,["label"])}}});export{z as default};
