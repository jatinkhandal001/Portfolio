import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useTheme } from '../contexts/ThemeContext';

const FloatingOrbs: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clear existing orbs
    container.innerHTML = '';

    // Create multiple types of floating elements
    const createFloatingElements = () => {
      // Large background orbs
      const largOrbCount = 8;
      for (let i = 0; i < largOrbCount; i++) {
        const orb = document.createElement('div');
        const size = 200 + Math.random() * 400;
        
        orb.className = 'floating-orb-large absolute rounded-full blur-3xl pointer-events-none';
        orb.style.width = `${size}px`;
        orb.style.height = `${size}px`;
        orb.style.left = `${Math.random() * 120 - 10}%`;
        orb.style.top = `${Math.random() * 120 - 10}%`;
        orb.style.zIndex = '1';
        
        const colors = theme === 'dark' 
          ? [
              'from-cyan-500/15 to-purple-500/15',
              'from-purple-500/15 to-pink-500/15',
              'from-blue-500/15 to-cyan-500/15',
              'from-pink-500/15 to-orange-500/15',
              'from-indigo-500/15 to-purple-500/15',
              'from-emerald-500/15 to-cyan-500/15',
              'from-violet-500/15 to-fuchsia-500/15',
              'from-rose-500/15 to-pink-500/15'
            ]
          : [
              'from-purple-300/25 to-blue-300/25',
              'from-blue-300/25 to-cyan-300/25',
              'from-pink-300/25 to-purple-300/25',
              'from-cyan-300/25 to-blue-300/25',
              'from-indigo-300/25 to-purple-300/25',
              'from-emerald-300/25 to-cyan-300/25',
              'from-violet-300/25 to-fuchsia-300/25',
              'from-rose-300/25 to-pink-300/25'
            ];
        
        const randomColor = colors[i % colors.length];
        orb.className += ` bg-gradient-to-br ${randomColor}`;
        
        container.appendChild(orb);

        // Complex movement pattern
        const tl = gsap.timeline({ repeat: -1 });
        
        tl.to(orb, {
          x: `+=${Math.random() * 600 - 300}`,
          y: `+=${Math.random() * 600 - 300}`,
          scale: 0.7 + Math.random() * 0.6,
          rotation: Math.random() * 360,
          duration: 15 + Math.random() * 20,
          ease: 'sine.inOut'
        })
        .to(orb, {
          x: `+=${Math.random() * 600 - 300}`,
          y: `+=${Math.random() * 600 - 300}`,
          scale: 0.5 + Math.random() * 1,
          rotation: Math.random() * 360,
          duration: 20 + Math.random() * 15,
          ease: 'sine.inOut'
        })
        .to(orb, {
          x: `+=${Math.random() * 600 - 300}`,
          y: `+=${Math.random() * 600 - 300}`,
          scale: 0.8 + Math.random() * 0.7,
          rotation: Math.random() * 360,
          duration: 12 + Math.random() * 18,
          ease: 'sine.inOut'
        });

        // Morphing animation
        gsap.to(orb, {
          borderRadius: `${20 + Math.random() * 50}% ${80 - Math.random() * 50}% ${30 + Math.random() * 50}% ${70 - Math.random() * 50}%`,
          duration: 8 + Math.random() * 12,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: Math.random() * 5
        });

        // Opacity pulsing
        gsap.to(orb, {
          opacity: 0.2 + Math.random() * 0.5,
          duration: 6 + Math.random() * 8,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: Math.random() * 4
        });
      }

      // Medium floating shapes
      const mediumShapeCount = 15;
      for (let i = 0; i < mediumShapeCount; i++) {
        const shape = document.createElement('div');
        const size = 80 + Math.random() * 150;
        const shapeType = Math.random();
        
        shape.className = 'floating-shape-medium absolute pointer-events-none';
        shape.style.width = `${size}px`;
        shape.style.height = `${size}px`;
        shape.style.left = `${Math.random() * 110 - 5}%`;
        shape.style.top = `${Math.random() * 110 - 5}%`;
        shape.style.zIndex = '2';
        
        // Different shape types
        if (shapeType < 0.3) {
          // Circle
          shape.style.borderRadius = '50%';
          shape.className += ' blur-2xl';
        } else if (shapeType < 0.6) {
          // Square with rounded corners
          shape.style.borderRadius = '20%';
          shape.className += ' blur-xl';
        } else {
          // Diamond
          shape.style.borderRadius = '0%';
          shape.style.transform = 'rotate(45deg)';
          shape.className += ' blur-2xl';
        }
        
        const mediumColors = theme === 'dark' 
          ? [
              'bg-gradient-to-br from-cyan-400/20 to-transparent',
              'bg-gradient-to-br from-purple-400/20 to-transparent',
              'bg-gradient-to-br from-pink-400/20 to-transparent',
              'bg-gradient-to-br from-blue-400/20 to-transparent',
              'bg-gradient-to-br from-emerald-400/20 to-transparent'
            ]
          : [
              'bg-gradient-to-br from-purple-400/30 to-transparent',
              'bg-gradient-to-br from-blue-400/30 to-transparent',
              'bg-gradient-to-br from-pink-400/30 to-transparent',
              'bg-gradient-to-br from-cyan-400/30 to-transparent',
              'bg-gradient-to-br from-emerald-400/30 to-transparent'
            ];
        
        const randomMediumColor = mediumColors[Math.floor(Math.random() * mediumColors.length)];
        shape.className += ` ${randomMediumColor}`;
        
        container.appendChild(shape);

        // Floating animation
        gsap.to(shape, {
          y: `+=${Math.random() * 400 - 200}`,
          x: `+=${Math.random() * 400 - 200}`,
          rotation: Math.random() * 720,
          scale: 0.6 + Math.random() * 0.8,
          duration: 20 + Math.random() * 25,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: Math.random() * 5
        });

        // Additional rotation
        gsap.to(shape, {
          rotation: `+=${360 + Math.random() * 360}`,
          duration: 30 + Math.random() * 20,
          repeat: -1,
          ease: 'none'
        });
      }

      // Small particles
      const particleCount = 25;
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        const size = 4 + Math.random() * 12;
        
        particle.className = 'floating-particle absolute rounded-full pointer-events-none';
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.zIndex = '3';
        
        const particleColors = theme === 'dark' 
          ? ['bg-cyan-400', 'bg-purple-400', 'bg-pink-400', 'bg-blue-400', 'bg-emerald-400']
          : ['bg-purple-500', 'bg-blue-500', 'bg-pink-500', 'bg-cyan-500', 'bg-emerald-500'];
        
        const randomParticleColor = particleColors[Math.floor(Math.random() * particleColors.length)];
        particle.className += ` ${randomParticleColor}`;
        
        container.appendChild(particle);

        // Twinkling effect
        gsap.to(particle, {
          opacity: Math.random() * 0.8 + 0.2,
          scale: 0.5 + Math.random() * 1.5,
          duration: 2 + Math.random() * 3,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: Math.random() * 2
        });

        // Floating movement
        gsap.to(particle, {
          y: `+=${Math.random() * 300 - 150}`,
          x: `+=${Math.random() * 300 - 150}`,
          duration: 15 + Math.random() * 20,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: Math.random() * 3
        });
      }

      // Geometric lines
      const lineCount = 8;
      for (let i = 0; i < lineCount; i++) {
        const line = document.createElement('div');
        const length = 100 + Math.random() * 200;
        const thickness = 1 + Math.random() * 3;
        
        line.className = 'floating-line absolute pointer-events-none';
        line.style.width = `${length}px`;
        line.style.height = `${thickness}px`;
        line.style.left = `${Math.random() * 100}%`;
        line.style.top = `${Math.random() * 100}%`;
        line.style.zIndex = '2';
        line.style.transformOrigin = 'center';
        
        const lineColors = theme === 'dark' 
          ? ['bg-cyan-400/30', 'bg-purple-400/30', 'bg-pink-400/30']
          : ['bg-purple-500/40', 'bg-blue-500/40', 'bg-pink-500/40'];
        
        const randomLineColor = lineColors[Math.floor(Math.random() * lineColors.length)];
        line.className += ` ${randomLineColor}`;
        
        container.appendChild(line);

        // Rotating and moving
        gsap.to(line, {
          rotation: Math.random() * 720,
          x: `+=${Math.random() * 400 - 200}`,
          y: `+=${Math.random() * 400 - 200}`,
          duration: 25 + Math.random() * 15,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: Math.random() * 3
        });

        // Opacity animation
        gsap.to(line, {
          opacity: 0.1 + Math.random() * 0.4,
          duration: 4 + Math.random() * 6,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut'
        });
      }
    };

    createFloatingElements();

    // Enhanced mouse interaction
    const handleMouseMove = (e: MouseEvent) => {
      // Throttle mouse events for better performance
      if (!container.dataset.canUpdate) {
        container.dataset.canUpdate = 'true';
        requestAnimationFrame(() => {
          container.dataset.canUpdate = '';
        });
        return;
      }
      
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      // Get all floating elements
      const allElements = container.querySelectorAll('.floating-orb-large, .floating-shape-medium, .floating-particle');
      
      allElements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        const elementCenterX = rect.left + rect.width / 2;
        const elementCenterY = rect.top + rect.height / 2;
        
        const distance = Math.sqrt(
          Math.pow(clientX - elementCenterX, 2) + Math.pow(clientY - elementCenterY, 2)
        );
        
        if (distance < 300) {
          const force = (300 - distance) / 300;
          const angle = Math.atan2(elementCenterY - clientY, elementCenterX - clientX);
          
          gsap.to(element, {
            x: `+=${Math.cos(angle) * force * 30}`,
            y: `+=${Math.sin(angle) * force * 30}`,
            scale: 1 + force * 0.2,
            duration: 0.5,
            ease: 'power2.out'
          });
        }
      });

      // Parallax effect for orbs based on mouse position
      const parallaxElements = container.querySelectorAll('.floating-orb-large');
      parallaxElements.forEach((element, index) => {
        const speed = 0.02 + (index * 0.01);
        const x = (clientX - centerX) * speed;
        const y = (clientY - centerY) * speed;
        
        gsap.to(element, {
          x: `+=${x}`,
          y: `+=${y}`,
          duration: 2,
          ease: 'power1.out'
        });
      });
    };

    // Scroll-based animation
    const handleScroll = () => {
      // Throttle scroll events
      if (!container.dataset.canScroll) {
        container.dataset.canScroll = 'true';
        requestAnimationFrame(() => {
          container.dataset.canScroll = '';
        });
        return;
      }
      
      const scrollY = window.scrollY;
      const scrollProgress = scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      
      // Move elements based on scroll
      const scrollElements = container.querySelectorAll('.floating-shape-medium');
      scrollElements.forEach((element, index) => {
        const speed = 0.5 + (index % 3) * 0.2;
        gsap.to(element, {
          y: `+=${scrollY * speed * 0.1}`,
          rotation: `+=${scrollProgress * 180}`,
          duration: 0.5,
          ease: 'power1.out'
        });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      gsap.killTweensOf(container.children);
    };
  }, [theme]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ 
        mixBlendMode: theme === 'dark' ? 'screen' : 'multiply',
        zIndex: 0
      }}
    />
  );
};

export default FloatingOrbs;
