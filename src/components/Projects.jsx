import { Parallax } from 'react-scroll-parallax';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Project 1',
    description: 'A responsive web application built with React and TailwindCSS',
    image: 'https://via.placeholder.com/400x300',
    tags: ['React', 'TailwindCSS', 'JavaScript'],
    liveLink: '#',
    githubLink: '#',
  },
  {
    title: 'Project 2',
    description: 'An e-commerce platform with modern UI/UX design',
    image: 'https://via.placeholder.com/400x300',
    tags: ['Next.js', 'TypeScript', 'Styled Components'],
    liveLink: '#',
    githubLink: '#',
  },
  {
    title: 'Project 3',
    description: 'A real-time dashboard with data visualization',
    image: 'https://via.placeholder.com/400x300',
    tags: ['Vue.js', 'D3.js', 'Firebase'],
    liveLink: '#',
    githubLink: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding relative overflow-hidden">
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="parallax-card group"
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <h3 className="text-xl font-semibold mb-2 text-primary-accent">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 text-sm bg-primary-dark/50 rounded-full text-primary-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.liveLink}
                    className="btn-primary text-sm py-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    className="btn-primary text-sm py-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
