let currentGame; //do this first so you can reference it later
let currentCar;

document.getElementById('game-board').style.display='none';
const myCanvas=document.getElementById('canvas');
const ctx = myCanvas.getContext('2d');
document.getElementById("start-button").onclick = () => {
    startGame();
  };

document.onkeydown = (e) => {     //!
  let whereToGo = e.keyCode;
  currentGame.car.moveCar(whereToGo);
}

function startGame() {
    document.getElementById('game-board').style.display='block';
    //now you make game.js file, structure things like a real developer would. not put it all in one js file like i did.
    //Instantiate a new game of the game class
    currentGame = new Game();
    //instantiate a new car, create a new Car class with attributes just for a car
    currentCar = new Car();
    currentGame.car = currentCar;  // get teh car form teh Game Class 
    currentGame.car.drawCar();

    updateCanvas();
}

// when the collission does not happen it is easier
function detectCollision(obstacle) {
  return !((currentCar.y > obstacle.y + obstacle.height) ||
  (currentCar.x + currentCar.width < obstacle.x) ||
  (currentCar.x - currentCar.width > obstacle.x + obstacle.width))
}

// FRAMES 
let obstaclesFrequency = 0; // how many obstacles per frame (FRAMES)

function updateCanvas() {
  ctx.clearRect(0, 0, 500, 600); // clear teh canvas everytime 
  currentGame.car.drawCar();
  obstaclesFrequency++;

  if (obstaclesFrequency % 100 === 1) {
    // draw and obstacle 
    // get teh 100px smaller for more obstacles
    let randomObstacleX = Math.floor(Math.random() * 450);
    let randomObstacleY = 0; // always on teh top // maybe -1 so it is better
    let randomObstacleWidth = Math.floor(Math.random() * 50) +20;
    let randomObstacleHeight = Math.floor(Math.random() *50) +20;
    let newObstacle = new Obstacle(randomObstacleX, 
      randomObstacleY, randomObstacleWidth, randomObstacleHeight);
    
    currentGame.obstacles.push(newObstacle);
    //console.log(currentGame.obstacles);

  }

      for (let i = 0; i < currentGame.obstacles.length; i++) {
        currentGame.obstacles[i].y += 1;
        currentGame.obstacles[i].drawObstacle();

        if (detectCollision(currentGame.obstacles[i])) {
          alert ('ahhh');
          obstaclesFrequency = 0;
          currentGame.score = 0;
          document.getElementById('score').innerHTML = 0;
          currentGame.obstacles = [];
          document.getElementById('game-board').style.display = 'none';
        }
console.log(currentGame.obstacles); 

        if(currentGame.obstacles.length > 0 && currentGame.obstacles[i].y >= 600) {
          currentGame.obstacles.splice(i, 1);
          currentGame.score++ ;
          document.getElementById('score').innerHTML = currentGame.score;
        }
    }     

  requestAnimationFrame(updateCanvas);
  // best than setInterval with default time
}
