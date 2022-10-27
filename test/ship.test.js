/* eslint-disable no-undef */
import Ship from './Ship';
import Fleet from '../Fleet';

test('1: Testing ship getName(), get ID(), function', () => {
  const destroyer = Ship(Fleet[4]);
  expect(destroyer.getName()).toBe('Destroyer');
  expect(destroyer.getId()).toBe('des2');
  // Try and change the ID
  destroyer.id = 'pat3';
  expect(destroyer.getId()).not.toBe('pat3');
});

test('2: Testing ship hit(), getHit() function', () => {
  const cruiser = Ship(Fleet[2]);
  cruiser.hit();
  expect(cruiser.getHits()).toBe(1);
});

test('3: Testing ship getHits() function', () => {
  const submarine = Ship(Fleet[3]);
  submarine.hit();
  submarine.hit();
  submarine.hit();
  expect(submarine.getHits()).toBe(3);
});

test('4: Testing ship isSunk() function', () => {
  const carrier = Ship(Fleet[0]);
  carrier.hit();
  carrier.hit();
  carrier.hit();
  expect(carrier.isSunk()).not.toBe(true);
  carrier.hit();
  carrier.hit();
  expect(carrier.isSunk()).toBe(true);
});
