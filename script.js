// Elements
const playBtn = document.querySelector('#play');
const resetBtn = document.querySelector('#resetBtn');
const timerEl = document.querySelector('#timer');

// Time values
let seconds = 0;
let minutes = 0;
let hours = 0;

let intervalId = null;
let isRunning = false;

const pad = (value) => String(value).padStart(2, '0');

const renderTime = () => {
    timerEl.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
};

const tick = () => {
    seconds += 1;
    if (seconds === 60) {
        seconds = 0;
        minutes += 1;
        if (minutes === 60) {
            minutes = 0;
            hours += 1;
        }
    }
    renderTime();
};

const start = () => {
    if (isRunning) return;
    isRunning = true;
    intervalId = window.setInterval(tick, 1000);
    playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
};

const pause = () => {
    if (!isRunning) return;
    isRunning = false;
    window.clearInterval(intervalId);
    intervalId = null;
    playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
};

const reset = () => {
    pause();
    seconds = 0;
    minutes = 0;
    hours = 0;
    renderTime();
};

playBtn.addEventListener('click', () => {
    if (isRunning) {
        pause();
    } else {
        start();
    }
});

resetBtn.addEventListener('click', reset);

renderTime();
