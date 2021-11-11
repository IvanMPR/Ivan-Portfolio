'use-strict';

// Toggle phone visibility
const phoneReveal = document.querySelector('.phone__reveal');
const phoneHide = document.querySelector('.phone__hide');
const phoneIconParentDiv = document.querySelector('.phone__toggler');
const phoneNumber = document.querySelector('.phone__info');

function init() {
  phoneReveal.classList.remove('invisible');
  phoneHide.classList.remove('invisible');
  phoneHide.classList.add('invisible');
}

init();

phoneIconParentDiv.addEventListener('click', function (e) {
  if (!e.target.classList.contains('fas')) return;

  if (
    e.target.classList.contains('fa-phone-alt') ||
    e.target.classList.contains('fa-phone-slash')
  ) {
    phoneHide.classList.toggle('invisible');
    phoneReveal.classList.toggle('invisible');
    phoneNumber.classList.toggle('invisible');
  }
});

// Ripple effect on submit button

const submitBtn = document.querySelector('.btn__form');

submitBtn.addEventListener('click', function (e) {
  // e.preventDefault();
  rippleButton(e, this);
});
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
