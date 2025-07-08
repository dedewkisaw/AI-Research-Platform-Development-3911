import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiSearch, FiArrowRight, FiBookOpen, FiUsers, FiTrendingUp, FiZap, FiCpu, FiLayers, FiGlobe } = FiIcons;

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeOrb, setActiveOrb] = useState(0);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const stats = [
    { icon: FiBookOpen, value: '220M+', label: 'Research Papers', color: 'from-blue-400 to-blue-600' },
    { icon: FiUsers, value: '50K+', label: 'Active Researchers', color: 'from-purple-400 to-purple-600' },
    { icon: FiTrendingUp, value: '99.8%', label: 'Accuracy Rate', color: 'from-green-400 to-green-600' },
    { icon: FiZap, value: '10x', label: 'Faster Research', color: 'from-orange-400 to-orange-600' },
  ];

  const floatingOrbs = [
    { size: 'w-96 h-96', position: 'top-10 left-10', delay: 0 },
    { size: 'w-80 h-80', position: 'top-20 right-20', delay: 2 },
    { size: 'w-72 h-72', position: 'bottom-20 left-20', delay: 4 },
    { size: 'w-64 h-64', position: 'bottom-10 right-10', delay: 6 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveOrb((prev) => (prev + 1) % floatingOrbs.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 overflow-hidden">
      {/* Revolutionary Floating Orbs */}
      <div className="absolute inset-0">
        {floatingOrbs.map((orb, index) => (
          <motion.div
            key={index}
            className={`absolute ${orb.size} ${orb.position} rounded-full opacity-20`}
            style={{
              background: `conic-gradient(from ${index * 90}deg, #3b82f6, #8b5cf6, #10b981, #f59e0b, #ef4444, #3b82f6)`,
              filter: 'blur(40px)',
            }}
            animate={{
              scale: activeOrb === index ? [1, 1.2, 1] : [1, 0.8, 1],
              rotate: [0, 360],
              opacity: activeOrb === index ? [0.2, 0.4, 0.2] : [0.2, 0.1, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: orb.delay,
            }}
          />
        ))}
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          {/* Revolutionary Title */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="relative mb-12"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-purple-600 rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
            <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-neumorphic-ultra border border-white/20">
              <motion.h1
                className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-primary-600 to-purple-600 mb-6"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                QUANTUM
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-primary-500 to-blue-600">
                  RESEARCH
                </span>
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex items-center justify-center space-x-4 mb-6"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl shadow-neumorphic-deep flex items-center justify-center">
                  <SafeIcon icon={FiCpu} className="text-white text-2xl" />
                </div>
                <div className="text-2xl font-bold text-gray-700">×</div>
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl shadow-neumorphic-deep flex items-center justify-center">
                  <SafeIcon icon={FiLayers} className="text-white text-2xl" />
                </div>
                <div className="text-2xl font-bold text-gray-700">×</div>
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl shadow-neumorphic-deep flex items-center justify-center">
                  <SafeIcon icon={FiGlobe} className="text-white text-2xl" />
                </div>
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium"
              >
                Experience the future of research with our revolutionary AI that transcends traditional boundaries, 
                analyzing quantum-level patterns across <span className="text-primary-600 font-bold">220M+ papers</span> 
                to deliver unprecedented insights.
              </motion.p>
            </div>
          </motion.div>

          {/* Revolutionary Search Bar */}
          <motion.form
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            onSubmit={handleSearch}
            className="max-w-5xl mx-auto mb-16"
          >
            <div className="relative group">
              {/* Glowing Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              
              {/* Main Search Container */}
              <div className="relative bg-white/20 backdrop-blur-xl rounded-3xl p-3 shadow-neumorphic-ultra border border-white/30">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-primary-500 to-purple-600 rounded-2xl shadow-neumorphic-deep flex items-center justify-center ml-2">
                    <SafeIcon icon={FiSearch} className="text-white text-2xl" />
                  </div>
                  
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Ask anything... AI will analyze millions of papers instantly"
                    className="flex-1 px-8 py-4 text-xl bg-transparent border-none outline-none text-gray-800 placeholder-gray-500 font-medium"
                  />
                  
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 text-white rounded-2xl shadow-neumorphic-deep hover:shadow-neumorphic-ultra transition-all duration-300 flex items-center space-x-3 mr-2"
                  >
                    <span className="font-bold text-lg">SEARCH</span>
                    <SafeIcon icon={FiArrowRight} className="text-xl" />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.form>

          {/* Revolutionary Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ 
                  scale: 1.1, 
                  rotateY: 10,
                  z: 50 
                }}
                className="relative group perspective-1000"
              >
                {/* Holographic Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10 rounded-3xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Main Card */}
                <div className="relative bg-white/30 backdrop-blur-xl rounded-3xl p-8 shadow-neumorphic-ultra border border-white/40 transform-gpu">
                  {/* Animated Background Pattern */}
                  <div className="absolute inset-0 opacity-10 overflow-hidden rounded-3xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-700 animate-grain-slow">
                      <div className="text-xs font-mono leading-3 p-4 text-white/50">
                        {Array.from({ length: 15 }, (_, i) => (
                          <div key={i}>
                            {Math.random().toString(36).substring(2, 12)}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl shadow-neumorphic-deep flex items-center justify-center mb-6 mx-auto group-hover:shadow-neumorphic-ultra transition-all duration-300`}>
                      <SafeIcon icon={stat.icon} className="text-white text-2xl" />
                    </div>
                    
                    <motion.div
                      className="text-4xl font-black text-gray-800 mb-2"
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                    >
                      {stat.value}
                    </motion.div>
                    
                    <div className="text-gray-600 font-semibold text-lg">{stat.label}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Revolutionary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
            className="mt-20"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 animate-pulse"></div>
              
              <div className="relative bg-white/20 backdrop-blur-xl rounded-3xl p-8 shadow-neumorphic-ultra border border-white/30">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  Enter the Quantum Research Dimension
                </h3>
                <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                  Join the revolution. Transform your research workflow with AI that thinks beyond human limitations.
                </p>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-4 bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 text-white rounded-2xl shadow-neumorphic-deep hover:shadow-neumorphic-ultra transition-all duration-300 font-bold text-xl"
                >
                  START QUANTUM RESEARCH
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;