import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTheme } from '../contexts/ThemeContext';

gsap.registerPlugin(ScrollTrigger);

const Technologies: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  const technologies = [
    {
      name: 'Python',
      icon: '🐍',
      color: '#3776AB',
      description: 'Fluent',
    },
    {
      name: 'Machine Learning',
      icon: '🤖',
      color: '#FF6B6B',
      description: 'Scikit-learn',
    },
    {
      name: 'Computer Vision',
      icon: '👁️',
      color: '#4ECDC4',
      description: 'OpenCV, CvZone',
    },
    {
      name: 'Data Analytics',
      icon: '📊',
      color: '#45B7D1',
      description: 'Pandas, NumPy',
    },
    {
      name: 'Deep Learning',
      icon: '🧠',
      color: '#96CEB4',
      description: 'ANN, CNN',
    },
    {
      name: 'Cloud Platforms',
      icon: '☁️',
      color: '#FFEAA7',
      description: 'Azure, GCP',
    },
    {
      name: 'SQL & R',
      icon: '🗄️',
      color: '#336791',
      description: 'Database & Stats',
    },
    {
      name: 'APIs',
      icon: '🔗',
      color: '#98D8C8',
      description: 'RESTful APIs',
    },
  ];

  useEffect(() => {
    const cards = containerRef.current?.querySelectorAll('.tech-card');

    if (cards) {
      // Initial setup
      gsap.set(cards, {
        rotationY: 0,
        transformStyle: 'preserve-3d',
        scale: 0,
        opacity: 0,
      });

      // Entrance animation
      gsap.to(cards, {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      });

      cards.forEach((card, index) => {
        const icon = card.querySelector('.tech-icon');
        const name = card.querySelector('.tech-name');
        const description = card.querySelector('.tech-description');

        // Floating animation
        gsap.to(card, {
          y: -15,
          duration: 2 + Math.random() * 2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: index * 0.2,
        });

        // Hover effects
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            rotationY: 15,
            rotationX: 10,
            z: 100,
            scale: 1.1,
            duration: 0.4,
            ease: 'power2.out',
          });

          gsap.to(icon, {
            scale: 1.3,
            rotation: 360,
            duration: 0.6,
            ease: 'back.out(1.7)',
          });

          gsap.to([name, description], {
            color: technologies[index].color,
            duration: 0.3,
            ease: 'power2.out',
          });

          // Add glow effect
          gsap.to(card, {
            boxShadow: `0 20px 40px ${technologies[index].color}40`,
            duration: 0.3,
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            rotationY: 0,
            rotationX: 0,
            z: 0,
            scale: 1,
            duration: 0.4,
            ease: 'power2.out',
          });

          gsap.to(icon, {
            scale: 1,
            rotation: 0,
            duration: 0.4,
            ease: 'power2.out',
          });

          gsap.to([name, description], {
            color: theme === 'dark' ? '#ffffff' : '#1f2937',
            duration: 0.3,
            ease: 'power2.out',
          });

          gsap.to(card, {
            boxShadow:
              theme === 'dark'
                ? '0 8px 32px rgba(0, 0, 0, 0.3)'
                : '0 8px 32px rgba(0, 0, 0, 0.1)',
            duration: 0.3,
          });
        });

        // Click animation
        card.addEventListener('click', () => {
          gsap.to(card, {
            scale: 0.95,
            duration: 0.1,
            yoyo: true,
            repeat: 1,
            ease: 'power2.inOut',
          });
        });
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [theme]);

  return (
    <section
      id="technologies"
      className={`py-20 relative overflow-hidden ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-white'
      }`}
    >
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, ${
              theme === 'dark' ? '#06b6d4' : '#8b5cf6'
            } 2px, transparent 2px)`,
            backgroundSize: '50px 50px',
            animation: 'pattern-move 20s linear infinite',
          }}
        />
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute opacity-10 ${
              theme === 'dark' ? 'text-cyan-400' : 'text-purple-400'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${20 + Math.random() * 40}px`,
              animation: `float-rotate ${
                5 + Math.random() * 5
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          >
            {['◆', '▲', '●', '■', '◇', '△', '○', '□'][i]}
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2
            className={`text-5xl md:text-6xl font-bold mb-6 ${
              theme === 'dark'
                ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400'
                : 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600'
            }`}
            style={{
              fontFamily: 'Orbitron, monospace',
              textShadow: '0 0 30px rgba(6, 182, 212, 0.3)',
            }}
            data-aos="fade-up"
          >
            TECH ARSENAL
          </h2>
          <p
            className={`text-xl max-w-3xl mx-auto ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Cutting-edge technologies powering my digital creations
          </p>
        </div>

        <div
          ref={containerRef}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6"
        >
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className={`tech-card group relative p-6 rounded-2xl text-center transition-all duration-500 cursor-pointer ${
                theme === 'dark'
                  ? 'bg-gray-800/50 border border-gray-700 backdrop-blur-sm hover:border-cyan-400'
                  : 'bg-white/50 border border-gray-200 backdrop-blur-sm hover:border-purple-400'
              }`}
              style={{
                transformStyle: 'preserve-3d',
                boxShadow:
                  theme === 'dark'
                    ? '0 8px 32px rgba(0, 0, 0, 0.3)'
                    : '0 8px 32px rgba(0, 0, 0, 0.1)',
              }}
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              {/* Holographic overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Tech icon with animation */}
              <div className="tech-icon text-5xl mb-4 transition-all duration-500">
                {tech.icon}
              </div>

              {/* Tech name */}
              <h3
                className={`tech-name text-sm font-bold mb-2 transition-colors duration-300 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}
              >
                {tech.name}
              </h3>

              {/* Tech description */}
              <p
                className={`tech-description text-xs transition-colors duration-300 ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                {tech.description}
              </p>

              {/* Animated border */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(45deg, ${tech.color}20, transparent, ${tech.color}20)`,
                  backgroundSize: '200% 200%',
                  animation: 'gradient-shift 3s ease infinite',
                }}
              />

              {/* Corner accent */}
              <div
                className={`absolute top-2 right-2 w-3 h-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500`}
                style={{ backgroundColor: tech.color }}
              />
            </div>
          ))}
        </div>

        {/* Tech stats */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Languages', value: '10+' },
              { label: 'Frameworks', value: '15+' },
              { label: 'Tools', value: '25+' },
              { label: 'Years Exp', value: '' },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className={`p-6 rounded-xl ${
                  theme === 'dark' ? 'bg-gray-800/30' : 'bg-gray-50/50'
                }`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div
                  className={`text-3xl font-bold mb-2 ${
                    theme === 'dark'
                      ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400'
                      : 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600'
                  }`}
                >
                  {stat.value}
                </div>
                <div
                  className={`text-sm ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pattern-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        @keyframes float-rotate {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </section>
  );
};

export default Technologies;
