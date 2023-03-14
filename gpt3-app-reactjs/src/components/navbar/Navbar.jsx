import React, {useState} from 'react'
import './navbar.css'
import logo from '../../assets/logo.svg'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
const Navbar = () => {
  const [ toggleMenu, setToggleMenu ] = useState(false);
  const Menu = () => (
    <>
      <p><a href='#home'>Home</a></p>
      <p><a href='#wgpt3'>What is GPT3</a></p>
      <p><a href='#possibility'>Open Ai</a></p>
      <p><a href='#features'>Case Studies</a></p>
      <p><a href='#blog'>Library</a></p>
    </>
  )
  return (
    <div className='navbar section__padding'>
      <div className='navbar-links'>
        <div className='navbar-links__logo'>
          <img src={logo} alt='logo'></img>
        </div>
        <div className='navbar-links__container'>
          <Menu/>
        </div>    
      </div>
      <div className='navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
      <div className='navbar-menu'>
        {
          toggleMenu
          ? <RiCloseLine size={27} onClick={() => setToggleMenu(false)}/>
          : <RiMenu3Line size={27} onClick={() => setToggleMenu(true)}/>
        }
        {
          toggleMenu && (
            <div className='navbar-menu__container scale-up-center'>
              <div className='navbar-menu-links__container'>
                <Menu/>
                <div className='navbar-menu-sign'>
                    <p>Sign in</p>
                    <button type='button'>Sign up</button>
                </div>   
              </div>
                 
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Navbar