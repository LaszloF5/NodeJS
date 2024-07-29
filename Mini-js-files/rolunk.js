import { getToggleMenu } from "../Mini-js-apis/function.js";
getToggleMenu();

// Sötét / világos mód kezelése

let toggleLight = document.querySelector(".js-darkAndLight");
let sunIcon = document.querySelector(".js-sun-icon");
let moonIcon = document.querySelector(".js-moon-icon");

toggleLight.addEventListener("click", function () {
  moonIcon.classList.toggle("hide-img");
  sunIcon.classList.toggle("hide-img");
  if (moonIcon.classList.contains('hide-img')) {
    document.body.style.backgroundColor = 'rgb(73, 72, 72)';
    document.querySelectorAll('h1').forEach(el => el.style.color = 'whitesmoke');
    document.querySelectorAll('p').forEach(el => el.style.color = 'whitesmoke');
    document.querySelectorAll('li').forEach(el => el.style.color = 'whitesmoke');
    document.querySelector('.copy').style.color = 'black';
    document.querySelector('.js-rolunk-a').style.color = '#ff8c00';
  } else {
    document.body.style.backgroundColor = 'white';
    document.querySelectorAll('h1').forEach(el => el.style.color = 'black');
    document.querySelectorAll('p').forEach(el => el.style.color = 'black');
    document.querySelectorAll('li').forEach(el => el.style.color = 'black');
    document.querySelector('.js-rolunk-a').style.color = 'blue';
  }
});