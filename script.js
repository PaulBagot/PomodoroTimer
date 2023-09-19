let buttonStart = document.getElementById('start');
let buttonReset = document.getElementById('reset');
<<<<<<< HEAD
let timer = document.getElementById('timer');
let workDisplay = document.getElementById('work_display');
let pauseDisplay = document.getElementById('pause_display');

let working = true;
let launch = false;
let minute = 25;
let seconde = 0;
=======

let timer = document.getElementById('timer');
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
>>>>>>> version2

buttonStart.addEventListener('click', () => {
    onClickStart();
});

buttonReset.addEventListener('click', () => {
    onClickReset();
});

/**
<<<<<<< HEAD
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
=======
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
>>>>>>> version2
 * @returns 
 */
let updateMode = () => {
    if(working) {
<<<<<<< HEAD
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
=======
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
>>>>>>> version2
    buttonReset.style.display = 'block';
    buttonStart.style.display = 'none';
}

<<<<<<< HEAD
=======
/**
 * when you press the reset button
 */
>>>>>>> version2
let onClickReset = () => {
    location.reload();
}

<<<<<<< HEAD
setInterval(decreaseCountdown, 1000);
=======
workInput.addEventListener('change', (event) => {
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
>>>>>>> version2
