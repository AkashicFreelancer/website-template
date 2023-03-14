import React, {useState} from 'react';
import './Navbar.css';
import { images } from '../../constants'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'
const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <div className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.gericht} alt='logo'/>
      </div>
      <ul className='app__navbar-links'>
        <li className='p__opensans'><a href='#home'>Home</a></li>
        <li className='p__opensans'><a href='#about'>About</a></li>
        <li className='p__opensans'><a href='#menu'>Menu</a></li>
        <li className='p__opensans'><a href='#awards'>Awards</a></li>
        <li className='p__opensans'><a href='#contact'>Contact</a></li>
      </ul>
      <div className='app__navbar-login'>
        <a href='#login' className='p__opensans'>Log In / Register</a>
        <div/>
        <a href='/' className='p__opensans'>Book Table</a>
      </div>
      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggle(true)}></GiHamburgerMenu>
        {
          toggle && 
          <div className='app__navbar-smallsceen__overlay flex__center slide-bottom'>
            <MdOutlineRestaurantMenu color='#fff' fontSize={27} className="overlay__close" onClick={() => setToggle(false)}></MdOutlineRestaurantMenu>
            <ul className='app__navbar-smallscreen-links'>
              <li className='p__opensans'><a href='#home'>Home</a></li>
              <li className='p__opensans'><a href='#about'>About</a></li>
              <li className='p__opensans'><a href='#menu'>Menu</a></li>
              <li className='p__opensans'><a href='#awards'>Awards</a></li>
              <li className='p__opensans'><a href='#contact'>Contact</a></li>
              
              <div className='app__navbar-smallscreen-login'>
                <a href='#login' className='p__opensans'>Log In / Register</a>
            
                <a href='/' className='p__opensans'>Book Table</a>
              </div>
            </ul>
          </div>
        }
        
      </div>
    </div>
  )
}

export default Navbar;
