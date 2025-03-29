import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiBookOpen, FiCalendar } from 'react-icons/fi';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  slug: string;
}

const BlogSection = () => {
  const [blogPosts] = useState<BlogPost[]>([
    {
      id: 1,
      title: 'Building Scalable Microservices Architecture in Azure',
      excerpt: 'Explore best practices for designing and implementing microservices architecture in Azure that can scale to meet enterprise demands.',
      date: 'March 15, 2025',
      category: 'Cloud Architecture',
      slug: 'building-scalable-microservices-azure'
    },
    {
      id: 2,
      title: 'Securing DevOps Pipelines: A Comprehensive Guide',
      excerpt: 'Learn how to implement security measures throughout your CI/CD pipeline to protect your application from development to deployment.',
      date: 'February 28, 2025',
      category: 'DevSecOps',
      slug: 'securing-devops-pipelines'
    },
    {
      id: 3,
      title: 'The Future of .NET: Insights from the Latest Release',
      excerpt: 'Analyzing the new features in the latest .NET release and how they impact enterprise application development.',
      date: 'January 20, 2025',
      category: '.NET Development',
      slug: 'future-of-dotnet'
    }
  ]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="blog" className="py-20 bg-gradient-to-r from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Blog & Insights
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Thoughts, industry insights, and technical expertise to help you stay informed about the latest trends in technology.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-xs font-semibold px-2 py-1 rounded-full bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300">
                    {post.category}
                  </span>
                  <div className="flex items-center ml-auto text-gray-500 dark:text-gray-400">
                    <FiCalendar className="mr-1" size={14} />
                    <span className="text-sm">{post.date}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-5">
                  {post.excerpt}
                </p>
                <Link 
                  href={`/blog/${post.slug}`} 
                  className="flex items-center text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300"
                >
                  <span>Read More</span>
                  <FiBookOpen className="ml-2" size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center mt-12"
        >
          <Link href="/blog" className="btn btn-secondary">
            View All Articles
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
