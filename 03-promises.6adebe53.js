!function(){var e=document.querySelector(".form"),n=document.querySelector('input[name="delay"]'),t=document.querySelector('input[name="step"]'),o=document.querySelector('input[name="amount"]');document.querySelector("button");function c(e,n){return new Promise((function(t,o){var c=Math.random()>.3;setTimeout((function(){c?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))}e.addEventListener("submit",(function(e){e.preventDefault();for(var u=parseInt(n.value),a=parseInt(t.value),r=parseInt(o.value),i=1;i<=r;i++){c(i,u+(i-1)*a).then((function(e){var n=e.position,t=e.delay;console.log("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))})).catch((function(e){var n=e.position,t=e.delay;console.log("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))}))}}))}();
//# sourceMappingURL=03-promises.6adebe53.js.map