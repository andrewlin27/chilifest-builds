
import React from 'react';
import './css/BuildCard.css';

export const BuildCard = ({ name, image, link, tshirt, isFlipped = false}) => {
  return (
    <div className={`card-div ${isFlipped ? 'flipped' : ''}`} onClick={()=>window.open(link,'_blank')}>
      <div className='build-card'>
        <div className={`build-card-front ${isFlipped ? 'hidden' : ''}`}>
          <img src={`images/flyers/${image}`} alt='not loading'/>
          <div className='card-name'>
            <h2>{name}</h2>
          </div>
        </div>
        
        <div className={`build-card-back ${isFlipped ? '' : 'hidden'}`}>
          <img src={`images/shirts/${tshirt}`} alt='not loading'/>
          <div className='card-name'>
            <h2>{name}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

