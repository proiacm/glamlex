import React from 'react';
import './Gallery.css'
import img1 from '../Images/m1.jpg';
import img2 from '../Images/m2.jpg';
import img3 from '../Images/m3.jpg';
import img4 from '../Images/m4.jpg';
import img5 from '../Images/m5.jpg';
import img6 from '../Images/m6.jpg';


const Gallery = () => {

  return (
     <div className='gallery' id='gallery'>
        <img className='col-img' src={img1}/>
        <img className='col-img' src={img2}/>
        <img className='col-img' src={img3}/> 
        <img className='col-img' src={img4}/> 
        <img className='col-img' src={img5}/> 
        <img className='col-img' src={img6}/>  
     </div>
  )
}

export default Gallery;