import React from 'react'
import './possibility.css'
import possibilityImage from '../../assets/possibility.png'
const Possibility = () => {
  return (
    <div className='possibility section__padding'>
      <div className='possibility-image'>
        <img src={possibilityImage} alt='possibility'/>
      </div>
      <div className='possibility-content'>
        <h4>Request Early Access to Get Started</h4>
        <h1 className='gradient__text'>The possibility are beyond your imagination</h1>
        <p>
          The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen
          The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen
        </p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Possibility