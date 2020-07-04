const socialOpen = document.querySelector('.open');
const socialContainer = document.querySelector('.social-container');

socialOpen.addEventListener('click', showSocial);

function showSocial() {
  socialOpen.classList.toggle('active');
  socialContainer.classList.toggle('open');
}

//main code
//get element by class alert__action
const ALERTS_ACTION = document.querySelectorAll('.alert__action');

//loop array of node element ALERTS_ACTION
ALERTS_ACTION.forEach((item, i) => {
  //give event click
  item.addEventListener('click', (e) => {
    //do animation opacity
    let parent = item.parentElement;
    parent.style.opacity = 0;
    //remove element after 500 ms
    setTimeout(() => {
      parent.remove();
    }, 500)
  })
});
