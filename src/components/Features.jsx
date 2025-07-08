import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiSearch, FiBookOpen, FiEdit3, FiFolder, FiMessageCircle, FiBarChart3, FiUsers, FiZap } = FiIcons;

const Features = () => {
  const navigate = useNavigate();

  const handleStartFreeTrial = () => {
    navigate('/dashboard');
  };

  const features = [
    {
      icon: FiSearch,
      title: 'AI-Powered Search',
      description: 'Intelligent search engine that comprehends research queries and analyzes the 10 most relevant papers for comprehensive, research-backed answers.',
      gradient: 'from-blue-500 to-blue-600',
      action: () => navigate('/search')
    },
    {
      icon: FiBookOpen,
      title: 'Literature Review',
      description: 'Automated discovery, screening, and data extraction for research papers with in-depth analysis of trends and consensus.',
      gradient: 'from-purple-500 to-purple-600',
      action: () => navigate('/search')
    },
    {
      icon: FiEdit3,
      title: 'AI Writing Assistant',
      description: 'AI-driven writing tool that generates and refines academic content with automatic citations and reference integration.',
      gradient: 'from-green-500 to-green-600',
      action: () => navigate('/dashboard')
    },
    {
      icon: FiFolder,
      title: 'Reference Management',
      description: 'Intuitive reference manager with import capabilities from Zotero, BibTeX, RIS, DOI, and URLs with AI-generated summaries.',
      gradient: 'from-orange-500 to-orange-600',
      action: () => navigate('/references')
    },
    {
      icon: FiMessageCircle,
      title: 'Chat with PDFs',
      description: 'Interactive AI tools for chatting with PDFs, generating theses, paper titles, abstracts, and essay conclusions.',
      gradient: 'from-red-500 to-red-600',
      action: () => navigate('/dashboard')
    },
    {
      icon: FiBarChart3,
      title: 'Research Analytics',
      description: 'Advanced analytics and visualization tools to track research trends, citations, and impact metrics across disciplines.',
      gradient: 'from-indigo-500 to-indigo-600',
      action: () => navigate('/dashboard')
    },
    {
      icon: FiUsers,
      title: 'Collaboration Tools',
      description: 'Real-time collaboration features with shared libraries, customizable access permissions, and team research management.',
      gradient: 'from-pink-500 to-pink-600',
      action: () => navigate('/dashboard')
    },
    {
      icon: FiZap,
      title: 'Smart Summarization',
      description: 'AI-powered summarization for articles, essays, YouTube videos, paragraphs, and sentences with key insights extraction.',
      gradient: 'from-yellow-500 to-yellow-600',
      action: () => navigate('/dashboard')
    }
  ];

  return (
    <div className="py-24 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 relative overflow-hidden">
      {/* Floating Orbs Background */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 6 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-20"
            style={{
              width: `${Math.random() * 150 + 80}px`,
              height: `${Math.random() * 150 + 80}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `conic-gradient(from ${i * 60}deg, #3b82f6, #8b5cf6, #10b981, #f59e0b)`,
              filter: 'blur(30px)',
            }}
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, 360],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 10 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 30 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -80, 0],
              x: [0, Math.random() * 60 - 30, 0],
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-neumorphic-ultra border border-white/20">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-purple-600/20 rounded-3xl blur-xl"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-primary-600 to-purple-600 mb-6">
                Advanced Research
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-primary-500 to-blue-600">
                  Features & Tools
                </span>
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
                Comprehensive suite of AI-powered tools designed to optimize and enhance your research workflow from discovery to publication.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="relative group cursor-pointer"
              onClick={feature.action}
            >
              {/* Holographic Glow */}
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition-all duration-500`}></div>
              
              <div className="relative bg-white/30 backdrop-blur-xl rounded-3xl p-8 shadow-neumorphic-ultra border border-white/40 h-full">
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl shadow-neumorphic-deep flex items-center justify-center mb-6 group-hover:shadow-neumorphic-ultra transition-all duration-300`}>
                    <SafeIcon icon={feature.icon} className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 animate-pulse"></div>
            <div className="relative bg-white/20 backdrop-blur-xl rounded-3xl p-12 shadow-neumorphic-ultra border border-white/30">
              <h3 className="text-3xl md:text-4xl font-black text-gray-800 mb-6">
                Ready to Transform Your Research?
              </h3>
              <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto font-medium">
                Join thousands of researchers, academics, and professionals who are already accelerating their research with our AI-powered platform.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleStartFreeTrial}
                className="bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 text-white px-12 py-4 rounded-2xl font-black text-lg shadow-neumorphic-deep hover:shadow-neumorphic-ultra transition-all duration-300"
              >
                Start Free Trial
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Features;