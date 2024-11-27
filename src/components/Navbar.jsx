import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FiGithub, FiLinkedin, FiDownload } from 'react-icons/fi';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { 
      name: 'About', 
      href: '#about',
    },
    { 
      name: 'Services', 
      href: '#services',
    },
    { 
      name: 'Projects', 
      href: '#projects',
      dropdown: [
        { 
          name: 'Web Development', 
          href: '#web-dev',
          icon: '🌐',
          desc: 'Full-stack web applications'
        },
        { 
          name: 'Mobile Apps', 
          href: '#mobile-apps',
          icon: '📱',
          desc: 'iOS and Android development'
        },
        { 
          name: 'UI/UX Design', 
          href: '#ui-ux',
          icon: '🎨',
          desc: 'User interface & experience'
        },
      ]
    },
    { 
      name: 'Skills', 
      href: '#skills',
      dropdown: [
        { 
          name: 'Frontend', 
          href: '#frontend',
          icon: '⚛️',
          desc: 'React, Vue, Angular'
        },
        { 
          name: 'Backend', 
          href: '#backend',
          icon: '⚙️',
          desc: 'Node.js, Python, Java'
        },
        { 
          name: 'Tools', 
          href: '#tools',
          icon: '🛠️',
          desc: 'Git, Docker, AWS'
        },
      ]
    },
    { 
      name: 'Contact', 
      href: '#contact',
    },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/yourusername',
      icon: <FiGithub className="w-5 h-5" />,
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/yourusername',
      icon: <FiLinkedin className="w-5 h-5" />,
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className={`
        w-full 
        transition-all 
        duration-300 
        ${scrolled ? 'py-2 backdrop-blur-md bg-primary-dark/30' : 'py-4'}
      `}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex-shrink-0"
            >
              <a href="#" className="text-2xl font-bold text-text-accent">
                Shishir
              </a>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              {navItems.map((item, index) => (
                <div key={item.name} className="relative">
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onMouseEnter={() => setShowDropdown(item.name)}
                    onMouseLeave={() => setShowDropdown('')}
                  >
                    <Link
                      to={item.href.substring(1)}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      className="text-text-primary hover:text-text-accent cursor-pointer transition-colors duration-300 py-2"
                    >
                      {item.name}
                    </Link>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {item.dropdown && showDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute left-0 mt-2 w-64 rounded-lg shadow-lg backdrop-blur-md bg-primary-dark/90 ring-1 ring-text-accent/10 overflow-hidden"
                        >
                          <div className="py-2">
                            {item.dropdown.map((dropItem, idx) => (
                              <Link
                                key={dropItem.name}
                                to={dropItem.href.substring(1)}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className="group block w-full px-4 py-3 hover:bg-primary-light/20"
                                onClick={() => setShowDropdown('')}
                              >
                                <div className="flex items-center space-x-3">
                                  <span className="text-lg">{dropItem.icon}</span>
                                  <div>
                                    <div className="text-text-primary group-hover:text-text-accent transition-colors duration-200">
                                      {dropItem.name}
                                    </div>
                                    <div className="text-sm text-text-secondary group-hover:text-text-primary/80 transition-colors duration-200">
                                      {dropItem.desc}
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>
              ))}

              {/* Social Links & Resume Button */}
              <div className="flex items-center space-x-4">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-text-primary hover:text-text-accent transition-colors duration-300"
                  >
                    {link.icon}
                  </motion.a>
                ))}
                <motion.a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 px-4 py-2 rounded-md border border-text-accent text-text-accent hover:bg-text-accent/10 transition-colors duration-300"
                >
                  <FiDownload className="w-4 h-4" />
                  <span>Resume</span>
                </motion.a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="text-text-primary hover:text-text-accent p-2"
              >
                {isOpen ? (
                  <HiX className="h-6 w-6" />
                ) : (
                  <HiMenuAlt3 className="h-6 w-6" />
                )}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden backdrop-blur-md bg-primary-dark/90"
            >
              <div className="px-4 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <div key={item.name}>
                    <Link
                      to={item.href.substring(1)}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      className="block px-3 py-2 text-text-primary hover:text-text-accent cursor-pointer transition-colors duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.dropdown && (
                      <div className="pl-6 mt-1 space-y-1 border-l-2 border-text-accent/10">
                        {item.dropdown.map((dropItem) => (
                          <Link
                            key={dropItem.name}
                            to={dropItem.href.substring(1)}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="group block px-3 py-2"
                            onClick={() => setIsOpen(false)}
                          >
                            <div className="flex items-center space-x-3">
                              <span className="text-lg">{dropItem.icon}</span>
                              <div>
                                <div className="text-text-primary/80 group-hover:text-text-accent transition-colors duration-200">
                                  {dropItem.name}
                                </div>
                                <div className="text-sm text-text-secondary group-hover:text-text-primary/60 transition-colors duration-200">
                                  {dropItem.desc}
                                </div>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                
                {/* Mobile Social Links & Resume Button */}
                <div className="pt-4 pb-2 border-t border-text-accent/10">
                  <div className="flex items-center justify-around py-4">
                    {socialLinks.map((link) => (
                      <motion.a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-text-primary hover:text-text-accent transition-colors duration-300"
                      >
                        {link.icon}
                      </motion.a>
                    ))}
                  </div>
                  <motion.a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center space-x-2 mx-4 px-4 py-2 rounded-md border border-text-accent text-text-accent hover:bg-text-accent/10 transition-colors duration-300"
                  >
                    <FiDownload className="w-4 h-4" />
                    <span>Resume</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
