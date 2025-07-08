import React, { useEffect, useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Technologies from './components/Technologies';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingOrbs from './components/FloatingOrbs';
import BackToTop from './components/BackToTop';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import AOS from 'aos';
import 'aos/dist/aos.css';

function AppContent() {
  const [isLoading, setIsLoading] = useState(true);
  const { theme } = useTheme();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-cubic',
      once: true,
    });

    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className={`min-h-screen transition-all duration-500 relative ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <FloatingOrbs />
      <Header />
      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Technologies />
        <Contact />
        <Footer />
      </div>
      <BackToTop />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;