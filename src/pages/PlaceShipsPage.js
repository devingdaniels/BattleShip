import React from 'react'
import {Link} from 'react-router-dom'


const PlaceShipsPage = () => {
  return (
    <>
      <h2>Place your ships, Captain</h2>
      <Link to='/game-board'>
        <button>Ready for Battle</button>
      </Link>
    </>
  )
}

export default PlaceShipsPage