import React from 'react';
import './Offer.css';

const Offer = (props) => {

    return (
            <div className='offer'>
               <h2>{props.name}</h2>
              <p>{props.desc}</p>
              <p>{props.price}</p>
            </div>
    )
}

export default Offer;