// Game board factory function
import GameBoard from './GameBoard';

function Player() {
  const board = GameBoard();
  // Return objects
  return {
    board,
  };
}

export default Player;
