/* eslint-disable no-plusplus */
import './placeShips.css';

function pressed(e) {
  console.log(e.target.getAttribute('index'));
}
function changeColor(e) {
  e.target.style.backgroundColor = 'blue';
}

function createGrid() {
  const gridContainer = document.getElementById('gridContainer');

  const gridSize = 10;

  gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

  for (let i = 0; i < gridSize * gridSize; i++) {
    const newDiv = document.createElement('div');
    // newDiv.style.userSelect = "none";
    newDiv.style.margin = '0';
    newDiv.style.border = '1px solid red';
    newDiv.style.cursor = 'pointer';
    newDiv.setAttribute('index', i);
    newDiv.addEventListener('click', (e) => {
      pressed(e);
    });
    newDiv.addEventListener('mouseover', (e) => {
      changeColor(e);
    });
    gridContainer.appendChild(newDiv);
  }
}

createGrid();
