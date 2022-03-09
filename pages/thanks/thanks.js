'use-strict';

const body = document.querySelector('body');

window.addEventListener('load', function () {
  if (localStorage.getItem('theme') === 'light') {
    // toggler.checked = true;
    body.dataset.theme = 'light';
  } else {
    // toggler.checked = false;
    body.dataset.theme = 'default';
  }
  console.log(localStorage);
});
