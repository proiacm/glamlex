import React from 'react';
import './Nav.css';
import {Link} from 'react-scroll';

const Nav = () => {

    return (
        <div className="sidenav">
        <h2>Glamlex <br/>by Alex Lamonte</h2>  
        <Link style={{ cursor: "pointer"}} to="about" spy={true} smooth={true}><u>About</u></Link>
        <Link style={{ cursor: "pointer"}} to="offer" spy={true} smooth={true}><u>Services</u></Link>
        <Link style={{ cursor: "pointer"}} to="gallery" spy={true} smooth={true}><u>Gallery</u></Link>
        <Link style={{ cursor: "pointer"}} to="appointment" spy={true} smooth={true}><u>Appointments</u></Link>
      </div>
    )
}

export default Nav;