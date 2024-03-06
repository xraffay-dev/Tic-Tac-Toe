let turnX = true;
let count = 0;
let winnerX = false;
let winnerO = false;
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let currentGame = [0, 0, 0, 0, 0, 0, 0, 0, 0];

const drawGame = () =>{
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
}

const resetGame = () => {
  turnX = true;
  msgContainer.classList.add("hide");   
  count = 0;
  currentGame = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let box of boxes) {
    box.innerText = "";
  }
};
const checkWinner = () =>{
    if((currentGame[0] == 1 && currentGame[1] == 1 && currentGame[2] == 1) || 
    (currentGame[3] == 1 && currentGame[4] == 1 && currentGame[5] == 1) ||
    (currentGame[6] == 1 && currentGame[7] == 1 && currentGame[8] == 1)){
        winnerX = true;
        return true;
    }
    if((currentGame[0] == -1 && currentGame[1] == -1 && currentGame[2] == -1) || 
       (currentGame[3] == -1 && currentGame[4] == -1 && currentGame[5] == -1) ||
       (currentGame[6] == -1 && currentGame[7] == -1 && currentGame[8] == -1)){
        winnerO = true;
        return true;
    }
    if((currentGame[0] == 1 && currentGame[3] == 1 && currentGame[6] == 1) || 
    (currentGame[1] == 1 && currentGame[4] == 1 && currentGame[7] == 1) ||
    (currentGame[2] == 1 && currentGame[5] == 1 && currentGame[8] == 1)){
        winnerX = true;
        return true;
    }
    if((currentGame[0] == -1 && currentGame[3] == -1 && currentGame[6] == -1) || 
    (currentGame[1] == -1 && currentGame[4] == -1 && currentGame[7] == -1) ||
    (currentGame[2] == -1 && currentGame[5] == -1 && currentGame[8] == -1)){
     winnerO = true;
     return true;
    }
    if(currentGame[0] == 1 && currentGame[4] == 1 && currentGame[8] == 1){
        winnerX = true;
        return true;
    }
    if(currentGame[2] == 1 && currentGame[4] == 1 && currentGame[6] == 1){
        winnerX = true;
        return true;
    }
    if(currentGame[0] == -1 && currentGame[4] == -1 && currentGame[8] == -1){
     winnerO = true;
     return true;
    }
    if(currentGame[2] == -1 && currentGame[4] == -1 && currentGame[6] == -1){
        winnerO = true;
        return true;
    }
};
const showWinner = (winner) =>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    currentGame = [1, 1, 1, 1, 1, 1, 1, 1, 1];
}
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    count ++;
    let id = Number(box.id);
    console.log(currentGame);
    if (currentGame[id] == 0) {
      if (turnX) {
        box.innerText = "X";
        turnX = false;
        currentGame[id] = 1;
      } else {
        box.innerText = "O";
        turnX = true;
        currentGame[id] = -1;
      }
    }
    if(checkWinner()){
        box.innerText === "X"? showWinner("X") : showWinner("O");
    }
    if(count === 9){
        drawGame();
    }
  });
});

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);