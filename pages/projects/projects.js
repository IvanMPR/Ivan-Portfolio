'use-strict';

const toggler = document.getElementById('toggle');
const body = document.querySelector('body');
toggler.addEventListener('change', function () {
  return (body.dataset.theme = `${this.checked ? 'light' : 'default'}`);
});
