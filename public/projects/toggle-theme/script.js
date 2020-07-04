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

//main code
const button = document.getElementById('button');
const circle = document.querySelector('.circle');
const label = document.querySelector('.label');

button.addEventListener('click', changeMode);

function changeMode(){
  if (button.checked) {
    circle.style.animation = 'toRight .5s ease';
    circle.style.left = '30px';
    circle.style.backgroundColor = 'black';
    document.body.className = 'dark-mode';
    for (var i = 0; i < 100; i++) {
      createStars();
    }
  }else {
    circle.style.left = '5px';
    circle.style.backgroundColor = 'white';
    document.body.className = '';
    removeStars();
  }
}

function createStars(){
  let star = document.createElement('div');
  star.className = 'star';
  star.style.top = `${Math.floor((Math.random() * innerHeight - 50) + 1)}px`;
  star.style.left = `${Math.floor((Math.random() * innerWidth - 50) + 1)}px`;
  star.style.transform = `scale(${Math.floor((Math.random() * 10)) / 10})`;
  document.body.appendChild(star);
}

function removeStars(){
  let stars = document.querySelectorAll('.star');
  stars.forEach((item, i) => {
    item.remove();
  });

}
