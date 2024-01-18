import React from 'react'
import './css/PriceEntry.css'

const PriceEntry = ({name, guys, girls, guysBuild, girlsBuild, included, ticketLink}) => {
  return (
    <div className='price-entry'>
      <div className='entry-item click' onClick={()=>window.open(ticketLink,'_blank')}>{name}</div>
      <div className='entry-item'>${girls}/{girlsBuild}</div>
      <div className='entry-item'>${guys}/{guysBuild}</div>
      <div className='entry-item'>{included}</div>
    </div>
  )
}

export default PriceEntry