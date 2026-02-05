import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Utility from './components/Utility';
import Advisory from './components/Advisory';
import Careers from './components/Careers';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Features />
      <Utility />
      <Advisory />
      <Careers />
      <Footer />
    </div>
  );
}

export default App;
