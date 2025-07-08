import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiSearch, FiFilter, FiDownload, FiBookmark, FiExternalLink, FiClock, FiTrendingUp } = FiIcons;

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const [filters, setFilters] = useState({
    year: '',
    journal: '',
    author: '',
    citations: ''
  });

  const mockResults = [
    {
      id: 1,
      title: 'Machine Learning Applications in Healthcare: A Systematic Review and Meta-Analysis',
      authors: ['Smith, J.', 'Johnson, A.', 'Brown, M.'],
      journal: 'Nature Medicine',
      year: 2024,
      citations: 156,
      abstract: 'This comprehensive review examines the current state of machine learning applications in healthcare, analyzing over 500 studies published between 2020-2024. We found significant improvements in diagnostic accuracy across multiple medical domains.',
      keywords: ['machine learning', 'healthcare', 'diagnostics', 'AI'],
      doi: '10.1038/s41591-024-01234-5',
      relevanceScore: 0.95
    },
    {
      id: 2,
      title: 'Quantum Computing and Cryptography: Implications for Future Security',
      authors: ['Davis, R.', 'Wilson, K.'],
      journal: 'Science',
      year: 2024,
      citations: 89,
      abstract: 'As quantum computing advances, traditional cryptographic methods face unprecedented challenges. This paper explores post-quantum cryptography solutions and their implementation strategies.',
      keywords: ['quantum computing', 'cryptography', 'security', 'post-quantum'],
      doi: '10.1126/science.abcd1234',
      relevanceScore: 0.87
    },
    {
      id: 3,
      title: 'Climate Change Impact on Global Biodiversity: A Meta-Analysis of Recent Studies',
      authors: ['Martinez, L.', 'Thompson, P.', 'Lee, S.'],
      journal: 'Environmental Science & Policy',
      year: 2023,
      citations: 234,
      abstract: 'Our meta-analysis of 300+ studies reveals accelerating biodiversity loss across all major ecosystems. We identify key intervention strategies and policy recommendations.',
      keywords: ['climate change', 'biodiversity', 'conservation', 'meta-analysis'],
      doi: '10.1016/j.envsci.2023.01.234',
      relevanceScore: 0.82
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="bg-white rounded-2xl shadow-neumorphic p-6">
            <div className="flex items-center space-x-4">
              <div className="flex-1 relative">
                <SafeIcon icon={FiSearch} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search research papers..."
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 rounded-xl border-none outline-none text-gray-800 placeholder-gray-500"
                />
              </div>
              <button className="px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl shadow-neumorphic hover:shadow-neumorphic-inset transition-all duration-300">
                Search
              </button>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-2xl shadow-neumorphic p-6 sticky top-24">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center space-x-2">
                <SafeIcon icon={FiFilter} className="text-primary-500" />
                <span>Filters</span>
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Publication Year</label>
                  <select className="w-full p-3 bg-gray-50 rounded-xl border-none outline-none text-gray-800">
                    <option>Any year</option>
                    <option>2024</option>
                    <option>2023</option>
                    <option>2022</option>
                    <option>2021</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Journal</label>
                  <select className="w-full p-3 bg-gray-50 rounded-xl border-none outline-none text-gray-800">
                    <option>Any journal</option>
                    <option>Nature</option>
                    <option>Science</option>
                    <option>Cell</option>
                    <option>PNAS</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Citations</label>
                  <select className="w-full p-3 bg-gray-50 rounded-xl border-none outline-none text-gray-800">
                    <option>Any citations</option>
                    <option>100+</option>
                    <option>50+</option>
                    <option>10+</option>
                  </select>
                </div>
                
                <button className="w-full py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl shadow-neumorphic hover:shadow-neumorphic-inset transition-all duration-300">
                  Apply Filters
                </button>
              </div>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                Search Results for "{query}"
              </h2>
              <p className="text-gray-600 mt-2">
                Found {mockResults.length} papers • Analyzed in 0.23 seconds
              </p>
            </div>

            <div className="space-y-6">
              {mockResults.map((paper, index) => (
                <motion.div
                  key={paper.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 * index }}
                  className="relative bg-white rounded-2xl shadow-neumorphic hover:shadow-neumorphic-lg transition-all duration-300 group"
                >
                  {/* Encrypted Text Grain Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 overflow-hidden rounded-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-700 animate-grain">
                      <div className="text-xs font-mono leading-3 p-2 text-white/30">
                        {Array.from({ length: 20 }, (_, i) => (
                          <div key={i}>
                            {Math.random().toString(36).substring(2, 15)}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="relative z-10 p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <Link
                          to={`/paper/${paper.id}`}
                          className="text-xl font-bold text-gray-800 hover:text-primary-600 transition-colors duration-300 block mb-2"
                        >
                          {paper.title}
                        </Link>
                        <p className="text-gray-600 mb-2">
                          {paper.authors.join(', ')}
                        </p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                          <span>{paper.journal}</span>
                          <span>•</span>
                          <span>{paper.year}</span>
                          <span>•</span>
                          <span className="flex items-center space-x-1">
                            <SafeIcon icon={FiTrendingUp} className="text-xs" />
                            <span>{paper.citations} citations</span>
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="p-2 rounded-lg bg-gray-50 hover:bg-primary-50 hover:text-primary-600 transition-all duration-300">
                          <SafeIcon icon={FiBookmark} className="text-lg" />
                        </button>
                        <button className="p-2 rounded-lg bg-gray-50 hover:bg-primary-50 hover:text-primary-600 transition-all duration-300">
                          <SafeIcon icon={FiDownload} className="text-lg" />
                        </button>
                        <button className="p-2 rounded-lg bg-gray-50 hover:bg-primary-50 hover:text-primary-600 transition-all duration-300">
                          <SafeIcon icon={FiExternalLink} className="text-lg" />
                        </button>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {paper.abstract}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {paper.keywords.map((keyword, keyIndex) => (
                          <span
                            key={keyIndex}
                            className="px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-sm font-medium"
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <span>Relevance:</span>
                        <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-primary-500 to-primary-600"
                            style={{ width: `${paper.relevanceScore * 100}%` }}
                          ></div>
                        </div>
                        <span>{Math.round(paper.relevanceScore * 100)}%</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Load More */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-center mt-12"
            >
              <button className="px-8 py-4 bg-white text-gray-700 rounded-xl shadow-neumorphic hover:shadow-neumorphic-inset transition-all duration-300 font-medium">
                Load More Results
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;