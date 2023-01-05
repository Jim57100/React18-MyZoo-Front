import React, { useState } from 'react';
import logo from '../../assets/images/logo.png'
import { FaBars, FaTimes } from 'react-icons/fa'
import { GiTicket } from 'react-icons/gi'
import { NavLink } from 'react-router-dom';
import brush from '../../assets/images/brush.png'
import './navbar.css'

const NavBar = () => {

  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  const closeMenu = () => setClick(false)

  //change nav color when scrolling
  const [color, setColor] = useState(false);

  const changeColor = () => {
    window.scrollY >= 10 ? setColor(true) : setColor(false);
  }
  document.addEventListener('scroll', changeColor);
  
  return (
    <div className={color ? 'header header-bg' : 'header'}>
      <nav className='navbar'>
        <a href='/' className='logo'>
            <img src={logo} alt='logo' style={{ height: 100, width: 100}}/>
        </a>
        <div className='hamburger' onClick={handleClick}>
          {click 
            ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
            : (<FaBars size={30} style={{ color: '#ffffff' }} />)}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className='nav-item'>
              <NavLink 
                to="/"
                onClick={closeMenu}
              >
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink 
                to="/animals"
                onClick={closeMenu}
              >
                Le parc et ses animaux
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink 
                to="/shows" 
                onClick={closeMenu}
              >
                Les spectacles
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink 
                to="/resort"
                onClick={closeMenu} 
              >
                Préparez votre visite
              </NavLink>
            </li>
            <li className='nav-item ticket-container'>
            <div className='brush'>
              <img src={brush} alt="brush" style={{ width: 140 }}/>
            </div>
              <NavLink 
                to="/tickets" 
                onClick={closeMenu}
              >
                <span className="ticket"><GiTicket size={30}/></span>
                Billetterie
              </NavLink>
            </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar;