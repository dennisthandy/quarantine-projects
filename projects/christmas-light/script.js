const socialOpen = document.querySelector('.open');
const socialContainer = document.querySelector('.social-container');

socialOpen.addEventListener('click', showSocial);

function showSocial() {
  socialOpen.classList.toggle('active');
  socialContainer.classList.toggle('open');
}

//main code

const startButton = document.querySelector('.lamp__button--start');
const stopButton = document.querySelector('.lamp__button--stop');
const lamps = document.querySelectorAll('.lamp__circle');

startButton.addEventListener('click', startTheLight);
stopButton.addEventListener('click', stopTheLight);

function startTheLight() {
  lamps.forEach((item, i) => {
    item.classList.add('active')
  });
}

function stopTheLight() {
  lamps.forEach((item, i) => {
    item.classList.remove('active')
  });
}
