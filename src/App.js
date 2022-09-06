import React from 'react'
import './App.css';
import Toyota from './toyota';
import Honda from './honda';
import Kia from './kia';
import Benz from './benz';
import Nord from './nord';
import Body from './body';
import Nav from './nav'
import {Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
     <Nav />
     <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/toyota" element={<Toyota />} />
        <Route path="/honda" element={<Honda />} />
        <Route path="/kia" element={<Kia />} />
        <Route path="/benz" element={<Benz />} />
        <Route path="/nord" element={<Nord />} />
     </Routes>
     </>
  );
}

export default App;