import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { ParallaxProvider } from 'react-scroll-parallax';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import './App.css';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();

  const backgrounds = {
    hero: 'linear-gradient(rgba(10, 25, 47, 0.85), rgba(10, 25, 47, 0.85)), url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop")',
    about: 'linear-gradient(rgba(10, 25, 47, 0.85), rgba(10, 25, 47, 0.85)), url("https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?q=80&w=2070&auto=format&fit=crop")',
    services: 'linear-gradient(rgba(10, 25, 47, 0.85), rgba(10, 25, 47, 0.85)), url("https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600")',
    projects: 'linear-gradient(rgba(10, 25, 47, 0.85), rgba(10, 25, 47, 0.85)), url("https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=1974&auto=format&fit=crop")',
    skills: 'linear-gradient(rgba(10, 25, 47, 0.85), rgba(10, 25, 47, 0.85)), url("https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop")',
    contact: 'linear-gradient(rgba(10, 25, 47, 0.85), rgba(10, 25, 47, 0.85)), url("https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=2070&auto=format&fit=crop")',
  };

  // Preload background images
  useEffect(() => {
    const preloadImages = () => {
      const imageUrls = Object.values(backgrounds).map(bg => {
        const url = bg.match(/url\("([^"]+)"\)/)[1];
        return url;
      });

      imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
      });
    };

    preloadImages();
  }, []);

  const [currentSection, setCurrentSection] = useState('hero');
  const [backgroundStyle, setBackgroundStyle] = useState({
    backgroundImage: backgrounds.hero,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
    transition: 'background-image 0.5s ease-in-out',
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'services', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            if (currentSection !== section) {
              setCurrentSection(section);
              setBackgroundStyle(prev => ({
                ...prev,
                backgroundImage: backgrounds[section],
              }));
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentSection]);

  return (
    <ParallaxProvider>
      <LoadingScreen isLoading={isLoading} setIsLoading={setIsLoading} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        className="relative min-h-screen overflow-hidden"
      >
        <div style={backgroundStyle} />
        <div className="relative z-10">
          <Navbar />
          <main className="relative p-4">
            <section id="hero" className="min-h-screen backdrop-blur-[2px]">
              <Hero />
            </section>
            <section id="about" className="min-h-screen backdrop-blur-[2px]">
              <About />
            </section>
            <section id="services" className="min-h-screen backdrop-blur-[2px]">
              <Services />
            </section>
            <section id="projects" className="min-h-screen backdrop-blur-[2px]">
              <Projects />
            </section>
            <section id="skills" className="min-h-screen backdrop-blur-[2px]">
              <Skills />
            </section>
            <section id="contact" className="min-h-screen backdrop-blur-[2px]">
              <Contact />
            </section>
          </main>
          <Footer />
        </div>
      </motion.div>
    </ParallaxProvider>
  );
};

export default App;
