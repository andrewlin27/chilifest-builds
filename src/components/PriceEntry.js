import React from 'react'
import './css/PriceEntry.css'

const PriceEntry = ({name, guys, girls, included}) => {
  return (
    <div className='price-entry'>
      <div className='entry-item'>{name}</div>
      <div className='entry-item'>${guys}</div>
      <div className='entry-item'>${girls}</div>
      <div className='entry-item'>{included}</div>
    </div>
  )
}

export default PriceEntry