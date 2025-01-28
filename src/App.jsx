import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
import Certifications from './Components/certifictions/certifications';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
function App(){
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Projects></Projects>
      <Skills></Skills>
      <Certifications></Certifications>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}
export default App;