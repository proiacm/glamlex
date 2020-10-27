import React from 'react';
import './Appointment.css';
import ReactContactForm from 'react-mail-form';

const Appointment = () => {

    return (
        <div className='appointment' id='appointment'>
            <h1>Contact me for an appointment!</h1>
            <ReactContactForm className='form' to="" />
            <a className='Contact-link' target='_blank' href='https://www.facebook.com/makeupbyalexlamonte'><img src="https://i.imgur.com/cE0Zk8k.png" alt="Facebook" height="50" width="50"/></a> &nbsp; &nbsp;
            <a className='Contact-link' target='_blank' href=''><img src="https://i.imgur.com/e8C1nIQ.png" alt="Instagram" height="50" width="50"/></a> &nbsp; &nbsp;
        </div>
    )
}

export default Appointment;

