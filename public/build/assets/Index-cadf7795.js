import{W as u,q as g,j as t,a as e,b as x}from"./app-c2877395.js";import{A as N}from"./AuthenticatedLayout-f21ffa2c.js";import{P as d}from"./PrimaryButton-40b6bb5b.js";import{D as y}from"./DangerButton-b839f183.js";import"./ApplicationLogo-04b5dd4d.js";import"./transition-37384d8f.js";function k({auth:c,subjects:n}){const{data:f,setData:i,post:w,processing:s,reset:a,errors:j,get:o,patch:h}=u({}),{message:l}=g().props,m=r=>{r.preventDefault(),o(route("subject.create"),{onSuccess:()=>a()})},b=r=>{r.preventDefault(),h(route("subject.destroy"),{onSuccess:()=>a()})};return t(N,{user:c.user,header:e("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Subjects"}),children:[e(x,{title:"Subjects"}),l&&e("div",{className:"bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md my-3",role:"alert",children:e("div",{className:"flex",children:e("div",{children:e("p",{className:"text-sm",children:l})})})}),e("div",{className:"py-12",children:e("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:e("div",{className:"bg-white overflow-hidden shadow-sm sm:rounded-lg",children:e("div",{className:"p-7 bg-white border-b border-gray-200",style:{display:"flex",justifyContent:"center",alignItems:"center"},children:t("div",{className:"form",children:[e(d,{className:"mt-4  bg-green-500",style:{textAlign:"center"},disabled:s,onClick:m,children:"Add New Subject"}),e("br",{}),e("br",{}),t("table",{className:"table-fixed w-full",width:"100%",border:1,style:{borderCollapse:"collapse"},children:[e("thead",{children:t("tr",{className:"bg-gray-200",children:[e("th",{className:"px-4 py-2 w-40",children:e("strong",{children:"Subject Code"})}),e("th",{className:"px-4 py-2 w-40",children:e("strong",{children:"Name"})}),e("th",{className:"px-4 py-2 w-40",children:e("strong",{children:"Start Date"})}),e("th",{className:"px-4 py-2 w-40",children:e("strong",{children:"Number of Credits"})}),e("th",{className:"px-4 py-2 w-40",children:e("strong",{children:"Actions"})})]})}),n.map((r,p)=>e("tbody",{children:t("tr",{children:[e("td",{className:"border px-4 py-2",align:"center",children:r.sub_code}),e("td",{className:"border px-4 py-2",align:"center",children:r.sub_name}),e("td",{className:"border px-4 py-2",align:"center",children:r.start_date}),e("td",{className:"border px-4 py-2",align:"center",children:r.credits}),t("td",{className:"border px-4 py-2",align:"center",children:[e("a",{href:route("subject.edit",{sub_code:r.sub_code}),children:e(d,{className:"mt-2 bg-blue-500",children:"Edit"})}),e("form",{onSubmit:b,children:e(y,{className:"mt-1",disabled:s,onClick:()=>{i("sub_code",r.sub_code)},children:"Delete"})})]})]})},p.sub_code))]})]})})})})})]})}export{k as default};