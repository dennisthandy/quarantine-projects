//main code
const bigCup = document.querySelector('.big');
const smallCup = document.querySelectorAll('.small');

smallCup.forEach((item, i) => {
  item.addEventListener('click', () => {
    fullingCup(i);
  });
});

function fullingCup(id){
  if (smallCup[id].classList.contains('full') &&
      !smallCup[id].nextElementSibling.classList.contains('full')) {
    id--;
  }
  smallCup.forEach((item, i) => {
    if (i <= id) {
      item.classList.add('full');
    }else{
      item.classList.remove('full');
    }
  });

  fullingBigCup();

}

function fullingBigCup() {
  const smallFull = document.querySelectorAll('.full');
  const precentage = document.querySelector('.precentage');
  const remaining = document.querySelector('.remaining');
  const message = document.querySelector('.message');

  let height = 1.75 * smallFull.length;
  let percent = height / 14 * 100;
  if (height === 0) {
    remaining.style.transform = `scale(.5)`;
  }else {
    remaining.style.transform = `scale(1)`;
  }

  if (percent === 100) {
    message.removeAttribute('hidden');
    message.innerHTML = 'You must have great body every day. 💪';
  }else {
    message.hidden = true;
  }
  remaining.style.height = `${height}rem`;
  precentage.innerHTML = `${percent}%`;
}



//social code
const socialOpen = document.querySelector('.open');
const socialContainer = document.querySelector('.social-container');

socialOpen.addEventListener('click', showSocial);

function showSocial() {
  socialOpen.classList.toggle('active');
  socialContainer.classList.toggle('open');
}
