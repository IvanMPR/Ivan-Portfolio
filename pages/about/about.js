'use-strict';

// Toggle section content (about page)
const sectionTogglers = document.querySelectorAll('.section__subtitle');

sectionTogglers.forEach(function (h3) {
  h3.addEventListener('click', function (e) {
    sectionTogglers.forEach(toggler => toggler.classList.remove('active'));
    this.classList.add('active');
  });
});
