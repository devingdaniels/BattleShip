import React from 'react'
import {Link} from 'react-router-dom'

const WelcomePage = () => {
  return (    
    <div className='homePage'>
      <Link to='place-ships'>
        <button className='startGame'>Start Game</button>
        </Link>
    </div>
  )
}

export default WelcomePage