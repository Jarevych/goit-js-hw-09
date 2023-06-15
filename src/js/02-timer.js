import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
let currentDate = null;
let firstSelectedDate = null;
const daysEl = document.querySelector('span[data-days]');
const hoursEl = document.querySelector('span[data-hours]');
const minutesEl = document.querySelector('span[data-minutes]');
const secondsEl = document.querySelector('span[data-seconds]');
const startBtn = document.querySelector("button");
let ms = null;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    
    onClose(selectedDates) {
      
      console.log(selectedDates[0]);
      firstSelectedDate = new Date(selectedDates[0]);
      currentDate = new Date();
    if(firstSelectedDate.getTime() <= currentDate.getTime()) {
        alert("Please choose a date in the future") 
    };
      startBtn.disabled = false;
      updateTimer();
    },
  };
startBtn.addEventListener('click', timerStart)

function timerStart() {
    timerId = setInterval(updateTimer, 1000);
}

function updateTimer() {
    currentDate = new Date();
    if (firstSelectedDate !== null) {
      ms = firstSelectedDate.getTime() - currentDate.getTime();
      convertMs(ms);
      addLeadingZero()
    }
    if (ms <= 1000) {
        clearInterval(timerId); 
    }
  }

startBtn.disabled = true;
const calendar = document.getElementById('datetime-picker');
flatpickr(calendar, options)

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
    console.log(seconds)
    daysEl.textContent = `${days}`;
    hoursEl.textContent = `${hours}`;
    minutesEl.textContent = `${minutes}`;
    secondsEl.textContent = `${seconds}`;
    addLeadingZero();
  };

function addLeadingZero() {
    daysEl.textContent = daysEl.textContent.padStart(2, "0");
    hoursEl.textContent = hoursEl.textContent.padStart(2, "0");
    minutesEl.textContent = minutesEl.textContent.padStart(2, "0");
    secondsEl.textContent = secondsEl.textContent.padStart(2, "0");

};

