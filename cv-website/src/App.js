import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Home />
      <Experience />
      <Education />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;