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

// toggler.addEventListener('change', function () {
//   if (this.checked) {
//     localStorage.setItem('theme', 'light');
//     body.dataset.theme = 'light';
//   } else {
//     localStorage.setItem('theme', 'default');
//     body.dataset.theme = 'default';
//   }
//   console.log(localStorage);

// localStorage.setItem('light', this.checked);
// return (body.dataset.theme = `${this.checked ? 'light' : 'default'}`);
// });
