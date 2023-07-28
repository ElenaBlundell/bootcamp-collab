'use strict';
import { lightTheme, darkTheme, themeBtnHandler } from './theme.js'

const currentLocalTimeEl = document.getElementById('current-local-time');
const greetingEl = document.querySelector('#greeting');

setInterval(() => {
    const currentLocalTime = new Date().toLocaleTimeString();
    const date = new Date();
    const hours = date.getHours();

    let timeOfDay;
    let timeOfDayEmote;

    if (hours < 12) {
        timeOfDay = "morning"
        timeOfDayEmote = '🌄';
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
        timeOfDayEmote = '🌅';
    } else {
        timeOfDay = "night"
        timeOfDayEmote = '🌆';
    }
    // show current time
    currentLocalTimeEl.textContent = `Local Time: ${currentLocalTime}`;
    greetingEl.textContent = `Good ${timeOfDay} ${timeOfDayEmote} bootcamp students!`
}, 1000)

const themeBtnEl = document.querySelector('.theme-button');
const currentTheme = JSON.parse(localStorage.getItem('currentTheme'));

if (currentTheme) {
  currentTheme === 'DARK'
    ? darkTheme(themeBtnEl)
    : lightTheme(themeBtnEl)
} else {
  timeOfDay(themeBtnEl);
}

themeBtnEl.addEventListener('click', themeBtnHandler)


