import React, { useState } from 'react';

import './css/Home.css';
import { BuildCard } from './BuildCard';
import builds from '../data/buildData';

const Home = () => {
  const [isAllFlipped, setAllFlipped] = useState(false);

  const handleFlipAllClick = () => {
    setIsAllFlipped(prevState => !prevState);
  };


  const cards = builds.map(item => {
    return <BuildCard key={item.id} {...item} isFlipped={isAllFlipped} />;
  });



  return (
    <div className='home-container'>
      <button className='flip-all-button' onClick={handleFlipAllClick}>
        {isAllFlipped ? 'Builds' : 'T-Shirts'}
      </button>
      <h1>Builds</h1>
      <div className='builds-container'>{cards}</div>
    </div>
  );
};

export default Home;
