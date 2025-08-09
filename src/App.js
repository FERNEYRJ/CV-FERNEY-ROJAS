import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import Experience from './components/Experience';
import Studies from './components/Studies';
import Skills from './components/Skills';
import Languages from './components/Languages';
import Contact from './components/Contact';
import BackToTopButton from './components/BackToTopButton';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Home />
      <Experience />
      <Studies />
      <Skills />
      <Languages />
      <Contact />
      <BackToTopButton />
    </div>
  );
}

export default App;