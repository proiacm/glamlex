import React, { Component } from 'react';
import About from './About/About';
import './App.css';
import Appointment from './Appointment/Appointment';
import Carousel from './Carousel/Carousel';
import Nav from './Nav/Nav';
import Offer from './Offer/Offer';

class App extends Component {

  state = {
    services: [
      {name: 'Makeup 💄', desc: 'What I offer..', price: '$$$'},
      {name: 'Hair ✂️', desc: 'What I offer..', price: '$$$'},
      {name: 'Nails 💅', desc: 'What I offer..', price: '$$$'}
    ]
  }

  render() {

    let servicesOffered = <div>
      {this.state.services.map((service, index) => {
        return <Offer key={index} name={service.name} desc={service.desc} price={service.price}/>
      })}
    </div> 

    return (
      <div className="App">
        <Nav />
        <About />
        <h1 className='services' id='offer'>Services</h1>
        {servicesOffered}
        <Carousel />
        <Appointment />
      </div>
    );
  }
}

export default App;
