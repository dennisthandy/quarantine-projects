const loveButton = document.querySelector('#send-love');

loveButton.addEventListener('click', sendLove);
// createLove();

function sendLove(){
  for (let i = 0; i < Math.floor(Math.random() * 1000) + 1; i++) {
    createLove();
  }
}

function createLove(){
  let love = document.createElement('li');
  love.className = 'love-msg';
  love.innerHTML = '&#10084;';
  love.style.zIndex = '-1';
  love.style.top = `${Math.floor(Math.random() * loveButton.offsetHeight) + 1}px`;
  love.style.left = `${Math.floor(Math.random() * loveButton.offsetWidth) + 1}px`;
  love.style.transition = `${Math.floor((Math.random() * 7) + 1)}s ease`;
  love.style.transform = `scale(${Math.round((Math.random() * 3) * 10) / 10})`;
  loveButton.appendChild(love);

  setInterval(() => {
    love.style.top = `-${window.innerHeight / 2}px`;
    love.style.left = `${Math.floor(Math.random() * window.innerWidth / 2) + 1}px`;
  }, Math.floor((Math.random() * 100) + 1))
  //
  setInterval(() => {
    love.style.opacity = 0;
  }, 500)
  //
  setInterval(() => {
    love.remove();
  }, 10000)
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
