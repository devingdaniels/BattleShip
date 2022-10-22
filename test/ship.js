// Carrier(5), Battleship(4), Cruiser(3), Submarine(3), and Destroyer (2)

const ship = (length, name = "_default") => {
  let hits = 0;
  const hit = () => {
    hits += 1;
  };
  const getName = () => name;
  const getHits = () => hits;
  const isSunk = () => hits === length;
  return { name, length, hit, getHits, getName, isSunk };
};

module.exports = ship;
