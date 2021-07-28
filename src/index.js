document.addEventListener('DOMContentLoaded', () => {

  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  canvas.height = 750;
  canvas.width = 2100;

  // global variables
  const cellSize = 75;
  const cellGap = 3;
  const gameGrid = [];
  const predators = [];
  const predatorPositions = [];
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

  class Predator {
    constructor(verticalPosition) {
      this.x = canvas.width;
      this.y = verticalPosition;
      this.width = cellSize;
      this.height = cellSize;
      this.speed = Math.random() * 0.9 + 1;
      this.movement = this.speed;
      this.health = 10;
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
    if (frame % 150 === 0){
      let verticalPosition = Math.floor(Math.random() * 5 + 1) * cellSize;
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


})