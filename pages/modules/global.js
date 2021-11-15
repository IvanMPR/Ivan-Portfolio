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
  el.addEventListener('click', function () {
    subEl.style.zIndex = 1;

    subEl.classList.add('scale-up');

    appendList(subEl);
  });
}

export function appendList(parent) {
  const html = `<ul class="header__ul ">
   <li class="header__link-container">
     <a href="index.html" class="header__link active"
       ><span class="header__link-ordinal">01</span>home</a
     >
   </li>
   <li class="header__link-container">
     <a href="pages/projects/projects.html" class="header__link"
       ><span class="header__link-ordinal">02</span>projects</a
     >
   </li>
   <li class="header__link-container">
     <a href="pages/about/about.html" class="header__link"
       ><span class="header__link-ordinal">03</span>about</a
     >
   </li>
   <li class="header__link-container">
     <a href="pages/contact/contact.html" class="header__link"
       ><span class="header__link-ordinal">04</span>contact</a
     >
   </li>
 </ul>`;

  parent.insertAdjacentHTML('beforeend', html);
}
