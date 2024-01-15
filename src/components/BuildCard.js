
import React from 'react';
import './css/BuildCard.css';

export const BuildCard = ({ name, image, link, tshirt, isFlipped = false}) => {
  return (
    <div className={`card-div ${isFlipped ? 'flipped' : ''}`}>
      <div className='build-card'>
        <div className={`build-card-front ${isFlipped ? 'hidden' : ''}`} onClick={()=>window.open(link,'_blank')}>
          <img src={`images/flyers/${image}`} alt='not loading'/>
          <div className='card-name'>
            <h2>{name}</h2>
          </div>
        </div>
        
        <div className={`build-card-back ${isFlipped ? '' : 'hidden'}`} onClick={()=>window.open(`images/shirts/${tshirt}`,'_blank')}>
          <img src={`images/shirts/${tshirt}`} alt='not loading'/>
          <div className='card-name'>
            <h2>{name}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

