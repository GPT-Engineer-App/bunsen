import { motion, useAnimation } from 'framer-motion';
import MouseParticles from 'react-mouse-particles';
import { useEffect } from 'react';

const StaggeredAnimation = ({ children, delay = 0.2 }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start(i => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * delay }
    }));
  }, [controls, delay]);

  return (
    <>
      {children.map((child, i) => (
        <motion.div
          key={i}
          custom={i}
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
        >
          {child}
        </motion.div>
      ))}
    </>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <motion.header 
        className="p-4 flex justify-between items-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl font-bold">BUNSEN</h1>
        <nav className="flex items-center space-x-6">
          <StaggeredAnimation>
            {[
              <a href="#" className="hover:text-gray-300">About</a>,
              <a href="#" className="hover:text-gray-300">Services</a>,
              <a href="#" className="hover:text-gray-300">Work</a>,
              <a href="#" className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition duration-300">
                Start a project →
              </a>
            ]}
          </StaggeredAnimation>
        </nav>
      </motion.header>
      <motion.main 
        className="container mx-auto px-4 py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <StaggeredAnimation>
          {[
            <h2 className="text-6xl font-bold mb-4">Science,<br />Meet Design.</h2>,
            <p className="text-xl mb-8">
              Bunsen is a full-service creative and communications studio serving science and frontier technology companies.
            </p>
          ]}
        </StaggeredAnimation>
      </motion.main>
      
      <motion.section 
        className="container mx-auto px-4 py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            <img 
              src="https://cdn.prod.website-files.com/642eda29a31be12bb11f5069/647dbee5378f73aa3d6f675c_thumb-precision.webp" 
              alt="Precision" 
              className="rounded-lg shadow-lg mx-auto object-cover w-full max-w-md"
            />
          </motion.div>
          <div className="md:w-1/2 md:pl-8">
            <StaggeredAnimation delay={0.3}>
              {[
                <h3 className="text-4xl font-bold mb-4">At Bunsen, we're translators.</h3>,
                <p className="text-xl mb-4">
                  We turn complex science and deep tech concepts into clear, connective narratives and present them with compelling design.
                </p>,
                <h4 className="text-2xl font-semibold mb-2">Precision</h4>,
                <p className="text-lg">Interfacing the brain</p>
              ]}
            </StaggeredAnimation>
          </div>
        </div>
      </motion.section>
      <MouseParticles g={1} num={6} color="random" cull="col,image-wrapper" life={1.5} size={12}/>
      
      <motion.footer 
        className="bg-black text-white py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2.5, duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-4">Ready to light it up?</h2>
            <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition duration-300">
              Start a Project →
            </button>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">BUNSEN</h3>
            </div>
            <div>
              <h4 className="font-semibold mb-2">What</h4>
              <ul>
                <li><a href="#" className="hover:underline">Services</a></li>
                <li><a href="#" className="hover:underline">Our Work</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Who</h4>
              <ul>
                <li><a href="#" className="hover:underline">About</a></li>
                <li><a href="#" className="hover:underline">Team</a></li>
                <li><a href="#" className="hover:underline">Jobs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Connect</h4>
              <ul>
                <li><a href="#" className="hover:underline">LinkedIn</a></li>
                <li><a href="#" className="hover:underline">Twitter</a></li>
                <li><a href="#" className="hover:underline">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mb-8">
            <h4 className="font-semibold mb-2">Subscribe to Updates</h4>
            <div className="flex w-full">
              <input type="email" placeholder="Email Address" className="bg-transparent border-b border-white px-2 py-1 mr-2 focus:outline-none flex-grow" />
              <button className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                →
              </button>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm mb-4 md:mb-0">
              <p>info@bunsenstudio.com</p>
              <p>+1(415) 934-0347</p>
            </div>
            <div className="text-sm">
              <a href="#" className="hover:underline mr-4">Terms & Conditions</a>
              <a href="#" className="hover:underline">Privacy Policy</a>
            </div>
          </div>
          
          <div className="mt-8 text-sm text-center">
            <p>© Copyright 2023 Bunsen. All Rights Reserved.</p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Index;
