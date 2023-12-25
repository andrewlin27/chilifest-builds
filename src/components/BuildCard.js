
import React from 'react';
import './css/BuildCard.css';

export const BuildCard = ({ name, image, link, isFlipped = false}) => {
  return (
    <div className={`card-div ${isFlipped ? 'flipped' : ''}`} onClick={()=>window.open(link,'_blank')}>
      <div className='build-card'>
        <div className='build-card-front'>
          <img src={`../images/${image}`} alt='not loading' />
          <h2>{name}</h2>
        </div>
        <div className='build-card-back'>
          <img src='.//images/chillifestAd.jpeg'></img>
          <h2>{name}</h2>
        </div>
      </div>
    </div>
  );
};

