import React from 'react';
import './Offer.css';

const Offer = (props) => {

    return (
            <div className='offer' id='offer'>
               <h2><u>{props.name}</u></h2>
              <p className='services-text'>{props.desc}</p> <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
              <p>{props.price}</p>
            </div>   
    )
}

export default Offer;