/*jshint esversion: 6 */
const tebakan = document.querySelector('.tabakan');
const pertanyaan = document.querySelector('.pertanyaan');
const jawaban = document.querySelector('.jawaban');
const button = document.querySelector('.button');

fetch('./data/data.json')
  .then(result => result.json())
  .then(result => showTebakan(result.tebakan));

function showTebakan(data){
  button.addEventListener('click', ()=>{
    let fun = data[Math.floor(Math.random() * (data.length-1)) + 1];
    pertanyaan.innerHTML = fun.pertanyaan;
    jawaban.innerHTML = fun.jawaban;
    jawaban.style.display = 'inline';
  });
}
//social code
const socialOpen = document.querySelector('.open');
const socialClose = document.querySelector('.close');
const socialContainer = document.querySelector('.social-container');

socialOpen.addEventListener('click', showSocial);
socialClose.addEventListener('click', closeSocial);

function showSocial() {
  socialOpen.style.display = 'none';
  socialClose.style.display = 'inline';
  socialContainer.style.opacity = '1';
  socialContainer.style.transform = 'scale(1)';
  socialContainer.style.right = '100%';
}

function closeSocial() {
  socialOpen.style.display = 'inline';
  socialClose.style.display = 'none';
  socialContainer.style.opacity = '0';
  socialContainer.style.transform = 'scale(.5)';
  socialContainer.style.right = '-250%';
}
