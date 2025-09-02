import{c as s,R as e}from"./index-C7SxW6Kd.js";import{m as n}from"./motion-Caiw6KXt.js";import{C as o,B as i,a as r}from"./cpu-CDML0bDn.js";/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],c=s("database",l),m=[{title:"Développement Web",description:"Création de sites web modernes et performants adaptés à vos besoins.",icon:e.createElement(o,{className:"w-8 h-8 text-indigo-600"})},{title:"Data & IA",description:"Analyse de données et solutions intelligentes pour booster votre business.",icon:e.createElement(c,{className:"w-8 h-8 text-indigo-600"})},{title:"Formations",description:"Cours en ligne et en présentiel pour former vos équipes et étudiants.",icon:e.createElement(i,{className:"w-8 h-8 text-indigo-600"})},{title:"Conseil & Mentorat",description:"Accompagnement sur vos projets numériques et mentoring personnalisé.",icon:e.createElement(r,{className:"w-8 h-8 text-indigo-600"})}];function g(){return e.createElement("section",{className:"relative py-16"},e.createElement("div",{className:"absolute inset-0 -z-10 overflow-hidden"},e.createElement("div",{className:"w-full h-full bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 animate-gradient-slow opacity-40"})),e.createElement("div",{className:"container mx-auto px-6"},e.createElement("header",{className:"text-center mb-12"},e.createElement("h2",{className:"text-4xl font-bold text-slate-800"},"Nos services"),e.createElement("p",{className:"text-slate-600 mt-2 max-w-xl mx-auto"},"Découvrez nos offres pour entreprises et apprenants, adaptées à vos besoins numériques.")),e.createElement("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"},m.map((t,a)=>e.createElement(n.div,{key:a,className:"bg-white p-6 rounded-xl shadow hover:shadow-lg hover:-translate-y-2 transition-transform duration-300 cursor-pointer relative z-10",initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:a*.1}},e.createElement("div",{className:"mb-4"},t.icon),e.createElement("h3",{className:"text-xl font-semibold mb-2"},t.title),e.createElement("p",{className:"text-slate-600 text-sm"},t.description))))),e.createElement("style",null,`
          @keyframes gradientSlow {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient-slow {
            background-size: 400% 400%;
            animation: gradientSlow 25s ease infinite;
          }
        `))}export{g as default};
