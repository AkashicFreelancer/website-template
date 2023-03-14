import React from 'react'
import './footer.css'
import logo from '../../assets/logo.svg'
const Footer = () => {
  return (
    <div className='footer section__padding'>
      <div className='footer-heading'>
        <h1 className='gradient__text'>Do you want to step into the future before others</h1>
      </div>
      <div className='footer-btn'>
        <p>Request Early Access</p>
      </div>
      <div className='footer-links'>
        <div className='footer-links__logo'>
          <img src={logo} alt='Logo'/>
          <p>All Rights Reserved</p>
        </div>
        <div className='footer-links__column'>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className='footer-links__column'>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className='footer-links__column'>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className='footer-links__column'>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
      </div>
      <div className='footer-copyright'>
        <p>@2021 GPT-3. All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer