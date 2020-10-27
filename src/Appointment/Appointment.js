import React from 'react';
import './Appointment.css';
// import LottieAnimation from '../Lottie';
// import home from '../Animation/lipstick.json';

const Appointment = () => {

    return (
        <div className='appointment' id='appointment'>
            {/* <LottieAnimation lotti={home} height={200} width={200} /> */}
            <h1>Contact me for an appointment!</h1>
            <p>Colorado Springs, CO &hearts; (000)000-0000</p> <br/>
            <div className='container'>
                <input type="text" id="name" name="name" placeholder="Name"/>
                <input type="text" id="email" name="email" placeholder="Email"/>
                <input type="text" id="phone" name="phone" placeholder="Phone"/>
                <textarea id="subject" name="subject" placeholder="How can I help you?" />
                <input type="submit" value="Submit"/>
            </div>

            <a className='Contact-link' target='_blank' href='https://www.facebook.com/makeupbyalexlamonte'><img className='img-link' src="https://i.imgur.com/sLm4Kp2.png" alt="Facebook" height="50" width="50"/></a> &nbsp; &nbsp;
            <a className='Contact-link' target='_blank' href='http://instagram.com/glamasaurus.lex/'><img className='img-link' src="https://i.imgur.com/e8C1nIQ.png" alt="Instagram" height="50" width="50"/></a> &nbsp; &nbsp;
        </div>
    )
}

export default Appointment;

