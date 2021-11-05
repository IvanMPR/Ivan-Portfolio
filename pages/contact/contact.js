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