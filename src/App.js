import * as React from 'react';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import './App.css';

const App = () => {
  return (
    <>
      <Navbar />
      <About />
      <Experience />
      <Projects />
    </>
  );
};

export default App;
