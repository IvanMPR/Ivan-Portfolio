'use-strict';
// Initialize

// Toggle section content (projects page)

const sectionTogglers = document.querySelectorAll('.section__subtitle');
const graphicDesignSubsection = document.querySelector(
  '.section__projects--graphic'
);
const webDevSubsection = document.querySelector('.section__projects--web');

sectionTogglers.forEach(function (h3) {
  h3.addEventListener('click', function (e) {
    sectionTogglers.forEach(toggler => toggler.classList.remove('active'));

    this.classList.add('active');

    graphicDesignSubsection.classList.toggle('invisible');
    webDevSubsection.classList.toggle('invisible');
  });
});
