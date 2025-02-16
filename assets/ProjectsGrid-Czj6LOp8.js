import{j as t,m as h,r as o}from"./index-Dw-H_2-A.js";const m=({title:i,category:r,image:n})=>t.jsx(h.div,{initial:{opacity:0},animate:{opacity:1,delay:1},transition:{ease:"easeInOut",duration:.7,delay:.15},children:t.jsxs("div",{className:"rounded-xl shadow-lg hover:shadow-xl mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark",children:[t.jsx("div",{children:t.jsx("img",{src:n,className:"rounded-t-xl border-none aspect-[3/2] object-cover",alt:"Single Project"})}),t.jsxs("div",{className:"px-4 py-6 min-h-[200px]",children:[t.jsx("p",{className:"text-center font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2",children:i}),t.jsx("span",{className:"text-lg text-ternary-dark dark:text-ternary-light text-justify",children:r})]})]})}),p="/assets/001-Bh5WUhT-.png",x="/assets/002-DsVeVh-n.png",j="/assets/003-CRor6iyT.png",v="/assets/004-CwD4Ketv.png",P="/assets/pexels-166053248-10901316-DwP3tGI2.jpg",k="/assets/005-DDTPCaba.png",b=[{id:1,title:"Fast & Convenient Mobile Diesel Truck Repair",category:"Pointwest Diesel brings the repair shop to you! Our mobile service team is ready to tackle any repair, from roadside emergencies to scheduled on-site fixes, ensuring quick, reliable solutions no matter where you are.",img:p},{id:2,title:"In-House Repair Shop for All Your Diesel Truck Needs",category:"If your truck requires more in-depth repairs, our repair shop is ready to handle everything from engine repairs to general maintenance. With experienced technicians and the right tools, we get your truck back in shape quickly.",img:x},{id:3,title:"Affordable Diesel Truck Repairs",category:"Get quality repairs at prices you can trust. Whether you’re using our mobile services or visiting our shop, we offer affordable solutions to keep your truck in top condition without breaking the bank.",img:j},{id:4,title:"Rapid Response & Maximum Uptime",category:"We pride ourselves on fast service. Whether you need us to come to you or you visit our shop, Pointwest Diesel ensures minimal downtime so you can keep your trucks on the move with confidence.",img:v},{id:5,title:"Open 24/7 - Always Ready, Anytime",category:"Truck breakdowns don’t wait for business hours. Pointwest Diesel is available 24/7 for both emergency mobile repairs and in-house services, so you’re never stranded—day or night.",img:P},{id:6,title:"Fleet Maintenance & Emergency Service",category:"Pointwest Diesel doesn’t just fix trucks; we help maintain your fleet’s performance. With our preventative maintenance and emergency repair services, we ensure your vehicles stay on the road longer and perform at their best.",img:k}],g=o.createContext(),w=i=>{const[r,n]=o.useState(b),[a,c]=o.useState(""),[l,d]=o.useState(""),e=r.filter(s=>s.title.toLowerCase().includes(a.toLowerCase())||a===""?s:""),u=r.filter(s=>(s.category.charAt(0).toUpperCase()+s.category.slice(1)).includes(l));return t.jsx(g.Provider,{value:{projects:r,setProjects:n,searchProject:a,setSearchProject:c,searchProjectsByTitle:e,selectProject:l,setSelectProject:d,selectProjectsByCategory:u},children:i.children})},D=()=>{const{projects:i,searchProject:r,setSearchProject:n,searchProjectsByTitle:a,selectProject:c,setSelectProject:l,selectProjectsByCategory:d}=o.useContext(g);return t.jsxs("section",{className:"py-5 sm:py-10 mt-5 sm:mt-10",children:[t.jsx("div",{className:"text-center",children:t.jsx("p",{className:"font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light",children:"Our Services"})}),t.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 mt-10 sm:gap-10 lg:gap-30",children:c?d.map(e=>t.jsx(m,{title:e.title,category:e.category,image:e.img},e.id)):r?a.map(e=>t.jsx(m,{title:e.title,category:e.category,image:e.img},e.id)):i.map(e=>t.jsx(m,{title:e.title,category:e.category,image:e.img},e.id))})]})};export{w as P,D as a};
