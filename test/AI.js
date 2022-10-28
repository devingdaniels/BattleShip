// Game board factory function
import GameBoard from './GameBoard';

function AI() {
  // Holds random moves made by the AI
  const memory = [];
  // AI's game board
  const board = GameBoard();
  // AI move generator between 0 - 99
  const getMove = () => {
    // Upper bound of .random (testing with low upper bound)
    const max = 3;
    // Lower bound of .random
    const min = 0;
    // Current move as an integer
    let move = -1;
    // Flag for while loop
    let flag = true;
    while (flag) {
      if (memory.length === max) return 'full memory';
      move = Math.floor(Math.random() * (max - min + 1) + min);
      // Check for unique value
      if (!memory.includes(move)) {
        flag = false;
      }
    }
    // Valid move, add to memory
    memory.push(move);
    // Return the move
    return move;
  };
  // Return objects
  return {
    board, getMove,
  };
}

export default AI;
