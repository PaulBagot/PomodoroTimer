let buttonStart = document.getElementById('start');
let buttonReset = document.getElementById('reset');
let timer = document.getElementById('timer');
let workDisplay = document.getElementById('work_display');
let pauseDisplay = document.getElementById('pause_display');

let working = true;
let launch = false;
let minutes = 25;
let secondes = 0;

/**
 * will decrease the time
 */
let decreaseCountdown = () => {
    if(!(minutes == 0 & secondes == 0)) {
        minutes = secondes == 0 ? minutes - 1 : minutes;
        secondes = secondes > 0 ? secondes - 1 : 59;
    } 
}
