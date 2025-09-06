import{c as l,r as o,R as e,M as m}from"./index-v_0WwqLa.js";import{a as u}from"./api-BHyjfXVB.js";import{m as c}from"./motion-Dq9D8Zuw.js";import{A as g}from"./index-CX55xQEc.js";/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],x=l("circle-check-big",h);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],E=l("circle-x",y);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],N=l("loader-circle",f);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],b=l("map-pin",v);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],k=l("message-square",w);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],C=l("phone",_);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],z=l("user",M);function I(){const[t,r]=o.useState({name:"",email:"",message:""}),[a,n]=o.useState(null),i=s=>r({...t,[s.target.name]:s.target.value}),d=s=>/\S+@\S+\.\S+/.test(s),p=async s=>{if(s.preventDefault(),!t.name||!t.email||!t.message){n("missing");return}if(!d(t.email)){n("invalid");return}n("sending");try{await u.postContact(t),n("success"),r({name:"",email:"",message:""})}catch{n("error")}};return e.createElement("section",{id:"contact",className:"py-20 bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-900"},e.createElement("div",{className:"container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center"},e.createElement(c.div,{className:"bg-slate-900/80 backdrop-blur-lg border border-white/10 shadow-2xl rounded-2xl p-10 w-full",initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8}},e.createElement("h2",{className:"text-3xl font-bold text-white mb-6"},"Contactez-nous"),e.createElement("form",{onSubmit:p,className:"space-y-6"},e.createElement("div",null,e.createElement("label",{className:"block text-sm font-medium text-slate-300"},"Nom"),e.createElement("div",{className:"relative mt-1"},e.createElement(z,{className:"absolute left-3 top-3 w-4 h-4 text-slate-400"}),e.createElement("input",{name:"name",value:t.name,onChange:i,className:"w-full pl-10 pr-3 py-3 border border-slate-700 rounded-lg bg-slate-800 text-white placeholder-slate-400 focus:ring-2 focus:ring-indigo-500 outline-none",placeholder:"Votre nom complet"}))),e.createElement("div",null,e.createElement("label",{className:"block text-sm font-medium text-slate-300"},"Email"),e.createElement("div",{className:"relative mt-1"},e.createElement(m,{className:"absolute left-3 top-3 w-4 h-4 text-slate-400"}),e.createElement("input",{name:"email",type:"email",value:t.email,onChange:i,className:"w-full pl-10 pr-3 py-3 border border-slate-700 rounded-lg bg-slate-800 text-white placeholder-slate-400 focus:ring-2 focus:ring-indigo-500 outline-none",placeholder:"exemple@email.com"}))),e.createElement("div",null,e.createElement("label",{className:"block text-sm font-medium text-slate-300"},"Message"),e.createElement("div",{className:"relative mt-1"},e.createElement(k,{className:"absolute left-3 top-3 w-4 h-4 text-slate-400"}),e.createElement("textarea",{name:"message",value:t.message,onChange:i,rows:5,className:"w-full pl-10 pr-3 py-3 border border-slate-700 rounded-lg bg-slate-800 text-white placeholder-slate-400 focus:ring-2 focus:ring-indigo-500 outline-none resize-none",placeholder:"Écrivez votre message ici..."}))),e.createElement("button",{type:"submit",disabled:a==="sending",className:`w-full px-6 py-3 rounded-xl text-white font-medium shadow-lg flex items-center justify-center gap-2 transition ${a==="sending"?"bg-indigo-400 cursor-not-allowed":"bg-gradient-to-r from-indigo-600 to-purple-600 hover:scale-105"}`},a==="sending"&&e.createElement(N,{className:"animate-spin w-5 h-5"}),a==="sending"?"Envoi...":"Envoyer"),e.createElement(g,{mode:"wait"},a==="success"&&e.createElement(c.p,{className:"text-green-500 flex items-center gap-2 text-sm mt-2",initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0}},e.createElement(x,{className:"w-4 h-4"})," Message envoyé — merci !"),a==="error"&&e.createElement(c.p,{className:"text-red-500 flex items-center gap-2 text-sm mt-2",initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0}},e.createElement(E,{className:"w-4 h-4"})," Erreur, réessayez."),a==="invalid"&&e.createElement("p",{className:"text-orange-400 text-sm"},"Email invalide."),a==="missing"&&e.createElement("p",{className:"text-orange-400 text-sm"},"Tous les champs sont requis.")))),e.createElement(c.div,{className:"space-y-6 text-slate-300",initial:{opacity:0,x:50},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.8,delay:.2}},e.createElement("h3",{className:"text-2xl font-semibold text-white"},"Nos coordonnées"),e.createElement("p",{className:"text-slate-400"},"Vous pouvez aussi nous écrire ou passer à notre bureau."),e.createElement("div",{className:"space-y-4"},e.createElement("div",{className:"flex items-center gap-3"},e.createElement(b,{className:"w-5 h-5 text-indigo-400"}),e.createElement("span",null,"Cotonou, Bénin")),e.createElement("div",{className:"flex items-center gap-3"},e.createElement(C,{className:"w-5 h-5 text-indigo-400"}),e.createElement("span",null,"+229 61 00 00 00")),e.createElement("div",{className:"flex items-center gap-3"},e.createElement(m,{className:"w-5 h-5 text-indigo-400"}),e.createElement("span",null,"contact@dtech-africa.com"))))))}export{I as default};
