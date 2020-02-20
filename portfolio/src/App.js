// App.jsx

import React from 'react';
// Import the BrowserRouter, Route and Link components
import { BrowserRouter, Route } from 'react-router-dom';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Navbar from './components/Navbar/index.js';
import Footer from './components/Footer/index.js';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <Route exact path="/" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />


        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
