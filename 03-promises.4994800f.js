!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequire7bc7;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){o[e]=t},t.parcelRequire7bc7=r);var l=r("iU1Pc");const u={form:document.querySelector(".form"),delay:document.querySelector('[name="delay"]'),step:document.querySelector('[name="step"]'),amount:document.querySelector('[name="amount"]')},a={delay:null,step:null,amount:null};function i(e,t){return new Promise(((n,o)=>{setTimeout((()=>{Math.random()>.3?n(`Fulfilled promise ${e} in ${t}ms`):o(`Rejected promise ${e} in ${t}ms`)}),t)}))}u.form.addEventListener("submit",(t=>{t.preventDefault(),console.log("start promise generator"),function(t,n,o){let r=Number(t);for(let t=1;t<=n;t++)i(t,r).then((t=>{console.log("✅",t),e(l).Notify.success(t)})).catch((t=>{console.log("❌",t),e(l).Notify.failure(t)})),r+=Number(o)}(a.delay,a.amount,a.step)})),u.delay.addEventListener("input",(e=>{a.delay=e.target.value})),u.step.addEventListener("input",(e=>{a.step=e.target.value})),u.amount.addEventListener("input",(e=>{a.amount=e.target.value}))}();
//# sourceMappingURL=03-promises.4994800f.js.map