import React, { Component } from 'react';
import Gallery from './Gallery/Gallery';
import './App.css';
import Appointment from './Appointment/Appointment';
import Nav from './Nav/Nav';
import Offer from './Offer/Offer';
import Sidenav from './Sidenav/Sidenav';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {

  state = {
    services: [
      {name: 'Makeup', desc: 'Service offered', price: '$$$'},
      {name: 'Hair', desc: 'Service offered', price: '$$$'},
      {name: 'Nails', desc: 'Service offered', price: '$$$'}
    ],
    name: '',
    phone: '',
    email: '',
    message:''
  }


    
  nameChangeHandler = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  phoneChangeHandler = (event) => {
    this.setState({
      phone: event.target.value
    })
  }

  emailChangeHandler = (event) => {
    this.setState({
      email: event.target.value
    })
  }

  messageChangeHandler = (event) => {
    this.setState({
      message: event.target.value
    })
  }

  submitHandler = (event) => {
    event.preventDefault()
    event.currentTarget.reset();
    toast.warning("Thank you for reaching out!");
  }


  render() {

    let services = <div className='offer-container'>
      {this.state.services.map((service, index) => {
        return <Offer key={index} name={service.name} desc={service.desc} price={service.price}/>
      })}
    </div> 

    return (
      <div className="App">
        <Sidenav />
        <Nav />
        {services}
        <Gallery />
        <Appointment 
        name={this.state.name}
        phone={this.state.phone}
        email={this.state.email}
        message={this.state.message}
        nameChanged={this.nameChangeHandler}
        phoneChanged={this.phoneChangeHandler}
        emailChanged={this.emailChangeHandler}
        messageChanged={this.messageChangeHandler}
        submit={this.submitHandler}
        />
        <ToastContainer 
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
      </div>
    );
  }
}

export default App;
