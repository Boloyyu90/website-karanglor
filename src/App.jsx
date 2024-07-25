import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Education from './Pages/Education';
import Health from './Pages/Health';
import Culture from './Pages/Culture';
import MicroEnterprise from './Pages/MicroEnterprise';
import Tourism from './Pages/Tourism';
import KKN from './Pages/KKN';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Info from './Pages/Info';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/health" element={<Health />} />
        <Route path="/culture" element={<Culture />} />
        <Route path="/microenterprise" element={<MicroEnterprise />} />
        <Route path="/tourism" element={<Tourism />} />
        <Route path="/kkn-uajy" element={<KKN />} />
        <Route path="/informasi" element={<Info />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
