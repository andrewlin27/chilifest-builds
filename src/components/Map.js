import React from 'react'
import './css/Map.css'

const Map = () => {
  return (
    <div className='map' style={{position: 'relative'}}>
      <h1>Map</h1>
      <img src='images/map.png' alt='not loading' className='map-img' onContextMenu={(e) => e.preventDefault()}/>
      <div className="overlay"></div>
    </div>
  )
}

export default Map