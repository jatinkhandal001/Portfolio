import React from 'react';
import { Code, Zap, Heart } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const About: React.FC = () => {
  const { theme } = useTheme();

  const cards = [
    {
      icon: <Code size={24} />,
      title: 'Problem Solver',
      description: 'I love tackling complex challenges and turning ideas into elegant solutions.'
    },
    {
      icon: <Zap size={24} />,
      title: 'Innovation Driven',
      description: 'Always exploring cutting-edge technologies and pushing the boundaries of what\'s possible.'
    },
    {
      icon: <Heart size={24} />,
      title: 'Passionate Creator',
      description: 'Building applications that make a difference and enhance user experiences.'
    }
  ];

  return (
    <section
      id="about"
      className={`py-20 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className={`text-4xl md:text-5xl font-bold mb-4 ${
              theme === 'dark' 
                ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400'
                : 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600'
            }`}
            style={{ fontFamily: 'Orbitron, monospace' }}
            data-aos="fade-up"
          >
            About Me
          </h2>
          <p 
            className={`text-xl max-w-3xl mx-auto ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            I'm a passionate developer with expertise in modern web technologies, 
            AI/ML, and creating immersive digital experiences. I believe in writing 
            clean, efficient code that makes a real impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`p-8 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:transform hover:scale-105 ${
                theme === 'dark'
                  ? 'bg-gray-800/50 border-gray-700 hover:bg-gray-800/70'
                  : 'bg-white/50 border-gray-200 hover:bg-white/70'
              }`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className={`inline-flex p-3 rounded-lg mb-4 ${
                theme === 'dark' 
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                  : 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
              }`}>
                {card.icon}
              </div>
              <h3 className={`text-xl font-semibold mb-3 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                {card.title}
              </h3>
              <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;