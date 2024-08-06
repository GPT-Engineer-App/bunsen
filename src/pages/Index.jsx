import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import MouseParticles from 'react-mouse-particles';
import { motion } from 'framer-motion';

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <header className="p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">BUNSEN</h1>
        <Menu className="h-6 w-6" />
      </header>
      <main className="container mx-auto px-4 py-16">
        <motion.h2 
          className="text-6xl font-bold mb-4"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          Science,<br />Meet Design.
        </motion.h2>
        <motion.p 
          className="text-xl mb-8"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          Bunsen is a full-service creative and communications studio serving science and frontier technology companies.
        </motion.p>
      </main>
      <div className="fixed top-0 right-0 p-4">
        <span className="text-sm">{mousePosition.x} / {mousePosition.y}</span>
      </div>
      <MouseParticles g={1} num={6} color="random" cull="col,image-wrapper" life={1.5} size={12}/>
    </div>
  );
};

export default Index;
