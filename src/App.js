import React from "react";
import Navbar from "./components/Navbar";
import Location from "./components/Location";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home, { Footer, SocialIcons } from "./components/Home";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import About from "./components/About";
import FAQ from "./components/FAQ";
import Tour from "./components/Tour";
import ScrollToTop from "./utilities/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/location" element={<Location />} />
        <Route path="/about" element={<About />}/>
        <Route path="/faq" element={<FAQ />}/>
        <Route path="/tour" element={<Tour />}/>
        <Route path="*" element={<Home />} />
        {/* Add other routes here */}
      </Routes>
      
      <Footer>
        <p>Follow us:</p>
        <SocialIcons>
          <a href="https://www.facebook.com/SimplyBulkMarket/" target="_blank" rel="noreferrer">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/simplybulkmarket/" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
        </SocialIcons>
        <p>&copy; 2024 Simply Bulk Market</p>
      </Footer>
    </Router>
  );
}

export default App;
