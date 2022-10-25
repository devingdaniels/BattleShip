import React from 'react'
import {Link} from 'react-router-dom'


const WelcomePage = () => {
  const date = new Date().getFullYear()
  return ( 
    <div className='homePage'>
      <h1 className='battleShipHeading'>BattleShip</h1>
      <Link to='place-ships'>
        <button className='nextScreenButton'>Start Game</button>
      </Link>
      <p className='footer'>Created &copy;<i>{date}</i><cite> Devin Daniels</cite></p>
    </div>
  )
}

export default WelcomePage