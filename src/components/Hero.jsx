import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiTwitter, FiLinkedin, FiArrowRight } from 'react-icons/fi';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';
import { FaDownload } from 'react-icons/fa';
import profile from '../assets/ass.js';

const Hero = () => {
  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com', icon: <FiGithub size={24} /> },
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: <FiLinkedin size={24} /> },
    { name: 'Twitter', href: 'https://twitter.com', icon: <FiTwitter size={24} /> },
  ];

  return (
    <section id="home" className="min-h-[calc(100vh-5rem)] flex items-center justify-center relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 py-16 md:py-24">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-block px-3 py-1 mb-6 border border-text-accent/20 rounded-full 
                          bg-text-accent/10 text-text-accent text-sm">
              Welcome to my portfolio
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-text-primary">Hi, I'm </span>
              <span className="text-text-accent">Shishir</span>
            </h1>

            <div className="text-xl md:text-2xl text-text-secondary mb-8 h-[40px]">
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  2000,
                  'UI/UX Designer',
                  2000,
                  'Tech Enthusiast',
                  2000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>

            <p className="text-text-secondary max-w-lg mx-auto lg:mx-0 mb-8">
              I craft modern web experiences with clean code and creative solutions. 
              Passionate about building digital products that make a difference.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-text-accent text-primary-dark rounded-md hover:bg-text-accent/90 
                         transition-colors duration-300 font-medium"
              >
                Let's Talk
              </motion.button>

              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="px-8 py-3 bg-text-accent/10 text-text-accent border border-text-accent/20 
                         rounded-md hover:bg-text-accent/20 transition-all duration-300 font-medium 
                         inline-flex items-center group"
              >
                View Projects
                <FiArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
              </motion.a>
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex justify-center lg:justify-start gap-6 mt-12"
            >
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-text-accent transform hover:scale-110 
                           transition-all duration-300"
                  aria-label={link.name}
                  whileHover={{ y: -3 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Photo Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative flex-1 w-full max-w-md"
          >
            <div className="relative aspect-square">
              {/* Background Elements */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-text-accent/20 to-transparent 
                            transform rotate-6 transition-transform duration-300 group-hover:rotate-12" />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-text-accent/10 to-transparent 
                            transform -rotate-6 transition-transform duration-300 group-hover:-rotate-12" />
              
              {/* Main Photo Container */}
              <div className="relative h-full rounded-2xl overflow-hidden border-2 border-text-accent/20 
                            bg-primary-dark/50 backdrop-blur-sm transform transition-all duration-300 
                            hover:border-text-accent/40 hover:scale-[1.02] group">
                <img
                  src={profile.image}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
                
                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-20 h-20 border-t-2 border-r-2 border-text-accent/30" />
                <div className="absolute bottom-4 left-4 w-20 h-20 border-b-2 border-l-2 border-text-accent/30" />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-text-accent/10 opacity-0 group-hover:opacity-100 
                             transition-opacity duration-300" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
