import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiPlus, FiSearch, FiFilter, FiDownload, FiShare2, FiEdit3, FiTrash2, FiFolder, FiBookmark, FiFileText } = FiIcons;

const References = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const references = [
    {
      id: 1,
      title: 'Machine Learning Applications in Healthcare: A Comprehensive Review',
      authors: ['Smith, J.', 'Johnson, A.', 'Brown, M.'],
      journal: 'Nature Medicine',
      year: 2024,
      type: 'article',
      folder: 'AI in Healthcare',
      tags: ['machine learning', 'healthcare', 'review'],
      notes: 'Excellent overview of ML applications. Key findings on diagnostic accuracy improvements.',
      citation: 'Smith, J., Johnson, A., & Brown, M. (2024). Machine Learning Applications in Healthcare: A Comprehensive Review. Nature Medicine, 30(4), 456-472.',
      doi: '10.1038/s41591-024-01234-5'
    },
    {
      id: 2,
      title: 'Quantum Computing and Cryptography: Future Implications',
      authors: ['Davis, R.', 'Wilson, K.'],
      journal: 'Science',
      year: 2024,
      type: 'article',
      folder: 'Quantum Computing',
      tags: ['quantum', 'cryptography', 'security'],
      notes: 'Important insights on post-quantum cryptography challenges and solutions.',
      citation: 'Davis, R., & Wilson, K. (2024). Quantum Computing and Cryptography: Future Implications. Science, 384(6692), 123-128.',
      doi: '10.1126/science.abcd1234'
    },
    {
      id: 3,
      title: 'Climate Change Impact on Global Biodiversity',
      authors: ['Martinez, L.', 'Thompson, P.', 'Lee, S.'],
      journal: 'Environmental Science & Policy',
      year: 2023,
      type: 'article',
      folder: 'Environmental Studies',
      tags: ['climate change', 'biodiversity', 'conservation'],
      notes: 'Comprehensive meta-analysis with policy recommendations.',
      citation: 'Martinez, L., Thompson, P., & Lee, S. (2023). Climate Change Impact on Global Biodiversity. Environmental Science & Policy, 142, 234-245.',
      doi: '10.1016/j.envsci.2023.01.234'
    }
  ];

  const folders = [
    { name: 'AI in Healthcare', count: 12, color: 'from-blue-500 to-cyan-500' },
    { name: 'Quantum Computing', count: 8, color: 'from-purple-500 to-pink-500' },
    { name: 'Environmental Studies', count: 15, color: 'from-green-500 to-emerald-500' },
    { name: 'Machine Learning', count: 23, color: 'from-orange-500 to-red-500' }
  ];

  const tabs = [
    { id: 'all', label: 'All References', count: references.length },
    { id: 'articles', label: 'Articles', count: references.filter(r => r.type === 'article').length },
    { id: 'books', label: 'Books', count: 0 },
    { id: 'reports', label: 'Reports', count: 0 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-neumorphic-ultra border border-white/20">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-purple-600/20 rounded-3xl blur-xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-primary-600 to-purple-600 mb-2">
                    Reference Manager
                  </h1>
                  <p className="text-xl text-gray-700 font-medium">Organize and manage your research references</p>
                </div>
                <div className="flex items-center space-x-4">
                  <button className="px-6 py-3 bg-gradient-to-r from-primary-500 to-purple-600 text-white rounded-2xl shadow-neumorphic-deep hover:shadow-neumorphic-ultra transition-all duration-300 flex items-center space-x-2 font-bold">
                    <SafeIcon icon={FiPlus} className="text-lg" />
                    <span>Add Reference</span>
                  </button>
                  <button className="px-6 py-3 bg-white/50 backdrop-blur-lg text-gray-700 rounded-2xl shadow-neumorphic-medium hover:shadow-neumorphic-deep transition-all duration-300 flex items-center space-x-2 font-bold">
                    <SafeIcon icon={FiDownload} className="text-lg" />
                    <span>Export</span>
                  </button>
                </div>
              </div>

              {/* Search and Filters */}
              <div className="flex items-center space-x-4">
                <div className="flex-1 relative">
                  <SafeIcon icon={FiSearch} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search references..."
                    className="w-full pl-12 pr-4 py-3 bg-white/50 backdrop-blur-lg rounded-2xl border border-white/30 outline-none text-gray-800 placeholder-gray-500 font-medium shadow-neumorphic-sm"
                  />
                </div>
                <button className="px-6 py-3 bg-white/50 backdrop-blur-lg text-gray-700 rounded-2xl hover:bg-white/70 transition-all duration-300 flex items-center space-x-2 shadow-neumorphic-sm font-bold">
                  <SafeIcon icon={FiFilter} className="text-lg" />
                  <span>Filter</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-1"
          >
            {/* Folders */}
            <div className="relative bg-white/20 backdrop-blur-xl rounded-3xl p-6 mb-6 shadow-neumorphic-ultra border border-white/30">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl"></div>
              
              <div className="relative z-10">
                <h3 className="text-xl font-black text-gray-800 mb-6 flex items-center space-x-2">
                  <SafeIcon icon={FiFolder} className="text-primary-500" />
                  <span>Folders</span>
                </h3>
                
                <div className="space-y-3">
                  {folders.map((folder, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-3 rounded-xl hover:bg-white/50 cursor-pointer transition-all duration-300 group"
                    >
                      <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${folder.color}`}></div>
                      <div className="flex-1">
                        <div className="font-bold text-gray-800 group-hover:text-primary-600 transition-colors duration-300">
                          {folder.name}
                        </div>
                        <div className="text-sm text-gray-500">{folder.count} items</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="relative bg-white/20 backdrop-blur-xl rounded-3xl p-6 shadow-neumorphic-ultra border border-white/30">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-3xl"></div>
              
              <div className="relative z-10">
                <h3 className="text-xl font-black text-gray-800 mb-6">Quick Actions</h3>
                
                <div className="space-y-3">
                  <button className="w-full flex items-center space-x-3 p-3 rounded-xl bg-white/50 hover:bg-primary-50 hover:text-primary-600 transition-all duration-300 font-bold">
                    <SafeIcon icon={FiFileText} className="text-lg" />
                    <span>Import from Zotero</span>
                  </button>
                  
                  <button className="w-full flex items-center space-x-3 p-3 rounded-xl bg-white/50 hover:bg-primary-50 hover:text-primary-600 transition-all duration-300 font-bold">
                    <SafeIcon icon={FiBookmark} className="text-lg" />
                    <span>Import from DOI</span>
                  </button>
                  
                  <button className="w-full flex items-center space-x-3 p-3 rounded-xl bg-white/50 hover:bg-primary-50 hover:text-primary-600 transition-all duration-300 font-bold">
                    <SafeIcon icon={FiShare2} className="text-lg" />
                    <span>Share Library</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-3"
          >
            {/* Tabs */}
            <div className="relative bg-white/20 backdrop-blur-xl rounded-3xl p-3 mb-6 shadow-neumorphic-ultra border border-white/30">
              <div className="flex space-x-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-2xl transition-all duration-300 font-bold ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-primary-500 to-purple-600 text-white shadow-neumorphic-deep'
                        : 'text-gray-600 hover:text-primary-500 hover:bg-white/50'
                    }`}
                  >
                    <span>{tab.label}</span>
                    <span className="text-sm opacity-75">({tab.count})</span>
                  </button>
                ))}
              </div>
            </div>

            {/* References List */}
            <div className="space-y-6">
              {references.map((ref, index) => (
                <div key={ref.id} className="relative group">
                  <div className="relative bg-white/30 backdrop-blur-xl rounded-3xl shadow-neumorphic-ultra border border-white/40 hover:shadow-neumorphic-deep transition-all duration-300">
                    <div className="relative z-10 p-8">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-black text-gray-800 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                            {ref.title}
                          </h3>
                          <p className="text-gray-600 mb-2 font-medium">
                            {ref.authors.join(', ')}
                          </p>
                          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                            <span className="font-bold">{ref.journal}</span>
                            <span>•</span>
                            <span>{ref.year}</span>
                            <span>•</span>
                            <span className="px-2 py-1 bg-primary-50 text-primary-600 rounded-full font-bold">
                              {ref.folder}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button className="p-2 rounded-xl bg-white/50 hover:bg-primary-50 hover:text-primary-600 transition-all duration-300 shadow-neumorphic-sm">
                            <SafeIcon icon={FiEdit3} className="text-lg" />
                          </button>
                          <button className="p-2 rounded-xl bg-white/50 hover:bg-primary-50 hover:text-primary-600 transition-all duration-300 shadow-neumorphic-sm">
                            <SafeIcon icon={FiDownload} className="text-lg" />
                          </button>
                          <button className="p-2 rounded-xl bg-white/50 hover:bg-primary-50 hover:text-primary-600 transition-all duration-300 shadow-neumorphic-sm">
                            <SafeIcon icon={FiShare2} className="text-lg" />
                          </button>
                          <button className="p-2 rounded-xl bg-white/50 hover:bg-red-50 hover:text-red-600 transition-all duration-300 shadow-neumorphic-sm">
                            <SafeIcon icon={FiTrash2} className="text-lg" />
                          </button>
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-black text-gray-800 mb-2">Citation</h4>
                        <p className="text-gray-700 bg-white/50 rounded-xl p-3 text-sm font-mono">
                          {ref.citation}
                        </p>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-black text-gray-800 mb-2">Notes</h4>
                        <p className="text-gray-700 font-medium">
                          {ref.notes}
                        </p>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {ref.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-bold"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                        <div className="text-sm text-gray-500 font-bold">
                          DOI: {ref.doi}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default References;