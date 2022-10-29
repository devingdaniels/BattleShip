/* eslint-disable no-console */
/* eslint-disable no-plusplus */

const GameBoard = () => {
  const board = [
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
  ];
  const placeShip = (y, x, ship, vertical) => {
    if (vertical === true) {
      for (let i = 0; i < ship.getLength(); i++) {
        board[y + i][x] = ship;
      }
    } else {
      for (let i = 0; i < ship.getLength(); i++) {
        board[y][x + i] = ship;
      }
    }
  };
  const receiveAttack = (y, x) => {
    if (board[y][x] !== '') {
      board[y][x].hit();
      return 'hit';
    }
    return 'miss';
  };
  // Check if all ships on the board are sunk
  const isFleetSunk = () => {
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        if (board[i][j] !== '') {
          if (board[i][j].isSunk() === true) {
            console.log(board[i][j].getName());
            return true;
          }
        }
      }
    }
    return false;
  };
  // Development testing function
  const getValueAtCoord = (y, x) => board[y][x];
  return {
    receiveAttack, placeShip, getValueAtCoord, isFleetSunk,
  };
};

export default GameBoard;
