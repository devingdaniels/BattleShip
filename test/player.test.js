import Player from './playerTest'
import ShipFleet from '../shipFleet'
import Ship from './ship'


const player = Player()

test("0: Testing game board variable in Player", () => {
    
    expect(player.gameBoard).not.toBe(undefined)
})

test('1: Adding a ship though player prop', () =>{
    const destroyer = Ship(ShipFleet[4])
    player.gameBoard.placeShip(0, 0 , destroyer, true)
    expect(player.gameBoard.getValueAtCoord(0, 0 )).toBe('des2')
    expect(player.gameBoard.getValueAtCoord(1, 0 )).toBe('des2')
})