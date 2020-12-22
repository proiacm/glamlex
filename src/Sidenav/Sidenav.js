import React, {Component} from 'react';
import './Sidenav.css';
import { slide as Menu } from 'react-burger-menu';
import {Link} from 'react-scroll';

class Sidenav extends Component {

    state = {
      menuOpen: false
    }

    handleStateChange(state) {
      this.setState({menuOpen: state.isOpen})  
    }
    
    // closes menu on link click
    closeMenu() {
      this.setState({menuOpen: false})
    }


  render () {

    return (
      <div className='sidenav'>
        <Menu right width={ '15%' } isOpen={this.state.menuOpen} onStateChange={(state) => this.handleStateChange(state)}>
        <Link className='nav-li' style={{ cursor: "pointer"}} to="home" spy={true} smooth={true} onClick={() => this.closeMenu()}>Home</Link>
          <Link className='nav-li' style={{ cursor: "pointer"}} to="offer" spy={true} smooth={true} onClick={() => this.closeMenu()}>Services</Link>
          <Link className='nav-li' style={{ cursor: "pointer"}} to="gallery" spy={true} smooth={true} onClick={() => this.closeMenu()}>Gallery</Link>
          <Link className='nav-li' style={{ cursor: "pointer"}} to="appointment" spy={true} smooth={true} onClick={() => this.closeMenu()}>Appointments</Link>
        </Menu>    
      </div>
    );
  }
}

export default Sidenav;