setInterval(createSnowflake, Math.floor((Math.random() * 100) + 1));
setInterval(createSnowflake, Math.floor((Math.random() * 100) + 1));
setInterval(createSnowflake, Math.floor((Math.random() * 100) + 1));

function createSnowflake(){
  let snowflake = document.createElement('li');
  snowflake.className = 'snowflake';
  snowflake.innerHTML = '&#10052;';
  snowflake.style.top = `${-(innerHeight / 3)}px`;
  snowflake.style.left = `${Math.floor((Math.random() *innerWidth - 25) + 1)}px`;
  snowflake.style.opacity = Math.round((Math.random() * 1) * 10) / 10;
  snowflake.style.transition = `top ${Math.floor((Math.random() * 3) + 1)}s ease`;
  snowflake.style.transform = `scale(${Math.round((Math.random() * 3) * 10) / 10})`;
  document.body.appendChild(snowflake)
  setInterval(() => {
    snowflake.style.top = `${innerHeight - 50}px`;
  }, Math.floor((Math.random() * 100) + 1))
  setInterval(() =>  {
    if (snowflake.style.top === `${innerHeight - 50}px`) {
      snowflake.remove();
    }
  },3000);
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
