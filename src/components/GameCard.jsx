import React from 'react'
import { Link } from 'react-router-dom'

const GameCard = ({ mode }) => {
  return (
    // <div className="card-box text-center">
    //   <h6 className="text-white">{mode}</h6>
    // </div>
    <div className="FixCard-box">
      <Link to="/game-list">
        <img src={mode} alt="" />
      </Link>
    </div>
  )
}

export default GameCard


