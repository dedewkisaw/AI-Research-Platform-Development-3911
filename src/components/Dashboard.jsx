import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiSearch, FiBookOpen, FiFileText, FiTrendingUp, FiClock, FiBookmark, FiUsers, FiEdit3, FiZap, FiCpu, FiLayers } = FiIcons;

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const recentPapers = [
    {
      title: 'Quantum Machine Learning: Revolutionary Breakthrough in Neural Networks',
      authors: 'Dr. Sarah Chen, Prof. Michael Rodriguez',
      journal: 'Nature Quantum Information',
      year: '2024',
      citations: 1247,
      status: 'analyzing',
      progress: 85
    },
    {
      title: 'Bioengineering Immortality: CRISPR 3.0 and Cellular Regeneration',
      authors: 'Dr. Elena Vasquez, Dr. James Liu',
      journal: 'Cell Regeneration Today',
      year: '2024',
      citations: 892,
      status: 'completed',
      progress: 100
    },
    {
      title: 'Fusion Energy Breakthrough: Sustainable Power for Humanity',
      authors: 'Dr. Ahmed Hassan, Dr. Lisa Thompson',
      journal: 'Energy Revolution',
      year: '2024',
      citations: 2156,
      status: 'bookmarked',
      progress: 0
    }
  ];

  const stats = [
    { 
      icon: FiBookOpen, 
      label: 'Quantum Papers', 
      value: '1,247', 
      change: '+342%', 
      color: 'from-blue-500 to-cyan-500',
      glow: 'shadow-blue-500/50'
    },
    { 
      icon: FiZap, 
      label: 'AI Insights', 
      value: '15.7K', 
      change: '+1,250%', 
      color: 'from-purple-500 to-pink-500',
      glow: 'shadow-purple-500/50'
    },
    { 
      icon: FiCpu, 
      label: 'Neural Score', 
      value: '9.8/10', 
      change: '+89%', 
      color: 'from-green-500 to-emerald-500',
      glow: 'shadow-green-500/50'
    },
    { 
      icon: FiLayers, 
      label: 'Dimensions', 
      value: '∞', 
      change: '∞%', 
      color: 'from-orange-500 to-red-500',
      glow: 'shadow-orange-500/50'
    }
  ];

  const tabs = [
    { id: 'overview', label: 'Quantum Overview', icon: FiTrendingUp },
    { id: 'papers', label: 'Neural Papers', icon: FiBookOpen },
    { id: 'writing', label: 'AI Writing', icon: FiEdit3 },
    { id: 'collaboration', label: 'Hive Mind', icon: FiUsers }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 pt-8">
      {/* Floating Orbs Background */}
      <div className="fixed inset-0 pointer-events-none">
        {Array.from({ length: 8 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-20"
            style={{
              width: `${Math.random() * 200 + 100}px`,
              height: `${Math.random() * 200 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `conic-gradient(from ${i * 45}deg, #3b82f6, #8b5cf6, #10b981, #f59e0b)`,
              filter: 'blur(30px)',
            }}
            animate={{
              scale: [1, 1.5, 1],
              rotate: [0, 360],
              opacity: [0.1, 0.3, 0.1],
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
        {/* Revolutionary Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-12"
        >
          <div className="relative bg-white/20 backdrop-blur-xl rounded-3xl p-8 shadow-neumorphic-ultra border border-white/30">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl"></div>
            
            <div className="relative z-10">
              <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-primary-600 to-purple-600 mb-4">
                QUANTUM DASHBOARD
              </h1>
              <p className="text-xl text-gray-700 font-medium">
                Your neural research command center - where AI meets infinite possibilities
              </p>
            </div>
          </div>
        </motion.div>

        {/* Revolutionary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 10,
                z: 50 
              }}
              className="relative group"
            >
              {/* Holographic Glow */}
              <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition-all duration-500 ${stat.glow}`}></div>
              
              {/* Main Card */}
              <div className="relative bg-white/30 backdrop-blur-xl rounded-3xl p-8 shadow-neumorphic-ultra border border-white/40">
                {/* Quantum Grain Effect */}
                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500 overflow-hidden rounded-3xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-700 animate-grain-quantum">
                    <div className="text-xs font-mono leading-3 p-2 text-white/50">
                      {Array.from({ length: 12 }, (_, i) => (
                        <div key={i}>
                          {Math.random().toString(36).substring(2, 10)}
                          {Math.random().toString(16).substring(2, 8)}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl shadow-neumorphic-deep flex items-center justify-center mb-6 group-hover:shadow-neumorphic-ultra transition-all duration-300`}>
                    <SafeIcon icon={stat.icon} className="text-white text-2xl" />
                  </div>
                  
                  <motion.div
                    className="text-4xl font-black text-gray-800 mb-2"
                    animate={{
                      scale: [1, 1.1, 1],
                      textShadow: [
                        '0 0 0px rgba(59, 130, 246, 0)',
                        '0 0 20px rgba(59, 130, 246, 0.5)',
                        '0 0 0px rgba(59, 130, 246, 0)'
                      ]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                  >
                    {stat.value}
                  </motion.div>
                  
                  <div className="text-gray-600 font-semibold mb-2">{stat.label}</div>
                  <div className="text-green-500 font-bold text-lg">{stat.change}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Revolutionary Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mb-12"
        >
          <div className="relative bg-white/20 backdrop-blur-xl rounded-3xl p-3 shadow-neumorphic-ultra border border-white/30">
            <div className="flex space-x-3">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center space-x-3 px-8 py-4 rounded-2xl transition-all duration-300 font-bold ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-primary-500 to-purple-600 text-white shadow-neumorphic-deep'
                      : 'text-gray-600 hover:text-primary-500 hover:bg-white/50'
                  }`}
                >
                  <SafeIcon icon={tab.icon} className="text-xl" />
                  <span>{tab.label}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Revolutionary Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* Recent Papers */}
          <div className="lg:col-span-2">
            <div className="relative bg-white/20 backdrop-blur-xl rounded-3xl p-8 shadow-neumorphic-ultra border border-white/30">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl"></div>
              
              <div className="relative z-10">
                <h3 className="text-3xl font-black text-gray-800 mb-8">Quantum Research Papers</h3>
                
                <div className="space-y-6">
                  {recentPapers.map((paper, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02, rotateX: 5 }}
                      className="relative group"
                    >
                      {/* Holographic Border */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Main Paper Card */}
                      <div className="relative bg-white/40 backdrop-blur-lg rounded-2xl p-6 shadow-neumorphic-medium border border-white/50">
                        {/* Quantum Grain */}
                        <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500 overflow-hidden rounded-2xl">
                          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-700 animate-grain-quantum">
                            <div className="text-xs font-mono leading-3 p-2 text-white/40">
                              {Array.from({ length: 8 }, (_, i) => (
                                <div key={i}>
                                  {Math.random().toString(36).substring(2, 15)}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="relative z-10">
                          <div className="flex items-start justify-between mb-4">
                            <h4 className="text-xl font-bold text-gray-800 group-hover:text-primary-600 transition-colors duration-300 flex-1">
                              {paper.title}
                            </h4>
                            <div className={`px-4 py-2 rounded-full text-sm font-bold ${
                              paper.status === 'analyzing' ? 'bg-blue-100 text-blue-600' :
                              paper.status === 'bookmarked' ? 'bg-yellow-100 text-yellow-600' :
                              'bg-green-100 text-green-600'
                            }`}>
                              {paper.status}
                            </div>
                          </div>
                          
                          <p className="text-gray-600 mb-3 font-medium">{paper.authors}</p>
                          
                          <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                            <span className="font-semibold">{paper.journal} • {paper.year}</span>
                            <span className="font-bold text-primary-600">{paper.citations} citations</span>
                          </div>

                          {/* Progress Bar */}
                          <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                            <div 
                              className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-500"
                              style={{ width: `${paper.progress}%` }}
                            ></div>
                          </div>
                          <div className="text-xs text-gray-500 font-medium">
                            Analysis: {paper.progress}% complete
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Quantum Actions */}
          <div className="space-y-8">
            <div className="relative bg-white/20 backdrop-blur-xl rounded-3xl p-6 shadow-neumorphic-ultra border border-white/30">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-black text-gray-800 mb-6">Quantum Actions</h3>
                
                <div className="space-y-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full flex items-center space-x-4 p-4 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-neumorphic-deep hover:shadow-neumorphic-ultra transition-all duration-300"
                  >
                    <SafeIcon icon={FiSearch} className="text-2xl" />
                    <span className="font-bold text-lg">Neural Search</span>
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full flex items-center space-x-4 p-4 rounded-2xl bg-white/50 text-gray-700 shadow-neumorphic-medium hover:shadow-neumorphic-deep transition-all duration-300"
                  >
                    <SafeIcon icon={FiEdit3} className="text-2xl" />
                    <span className="font-bold text-lg">AI Writing</span>
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full flex items-center space-x-4 p-4 rounded-2xl bg-white/50 text-gray-700 shadow-neumorphic-medium hover:shadow-neumorphic-deep transition-all duration-300"
                  >
                    <SafeIcon icon={FiZap} className="text-2xl" />
                    <span className="font-bold text-lg">Quantum Sync</span>
                  </motion.button>
                </div>
              </div>
            </div>

            <div className="relative bg-white/20 backdrop-blur-xl rounded-3xl p-6 shadow-neumorphic-ultra border border-white/30">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-3xl"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-black text-gray-800 mb-6">Neural Activity</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                    <div>
                      <p className="text-sm font-bold text-gray-800">Quantum analysis complete</p>
                      <p className="text-xs text-gray-500">Neural network processed 1.2M papers</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                    <div>
                      <p className="text-sm font-bold text-gray-800">AI insight generated</p>
                      <p className="text-xs text-gray-500">Breakthrough pattern detected</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <div>
                      <p className="text-sm font-bold text-gray-800">Dimension synchronized</p>
                      <p className="text-xs text-gray-500">Reality matrix updated</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;