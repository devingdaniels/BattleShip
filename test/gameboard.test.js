/* eslint-disable no-undef */
import GameBoard from './GameBoard';
import Ship from './Ship';
import Fleet from '../Fleet';

// Create a game
const game = GameBoard();

test('1: Testing placing a ship at specific coordinate', () => {
  // Create a ship
  const destroyer = Ship(Fleet[4]);
  // Place the ship
  game.placeShip(0, 0, destroyer);
  expect(game.getValueAtCoord(0, 0)).toBe(destroyer);
  expect(game.getValueAtCoord(0, 1)).toBe(destroyer);
});

test('2: Testing placing a ship at specific coordinate and attacking', () => {
  // Create a ship
  const destroyer = Ship(Fleet[4]);
  // Place the ship
  game.placeShip(1, 1, destroyer, false);
  expect(game.receiveAttack(2, 0)).toBe('miss');
  expect(game.receiveAttack(1, 1)).toBe('hit');
  expect(game.receiveAttack(1, 2)).toBe('hit');
  expect(destroyer.isSunk()).toBe(true);
});

test('3: Testing placing a ship vertical at specific location', () => {
  // Create a ship
  const destroyer = Ship(Fleet[4]);
  // Place the ship
  game.placeShip(3, 0, destroyer, true);
  expect(game.getValueAtCoord(3, 0)).toBe(destroyer);
  expect(game.getValueAtCoord(3, 1)).toBe('');
  expect(game.getValueAtCoord(4, 0)).toBe(destroyer);
});
