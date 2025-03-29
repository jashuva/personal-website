import { motion } from 'framer-motion';
import { FiArrowDown, FiMail, FiFolder, FiFileText, FiLinkedin, FiGithub, FiTwitter, FiBookOpen, FiMapPin } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';

// Simplified background component with reduced animation
const SubtleBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {/* Simplified, subtle gradient shapes for depth */}
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-primary-300 to-primary-100 dark:from-primary-700 dark:to-primary-900 blur-2xl opacity-20 dark:opacity-15"></div>
      <div className="absolute top-40 -left-20 w-60 h-60 rounded-full bg-gradient-to-tr from-secondary-300 to-secondary-100 dark:from-secondary-700 dark:to-secondary-900 blur-2xl opacity-20 dark:opacity-15"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-gradient-to-bl from-primary-400 to-secondary-300 dark:from-primary-600 dark:to-secondary-700 blur-2xl opacity-20 dark:opacity-15"></div>
    </div>
  );
};

// Skill badge component
const SkillBadge = ({ skill }: { skill: string }) => {
  const colors = [
    "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
    "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
    "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
  ];
  
  // Use a deterministic method to assign colors based on the skill name
  const colorIndex = skill.charCodeAt(0) % colors.length;
  
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${colors[colorIndex]} mr-2 mb-2`}>
      {skill}
    </span>
  );
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-secondary-900 dark:to-secondary-800 overflow-hidden">
      <SubtleBackground />
      
      <div className="container mx-auto px-4 z-10 py-16">
        <div className="text-center">
          {/* Profile Photo with enhanced styling and larger size - no hover effects */}
          <div className="mx-auto mb-8 relative">
            <div className="w-48 h-48 md:w-56 md:h-56 mx-auto rounded-2xl overflow-hidden border-4 border-primary-500 shadow-lg">
              <Image 
                src="/images/profile-photo.jpg" 
                alt="Jashuva Thupakula" 
                width={280} 
                height={280} 
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>

          {/* Name with enhanced typography */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-bold text-secondary-900 dark:text-white mb-3 tracking-tight"
          >
            Jashuva Thupakula
          </motion.h1>
          
          {/* Title with enhanced styling */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-xl md:text-2xl font-semibold text-secondary-700 dark:text-secondary-300 mb-2"
          >
            Associate Director - KPMG Australia
          </motion.p>
          
          {/* New tagline */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-lg md:text-xl text-primary-600 dark:text-primary-400 mb-4 font-medium"
          >
            Crafting Cloud-Native Solutions with .NET, Azure & JavaScript
          </motion.p>
          
          {/* Location */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-base md:text-lg text-secondary-600 dark:text-secondary-400 mb-6"
          >
            <span className="inline-flex items-center">
              <FiMapPin size={20} className="mr-1" /> Sydney, New South Wales, Australia
            </span>
          </motion.p>
          
          {/* Skill badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mb-8"
          >
            <SkillBadge skill=".NET 8" />
            <SkillBadge skill="Azure" />
            <SkillBadge skill="React" />
            <SkillBadge skill="AWS" />
            <SkillBadge skill="Agile" />
          </motion.div>
          
          {/* Enhanced CTAs with icons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mb-10"
          >
            <Link href="#contact" className="btn btn-primary flex items-center px-6 py-3">
              <FiMail className="mr-2" /> Get in Touch
            </Link>
            <Link href="#projects" className="btn btn-secondary flex items-center px-6 py-3">
              <FiFolder className="mr-2" /> View Projects
            </Link>
            <Link href="#" className="btn btn-outline flex items-center px-6 py-3">
              <FiFileText className="mr-2" /> View Resume
            </Link>
          </motion.div>
          
          {/* Social media links */}
          <div className="flex justify-center space-x-4">
            <a 
              href="https://www.linkedin.com/in/jashuva-thupakula/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors p-2"
            >
              <FiLinkedin size={24} />
            </a>
            <a 
              href="https://github.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors p-2"
            >
              <FiGithub size={24} />
            </a>
            <a 
              href="https://twitter.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors p-2"
            >
              <FiTwitter size={24} />
            </a>
            <a 
              href="#blog" 
              className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors p-2"
            >
              <FiBookOpen size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <Link href="#about" className="text-secondary-500 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors flex flex-col items-center">
            <span className="mb-2 text-sm font-medium">Scroll Down</span>
            <FiArrowDown size={20} />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
