import React from 'react'
import './css/PriceEntry.css'

const ContactEntry = ({name, org, contact, link}) => {
    return (
        <div className='price-entry'>
            <div className='entry-item'>{name}</div>
            <div className='entry-item'>{org}</div>
            <div className='entry-item'>{contact}</div>
            <div className='entry-item' id='click-here' onClick={()=>{window.open(link, '_blank')}}>Click Here</div>
        </div>
    )
}

export default ContactEntry