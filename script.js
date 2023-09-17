let buttonStart = document.getElementById('start');
let buttonReset = document.getElementById('reset');
let timer = document.getElementById('timer');
let workDisplay = document.getElementById('work_display');
let pauseDisplay = document.getElementById('pause_display');

let working = true;
let launch = false;
let minutes = 0;
let secondes = 5;
let workColor = '#CD5C5C';
let pauseColor = '#6B8E23';

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
    } else
        updateMode();   
}

/**
 * will update the mode (work | pause)
 * @returns 
 */
let updateMode = () => {
    if(working) {
        minutes = 5;
        document.body.style.backgroundColor = pauseColor;
    } else {
        document.body.style.backgroundColor = workColor;
        minutes = 25;
    }
    working = working ? false : true;
    secondes = 0;
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
    workDisplay.style.color = pauseColor;
    pauseDisplay.style.color = workColor;
    buttonReset.style.display = 'block';
    buttonStart.style.display = 'none';
    let timer = document.getElementById('contener_timer');
    document.body.style.backgroundColor = workColor;
    timer.style.display = 'inline-block';
}

/**
 * when you press the reset button
 */
let onClickReset = () => {
    location.reload();
}

setInterval(pomodoro, 1000);