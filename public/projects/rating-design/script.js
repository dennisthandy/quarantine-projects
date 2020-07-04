/*jshint esversion: 6 */
const ratings = document.querySelectorAll('.icon');
const ratingNumber = document.querySelector('.rating-number');
const emoji = document.querySelector('.emoji');
const listEmoji = [
  '😌','😏','😬','😘','😍'
];
ratings.forEach((rating, i) => {
  rating.addEventListener('click', () => {
    highlightRatings(i);
  });
});

function highlightRatings(id){
  if (ratings[id].classList.contains('colored') &&
      !ratings[id].nextElementSibling.classList.contains('colored')) {
    id--;
  }

  if (id < 0) {
    ratingNumber.innerHTML = ``;
    emoji.innerHTML = '';
  }else {
    emoji.innerHTML = listEmoji[id];
    ratingNumber.innerHTML = `${id+1}.0`
  }

  ratings.forEach((rating, i) => {
    if (i <= id) {
      rating.classList.add('colored');
    } else {
      rating.classList.remove('colored');
    }
  });

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
