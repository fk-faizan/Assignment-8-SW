var min = 0;
var sec = 0;
var msec = 0;

var minText = document.getElementById('min');
var secText = document.getElementById('sec');
var msecText = document.getElementById('msec');

function timer() {
    msec++;
    msecText.innerHTML = msec;
    if(msec >= 100) {
        sec++;
        secText.innerHTML = sec;
        msec = 0;
    } else if(sec >= 15) {
        min ++;
        minText.innerHTML = min;
        sec = 0;
    }
}

function start() {
    interval = setInterval(timer, 10);
    var startBtn = document.getElementById('btnStart').disabled = true;

}

function pause() {
    clearInterval(interval);
    var startBtn = document.getElementById('btnStart').disabled = false;
}

function reset() {
    min = 0;
    sec = 0;
    msec = 0;

    minText.innerHTML = min;
    secText.innerHTML = sec;
    msecText.innerHTML = msec;
    pause();
}