import React, { Component } from 'react';
import Gallery from './Gallery/Gallery';
import About from './About/About';
import './App.css';
import Appointment from './Appointment/Appointment';
import Nav from './Nav/Nav';
import Offer from './Offer/Offer';

class App extends Component {

  state = {
    services: [
      {name: 'Makeup', desc: 'Service offered -', price: '$$$'},
      {name: 'Hair', desc: 'Service offered -', price: '$$$'},
      {name: 'Nails', desc: 'Service offered -', price: '$$$'}
    ]
  }

  render() {

    let services = <div className='offer-container' id='offer'>
      {this.state.services.map((service, index) => {
        return <Offer key={index} name={service.name} desc={service.desc} price={service.price}/>
      })}
    </div> 

    return (
      <div className="App">
        <Nav />
        <About />
        {services}
        <Gallery />
        <Appointment />
      </div>
    );
  }
}

export default App;
