import { motion } from 'framer-motion';
import { FiBriefcase } from 'react-icons/fi';

const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      title: 'Associate Director – Software Engineering',
      company: 'KPMG Australia',
      date: 'Sep 2021 – Present',
      description: [
        'Lead solutions in .NET Core, Azure, and cloud-first architecture.',
        'Developed government solutions (e.g., DCCEEW tool).',
        'Streamlined processes and led Agile teams.',
        'Tech Lead for Backend Team on KymCompliance, an AI-driven compliance solution that helps organizations manage regulatory compliance at scale.',
      ],
    },
    {
      id: 2,
      title: 'Senior Software Engineer',
      company: 'Dubber Corporation',
      date: 'Jul 2021 – Sep 2021',
      description: [
        'Focused on Node.js and AWS-based backend solutions.',
      ],
    },
    {
      id: 3,
      title: 'Senior Software Engineer',
      company: 'Fisher & Paykel Healthcare',
      date: 'Feb 2021 – Jul 2021',
      description: [
        'Modernized corporate websites using ReactJS and microservices architecture.',
      ],
    },
    {
      id: 4,
      title: 'Senior Developer',
      company: 'Aged Care Quality & Safety Commission',
      date: 'Jul 2020 – Jan 2021',
      description: [
        'Developed LMS platforms and tools for healthcare compliance using .NET Core and Azure.',
      ],
    },
    {
      id: 5,
      title: 'Consultant Developer',
      company: 'Microsoft NZ',
      date: 'Jan 2019 – Jul 2020',
      description: [
        'Developed cloud-native applications.',
        'Led workshops and advised clients on Azure adoption.',
      ],
    },
    {
      id: 6,
      title: '.NET Developer / Team Lead',
      company: 'Federation University, ACG, NSW Transport (Multiple Projects)',
      date: 'Various',
      description: [
        'Managed solution design, vendor coordination, and deployment processes.',
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
                    {exp.title}
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
