import React from 'react';
import { images } from '../../constants'
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt='G'/>
    </div>
    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content__about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt='Spoon' className='spoon__img'/>
        <p className='p__opensans'>
        Assign object to a variable before exporting as module default
        Assign object to a variable before exporting as module default
        Assign object to a variable before exporting as module default
        Assign object to a variable before exporting as module default  
        </p>
        <button type='button' className='custom__button'>
          Know more
        </button>

      </div>
      <div className='app__aboutus-content__knife flex__center'>
        <img src={images.knife} alt='Knife' />
      </div>
      <div className='app__aboutus-content__history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt='Spoon' className='spoon__img'/>
        <p className='p__opensans'>
        Assign object to a variable before exporting as module default
        Assign object to a variable before exporting as module default
        Assign object to a variable before exporting as module default
        </p>
        <button type='button' className='custom__button'>
          Know more
        </button>

      </div>
    </div>
    
  </div>
);

export default AboutUs;
