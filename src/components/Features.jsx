import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiSearch, FiBookOpen, FiEdit3, FiFolder, FiMessageCircle, FiBarChart3, FiUsers, FiZap } = FiIcons;

const Features = () => {
  const features = [
    {
      icon: FiSearch,
      title: 'AI-Powered Search',
      description: 'Intelligent search engine that comprehends research queries and analyzes the 10 most relevant papers for comprehensive, research-backed answers.',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: FiBookOpen,
      title: 'Literature Review',
      description: 'Automated discovery, screening, and data extraction for research papers with in-depth analysis of trends and consensus.',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: FiEdit3,
      title: 'AI Writing Assistant',
      description: 'AI-driven writing tool that generates and refines academic content with automatic citations and reference integration.',
      gradient: 'from-green-500 to-green-600'
    },
    {
      icon: FiFolder,
      title: 'Reference Management',
      description: 'Intuitive reference manager with import capabilities from Zotero, BibTeX, RIS, DOI, and URLs with AI-generated summaries.',
      gradient: 'from-orange-500 to-orange-600'
    },
    {
      icon: FiMessageCircle,
      title: 'Chat with PDFs',
      description: 'Interactive AI tools for chatting with PDFs, generating theses, paper titles, abstracts, and essay conclusions.',
      gradient: 'from-red-500 to-red-600'
    },
    {
      icon: FiBarChart3,
      title: 'Research Analytics',
      description: 'Advanced analytics and visualization tools to track research trends, citations, and impact metrics across disciplines.',
      gradient: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: FiUsers,
      title: 'Collaboration Tools',
      description: 'Real-time collaboration features with shared libraries, customizable access permissions, and team research management.',
      gradient: 'from-pink-500 to-pink-600'
    },
    {
      icon: FiZap,
      title: 'Smart Summarization',
      description: 'AI-powered summarization for articles, essays, YouTube videos, paragraphs, and sentences with key insights extraction.',
      gradient: 'from-yellow-500 to-yellow-600'
    }
  ];

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Advanced Research
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700 block">
              Features & Tools
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive suite of AI-powered tools designed to optimize and enhance 
            your research workflow from discovery to publication.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-neumorphic hover:shadow-neumorphic-lg transition-all duration-300 h-full">
                {/* Encrypted Text Grain Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 overflow-hidden rounded-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-700 animate-grain">
                    <div className="text-xs font-mono leading-3 p-2 text-white/30">
                      {Array.from({ length: 15 }, (_, i) => (
                        <div key={i}>
                          {Math.random().toString(36).substring(2, 12)}
                          {Math.random().toString(36).substring(2, 12)}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl shadow-neumorphic flex items-center justify-center mb-6 group-hover:shadow-neumorphic-inset transition-all duration-300`}>
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
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl p-12 shadow-neumorphic-lg">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Research?
            </h3>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Join thousands of researchers, academics, and professionals who are already 
              accelerating their research with our AI-powered platform.
            </p>
            <button className="bg-white text-primary-600 px-8 py-4 rounded-xl font-bold text-lg shadow-neumorphic hover:shadow-neumorphic-inset transition-all duration-300">
              Start Free Trial
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Features;