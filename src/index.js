document.addEventListener('DOMContentLoaded', () => {

  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  canvas.height = 750;
  canvas.width = 2300;

  // global variables
  const cellSize = 75;
  const cellGap = 3;
  let startingGold = 100;
  const gameGrid = [];
  const predators = [];
  const predatorPositions = [];
  const tanks = [];
  const projectiles = [];
  const turret1 = document.getElementById('turret')
  const wolf = document.getElementById('wolf')
  let frame = 0;

  const mouse = {
    x: undefined,
    y: undefined,
    width: 0.1,
    height: 0.1,
  }

  let canvasPosition = canvas.getBoundingClientRect();

  canvas.addEventListener('mousemove', function(e){
    mouse.x = e.x - canvasPosition.left;
    mouse.y = e.y - canvasPosition.top;
  });

  // console.log(canvasPosition)

  canvas.addEventListener('mouseleave', function(){
    mouse.x = undefined;
    mouse.y = undefined;
  })

  function drawPicture(img, sX, sY, sW, sH) {
    ctx.drawImage(img, sX, sY, sW, sH);
  }

  // ctx.fillStyle = 'blue';
  // ctx.fillRect(0,0,250,250)

  class Cell {
    constructor(x,y){
      this.x = x;
      this.y = y;
      this.width = cellSize;
      this.height = cellSize;
    }
    draw(){
      if (mouse.x && mouse.y && collision(this, mouse)){
        ctx.strokeStyle = 'white';
        ctx.strokeRect(this.x, this.y, this.width, this.height);
      }
    }
  }
  
  const createdRoad = 
  [
    [0,27],[0,26],[0,25],[0,24],[0,23],[0,22],[0,21],[0,20],[0,19],[0,18],[0,17],[0,16],[0,15],[0,14],[0,13],[0,12],[0,11],[0,10],[0,9],[0,8],[0,7],[0,6],[0,5],[0,4],[0,3],[0,2],[0,1],
    [1,1],
    [2, 1], [2, 2], [2, 3], [2, 4], [2, 5], [2, 6], [2, 7], [2, 8], [2, 9], [2, 10], [2, 11], [2, 12], [2, 13], [2, 14], [2, 15], [2, 16], [2, 17], [2, 18], [2, 19], [2, 20], [2, 21], [2, 22], [2, 23], [2, 24], [2, 25], [2, 26],
    [3, 26],
    [4, 26], [4, 25], [4, 24], [4, 23], [4, 22], [4, 21], [4, 20], [4, 19], [4, 18], [4, 17], [4, 16], [4, 15], [4, 14], [4, 13], [4, 12], [4, 11], [4, 10], [4, 9], [4, 8], [4, 7],
    [5,7],
    [6, 7], [6, 8], [6, 9], [6, 10], [6, 11], [6, 12], [6, 13], [6, 14], [6, 15], [6, 16], [6, 17], [6, 18], [6, 19], [6, 20], [6, 21], [6, 22], [6, 23], [6, 24], [6, 25], [6, 26],
    [7,26],
    [8, 26], [8, 25], [8, 24], [8, 23], [8, 22], [8, 21], [8, 20], [8, 19], [8, 18], [8, 17], [8, 16], [8, 15], [8, 14], [8, 13], [8, 12], [8, 11], [8, 10], [8, 9], [8, 8], [8, 7], [8, 6], [8, 5]
  ]


  


  // function createRoad(){
  //   // let roadMap = []
  //   const newArray = [
  //     [0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[0,9],[0,10],[0,11],[0,12],[0,13],[0,14],[0,15],[0,16],[0,17],[0,18],[0,19],[0,20],[0,21],[0,22],[0,23],[0,24],[0,25],[0,26],[0,27],
  //     [1,1],
  //     [2, 1], [2, 2], [2, 3], [2, 4], [2, 5], [2, 6], [2, 7], [2, 8], [2, 9], [2, 10], [2, 11], [2, 12], [2, 13], [2, 14], [2, 15], [2, 16], [2, 17], [2, 18], [2, 19], [2, 20], [2, 21], [2, 22], [2, 23], [2, 24], [2, 25], [2, 26],
  //     [3,26],
  //     [4, 7], [4, 8], [4, 9], [4, 10], [4, 11], [4, 12], [4, 13], [4, 14], [4, 15], [4, 16], [4, 17], [4, 18], [4, 19], [4, 20], [4, 21], [4, 22], [4, 23], [4, 24], [4, 25], [4, 26],
  //     [5,7],
  //     [6, 7], [6, 8], [6, 9], [6, 10], [6, 11], [6, 12], [6, 13], [6, 14], [6, 15], [6, 16], [6, 17], [6, 18], [6, 19], [6, 20], [6, 21], [6, 22], [6, 23], [6, 24], [6, 25], [6, 26],
  //     [7,26],
  //     [8,5],[8,6],[8, 7], [8, 8], [8, 9], [8, 10], [8, 11], [8, 12], [8, 13], [8, 14], [8, 15], [8, 16], [8, 17], [8, 18], [8, 19], [8, 20], [8, 21], [8, 22], [8, 23], [8, 24], [8, 25], [8, 26] 
  // ]
  //   for (let i = 0; i < newArray.length; i++){
  //     // const [row,col] = newArray[i];
  //     // this.gameGrid[row][col].road = true;
  //     newArray[i].road = true;
  //   }
  //   // console.log(newArray);
  //   return newArray;
  // }
  
  // // createRoad();
  // const createdRoad = createRoad();
  // for(let i = 0; i < createdRoad.length; i++){
  //   console.log(createdRoad[i])
  // }
  
  // function isRoad([x,y]){ // 360,0 
  //   // const coordToIdx = coord => Math.floor(coord/cellSize) 
  //   for(let i = 0; i < createdRoad.length; i++){
  //     // console.log(createdRoad[i][0])
  //     if(createdRoad[i][0] === x && createdRoad[i][1] === y) return true;
  //   }
  //   // return gameGrid[coordToIdx(y)][coordToIdx(x)].road
  //   return false;
  // }

  // createRoad();

  class Predator {
    constructor(verticalPosition) {
      this.x = canvas.width;
      this.y = verticalPosition;
      this.width = cellSize;
      this.height = cellSize;
      // this.speed = Math.random() * .001;
      // // this.speed = 
      // this.movement = this.speed;
      this.health = 100;
      this.maxHealth = this.health;
      this.i = 0;
      this.ti = 0;
    }


    update() {
      // if(isRoad([this.x, this.y])){
        // this.x -= this.movement;
      // }
      if(this.i < createdRoad.length && this.ti === 0){
        this.x = (createdRoad[this.i][1] * this.width);
        this.y = (createdRoad[this.i][0] * this.height);
        this.i++;
        this.ti = 15; // this is the speed of the predator
      }else if( this.ti > 0){
        this.ti--;
      }
    }

    draw() {
      drawPicture(wolf, this.x, this.y, this.width, this.height)
      // ctx.fillStyle = 'blue';
      // ctx.fillRect(this.x, this.y, this.width, this.height);
      ctx.fillStyle = 'white';
      ctx.font = '35px Georgia';
      ctx.fillText(Math.floor(this.health), this.x + 15, this.y + 30);
    }
  }

  function handlePredators(){
    for (let i = 0; i < predators.length; i++){
      predators[i].update();
      predators[i].draw();
    }
    if (frame % 250 === 0){
      // let verticalPosition = Math.floor(Math.random() * 5) * cellSize;
      // predators.push(new Predator(verticalPosition));
      // predatorPositions.push(verticalPosition);
      predators.push(new Predator(0));
      predatorPositions.push(0);
    }
  }
  
  function createGrid(){
    for (let y = 0; y < canvas.height; y += cellSize) {
      for (let x = 0; x < canvas.width; x += cellSize) {
        gameGrid.push(new Cell(x,y));
      }
    }
  }

  class Tank {
    constructor(x,y){
      this.x = x;
      this.y = y; 
      this.width = cellSize;
      this.height = cellSize;
      this.shoot = false;
      this.timer = 0;
    }
    draw(){
      // ctx.fillStyle = 'blue';
      // ctx.fillRect(this.x, this.y, this.width, this.height);
      drawPicture(turret1, this.x, this.y, this.width, this.height)
      // ctx.fillStyle = 'gold';
      // ctx.font = '20px Arial';
      // ctx.fillText(this.health, this.x, this.y);
    }
    update(){
      this.timer++;
      if (this.timer % 100 === 0){
        projectiles.push(new Projectile(this.x + 35, this.y + 35));
      }
    }
  }
  canvas.addEventListener('click', function(){
    const gridPositionX = mouse.x - (mouse.x % cellSize);
    const gridPositionY = mouse.y - (mouse.y % cellSize);
    for (let i = 0; i < tanks.length; i++){
      if (tanks[i].x === gridPositionX && tanks[i].y === gridPositionY){
        return;
      }
    }
    let tankCost = 100;
    if (startingGold >= tankCost) {
      tanks.push(new Tank(gridPositionX, gridPositionY));
      startingGold -= tankCost;
    }
  })

  function handleTanks(){
    for (let i = 0; i < tanks.length; i++){
      tanks[i].draw();
      tanks[i].update();
    }
  }

  class Projectile{
    constructor(x,y){
      this.x = x;
      this.y = y;
      this.width = 10;
      this.height = 20;
      this.power = 20;
      this.speed = 20;
    }
    update(){
      this.x += this.speed;
    }
    draw(){
      ctx.fillStyle = 'black';
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.width, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function handleProjectiles(){
    for (let i = 0; i < projectiles.length; i++){
      projectiles[i].update();
      projectiles[i].draw();

      if (projectiles[i] && projectiles[i].x > canvas.width - cellSize){
        projectiles.splice(i, 1);
        i--;
      }
      console.log('projectiles ' + projectiles.length);
    }
  }

  createGrid();

  function handleGameGrid(){
    for (let i = 0; i < gameGrid.length; i++){
      gameGrid[i].draw();
    }
  }

  // console.log(gameGrid);

  function animate(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
    // ctx.fillStyle = 'blue';
    handleGameGrid();
    handlePredators();
    handleTanks();
    handleProjectiles();
    requestAnimationFrame(animate);
    frame++;
  }

  animate();

  function collision(first, second){
    if (
      !(first.x > second.x + second.width || first.x + first.width < second.x || first.y > second.y + second.height || first.y + first.height < second.y)){
        return true;
      }

  }
  window.addEventListener('resize', function(){
    canvasPosition = canvas.getBoundingClientRect();
  })

  
})