import React from 'react'
import './feature.css'
const Feature = ({title, text}) => {
  return (
    <div className='feature-content'>
      <div className='feature-content__title'>
        <div/>
        <h1>{title}</h1>
      </div>
      <div className='feature-content__text'>
        {text}
      </div>
    </div>
  )
}

export default Feature