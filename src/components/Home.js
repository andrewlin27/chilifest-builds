import React, { useState } from 'react';
import './css/Home.css'
import { BuildCard } from './BuildCard'
import builds from '../buildData'

const Home = () => {

  function compare(el1, el2, index) {
    return el1[index] === el2[index] ? 0 : (el1[index] < el2[index] ? -1 : 1);
  }

  builds.sort(function (el1, el2) {
    return compare(el1, el2, "name")
  });



  const [isAllFlipped, setIsAllFlipped] = useState(false);


  const handleFlipAllClick = () => {
    setIsAllFlipped(prevState => !prevState);
  };



  return (
    <div className='home-container'>
      <button onClick={handleFlipAllClick}>Flip All Cards</button>
      <h1>Builds</h1>
      <div className='builds-container'>
        {builds.map(item => {
          return (<BuildCard key={item.id} {...item} isAllFlipped={isAllFlipped}/>)
        })}
      </div>
    </div>
  )
}

export default Home