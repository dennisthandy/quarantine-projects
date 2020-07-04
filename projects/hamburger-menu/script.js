const socialButton = document.querySelector('.social');
const socialContainer = document.querySelector('.social-container');

socialButton.addEventListener('click', showSocial);

function showSocial() {
  socialButton.classList.toggle('active');
  socialContainer.classList.toggle('open');
}

//main code
const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav');
const sizes = document.querySelectorAll('.nav-item');
const choosen = document.querySelector('.choosen');

menu.addEventListener('click', () => {
  menu.classList.toggle('eat');
  nav.classList.toggle('klik');
  // console.log(getSize);
  let size = getSize();
})

function getSize() {
  sizes.forEach((item, i) => {
    item.addEventListener('click', () => {
      choosen.style.display = 'inline';
      choosen.style.fontSize = item.getAttribute('data') + 'pt';
      nav.classList.remove('klik');
      menu.classList.remove('eat');
    })
  });

}
