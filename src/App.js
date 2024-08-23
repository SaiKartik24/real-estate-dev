
import './App.css';
import LandingScreen from '../src/Dashboard/LandingScreen'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<LandingScreen />} />
      {/* <Route path="/buy" element={<Buyer />} />
      <Route path="/sell" element={<Seller />} />
      <Route path="/Find-any-agent" element={<FindAnyAgent />} />
      <Route path="/manage-rentals" element={<ManageRentals />} />
   
      <Route path="/help" element={<Help />} /> */}
    </Routes>
  </Router>
  );
}

export default App;
