const socialOpen = document.querySelector('.open');
const socialContainer = document.querySelector('.social-container');

socialOpen.addEventListener('click', showSocial);

function showSocial() {
  socialOpen.classList.toggle('active');
  socialContainer.classList.toggle('open');
}

//main code
const radiusBox = document.querySelector('.radius');
const radiusInput = document.querySelectorAll('.radius__input');
const radiusResult = document.querySelector('.radius__result');
const radiusButton = document.querySelector('.radius__button');
const radiusInfo = document.querySelector('.radius__info');

radiusInput.forEach((item, i) => {
  item.addEventListener('input', applyRadius);
});

radiusButton.addEventListener('click', copy);

function applyRadius(event) {
  // console.log(event.target.id)
  switch (event.target.id) {
    case 'input-top-left':
      radiusBox.style.borderTopLeftRadius = `${event.target.value}px`;
      break;
    case 'input-top-right':
      radiusBox.style.borderTopRightRadius = `${event.target.value}px`;
      break;
    case 'input-bottom-right':
      radiusBox.style.borderBottomRightRadius = `${event.target.value}px`;
      break;
    case 'input-bottom-left':
      radiusBox.style.borderBottomLeftRadius = `${event.target.value}px`;
      break;
    default:
      break;
  }

  let topLeft = radiusBox.style.borderTopLeftRadius === '' ? '0' : radiusBox.style.borderTopLeftRadius;
  let topRight = radiusBox.style.borderTopRightRadius === '' ? '0' : radiusBox.style.borderTopRightRadius
  let bottomRight = radiusBox.style.borderBottomRightRadius === '' ? '0' : radiusBox.style.borderBottomRightRadius
  let bottomLeft = radiusBox.style.borderBottomLeftRadius === '' ? '0' : radiusBox.style.borderBottomLeftRadius

  radiusResult.innerHTML = `border-radius: ${topLeft} ${topRight} ${bottomRight} ${bottomLeft};`
  event.target.value === '' ? event.target.value = '0' : event.target.value = event.target.value;
}

function copy(){
  const selection = window.getSelection();
  const range = document.createRange();

  range.selectNodeContents(radiusResult);
  selection.removeAllRanges();
  selection.addRange(range);
  document.execCommand("copy");
  selection.removeAllRanges();
  radiusInfo.style.opacity = 1;
  setTimeout(function () {
    radiusInfo.style.opacity = 0;
  }, 1000);
}
