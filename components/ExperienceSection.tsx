import { motion } from 'framer-motion';
import { FiBriefcase } from 'react-icons/fi';

const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      title: 'Tech Lead, Backend Team',
      company: 'KPMG Australia',
      project: 'KymCompliance',
      date: 'Present',
      description: [
        'Leading the backend development team for KymCompliance, an AI-driven compliance solution that helps organizations manage regulatory compliance at scale.',
        'Architecting scalable systems that transform complex regulations into actionable obligations.',
        'Implementing AI-powered features that predict impact and optimize controls against industry standards.',
        'Collaborating with cross-functional teams to deliver a comprehensive compliance management platform.',
      ],
    },
    {
      id: 2,
      title: 'Previous Position',
      company: 'Previous Company',
      date: '2020 - 2023',
      description: [
        'Led development of key features and functionality.',
        'Collaborated with cross-functional teams to deliver high-quality solutions.',
        'Optimized application performance and ensured code quality.',
        'Mentored junior developers and implemented best practices.',
      ],
    },
    {
      id: 3,
      title: 'Earlier Position',
      company: 'Earlier Company',
      date: '2018 - 2020',
      description: [
        'Developed and maintained applications using modern technologies.',
        'Implemented new features and fixed bugs in existing codebase.',
        'Participated in code reviews and technical discussions.',
        'Collaborated with team members to meet project deadlines.',
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
    <section className="section bg-secondary-50 dark:bg-secondary-800/30" id="experience">
      <div className="container mx-auto">
        <h2 className="section-title">Experience</h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12"
        >
          {experiences.map((exp) => (
            <motion.div key={exp.id} variants={itemVariants} className="card relative">
              <div className="absolute -left-3 top-6 w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center text-white">
                <FiBriefcase size={14} />
              </div>
              <div className="ml-6 border-l-2 border-primary-200 dark:border-primary-800 pl-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-bold text-secondary-900 dark:text-white">
                    {exp.title} {exp.project && <span className="text-primary-600 dark:text-primary-400">| {exp.project}</span>}
                  </h3>
                  <span className="text-sm font-medium text-secondary-500 dark:text-secondary-400 md:ml-4">
                    {exp.date}
                  </span>
                </div>
                <div className="text-secondary-700 dark:text-secondary-300 mb-4 font-medium">
                  {exp.company}
                </div>
                <ul className="space-y-2 text-secondary-700 dark:text-secondary-300">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="list-disc ml-5">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
