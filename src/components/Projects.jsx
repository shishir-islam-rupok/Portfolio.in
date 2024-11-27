import { Parallax } from 'react-scroll-parallax';
import { motion } from 'framer-motion';
import ProjectSlider from './ProjectSlider';
import projectImage1 from '../assets/screencapture-shishir-islam-rupok-github-io-peojact1-2024-11-27-12_46_14.png';

const projects = [
  {
    title: 'E-commerce Website',
    description: 'A modern e-commerce platform with a beautiful UI design and smooth user experience',
    image: projectImage1,
    demo: 'https://shishir-islam-rupok.github.io/peojact1/',
    github: 'https://github.com/shishir-islam-rupok/peojact1',
  },
  {
    title: 'Project 2',
    description: 'An e-commerce platform with modern UI/UX design',
    image: projectImage1,
    demo: '#',
    github: '#',
  },
  {
    title: 'Project 3',
    description: 'A real-time dashboard with data visualization',
    image: projectImage1,
    demo: '#',
    github: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding relative overflow-hidden py-20">
      <Parallax
        className="absolute inset-0 z-0"
        translateY={[-20, 20]}
        opacity={[0.8, 0.3]}
      >
        <div className="absolute inset-0 bg-primary-light/20" />
      </Parallax>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
          
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            My <span className="text-primary-accent">Projects</span>
          </h2>

          <ProjectSlider projects={projects} />
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
