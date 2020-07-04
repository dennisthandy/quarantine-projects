const socialOpen = document.querySelector('.open');
const socialContainer = document.querySelector('.social-container');

socialOpen.addEventListener('click', showSocial);

function showSocial() {
  socialOpen.classList.toggle('active');
  socialContainer.classList.toggle('open');
}

//main code
const board = document.querySelector('.board');
const colors = [
  '#fd2eb3', '#fb8d62', '#fe346e', '#05dfd7'
]

//call func create board
for (var i = 0; i < 550; i++) {
  createBoard();
}

highlightBoard();

function createBoard() {
  const smallBoard = document.createElement('div');

  smallBoard.className = 'board__small';
  board.appendChild(smallBoard);
}

function highlightBoard() {
  const smallBoards = document.querySelectorAll('.board__small');

  smallBoards.forEach((item, i) => {
    let color = colors[Math.floor(Math.random() * (colors.length-1)) + 1];
    item.addEventListener('mouseover', () => {
      item.style.background = color;
      item.style.boxShadow = `0 0 5px ${color}`
      setTimeout(()=>{
        item.style.background = 'var(--colorSecondary)';
        item.style.boxShadow = `none`;
      }, 3000)
    })
  });

}
