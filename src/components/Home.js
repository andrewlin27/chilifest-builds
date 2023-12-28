import React, { useState } from 'react';

import './css/Home.css';
import { BuildCard } from './BuildCard';
import builds from '../buildData';

const Home = () => {
  const [isAllFlipped, setIsAllFlipped] = useState(false);

  const handleFlipAllClick = () => {
    setIsAllFlipped(prevState => !prevState);
  };

  const compare = (el1, el2, index) => {
    if (el1[index] === el2[index]) {
      return 0;
    }
    else if (el1[index] < el2[index]) {
      return -1;
    }
    else {
      return 1;
    }
  }

  builds.sort((el1,el2) => compare(el1, el2, "name"));


  const cards = builds.map(item => {
    return <BuildCard key={item.id} {...item} isFlipped={isAllFlipped} />;
  });

  return (
    <div className='home-container'>
      <h1>Home</h1>

      <button className='flip-all-button' onClick={handleFlipAllClick}>
        {isAllFlipped ? 'Builds' : 'T-Shirts'}
      </button>
      
      <div className='builds-container'>
        {cards}
      </div>
    </div>
  );
};

export default Home;
