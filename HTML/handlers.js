import {isValidColor} from "./colors.js";


export function handeResult({results}) {
    const words = results[results.length - 1][0].transcript;
    let color = words.toLowerCase();
    color = color.replaceAll(' ', '');

    if (!isValidColor(color)) {
        return;
    }

    const colorSpan = document.querySelector(`.${color}`);
    colorSpan.classList.add('got');
    console.log(colorSpan);
    console.log('sdkjcnsdcn');
    console.log(color);
    document.body.style.background = color;
}