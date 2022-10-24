/* eslint-disable no-plusplus */
const GameBoard = () => {
  const board = [
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""]
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
    if (board[y][x] !== "") {
      board[y][x].hit();
      return "hit";
      // Call the hit function on the ship and check if sunk
    }
    return "miss";
    // Record the shot on the array and update the UI
  };
  const getValueAtCoord = (y, x) => {
    if (board[y][x] !== "") {
      return board[y][x].getId();
    }
    return "";
  };
  return { receiveAttack, placeShip, getValueAtCoord };
};

module.exports = GameBoard;
