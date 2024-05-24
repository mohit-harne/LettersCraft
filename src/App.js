import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Language from './components/Language';
import Contact from './components/Contact';
import CT from './components/CT';
import Careers from './components/Careers';
import IP from './components/IP';
import './App.css'
const App = () => {
  return (
    <Router>
      <div className=' lg:w-auto md:w-auto w-screen overflow-hidden '>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/services" element={<CT/>} />
          <Route path="/languages" element={<Language/>} />
          <Route path="/epayments" element={<Careers/>} />
          <Route path="/blog" element={<IP/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
       
      </div>
      <Footer/>
    </Router>
  );
};

export default App;
