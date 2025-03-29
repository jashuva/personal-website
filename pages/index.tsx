import { NextPage } from 'next';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import ExperienceSection from '../components/ExperienceSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import EducationSection from '../components/EducationSection';

const Home: NextPage = () => {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Jashuva Thupakula | Personal Website</title>
        <meta name="description" content="Professional portfolio of Jashuva Thupakula" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      
      <main>
        <HeroSection />
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="section container"
          id="about"
        >
          <h2 className="section-title">About Me</h2>
          <div className="card">
            <p className="mb-4">
              Highly experienced Associate Director with 16+ years of expertise in software engineering and full-stack development. 
              Proven track record of designing and delivering scalable, cloud-native applications using Microsoft and open-source technologies.
            </p>
            <p className="mb-4">
              Adept in .NET Core, Azure, AWS, and modern JavaScript frameworks (React, Vue, Angular). 
              Demonstrated success in leading agile teams, managing vendor integrations, and driving architectural decisions in complex enterprise environments.
            </p>
            <p className="mb-4">
              Skilled communicator and trusted technical advisor with deep understanding of solution design, stakeholder engagement, 
              and secure application delivery in both public and private sectors.
            </p>
            <div className="mt-6 p-4 bg-secondary-50 dark:bg-secondary-800/50 rounded-lg">
              <p className="flex items-center">
                <span className="font-semibold mr-2">Security Clearance:</span> 
                Negative Vetting Level 1 (NV1) – Eligible for secure government projects
              </p>
            </div>
          </div>
        </motion.div>
        
        <ExperienceSection />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
