document.addEventListener('DOMContentLoaded', () => {

  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  canvas.height = 750;
  canvas.width = 2100;

  // global variables
  const cellSize = 75;
  const cellGap = 3;
  let startingGold = 300;
  const gameGrid = [];
  const predators = [];
  const predatorPositions = [];
  const defenders = [];
  const projectiles = [];
  const turret1 = document.getElementById('turret')
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

  function createRoad(){
    const newArray = [[2,5]]
    for (let i = 0; i < newArray.length; i++){
      const [row,col] = newArray[i];
      this.gameGrid[row][col].road = true;
    }
  }

  
  function isRoad([x,y]){ // 360,0 
    const coordToIdx = coord => Math.floor(coord/cellSize) 
    return gameGrid[coordToIdx(y)][coordToIdx(x)].road
  }


  class Predator {
    constructor(verticalPosition) {
      this.x = canvas.width;
      this.y = verticalPosition;
      this.width = cellSize;
      this.height = cellSize;
      this.speed = Math.random() * 0.9 + 1;
      this.movement = this.speed;
      this.health = 100;
      this.maxHealth = this.health;
    }


    update() {
      this.x -= this.movement;
    }

    draw() {
      ctx.fillStyle = 'green';
      ctx.fillRect(this.x, this.y, this.width, this.height);
      ctx.fillStyle = 'black';
      ctx.font = '30px Arial';
      ctx.fillText(Math.floor(this.health), this.x + 15, this.y + 30);
    }
  }

  function handlePredators(){
    for (let i = 0; i < predators.length; i++){
      predators[i].update();
      predators[i].draw();
    }
    if (frame % 250 === 0){
      let verticalPosition = Math.floor(Math.random() * 5) * cellSize;
      predators.push(new Predator(verticalPosition));
      predatorPositions.push(verticalPosition);
    }
  }
  
  function createGrid(){
    for (let y = 0; y < canvas.height; y += cellSize) {
      for (let x = 0; x < canvas.width; x += cellSize) {
        gameGrid.push(new Cell(x,y));
      }
    }
  }

  class Defender {
    constructor(x,y){
      this.x = x;
      this.y = y; 
      // this.width = cellSize;
      // this.height = cellSize;
      this.width = 136;
      this.height = 128;
      this.shoot = false;
      this.timer = 0;
      // this.health = 100;
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
    for (let i = 0; i < defenders.length; i++){
      if (defenders[i].x === gridPositionX && defenders[i].y === gridPositionY){
        return;
      }
    }
    let defenderCost = 100;
    if (startingGold >= defenderCost) {
      defenders.push(new Defender(gridPositionX, gridPositionY));
      startingGold -= defenderCost;
    }
  })

  function handleDefenders(){
    for (let i = 0; i < defenders.length; i++){
      defenders[i].draw();
      defenders[i].update();
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

  console.log(gameGrid);

  function animate(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
    ctx.fillStyle = 'blue';
    // ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    handleGameGrid();
    handlePredators();
    handleDefenders();
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