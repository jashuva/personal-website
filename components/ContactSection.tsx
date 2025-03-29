import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiLinkedin, FiMail, FiMapPin } from 'react-icons/fi';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    isError: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({ isSubmitting: true, isSubmitted: false, isError: false });
    
    try {
      // Send the form data to Formspree
      const response = await fetch('https://formspree.io/f/xpwpjrrk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });
      
      if (response.ok) {
        // Reset form after successful submission
        setFormData({ name: '', email: '', subject: '', message: '' });
        setFormStatus({ isSubmitting: false, isSubmitted: true, isError: false });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setFormStatus({ isSubmitting: false, isSubmitted: false, isError: true });
    }
  };

  const contactInfo = [
    {
      icon: <FiLinkedin />,
      title: 'LinkedIn',
      content: 'linkedin.com/in/jashuva-thupakula',
      link: 'https://www.linkedin.com/in/jashuva-thupakula/',
    },
    {
      icon: <FiMail />,
      title: 'Email',
      content: 'jthupakula@kpmg.com.au',
      link: 'mailto:jthupakula@kpmg.com.au',
    },
    {
      icon: <FiMapPin />,
      title: 'Location',
      content: 'Sydney, Australia',
      link: null,
    },
  ];

  return (
    <section className="section container" id="contact">
      <h2 className="section-title">Get In Touch</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
          
          <div className="space-y-6 mb-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-start">
                <div className="p-3 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mr-4">
                  {info.icon}
                </div>
                <div>
                  <h4 className="font-medium text-secondary-900 dark:text-white">{info.title}</h4>
                  {info.link ? (
                    <a 
                      href={info.link} 
                      target={info.title === 'Email' ? undefined : '_blank'} 
                      rel="noopener noreferrer"
                      className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-secondary-600 dark:text-secondary-400">{info.content}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <div className="p-6 bg-secondary-50 dark:bg-secondary-800/50 rounded-lg">
            <h4 className="text-lg font-medium mb-2">Open to Opportunities</h4>
            <p className="text-secondary-700 dark:text-secondary-300">
              I'm always interested in hearing about new projects and opportunities. 
              Feel free to reach out if you'd like to discuss potential collaborations.
            </p>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="card">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            
            {formStatus.isSubmitted ? (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-500 mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-2">Message Sent!</h4>
                <p className="text-secondary-600 dark:text-secondary-400 mb-6">
                  Thank you for your message. I'll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setFormStatus({ isSubmitting: false, isSubmitted: false, isError: false })}
                  className="btn btn-primary"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-secondary-300 dark:border-secondary-700 rounded-md bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-secondary-300 dark:border-secondary-700 rounded-md bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-secondary-300 dark:border-secondary-700 rounded-md bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-secondary-300 dark:border-secondary-700 rounded-md bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  ></textarea>
                </div>
                
                {formStatus.isError && (
                  <div className="text-red-500 bg-red-50 dark:bg-red-900/10 p-3 rounded">
                    An error occurred. Please try again later.
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={formStatus.isSubmitting}
                  className="btn btn-primary flex items-center"
                >
                  {formStatus.isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend className="mr-2" /> Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
