import React from 'react';
import './Appointment.css';
import facebook from '../Images/facebook.png';
import instagram from '../Images/instagram.png';

const Appointment = () => {

    return (
        <div className='appointment' id='appointment'>
            <h1>Request an Appointment</h1>
            <p><strong>Colorado Springs, CO - (123)456-7890</strong></p> <br/>
            <div className='container'>
                <input type="text" id="name" name="name" placeholder="Name"/>
                <input type="text" id="email" name="email" placeholder="Email"/>
                <input type="text" id="phone" name="phone" placeholder="Phone"/>
                <textarea id="subject" name="subject" placeholder="How can I help you?" />
                <input type="submit" value="Submit"/>
            </div>

            <a className='Contact-link' target='_blank' href='https://www.facebook.com/makeupbyalexlamonte'><img className='img-link' src={facebook} alt="Facebook" height="45" width="45"/></a> &nbsp; &nbsp;
            <a className='Contact-link' target='_blank' href='http://instagram.com/glamasaurus.lex/'><img className='img-link' src={instagram} alt="Instagram" height="60" width="60"/></a> &nbsp; &nbsp;
        </div>
    )
}

export default Appointment;

