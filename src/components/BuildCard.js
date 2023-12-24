import React from 'react'
import './css/BuildCard.css'

export const BuildCard = ({name, image, link}) => {
  return (
    <div className='build-card' onClick={()=>window.location.href=link}>
        <h2>{name}</h2>
        <img src={image} alt='not loading'/>
    </div>
  )
}
