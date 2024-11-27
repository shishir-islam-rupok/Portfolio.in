import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiLayout, FiUsers } from 'react-icons/fi';

const Services = () => {
  const services = [
    {
      icon: <FiCode className="w-8 h-8" />,
      title: 'Web Development',
      description: 'Building responsive and performant web applications using modern technologies.',
      features: ['React & Next.js', 'Node.js & Express', 'Database Design', 'API Development']
    },
    {
      icon: <FiLayout className="w-8 h-8" />,
      title: 'UI/UX Design',
      description: 'Creating beautiful and intuitive user interfaces with great user experience.',
      features: ['Wireframing', 'Prototyping', 'User Research', 'Design Systems']
    },
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: 'Consulting',
      description: 'Providing expert advice on technical decisions and project architecture.',
      features: ['Tech Strategy', 'Code Review', 'Team Training', 'Best Practices']
    }
  ];

  return (
    <section id="services" className="py-20 bg-primary-light/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Services</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Specialized services tailored to meet your project needs with a focus on quality and innovation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative p-8 rounded-lg bg-primary-dark/50 border border-text-accent/10 
                       hover:border-text-accent/30 transition-all duration-300 overflow-hidden cursor-pointer"
            >
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-text-accent/5 via-text-accent/10 to-transparent 
                          opacity-0 group-hover:opacity-100 transition-all duration-500" />
              
              {/* Shine effect */}
              <div className="absolute -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-shine" />
              
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500
                          bg-[radial-gradient(circle_at_50%_50%,rgba(100,255,218,0.1),transparent_60%)]" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-text-accent/10 flex items-center justify-center 
                            text-text-accent mb-6 group-hover:scale-110 group-hover:bg-text-accent/20 
                            transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(100,255,218,0.3)]">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold text-text-primary mb-4 group-hover:text-[#64ffda] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-text-secondary mb-6 group-hover:text-white/90 transition-colors duration-300">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-text-secondary group-hover:text-white/80 transition-colors duration-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-text-accent mr-2 group-hover:bg-[#64ffda] 
                                   group-hover:shadow-[0_0_5px_#64ffda] transition-all duration-300" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
