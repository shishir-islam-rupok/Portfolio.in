import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/shishir-islam-rupok',
      icon: <FaGithub className="w-6 h-6" />,
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/yourprofile',
      icon: <FaLinkedin className="w-6 h-6" />,
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/yourprofile',
      icon: <FaTwitter className="w-6 h-6" />,
    },
  ];

  return (
    <footer className="relative text-text-primary py-8 mt-16 backdrop-blur-sm bg-primary-dark/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Social Links */}
          <div className="flex items-center space-x-6">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-primary hover:text-text-accent transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#about" className="hover:text-text-accent transition-colors duration-300">
              About
            </a>
            <a href="#services" className="hover:text-text-accent transition-colors duration-300">
              Services
            </a>
            <a href="#projects" className="hover:text-text-accent transition-colors duration-300">
              Projects
            </a>
            <a href="#contact" className="hover:text-text-accent transition-colors duration-300">
              Contact
            </a>
          </nav>

          {/* Copyright */}
          <div className="text-center text-sm">
            <p className="text-text-secondary">
              {currentYear} Shishir Islam. All rights reserved.
            </p>
            <motion.p 
              className="mt-2 text-text-accent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Made with ❤️ using React & Tailwind CSS
            </motion.p>
          </div>
        </div>
      </div>
      <meta name="p:domain_verify" content="68c0f78dea1ee7c5c9a1eea809db6a2e"/>
    </footer>
  );
};

export default Footer;
