import React from 'react';
import './Nav.css';
import {Link} from 'react-scroll';
import logo from '../Images/logotrans.png';

const Nav = () => {

    return (
        <div className="nav">
        <img className='nav-img' src={logo} alt='logo' />
        {/* <p className='nav-li'> <Link style={{ cursor: "pointer"}} to="appointment" spy={true} smooth={true}>Appointments</Link> </p>
        <p className='nav-li'> <Link style={{ cursor: "pointer"}} to="gallery" spy={true} smooth={true}>Gallery</Link> </p>
        <p className='nav-li'> <Link style={{ cursor: "pointer"}} to="offer" spy={true} smooth={true}>Services</Link> </p>         */}

      </div>
    )
}

export default Nav;