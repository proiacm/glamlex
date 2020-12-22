import React from 'react';
import './Appointment.css';

const Appointment = (props) => {

    return (
        <div className='appointment' id='appointment'>
            <h4 className='apt-text'>
                Glamlex <br/>
                Adress Line 1 <br/>
                Colorado Springs, CO <br/>
                (000)000-0000 <br/>
                Tuesday to Sunday <br/>
                7am to 7pm
            </h4>
            <h4 className='apt-text-mobile'>
                Glamlex <br/>
                Adress Line 1
                Colorado Springs, CO <br/>
                (000)000-0000 <br/>
                Tuesday to Sunday
                7am to 7pm
            </h4>
          <div className='form'>
            <form onSubmit={props.submit}>
              <label className='form-label'>
                NAME <br/>
                <input className='input' type="text" name="name" placeholder="What's your name?" onChange={props.nameChanged}/>
              </label><br/><br/>
              <label className='form-label'>
                MOBILE <br/>
                <input className='input' type="text" name="phone" placeholder="Where can I call you?" onChange={props.phoneChanged} />
              </label><br/><br/>
              <label className='form-label'>
                EMAIL <br/>
                <input className='input' type="text" name="email" placeholder="Or email you?" onChange={props.emailChanged} />
              </label><br/><br/>
              <label className='form-label'>
                MESSAGE <br/>
                <input className='input-text' type="text" name="message" placeholder="Let's get glam!" onChange={props.messageChanged} />
              </label> <br/><br/>
              <input className='submit' type="submit" value="Send" />
            </form>
            <p className='footer'>
              Made with &hearts; by <a target='_blank' rel="noopener noreferrer" href='https://www.cmproia.com'>CiaraMaria</a>
            </p>
          </div>
    </div>
    )
}

export default Appointment;

