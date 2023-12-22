const cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';

cells.forEach(cell => {
  cell.addEventListener('click', handleClick);
});

function handleClick() {
  if (!this.textContent) {
    this.textContent = currentPlayer;
    this.classList.add(`player${currentPlayer}`);
    checkWin();
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
}

function checkWin() {
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
    
      winConditions.forEach(condition => {
        const [a, b, c] = condition;
        if (
          cells[a].textContent &&
          cells[a].textContent === cells[b].textContent &&
          cells[a].textContent === cells[c].textContent
        ) {
          alert(`Player ${cells[a].textContent} wins!`);
          resetGame();
        }
      });
    
      if ([...cells].every(cell => cell.textContent)) {
        alert("It's a draw!");
        resetGame();
      }
    winConditions.forEach(condition => {
      const [a, b, c] = condition;
      if (
        cells[a].textContent &&
        cells[a].textContent === cells[b].textContent &&
        cells[a].textContent === cells[c].textContent
      ) {
        document.getElementById('gameResult').innerHTML = `Player <span style="color: #FF5733">${cells[a].textContent}</span> wins!`;
        showModal();
      }
    });
  
    if ([...cells].every(cell => cell.textContent)) {
      document.getElementById('gameResult').innerHTML = "It's a draw!";
      showModal();
    }
  }
  
  function showModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'block';
  }
  

  document.querySelector('.close').addEventListener('click', function() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
    resetGame();
  });
  
  function resetGame() {
    function resetGame() {
        cells.forEach(cell => {
          cell.textContent = '';
          cell.classList.remove('playerX', 'playerO');
        });
        currentPlayer = 'X';
        notifyTurn();
      }
      
  }
  