import"./assets/vendor-86291ea8.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function d(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=d(e);fetch(e.href,t)}})();const n=document.querySelector(".date span");n.textContent=new Date().toLocaleString("uk");setInterval(()=>n.textContent=new Date().toLocaleString("uk"),1e3);const i=document.querySelector(".switcher-toggle");i.addEventListener("change",s=>{s.target.checked?(document.body.classList.add("dark"),document.body.classList.remove("light"),localStorage.setItem("theme","dark")):(document.body.classList.add("light"),document.body.classList.remove("dark"),localStorage.setItem("theme","light"))});localStorage.getItem("theme")==="dark"&&(i.checked=!0,document.body.classList.add("dark"),document.body.classList.remove("light"));
//# sourceMappingURL=commonHelpers.js.map
