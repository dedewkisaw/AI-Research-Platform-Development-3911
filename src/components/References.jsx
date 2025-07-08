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
    { name: 'AI in Healthcare', count: 12, color: 'bg-blue-500' },
    { name: 'Quantum Computing', count: 8, color: 'bg-purple-500' },
    { name: 'Environmental Studies', count: 15, color: 'bg-green-500' },
    { name: 'Machine Learning', count: 23, color: 'bg-orange-500' }
  ];

  const tabs = [
    { id: 'all', label: 'All References', count: references.length },
    { id: 'articles', label: 'Articles', count: references.filter(r => r.type === 'article').length },
    { id: 'books', label: 'Books', count: 0 },
    { id: 'reports', label: 'Reports', count: 0 }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-2">Reference Manager</h1>
              <p className="text-xl text-gray-600">Organize and manage your research references</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl shadow-neumorphic hover:shadow-neumorphic-inset transition-all duration-300 flex items-center space-x-2">
                <SafeIcon icon={FiPlus} className="text-lg" />
                <span>Add Reference</span>
              </button>
              <button className="px-6 py-3 bg-white text-gray-700 rounded-xl shadow-neumorphic hover:shadow-neumorphic-inset transition-all duration-300 flex items-center space-x-2">
                <SafeIcon icon={FiDownload} className="text-lg" />
                <span>Export</span>
              </button>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="bg-white rounded-2xl shadow-neumorphic p-6">
            <div className="flex items-center space-x-4">
              <div className="flex-1 relative">
                <SafeIcon icon={FiSearch} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search references..."
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 rounded-xl border-none outline-none text-gray-800 placeholder-gray-500"
                />
              </div>
              <button className="px-6 py-3 bg-gray-50 text-gray-700 rounded-xl hover:bg-gray-100 transition-all duration-300 flex items-center space-x-2">
                <SafeIcon icon={FiFilter} className="text-lg" />
                <span>Filter</span>
              </button>
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
            <div className="bg-white rounded-2xl shadow-neumorphic p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center space-x-2">
                <SafeIcon icon={FiFolder} className="text-primary-500" />
                <span>Folders</span>
              </h3>
              <div className="space-y-3">
                {folders.map((folder, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-all duration-300">
                    <div className={`w-3 h-3 rounded-full ${folder.color}`}></div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-800">{folder.name}</div>
                      <div className="text-sm text-gray-500">{folder.count} items</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl shadow-neumorphic p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center space-x-3 p-3 rounded-lg bg-gray-50 hover:bg-primary-50 hover:text-primary-600 transition-all duration-300">
                  <SafeIcon icon={FiFileText} className="text-lg" />
                  <span>Import from Zotero</span>
                </button>
                <button className="w-full flex items-center space-x-3 p-3 rounded-lg bg-gray-50 hover:bg-primary-50 hover:text-primary-600 transition-all duration-300">
                  <SafeIcon icon={FiBookmark} className="text-lg" />
                  <span>Import from DOI</span>
                </button>
                <button className="w-full flex items-center space-x-3 p-3 rounded-lg bg-gray-50 hover:bg-primary-50 hover:text-primary-600 transition-all duration-300">
                  <SafeIcon icon={FiShare2} className="text-lg" />
                  <span>Share Library</span>
                </button>
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
            <div className="bg-white rounded-2xl shadow-neumorphic p-2 mb-6">
              <div className="flex space-x-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-primary-500 text-white shadow-neumorphic-inset'
                        : 'text-gray-600 hover:text-primary-500 hover:bg-gray-50'
                    }`}
                  >
                    <span className="font-medium">{tab.label}</span>
                    <span className="text-sm opacity-75">({tab.count})</span>
                  </button>
                ))}
              </div>
            </div>

            {/* References List */}
            <div className="space-y-6">
              {references.map((ref, index) => (
                <motion.div
                  key={ref.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 * index }}
                  className="relative bg-white rounded-2xl shadow-neumorphic hover:shadow-neumorphic-lg transition-all duration-300 group"
                >
                  {/* Encrypted Text Grain Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 overflow-hidden rounded-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-700 animate-grain">
                      <div className="text-xs font-mono leading-3 p-2 text-white/30">
                        {Array.from({ length: 15 }, (_, i) => (
                          <div key={i}>
                            {Math.random().toString(36).substring(2, 12)}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="relative z-10 p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                          {ref.title}
                        </h3>
                        <p className="text-gray-600 mb-2">
                          {ref.authors.join(', ')}
                        </p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                          <span>{ref.journal}</span>
                          <span>•</span>
                          <span>{ref.year}</span>
                          <span>•</span>
                          <span className="px-2 py-1 bg-primary-50 text-primary-600 rounded-full">
                            {ref.folder}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="p-2 rounded-lg bg-gray-50 hover:bg-primary-50 hover:text-primary-600 transition-all duration-300">
                          <SafeIcon icon={FiEdit3} className="text-lg" />
                        </button>
                        <button className="p-2 rounded-lg bg-gray-50 hover:bg-primary-50 hover:text-primary-600 transition-all duration-300">
                          <SafeIcon icon={FiDownload} className="text-lg" />
                        </button>
                        <button className="p-2 rounded-lg bg-gray-50 hover:bg-primary-50 hover:text-primary-600 transition-all duration-300">
                          <SafeIcon icon={FiShare2} className="text-lg" />
                        </button>
                        <button className="p-2 rounded-lg bg-gray-50 hover:bg-red-50 hover:text-red-600 transition-all duration-300">
                          <SafeIcon icon={FiTrash2} className="text-lg" />
                        </button>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Citation</h4>
                      <p className="text-gray-700 bg-gray-50 rounded-lg p-3 text-sm font-mono">
                        {ref.citation}
                      </p>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Notes</h4>
                      <p className="text-gray-700">
                        {ref.notes}
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {ref.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <div className="text-sm text-gray-500">
                        DOI: {ref.doi}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default References;