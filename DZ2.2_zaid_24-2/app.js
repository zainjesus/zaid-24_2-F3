const minutesElement = document.getElementById('timer__value_minutes');
const secondsElement = document.getElementById('timer__value_seconds');
const result = document.getElementById('result');

let minutes = 0;
let seconds = 0;

function updateTimer() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
    }
    minutesElement.textContent = String(minutes).padStart(2, '0');
    secondsElement.textContent = String(seconds).padStart(2, '0');
    switch (minutes) {
        case 1:
          result.textContent = 'Прошла одна минута...';
          break;
        case 2:
          result.textContent = 'Прошло две минуты...';
          break;
        case 3:
          result.textContent = 'Прошло три минуты...';
          break;
        case 4:
          result.textContent = 'Прошло четыре минуты...';
          break;
        case 5:
          result.textContent = 'Прошло пять минут!';
          clearInterval(intervalId);
          break;
    }
}

const intervalId = setInterval(updateTimer, 1000);