import { useState } from 'react';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import About from './comp/about';
import Home from './comp/home';
import Contact from './comp/contact';

function App() {
  return (
    <>
    
      <BrowserRouter>
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
