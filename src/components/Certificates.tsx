import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Certificates: React.FC = () => {
  const { theme } = useTheme();

  const certificates = [
    {
      id: 1,
      title: 'ISRO IIRS Certification',
      issuer: 'ISRO',
      date: '2025',
      link: 'https://www.linkedin.com/posts/jatinkhandal001_isro-certificate-activity-7333334563525382144-s5Dq',
      description: 'Application of AI/ML Models for Crop Acreage Mapping',
    },
    {
      id: 2,
      title: 'Generative AI Certification',
      issuer: 'Google Cloud',
      date: '2024-2025',
      link: '#',
      description:
        'Google Cloud Generative AI Certification demonstrating expertise in AI model development and deployment',
    },
    {
      id: 3,
      title: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
      issuer: 'Oracle',
      date: '2025',
      link: '#',
      description: 'Oracle Cloud AI Foundations certification covering cloud-based AI services and deployment',
    },
    {
      id: 4,
      title: 'Google Career Launchpad Program',
      issuer: 'Google',
      date: '2026',
      link: '#',
      description: 'Data Analytics certification through Google Career Launchpad Program',
    },
    {
      id: 5,
      title: 'AI Azure Virtual Internship',
      issuer: 'Microsoft and Edunet Foundation (AICTE)',
      date: '2025',
      link: 'https://drive.google.com/file/d/1lUcFJkcWGixEh-j84WJitrm5m1fLmVcK/view?usp=drive_link',
      description: 'Microsoft Azure AI and data analytics workloads certification',
    },
    {
      id: 6,
      title: 'Google Cloud Computing Certification',
      issuer: 'Google',
      date: '2023-2024',
      link: 'https://www.linkedin.com/posts/jatinkhandal001_ai-cloudcomputing-gdsc-activity-7121384437715546112-1qi6',
      description: 'Google Cloud Computing Foundations and platform services certification',
    },
    {
      id: 7,
      title: 'NPTEL - Employability Communication',
      issuer: 'NPTEL',
      date: '2025',
      link: '#',
      description: 'A Lab-Based Course focusing on professional communication skills',
    },
    {
      id: 8,
      title: 'NPTEL - Developing Soft Skills and Personality',
      issuer: 'NPTEL',
      date: '2024',
      link: '#',
      description: 'Comprehensive course on soft skills development and personality enhancement',
    },
  ];

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={cert.id}
              className={`p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:transform hover:scale-105 ${
                theme === 'dark'
                  ? 'bg-gray-900/50 border-gray-700 hover:bg-gray-900/70'
                  : 'bg-white/50 border-gray-200 hover:bg-white/70'
              }`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex items-center justify-center mb-4">
                <div
                  className={`p-3 rounded-full ${
                    theme === 'dark'
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500'
                      : 'bg-gradient-to-r from-purple-500 to-blue-500'
                  }`}
                >
                  <Award size={24} className="text-white" />
                </div>
              </div>

              <div className="text-center">
                <h3
                  className={`text-lg font-bold mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {cert.title}
                </h3>
                <p
                  className={`text-base mb-2 ${
                    theme === 'dark' ? 'text-cyan-400' : 'text-purple-600'
                  }`}
                >
                  {cert.issuer}
                </p>
                <p
                  className={`text-sm mb-3 ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                  }`}
                >
                  {cert.date}
                </p>
                <p
                  className={`text-sm mb-4 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  {cert.description}
                </p>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center space-x-2 px-4 py-2 rounded-lg font-semibold text-sm transition duration-300 ${
                    theme === 'dark'
                      ? 'bg-cyan-600 text-white hover:bg-cyan-700'
                      : 'bg-purple-600 text-white hover:bg-purple-700'
                  }`}
                >
                  <span>View Certificate</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Certificate stats */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Total Certificates', value: '8' },
              { label: 'Cloud Platforms', value: '3' },
              { label: 'AI/ML Focused', value: '5' },
              { label: 'Professional Skills', value: '2' }
            ].map((stat, index) => (
              <div
                key={stat.label}
                className={`p-6 rounded-xl ${
                  theme === 'dark' ? 'bg-gray-900/30' : 'bg-white/50'
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
    </section>
  );
};

export default Certificates;
