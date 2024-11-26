import React from 'react';
import { useState } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Services from './components/Services';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Canvas from './components/Canvas';
import './App.css';

function App() {
  return (
    <ParallaxProvider>
      <div className="relative min-h-screen bg-primary-dark overflow-hidden">
        <Canvas />
        <div className="relative z-10">
          <Navbar />
          <main className="relative p-4">
            <Hero />
            <About />
            <Services />
            <Projects />
            <Skills />
            <Blog />
            <Contact />
          </main>
        </div>
      </div>
    </ParallaxProvider>
  );
}

export default App;
