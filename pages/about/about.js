'use-strict';

// const toggler = document.getElementById('toggle');
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

// Toggle section content (about page)
// const sectionTogglers = document.querySelectorAll('.section__subtitle');

// sectionTogglers.forEach(function (h3) {
//   h3.addEventListener('click', function (e) {
//     sectionTogglers.forEach(toggler => toggler.classList.remove('h3-active'));
//     this.classList.add('h3-active');
//   });
// });
