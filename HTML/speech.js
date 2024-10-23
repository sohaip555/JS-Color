// window.SpeechRecognition = window.SpeechRecognition | window.webkitSpeechRecognition;
import {handeResult} from './handlers.js';
import {colorsByLength, isDark} from "./colors.js";

const colorEl = document.querySelector('.colors');

function displayColors(colors) {
    return colors.map(color => `<span class="color ${color} ${
        isDark(color) ? "dark" : ""
    }" style="background: ${color};"> ${color}</span>`).join("");
}

function start() {

    if (!("webkitSpeechRecognition" in window)) {

        console.log('sorry your browser does not support' +
            'SpeechRecognition');
    } else {

        console.log('starting...');
        const recognition = new webkitSpeechRecognition();

        console.log(recognition);
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.onresult = handeResult;
        recognition.start();
    }
}

start();
colorEl.innerHTML = displayColors(colorsByLength);
