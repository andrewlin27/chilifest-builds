import React from 'react'
import './css/PriceEntry.css'

const ContactEntry = ({name, contact, email, link}) => {
    return (
        <div className='price-entry'>
            <div className='entry-item'>{name}</div>
            <div className='entry-item'>{contact}</div>
            <div className='entry-item'>{email}</div>
            <div className='entry-item' id='click-here' onClick={()=>{window.open(link, '_blank')}}>Click Here</div>
        </div>
    )
}

export default ContactEntry