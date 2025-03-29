import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary-100 dark:bg-secondary-800 py-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-secondary-600 dark:text-secondary-400">
              &copy; {currentYear} Jashuva Thupakula. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-secondary-600 hover:text-primary-600 dark:text-secondary-400 dark:hover:text-primary-400 transition-colors"
              aria-label="GitHub"
            >
              <FiGithub size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/jashuva-thupakula/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-secondary-600 hover:text-primary-600 dark:text-secondary-400 dark:hover:text-primary-400 transition-colors"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={20} />
            </a>
            <a 
              href="mailto:contact@example.com" 
              className="text-secondary-600 hover:text-primary-600 dark:text-secondary-400 dark:hover:text-primary-400 transition-colors"
              aria-label="Email"
            >
              <FiMail size={20} />
            </a>
          </div>
        </div>
        <div className="mt-6 text-center text-sm text-secondary-500 dark:text-secondary-500">
          <p>Built with Next.js, Tailwind CSS, and Framer Motion</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
