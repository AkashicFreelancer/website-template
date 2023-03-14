import React from 'react'
import './features.css'
import Feature from '../../components/feature/Feature'
const Features = () => {
  return (
    <div className='features section__padding'>
      <div className='features-title'>
        <h1 className='gradient__text'>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen</h1>
        <p className='gradient__text'>Request Early Access to Get Started</p>
      </div>
      <div className='features-content'>
          <Feature title={'Hello'} text='The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen'/>
          <Feature title={'Hello'} text='The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen'/>
          <Feature title={'Hello'} text='The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen'/>
          <Feature title={'Hello'} text='The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen'/>
      </div>
    </div>
  )
}

export default Features