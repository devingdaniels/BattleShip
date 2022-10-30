/* eslint-disable no-plusplus */
import './placeShips.css';

function setShip(e) {
  const y = e.target.getAttribute('yCoord');
  const x = e.target.getAttribute('xCoord');
  console.log(`y:${y}, x:${x}`);
}
function changeColor(e) {
  e.target.style.backgroundColor = 'blue';
}

function createGrid() {
  // Get the parent container
  const gridContainer = document.getElementById('gridContainer');
  // Set the grid size
  const gridSize = 10;
  // Update parent grid rules
  gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
  // Add children and children attributes
  for (let y = 0; y < gridSize; y++) {
    for (let x = 0; x < gridSize; x++) {
      const gridSquare = document.createElement('div');
      // gridSquare.style.userSelect = 'none';
      gridSquare.style.margin = '0';
      gridSquare.style.border = '1px solid black';
      gridSquare.style.cursor = 'pointer';
      gridSquare.setAttribute('yCoord', y);
      gridSquare.setAttribute('xCoord', x);
      gridSquare.addEventListener('click', (e) => {
        setShip(e);
      });
      gridSquare.addEventListener('mouseover', (e) => {
        changeColor(e);
      });
      gridContainer.appendChild(gridSquare);
    }
  }
}

export default createGrid;
