import{c,r as m,R as e}from"./index-C7SxW6Kd.js";import{a as i}from"./api-BHyjfXVB.js";/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],u=c("circle-check-big",d);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],p=c("circle-x",g);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],E=c("loader-circle",h);function b(){const[t,r]=m.useState({name:"",email:"",message:""}),[a,n]=m.useState(null),l=s=>r({...t,[s.target.name]:s.target.value}),o=async s=>{s.preventDefault(),n("sending");try{await i.postContact(t),n("success"),r({name:"",email:"",message:""})}catch{n("error")}};return e.createElement("div",{className:"bg-white p-6 rounded-lg shadow"},e.createElement("form",{onSubmit:o,className:"space-y-4"},e.createElement("div",null,e.createElement("label",{className:"block text-sm"},"Nom"),e.createElement("input",{name:"name",value:t.name,onChange:l,className:"w-full mt-1 p-2 border rounded focus:ring focus:ring-sky-200",placeholder:"Votre nom complet"})),e.createElement("div",null,e.createElement("label",{className:"block text-sm"},"Email"),e.createElement("input",{name:"email",type:"email",value:t.email,onChange:l,className:"w-full mt-1 p-2 border rounded focus:ring focus:ring-sky-200",placeholder:"exemple@email.com"})),e.createElement("div",null,e.createElement("label",{className:"block text-sm"},"Message"),e.createElement("textarea",{name:"message",value:t.message,onChange:l,className:"w-full mt-1 p-2 border rounded focus:ring focus:ring-sky-200",rows:4,placeholder:"Écrivez votre message ici..."})),e.createElement("div",{className:"flex items-center justify-between"},e.createElement("button",{type:"submit",disabled:a==="sending",className:`px-4 py-2 rounded text-white flex items-center gap-2 ${a==="sending"?"bg-sky-400 cursor-not-allowed":"bg-sky-600 hover:bg-sky-700"}`},a==="sending"&&e.createElement(E,{className:"animate-spin w-4 h-4"}),a==="sending"?"Envoi...":"Envoyer"),a==="sent"&&e.createElement("span",{className:"text-green-600 flex items-center gap-1 text-sm"},e.createElement(u,{className:"w-4 h-4"})," Message envoyé — merci !"),a==="error"&&e.createElement("span",{className:"text-red-600 flex items-center gap-1 text-sm"},e.createElement(p,{className:"w-4 h-4"})," Erreur, réessayez."),a==="invalid"&&e.createElement("span",{className:"text-orange-600 text-sm"},"Email invalide."),a==="missing"&&e.createElement("span",{className:"text-orange-600 text-sm"},"Tous les champs sont requis."))))}export{b as C};
