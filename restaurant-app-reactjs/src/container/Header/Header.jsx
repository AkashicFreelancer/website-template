import React from 'react';
import { SubHeading } from '../../components'
import './Header.css';
import { images } from '../../constants';
const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title='Chase the new flavour'/>
      <h1 className='app__header-h1'>The Key to Fine Dining</h1>
      <p style={{margin:'2rem 0'}} className='p__opensans'>Assign object to a variable before exporting as module default</p>
      <button type='button' className='custom__button'>Explore more</button>
    </div>
    <div className='app__wrapper_img app__header_img'>
      <img src={images.welcome} alt='Welcome'/>
    </div>
  </div>
);

export default Header;
