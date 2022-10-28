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

test('Test 1: Place a ship, attack ship, ship sink', () => {
  // Add ship - length 3
  const cruiser = Ship(Fleet[2]);
  // Add ship to player board
  player.board.placeShip(5, 0, cruiser);
  // Make a miss
  expect(player.board.receiveAttack(6, 0)).toBe('miss');
  // Make a hit
  expect(player.board.receiveAttack(5, 0)).toBe('hit');
  // Make hit
  expect(player.board.receiveAttack(5, 1)).toBe('hit');
  // Make miss
  expect(player.board.receiveAttack(5, 4)).toBe('miss');
  // Final hit
  expect(player.board.receiveAttack(5, 2)).toBe('hit');
  // Get the ship through the player's board
  const theShip = player.board.getValueAtCoord(5, 0);
  // Fully hit
  expect(theShip.isSunk()).toBe(true);
});
