var v=(t,s,e)=>{if(!s.has(t))throw TypeError("Cannot "+e)};var r=(t,s,e)=>(v(t,s,"read from private field"),e?e.call(t):s.get(t)),u=(t,s,e)=>{if(s.has(t))throw TypeError("Cannot add the same private member more than once");s instanceof WeakSet?s.add(t):s.set(t,e)},L=(t,s,e,o)=>(v(t,s,"write to private field"),o?o.call(t,e):s.set(t,e),e);import"./assets/styles-4a536963.js";import{a as y,i as n,P as q}from"./assets/vendor-6b9f6847.js";var i,g,h,d;class M{constructor(){u(this,i,"https://api.unsplash.com");u(this,g,"gcevo00lZKvSMKLnZZJPKYS5xNbpbsP_4i6E-BVlG58");u(this,h,"");u(this,d,new URLSearchParams({per_page:12,orientation:"portrait",client_id:r(this,g)}))}async getPopularPhotos(s){const e=`${r(this,i)}/search/photos?page=${s}&query=popular&${r(this,d)}`;try{return(await y(e)).data}catch(o){console.log(o),n.error({message:"Error"})}}async getPhotosByQuery(s){const e=`${r(this,i)}/search/photos?page=${s}&query=${r(this,h)}&${r(this,d)}`;try{return(await y(e)).data}catch(o){console.log(o),n.error({message:"Error"})}}set query(s){L(this,h,s)}async getStats(){const s=`${r(this,i)}/stats/total?client_id=${r(this,g)}`;try{const{data:e}=await y.get(s);return e}catch(e){console.log(e)}}}i=new WeakMap,g=new WeakMap,h=new WeakMap,d=new WeakMap;function p(t){return t.map(({id:s,urls:{small:e},alt_description:o})=>`   <li class="gallery__item"  id="${s}">
            <img src="${e}" alt="${o}" >
          </li>`).join("")}const m=document.querySelector(".js-gallery"),f=document.querySelector(".js-search-form"),l=document.querySelector(".loader"),P=document.getElementById("tui-pagination-container"),a=new q(P,{totalItems:0,itemsPerPage:12,visiblePages:5,page:1}),E=a.getCurrentPage(),c=new M;c.getPopularPhotos(E).then(t=>{const s=p(t.results);m.innerHTML=s,a.reset(t.total)}).catch(t=>console.log(t));function I(t){const s=t.page;l.classList.remove("visually-hidden"),c.getPopularPhotos(s).then(e=>{const o=p(e.results);m.innerHTML=o}).catch(e=>console.log(e)).finally(()=>l.classList.add("visually-hidden"))}a.on("afterMove",I);f.addEventListener("submit",async t=>{t.preventDefault();const s=f.elements.query.value.trim();if(!s){n.warning({position:"topRight",message:"Please fill query field"});return}a.off("afterMove",I),a.off("afterMove",$),c.query=s,l.classList.remove("visually-hidden");try{const e=await c.getPhotosByQuery(E);if(!e.results.length){n.warning({position:"topRight",message:"No results"});return}n.info({position:"topRight",message:`We found ${e.total} results`}),e.total<=12?P.classList.add("visually-hidden"):P.classList.remove("visually-hidden");const o=p(e.results);m.innerHTML=o,a.reset(e.total)}catch(e){n.error({position:"topRight",message:"Error"}),console.log(e)}finally{l.classList.add("visually-hidden"),f.reset()}a.on("afterMove",$)});function $(t){const s=t.page;l.classList.remove("visually-hidden"),c.getPhotosByQuery(s).then(e=>{const o=p(e.results);m.innerHTML=o}).catch(e=>console.log(e)).finally(()=>l.classList.add("visually-hidden"))}m.addEventListener("click",t=>{if(t.target.nodeName!=="IMG")return;const s=t.target.closest("li").id;console.log(s)});c.getStats().then(t=>console.log(t)).catch(t=>console.log(t));
//# sourceMappingURL=commonHelpers.js.map