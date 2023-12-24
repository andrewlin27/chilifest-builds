import React, { useEffect, useState } from 'react'
import prices from '../data/priceData'
import PriceEntry from './PriceEntry'
import './css/Prices.css'

const Prices = () => {

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

  prices.sort((el1,el2) => compare(el1, el2, "name"));

  const [sortedPrices, setSortedPrices] = useState(prices);
  // setSortedPrices(sortedPrices.sort((el1,el2) => compare(el1, el2, "guys")));


  const [sortBy, setSortBy] = useState("name");

  useEffect(() => {
    setSortedPrices(sortedPrices.sort((el1,el2) => compare(el1, el2, sortBy)));
    console.log(sortedPrices);
  }, [sortBy])


  return (
    <div>
      <div>
        <label htmlFor="sortDropdown">Sort By:</label>
        <select id="sortDropdown" value={sortBy} onChange={(event) => setSortBy(event.target.value)}>
          <option value="name">Name</option>
          <option value="guys">Guys Price</option>
          <option value="girls">Girls Price</option>
        </select>
      </div>

      <div className="price-entry-titles">
        <div className="entry-item-title">Name</div>
        <div className="entry-item-title">Guys Price</div>
        <div className="entry-item-title">Girls Price</div>
        <div className="entry-item-title">Included</div>
      </div>

      <div>
        {sortedPrices.map(item => {
          return <PriceEntry key={item.id} {...item}/>
        })}
      </div>
    </div>
  )
}

export default Prices