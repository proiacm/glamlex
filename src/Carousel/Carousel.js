import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import './Carousel.css' 
 
const handleDragStart = (e) => e.preventDefault();
 
const items = [
  <img src="https://i.imgur.com/cQqF6f5.jpg" onDragStart={handleDragStart} className="carousel" />,
  <img src="https://i.imgur.com/mnbd94M.jpg" onDragStart={handleDragStart} className="carousel" />,
  <img src="https://i.imgur.com/5PplHjM.jpg" onDragStart={handleDragStart} className="carousel" />,
  <img src="https://i.imgur.com/m6zQctv.jpg" onDragStart={handleDragStart} className="carousel" />,
  <img src="https://i.imgur.com/XUpQK2m.jpg" onDragStart={handleDragStart} className="carousel" />,
  <img src="https://i.imgur.com/VFlGAur.jpg" onDragStart={handleDragStart} className="carousel" />
];
 
const Carousel = () => {
  return (
    <AliceCarousel
        autoPlay
        autoPlayControls
        autoPlayStrategy="none"
        autoPlayInterval={1500}
        animationDuration={1000}
        infinite
        touchTracking={false}
        disableDotsControls
        disableButtonsControls
        items={items}
    />
  );
}
  

  export default Carousel;