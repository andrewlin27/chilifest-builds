
import React from 'react';
import './css/BuildCard.css';

export const BuildCard = ({ name, image, isFlipped = false, onCardClick }) => {
  return (
    <div className={`card-div ${isFlipped ? 'flipped' : ''}`} onClick={onCardClick}>
      <div className='build-card'>
        <div className='build-card-front'>
          <img src={`../images/${image}`} alt='not loading' />
          <h2>{name}</h2>
        </div>
        <div className='build-card-back'>
          <img src='.//images/chillifestAd.jpeg'></img>
          <h2>Back content</h2>
        </div>
      </div>
    </div>
  );
};

