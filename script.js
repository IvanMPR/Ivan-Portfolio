//prettier-ignore
// import {changeColorTheme} from './pages/modules/global.js';
// localStorage.clear()
// Ripple effect on 'Contact me' button
const body = document.querySelector('body');
const button = document.querySelector('.btn');
// Change color theme
let th = body.dataset[localStorage.getItem('theme')];
body.dataset.theme = localStorage.getItem('theme');
// console.log(localStorage);
const toggler = document.getElementById('toggle');
toggler.addEventListener('change', function () {
  if (this.checked) {
    body.dataset.theme = 'light';
    localStorage.setItem('theme', 'light');
  } else {
    body.dataset.theme = 'default';
    localStorage.setItem('theme', 'default');
  }
  console.log(localStorage);
  // localStorage.setItem('light', this.checked);
  // return (body.dataset.theme = `${this.checked ? 'light' : 'default'}`);
});

// button.addEventListener('click', function (e) {
//   rippleButton(e, button);
// });

function rippleButton(event, element) {
  const x = event.offsetX;
  const y = event.offsetY;

  const circle = document.createElement('span');
  circle.style.position = 'absolute';
  circle.style.left = `${x}px`;
  circle.style.top = `${y}px`;
  circle.style.transform = 'translate(-50%, -50%)';
  circle.style.width = '15rem';
  circle.style.height = '15rem';
  circle.style.borderRadius = '50%';
  circle.style.backgroundColor = '#fff';
  circle.style.opacity = '0.6';
  circle.classList.add('ripple-btn');

  element.appendChild(circle);
  setTimeout(() => {
    element.removeChild(circle);
  }, 500);
}

// resetInitials();
// toggleNaviButtons();
// ///////////////////
// const x = document.querySelector('.fa-times');
// const hamburger = document.querySelector('.header__hamburger-icons');
// const modal = document.querySelector('.header__hamburger-modal');
// openModal(hamburger, modal);
// closeModal(modal);
