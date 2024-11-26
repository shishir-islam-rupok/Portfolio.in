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
                       hover:border-text-accent/30 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-text-accent/5 to-transparent 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-text-accent/10 flex items-center justify-center 
                            text-text-accent mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold text-text-primary mb-4">{service.title}</h3>
                <p className="text-text-secondary mb-6">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-text-secondary">
                      <span className="w-1.5 h-1.5 rounded-full bg-text-accent mr-2" />
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
