let button = document.getElementById('button');
let timer = document.getElementById('timer');
let workDisplay = document.getElementById('work_display');
let pauseDisplay = document.getElementById('pause_display');
let working = true;

let minute = 0;
let seconde = 10;

let decreaseCountdown = () => {
    if(minute >= 0) {
        if(!(minute == 0 & seconde == 0)) {
            minute = seconde == 0 ? minute - 1 : minute;
            seconde = seconde > 0 ? seconde - 1 : 59;
        } else {
            updateTime();
        }
    }
    let minuteDisplay = minute < 10 ? '0' + minute : minute;
    let secondeDisplay = seconde < 10 ? '0' + seconde : seconde;
    timer.textContent = minuteDisplay + ':' + secondeDisplay;
}

let updateTime = () => {
    if(working) {
        workDisplay.style.color = 'red';
        pauseDisplay.style.color = 'green';
        minute = 5;
        seconde = 0;
        working = false;
        return;
    }
    minute = 25;
    seconde = 0;
    workDisplay.style.color = 'green';
    pauseDisplay.style.color = 'red';
    working = true;
}


setInterval(decreaseCountdown, 1000);