import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

// Import components
import SEOHead from './components/SEOHead';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './App.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  return (
    <HelmetProvider>
      <div className="App">
        <SEOHead />
        <Hero />
        <Gallery />
        <About />
        <Contact />
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;