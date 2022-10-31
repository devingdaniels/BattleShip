/* eslint-disable no-plusplus */
import './placeShips.css';

function placeShipFromCoords(e) {
  const y = e.target.getAttribute('yCoord');
  const x = e.target.getAttribute('xCoord');
  console.log(`from getCoords... y:${y}, x:${x}`);
  return { y, x };
}
function createPlaceShipGrid() {
  // Get the parent container
  const gridContainer = document.getElementById('gridContainer');
  // Clear the previous grid
  gridContainer.innerHTML = '';
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
        placeShipFromCoords(e);
      });
      gridContainer.appendChild(gridSquare);
    }
  }
}

export default createPlaceShipGrid;
