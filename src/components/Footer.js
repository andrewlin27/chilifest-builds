import React from 'react'
import './css/Footer.css'

const Footer = () => {
  return (
    <div>
        <footer className="footer">
        <div className="footer-content">
          <p>Created by Andrew Lin, Sid Venkatraman, Eric McGonagle</p>
          <div className="warning">
            <p>
            Not affiliated with Chilifest. 
            The content on this website is provided with the explicit permission of each organization featured. 
            While we strive to maintain accurate and up-to-date information, we are not responsible for any 
            inaccuracies, changes, or discrepancies made by the participating organizations.
            </p>
            <p>
              For inquiries regarding any aspects of this website, please contact chilifestbuilds@gmail.com.
            </p>
            <p className='underlined-text'>
              Last updated 1/15/2024
              {/* Target deploy date ^^ */}
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer