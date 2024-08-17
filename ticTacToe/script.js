const gameCells = document.querySelectorAll(".cell");
const player1 = document.querySelector(".player1");
const player2 = document.querySelector(".player2");
const restartBtn = document.querySelector(".restart-btn");

let currentPlayer = "X";
let nextPlayer = "O";
let playerTurn = currentPlayer;

const startGame = () => {
  gameCells.forEach((cell) => {
    cell.addEventListener("click", (e) => {
      if (e.target.textContent === "") {
        checkWin();
        changePlayerTurn();
        e.target.textContent = playerTurn;
      }
    });
  });
};

const changePlayerTurn = () => {
  playerTurn = playerTurn === currentPlayer ? nextPlayer : currentPlayer;
};

const checkWin = () =>{
    const winningConditions = [
        [0,1,2],
        [3,4,5],
        [6,7,8],

        [0,3,6],
        [1,4,7],
        [2,5,8],

        [0,4,8],
        [2,4,6],
    ];

    for(let i = 0; i<winningConditions.length;i++){
        const [pos1, pos2, pos3] = winningConditions[i];
        
    }
}

startGame();
