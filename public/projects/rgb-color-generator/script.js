const btn = document.getElementById('generate-btn');
const txt = document.getElementById('result-code');
const check = document.getElementById('transparent');
const copy = document.getElementById('copy');

btn.addEventListener('click', generateCode);
copy.addEventListener('click', copyCode);

function generateCode(){
  // const hexa = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
  let result = '';
  //let iteration = 7;
  let r = Math.floor((Math.random() * 255) + 1);
  let g = Math.floor((Math.random() * 255) + 1);
  let b = Math.floor((Math.random() * 255) + 1);
  let a = Math.round((Math.random() * 1) * 10) / 10

  let total = r + g + b;

  if (check.checked) {
    result = `rgba(${r},${g},${b},${a})`;
  }else {
    result = `rgb(${r},${g},${b})`;
  }

  copy.disabled = false;
  txt.style.opacity = 1;
  txt.innerHTML = result;
  txt.value = result;
  document.body.style.backgroundColor = result;
}

function copyCode(){
  const selection = window.getSelection();
  const range = document.createRange();
  const info = document.getElementById('info');

  range.selectNodeContents(txt);
  selection.removeAllRanges();
  selection.addRange(range);
  document.execCommand("copy");
  info.style.backgroundColor = txt.value;
  info.style.opacity = 1;
  info.innerHTML = txt.value;
  setTimeout(() => {
    info.style.opacity = 0;
  }, 1200);
  selection.removeAllRanges();
}
//social Code
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
