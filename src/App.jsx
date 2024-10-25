import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './comp/navbar';
import Home from './comp/home';
import FormCrud from './comp/FormCrud';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form/:id" element={<FormCrud />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;