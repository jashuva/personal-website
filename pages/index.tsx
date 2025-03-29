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
            <p>
              I am a skilled software professional with experience in developing robust applications and solutions.
              Currently working as a Tech Lead for the Backend Team at KPMG's KymCompliance project, an AI-driven
              compliance solution that helps organizations manage regulatory compliance at scale.
            </p>
            <p>
              My expertise lies in designing and implementing scalable systems, with a focus on delivering high-quality
              software that meets business requirements and provides exceptional user experiences.
            </p>
          </div>
        </motion.div>
        
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
