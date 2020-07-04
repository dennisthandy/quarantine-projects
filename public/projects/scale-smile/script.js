const circle = document.querySelector('.circle');
const slider = document.querySelector('.slider');
// const scaleText = document.querySelector('.scale-text');
const smilePrecentage = document.querySelector('.smile-precentage');

slider.addEventListener('input', scaleObj);

function scaleObj() {
  circle.style.transform = `scale(${slider.value})`;
  // scaleText.innerHTML = `transform: scale(${slider.value});`;
  // scaleText.style.opacity = 1;
  let precentage = Math.floor(slider.value * 10);
  let message = '';
  if (precentage >= 1 && precentage <= 25) {
    message = 'Raise up your smile good people &#128521;';
    smilePrecentage.innerHTML = message;
  }
  else if (precentage >= 25 && precentage <= 50) {
    message = 'Good, more big smile &#128522;';
    smilePrecentage.innerHTML = message;
  }
  else if (precentage >= 50 && precentage <= 75) {
    message = 'Good news will be come to you today &#128516;';
    smilePrecentage.innerHTML = message;
  }else {
    message = 'You must be have a great day today &#128515;';
    smilePrecentage.innerHTML = message;
  }
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
