const socialOpen = document.querySelector('.open');
const socialContainer = document.querySelector('.social-container');

socialOpen.addEventListener('click', showSocial);

function showSocial() {
  socialOpen.classList.toggle('active');
  socialContainer.classList.toggle('open');
}

//main code
setInterval(() => {
    createWater();
}, 250)


function createWater() {
  const water = document.createElement('div');

  water.className = 'water';
  water.style.top = `${Math.floor((Math.random() * innerHeight) + 1)}px`;
  water.style.left = `${Math.floor((Math.random() * innerWidth) + 1)}px`;
  document.body.appendChild(water);

  setTimeout(() => {
    water.style.transform = `scale(${Math.round((Math.random() * 10) * 10) / 10 + 1})`;
    water.style.border = '0.5px solid white';
    water.style.opacity = 0;
  }, 1500)

  setInterval(() => {
    water.style.display = 'none';
  }, 3000)
}
