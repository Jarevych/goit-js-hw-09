const e=document.querySelector(".form"),t=document.querySelector('input[name="delay"]'),n=document.querySelector('input[name="step"]'),o=document.querySelector('input[name="amount"]');document.querySelector("button");function u(e,t){return new Promise(((n,o)=>{const u=Math.random()>.3;setTimeout((()=>{u?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}e.addEventListener("submit",(function(e){e.preventDefault();const r=parseInt(t.value),i=parseInt(n.value),l=parseInt(o.value);for(let e=1;e<=l;e++){u(e,r+(e-1)*i).then((({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e} in ${t}ms`)}))}}));
//# sourceMappingURL=03-promises.b4926ef0.js.map
