import{r as a,j as e,e as n,f as o,m as c}from"./index-C6NjAAh1.js";const d="/assets/ui-project-1-YU2jpRqx.jpg",m="/assets/web-project-2-Z5HZlOqa.jpg",r="/assets/mobile-project-2-DQz73pV8.jpg",u="/assets/mobile-project-1--nPcju_C.jpg",g="/assets/web-project-1-BMYp8rOh.jpg",p="/assets/ui-project-2-Dy_D1ZsD.jpg",x={ProjectHeader:{title:"Project Management UI",publishDate:"Jul 26, 2021",tags:"UI / Frontend"},ProjectImages:[{id:1,title:"Kabul Project Management UI",img:d},{id:2,title:"Kabul Project Management UI",img:m},{id:3,title:"Kabul Project Management UI",img:r}],ProjectInfo:{ClientHeading:"About Client",CompanyInfo:[{id:1,title:"Name",details:"Company Ltd"},{id:2,title:"Services",details:"UI Design & Frontend Development"},{id:3,title:"Website",details:"https://company.com"},{id:4,title:"Phone",details:"555 8888 888"}],ObjectivesHeading:"Objective",ObjectivesDetails:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",Technologies:[{title:"Tools & Technologies",techs:["HTML","CSS","JavaScript","Vue.js","TailwindCSS","AdobeXD"]}],ProjectDetailsHeading:"Challenge",ProjectDetails:[{id:1,details:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea."},{id:2,details:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?"},{id:3,details:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?"},{id:4,details:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea."}],SocialSharingHeading:"Share This",SocialSharing:[]},RelatedProject:{title:"Related Projects",Projects:[{id:1,title:"Mobile UI",img:u},{id:2,title:"Web Application",img:g},{id:3,title:"UI Design",img:p},{id:4,title:"Kabul Mobile App UI",img:r}]}},s=a.createContext(),j=({children:i})=>{const[t,l]=a.useState(x);return e.jsx(s.Provider,{value:{singleProjectData:t,setSingleProjectData:l},children:i})},h=()=>{const{singleProjectData:i}=a.useContext(s);return e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12",children:i.ProjectImages.map(t=>e.jsx("div",{className:"mb-10 sm:mb-0",children:e.jsx("img",{src:t.img,className:"rounded-xl cursor-pointer shadow-lg sm:shadow-none",alt:t.title},t.id)},t.id))})},b=()=>{const{singleProjectData:i}=a.useContext(s);return e.jsxs("div",{children:[e.jsx("p",{className:"font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7",children:i.ProjectHeader.title}),e.jsxs("div",{className:"flex",children:[e.jsxs("div",{className:"flex items-center mr-10",children:[e.jsx(n,{className:"text-lg text-ternary-dark dark:text-ternary-light"}),e.jsx("span",{className:"font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light",children:i.ProjectHeader.publishDate})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsx(o,{className:"text-lg text-ternary-dark dark:text-ternary-light"}),e.jsx("span",{className:"font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light",children:i.ProjectHeader.tags})]})]})]})},f=()=>{const{singleProjectData:i}=a.useContext(s);return e.jsxs("div",{className:"block sm:flex gap-0 sm:gap-10 mt-14",children:[e.jsxs("div",{className:"w-full sm:w-1/3 text-left",children:[e.jsxs("div",{className:"mb-7",children:[e.jsx("p",{className:"font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2",children:i.ProjectInfo.ClientHeading}),e.jsx("ul",{className:"leading-loose",children:i.ProjectInfo.CompanyInfo.map(t=>e.jsxs("li",{className:"font-general-regular text-ternary-dark dark:text-ternary-light",children:[e.jsxs("span",{children:[t.title,": "]}),e.jsx("a",{href:"https://stoman.me",className:t.title==="Website"||t.title==="Phone"?"hover:underline hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer duration-300":"","aria-label":"Project Website and Phone",children:t.details})]},t.id))})]}),e.jsxs("div",{className:"mb-7",children:[e.jsx("p",{className:"font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2",children:i.ProjectInfo.ObjectivesHeading}),e.jsx("p",{className:"font-general-regular text-primary-dark dark:text-ternary-light",children:i.ProjectInfo.ObjectivesDetails})]}),e.jsxs("div",{className:"mb-7",children:[e.jsx("p",{className:"font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2",children:i.ProjectInfo.Technologies[0].title}),e.jsx("p",{className:"font-general-regular text-primary-dark dark:text-ternary-light",children:i.ProjectInfo.Technologies[0].techs.join(", ")})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2",children:i.ProjectInfo.SocialSharingHeading}),e.jsx("div",{className:"flex items-center gap-3 mt-5",children:i.ProjectInfo.SocialSharing.map(t=>e.jsx("a",{href:t.url,target:"__blank","aria-label":"Share Project",className:"bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500",children:e.jsx("span",{className:"text-lg lg:text-2xl",children:t.icon})},t.id))})]})]}),e.jsxs("div",{className:"w-full sm:w-2/3 text-left mt-10 sm:mt-0",children:[e.jsx("p",{className:"font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7",children:i.ProjectInfo.ProjectDetailsHeading}),i.ProjectInfo.ProjectDetails.map(t=>e.jsx("p",{className:"font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light",children:t.details},t.id))]})]})},P=()=>{const{singleProjectData:i}=a.useContext(s);return e.jsxs("div",{className:"mt-10 pt-10 sm:pt-14 sm:mt-20 border-t-2 border-primary-light dark:border-secondary-dark",children:[e.jsx("p",{className:"font-general-regular text-primary-dark dark:text-primary-light text-3xl font-bold mb-10 sm:mb-14 text-left",children:i.RelatedProject.title}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-4 gap-10",children:i.RelatedProject.Projects.map(t=>e.jsx("img",{src:t.img,className:"rounded-xl cursor-pointer",alt:t.title},t.id))})]})},y=()=>e.jsx(c.div,{initial:{opacity:0},animate:{opacity:1,delay:1},transition:{ease:"easeInOut",duration:.6,delay:.15},className:"container mx-auto mt-5 sm:mt-10",children:e.jsxs(j,{children:[e.jsx(b,{}),e.jsx(h,{}),e.jsx(f,{}),e.jsx(P,{})]})});export{y as default};
