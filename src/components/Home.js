import React from 'react'
import './css/Home.css'
import { BuildCard } from './BuildCard'
import builds from '../data'

const Home = () => {

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