const socialOpen = document.querySelector('.open');
const socialContainer = document.querySelector('.social-container');

socialOpen.addEventListener('click', showSocial);

function showSocial() {
  socialOpen.classList.toggle('active');
  socialContainer.classList.toggle('open');
}

//main code
const TEXT = document.querySelector('.text');
const DATA = [];

for (let i = 0; i < TEXT.getAttribute('data').length; i++) {
  DATA.push(TEXT.getAttribute('data')[i])
}

TEXT.innerHTML = '';

for (let i = 0; i < DATA.length; i++) {
  createChar(DATA[i], `text__char--${i}`);
}

animate();

function createChar(data, className) {
  const CHAR = document.createElement('span');
  CHAR.className = 'text__char';
  CHAR.classList.add(className);
  CHAR.style.display = 'inline-block';
  CHAR.innerHTML = data;
  TEXT.appendChild(CHAR)
}

function animate() {
  const CHAR = document.querySelectorAll('.text__char');
  CHAR.forEach((item, i) => {
    item.classList.add('active');
  });
}


console.log(DATA)
