const arrowUp = document.querySelector('.header__icon--up');
const arrowDown = document.querySelector('.header__icon--down');

arrowUp.addEventListener('click', (e) => {
  const modal = document.createElement('div');
  modal.className = 'header__modal';
  modal.innerHTML = `
    <ul class='header__modalList'>
      <li class="header__modalItem">العربية</li>
      <li class="header__modalItem">Catalan</li>
      <li class="header__modalItem">Deutsch</li>
      <li class="header__modalItem">Espańol</li>
      <li class="header__modalItem">فارسی</li>
      <li class="header__modalItem">Français</li>
      <li class="header__modalItem">Galego</li>
      <li class="header__modalItem">Italiano</li>
      <li class="header__modalItem">日本</li>
      <li class="header__modalItem">한국어</li>
      <li class="header__modalItem">Português do Brasil</li>
      <li class="header__modalItem">Limba Românâ</li>
      <li class="header__modalItem">русский</li>
      <li class="header__modalItem">Türkçe</li>
      <li class="header__modalItem">українська</li>
      <li class="header__modalItem">汉语</li>
      <li class="header__modalItem">中文</li>
    </ul>
  `
  const modalContainer = document.querySelector('.header__modalContainer');
  modalContainer.appendChild(modal);
  arrowUp.style.display = 'none';
  arrowDown.style.display = 'block';
})

document.addEventListener('click', (e) => {
  const arrowDownClass = 'header__icon--down fas fa-sort-up';
  if (e.target.className === arrowDownClass) {
    document.querySelector('.header__modal').remove();
    arrowDown.style.display = 'none';
    arrowUp.style.display = 'block';
  }
})

