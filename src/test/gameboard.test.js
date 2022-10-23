/* eslint-disable no-undef */
import GameBoard from "./gameboard";
import Ship from "./ship";
import Shipyard from "../shipyard";

// Create a game
const game = GameBoard();

test("1: Testing placing a ship at specific coordinate", () => {
  // Create a ship
  const destroyer = Ship(Shipyard[4]);
  // Place the ship
  game.placeShip(0, 0, destroyer);
  expect(game.getValueAtCoord(0, 0)).toBe("des2");
  expect(game.getValueAtCoord(0, 1)).toBe("des2");
});

test("2: Testing placing a ship at specific coordinate and attacking", () => {
  // Create a ship
  const destroyer = Ship(Shipyard[4]);
  // Place the ship
  game.placeShip(1, 1, destroyer, false);
  expect(game.receiveAttack(2, 0)).toBe("miss");
  expect(game.receiveAttack(1, 1)).toBe("hit");
  expect(game.receiveAttack(1, 2)).toBe("hit");
  expect(destroyer.isSunk()).toBe(true);
});

test("3: Testing placing a ship vertical at specific location", () => {
  // Create a ship
  const destroyer = Ship(Shipyard[4]);
  // Place the ship
  game.placeShip(3, 0, destroyer, true);
  expect(game.getValueAtCoord(3, 0)).toBe("des2");
  expect(game.getValueAtCoord(3, 1)).toBe("");
  expect(game.getValueAtCoord(4, 0)).toBe("des2");
});

