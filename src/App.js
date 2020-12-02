import React, { Component } from 'react';
import Gallery from './Gallery/Gallery';
import About from './About/About';
import './App.css';
import Appointment from './Appointment/Appointment';
import Nav from './Nav/Nav';
import Offer from './Offer/Offer';
import lips from './Images/lips.png';

class App extends Component {

  state = {
    services: [
      {name: 'Makeup 💄', desc: 'Services offered...', price: '$$$'},
      {name: 'Hair ✂️', desc: 'Services offered...', price: '$$$'},
      {name: 'Nails 💅', desc: 'Services offered...', price: '$$$'}
    ]
  }

  render() {

    let services = <div>
      {this.state.services.map((service, index) => {
        return <Offer key={index} name={service.name} desc={service.desc} price={service.price}/>
      })}
    </div> 

    return (
      <div className="App">
        <Nav />
        <About />
        {services}
        <img className='lip-img' src={lips}/>
        <Gallery />
        <Appointment />
      </div>
    );
  }
}

export default App;
