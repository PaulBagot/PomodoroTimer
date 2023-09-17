let buttonStart = document.getElementById('start');
let buttonReset = document.getElementById('reset');
let timer = document.getElementById('timer');
let workDisplay = document.getElementById('work_display');
let pauseDisplay = document.getElementById('pause_display');

let working = true;
let launch = false;
let minutes = 25;
let secondes = 0;

buttonStart.addEventListener('click', () => {
    onClickStart();
});

buttonReset.addEventListener('click', () => {
    onClickReset();
});

/**
 * main function
 * @returns 
 */
let pomodoro = () => {
    if(!launch) return;
    decreaseCountdown();
    timeDisplay();
}

/**
 * will decrease the time
 */
let decreaseCountdown = () => {
    if(!(minutes == 0 & secondes == 0)) {
        minutes = secondes == 0 ? minutes - 1 : minutes;
        secondes = secondes > 0 ? secondes - 1 : 59;
    } 
}

/**
 * display the time
 */
let timeDisplay = () => {
    let minuteDisplay = minutes < 10 ? '0' + minutes : minutes;
    let secondeDisplay = secondes < 10 ? '0' + secondes : secondes;
    timer.textContent = minuteDisplay + ':' + secondeDisplay;
}

/**
 * when you press the start button
 */
let onClickStart = () => {
    launch = true;
    buttonReset.style.display = 'block';
    buttonStart.style.display = 'none';
}

/**
 * when you press the reset button
 */
let onClickReset = () => {
    location.reload();
}

setInterval(pomodoro, 1000);