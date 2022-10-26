// Carrier(5), Battleship(4), Cruiser(3), Submarine(3), and Destroyer (2)
const ship = (type) => {
  let hits = 0;
  const hit = () => {
    hits += 1;
  };
  const getName = () => type.name;
  const getId = () => type.id;
  const getHits = () => hits;
  const getLength = () => type.length;
  const isSunk = () => {
    if (hits === type.length) {
      return true;
    }
    return false;
  };
  return { getName, getId, getLength, hit, getHits, isSunk };
};

module.exports = ship;
