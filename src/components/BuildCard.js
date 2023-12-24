import React from 'react'
import './css/BuildCard.css'

export const BuildCard = ({name, image, link}) => {
  return (
    <div className='build-card' onClick={()=>window.open(link, '_blank')}>
        <img src={`../images/${image}`} alt='not loading'/>
        <h2>{name}</h2>
    </div>
  )
}
