import React, { useEffect, useState } from 'react'
import PriceEntry from './PriceEntry'
import './css/Prices.css'
import prices from '../buildData'


const Prices = () => {

  const [selectedValue, setSelectedValue] = useState('name');
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    if (selectedValue) {
      const sortedData = [...prices].sort((a, b) => {
        // Handle both strings and numbers
        const valueA = typeof a[selectedValue] === 'string' ? a[selectedValue].toLowerCase() : a[selectedValue];
        const valueB = typeof b[selectedValue] === 'string' ? b[selectedValue].toLowerCase() : b[selectedValue];

        if (valueA < valueB) return -1;
        if (valueA > valueB) return 1;
        return 0;
      });

      setJsonData(sortedData);
    }
  }, [selectedValue]);

  const handleDropdownChange = (event) => {
    setSelectedValue(event.target.value);
  };

  // const compare = (el1, el2, index) => {
  //   if (el1[index] === el2[index]) {
  //     return 0;
  //   }
  //   else if (el1[index] < el2[index]) {
  //     return -1;
  //   }
  //   else {
  //     return 1;
  //   }
  // }

  // prices.sort((el1,el2) => compare(el1, el2, "name"));

  // const [sortedPrices, setSortedPrices] = useState(prices);
  // // setSortedPrices(sortedPrices.sort((el1,el2) => compare(el1, el2, "guys")));


  // const [sortBy, setSortBy] = useState("name");

  // useEffect(() => {
  //   setSortedPrices(sortedPrices.sort((el1,el2) => compare(el1, el2, sortBy)));
  //   console.log(sortedPrices);
  // }, [sortBy])




  return (
    <div>
      <div>
        <label htmlFor="sortDropdown">Sort By:</label>
        {/* <select id="sortDropdown" value={sortBy} onChange={(event) => setSortBy(event.target.value)}> */}
        <select id="sortDropdown" value={selectedValue} onChange={handleDropdownChange}>
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

      {/* {jsonData.map((item) => (
          <li key={item.id}>
            {item.name} - {item.age} years old
          </li>
        ))} */}
        {jsonData.map(item => {
          return <PriceEntry key={item.id} name={item.name} guys={item.guys} girls={item.girls} included={item.included}/>
        })}
      </div>
    </div>
  )
}

export default Prices