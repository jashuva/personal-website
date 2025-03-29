import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import Link from 'next/link';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'KymCompliance',
      description: 'AI-driven compliance solution that helps organizations manage regulatory compliance at scale. Transforms complex regulations into actionable obligations and optimizes controls.',
      technologies: ['AI', 'Machine Learning', 'Backend Development', 'Regulatory Tech'],
      image: '/images/project-kym.jpg',
      link: 'https://kpmg.com/au/en/home/technology-solutions/ai-compliance.html',
      github: '',
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'A sample project description. This would be replaced with actual project information for a real portfolio website.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      image: '/images/project-2.jpg',
      link: '#',
      github: 'https://github.com/',
    },
    {
      id: 3,
      title: 'Project Three',
      description: 'A sample project description. This would be replaced with actual project information for a real portfolio website.',
      technologies: ['Python', 'Django', 'PostgreSQL', 'Docker'],
      image: '/images/project-3.jpg',
      link: '#',
      github: 'https://github.com/',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="section bg-secondary-50 dark:bg-secondary-800/30" id="projects">
      <div className="container mx-auto">
        <h2 className="section-title">Projects</h2>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants} className="card h-full flex flex-col">
              <div className="w-full h-48 bg-secondary-200 dark:bg-secondary-700 rounded-t-lg mb-4 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-secondary-400 dark:text-secondary-500">
                  {project.title} Preview
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              
              <p className="text-secondary-700 dark:text-secondary-300 mb-4 flex-grow">
                {project.description}
              </p>
              
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium px-2 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-4 mt-auto">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-300 flex items-center"
                  >
                    <FiExternalLink className="mr-1" /> View Project
                  </a>
                )}
                
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-300 flex items-center"
                  >
                    <FiGithub className="mr-1" /> Code
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
