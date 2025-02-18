import{j as e,F as m,b as o,c as x,B as c,m as u}from"./index-DCVKiLat.js";const p=[{id:1,name:"Your Address, Your City, Your Country",icon:e.jsx(m,{})},{id:2,name:"email@domain.com",icon:e.jsx(o,{})},{id:3,name:"555 8888 888",icon:e.jsx(x,{})}],g=()=>e.jsx("div",{className:"w-full lg:w-1/2",children:e.jsxs("div",{className:"text-left max-w-xl px-6",children:[e.jsx("h2",{className:"font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8",children:"Contact details"}),e.jsx("ul",{className:"font-general-regular",children:p.map(a=>e.jsxs("li",{className:"flex ",children:[e.jsx("i",{className:"text-2xl text-gray-500 dark:text-gray-400 mr-4",children:a.icon}),e.jsx("span",{className:"text-lg mb-4 text-ternary-dark dark:text-ternary-light",children:a.name})]},a.id))})]})}),r=({inputLabel:a,labelFor:t,inputType:l,inputId:i,inputName:s,placeholderText:n,ariaLabelName:d})=>e.jsxs("div",{className:"font-general-regular mb-4",children:[e.jsx("label",{className:"block text-lg text-primary-dark dark:text-primary-light mb-1",htmlFor:t,children:a}),e.jsx("input",{className:"w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md",type:l,id:i,name:s,placeholder:n,"aria-label":d,required:!0})]}),b=()=>e.jsx("div",{className:"w-full lg:w-1/2",children:e.jsx("div",{className:"leading-loose",children:e.jsxs("form",{onSubmit:a=>{a.preventDefault()},className:"max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left",children:[e.jsx("p",{className:"font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8",children:"Contact Form"}),e.jsx(r,{inputLabel:"Full Name",labelFor:"name",inputType:"text",inputId:"name",inputName:"name",placeholderText:"Your Name",ariaLabelName:"Name"}),e.jsx(r,{inputLabel:"Email",labelFor:"email",inputType:"email",inputId:"email",inputName:"email",placeholderText:"Your email",ariaLabelName:"Email"}),e.jsx(r,{inputLabel:"Subject",labelFor:"subject",inputType:"text",inputId:"subject",inputName:"subject",placeholderText:"Subject",ariaLabelName:"Subject"}),e.jsxs("div",{className:"mt-6",children:[e.jsx("label",{className:"block text-lg text-primary-dark dark:text-primary-light mb-2",htmlFor:"message",children:"Message"}),e.jsx("textarea",{className:"w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md",id:"message",name:"message",cols:"14",rows:"6","aria-label":"Message"})]}),e.jsx("div",{className:"font-general-medium w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500",children:e.jsx(c,{title:"Send Message",type:"submit","aria-label":"Send Message"})})]})})}),h=()=>e.jsxs(u.div,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.5,delay:.1},className:"container mx-auto flex flex-col-reverse lg:flex-row py-5 lg:py-10 lg:mt-10",children:[e.jsx(b,{}),e.jsx(g,{})]});export{h as default};
