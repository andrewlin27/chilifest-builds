import React from 'react'
import './css/Home.css'
import { BuildCard } from './BuildCard'
import builds from '../data'

const Home = () => {

  function compare(el1, el2, index) {
    return el1[index] === el2[index] ? 0 : (el1[index] < el2[index] ? -1 : 1);
  }

  builds.sort(function(el1,el2){
    return compare(el1, el2, "name")
  });

  const cards = builds.map(item => {
    return(
      <BuildCard
        key = {item.key}
        {...item}
        />
    )
    }
  )


  return (
    <div className='home-container'>
      <h1>Builds</h1>
      <div className='builds-container'>
        {cards}
      </div>
    </div>
  )
}

export default Home