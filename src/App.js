import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Prices from './components/Prices';
import Map from './components/Map';
import Contacts from './components/Contacts';
import Navbar from './components/Navbar';

function App() {

  return (
    <Router>
      <div className = "mainBody">
        <div>
          {/* <h1 id='website'>chilifestbuilds.com</h1> */}
        </div>
        {/* <Countdown /> */}

        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/prices" element={<Prices/>} />
          <Route path="/map" element={<Map/>} />
          <Route path="/contacts" element={<Contacts/>} />
        </Routes>

        <footer className="footer">
          <div className="footer-content">
            <p>Created by Andrew Lin, Sid Venkatraman, Eric McGonagle</p>
            <div className="warning">
              <p>
              This platform (not affiliated with Chilifest) is created to centralize information about Chilifest builds. 
              The content on this website is provided with the explicit permission of each organization featured. 
              While we strive to maintain accurate and up-to-date information, we are not responsible for any 
              inaccuracies, changes, or discrepancies made by the participating organizations.
              </p>
              <p>
                For inquiries regarding any aspects of this website, please contact chilifestbuilds@gmail.com.
              </p>
              <p>
                Last updated 12/28/2023
              </p>
            </div>
          </div>
        </footer>

      </div>
    </Router>
  );
}

export default App;
