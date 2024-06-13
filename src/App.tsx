import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Nabvar/Navbar';
import HeroSection from './Component/Nabvar/hero/hero';
import AboutSection from './Component/about/about';
import Work from './Component/work/work';
import Contact from './Component/contact/contact';
import Footer from './Component/footer/footer';



function App() {
  return (
    <div className="App">
     <Navbar/>
     <HeroSection/>
     <AboutSection/>
     <Work/>
     <Contact/>
     <Footer/>





    </div>
  );
}

export default App;
