import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{i as t}from"./assets/vendor-BbbuE1sJ.js";let r=document.querySelector(".form");r.addEventListener("submit",s=>{s.preventDefault();const i=document.querySelector('input[name="state"]:checked').value,o=document.querySelector('input[name="delay"]').value;new Promise((e,l)=>{setTimeout(()=>{i=="fulfilled"?e(`✅ Fulfilled promise in ${o}ms`):l(`❌ Rejected promise in ${o}ms`)},o)}).then(e=>{t.show({message:e,position:"topRight",messageColor:"#fff",backgroundColor:"#4CAF50",close:!1})}).catch(e=>{t.show({message:e,position:"topRight",messageColor:"#fff",backgroundColor:"#F44336",close:!1})})});
//# sourceMappingURL=2-snackbar.js.map
