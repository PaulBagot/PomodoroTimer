let buttonStart = document.getElementById('start');
let buttonReset = document.getElementById('reset');
let timer = document.getElementById('timer');
let workDisplay = document.getElementById('work_display');
let pauseDisplay = document.getElementById('pause_display');

let working = true;
let launch = false;
let minute = 25;
let seconde = 0;

buttonStart.addEventListener('click', () => {
    onClickStart();
});

buttonReset.addEventListener('click', () => {
    onClickReset();
});

/**
 * main function where the time will decrease
 */
let decreaseCountdown = () => {
    if(!launch) return;

    if(minute >= 0) {
        if(!(minute == 0 & seconde == 0)) {
            minute = seconde == 0 ? minute - 1 : minute;
            seconde = seconde > 0 ? seconde - 1 : 59;
        } else
            updateMode();
        timeDisplay();
    }
    
}

let timeDisplay = () => {
    let minuteDisplay = minute < 10 ? '0' + minute : minute;
    let secondeDisplay = seconde < 10 ? '0' + seconde : seconde;
    timer.textContent = minuteDisplay + ':' + secondeDisplay;
}

/**
 * 
 * @returns 
 */
let updateMode = () => {
    if(working) {
        workDisplay.style.color = 'red';
        pauseDisplay.style.color = 'green';
        minute = 5;
    } else {
        minute = 25;
        workDisplay.style.color = 'green';
        pauseDisplay.style.color = 'red';
    }
    working = working ? false : true;
    seconde = 0;
}


let onClickStart = () => {
    launch = true;
    buttonReset.style.display = 'block';
    buttonStart.style.display = 'none';
}

let onClickReset = () => {
    location.reload();
}

setInterval(decreaseCountdown, 1000);