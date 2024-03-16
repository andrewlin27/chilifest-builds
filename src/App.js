import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Prices from './components/Prices';
import Map from './components/Map';
import Contacts from './components/Contacts';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Resell from './components/Resell';
// import Countdown from './components/Countdown';

function App() {

  return (
    <div className = "mainBody">
        {/* <Countdown /> */}
        <Navbar />

        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/prices" element={<Prices/>} />
            <Route path="/contacts" element={<Contacts/>} />
            <Route path="/map" element={<Map/>} />
            <Route path="/resell" element={<Resell/>} />
        </Routes>

        <Footer />
    </div>
  );
}

export default App;
