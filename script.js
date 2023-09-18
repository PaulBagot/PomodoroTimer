let buttonStart = document.getElementById('start');
let buttonReset = document.getElementById('reset');

let timer = document.getElementById('timer');

let workDisplay = document.getElementById('work_display');
let pauseDisplay = document.getElementById('pause_display');

let workInput = document.getElementById('work_input');
let pauseInput = document.getElementById('pause_input');


let workMinutes = 25;
let pauseMinutes = 5;

let working = true;
let launch = false;
let minutes = workMinutes;
let secondes = 0;
let numberCicle = 0;
let workColor = '#ff6666';
let pauseColor = '#32cd32';

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
        numberCicle++;
        if(numberCicle % 4 == 0)
            minutes = pauseMinutes + 15;
        else
            minutes = pauseMinutes;
        document.body.style.backgroundColor = pauseColor;
    } else {
        document.body.style.backgroundColor = workColor;
        minutes = workMinutes;
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
    document.body.style.backgroundColor = workColor;
    buttonReset.style.display = 'block';
    buttonStart.style.display = 'none';
}

/**
 * when you press the reset button
 */
let onClickReset = () => {
    location.reload();
}

workInput.addEventListener('change', (event) => {
    minutes = workInput.value
    secondes = 0;
    launch = false;
    buttonReset.style.display = 'none';
    buttonStart.style.display = 'block';
})


setInterval(pomodoro, 1000);