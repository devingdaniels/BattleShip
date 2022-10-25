import React from 'react'
import {Link} from 'react-router-dom'


const PlaceShipsPage = () => {

  

  return (
    <div className='placeShipsPage'>
      <h2>Place your ships, Captain!</h2>
      <p>HUD display showing which ship is currently being placed</p>
      <div className='placeShipsGrid'>
        
      </div>
      <Link to='/game-board'>
        <button className='nextScreenButton'>Ready for Battle</button>
      </Link>
    </div>
  )
}

export default PlaceShipsPage