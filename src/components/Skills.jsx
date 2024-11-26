import { Parallax } from 'react-scroll-parallax';
import { motion } from 'framer-motion';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaNpm } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiVite } from 'react-icons/si';

const skills = [
  { name: 'React', icon: FaReact, color: '#61DAFB' },
  { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
  { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
  { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
  { name: 'Vite', icon: SiVite, color: '#646CFF' },
  { name: 'Git', icon: FaGitAlt, color: '#F05032' },
  { name: 'NPM', icon: FaNpm, color: '#CB3837' },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <Parallax
        className="absolute inset-0 z-0"
        translateY={[20, -20]}
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
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Technical <span className="text-primary-accent">Skills</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center"
              >
                <div className="parallax-card p-4 rounded-lg w-full aspect-square flex items-center justify-center mb-2">
                  <skill.icon
                    className="w-12 h-12 transition-transform duration-300 transform group-hover:scale-110"
                    style={{ color: skill.color }}
                  />
                </div>
                <span className="text-gray-300 text-sm font-medium">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
