import { motion } from 'framer-motion';
import { FiArrowDown } from 'react-icons/fi';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-secondary-900 dark:to-secondary-800 overflow-hidden">
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-secondary-900 dark:text-white mb-6">
            Jashuva Thupakula
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl text-secondary-700 dark:text-secondary-300 mb-12 max-w-3xl mx-auto"
          >
            Tech Lead · Software Engineer · Backend Specialist
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="#contact" className="btn btn-primary">
              Get in Touch
            </Link>
            <Link href="#projects" className="btn btn-secondary">
              View Projects
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Abstract shapes background */}
      <div className="absolute inset-0 overflow-hidden opacity-20 dark:opacity-10 z-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary-300 dark:bg-primary-700"></div>
        <div className="absolute top-40 -left-20 w-60 h-60 rounded-full bg-secondary-300 dark:bg-secondary-700"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-primary-400 dark:bg-primary-600"></div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <Link href="#about" className="text-secondary-500 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors flex flex-col items-center">
            <span className="mb-2">Scroll Down</span>
            <FiArrowDown size={20} />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
