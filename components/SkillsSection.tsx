import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiServer, FiUsers, FiTool, FiCloud } from 'react-icons/fi';

const SkillsSection = () => {
  const skillCategories = [
    {
      id: 'cloud',
      title: 'Cloud & DevOps',
      icon: <FiCloud size={24} />,
      iconBg: 'bg-primary-100 dark:bg-primary-900/30',
      iconColor: 'text-primary-600 dark:text-primary-400',
      barColor: 'bg-primary-500 dark:bg-primary-600',
      percentColor: 'text-primary-600 dark:text-primary-400',
      skills: [
        { name: 'Azure', level: 90 },
        { name: 'AWS', level: 85 },
        { name: 'Azure DevOps', level: 90 },
        { name: 'Bitbucket Pipelines', level: 85 },
      ],
    },
    {
      id: 'programming',
      title: 'Programming & Frameworks',
      icon: <FiCode size={24} />,
      iconBg: 'bg-green-100 dark:bg-green-900/30',
      iconColor: 'text-green-600 dark:text-green-400',
      barColor: 'bg-green-500 dark:bg-green-600',
      percentColor: 'text-green-600 dark:text-green-400',
      skills: [
        { name: '.NET Core/Framework', level: 95 },
        { name: 'C#', level: 95 },
        { name: 'Node.js', level: 85 },
        { name: 'SQL', level: 90 },
        { name: 'RESTful APIs', level: 95 },
      ],
    },
    {
      id: 'frontend',
      title: 'Frontend & Web',
      icon: <FiServer size={24} />,
      iconBg: 'bg-purple-100 dark:bg-purple-900/30',
      iconColor: 'text-purple-600 dark:text-purple-400',
      barColor: 'bg-purple-500 dark:bg-purple-600',
      percentColor: 'text-purple-600 dark:text-purple-400',
      skills: [
        { name: 'ReactJS', level: 85 },
        { name: 'Angular', level: 80 },
        { name: 'JavaScript', level: 90 },
        { name: 'HTML/CSS', level: 90 },
      ],
    },
    {
      id: 'tools',
      title: 'Tools & Practices',
      icon: <FiTool size={24} />,
      iconBg: 'bg-yellow-100 dark:bg-yellow-900/30',
      iconColor: 'text-yellow-600 dark:text-yellow-400',
      barColor: 'bg-yellow-500 dark:bg-yellow-600',
      percentColor: 'text-yellow-600 dark:text-yellow-400',
      skills: [
        { name: 'CI/CD', level: 90 },
        { name: 'Agile', level: 95 },
        { name: 'Git', level: 90 },
        { name: 'JIRA/Confluence', level: 85 },
        { name: 'TDD, SOLID', level: 90 },
      ],
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
    <section className="section container" id="skills">
      <h2 className="section-title">Skills & Expertise</h2>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {skillCategories.map((category) => (
          <motion.div
            key={category.id}
            variants={itemVariants}
            className="bg-white dark:bg-secondary-800 rounded-xl p-6 shadow-md border border-secondary-100 dark:border-secondary-700"
          >
            <div className="flex items-center mb-8">
              <div className={`p-4 rounded-lg ${category.iconBg} ${category.iconColor} mr-4`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-bold">{category.title}</h3>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              {category.skills.map((skill) => (
                <div 
                  key={skill.name} 
                  className="bg-secondary-50 dark:bg-secondary-700/50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-secondary-800 dark:text-secondary-200 font-medium">{skill.name}</span>
                    <span className={`${category.percentColor} font-semibold`}>{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary-200 dark:bg-secondary-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      viewport={{ once: true }}
                      className={`h-full ${category.barColor} rounded-full`}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default SkillsSection;
