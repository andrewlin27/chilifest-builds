import React, {useEffect, useState} from 'react'
import './css/Prices.css'
import ContactEntry from './ContactEntry'
import contacts from '../buildData'
// import PriceEntry from './PriceEntry'


const Contacts = () => {

  const [selectedValue, setSelectedValue] = useState('name');
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    if (selectedValue) {
      const sortedData = [...contacts].sort((a, b) => {
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
      <div>
        <label htmlFor="sortDropdown">Sort By:</label>
        {/* <select id="sortDropdown" value={sortBy} onChange={(event) => setSortBy(event.target.value)}> */}
        <select id="sortDropdown" value={selectedValue} onChange={handleDropdownChange}>
          <option value="name">Name</option>
          <option value="contact">Contact</option>
          <option value="email">Email</option>
          <option value="link">Link</option>

        </select>
      </div>

      <div className="price-entry-titles">
        <div className="entry-item-title">Name</div>
        <div className="entry-item-title">Contact</div>
        <div className="entry-item-title">Email</div>
        <div className="entry-item-title">Link</div>
      </div>

      <div>

        {/* {jsonData.map((item) => (
          <li key={item.id}>
            {item.name} - {item.age} years old
          </li>
        ))} */}
        {jsonData.map(item => {
          return <ContactEntry name={item.name} contact={item.contact} email={item.email} link={item.link} />
        })}
      </div>
    </div>
  )
}

export default Contacts