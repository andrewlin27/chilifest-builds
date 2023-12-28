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






  return (
    <div>
      <h1 id='title'>Prices</h1>

      <div className='sort'>
        <label htmlFor="sortDropdown">Sort By: </label>
        <select id="sortDropdown" value={selectedValue} onChange={handleDropdownChange}>
          <option value="name">Name</option>
          <option value="girls">Girls Full</option>
          <option value="girlsBuild">Girls Build Only</option>
          <option value="guys">Guys Full</option>
          <option value="guysBuild">Guys Build Only</option>
        </select>
      </div>

      <div className="price-entry-titles">
        <div className="entry-item-title">Name</div>
        <div className="entry-item-title">Girls Full/Build Only</div>
        <div className="entry-item-title">Guys Full/Build Only</div>
        <div className="entry-item-title">Add-ons</div>
      </div>

      <div>
        {jsonData.map(item => {
          return <PriceEntry key={item.id} {...item}/>
        })}
      </div>

      <div className='sort'>
        <ul >
          <li>All builds are assumed to include food, beverages, and a shirt.</li>
          <li>Most build only tickets do NOT include entry to Chilifest.</li>
          <li>All prices are subject to change. </li>
        </ul>
      </div>
    </div>
  )
}

export default Prices