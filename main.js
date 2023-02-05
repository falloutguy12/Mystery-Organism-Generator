/* Imports */

import {pAequorFactory} from './modules/DNA-Logic.mjs'


const button = document.querySelector('.buttonChildContainer button');

const pairDisplayContainer = document.getElementsByClassName('pairDisplayContainer')[0];

/* Generate strands button and Strand rendering */
button.addEventListener('mousedown', () => {
  button.style.backgroundColor = '#8F7281';
  button.style.boxShadow = '1px 2px rgb(175, 175, 175)';
  button.style.transform = 'translate(2px, 3px)';
});

button.addEventListener('mouseup', () => {
    button.style.backgroundColor = '#B38D97';
    button.style.boxShadow = '2.5px 3.5px rgb(175, 175, 175)';
    button.style.transform = 'none';
});

/*   pairDisplayContainer.style.animation = 'close 1s linear forwards, 1s 1.5s open linear forwards';
 this is for the pair selection display animation */

/* Dropdown for pair selection */
const btn = document.getElementsByClassName('btn')[0];
const dropdown = document.getElementsByClassName('dropdown-content')[0];
const form = document.getElementById('form');

btn.addEventListener('click', () => {
  dropdown.classList.toggle('show');
});

form.addEventListener('change', (event) => {
  btn.textContent = event.target.value;
  dropdown.classList.remove('show');
});