import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

let form = document.querySelector(".form");


form.addEventListener("submit", (event)=>{
    event.preventDefault(); 

    const selectedState = document.querySelector('input[name="state"]:checked').value;
    const delay = document.querySelector('input[name="delay"]').value;

    
    let promise = new Promise((resolve, reject) => {
        setTimeout(() =>{
            if(selectedState == "fulfilled"){
                resolve(delay);
            } else {
                reject(delay);
            }
        }, delay);
    });
        promise.then((delay)=>{
            iziToast.show({
                message: `✅ Fulfilled promise in ${delay}ms`,
                position:'topRight',
                messageColor: '#fff',
                backgroundColor: '#4CAF50',
                close: false,
            });
        })
        .catch((delay)=>{
            iziToast.show({
                message: `❌ Rejected promise in ${delay}ms`,
                position:'topRight',
                messageColor: '#fff',
                backgroundColor: "#F44336",
                close: false,
            });
        });
});