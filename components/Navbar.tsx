import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import Link from 'next/link';

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  // After mounting, we can show the theme switcher
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Home', url: '#' },
    { name: 'About', url: '#about' },
    { name: 'Experience', url: '#experience' },
    { name: 'Skills', url: '#skills' },
    { name: 'Projects', url: '#projects' },
    { name: 'Contact', url: '#contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-secondary-900/80 backdrop-blur-md py-4 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary-600 dark:text-primary-400 no-underline">
          Jashuva Thupakula
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.url}
                className="text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors no-underline"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {mounted && (
            <button
              aria-label="Toggle Dark Mode"
              type="button"
              className="p-2 rounded-full bg-secondary-200 dark:bg-secondary-700 focus:outline-none"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              {theme === 'dark' ? <FiSun className="text-yellow-300" /> : <FiMoon className="text-secondary-600" />}
            </button>
          )}
        </div>

        {/* Mobile Navigation Button */}
        <div className="flex items-center md:hidden">
          {mounted && (
            <button
              aria-label="Toggle Dark Mode"
              type="button"
              className="p-2 mr-4 rounded-full bg-secondary-200 dark:bg-secondary-700 focus:outline-none"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              {theme === 'dark' ? <FiSun className="text-yellow-300" /> : <FiMoon className="text-secondary-600" />}
            </button>
          )}

          <button
            aria-label="Toggle Menu"
            type="button"
            className="p-2 rounded-full bg-secondary-200 dark:bg-secondary-700 focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden fixed inset-0 top-16 bg-white dark:bg-secondary-900 z-40"
        >
          <div className="flex flex-col py-8 px-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.url}
                className="text-xl py-2 text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
