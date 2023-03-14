import React from 'react';
import {BsInstagram, BsArrowLeftShort, BsArrowRightShort} from 'react-icons/bs'
import './Gallery.css';
import {SubHeading} from '../../components'
import { images } from '../../constants';

const Gallery = () => {
  const refScroll = React.useRef(null)
  const scroll = (direction) => {
    const { current } = refScroll;
    if(direction === 'left') {
      current.scrollLeft -= 300
    }
    else {
      current.scrollLeft += 300
    }
  }
  const imageArr = [images.gallery01, images.gallery02, images.gallery03, images.gallery04]
  return(
    <div className='app__gallery flex__center section__padding'>
      <div className='app__gallery-content'>
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: '#AAAAAA', marginTop: '2rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
        <button type="button" style={{margin: '1rem 0'}} className="custom__button">View More</button>
      </div>
      <div className='app__gallery-images'>
        <div className='app__gallery-images-container' ref={refScroll}>
          {
            imageArr.map((image, index) => (
            <div className='app__gallery-images_card flex__center' key={index++}>
              <img src={image} alt='Image_Gallery'/>
              <BsInstagram className='app__gallery-images_card-icon'/>
            </div>
            ))
          }
        </div>
        <div className='app__gallery-images-arrows'>
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  );

}

export default Gallery;

