const launcer = document.querySelector('.launcer');
const container = document.querySelector('.container');
launcer.addEventListener('click', launchFireworks);
let color = [
  '#CE2029', '#FFFCAF', '#FFE17C', '#FF664B', '#903843'
]
function launchFireworks(){
  setInterval(()=>{
    createFireworks()
  }, 100)
}


function createFireworks(){
  let fireworks = document.createElement('div');
  let leftFire = Math.floor(Math.random() * innerWidth) + 1;
  fireworks.className = "fireworks";
  fireworks.style.left = `${leftFire}px`
  fireworks.style.transition = `1s ease-in`;
  fireworks.style.backgroundColor = color[Math.floor(Math.random() * color.length) + 1]
  container.appendChild(fireworks);
  let topFire  = Math.floor(Math.random() * (innerHeight - innerHeight / 2)) + 1

  setInterval(() => {
    fireworks.style.top = `${topFire}px`;
    fireworks.style.opacity = 0;
  }, Math.floor((Math.random() * 1000) + 1))

  setTimeout(() => {
    for (var i = 0; i < Math.floor((Math.random() * 1000) + 1); i++) {
      let partikel = document.createElement('div');
      partikel.className = 'partikel';
      partikel.style.top =  `${topFire}px`
      partikel.style.left =  `${leftFire}px`
      partikel.style.transition = `${Math.floor(Math.random() * 3) + 1}s ease-in`;
      partikel.style.backgroundColor = color[Math.floor(Math.random() * color.length) + 1]
      container.appendChild(partikel);
      let top  = Math.floor(Math.random() * (window.innerHeight - window.innerHeight / 2) + window.innerHeight / 4) + 1
      top = Math.random() < 0.5 ? -top : top;
      let left  = Math.floor(Math.random() * (window.innerWidth - window.innerWidth / 2) + window.innerWidth / 4) + 1
      left = Math.random() < 0.5 ? -left : left;

      setInterval(()=>{
        partikel.style.top =  `${top}px`
        partikel.style.left =  `${left}px`
        partikel.style.opacity = 0;
      })
    }
  }, 1000)

  setTimeout(()=>{
    fireworks.innerHTML = '';
    fireworks.remove();
  }, 1100)
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
