import React, { useState, useEffect, useRef } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  MessageCircle,
} from 'lucide-react';
import { gsap } from 'gsap';
import { useTheme } from '../contexts/ThemeContext';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const { theme } = useTheme();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Success animation
    const form = formRef.current;
    if (form) {
      gsap.to(form, {
        scale: 1.05,
        duration: 0.2,
        yoyo: true,
        repeat: 1,
        ease: 'power2.inOut',
      });
    }

    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const socialLinks = [
    {
      icon: <Github size={24} />,
      href: 'https://github.com/jatinkhandal001',
      label: 'GitHub',
      color: '#333',
    },
    {
      icon: <Linkedin size={24} />,
      href: 'https://linkedin.com/in/jatinkhandal001',
      label: 'LinkedIn',
      color: '#0077B5',
    },
    {
      icon: <Twitter size={24} />,
      href: 'https://twitter.com',
      label: 'Twitter',
      color: '#1DA1F2',
    },
  ];

  useEffect(() => {
    // Animate contact cards on scroll
    const cards = document.querySelectorAll('.contact-card');
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
          rotationX: -45,
        },
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          duration: 0.8,
          delay: index * 0.2,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    // Floating animation for form
    gsap.to('.contact-form', {
      y: -10,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
  }, []);

  return (
    <section
      id="contact"
      className={`py-20 relative overflow-hidden ${
        theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
      }`}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 rounded-full ${
              theme === 'dark' ? 'bg-cyan-400' : 'bg-purple-400'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `twinkle ${
                2 + Math.random() * 3
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
              opacity: 0.6,
            }}
          />
        ))}
      </div>

      {/* Geometric shapes */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute border-2 ${
              theme === 'dark' ? 'border-cyan-400' : 'border-purple-400'
            }`}
            style={{
              width: `${100 + Math.random() * 200}px`,
              height: `${100 + Math.random() * 200}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              borderRadius: Math.random() > 0.5 ? '50%' : '0%',
              animation: `geometric-float ${
                5 + Math.random() * 5
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
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
            CONNECT
          </h2>
          <p
            className={`text-xl max-w-3xl mx-auto ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Let's build something extraordinary together
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div data-aos="fade-right">
            <h3
              className={`text-3xl font-bold mb-8 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
            >
              Get In Touch
            </h3>

            <div className="space-y-6">
              {[
                {
                  icon: <Mail size={24} />,
                  label: 'Email',
                  value: 'khandaljatin2187@example.com',
                  color: '#EA4335',
                },
                {
                  icon: <Phone size={24} />,
                  label: 'Phone',
                  value: '+919664255659',
                  color: '#34A853',
                },
                {
                  icon: <MapPin size={24} />,
                  label: 'Location',
                  value: 'Jaipur , India',
                  color: '#4285F4',
                },
              ].map((contact, index) => (
                <div
                  key={contact.label}
                  className={`contact-card flex items-center space-x-6 p-6 rounded-2xl transition-all duration-500 hover:scale-105 ${
                    theme === 'dark'
                      ? 'bg-gray-900/50 border border-gray-700 backdrop-blur-sm'
                      : 'bg-white/50 border border-gray-200 backdrop-blur-sm'
                  }`}
                  style={{
                    transformStyle: 'preserve-3d',
                    boxShadow:
                      theme === 'dark'
                        ? '0 10px 30px rgba(0, 0, 0, 0.3)'
                        : '0 10px 30px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <div className="relative">
                    <div
                      className={`p-4 rounded-full transition-all duration-300`}
                      style={{ backgroundColor: contact.color }}
                    >
                      <div className="text-white">{contact.icon}</div>
                    </div>
                    {/* Animated ring */}
                    <div
                      className="absolute inset-0 rounded-full border-2 opacity-0 hover:opacity-100 transition-opacity duration-300"
                      style={{
                        borderColor: contact.color,
                        animation: 'pulse-ring 2s ease-in-out infinite',
                      }}
                    />
                  </div>
                  <div>
                    <p
                      className={`font-semibold text-lg ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      {contact.label}
                    </p>
                    <p
                      className={`${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                      }`}
                    >
                      {contact.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-12">
              <h4
                className={`text-xl font-semibold mb-6 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}
              >
                Follow My Journey
              </h4>
              <div className="flex space-x-6">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative p-4 rounded-full transition-all duration-500 hover:scale-110 ${
                      theme === 'dark'
                        ? 'bg-gray-700 text-gray-300 hover:text-white'
                        : 'bg-gray-200 text-gray-600 hover:text-white'
                    }`}
                    style={{
                      boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
                    }}
                    aria-label={link.label}
                  >
                    {link.icon}

                    {/* Hover background */}
                    <div
                      className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ backgroundColor: link.color }}
                    />

                    {/* Icon overlay */}
                    <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {link.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div data-aos="fade-left">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="contact-form space-y-8"
            >
              {/* Name Field */}
              <div className="relative">
                <label
                  htmlFor="name"
                  className={`absolute left-6 transition-all duration-300 pointer-events-none z-10 ${
                    focusedField === 'name' || formData.name
                      ? 'top-2 text-xs scale-90'
                      : 'top-6 text-base'
                  } ${
                    theme === 'dark'
                      ? focusedField === 'name'
                        ? 'text-cyan-400'
                        : 'text-gray-400'
                      : focusedField === 'name'
                      ? 'text-purple-500'
                      : 'text-gray-500'
                  }`}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className={`w-full px-6 py-6 pt-8 rounded-2xl border-2 transition-all duration-500 backdrop-blur-sm ${
                    theme === 'dark'
                      ? 'bg-gray-900/50 border-gray-600 text-white focus:border-cyan-400 focus:bg-gray-900/70'
                      : 'bg-white/50 border-gray-300 text-gray-900 focus:border-purple-500 focus:bg-white/70'
                  } focus:outline-none focus:scale-105`}
                  style={{
                    boxShadow:
                      focusedField === 'name'
                        ? theme === 'dark'
                          ? '0 0 30px rgba(6, 182, 212, 0.3)'
                          : '0 0 30px rgba(139, 92, 246, 0.3)'
                        : 'none',
                  }}
                />
              </div>

              {/* Email Field */}
              <div className="relative">
                <label
                  htmlFor="email"
                  className={`absolute left-6 transition-all duration-300 pointer-events-none z-10 ${
                    focusedField === 'email' || formData.email
                      ? 'top-2 text-xs scale-90'
                      : 'top-6 text-base'
                  } ${
                    theme === 'dark'
                      ? focusedField === 'email'
                        ? 'text-cyan-400'
                        : 'text-gray-400'
                      : focusedField === 'email'
                      ? 'text-purple-500'
                      : 'text-gray-500'
                  }`}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className={`w-full px-6 py-6 pt-8 rounded-2xl border-2 transition-all duration-500 backdrop-blur-sm ${
                    theme === 'dark'
                      ? 'bg-gray-900/50 border-gray-600 text-white focus:border-cyan-400 focus:bg-gray-900/70'
                      : 'bg-white/50 border-gray-300 text-gray-900 focus:border-purple-500 focus:bg-white/70'
                  } focus:outline-none focus:scale-105`}
                  style={{
                    boxShadow:
                      focusedField === 'email'
                        ? theme === 'dark'
                          ? '0 0 30px rgba(6, 182, 212, 0.3)'
                          : '0 0 30px rgba(139, 92, 246, 0.3)'
                        : 'none',
                  }}
                />
              </div>

              {/* Message Field */}
              <div className="relative">
                <label
                  htmlFor="message"
                  className={`absolute left-6 transition-all duration-300 pointer-events-none z-10 ${
                    focusedField === 'message' || formData.message
                      ? 'top-2 text-xs scale-90'
                      : 'top-6 text-base'
                  } ${
                    theme === 'dark'
                      ? focusedField === 'message'
                        ? 'text-cyan-400'
                        : 'text-gray-400'
                      : focusedField === 'message'
                      ? 'text-purple-500'
                      : 'text-gray-500'
                  }`}
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  rows={6}
                  required
                  className={`w-full px-6 py-6 pt-8 rounded-2xl border-2 transition-all duration-500 resize-none backdrop-blur-sm ${
                    theme === 'dark'
                      ? 'bg-gray-900/50 border-gray-600 text-white focus:border-cyan-400 focus:bg-gray-900/70'
                      : 'bg-white/50 border-gray-300 text-gray-900 focus:border-purple-500 focus:bg-white/70'
                  } focus:outline-none focus:scale-105`}
                  style={{
                    boxShadow:
                      focusedField === 'message'
                        ? theme === 'dark'
                          ? '0 0 30px rgba(6, 182, 212, 0.3)'
                          : '0 0 30px rgba(139, 92, 246, 0.3)'
                        : 'none',
                  }}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`group relative w-full py-6 px-8 rounded-2xl font-bold text-lg transition-all duration-500 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed ${
                  theme === 'dark'
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600'
                    : 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600'
                }`}
                style={{
                  boxShadow:
                    theme === 'dark'
                      ? '0 10px 30px rgba(6, 182, 212, 0.3)'
                      : '0 10px 30px rgba(139, 92, 246, 0.3)',
                }}
              >
                <span className="flex items-center justify-center space-x-3">
                  {isSubmitting ? (
                    <>
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={24} />
                      <span>Launch Message</span>
                    </>
                  )}
                </span>

                {/* Animated background */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
              </button>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }
        
        @keyframes geometric-float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(180deg); }
        }
        
        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(1.5); opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
