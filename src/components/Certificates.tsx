import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Award } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Certificates: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { theme } = useTheme();

  const certificates = [
    {
      id: 1,
      title: 'Certificate of Participation',
      issuer: 'ISRO',
      date: '2025',
      link: 'https://www.linkedin.com/posts/jatinkhandal001_isro-certificate-activity-7333334563525382144-s5Dq',
      description: 'Application AI/ML Model for specific Crop Aerage Mapping',
    },
    {
      id: 2,
      title: 'Google Cloud Study Jam Program',
      issuer: 'Google Cloud',
      date: '2024',
      link: 'https://www.linkedin.com/posts/jatinkhandal001_ai-cloudcomputing-gdsc-activity-7121384437715546112-1qi6',
      description:
        'Certification showcasing proficiency in Google Cloud Computing Foundations and Generative AI',
    },
    {
      id: 3,
      title: 'Angular Workshop - Tech Winter Break 2024',
      issuer: 'Poornima University',
      date: '2024',
      link: 'https://drive.google.com/file/d/1vZJOskI7iFusvBLCgmwXN8kogdYnzDTf/view',
      description: 'Database development and administration certification',
    },
    {
      id: 4,
      title: 'Web Design & Development',
      issuer: 'Skill India',
      date: '2025',
      link: 'https://drive.google.com/file/d/1vd0chC9MnbT9PlIE6fLaS6bHKtQroX4I/view',
      description: 'Advanced web development skills and best practices',
    },
    {
      id: 5,
      title: 'AI - Machine Learning Engineer Foundation Course',
      issuer: 'Reliance Foundation',
      date: '2025',
      link: 'https://drive.google.com/file/d/1vZJOskI7iFusvBLCgmwXN8kogdYnzDTf/view',
      description: 'AI /ML Course certification',
    },
    {
      id: 6,
      title: 'Employment Communication A Lab based course',
      issuer: 'NPTEL',
      date: '2025',
      link: 'https://drive.google.com/file/d/1vhCRwtoSebSMeUlFJMIcIxj3qcDsPbGl/view',
      description: 'Credit Courses',
    },
    {
      id: 7,
      title: 'AWS Summit – India Online',
      issuer: 'Amazon Web Services (AWS)',
      date: 'June 2025',
      link: 'https://drive.google.com/file/d/1KZnWQH4WXxQkjbU9ck-DZ7FX0JNebcNc/view?usp=drive_link',
      description: 'Certificate of Attendance',
    },
    {
      id: 8,
      title: 'AI & Machine Learning Internship',
      issuer: 'Microsoft & Edunet Foundation',
      date: '2025',
      link: 'https://drive.google.com/file/d/1lUcFJkcWGixEh-j84WJitrm5m1fLmVcK/view?usp=drive_link',
      description: 'Internship Completion Certificate',
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % certificates.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + certificates.length) % certificates.length
    );
  };

  return (
    <section
      id="certificates"
      className={`py-20 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}
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
            Certificates
          </h2>
          <p
            className={`text-xl max-w-3xl mx-auto ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Professional certifications that validate my expertise
          </p>
        </div>

        <div className="relative">
          {/* Carousel */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {certificates.map((cert) => (
                <div key={cert.id} className="w-full flex-shrink-0 px-4">
                  <div
                    className={`max-w-2xl mx-auto p-8 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:transform hover:scale-105 ${
                      theme === 'dark'
                        ? 'bg-gray-900/50 border-gray-700'
                        : 'bg-white/50 border-gray-200'
                    }`}
                  >
                    <div className="flex items-center justify-center mb-6">
                      <div
                        className={`p-4 rounded-full ${
                          theme === 'dark'
                            ? 'bg-gradient-to-r from-cyan-500 to-purple-500'
                            : 'bg-gradient-to-r from-purple-500 to-blue-500'
                        }`}
                      >
                        <Award size={32} className="text-white" />
                      </div>
                    </div>

                    <div className="text-center">
                      <h3
                        className={`text-2xl font-bold mb-2 ${
                          theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}
                      >
                        {cert.title}
                      </h3>
                      <p
                        className={`text-lg mb-2 ${
                          theme === 'dark' ? 'text-cyan-400' : 'text-purple-600'
                        }`}
                      >
                        {cert.issuer}
                      </p>
                      <p
                        className={`text-sm mb-4 ${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                        }`}
                      >
                        {cert.date}
                      </p>
                      <p
                        className={`text-base ${
                          theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                        }`}
                      >
                        {cert.description}
                      </p>

                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-block mt-6 px-6 py-2 rounded-lg font-semibold transition duration-300 ${
                          theme === 'dark'
                            ? 'bg-cyan-600 text-white hover:bg-cyan-700'
                            : 'bg-purple-600 text-white hover:bg-purple-700'
                        }`}
                      >
                        View Certificate
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className={`absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-gray-800 text-white hover:bg-gray-700'
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            className={`absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-gray-800 text-white hover:bg-gray-700'
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            <ChevronRight size={24} />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {certificates.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? theme === 'dark'
                      ? 'bg-cyan-400'
                      : 'bg-purple-500'
                    : theme === 'dark'
                    ? 'bg-gray-600'
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
