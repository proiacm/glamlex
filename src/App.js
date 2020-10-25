import React, { Component } from 'react';
import About from './About/About';
import './App.css';
import Appointment from './Appointment/Appointment';
import Nav from './Nav/Nav';
import Offer from './Offer/Offer';

class App extends Component {

  state = {
    services: [
      {name: 'Makeup'},
      {name: 'Hair'},
      {name: 'Nails'}
    ]
  }

  render() {

    let servicesOffered = <div>
      {this.state.services.map((service, index) => {
        return <Offer key={index} name={service.name}/>
      })}
    </div> 

    return (
      <div className="App">
        <Nav />
        <About />
        <h1>Services</h1>
        {servicesOffered}
        <Appointment />
      </div>
    );
  }
}

export default App;
