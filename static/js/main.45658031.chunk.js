(this["webpackJsonpmahbubur-rahman-turzo-resume"]=this["webpackJsonpmahbubur-rahman-turzo-resume"]||[]).push([[0],{103:function(e,t,a){},366:function(e,t,a){"use strict";a.r(t);var c=a(3),n=a.n(c),s=a(92),i=a.n(s),o=function(e){e&&e instanceof Function&&a.e(5).then(a.bind(null,507)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),c(e),n(e),s(e),i(e)}))},r=(a(103),a(15)),l=a(20),d=a(93),b=a.n(d),m={particles:{number:{value:180,density:{enable:!0}},size:{value:3,random:!0,anim:{speed:4,size_min:.3}},line_linked:{enable:!1},move:{random:!0,speed:1,direction:"bottom",out_mode:"out"}}},j=a(0),u=function(){var e="".lsTheme,t="".lsIcon,a="".lsSnow;try{e=localStorage.getItem("theme"),t=localStorage.getItem("icon"),a=JSON.parse(localStorage.getItem("snow"))}catch(g){console.error("All Cookies blocked - Error: ".concat(g.message))}var n=Object(c.useState)(e||"light"),s=Object(l.a)(n,2),i=s[0],o=s[1],r=Object(c.useState)(t||"bx-moon"),d=Object(l.a)(r,2),u=d[0],h=d[1],x=Object(c.useState)(a),p=Object(l.a)(x,2),O=p[0],_=p[1];Object(c.useEffect)((function(){localStorage.setItem("theme",i),localStorage.setItem("icon",u),localStorage.setItem("snow",O),document.body.classList["dark"===i?"add":"remove"]("dark-theme")}),[i,O,u]);var f=function(){return O&&"dark"===i&&Object(j.jsx)(b.a,{params:m})};return Object(j.jsxs)("div",{className:"home__options",children:["dark"===i&&Object(j.jsx)("i",{className:"bx bx-cloud-snow enable-snow",title:"Activate Snow",id:"snow-button",onClick:function(){return _(!O)}}),Object(j.jsx)(f,{}),Object(j.jsx)("i",{className:"bx ".concat(u," change-theme"),title:"Toggle Theme",id:"theme-button",onClick:function(){o("light"===i?"dark":"light"),h("bx-sun"===u?"bx-moon":"bx-sun")}})]})},h=a.p+"static/media/resume_photo.83879d68.jpg",x=function(e){var t=e.name,a=e.ocupation,c=e.location,n=e.email,s=e.telephone,i=(e.image,e.website),o=e.github,r=e.github_repo_link,l=e.portfolio_direct_site;return Object(j.jsxs)("section",{className:"home",id:"home",children:[Object(j.jsxs)("div",{className:"home__container section bd-grid",children:[Object(j.jsxs)("div",{className:"home__data bd-grid",children:[Object(j.jsx)("img",{src:h,alt:"profile_image",className:"home__img"}),Object(j.jsx)("h1",{className:"home__title",children:Object(j.jsx)("strong",{children:t})}),Object(j.jsx)("h3",{className:"home__profession",children:a})]}),Object(j.jsxs)("div",{className:"home__address bd-grid",children:[Object(j.jsxs)("span",{className:"home__information",children:[Object(j.jsx)("i",{className:"bx bx-map home__icon"})," ",c]}),Object(j.jsxs)("span",{className:"home__information",children:[Object(j.jsx)("i",{className:"bx bx-envelope home__icon"})," ",n]}),Object(j.jsxs)("span",{className:"home__information",children:[Object(j.jsx)("i",{className:"bx bx-phone home__icon"})," ",s]}),Object(j.jsx)("a",{href:l,target:"_blank",rel:"noopener noreferrer",children:Object(j.jsxs)("span",{className:"home__information",children:[Object(j.jsx)("i",{className:"bx bx-globe home__icon"})," ",i]})}),Object(j.jsx)("a",{href:r,target:"_blank",rel:"noopener noreferrer",children:Object(j.jsxs)("span",{className:"home__information",children:[Object(j.jsx)("i",{className:"bx bxl-github home__icon"})," ",o]})})]})]}),Object(j.jsx)(u,{})]})},p=function(e){var t=e.academic;return Object(j.jsxs)("section",{className:"academic-experience section",id:"education",children:[Object(j.jsx)("h2",{className:"section-title",children:"Education"}),Object(j.jsx)("div",{className:"education__container bd-grid",children:t.map((function(e){return Object(j.jsx)(O,Object(r.a)({},e),e.institution)}))})]})},O=function(e){var t=e.career,a=e.date,c=e.institution;return Object(j.jsxs)("div",{className:"education__content",children:[Object(j.jsxs)("div",{className:"education__time",children:[Object(j.jsx)("span",{className:"education__rounder"}),Object(j.jsx)("span",{className:"education__line"})]}),Object(j.jsxs)("div",{className:"education__data bd-grid",children:[Object(j.jsx)("h3",{className:"education__title",children:t}),Object(j.jsx)("span",{className:"education__year",children:a}),Object(j.jsx)("span",{className:"education__studies",children:c})]})]})},_=function(e){e.technicalLabel,e.softLabel,e.technicalSkills,e.softSkills;var t=e.backend,a=e.frontend,c=e.language;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("section",{className:"technical-skills section",id:"skills",children:[Object(j.jsx)("h2",{className:"section-title",children:t.title}),Object(j.jsx)("div",{className:"skills__content bd-grid",children:Object(j.jsx)("ul",{className:"skills__data",children:t.data.map((function(e){return Object(j.jsx)(f,{skill:e},e)}))})})]}),Object(j.jsxs)("section",{className:"soft-skills section",children:[Object(j.jsx)("h2",{className:"section-title",children:a.title}),Object(j.jsx)("div",{className:"skills__content bd-grid",children:Object(j.jsx)("ul",{className:"skills__data",children:a.data.map((function(e){return Object(j.jsx)(f,{skill:e},e)}))})})]}),Object(j.jsxs)("section",{className:"soft-skills section",children:[Object(j.jsx)("h2",{className:"section-title",children:c.title}),Object(j.jsx)("div",{className:"skills__content bd-grid",children:Object(j.jsx)("ul",{className:"skills__data",children:c.data.map((function(e){return Object(j.jsx)(f,{skill:e},e)}))})})]})]})},f=function(e){var t=e.skill;return Object(j.jsxs)("li",{className:"skills__name",children:[Object(j.jsx)("span",{className:"skills__circle"})," ",t]})},g=function(e){var t=e.desc;return Object(j.jsx)("p",{className:"experience__description",children:t})},v={name:"Mahbubur Rahman Turzo",ocupation:"Full Stack Software Engineer",location:"Dhaka, Bangladesh",email:"turzoxpress@gmail.com",telephone:"+880 1834261758",image:"https://avatars.githubusercontent.com/u/5907099?v=4",website:"turzo.org",github:"Turzoxpress",portfolio_direct_site:"https://turzoxpress.github.io/portfolio/",github_repo_link:"https://github.com/Turzoxpress?tab=repositories"},N={label:"Profile",description:"I\u2019m focused on building awesome applications while learning & exploring other technologies."},S={technicalLabel:"Skills",softLabel:"Skills",backend:{title:"Backend",data:["NodeJS - Express","Python - Django","Python - Flask"]},frontend:{title:"Frontend",data:["React","React Native","Android - Java(Android Studio)","iOS - Swift & SwiftUI(XCode)","Game Development - Unity3D","Robotics"]},language:{title:"Language",data:["Python","Javascript","C#","Swift","C","C++","PHP"]},devOps:{title:"DevOps",data:["Amazon Cloud","Google Cloud","Docker","Ubuntu Server","Apache","Load Balancing","Apache Proxy","HA Proxy"]},technicalSkills:["Angular","React","Java","Nodejs","Spring Boot","Nestjs","APIM","SQL","Git"],softSkills:["Capacidad de an\xe1lisis","Resoluci\xf3n de Problemas","Pensamiento Cr\xedtico","Trabajo en equipo","Comunicaci\xf3n","Proactividad","Creatividad","Autodidacta","Mentoria"]},k={label:"SOCIAL",social:[{label:"Turzoxpress",name:"linkedin",url:"https://www.linkedin.com/in/turzoxpress",className:"bxl-linkedin-square"},{label:"Turzoxpress",name:"github",url:"https://github.com/Turzoxpress?tab=repositories",className:"bxl-github"},{label:"MahbuburRahmanTurzo",name:"facebook",url:"https://www.facebook.com/mrturzobd/",className:"bxl-facebook-circle"}]},w={start_time:"2017-07-01T00:00:00.738Z",works:[{title:"Full Stack Software Engineer (Team Lead)",period:"July 2021 - *",company:"Babylon Resources Limited",description:["Develop REST API based backend microservices with NodeJS-Express,Python-Django, MongoDB, MySQL","Develop industry level frontend solutions with React, React Native, Android, iOS.","Maintain Google cloud or Amazon cloud server with Docker.","Configure microservice and frontend with Apache Reverse Proxy or HA Proxy.","Develop Android and iOS with React Native cross-platform framework.","Develop Android and iOS with native language and IDE ie. Java-Android Studio, Swift-SwiftUI-XCode","Maintain team members, review their projects and source codes, mentor them, guide them."]},{title:"Full Stack Software Engineer",period:"March 2019 - June 2021",company:"Babylon Resources Limited",description:["Develop REST API based backend microservices with NodeJS-Express,Python-Django, MongoDB, MySQL","Develop industry level frontend solutions with React, React Native, Android, iOS.","Maintain Google cloud or Amazon cloud server with Docker.","Configure microservice and frontend with Apache Reverse Proxy or HA Proxy.","Develop Android and iOS with React Native cross-platform framework.","Develop Android and iOS with native language and IDE ie. Java-Android Studio, Swift-SwiftUI-XCode"]},{title:"Software Engineer",period:"July 2017 - Feb. 2019",company:"Babylon Resources Limited",description:["*"]}],academic:[{career:"Bachelor of Science(BSc) in Computer Science & Engineering",date:"2016",institution:"Ahsanullah University of Science and Technology"},{career:"Higher Secondary Certificate (GCE A Level equivalent)",date:"2012",institution:"Dhaka City College"},{career:"Secondary School Certificate (GCE O Level equivalent)",date:"2010",institution:"Sonapur Ali Akbar High School"}],proyects:[{name:"Onboarding Digital",company:"Banco de Chile",period:"Nov. 2019 - Ene. 2020",description:["Control, desarrollo, securitizaci\xf3n y despliegue de APIs en plataforma IBM API Connect."]},{name:"Captaci\xf3n Digital",company:"Banco Ripley",period:"Ene. 2020 - Feb. 2020",description:["Control, desarrollo y securitizaci\xf3n de APIs en plataforma IBM API Connect.","Desarrollo frontend en Angular para el consumo de Web Services SOAP/REST apuntando a ambientes DEV/PRE-PROD/PROD como simulaci\xf3n."]},{name:"Agendamiento Remoto",company:"Gobierno de Chile",period:"Mar. 2020 - May. 2020",description:["Desarrollo frontend y mobile con las tecnologias de Angular 6 e Ionic 4 para el agendamiento de horas en centros a lo largo de todo Chile."]},{name:"Altiuz Report Dynamic",company:"Altiuz",period:"Jun. 2020 - Jul. 2020",description:["Desarrollo de servicio Java para la generaci\xf3n unitaria de documentos, sin la necesidad de tener almacenada la informaci\xf3n del mismo en una fuente de datos."]},{name:"Desarrollos Tigo",company:"Computec S.A.S",period:"Ago. 2020 - Dic 2020",description:["Desarrollo Java/Spring Boot de Web Service API REST para consulta y descarga de documentos almacenados en repositorios IBM CMOD.","Desarrollo Java CRON para transferencia de documentos XML hacia servidor SFTP.","Desarrollo Java CRON para carga de documentos PDFs hacia Azure Blob Storage."]}]},y=function(e){e.proyects;return Object(j.jsxs)("section",{className:"proyects-experience section",id:"proyects",children:[Object(j.jsx)("h2",{className:"section-title",children:"Projects"}),Object(j.jsx)("div",{className:"experience__container bd-grid",children:Object(j.jsxs)("div",{children:[Object(j.jsx)("h4",{className:"experience__title",children:"Please visit my website for all projects."}),Object(j.jsx)("a",{href:v.portfolio_direct_site,target:"_blank",rel:"noopener noreferrer",children:Object(j.jsxs)("span",{className:"home__information",children:[Object(j.jsx)("i",{className:"bx bx-globe home__icon"})," ",v.website]})}),Object(j.jsx)("br",{}),Object(j.jsx)("a",{href:v.portfolio_direct_site,target:"_blank",rel:"noopener noreferrer",children:Object(j.jsxs)("span",{className:"home__information",children:[Object(j.jsx)("i",{className:"bx bx-globe home__icon"})," ",v.portfolio_direct_site]})}),Object(j.jsx)("br",{})]})})]})},A=a(43),D=a.n(A),C=function(e){var t=e.works,a=e.start_time,n=0,s=Object(c.useState)(0),i=Object(l.a)(s,2),o=i[0],d=i[1];Object(c.useEffect)((function(){b(a,new Date),d(n)}),[]);var b=function(e,t){var a=t;"now"===a&&(a=new Date);var c=D()(e),s=D()(a),i=(D()(s).diff(c,"days")/365).toFixed(1);return n+=parseFloat(i),i};return Object(j.jsxs)("section",{className:"work-experience section",id:"experience",children:[Object(j.jsx)("h2",{className:"section-title",children:"Experience"}),Object(j.jsxs)("h4",{className:"experience__title",children:["Total Experience : ",Object(j.jsx)("strong",{children:o})," years"]}),Object(j.jsx)("div",{className:"experience__container bd-grid",children:t.map((function(e){return Object(j.jsx)(E,Object(r.a)({},e),e.company)}))})]})},E=function(e){var t=e.title,a=e.period,c=e.company,n=e.description;return Object(j.jsxs)("div",{className:"experience__content",children:[Object(j.jsxs)("div",{className:"experience__time",children:[Object(j.jsx)("span",{className:"experience__rounder"}),Object(j.jsx)("span",{className:"experience__line"})]}),Object(j.jsxs)("div",{className:"experience__data bd-grid",children:[Object(j.jsx)("h3",{className:"experience__title",children:t}),Object(j.jsxs)("span",{className:"experience__company",children:[a," | ",c]}),n.map((function(e,t){return Object(j.jsx)(g,{desc:e},t)}))]})]})},P=function(e){var t=e.label,a=e.social;return Object(j.jsxs)("section",{className:"social section",children:[Object(j.jsx)("h2",{className:"section-title",children:t}),Object(j.jsx)("div",{className:"social__container bd-grid",children:a.map((function(e){return Object(j.jsx)(R,Object(r.a)({},e),e.name)}))})]})},R=function(e){var t=e.label,a=e.url,c=e.className;return Object(j.jsxs)("a",{href:a,target:"_blank",rel:"noreferrer",className:"social__link",children:[Object(j.jsx)("i",{className:"bx ".concat(c," social__icon")})," ",t]})},I=function(e){var t=e.label,a=e.description;return Object(j.jsxs)("section",{className:"profile section",id:"profile",children:[Object(j.jsx)("h2",{className:"section-title",children:t}),Object(j.jsx)("p",{className:"profile__description",children:a})]})},z=a(59),L=a(11),M=function(e){var t=e.menu,a=Object(c.useState)(!1),n=Object(l.a)(a,2),s=n[0],i=n[1],o=function(e){window.location.hash=e.target.hash,i(!s)};return Object(j.jsx)("header",{className:"l-header",id:"header",children:Object(j.jsxs)(z.a,{children:[Object(j.jsx)(L.b,{exact:!0,path:"/",children:Object(j.jsx)(L.a,{to:"/#home"})}),Object(j.jsxs)("nav",{className:"nav bd-container",children:[Object(j.jsx)("span",{className:"nav__logo",children:"Menu"}),Object(j.jsx)("div",{className:s?"nav__menu show-menu":"nav__menu",id:"nav-menu",children:Object(j.jsx)("ul",{className:"nav__list",children:t.map((function(e){var t=e.label,a=e.section,c=e.className;return Object(j.jsx)("li",{className:"nav__item",children:Object(j.jsxs)(z.b,{className:"nav__link",activeClassName:"active-link",onClick:o,to:{pathname:"/",hash:a},isActive:function(e,t){return t.hash===a},children:[Object(j.jsx)("i",{className:"bx ".concat(c," nav__icon")})," ",t]})},t)}))})}),Object(j.jsx)("div",{className:"nav__toggle",id:"nav-toggle",onClick:function(){return i(!s)},children:Object(j.jsx)("i",{className:"bx bx-grid-alt"})})]})]})})},T=a(95),B=function(e){var t=e.name,a=e.ocupation,c=e.description;return Object(j.jsxs)(T.a,{children:[Object(j.jsxs)("title",{children:[t," - ",a]}),Object(j.jsx)("meta",{name:"description",content:c})]})},J={menu:[{label:"Home",section:"#home",className:"bx-home"},{label:"Profile",section:"#profile",className:"bx-user"},{label:"Skills",section:"#skills",className:"bx-receipt"},{label:"Experience",section:"#experience",className:"bx-briefcase-alt"},{label:"Education",section:"#education",className:"bx-book"},{label:"Projects",section:"#proyects",className:"bx-award"}]},F=(a(365),a(91),a(98)),G=a.n(F),U=a.p+"static/media/Mahbubur_Rahman_Turzo_Full_Stack_Software_Engineer.03810b80.pdf",H=function(e){e.downloadResume;return Object(j.jsx)("section",{className:"profile section",id:"profile",children:Object(j.jsx)("a",{href:U,className:"custom_button custom_button_button4",type:"button",target:"_blank",rel:"noopener noreferrer",children:"Download Resume"})})},q=function(e){var t=e.devOps,a=Object(c.useState)(""),n=Object(l.a)(a,2),s=n[0],i=n[1];return Object(c.useEffect)((function(){for(var e="",a=0;a<t.data.length;a++)a<t.data.length-1?e=e+t.data[a]+", ":e+=t.data[a];i(e)}),[]),Object(j.jsxs)("section",{className:"proyects-experience section",id:"proyects",children:[Object(j.jsx)("h2",{className:"section-title",children:"DevOps"}),Object(j.jsx)("div",{className:"experience__container bd-grid",children:Object(j.jsx)("div",{children:Object(j.jsx)("p",{children:s})})})]})},X=function(){var e="(min-width: 968px)",t=Object(c.useState)(window.matchMedia(e).matches),a=Object(l.a)(t,2),n=a[0],s=a[1];Object(c.useEffect)((function(){var t=window.matchMedia(e),a=function(){return s(t.matches)};return t.addEventListener("change",a),function(){return t.removeEventListener("change",a)}}),[n]);var i=v,o=N,d=S,b=k,m=w;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(B,Object(r.a)(Object(r.a)({},i),o)),!n&&Object(j.jsx)(M,Object(r.a)({},J)),Object(j.jsx)("main",{className:"l-main bd-container",id:"bd-container",children:Object(j.jsxs)("div",{className:"resume",id:"area-cv",children:[Object(j.jsxs)("div",{className:"resume__left",children:[Object(j.jsx)(x,Object(r.a)({},i)),Object(j.jsx)(I,Object(r.a)({},o)),Object(j.jsx)(_,Object(r.a)({},d)),Object(j.jsx)(P,Object(r.a)({},b))]}),Object(j.jsxs)("div",{className:"resume__right",children:[Object(j.jsx)(C,Object(r.a)({},m)),Object(j.jsx)(p,Object(r.a)({},m)),Object(j.jsx)(q,Object(r.a)({},d)),Object(j.jsx)(y,Object(r.a)({},m))]})]})}),Object(j.jsx)("div",{className:"custom_button_div",children:Object(j.jsx)(H,{downloadResume:function(){var e=document.getElementById("area-cv");G.a.toBlob(e,{quality:1}).then((function(e){var t=e,a=URL.createObjectURL(t),c=document.createElement("a");c.href=a,c.download=v.name+".pdf",c.click()})).catch((function(e){console.log("Errors : "+e)}))}})})]})};i.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(X,{})}),document.getElementById("root")),o()}},[[366,1,2]]]);
//# sourceMappingURL=main.45658031.chunk.js.map