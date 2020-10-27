import React from 'react';
import './Offer.css';

const Offer = (props) => {

    return (
            <div className='offer'>
               <h3>{props.name}</h3> 
              <p>{props.desc}</p>
              <p>{props.price}</p>
            </div>
    )
}

export default Offer;