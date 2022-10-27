/* eslint-disable no-undef */
import Player from './Player';
import Ship from './Ship';
import Fleet from '../Fleet';

const player = Player();

test('Test 0: Placing ship on player board', () => {
// Add a ship
  const destroyer = Ship(Fleet[4]);
  // Add ship to player game board
  player.board.placeShip(0, 0, destroyer);
  expect(player.board.getValueAtCoord(0, 0)).toBe(destroyer);
});
