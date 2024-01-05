import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './components/Home';
import Prices from './components/Prices';
import Map from './components/Map';
import Contacts from './components/Contacts';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import Countdown from './components/Countdown';

function App() {

  return (
    <div className = "mainBody">
      <BrowserRouter>
        {/* <Countdown /> */}
        
        <Routes>
          <Route path="/" element={<Navbar/>}>
            <Route index element={<Home/>} />
            <Route path="prices" element={<Prices/>} />
            <Route path="map" element={<Map/>} />
            <Route path="contacts" element={<Contacts/>} />
          </Route>
        </Routes>

        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
