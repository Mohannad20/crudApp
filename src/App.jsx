import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './comp/navbar';
import Home from './comp/home';
// import Button from './components/ui/button';



function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" component={<Home/>} />
          <Route path="/add" component={<FormCrud/>} />
        </Routes>
    </Router>
  );
}

export default App;