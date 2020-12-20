import React from 'react';
import './Offer.css';

const Offer = (props) => {

    return (
            <div className='offer'>
               <h2 className='services-title'>{props.name}</h2><br/>
              <p className='services-text'>{props.desc} {props.price}</p>
              <p className='services-text'>{props.desc} {props.price}</p>
              <p className='services-text'>{props.desc} {props.price}</p>
              <p className='services-text'>{props.desc} {props.price}</p>
            </div>   
    )
}

export default Offer;