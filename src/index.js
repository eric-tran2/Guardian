document.addEventListener('DOMContentLoaded', () => {

  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  canvas.height = '900';
  canvas.width = '1900';

  // global variables
  const cellSize = 100;
  const cellGap = 3;
  const gameGrid = [];

  // ctx.fillStyle = 'blue';
  // ctx.fillRect(0,0,250,250)

  const controlsBar = {
    height: cellSize,
    width: canvas.width,
  }

  class Cell {
    constructor(x,y){
      this.x = x;
      this.y = y;
      this.width = cellSize;
      this.height = cellSize;
    }
    draw(){
      ctx.strokeStyle = 'black';
      ctx.strokeRect(this.x, this.y, this.width, this.height);
    }
  }
  
  function createGrid(){
    for (let y = cellSize; y < canvas.height; y += cellSize) {
      for (let x = 0; y < canvas.width; x += cellSize) {
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
    ctx.fillStyle = 'blue';
    ctx.fillRect(0,0,controlsBar.width, controlsBar.height);
    handleGameGrid();
    requestAnimationFrame(animate);
  }

  animate();
})