import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
        theme === 'dark'
          ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40'
          : 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40'
      }`}
    >
      <ChevronUp size={24} />
    </button>
  );
};

export default BackToTop;