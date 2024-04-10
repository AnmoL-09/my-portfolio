import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Service from './Components/Services/Services';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Service />
    </div>
  )
}

export default App