
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from "./pages/About";
import React from 'react';
import Aboutstats from './pages/Aboutstats';
import Portfolio from './pages/Portfolio';
import Contact  from './pages/Contact';

function App() {
  return (
    <> 
      <Navbar />
      <Home />
      <About />
      <Aboutstats />
      <Portfolio />
      <Contact/>
    </>
  )
}

export default App
