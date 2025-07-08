import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTheme } from '../contexts/ThemeContext';

gsap.registerPlugin(ScrollTrigger);

const Skills: React.FC = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  const skills = [
    { name: 'PYTHON', level: 95, color: '#F7DF1E' },
    { name: 'MACHINE LEARNING', level: 90, color: '#61DAFB' },
    { name: 'C', level: 60, color: '#3178C6' },
    { name: 'SQL', level: 60, color: '#339933' },
    { name: 'GOOGLE CLOUD', level: 60, color: '#3776AB' },
    { name: 'HTML/CSS', level: 80, color: '#3776AB' },
    { name: 'WEB SCRAPING', level: 82, color: '#3776AB' },
  ];

  useEffect(() => {
    const skillBars = skillsRef.current?.querySelectorAll('.skill-item');

    if (skillBars) {
      skillBars.forEach((skillItem, index) => {
        const progressBar = skillItem.querySelector('.progress-bar');
        const progressText = skillItem.querySelector('.progress-text');
        const skillIcon = skillItem.querySelector('.skill-icon');
        const skill = skills[index];

        // Set initial states
        gsap.set(progressBar, { width: '0%', opacity: 0 });
        gsap.set(progressText, { opacity: 0, scale: 0 });
        gsap.set(skillIcon, { rotation: -180, scale: 0 });

        // Create timeline for each skill
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: skillItem,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        });

        // Animate skill icon
        tl.to(skillIcon, {
          rotation: 0,
          scale: 1,
          duration: 0.8,
          ease: 'elastic.out(1, 0.5)',
        })
          // Animate progress bar with morphing effect
          .to(
            progressBar,
            {
              width: `${skill.level}%`,
              opacity: 1,
              duration: 1.5,
              ease: 'power3.out',
              onUpdate: function () {
                const progress = this.progress();
                const currentValue = Math.round(skill.level * progress);
                if (progressText) {
                  progressText.textContent = `${currentValue}%`;
                }
              },
            },
            '-=0.3'
          )
          // Animate percentage text
          .to(
            progressText,
            {
              opacity: 1,
              scale: 1,
              duration: 0.5,
              ease: 'back.out(1.7)',
            },
            '-=0.5'
          )
          // Add floating animation
          .to(skillItem, {
            y: -5,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: index * 0.2,
          });

        // Add hover effects
        skillItem.addEventListener('mouseenter', () => {
          gsap.to(skillItem, {
            scale: 1.05,
            rotationY: 5,
            z: 50,
            duration: 0.3,
            ease: 'power2.out',
          });

          gsap.to(progressBar, {
            boxShadow: `0 0 20px ${skill.color}`,
            duration: 0.3,
          });
        });

        skillItem.addEventListener('mouseleave', () => {
          gsap.to(skillItem, {
            scale: 1,
            rotationY: 0,
            z: 0,
            duration: 0.3,
            ease: 'power2.out',
          });

          gsap.to(progressBar, {
            boxShadow: 'none',
            duration: 0.3,
          });
        });
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      id="skills"
      className={`py-20 relative overflow-hidden ${
        theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
      }`}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 rounded-full ${
              theme === 'dark' ? 'bg-cyan-400' : 'bg-purple-400'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
              opacity: 0.3,
            }}
          />
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
            SKILLS MATRIX
          </h2>
          <p
            className={`text-xl max-w-3xl mx-auto ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Technologies I've mastered in my journey through the digital realm
          </p>
        </div>

        <div ref={skillsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`skill-item p-8 rounded-2xl backdrop-blur-sm border transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-gray-900/50 border-gray-700'
                  : 'bg-white/50 border-gray-200'
              }`}
              style={{
                transformStyle: 'preserve-3d',
                boxShadow:
                  theme === 'dark'
                    ? '0 8px 32px rgba(0, 0, 0, 0.3)'
                    : '0 8px 32px rgba(0, 0, 0, 0.1)',
              }}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div
                    className="skill-icon w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                    style={{ backgroundColor: skill.color }}
                  >
                    {skill.name.charAt(0)}
                  </div>
                  <span
                    className={`text-xl font-semibold ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {skill.name}
                  </span>
                </div>
                <span
                  className={`progress-text text-lg font-bold ${
                    theme === 'dark' ? 'text-cyan-400' : 'text-purple-600'
                  }`}
                >
                  0%
                </span>
              </div>

              <div
                className={`relative w-full h-4 rounded-full overflow-hidden ${
                  theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
                }`}
              >
                <div
                  className="progress-bar absolute top-0 left-0 h-full rounded-full transition-all duration-300"
                  style={{
                    background: `linear-gradient(90deg, ${skill.color}, ${skill.color}aa)`,
                    width: '0%',
                  }}
                />

                {/* Animated particles inside progress bar */}
                <div className="absolute inset-0 overflow-hidden">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-white rounded-full opacity-60"
                      style={{
                        left: `${20 * i}%`,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        animation: `particle-flow 2s linear infinite`,
                        animationDelay: `${i * 0.4}s`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes particle-flow {
          0% { transform: translateX(-100%) translateY(-50%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(500%) translateY(-50%); opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default Skills;
