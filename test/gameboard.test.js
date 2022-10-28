/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
import GameBoard from './GameBoard';
import Ship from './Ship';
import Fleet from '../Fleet';

// Create a game
const game = GameBoard();

test(' Test 1: Testing placing a ship at specific coordinate', () => {
  // Create a ship
  const destroyer = Ship(Fleet[4]);
  // Place the ship
  game.placeShip(0, 0, destroyer);
  expect(game.getValueAtCoord(0, 0)).toBe(destroyer);
  expect(game.getValueAtCoord(0, 1)).toBe(destroyer);
});

test('Test 2: Testing placing a ship at specific coordinate and attacking', () => {
  // Create a ship
  const destroyer = Ship(Fleet[4]);
  // Place the ship
  game.placeShip(1, 1, destroyer, false);
  expect(game.receiveAttack(2, 0)).toBe('miss');
  expect(game.receiveAttack(1, 1)).toBe('hit');
  expect(game.receiveAttack(1, 2)).toBe('hit');
  expect(destroyer.isSunk()).toBe(true);
});

test('Test 3: Testing placing a ship vertical at specific location', () => {
  // Create a ship
  const destroyer = Ship(Fleet[4]);
  // Place the ship
  game.placeShip(3, 0, destroyer, true);
  expect(game.getValueAtCoord(3, 0)).toBe(destroyer);
  expect(game.getValueAtCoord(3, 1)).toBe('');
  expect(game.getValueAtCoord(4, 0)).toBe(destroyer);
});

test('Test 4: Testing getting ships from the array after adding fleet', () => {
  // Add all the ships from the fleet to the board at unique locations
  const gameBoard2 = GameBoard();
  for (let i = 0; i < Fleet.length; i++) {
    gameBoard2.placeShip(i, i, Ship(Fleet[i]));
  }
  // Sink the first ship
  gameBoard2.receiveAttack(1, 1);
  gameBoard2.receiveAttack(1, 2);
  gameBoard2.receiveAttack(1, 3);
  gameBoard2.receiveAttack(1, 4);
  expect(gameBoard2.isFleetSunk()).toBe(true);
});
