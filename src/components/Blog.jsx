import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCalendar, FiClock } from 'react-icons/fi';

const Blog = () => {
  const posts = [
    {
      title: 'Building Scalable React Applications',
      excerpt: 'Learn the best practices for building large-scale React applications with modern tools and techniques.',
      category: 'React',
      date: 'Mar 15, 2024',
      readTime: '5 min read',
      image: '/blog-1.jpg'
    },
    {
      title: 'Modern CSS Techniques',
      excerpt: 'Explore modern CSS features and techniques that will revolutionize your styling workflow.',
      category: 'CSS',
      date: 'Mar 10, 2024',
      readTime: '4 min read',
      image: '/blog-2.jpg'
    },
    {
      title: 'The Future of Web Development',
      excerpt: 'A deep dive into upcoming web technologies and how they will shape the future of development.',
      category: 'Web Dev',
      date: 'Mar 5, 2024',
      readTime: '6 min read',
      image: '/blog-3.jpg'
    }
  ];

  return (
    <section id="blog" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Latest Articles</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Insights and tutorials about web development, design, and technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative bg-primary-dark/50 rounded-lg overflow-hidden border border-text-accent/10 
                       hover:border-text-accent/30 transition-all duration-300 flex flex-col h-full"
            >
              {/* Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary-dark/80" />
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-text-accent/10 backdrop-blur-sm rounded-full">
                  <span className="text-text-accent text-sm">{post.category}</span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 p-4 sm:p-6">
                <div className="flex flex-wrap items-center gap-4 text-sm text-text-secondary mb-4">
                  <div className="flex items-center">
                    <FiCalendar className="mr-2" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <FiClock className="mr-2" />
                    {post.readTime}
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-text-primary mb-2 group-hover:text-text-accent 
                           transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-text-secondary mb-4 line-clamp-3 sm:line-clamp-2">
                  {post.excerpt}
                </p>

                <a
                  href="#"
                  className="inline-flex items-center text-text-accent hover:text-text-accent/80 transition-colors 
                         duration-300 mt-auto"
                >
                  Read More
                  <FiArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 bg-text-accent/10 text-text-accent border border-text-accent/20 
                     rounded-md hover:bg-text-accent/20 transition-all duration-300"
          >
            View All Articles
            <FiArrowRight className="ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
