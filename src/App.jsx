
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from "./pages/About";
import AboutStats from './pages/Aboutstats';
import React from 'react';
import Portfolio from './pages/Portfolio';
import Contact  from './pages/Contact';

function App() {
  return (
    <> 
      <Navbar />
      <Home />
      <About />
      <AboutStats />
     
      <Portfolio />
      <Contact/>
    </>
  )
}

export default App
