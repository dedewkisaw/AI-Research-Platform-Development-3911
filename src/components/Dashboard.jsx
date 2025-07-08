import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiSearch, FiBookOpen, FiEdit3, FiZap, FiSend, FiMessageCircle, FiCpu, FiLayers, FiBookmark, FiTrendingUp } = FiIcons;

const Dashboard = () => {
  const [chatInput, setChatInput] = useState('');
  const [chatMessages, setChatMessages] = useState([
    {
      type: 'ai',
      content: 'Welcome to your Quantum Research Dashboard! I\'m your AI research assistant. What would you like to explore today?',
      timestamp: new Date().toLocaleTimeString()
    }
  ]);
  const navigate = useNavigate();

  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (chatInput.trim()) {
      // Add user message
      setChatMessages(prev => [...prev, {
        type: 'user',
        content: chatInput,
        timestamp: new Date().toLocaleTimeString()
      }]);

      // Simulate AI response
      setTimeout(() => {
        setChatMessages(prev => [...prev, {
          type: 'ai',
          content: `I'll help you research "${chatInput}". Let me analyze the latest papers and provide comprehensive insights. Would you like me to search for specific papers or generate a literature review?`,
          timestamp: new Date().toLocaleTimeString()
        }]);
      }, 1000);

      setChatInput('');
    }
  };

  const quickActions = [
    {
      icon: FiSearch,
      title: 'Search Papers',
      description: 'Find relevant research papers',
      action: () => navigate('/search'),
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FiBookmark,
      title: 'My References',
      description: 'Manage saved papers',
      action: () => navigate('/references'),
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: FiEdit3,
      title: 'AI Writing',
      description: 'Generate research content',
      action: () => {},
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: FiZap,
      title: 'Quick Insights',
      description: 'Get instant analysis',
      action: () => {},
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const stats = [
    { label: 'Papers Analyzed', value: '1,247', icon: FiBookOpen },
    { label: 'Insights Generated', value: '89', icon: FiZap },
    { label: 'Citations Found', value: '2,156', icon: FiTrendingUp },
    { label: 'Active Projects', value: '12', icon: FiLayers }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-neumorphic-ultra border border-white/20">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl"></div>
            
            <div className="relative z-10">
              <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-primary-600 to-purple-600 mb-4">
                QUANTUM DASHBOARD
              </h1>
              <p className="text-xl text-gray-700 font-medium">
                Your AI research command center - Chat with our quantum AI to explore infinite research possibilities
              </p>
            </div>
          </div>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        >
          {stats.map((stat, index) => (
            <div key={index} className="relative bg-white/30 backdrop-blur-xl rounded-2xl p-4 shadow-neumorphic-medium border border-white/40">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-purple-600 rounded-xl shadow-neumorphic-sm flex items-center justify-center">
                  <SafeIcon icon={stat.icon} className="text-white text-lg" />
                </div>
                <div>
                  <div className="text-2xl font-black text-gray-800">{stat.value}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Chat Interface */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="relative bg-white/20 backdrop-blur-xl rounded-3xl shadow-neumorphic-ultra border border-white/30 h-[600px] flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl"></div>
              
              <div className="relative z-10 flex-1 flex flex-col">
                {/* Chat Header */}
                <div className="p-6 border-b border-white/20">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-purple-600 rounded-2xl shadow-neumorphic-deep flex items-center justify-center">
                      <SafeIcon icon={FiCpu} className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-gray-800">Quantum AI Assistant</h3>
                      <p className="text-gray-600 font-medium">Research anything, get instant insights</p>
                    </div>
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="flex-1 p-6 overflow-y-auto space-y-4">
                  {chatMessages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                        message.type === 'user' 
                          ? 'bg-gradient-to-r from-primary-500 to-purple-600 text-white shadow-neumorphic-deep' 
                          : 'bg-white/50 text-gray-800 shadow-neumorphic-medium'
                      }`}>
                        <p className="font-medium">{message.content}</p>
                        <p className={`text-xs mt-1 ${message.type === 'user' ? 'text-primary-100' : 'text-gray-500'}`}>
                          {message.timestamp}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chat Input */}
                <div className="p-6 border-t border-white/20">
                  <form onSubmit={handleChatSubmit} className="flex space-x-4">
                    <div className="flex-1 relative">
                      <input
                        type="text"
                        value={chatInput}
                        onChange={(e) => setChatInput(e.target.value)}
                        placeholder="Ask about any research topic..."
                        className="w-full px-6 py-4 bg-white/50 backdrop-blur-lg rounded-2xl border border-white/30 outline-none text-gray-800 placeholder-gray-500 font-medium shadow-neumorphic-sm"
                      />
                    </div>
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-4 bg-gradient-to-r from-primary-500 to-purple-600 text-white rounded-2xl shadow-neumorphic-deep hover:shadow-neumorphic-ultra transition-all duration-300 flex items-center space-x-2"
                    >
                      <SafeIcon icon={FiSend} className="text-lg" />
                    </motion.button>
                  </form>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="space-y-6"
          >
            <div className="relative bg-white/20 backdrop-blur-xl rounded-3xl p-6 shadow-neumorphic-ultra border border-white/30">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-black text-gray-800 mb-6">Quick Actions</h3>
                
                <div className="space-y-4">
                  {quickActions.map((action, index) => (
                    <button
                      key={index}
                      onClick={action.action}
                      className="w-full group relative hover:scale-[1.02] transition-transform duration-200"
                    >
                      <div className="relative flex items-center space-x-4 p-4 rounded-2xl bg-white/50 shadow-neumorphic-medium hover:shadow-neumorphic-deep transition-all duration-300">
                        <div className={`w-12 h-12 bg-gradient-to-r ${action.gradient} rounded-xl shadow-neumorphic-sm flex items-center justify-center`}>
                          <SafeIcon icon={action.icon} className="text-white text-xl" />
                        </div>
                        <div className="flex-1 text-left">
                          <div className="font-bold text-gray-800 group-hover:text-primary-600 transition-colors duration-300">
                            {action.title}
                          </div>
                          <div className="text-sm text-gray-600">{action.description}</div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative bg-white/20 backdrop-blur-xl rounded-3xl p-6 shadow-neumorphic-ultra border border-white/30">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-3xl"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-black text-gray-800 mb-6">Recent Activity</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <div>
                      <p className="text-sm font-bold text-gray-800">AI analysis completed</p>
                      <p className="text-xs text-gray-500">Processed 1,247 papers on quantum computing</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <div>
                      <p className="text-sm font-bold text-gray-800">New insights generated</p>
                      <p className="text-xs text-gray-500">Machine learning breakthrough detected</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div>
                      <p className="text-sm font-bold text-gray-800">References updated</p>
                      <p className="text-xs text-gray-500">12 new papers added to library</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;