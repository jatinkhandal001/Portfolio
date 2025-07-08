import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const LoadingScreen: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const text = textRef.current;
    const particles = particlesRef.current;

    if (!container || !text || !particles) return;

    // Create floating particles
    for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div');
      particle.className = 'absolute w-1 h-1 bg-cyan-400 rounded-full opacity-70';
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particles.appendChild(particle);
    }

    const tl = gsap.timeline();
    
    // Animate particles
    gsap.to(particles.children, {
      y: () => Math.random() * 200 - 100,
      x: () => Math.random() * 200 - 100,
      rotation: () => Math.random() * 360,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.1
    });

    // Text animation with morphing effect
    tl.fromTo(text, {
      scale: 0,
      rotation: -180,
      opacity: 0,
      filter: 'blur(20px)'
    }, {
      scale: 1,
      rotation: 0,
      opacity: 1,
      filter: 'blur(0px)',
      duration: 2,
      ease: "elastic.out(1, 0.5)"
    })
    .to(text, {
      textShadow: '0 0 20px #06b6d4, 0 0 40px #8b5cf6, 0 0 60px #ec4899',
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // Holographic scanning effect
    const scanner = document.createElement('div');
    scanner.className = 'absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-30';
    scanner.style.transform = 'translateX(-100%)';
    container.appendChild(scanner);

    gsap.to(scanner, {
      x: '200%',
      duration: 2,
      repeat: -1,
      ease: "power2.inOut"
    });

    return () => tl.kill();
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden"
    >
      <div ref={particlesRef} className="absolute inset-0" />
      
      {/* Matrix-style background */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-green-400 text-xs font-mono animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`
            }}
          >
            {Math.random().toString(36).substring(7)}
          </div>
        ))}
      </div>

      <div className="text-center relative z-10">
        <h1
          ref={textRef}
          className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mb-8"
          style={{ fontFamily: 'Orbitron, monospace' }}
        >
          JATIN
        </h1>
        
        {/* Loading progress bar */}
        <div className="w-64 h-1 bg-gray-800 rounded-full mx-auto overflow-hidden">
          <div className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full animate-pulse" 
               style={{ width: '100%', animation: 'loading 3s ease-in-out infinite' }} />
        </div>
        
        <p className="text-cyan-400 mt-4 text-lg font-mono animate-pulse">
          Initializing Portfolio Matrix...
        </p>
      </div>

      <style jsx>{`
        @keyframes loading {
          0% { width: 0%; }
          50% { width: 70%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;