/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
import AI from './AI';

const ai = AI();

function isDuplicate(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        // Some duplicate exists
        return true;
      }
    }
  }
  // No duplicates
  return false;
}

test('Test 0: Testing getting unique moves', () => {
  // Testing  with max memory of 3, 0-3 inclusive
  // Move array
  const array = [];
  // Add moves to array
  for (let i = 0; i < 3; i++) {
    array.push(ai.getMove());
  }
  const result1 = isDuplicate(array);
  // Validate no duplicates
  expect(result1).toBe(false);
  // Adding one more
  const full = ai.getMove();
  // Ensure there are no duplicates
  expect(full).toBe('full memory');
});
