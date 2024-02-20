import React, { useState } from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'

import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";

const Menu = () => (
  <>
    <li className='p__opensans'><a href='#home'>Home</a></li>
    <li className='p__opensans'><a href='#about'>About</a></li>
    <li className='p__opensans'><a href='#products'>Products</a></li>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={logo} alt='logo'></img>
      </div>
      <ul className='app__navbar-links'>
        <Menu />
      </ul>

      <div className='app__navbar-smallscreen'>
        <FiMenu fontSize={27} onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
            <MdClose fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)} />
            <ul className='app__navbar-smallscreen_links'>
              <Menu />

            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
