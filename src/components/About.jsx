import React from 'react';
import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import { FiDownload, FiArrowRight } from 'react-icons/fi';

const About = () => {
  const stats = [
    { label: 'Years Experience', value: '4+' },
    { label: 'Projects Completed', value: '50+' },
    { label: 'Technologies', value: '20+' },
    { label: 'Satisfied Clients', value: '30+' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-primary-dark/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column - Text Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="text-text-accent">About</span> Me
              </h2>
              <div className="w-20 h-1 bg-text-accent/20" />
            </div>

            <div className="space-y-4 text-text-secondary">
              <p>
                Hi! I'm Shishir, a passionate full-stack developer based in Dhaka, Bangladesh. 
                I enjoy creating beautiful, responsive, and user-friendly web applications 
                that solve real-world problems.
              </p>
              <p>
                With expertise in modern web technologies like React, Node.js, and cloud platforms,
                I specialize in building scalable applications that deliver exceptional user experiences.
                I'm constantly learning and exploring new technologies to stay at the forefront of web development.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 items-center justify-center">
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-text-accent text-primary-dark rounded-lg
                         hover:bg-text-accent/90 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FiDownload className="mr-2" />
                Download CV
              </motion.a>
              <motion.a
                href="#contact"
                className="inline-flex items-center px-6 py-3 border border-text-accent text-text-accent
                         rounded-lg hover:bg-text-accent/10 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Let's Talk</span>
                <FiArrowRight className="ml-2" />
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column - Stats & Image */}
          <motion.div variants={itemVariants} className="relative">
            <Parallax speed={-5}>
              <div className="relative z-10 grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 bg-primary-light/5 backdrop-blur-sm border border-text-accent/10 
                             rounded-lg hover:border-text-accent/30 transition-colors duration-300"
                  >
                    <div className="text-3xl font-bold text-text-accent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-text-secondary text-sm">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </Parallax>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-text-accent/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-text-accent/5 rounded-full blur-3xl" />
          </motion.div>
        </motion.div>

        {/* Skills Preview */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">Tech Stack</h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Here are some of the technologies I work with on a daily basis
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4"
          >
            {[
              'JavaScript', 'React', 'Node.js', 'TypeScript',
              'Python', 'MongoDB'
            ].map((tech, index) => (
              <motion.div
                key={tech}
                whileHover={{ y: -5 }}
                className="p-4 bg-primary-light/5 backdrop-blur-sm border border-text-accent/10 
                         rounded-lg text-center hover:border-text-accent/30 transition-all duration-300"
              >
                <span className="text-text-secondary">{tech}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
