const button = document.querySelector('.buttonChildContainer button');

const pairDisplayContainer = document.getElementsByClassName('pairDisplayContainer')[0];

button.addEventListener('mousedown', () => {
  button.style.backgroundColor = '#8F7281';
  button.style.boxShadow = '1px 2px rgb(175, 175, 175)';
  button.style.transform = 'translate(2px, 3px)';
  pairDisplayContainer.style.animation = 'close 1s linear forwards, 1s 1.5s open linear forwards';
});

button.addEventListener('mouseup', () => {
    button.style.backgroundColor = '#B38D97';
    button.style.boxShadow = '2.5px 3.5px rgb(175, 175, 175)';
    button.style.transform = 'none';
});