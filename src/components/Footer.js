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
              For any inquiries regarding the addition of your organization's chilifest build, potential sponsorships, 
              or any other aspects of this website, please contact chilifestbuilds@gmail.com.
            </p>
            <p className='underlined-text'>
              Last updated 1/5/2024
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer