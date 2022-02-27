// This module contains code required in every page (ex. hamburger menu functionality)

// switch between light and dark modes
// /////////////////////////////////////

// export function openModal() {
//   const hamburger = document.querySelector('.header__hamburger');
//   const modal = document.querySelector('.header__hamburger-modal');
// hamburger.addEventListener('click', function () {
//   modal.style.zIndex = 0;
//   modal.classList.add('scale-up');
// });
// }
export function openModal(el, subEl) {
  el.addEventListener('click', function (e) {
    // subEl.style.zIndex = 1;
    // subEl.style.opacity = 1;
    // el.classList.add('scale-up');
    // console.log(e.target.closest('fas'));
    subEl.style.zIndex = 4500;
    subEl.classList.add('scale-up');

    // appendList(subEl);
  });
}

// export function closeModal(subEl) {
//   x.addEventListener('click', function (e) {
//     console.log(e.target);
//     subEl.style.zIndex = -5;
//     subEl.classList.remove('scale-up');
//   });
// }
