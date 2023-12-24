import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Prices from './components/Prices';
import Tshirts from './components/Tshirts';
import Map from './components/Map';
import Contacts from './components/Contacts';
import Navbar from './components/Navbar';

function App() {

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/prices" element={<Prices/>} />
          <Route path="/tshirts" element={<Tshirts/>} />
          <Route path="/map" element={<Map/>} />
          <Route path="/contacts" element={<Contacts/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
