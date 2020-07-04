const playButton = document.getElementById('play-btn');
const interation = document.getElementById('nums-color');
const errorMsg = document.getElementById('error');
let colors = [];
playButton.addEventListener('click', changeBackgroundColor);

function changeBackgroundColor(){
  colors = [];
  let ind = -1;

  if (interation.value === "") {
    errorMsg.innerHTML = 'Please enter amount of colors you want.'
  }else if(parseInt(interation.value) < 2){
    errorMsg.innerHTML = 'Please enter minimum 2 amount of colors.'
  }else if(parseInt(interation.value) > 22){
    errorMsg.innerHTML = 'Maximum amount of colors is 22.'
  }else{
    errorMsg.innerHTML = 'Enjoy 😂';
    errorMsg.style.color = 'white';
    for (let i = 0; i < parseInt(interation.value); i++) {
      colors.push(generateRGB());
    }

    setInterval(() => {
      ++ind;
      if (ind >= colors.length) {
        ind = 0;
      }
      document.body.style.backgroundColor = colors[ind];
    }, 1000)
  }

}

function generateRGB(){
  let result = '';
  let r = Math.floor((Math.random() * 255) + 1);
  let g = Math.floor((Math.random() * 255) + 1);
  let b = Math.floor((Math.random() * 255) + 1);

  result = `rgb(${r},${g},${b})`;
  return result
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
