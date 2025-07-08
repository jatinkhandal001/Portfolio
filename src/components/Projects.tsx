import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, X, Zap, Star } from 'lucide-react';
import { gsap } from 'gsap';
import { useTheme } from '../contexts/ThemeContext';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  const projects = [
    {
      id: 1,
      title: 'Startup Hub',
      description:
        'A smart platform for entrepreneurs to Search startups , Check Startup Growth , Startup Seo, Startup Tool Recommander , Startup Idea Validator, Ai Assistent for Startup , discover funding events — all powered by AI.',
      image:
        'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: [
        'Python',
        'MachineLearning',
        'Pandas',
        'Gradio',
        'Matplotlib',
        'Web Scrapping',
      ],
      github:
        'https://github.com/jatinkhandal001/Startup_hub/tree/6c1292865357c2b872cdbd5836f25af0a5300be0/Startup_hub',
      live: 'https://startup-hub.onrender.com/',
      fullDescription:
        'Startup Hub is an AI-driven platform that empowers entrepreneurs with intelligent tools to validate startup ideas, monitor growth, analyze SEO performance, and discover essential tools and funding opportunities. With built-in machine learning models and real-time data scraping, it delivers actionable insights and automates key startup research processes. Designed to be a one-stop destination for founders and early-stage innovators.',
      features: [
        'Startup Idea Validator using ML scoring',
        'Real-time Startup Growth Analyzer',
        'SEO Health Checker & Traffic Estimator',
        'AI Assistant for Startup Guidance',
        'Tool Recommender for productivity and growth',
        'Startup Event and Funding Discovery Engine',
        'Live web scraping and analytics dashboard',
        'Modern, user-friendly interface built with Gradio',
      ],
      stats: { stars: 234, forks: 45, commits: 892 },
    },
    {
      id: 2,
      title: 'Virtual Mouse',
      description:
        'An AI-based Virtual Mouse using real-time hand gesture recognition powered by OpenCV and CVZone. Enables contactless cursor movement, click, and drag using hand gestures — enhancing accessibility and human-computer interaction.',
      image:
        'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'OpenCV', 'CVZone', 'MediaPipe'],
      github:
        'https://github.com/jatinkhandal001/Virtual-mouse/blob/f9a305831430e6b48ce24e741b005d12fc506ee5/virtual_mouse.py',
      fullDescription:
        'This project leverages computer vision to emulate mouse functions using hand gestures. It uses OpenCV for real-time image processing, MediaPipe for hand tracking, and CVZone for seamless gesture interpretation. It allows users to move the cursor, perform clicks, and drag items—all without touching the mouse. Ideal for accessibility use cases and touchless control environments.',
      features: [
        'Real-time hand tracking using MediaPipe',
        'Gesture-based mouse movement',
        'Click and drag with custom hand signs',
        'Contactless HCI (Human-Computer Interaction)',
        'Runs on any webcam without special hardware',
        'Accessible interface for people with motor disabilities',
      ],
      stats: { stars: 189, forks: 67, commits: 1205 },
    },
    {
      id: 3,
      title: 'Carrierverse',
      description:
        'Learn coding and earn real-world rewards like coins, T-shirts, and swags on a gamified learning platform.',
      image:
        'https://images.pexels.com/photos/8369648/pexels-photo-8369648.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: [
        'React',
        'Python',
        'HTML',
        'CSS',
        'JavaScript',
        'Node.js',
        'Express.js',
        'MongoDB',
        'Git',
      ],
      fullDescription:
        'Carrierverse is a gamified coding education platform where learners complete programming challenges and earn exciting rewards like coins, T-shirts, and swags. The platform tracks progress, awards badges, and ranks users on a leaderboard to motivate consistent learning. Built with modern web technologies and optional blockchain components for transparency, Carrierverse turns learning into a rewarding experience.',
      features: [
        'Gamified coding challenges with score-based rewards',
        'Progress tracking and badge achievements',
        'Leaderboard with top performers winning T-shirts & swags',
        'Coin-based reward system for redeemable prizes',
        'React-based responsive and interactive UI',
        'Wallet/account system for tracking progress and rewards',
      ],
      stats: { stars: 156, forks: 23, commits: 567 },
    },
  ];

  useEffect(() => {
    const projectCards = projectsRef.current?.querySelectorAll('.project-card');

    if (projectCards) {
      projectCards.forEach((card, index) => {
        // Initial animation
        gsap.fromTo(
          card,
          {
            y: 100,
            opacity: 0,
            rotationX: -45,
            scale: 0.8,
          },
          {
            y: 0,
            opacity: 1,
            rotationX: 0,
            scale: 1,
            duration: 0.8,
            delay: index * 0.2,
            ease: 'back.out(1.7)',
          }
        );

        // Floating animation
        gsap.to(card, {
          y: -10,
          duration: 3 + Math.random() * 2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: index * 0.5,
        });
      });
    }
  }, []);

  const handleProjectHover = (projectId: number | null) => {
    setHoveredProject(projectId);

    if (projectId !== null) {
      const card = document.querySelector(`[data-project-id="${projectId}"]`);
      if (card) {
        gsap.to(card, {
          scale: 1.05,
          rotationY: 10,
          z: 100,
          duration: 0.4,
          ease: 'power2.out',
        });

        // Animate tech badges
        const badges = card.querySelectorAll('.tech-badge');
        gsap.to(badges, {
          scale: 1.1,
          rotation: 5,
          duration: 0.3,
          stagger: 0.05,
          ease: 'back.out(1.7)',
        });
      }
    } else {
      const cards = document.querySelectorAll('.project-card');
      gsap.to(cards, {
        scale: 1,
        rotationY: 0,
        z: 0,
        duration: 0.4,
        ease: 'power2.out',
      });

      const badges = document.querySelectorAll('.tech-badge');
      gsap.to(badges, {
        scale: 1,
        rotation: 0,
        duration: 0.3,
        ease: 'power2.out',
      });
    }
  };

  return (
    <section
      id="projects"
      className={`py-20 relative overflow-hidden ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-white'
      }`}
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className={`w-full h-full ${
            theme === 'dark' ? 'bg-cyan-400' : 'bg-purple-400'
          }`}
          style={{
            backgroundImage: `
                 linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
               `,
            backgroundSize: '50px 50px',
            animation: 'grid-move 20s linear infinite',
          }}
        />
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
            PROJECT SHOWCASE
          </h2>
          <p
            className={`text-xl max-w-3xl mx-auto ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Innovative solutions that push the boundaries of technology
          </p>
        </div>

        <div
          ref={projectsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <div
              key={project.id}
              data-project-id={project.id}
              className={`project-card group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 ${
                theme === 'dark'
                  ? 'bg-gray-800/50 border border-gray-700 backdrop-blur-sm'
                  : 'bg-white/50 border border-gray-200 backdrop-blur-sm'
              }`}
              style={{
                transformStyle: 'preserve-3d',
                boxShadow:
                  theme === 'dark'
                    ? '0 20px 40px rgba(0, 0, 0, 0.3)'
                    : '0 20px 40px rgba(0, 0, 0, 0.1)',
              }}
              onMouseEnter={() => handleProjectHover(project.id)}
              onMouseLeave={() => handleProjectHover(null)}
              onClick={() => setSelectedProject(project)}
            >
              {/* Holographic overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Image with parallax effect */}
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Animated overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Stats overlay */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div
                    className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs ${
                      theme === 'dark'
                        ? 'bg-gray-900/80 text-yellow-400'
                        : 'bg-white/80 text-yellow-600'
                    }`}
                  >
                    <Star size={12} />
                    <span>{project.stats.stars}</span>
                  </div>
                </div>
              </div>

              <div className="p-6 relative">
                {/* Project title with glow effect */}
                <h3
                  className={`text-xl font-bold mb-3 transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${
                    theme === 'dark'
                      ? 'text-white group-hover:from-cyan-400 group-hover:to-purple-400'
                      : 'text-gray-900 group-hover:from-purple-600 group-hover:to-blue-600'
                  }`}
                >
                  {project.title}
                </h3>

                <p
                  className={`text-sm mb-4 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  {project.description}
                </p>

                {/* Tech stack with animated badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className={`tech-badge px-3 py-1 text-xs rounded-full transition-all duration-300 ${
                        theme === 'dark'
                          ? 'bg-gray-700 text-gray-300 group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-purple-500 group-hover:text-white'
                          : 'bg-gray-100 text-gray-600 group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-blue-500 group-hover:text-white'
                      }`}
                      style={{ animationDelay: `${techIndex * 0.1}s` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action buttons with hover effects */}
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-2 text-sm transition-all duration-300 hover:scale-110 ${
                      theme === 'dark'
                        ? 'text-gray-400 hover:text-cyan-400'
                        : 'text-gray-600 hover:text-purple-600'
                    }`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-2 text-sm transition-all duration-300 hover:scale-110 ${
                      theme === 'dark'
                        ? 'text-gray-400 hover:text-cyan-400'
                        : 'text-gray-600 hover:text-purple-600'
                    }`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={16} />
                    <span>Live</span>
                  </a>
                </div>

                {/* Animated corner accent */}
                <div
                  className={`absolute top-0 right-0 w-0 h-0 border-l-[30px] border-b-[30px] border-l-transparent transition-all duration-500 ${
                    theme === 'dark'
                      ? 'border-b-cyan-500/20 group-hover:border-b-cyan-500/60'
                      : 'border-b-purple-500/20 group-hover:border-b-purple-500/60'
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div
            className={`relative max-w-6xl w-full max-h-[90vh] overflow-y-auto rounded-3xl ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            }`}
            style={{
              boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)',
              animation: 'modal-appear 0.5s ease-out',
            }}
          >
            {/* Close button with animation */}
            <button
              onClick={() => setSelectedProject(null)}
              className={`absolute top-6 right-6 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-90 z-10 ${
                theme === 'dark'
                  ? 'bg-gray-700 text-white hover:bg-red-500'
                  : 'bg-gray-100 text-gray-600 hover:bg-red-500 hover:text-white'
              }`}
            >
              <X size={20} />
            </button>

            <div className="p-8">
              {/* Project image with overlay effects */}
              <div className="relative mb-8 rounded-2xl overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {/* Floating stats */}
                <div className="absolute bottom-4 left-4 flex space-x-4">
                  <div className="flex items-center space-x-2 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                    <Star size={16} className="text-yellow-400" />
                    <span className="text-white text-sm">
                      {selectedProject.stats.stars}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                    <Zap size={16} className="text-cyan-400" />
                    <span className="text-white text-sm">
                      {selectedProject.stats.commits}
                    </span>
                  </div>
                </div>
              </div>

              {/* Project details */}
              <h3
                className={`text-4xl font-bold mb-6 ${
                  theme === 'dark'
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400'
                    : 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600'
                }`}
                style={{ fontFamily: 'Orbitron, monospace' }}
              >
                {selectedProject.title}
              </h3>

              <p
                className={`text-lg mb-8 leading-relaxed ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                {selectedProject.fullDescription}
              </p>

              {/* Features grid */}
              <div className="mb-8">
                <h4
                  className={`text-2xl font-semibold mb-4 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  Key Features
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedProject.features.map(
                    (feature: string, index: number) => (
                      <div
                        key={index}
                        className={`flex items-center space-x-3 p-4 rounded-xl ${
                          theme === 'dark' ? 'bg-gray-700/50' : 'bg-gray-50'
                        }`}
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div
                          className={`w-3 h-3 rounded-full ${
                            theme === 'dark' ? 'bg-cyan-400' : 'bg-purple-500'
                          }`}
                        />
                        <span
                          className={
                            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                          }
                        >
                          {feature}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Tech stack */}
              <div className="mb-8">
                <h4
                  className={`text-2xl font-semibold mb-4 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.technologies.map(
                    (tech: string, index: number) => (
                      <span
                        key={tech}
                        className={`px-4 py-2 rounded-full font-medium transition-all duration-300 hover:scale-110 ${
                          theme === 'dark'
                            ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 border border-cyan-500/30'
                            : 'bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-600 border border-purple-500/30'
                        }`}
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex space-x-6">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-3 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${
                    theme === 'dark'
                      ? 'bg-gray-700 text-white hover:bg-gray-600'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  <Github size={24} />
                  <span>View Source</span>
                </a>
                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-3 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${
                    theme === 'dark'
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600'
                      : 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600'
                  }`}
                >
                  <ExternalLink size={24} />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        @keyframes modal-appear {
          0% { 
            opacity: 0; 
            transform: scale(0.8) rotateY(-15deg); 
          }
          100% { 
            opacity: 1; 
            transform: scale(1) rotateY(0deg); 
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
