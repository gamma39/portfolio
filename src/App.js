import React from 'react';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About';
import classes from './App.module.css'
import Resume from './components/Resume/Resume';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className={classes.App}>
      <div className={classes.topSection}>
        <Navbar />
        <Hero />
      </div>
      <About />
      <Resume />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
