(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();document.querySelector("[data-visualizerbtn]");document.querySelector(".visualizer-container");document.querySelector("[data-loadingScreen]");document.querySelector("[data-notesbtn]");document.querySelector(".notes");const s=document.getElementById("array-container");a();function a(){s.innerHTML="";const n=[];for(let r=0;r<20;r++)n.push(Math.floor(Math.random()*300)+10);n.forEach(r=>{const o=document.createElement("div");o.className="bar",o.style.height=`${r}px`,s.appendChild(o)})}
