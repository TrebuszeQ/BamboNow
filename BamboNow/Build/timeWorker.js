"use strict";
let i = 0;
function timeCounter() {
    i = i + 1;
    postMessage(i);
    setTimeout("timeCounter()", 1000);
}
timeCounter();
