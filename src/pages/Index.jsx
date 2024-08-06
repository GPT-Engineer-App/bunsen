import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import MouseParticles from 'react-mouse-particles';

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

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">BUNSEN</h1>
        <Menu className="h-6 w-6" />
      </header>
      <main className="container mx-auto px-4 py-16">
        <h2 className="text-6xl font-bold mb-4">Science,<br />Meet Design.</h2>
        <p className="text-xl mb-8">
          Bunsen is a full-service creative and communications studio serving science and frontier technology companies.
        </p>
      </main>
      <div className="fixed top-0 right-0 p-4">
        <span className="text-sm">{mousePosition.x} / {mousePosition.y}</span>
      </div>
      <MouseParticles g={1} color="random" cull="col,image-wrapper"/>
    </div>
  );
};

export default Index;
