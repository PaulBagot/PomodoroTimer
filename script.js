let buttonReset = document.getElementById('reset');
let buttonStart = document.getElementById('start');

let containerTimer = document.getElementById('contener_timer');

let modeDisplay = document.getElementById('mode_display');

let workInput = document.getElementById('work_input');
let pauseInput = document.getElementById('pause_input');
let longPauseInput = document.getElementById('long_pause_input');

let workMinutes = 25;
let pauseMinutes = 5;
let longPauseMinutes = 20;

const inputs = [workInput, pauseInput, longPauseInput];

let working = true;
let launch = false;

let minutes = workMinutes;
let secondes = 0;
let numberCicle = 0;

let workColor = '#c93636';
let pauseColor = '#447e44';

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
    if(!(minutes == 0 && secondes == 0)) {
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
            minutes = longPauseMinutes;
        else
            minutes = pauseMinutes;
        modeDisplay.textContent = "Pause";
        containerTimer.style.backgroundColor = pauseColor;
    } else {
        modeDisplay.textContent = "Work";
        containerTimer.style.backgroundColor = workColor;
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
    if(working)
        containerTimer.style.backgroundColor = workColor
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
    if(workInput.value == "")
        workMinutes = 25;
    else
        workMinutes = workInput.value
    if(working)
        minutes = workMinutes;
    secondes = 0;
    launch = false;
    buttonReset.style.display = 'none';
    buttonStart.style.display = 'block';
    timeDisplay();
});

pauseInput.addEventListener('change', (event) => {
    if(pauseInput.value == "")
        pauseMinutes = 5;
    else
        pauseMinutes = pauseInput.value
    if(!working && numberCicle % 4 != 0)
        minutes = pauseMinutes;
    secondes = 0;
    launch = false;
    buttonReset.style.display = 'none';
    buttonStart.style.display = 'block';
    timeDisplay();
});

longPauseInput.addEventListener('change', (event) => {
    if(longPauseInput.value == "")
        longPauseMinutes = 20;
    else
        longPauseMinutes = longPauseInput.value
    if(!working && numberCicle % 4 == 0)
        minutes = longPauseMinutes;
    secondes = 0;
    launch = false;
    buttonReset.style.display = 'none';
    buttonStart.style.display = 'block';
    timeDisplay();
});

setInterval(pomodoro, 1000);

/**
 * for loop for input listener
 * the inputs now can reseive only positif number
 * 
 */
for(let resultat of inputs) {
    resultat.addEventListener('input', () => {
        let inputValue = resultat.value.match(/^\d+$/);
        if (inputValue === null || Number.parseInt(inputValue) < 0) {
            resultat.value = "";
        }
})}
