import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home.jsx';  
import Services from '../components/Services.jsx';
import Partners from '../components/Partners.jsx';
import Emi from '../components/Emi.jsx';
import About from '../components/About.jsx';
import Contact from '../components/Contact.jsx';
import Apply from '../components/Apply.jsx';
const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services/>} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/emi" element={<Emi/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/apply" element={<Apply />} />
      </Routes>
    </div>
  )
}

export default Routing
