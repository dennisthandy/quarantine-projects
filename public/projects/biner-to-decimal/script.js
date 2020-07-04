const socialOpen = document.querySelector('.open');
const socialContainer = document.querySelector('.social-container');

socialOpen.addEventListener('click', showSocial);

function showSocial() {
  socialOpen.classList.toggle('active');
  socialContainer.classList.toggle('open');
}


//main code
const input = document.querySelector('.binary__input');
const result = document.querySelector('.binary__result');
const button = document.querySelector('.binary__button');
const error = document.querySelector('.error');

button.addEventListener('click', convert);

function convert() {
  const reg = /^[0-1]{1,}$/;
  let binary = input.value;
  let decimal = 0;

  if (reg.test(binary)) {
    binary = input.value.split('');
    error.style.opacity = 0;
    for (let i = 0; i < binary.length; i++) {
      decimal += binary[i] * 2 ** i;
    }
    result.value = decimal;
  }else {
    error.style.opacity = 1;
    result.value = NaN;
  }
}
