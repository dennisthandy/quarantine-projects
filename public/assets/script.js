import {data} from './data.js';

const socialOpen = document.querySelector('.open');
const socialContainer = document.querySelector('.social-container');
const projectContainer = document.querySelector('.project__container');

const colorsCode = [
  '#3a86ff', '#ff006e', '#fb5607', '#ffbe0b', '#d62828', '#80b918', '#2d00f7'
];

socialOpen.addEventListener('click', showSocial);

let html = ''
data.forEach((item, i) => {
  let selectedColor = colorsCode[Math.floor(Math.random() * colorsCode.length)]
  html += card(item.title, item.link, item.image, selectedColor)
});

projectContainer.innerHTML = html;

function showSocial() {
  socialOpen.classList.toggle('active');
  socialContainer.classList.toggle('open');
}

function card(title, link, image, color) {
  return `<div class="project__card" style="border-color:${color}">
            <img src="./assets/images/projects/${image}" alt="" class="project__image">
            <div class="project__info" style="background:${color}">
              <span class="project__title">${title}</span>
              <a href="${link}" class="project__link">Open</a>
            </div>
          </div>`;
}
