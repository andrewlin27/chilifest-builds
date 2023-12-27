import React from 'react'
import './css/PriceEntry.css'

const ContactEntry = ({name, org, contact, link}) => {
    return (
        <div className='price-entry'>
            <div className='entry-item click' onClick={()=>window.open(link,'_blank')}>{name}</div>
            <div className='entry-item click' onClick={()=>window.open(link,'_blank')}>{org}</div>
            <div className='entry-item'>{contact}</div>
        </div>
    )
}

export default ContactEntry