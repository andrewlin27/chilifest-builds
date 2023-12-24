import React, { useEffect, useState } from 'react';
import './css/BuildCard.css'
import { useCardFlip } from 'react-card-flip';

export const BuildCard = ({ name, image, link, isAllFlipped, setIsAllFlipped, onCardClick }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    setIsFlipped(isAllFlipped);
  }, [isAllFlipped]);

  const handleCardClick = () => {
    setIsFlipped(prevState => !prevState);
    if (setIsAllFlipped) {
      setIsAllFlipped(false);
    }
  };




  return (
    <div className={`build-card ${isFlipped ? 'flipped' : ''}`} onClick={handleCardClick}>
      <div className='card-inner'>
        <div className='build-card-front'>
          <img src={`../images/${image}`} alt='not loading' />
          <h2>{name}</h2>
        </div>
        <div className='build-card-back'>
          <img src={'../images/chillifestAd.jpeg'} alt='not loading' />
          <h2> Back content</h2>
        </div>
      </div>
    </div>

  )

}

