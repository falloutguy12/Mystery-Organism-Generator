
import {pAequorFactory, returnRandBase, mockUpStrand} from './modules/DNA-Logic.mjs'

const button = document.querySelector('.buttonChildContainer button');
const pairDisplayContainer = document.getElementsByClassName('pairDisplayContainer')[0];

document.addEventListener('DOMContentLoaded', function() {
  window.alert('Generate new strands first before attempting to use the pair selector');
});
const strand1TXT = document.getElementById('strand1');
const strand2TXT = document.getElementById('strand2');
let organism, newOrganismComplement, isOrganismGenerated = false;

const newOrganism = () => {
  const num = Math.floor(Math.random() * 2);
  const dna = mockUpStrand();
  organism = pAequorFactory(num, dna);
  newOrganismComplement = organism.complementStrand();
};

button.addEventListener('mousedown', () => {
  button.style.backgroundColor = '#8F7281';
  button.style.boxShadow = '1px 2px rgb(175, 175, 175)';
  button.style.transform = 'translate(2px, 3px)';
  newOrganism();
  strand1TXT.innerHTML = organism.DNA.join(" ");
  strand2TXT.innerHTML = newOrganismComplement.DNA.join(" ");
  isOrganismGenerated = true;
});

button.addEventListener('mouseup', () => {
    button.style.backgroundColor = '#B38D97';
    button.style.boxShadow = '2.5px 3.5px rgb(175, 175, 175)';
    button.style.transform = 'none';
});

console.log(organism)
console.log(newOrganismComplement)

/* Dropdown for pair selection */
const btn = document.getElementsByClassName('btn')[0];
const form = document.getElementById('form');
const pairBase = document.getElementById('pairStrand1');
const pairComp = document.getElementById('pairStrand2');
let isAnimating = false;

form.addEventListener('change', (event) => {
  if (isAnimating) return;
  isAnimating = true;
  setTimeout(() => {
    isAnimating = false;
  }, 2500);

  btn.textContent = event.target.value;
  pairDisplayContainer.style.animation = 'close 1s linear forwards, 1s 1.5s open linear forwards';
  setTimeout(() => {
    let selectedValue = event.target.value;
    let arrValue = selectedValue.split("-");
    let arrValueNum = parseInt(arrValue[1]) - 1;
    pairBase.innerHTML = 'Base :' + organism.DNA[arrValueNum];
    pairComp.innerHTML = 'Comp :' + newOrganismComplement.DNA[arrValueNum];
  }, 1200);
  setTimeout(() => {
    pairDisplayContainer.style.animation = '';
  }, 2500)
});
