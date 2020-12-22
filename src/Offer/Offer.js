import React from 'react';
import './Offer.css';

const Offer = (props) => {

    return (
            <div className='offer'>
                <ul className='leaders' id='offer'>
                <h2 className='services-title'>{props.name}</h2>
                <li className='services-text'><span>{props.desc}</span>
                <span>{props.price}</span></li>
                <li className='services-text'><span>{props.desc}</span>
                <span>{props.price}</span></li>
                <li className='services-text'><span>{props.desc}</span>
                <span>{props.price}</span></li>
                <li className='services-text'><span>{props.desc}</span>
                <span>{props.price}</span></li>
                <li className='services-text'><span>{props.desc}</span>
                <span>{props.price}</span></li>
                </ul>
            </div>   
    )
}

export default Offer;