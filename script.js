//Menu mobile
const menu = document.getElementById('menu');

document.getElementsByClassName('menu-btn')[0].addEventListener('click', () => {
  menu.style.display = 'block';
});

document.getElementsByClassName('close-btn')[0].addEventListener('click', () => {
  menu.style.display = 'none';
});

document.getElementsByClassName('menu-options')[0].addEventListener('click', () => {
  menu.style.display = 'none';
});