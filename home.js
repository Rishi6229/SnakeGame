let direction = { x: 0, y: 0 };
const foodsound = new Audio('food(1).mp3');
const gameOver = new Audio('DEAD.mp3');
const moveSound = new Audio('bg.mp3');
const musicSound = new Audio('bg.mp3');
let speed = 2;
let lastPaintTime = 0;
let snakeArr = [
    { x: 13, y: 15 }
]
//game functions

function main(ctime) {
    window.requestAnimationFrame(main);
    if ((ctime - lastPaintTime) / 1000 < 1 / speed) {

        return;
    }
    lastPaintTime = ctime;
    gameEngine();
}


function gameEngine() {

  board.innerHTML = "";
  snakeArr.forEach((e , index) =>{
     snakeElement = document.createElement('div');
     snakeElement.style.gridRowStart = e.y;
     snakeElement.style.gridColoumnStart = e.x;
     snakeElement.classList.add('food')
     board.appendChild(snakeElement);


  });

  //display the food
  snakeArr.forEach((e , index) =>{
    foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColoumnStart = food.x;
    foodElement.classList.add('food')
    board.appendChild(snakeElement);


    
  



}

















//main logic starts here.
window.requestAnimationFrame(main);
