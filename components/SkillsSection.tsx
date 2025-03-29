import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiServer, FiUsers, FiTool } from 'react-icons/fi';

const SkillsSection = () => {
  const skillCategories = [
    {
      id: 'languages',
      title: 'Programming Languages',
      icon: <FiCode size={24} />,
      skills: [
        { name: 'JavaScript', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'Java', level: 75 },
        { name: 'C#', level: 70 },
      ],
    },
    {
      id: 'backend',
      title: 'Backend Technologies',
      icon: <FiServer size={24} />,
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express', level: 85 },
        { name: 'Django', level: 80 },
        { name: 'Spring Boot', level: 75 },
        { name: '.NET Core', level: 70 },
      ],
    },
    {
      id: 'database',
      title: 'Database & Cloud',
      icon: <FiDatabase size={24} />,
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'PostgreSQL', level: 90 },
        { name: 'AWS', level: 80 },
        { name: 'Azure', level: 75 },
        { name: 'GCP', level: 70 },
      ],
    },
    {
      id: 'tools',
      title: 'Tools & Practices',
      icon: <FiTool size={24} />,
      skills: [
        { name: 'Git/GitHub', level: 95 },
        { name: 'Docker', level: 85 },
        { name: 'CI/CD', level: 80 },
        { name: 'Test-Driven Development', level: 80 },
        { name: 'Agile/Scrum', level: 90 },
      ],
    },
    {
      id: 'soft',
      title: 'Soft Skills',
      icon: <FiUsers size={24} />,
      skills: [
        { name: 'Team Leadership', level: 90 },
        { name: 'Problem Solving', level: 95 },
        { name: 'Communication', level: 90 },
        { name: 'Mentoring', level: 85 },
        { name: 'Project Management', level: 80 },
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
            className="card"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mr-4">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold">{category.title}</h3>
            </div>
            
            <div className="space-y-5">
              {category.skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-secondary-700 dark:text-secondary-300">{skill.name}</span>
                    <span className="text-secondary-500 dark:text-secondary-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary-200 dark:bg-secondary-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      viewport={{ once: true }}
                      className="h-full bg-primary-500 dark:bg-primary-600 rounded-full"
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
