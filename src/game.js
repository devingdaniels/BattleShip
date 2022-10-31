/* eslint-disable no-plusplus */
// Function for rendering the place ship grid
import createPlaceShipGrid from './createPlaceShipGrid';
// Object of ships
import Fleet from '../Fleet';
// Ship factory function
import Ship from '../test/Ship';
// Player factory function
import Player from '../test/Player';

const createGame = () => {
  // Create a new player
  const player = Player();
};

createGame();

// 1. Load grid
// 2. Iterate through the Fleet, click on square to place ship (make sure whole ship fits on coord)
// 3. Once placed, add ship to the player board
// 4. After all ships placed, load game board page
// 5. On game board load, create AI and random place ships
// 6. On attack, run player and AI board functions.
// 7. After each run of hits, check if either AI or player isFleetSunk === true
