import React from "react";
import Navbar from "./components/Navbar";
import Hero from './components/Hero'
import About from "./components/About";
import TechStack from "./components/TechStack";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./index.css"

function App() {


  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <TechStack /> 
      <Services />
      <Projects /> 
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
