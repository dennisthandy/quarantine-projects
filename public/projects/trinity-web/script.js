const socialOpen = document.querySelector('.open');
const socialContainer = document.querySelector('.social-container');

socialOpen.addEventListener('click', showSocial);

function showSocial() {
  socialOpen.classList.toggle('active');
  socialContainer.classList.toggle('open');
}

//main code
const data = {
  html: 'Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript. ',
  css: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript',
  js: 'Alongside HTML and CSS, JavaScript is one of the core technologies of the World Wide Web. JavaScript enables interactive web pages and is an essential part of web applications. The vast majority of websites use it for client-side page behavior, and all major web browsers have a dedicated JavaScript engine to execute it'
}

const descTitle = document.querySelector('.trinity__title');
const descText = document.querySelector('.trinity__text');
const member = document.querySelectorAll('.trinity__photo');

member.forEach((item, i) => {
  item.addEventListener('mouseover', function(){
    switch (item.id) {
      case 'html':
        descTitle.classList.remove('open');
        descTitle.innerHTML = 'HTML';
        descText.innerHTML = data.html;
        descTitle.classList.add('open')
        break;
      case 'css':
        descTitle.classList.remove('open');
        descTitle.innerHTML = 'CSS';
        descText.innerHTML = data.css;
        descTitle.classList.add('open')
        break;
      case 'js':
        descTitle.classList.remove('open');
        descTitle.innerHTML = 'JavaScript';
        descText.innerHTML = data.js;
        descTitle.classList.add('open')
        break;
      default:
        descText.innerHTML = 'Hover one of trinity icon to see decription.';
        break
    }
  })
});
