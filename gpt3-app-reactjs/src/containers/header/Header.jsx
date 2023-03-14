import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'
const Header = () => {
  return (
    <div className='header section__padding'>
      <div className='header-content'>
        <h1 className='gradient__text'>
          Let's Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>Chania is the capital of the Chania region on the island of Crete. The city can be divided in two parts, the old town and the modern city.</p>
        
        <div className='header__input'>
          <input type="email" placeholder='Type Email Address'></input>
          <button type='button'>Get Start</button>
        </div>

        <div className='header__people'>
          <img src={people} alt='People'></img>
          <p>1.000 people requested access a visit</p>
        </div>
      </div>
      
      <div className='header-img'>
        <img src={ai} alt='AI'></img>
      </div>
    </div>
  )
}

export default Header