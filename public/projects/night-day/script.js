const slider = document.getElementById('slider');
const txt  = document.getElementById('value');
const moon = document.getElementById('moon');
const sun = document.getElementById('sun');

if (parseInt(slider.value) === 50) {
  document.body.style.backgroundColor = 'var(--colorPrimary)';
}

slider.addEventListener('input', changeDay);


function changeDay(){
  let value = parseInt(slider.value);
  let opacity = 0;
  //decrease
  if (value < 50 && value >= 40) {
    document.body.style.color = `#fff`;
    sun.style.top = '-999px';
    opacity = 0.2;
    document.body.style.backgroundColor = `rgba(0,0,0,${opacity})`;
    moon.style.top = '-220px';
  }
  else if (value < 40 && value >= 30) {
    opacity = 0.4;
    document.body.style.backgroundColor = `rgba(0,0,0,${opacity})`;
    moon.style.top = '-176px';
  }
  else if (value < 30 && value >= 20) {
    removeStar();
    opacity = 0.6;
    document.body.style.backgroundColor = `rgba(0,0,0,${opacity})`;
    moon.style.top = '-132px';
  }
  else if (value < 20 && value >= 10) {
    opacity = 0.8;
    document.body.style.backgroundColor = `rgba(0,0,0,${opacity})`;
    moon.style.top = '-88px';
  }
  else if (value < 10 && value >= 1) {
    for (var i = 0; i < value * 2; i++) {
      createStar();
    }
    opacity = 1;
    document.body.style.backgroundColor = `rgba(0,0,0,${opacity})`;
    moon.style.top = '-44px';
  }
  //increase
  else if (value > 50 && value <= 60) {
    moon.style.top = '-999px';
    opacity = 0.2;
    document.body.style.backgroundColor = `rgba(135, 206, 235, ${opacity})`;
    sun.style.top = '-220px';
  }
  else if (value > 60 && value <= 70) {
    opacity = 0.4;
    document.body.style.backgroundColor = `rgba(135, 206, 235, ${opacity})`;
    sun.style.top = '-176px';
  }
  else if (value > 70 && value <= 80) {
    removeCloud()
    opacity = 0.6;
    document.body.style.backgroundColor = `rgba(135, 206, 235, ${opacity})`;
    sun.style.top = '-132px';
  }
  else if (value > 80 && value <= 90) {
    opacity = 0.8;
    document.body.style.backgroundColor = `rgba(135, 206, 235, ${opacity})`;
    sun.style.top = '-88px';
  }
  else if (value > 90 && value <= 100) {
    for (var i = 0; i < parseInt(value / 16); i++) {
      createCloud();
    }
    document.body.style.color = `#fff`;
    opacity = 1;
    document.body.style.backgroundColor = `rgba(135, 206, 235, ${opacity})`;
    sun.style.top = '-44px';
  }
}

function createStar(){
  let star = document.createElement('div');
  star.className = 'star';
  star.style.top = `${Math.floor((Math.random() * innerHeight) + 1)}px`;
  star.style.left = `${Math.floor((Math.random() * innerWidth) + 1)}px`;
  document.body.appendChild(star)
}

function removeStar(){
  const stars = document.querySelectorAll('.star');
  stars.forEach((item, i) => {
    item.remove();
  });
}

function createCloud(){
  let cloud = document.createElement('div');
  cloud.className = 'cloud';
  cloud.style.top = `${Math.floor((Math.random() * innerHeight) + 1)}px`;
  cloud.style.left = `${Math.floor((Math.random() * innerWidth) + 1)}px`;
  cloud.style.opacity = Math.round((Math.random() * 1) * 10) / 10;
  document.body.appendChild(cloud)
}

function removeCloud(){
  const clouds = document.querySelectorAll('.cloud');
  clouds.forEach((item, i) => {
    item.remove();
  });
}

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
