import React from 'react';
import './Nav.css';
import logo from '../Images/glamlogo.png';

const Nav = () => {

    return (
        <div className="nav" id='home'>
        <img className='nav-img' src={logo} alt='logo' />
      </div>
    )
}

export default Nav;