import React, { useState } from 'react';
import './css/BuildCard.css'
import { useCardFlip } from 'react-card-flip';

export const BuildCard = ({name, image, link, isFlipped = false, onCardClick}) => {




  


  return (
      <div className={`build-card ${isFlipped ? 'flipped' : ''}`} onClick={onCardClick}>
        <div className='card-inner'>
          <div className='build-card-front'>
              <img src={`../images/${image}`} alt='not loading'/>
              <h2>{name}</h2>
            </div>
            <div className = 'build-card-back'>
              <img src={'../images/chillifestAd.jpeg'} alt='not loading'/>
              <h2> Back content</h2>
            </div>
          </div>
      </div>

  )
  
}

