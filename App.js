import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/Sign-Up';
import ContactUs from './components/pages/Contact-us';

function App() {
  return (

      <Router>
        <Navbar/>
          <Routes>
            <Route exact path='/home' element = {<Home/>} />
            <Route exact path='/services' element = {<Services/>} />
            <Route exact path='/products' element = {<Products/>} />
            <Route exact path='/sign-up' element = {<SignUp/>} />
            <Route exact path='/contact-us' element = {<ContactUs/>} />
          </Routes>
          
      </Router>

  );
}

export default App;
