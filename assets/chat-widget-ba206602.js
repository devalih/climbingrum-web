var m=(i,t)=>()=>(t||i((t={exports:{}}).exports,t),t.exports);var u=m((g,a)=>{(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();function l(){document.querySelectorAll('a[href^="#"]').forEach(i=>{i.addEventListener("click",function(t){t.preventDefault();const n=document.querySelector(this.getAttribute("href"));n&&n.scrollIntoView({behavior:"smooth",block:"start"})})})}function r(){window.addEventListener("scroll",function(){const i=document.querySelector(".header-nav");i&&(window.scrollY>100?i.style.backgroundColor="rgba(255, 255, 255, 0.98)":i.style.backgroundColor="rgba(255, 255, 255, 0.95)")})}function d(){l(),r()}document.addEventListener("DOMContentLoaded",d);typeof a<"u"&&a.exports&&(a.exports={initializeNavigation:d,initializeSmoothScrolling:l,initializeScrollEffects:r});class h{constructor(t={}){this.options={guides:[{name:"Salamah Alzalabia",title:"Local Expert & ENSA Guide",avatar:"../images/salamah_jabal_rum.jpeg",whatsapp:"962775355605",instagram:"wadirumrockclimbing"},{name:"Ali Hussein",title:"International Guide & Route Developer",avatar:"../images/Ali_climbing_1.png",whatsapp:"962788450926",instagram:"alih.jo"}],...t},this.isInitialized=!1,this.elements={}}init(){this.isInitialized||(this.createHTML(),this.loadCSS(),this.bindEvents(),this.isInitialized=!0)}createHTML(){const t=`
            <div id="floating-chat" class="floating-chat">
                <div id="chat-button" class="chat-button">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v3c0 .6.4 1 1 1 .2 0 .3 0 .4-.1L14.6 18H20c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z"/>
                    </svg>
                    <span>Chat with us</span>
                </div>
                
                <div id="chat-options" class="chat-options hidden">
                    <div class="chat-header">
                        <h4>Contact Our Guides</h4>
                        <button id="close-chat" class="close-chat">&times;</button>
                    </div>
                    
                    ${this.generateGuidesHTML()}
                </div>
            </div>
        `;document.body.insertAdjacentHTML("beforeend",t),this.elements={floatingChat:document.getElementById("floating-chat"),chatButton:document.getElementById("chat-button"),chatOptions:document.getElementById("chat-options"),closeChat:document.getElementById("close-chat")}}generateGuidesHTML(){return this.options.guides.map(t=>`
            <div class="guide-option">
                <img src="${t.avatar}" alt="${t.name}" class="guide-avatar">
                <div class="guide-info">
                    <h5>${t.name}</h5>
                    <p>${t.title}</p>
                    <div class="contact-buttons">
                        <a href="http://wa.me/${t.whatsapp}" target="_blank" class="contact-btn whatsapp">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                            </svg>
                            WhatsApp
                        </a>
                        <a href="https://www.instagram.com/${t.instagram}/" target="_blank" class="contact-btn instagram">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                            Instagram
                        </a>
                    </div>
                </div>
            </div>
        `).join("")}loadCSS(){if(document.getElementById("chat-widget-styles"))return;const t=document.createElement("link");t.id="chat-widget-styles",t.rel="stylesheet";const n=window.location.pathname,o=n.includes("/guides/")||n.includes("/tours/")?"../js/":"js/";t.href=o+"chat-widget.css",document.head.appendChild(t)}bindEvents(){if(!this.elements.chatButton||!this.elements.chatOptions||!this.elements.closeChat){console.warn("Chat widget elements not found");return}this.elements.chatButton.addEventListener("click",()=>{this.openChat()}),this.elements.closeChat.addEventListener("click",()=>{this.closeChat()}),document.addEventListener("click",t=>{this.elements.floatingChat.contains(t.target)||this.closeChat()}),this.elements.chatOptions.addEventListener("click",t=>{t.stopPropagation()})}openChat(){this.elements.chatOptions.classList.remove("hidden"),setTimeout(()=>{this.elements.chatOptions.classList.add("show")},10)}closeChat(){this.elements.chatOptions.classList.remove("show"),setTimeout(()=>{this.elements.chatOptions.classList.add("hidden")},300)}destroy(){this.elements.floatingChat&&this.elements.floatingChat.remove();const t=document.getElementById("chat-widget-styles");t&&t.remove(),this.isInitialized=!1,this.elements={}}}document.addEventListener("DOMContentLoaded",()=>{if(!document.getElementById("floating-chat")){const i=new h;i.init(),window.chatWidget=i}});typeof a<"u"&&a.exports&&(a.exports=h)});export default u();
