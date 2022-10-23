/* eslint-disable no-undef */
import ship from "./ship";
import Shipyard from "../shipyard";

test("Test 1: Testing ship getName(), get ID(), function", () => {
  const destroyer = ship(Shipyard[4]);
  expect(destroyer.getName()).toBe("destroyer");
  expect(destroyer.getId()).toBe("des2");
  // Try and change the ID
  destroyer.id = "pat3";
  expect(destroyer.getId()).not.toBe("pat3");
});

test("Test 2: Testing ship hit(), getHit() function", () => {
  const cruiser = ship(Shipyard[2]);
  cruiser.hit();
  expect(cruiser.getHits()).toBe(1);
});

test("Test 3: Testing ship getHits() function", () => {
  const submarine = ship(Shipyard[3]);
  submarine.hit();
  submarine.hit();
  submarine.hit();
  expect(submarine.getHits()).toBe(3);
});

test("Test 4: Testing ship isSunk() function", () => {
  const carrier = ship(Shipyard[0]);
  carrier.hit();
  carrier.hit();
  carrier.hit();
  expect(carrier.isSunk()).not.toBe(true);
  carrier.hit();
  carrier.hit();
  expect(carrier.isSunk()).toBe(true);
});
