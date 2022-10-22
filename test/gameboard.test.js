/* eslint-disable no-undef */
import GameBoard from "./gameboard";

test("Test 1: Testing if receive attack method works", () => {
  const game = GameBoard();
  expect(game.receiveAttack(2, 4)).toBe("");
});

test("Test 2: Testing if receive attack returns coords", () => {
  const game = GameBoard();
  expect(game.receiveAttack(5, 5)).toBe("");
});
