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
// main code
const wishButton = document.querySelector('.wish-btn');
const container = document.querySelector('.container');
let fall = true;

setInterval(()=> {
  if (fall) {
    createRain();
  }
}, 50)

wishButton.addEventListener('click', showRainbow);

function showRainbow(){
  fall = false;
  const cloudLeft = document.querySelector('.cloud-left');
  const cloudRight = document.querySelector('.cloud-right');
  const rain = document.querySelectorAll('.rain');

  rain.forEach((item, i) => {
    item.remove();
  });

  cloudLeft.style.animation = 'slide-left 3s ease-in';
  cloudRight.style.animation = 'slide-right 3s ease-in';
  document.body.style.background = 'linear-gradient(180deg, skyblue, skyblue)';

  setTimeout(() => {
    document.body.style.background = 'linear-gradient(180deg, #5d5b5b, skyblue)';
    cloudLeft.style.animation = '';
    cloudRight.style.animation = '';
    fall = true;
  }, 3500)
}

function createRain(){
  let rain = document.createElement('li');
  rain.className = 'rain';
  rain.style.left = `${Math.floor(container.offsetWidth / 1.2 - (Math.random() * 250) +1 )}px`;
  rain.style.animation = `fall ${Math.floor((Math.random() * 1.5) + 1)}s ease-in infinite`;
  container.appendChild(rain);
  // console.log(container.offsetWidth);
  setTimeout(()=>{
    rain.remove();
  }, 3000)
}
