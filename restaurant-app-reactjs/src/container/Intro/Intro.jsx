import React from 'react';
import { meal } from '../../constants';
import './Intro.css';
import { BsPauseFill, BsFillPlayFill} from 'react-icons/bs'
const Intro = () => {
  const videoRef = React.useRef()
  const [playVideo, setPlayVideo] = React.useState(false);
  const handleClick = ((prevPlayVideo) => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo)

    if(playVideo) {
      videoRef.current.pause();
    }
    else {
      videoRef.current.play();
    }
  })

  return(
    <div className='app__intro flex__center'>
      <video 
        src={meal}
        ref={videoRef}
        typeof="video/mp4"
        loop
        controls={false}
        muted
      />
      <div className='app__intro__overlay flex__center'>
        <div 
          className='app__intro__overlay-circle flex__center'
          onClick={() => handleClick(playVideo)}
        >
        {
          playVideo
          ? (<BsPauseFill color='#FFF' fontSize={30}/>)
          : (<BsFillPlayFill color='#FFF' fontSize={30}/>)
        }
          
        </div>
      </div>
    </div>
    );
} 
  


export default Intro;
