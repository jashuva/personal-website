import { motion } from 'framer-motion';
import { FiAward, FiBookOpen } from 'react-icons/fi';

const EducationSection = () => {
  const education = [
    {
      id: 1,
      degree: 'Bachelor of Technology (Computer Science)',
      institution: 'JNTU Hyderabad',
      year: '2007',
      type: 'education'
    }
  ];

  const certifications = [
    {
      id: 1,
      name: 'Microsoft Certified: Azure Developer Associate',
      issuer: 'Microsoft',
      date: 'Verified on LinkedIn',
      type: 'certification'
    },
    {
      id: 2,
      name: 'AZ-204: Developing Solutions for Microsoft Azure',
      issuer: 'Microsoft',
      date: 'Verified on LinkedIn',
      type: 'certification'
    },
    {
      id: 3,
      name: 'Other Microsoft certifications',
      issuer: 'Microsoft',
      date: 'Various dates',
      type: 'certification'
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
    <section className="section container" id="education">
      <h2 className="section-title">Education & Certifications</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Education */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-6"
        >
          <div className="flex items-center mb-4">
            <div className="p-3 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mr-4">
              <FiBookOpen size={24} />
            </div>
            <h3 className="text-2xl font-bold">Education</h3>
          </div>
          
          {education.map((item) => (
            <motion.div key={item.id} variants={itemVariants} className="card">
              <h4 className="text-xl font-bold mb-2">{item.degree}</h4>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <p className="text-secondary-700 dark:text-secondary-300 font-medium">
                  {item.institution}
                </p>
                <span className="text-sm font-medium text-secondary-500 dark:text-secondary-400 md:ml-4">
                  {item.year}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Certifications */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-6"
        >
          <div className="flex items-center mb-4">
            <div className="p-3 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mr-4">
              <FiAward size={24} />
            </div>
            <h3 className="text-2xl font-bold">Certifications</h3>
          </div>
          
          {certifications.map((item) => (
            <motion.div key={item.id} variants={itemVariants} className="card">
              <h4 className="text-xl font-bold mb-2">{item.name}</h4>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <p className="text-secondary-700 dark:text-secondary-300 font-medium">
                  {item.issuer}
                </p>
                <span className="text-sm font-medium text-secondary-500 dark:text-secondary-400 md:ml-4">
                  {item.date}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
