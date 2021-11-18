// This module contains code required in every page (ex. hamburger menu functionality)

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

export function closeModal(subEl) {
  x.addEventListener('click', function (e) {
    console.log(e.target);
    subEl.style.zIndex = -5;
    subEl.classList.remove('scale-up');
  });
}
const bars = document.querySelector('.fa-bars');
const x = document.querySelector('.fa-times');

export function resetInitials() {
  bars.classList.remove('invisible');
  x.classList.remove('invisible');
  x.classList.add('invisible');
}

export function toggleNaviButtons() {
  const buttonsParent = document.querySelector('.header__hamburger-icons');
  buttonsParent.addEventListener('click', function (e) {
    if (e.target.classList.contains('fa-bars')) {
      bars.classList.toggle('invisible');
      x.classList.toggle('invisible');
      // open modal
    } else {
      setTimeout(() => {
        x.classList.toggle('invisible');
        bars.classList.toggle('invisible');
      }, 200);
      // close modal
    }
  });
}
