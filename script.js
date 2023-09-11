let button = document.getElementById('button');
let timer = document.getElementById('timer');

let minute = 25;
let seconde = 0;

let decreaseCountdown = () => {
    if(minute >= 0) {
        if(!(minute == 0 & seconde == 0)) {
            minute = seconde == 0 ? minute - 1 : minute;
            seconde = seconde > 0 ? seconde - 1 : 59;
        }
    }
    let minuteDisplay = minute < 10 ? '0' + minute : minute;
    let secondeDisplay = seconde < 10 ? '0' + seconde : seconde;
    timer.textContent = minuteDisplay + ':' + secondeDisplay;
}


setInterval(decreaseCountdown, 1000);