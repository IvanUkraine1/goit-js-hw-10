import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

let datePicker = document.getElementById("datetime-picker");
const startButton = document.querySelector("[data-start]");
let d = document.querySelector("[data-days]")
let h = document.querySelector("[data-hours]")
let m = document.querySelector("[data-minutes]")
let s = document.querySelector("[data-seconds]")

let userSelectedDate;

startButton.disabled = true;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
      userSelectedDate = selectedDates[0];

      let currentDate = Date.now();
      if(userSelectedDate.getTime() <= currentDate){
        iziToast.show({
                message: 'Please choose a date in the future',
                position:'topRight',
                messageColor: '#fff',
                backgroundColor: '#f44336',
                close: false,
                icon: 'fa-regular fa-circle-xmark',
            });
        startButton.disabled = true;
      } else {
        startButton.disabled = false;
      }
    },
  };

flatpickr(datePicker, options);

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  
  console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
  console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
  console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
  

startButton.addEventListener("click", ()=>{
    datePicker.disabled = true;
    startButton.disabled = true;

    function updateTimer(){
        let timeDif = userSelectedDate.getTime() - Date.now();
        if(timeDif <= 0){
            clearInterval(timer);
            d.textContent = "00";
            h.textContent = "00";
            m.textContent = "00";
            s.textContent = "00";
            datePicker.disabled = false;
            return;
        }
        let currentConvertMs = convertMs(timeDif);
        d.textContent = addLeadingZero(currentConvertMs.days);
        h.textContent = addLeadingZero(currentConvertMs.hours);
        m.textContent = addLeadingZero(currentConvertMs.minutes);
        s.textContent = addLeadingZero(currentConvertMs.seconds);
    }
    updateTimer();
    let timer = setInterval(updateTimer, 1000)
});

function addLeadingZero(value){
    return value.toString().padStart(2, "0");
}