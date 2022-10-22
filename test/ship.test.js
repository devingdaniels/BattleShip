/* eslint-disable no-undef */
import ship from "./ship";

test("Test 1: Testing ship getName() function", () => {
  const patrol = ship(2, "patrol");
  expect(patrol.getName()).toBe("patrol");
});

test("Test 2: Testing ship hit() function", () => {
  const patrol = ship(2, "patrol");
  patrol.hit();
  expect(patrol.getHits()).toBe(1);
});

test("Test 3: Testing ship getHits() function", () => {
  const cruiser = ship(3, "Cruiser");
  cruiser.hit();
  cruiser.hit();
  cruiser.hit();
  expect(cruiser.getHits()).toBe(3);
});

test("Test 4: Testing ship isSunk() function", () => {
  const cruiser = ship(3, "Cruiser");
  cruiser.hit();
  cruiser.hit();
  cruiser.hit();
  expect(cruiser.isSunk()).toBe(true);
});
