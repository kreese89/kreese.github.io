import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Experience from './Components/Experience';
import Projects from './Components/Projects';

const App = () => {
  // return <Navbar />;
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
