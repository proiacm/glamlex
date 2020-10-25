import React, { Component } from 'react';
import About from './About/About';
import './App.css';
import Appointment from './Appointment/Appointment';
import Nav from './Nav/Nav';
import Offer from './Offer/Offer';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Nav />
        <About />
        <Offer />
        <Appointment />
      </div>
    );
  }
}

export default App;
