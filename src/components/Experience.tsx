import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

gsap.registerPlugin(ScrollTrigger);

const Experience: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  const experiences = [
    {
      id: 0,
      title: 'AI & Machine Learning Intern',
      company: 'Microsoft & Edunet Foundation',
      location: 'Remote',
      duration: '13 May to 13 June 2025',
      type: 'Internship',
      description: 'Completed a virtual internship focused on real-world AI and machine learning applications using Microsoft Azure tools and services. Collaborated with mentors to build scalable cloud-based ML solutions.',
      achievements: [
        'Built and deployed ML models using Azure Machine Learning Studio',
        'Worked with Azure Cognitive Services for image and text analysis',
        'Completed hands-on projects involving classification and prediction tasks',
        'Learned best practices for scalable AI deployment on cloud platforms'
      ],
      technologies: ['Azure ML Studio', 'Python', 'Scikit-learn', 'Pandas','API Integration' , 'Azure Cognitive Services'],
      link:"https://drive.google.com/file/d/1lUcFJkcWGixEh-j84WJitrm5m1fLmVcK/view?usp=sharing"
        },
    {
      id: 2,
      title: 'Machine Learning Intern ',
      company: 'LinuxWorld Informatics Pvt. Ltd.',
      location: 'Jaipur, India',
      duration: 'May 2025 - Present',
      type: 'Internship',
      description: 'Working on real-world AI and machine learning projects under industry mentorship. Gaining hands-on experience with model development, deployment, and integration into scalable systems.',
      achievements: [
        'Built ML models for classification, forecasting, and recommendation systems',
        'Worked on real-time data preprocessing and feature engineering pipelines',
        'Integrated trained models into web-based applications using Flask APIs',
        'Collaborated in a team environment using Agile practices and Git'
      ],
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Machine Learning' ,'Web scraping' , 'Opencv','Cvzone', 'Git', 'Jupyter'],
     certificate: {
            label: 'Under process',
            url: '',
            target: '_blank'
          } // Add a certificate or company reference link if available
            }    
  ];

  useEffect(() => {
    const timeline = timelineRef.current;
    if (!timeline) return;

    const items = timeline.querySelectorAll('.timeline-item');
    const line = timeline.querySelector('.timeline-line');

    // Animate timeline line
    gsap.fromTo(line, 
      { height: '0%' },
      {
        height: '100%',
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: timeline,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: 1
        }
      }
    );

    // Animate timeline items
    items.forEach((item, index) => {
      const isEven = index % 2 === 0;
      
      gsap.fromTo(item,
        {
          x: isEven ? -100 : 100,
          opacity: 0,
          scale: 0.8
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Floating animation
      gsap.to(item, {
        y: -10,
        duration: 3 + Math.random() * 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: index * 0.5
      });

      // Hover effects
      const card = item.querySelector('.experience-card');
      const dot = item.querySelector('.timeline-dot');

      item.addEventListener('mouseenter', () => {
        gsap.to(card, {
          scale: 1.05,
          rotationY: isEven ? 5 : -5,
          z: 50,
          duration: 0.4,
          ease: 'power2.out'
        });

        gsap.to(dot, {
          scale: 1.5,
          boxShadow: `0 0 20px ${theme === 'dark' ? '#06b6d4' : '#8b5cf6'}`,
          duration: 0.3
        });
      });

      item.addEventListener('mouseleave', () => {
        gsap.to(card, {
          scale: 1,
          rotationY: 0,
          z: 0,
          duration: 0.4,
          ease: 'power2.out'
        });

        gsap.to(dot, {
          scale: 1,
          boxShadow: 'none',
          duration: 0.3
        });
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [theme]);

  return (
    <section
      id="experience"
      className={`py-20 relative overflow-hidden ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-white'
      }`}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 rounded-full ${
              theme === 'dark' ? 'bg-cyan-400' : 'bg-purple-400'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `twinkle ${3 + Math.random() * 4}s ease-in-out infinite`,
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
            EXPERIENCE
          </h2>
          <p
            className={`text-xl max-w-3xl mx-auto ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            My professional journey through the world of technology
          </p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative max-w-6xl mx-auto">
          {/* Timeline line */}
          <div
            className={`timeline-line absolute left-1/2 transform -translate-x-1/2 w-1 ${
              theme === 'dark' 
                ? 'bg-gradient-to-b from-cyan-400 to-purple-400' 
                : 'bg-gradient-to-b from-purple-500 to-blue-500'
            }`}
            style={{ height: '0%', top: '0' }}
          />

          {/* Timeline items */}
          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={exp.id}
                className={`timeline-item relative flex items-center mb-16 ${
                  isEven ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div
                  className={`timeline-dot absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 z-10 ${
                    theme === 'dark'
                      ? 'bg-gray-900 border-cyan-400'
                      : 'bg-white border-purple-500'
                  }`}
                  style={{
                    boxShadow: theme === 'dark' 
                      ? '0 0 0 4px rgba(6, 182, 212, 0.2)' 
                      : '0 0 0 4px rgba(139, 92, 246, 0.2)'
                  }}
                />

                {/* Experience card */}
                <div className={`experience-card w-5/12 ${isEven ? 'mr-auto pr-8' : 'ml-auto pl-8'}`}>
                  <div
                    className={`p-8 rounded-2xl backdrop-blur-sm border transition-all duration-500 ${
                      theme === 'dark'
                        ? 'bg-gray-800/50 border-gray-700'
                        : 'bg-white/50 border-gray-200'
                    }`}
                    style={{
                      transformStyle: 'preserve-3d',
                      boxShadow: theme === 'dark'
                        ? '0 20px 40px rgba(0, 0, 0, 0.3)'
                        : '0 20px 40px rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className={`p-3 rounded-lg ${
                          theme === 'dark'
                            ? 'bg-gradient-to-r from-cyan-500 to-purple-500'
                            : 'bg-gradient-to-r from-purple-500 to-blue-500'
                        }`}>
                          <Briefcase size={24} className="text-white" />
                        </div>
                        <div>
                          <h3 className={`text-xl font-bold ${
                            theme === 'dark' ? 'text-white' : 'text-gray-900'
                          }`}>
                            {exp.title}
                          </h3>
                          <p className={`text-lg ${
                            theme === 'dark' ? 'text-cyan-400' : 'text-purple-600'
                          }`}>
                            {exp.company}
                          </p>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        theme === 'dark'
                          ? 'bg-gray-700 text-gray-300'
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {exp.type}
                      </span>
                    </div>

                    {/* Meta info */}
                    <div className="flex items-center space-x-4 mb-4 text-sm">
                      <div className={`flex items-center space-x-1 ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        <Calendar size={16} />
                        <span>{exp.duration}</span>
                      </div>
                      <div className={`flex items-center space-x-1 ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className={`mb-4 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className={`font-semibold mb-2 ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>
                        Key Achievements:
                      </h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className={`flex items-start space-x-2 text-sm ${
                            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                          }`}>
                            <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                              theme === 'dark' ? 'bg-cyan-400' : 'bg-purple-500'
                            }`} />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-4">
                      <h4 className={`font-semibold mb-2 ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>
                        Technologies:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className={`px-3 py-1 text-xs rounded-full ${
                              theme === 'dark'
                                ? 'bg-gray-700 text-gray-300'
                                : 'bg-gray-100 text-gray-600'
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Link */}
                    {exp.link && (
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center space-x-2 text-sm transition-colors duration-200 ${
                          theme === 'dark'
                            ? 'text-cyan-400 hover:text-cyan-300'
                            : 'text-purple-600 hover:text-purple-500'
                        }`}
                      >
                        <span>View Details</span>
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Experience stats */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Years Experience', value: '3+' },
              { label: 'Projects Completed', value: '25+' },
              { label: 'Technologies Mastered', value: '15+' },
              { label: 'Happy Clients', value: '20+' }
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
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }
      `}</style>
    </section>
  );
};

export default Experience;
