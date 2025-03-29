import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGlobe, FiServer, FiDatabase, FiCloud, FiExternalLink } from 'react-icons/fi';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  client: string;
  description: string;
  challenges: string[];
  outcomes: string[];
  icon: JSX.Element;
  iconBg: string;
  iconColor: string;
  technologies: string[];
  imageUrl?: string;
  clientLogo?: string;
}

const ProjectsSection = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Climate Change Risk Assessment Tool',
      client: 'DCCEEW (Gov Dept)',
      description: 'Designed and implemented a cloud-based risk assessment platform enabling government agencies to evaluate climate change impacts on critical infrastructure and develop mitigation strategies.',
      challenges: [
        'Complex data integration from multiple government databases',
        'Ensuring security compliance with strict government regulations',
        'Designing for scale to handle nationwide data processing',
      ],
      outcomes: [
        'Successfully deployed on Azure with 99.9% uptime',
        'Reduced assessment time by 60% compared to previous manual processes',
        'Enabled real-time collaboration between multiple government stakeholders',
      ],
      icon: <FiCloud size={24} />,
      iconBg: 'bg-blue-100 dark:bg-blue-900/30',
      iconColor: 'text-blue-600 dark:text-blue-400',
      technologies: ['.NET 8', 'Azure', 'C#', 'REST APIs', 'Azure Functions', 'CosmosDB'],
      imageUrl: '/images/climate-project.jpg',
      clientLogo: '/images/companies/dcceew.png'
    },
    {
      id: 2,
      title: 'Assisted School Transport Program',
      client: 'NSW Department of Education',
      description: 'Developed a comprehensive transport management system that coordinates school transportation services for students with special needs across New South Wales.',
      challenges: [
        'Integration of AWS services with existing Azure AD authentication',
        'Real-time route optimization with geographic constraints',
        'Managing complex privacy requirements for student data',
      ],
      outcomes: [
        'Improved route efficiency by 35%, reducing travel times',
        'Enhanced data security with end-to-end encryption',
        'Developed a mobile app for parents to track transport status in real-time',
      ],
      icon: <FiServer size={24} />,
      iconBg: 'bg-green-100 dark:bg-green-900/30',
      iconColor: 'text-green-600 dark:text-green-400',
      technologies: ['AWS', 'Azure AD', 'API Integration', 'Security', 'React Native', 'Node.js'],
      imageUrl: '/images/transport-project.jpg',
      clientLogo: '/images/companies/nsw.png'
    },
    {
      id: 3,
      title: 'Federation University Open Day Website',
      client: 'Federation University',
      description: 'Built an innovative virtual event platform allowing prospective students to experience university open day activities remotely during COVID-19 restrictions.',
      challenges: [
        'Creating an engaging virtual experience that mirrors in-person events',
        'Building interactive video streaming with Q&A capabilities',
        'Ensuring platform stability for high concurrent user loads',
      ],
      outcomes: [
        'Increased participation by 45% compared to previous in-person events',
        'Enabled seamless virtual tours of 5 different campus locations',
        'Implemented live chat support that handled over 2,000 inquiries during peak hours',
      ],
      icon: <FiGlobe size={24} />,
      iconBg: 'bg-purple-100 dark:bg-purple-900/30',
      iconColor: 'text-purple-600 dark:text-purple-400',
      technologies: ['Azure App Services', '.NET', 'React', 'WebRTC', 'SignalR', 'Video Streaming'],
      imageUrl: '/images/university-project.jpg',
      clientLogo: '/images/companies/federation.png'
    },
    {
      id: 4,
      title: 'REST Super Website Rebranding',
      client: 'REST Super',
      description: 'Led the complete redesign and technology migration of a major superannuation provider\'s website, focusing on improved user experience and modern architecture.',
      challenges: [
        'Migrating content from legacy CMS while maintaining SEO rankings',
        'Implementing secure member portal with financial data integration',
        'Ensuring accessibility compliance with WCAG 2.1 AA standards',
      ],
      outcomes: [
        'Reduced page load time by 65% through modern front-end architecture',
        'Increased mobile engagement by 38% after launch',
        'Improved conversion rate for online account signups by 25%',
      ],
      icon: <FiDatabase size={24} />,
      iconBg: 'bg-yellow-100 dark:bg-yellow-900/30',
      iconColor: 'text-yellow-600 dark:text-yellow-400',
      technologies: ['Vue.js', 'MVC', 'CMS Migration', 'Frontend Development', 'Accessibility', 'Performance Optimization'],
      imageUrl: '/images/super-project.jpg',
      clientLogo: '/images/companies/rest.png'
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

  const toggleProject = (id: number) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  return (
    <section className="section container" id="projects">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="section-title">Projects & Case Studies</h2>
        <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto">
          Showcasing key projects where I've delivered innovative solutions to complex business challenges.
        </p>
      </motion.div>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 gap-10"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            className="bg-white dark:bg-secondary-800 rounded-xl p-6 shadow-md border border-secondary-100 dark:border-secondary-700 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex flex-col md:flex-row">
              <div className={`p-4 rounded-lg ${project.iconBg} ${project.iconColor} mr-4 mb-4 md:mb-0 flex-shrink-0`}>
                {project.icon}
              </div>
              <div className="flex-grow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div className="flex items-center">
                    <div>
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                      <div className="flex items-center mt-1">
                        {project.clientLogo && (
                          <div className="mr-3 w-10 h-8 relative flex-shrink-0 bg-white dark:bg-gray-100 rounded-md p-1 shadow-sm flex items-center justify-center border border-gray-200 dark:border-gray-300">
                            <Image 
                              src={project.clientLogo} 
                              alt={`${project.client} logo`} 
                              width={32} 
                              height={24} 
                              className="object-contain max-w-full max-h-full"
                            />
                          </div>
                        )}
                        <p className="text-secondary-600 dark:text-secondary-400">{project.client}</p>
                      </div>
                    </div>
                  </div>
                  <button 
                    onClick={() => toggleProject(project.id)}
                    className="flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 mt-2 md:mt-0"
                  >
                    <span>{expandedProject === project.id ? 'View Less' : 'View Details'}</span>
                    <FiExternalLink className="ml-1" />
                  </button>
                </div>
                
                <p className="text-secondary-700 dark:text-secondary-300 mb-4">
                  {project.description}
                </p>
                
                {expandedProject === project.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 space-y-6"
                  >
                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-secondary-800 dark:text-secondary-200">Challenges</h4>
                      <ul className="list-disc pl-5 space-y-1 text-secondary-700 dark:text-secondary-300">
                        {project.challenges.map((challenge, index) => (
                          <li key={index}>{challenge}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-secondary-800 dark:text-secondary-200">Outcomes</h4>
                      <ul className="list-disc pl-5 space-y-1 text-secondary-700 dark:text-secondary-300">
                        {project.outcomes.map((outcome, index) => (
                          <li key={index}>{outcome}</li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
                
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
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
