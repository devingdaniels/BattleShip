import React from 'react'
import {Link} from 'react-router-dom'

const WelcomePage = () => {
  return (
    <>
    <h1>WelcomePage</h1>
    <Link to='place-ships'>Start Game</Link>
    </>
  )
}

export default WelcomePage