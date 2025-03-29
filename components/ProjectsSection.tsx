import { motion } from 'framer-motion';
import { FiGlobe, FiServer, FiDatabase, FiCloud } from 'react-icons/fi';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'Climate Change Risk Assessment Tool',
      client: 'DCCEEW (Gov Dept)',
      description: 'Designed and implemented the backend architecture in .NET 8 and Azure',
      icon: <FiCloud size={24} />,
      iconBg: 'bg-blue-100 dark:bg-blue-900/30',
      iconColor: 'text-blue-600 dark:text-blue-400',
      technologies: ['.NET 8', 'Azure', 'C#', 'REST APIs']
    },
    {
      id: 2,
      title: 'Assisted School Transport Program',
      client: 'NSW DoE',
      description: 'Integrated AWS services with Azure AD using secure APIs',
      icon: <FiServer size={24} />,
      iconBg: 'bg-green-100 dark:bg-green-900/30',
      iconColor: 'text-green-600 dark:text-green-400',
      technologies: ['AWS', 'Azure AD', 'API Integration', 'Security']
    },
    {
      id: 3,
      title: 'Federation University Open Day Website',
      client: 'Federation University',
      description: 'Built virtual event platform using Azure App Services, .NET, and React',
      icon: <FiGlobe size={24} />,
      iconBg: 'bg-purple-100 dark:bg-purple-900/30',
      iconColor: 'text-purple-600 dark:text-purple-400',
      technologies: ['Azure App Services', '.NET', 'React', 'Virtual Events']
    },
    {
      id: 4,
      title: 'REST Super Website Rebranding',
      client: 'REST Super',
      description: 'Migrated CMS and modernized frontend using Vue.js and MVC architecture',
      icon: <FiDatabase size={24} />,
      iconBg: 'bg-yellow-100 dark:bg-yellow-900/30',
      iconColor: 'text-yellow-600 dark:text-yellow-400',
      technologies: ['Vue.js', 'MVC', 'CMS Migration', 'Frontend Development']
    }
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
    <section className="section container" id="projects">
      <h2 className="section-title">Projects & Highlights</h2>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            className="bg-white dark:bg-secondary-800 rounded-xl p-6 shadow-md border border-secondary-100 dark:border-secondary-700 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center mb-4">
              <div className={`p-4 rounded-lg ${project.iconBg} ${project.iconColor} mr-4`}>
                {project.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-secondary-600 dark:text-secondary-400">{project.client}</p>
              </div>
            </div>
            
            <p className="text-secondary-700 dark:text-secondary-300 mb-4">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mt-4">
              {project.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className={`px-3 py-1 text-sm font-medium rounded-full ${project.iconBg} ${project.iconColor}`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
