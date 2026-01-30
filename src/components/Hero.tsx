import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ChevronDown } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const typewriterRef = useRef<HTMLHeadingElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const typewriter = typewriterRef.current;
    const canvas = canvasRef.current;

    if (!typewriter || !canvas) return;

    // Advanced particle system
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: any[] = [];
    const particleCount = 150;

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      life: number;
      maxLife: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.size = Math.random() * 3 + 1;
        this.color = `hsl(${Math.random() * 60 + 180}, 70%, 60%)`;
        this.life = 0;
        this.maxLife = Math.random() * 200 + 100;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life++;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        if (this.life > this.maxLife) {
          this.life = 0;
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
        }
      }

      draw() {
        const alpha = 1 - this.life / this.maxLife;
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();

        // Add glow effect
        ctx.shadowBlur = 20;
        ctx.shadowColor = this.color;
        ctx.fill();
        ctx.restore();
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      // Draw connections
      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.save();
            ctx.globalAlpha = ((100 - distance) / 100) * 0.3;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = '#06b6d4';
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.restore();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    // Advanced typewriter effect with morphing
    const text = "Hi, I'm Jatin Khandal";
    typewriter.textContent = '';

    const tl = gsap.timeline();

    // Character-by-character animation with 3D effects
    text.split('').forEach((char, index) => {
      const span = document.createElement('span');
      span.textContent = char === ' ' ? '\u00A0' : char;
      span.style.display = 'inline-block';
      span.style.opacity = '0';
      span.style.transform = 'rotateY(90deg) translateZ(-100px)';
      typewriter.appendChild(span);

      tl.to(
        span,
        {
          opacity: 1,
          rotateY: 0,
          z: 0,
          duration: 0.1,
          ease: 'back.out(1.7)',
        },
        index * 0.05
      );
    });

    // Subtitle and CTA animations
    tl.to('.hero-subtitle', {
      opacity: 1,
      y: 0,
      rotateX: 0,
      duration: 1,
      ease: 'elastic.out(1, 0.5)',
    }).to(
      '.hero-cta',
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: 'back.out(1.7)',
      },
      '-=0.5'
    );

    // Floating animation for the entire hero content
    gsap.to('.hero-content', {
      y: -10,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    return () => {
      tl.kill();
    };
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      const targetPosition = aboutSection.offsetTop - 80;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 1000;
      let start: number | null = null;

      const step = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const percentage = Math.min(progress / duration, 1);
        
        const easeInOutCubic = (t: number) => 
          t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
        
        const currentPosition = startPosition + distance * easeInOutCubic(percentage);
        window.scrollTo(0, currentPosition);
        
        if (progress < duration) {
          requestAnimationFrame(step);
        }
      };
      
      requestAnimationFrame(step);
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
        theme === 'dark'
          ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900'
          : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50'
      }`}
    >
      {/* Advanced particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ mixBlendMode: theme === 'dark' ? 'screen' : 'multiply' }}
      />

      {/* Morphing background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full opacity-20 blur-3xl ${
              theme === 'dark'
                ? 'bg-gradient-to-r from-cyan-500 to-purple-500'
                : 'bg-gradient-to-r from-purple-300 to-blue-300'
            }`}
            style={{
              width: `${200 + Math.random() * 300}px`,
              height: `${200 + Math.random() * 300}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `morph ${
                3 + Math.random() * 4
              }s ease-in-out infinite alternate`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="hero-content relative z-10 text-center px-4 sm:px-6 lg:px-8 perspective-1000">
        <h1
          ref={typewriterRef}
          className={`text-6xl md:text-8xl lg:text-9xl font-bold mb-6 ${
            theme === 'dark'
              ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400'
              : 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600'
          }`}
          style={{
            fontFamily: 'Orbitron, monospace',
            textShadow: '0 0 30px rgba(6, 182, 212, 0.5)',
            transformStyle: 'preserve-3d',
          }}
        />

        <p
          className={`hero-subtitle text-2xl md:text-3xl mb-8 opacity-0 transform translate-y-8 rotateX-45 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}
          style={{ transformStyle: 'preserve-3d' }}
        >
          B.Tech AI & Data Science Student | ML/AI Developer
        </p>

        <div className="hero-cta opacity-0 transform translate-y-8 scale-75">
          <button
            onClick={scrollToAbout}
            className={`group relative px-12 py-6 rounded-full font-semibold text-xl transition-all duration-500 transform hover:scale-110 ${
              theme === 'dark'
                ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                : 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
            }`}
            style={{
              boxShadow:
                '0 10px 30px rgba(6, 182, 212, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
              filter: 'drop-shadow(0 0 20px rgba(139, 92, 246, 0.5))',
            }}
          >
            <span className="relative z-10">Explore My Universe</span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
          </button>
        </div>
      </div>

      {/* Advanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2">
          <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-bounce" />
          </div>
          <ChevronDown
            size={24}
            className={`${
              theme === 'dark' ? 'text-cyan-400' : 'text-purple-600'
            } animate-bounce`}
            style={{ animationDelay: '0.5s' }}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes morph {
          0% { transform: scale(1) rotate(0deg); border-radius: 50%; }
          50% { transform: scale(1.2) rotate(180deg); border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
          100% { transform: scale(0.8) rotate(360deg); border-radius: 50%; }
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .rotateX-45 {
          transform: rotateX(45deg);
        }
      `}</style>
    </section>
  );
};

export default Hero;
