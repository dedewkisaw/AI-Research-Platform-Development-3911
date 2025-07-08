import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiSearch, FiFilter, FiDownload, FiBookmark, FiExternalLink, FiClock, FiTrendingUp, FiX } = FiIcons;

const SearchResults = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const [filters, setFilters] = useState({
    year: '',
    journal: '',
    author: '',
    citations: ''
  });
  const [bookmarkedPapers, setBookmarkedPapers] = useState(new Set());
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      setIsSearching(true);
      setSearchParams({ q: query });
      // Simulate search delay
      setTimeout(() => {
        setIsSearching(false);
      }, 1000);
    }
  };

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const handleApplyFilters = () => {
    // Apply filters logic here
    console.log('Applying filters:', filters);
  };

  const handleClearFilters = () => {
    setFilters({
      year: '',
      journal: '',
      author: '',
      citations: ''
    });
  };

  const handleBookmark = (paperId) => {
    setBookmarkedPapers(prev => {
      const newSet = new Set(prev);
      if (newSet.has(paperId)) {
        newSet.delete(paperId);
      } else {
        newSet.add(paperId);
      }
      return newSet;
    });
  };

  const handleDownload = (paper) => {
    // Simulate download
    alert(`Downloading: ${paper.title}`);
  };

  const handleExternalLink = (doi) => {
    window.open(`https://doi.org/${doi}`, '_blank');
  };

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
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="relative bg-white/20 backdrop-blur-xl rounded-3xl p-6 shadow-neumorphic-ultra border border-white/30">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-purple-600/20 rounded-3xl blur-xl"></div>
            <div className="relative z-10">
              <form onSubmit={handleSearch} className="flex items-center space-x-4">
                <div className="flex-1 relative">
                  <SafeIcon icon={FiSearch} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search research papers..."
                    className="w-full pl-12 pr-4 py-4 bg-white/50 backdrop-blur-lg rounded-2xl border border-white/30 outline-none text-gray-800 placeholder-gray-500 font-medium shadow-neumorphic-sm"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSearching}
                  className="px-8 py-4 bg-gradient-to-r from-primary-500 to-purple-600 text-white rounded-2xl shadow-neumorphic-deep hover:shadow-neumorphic-ultra transition-all duration-300 font-bold disabled:opacity-50"
                >
                  {isSearching ? 'Searching...' : 'Search'}
                </button>
              </form>
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
            <div className="relative bg-white/20 backdrop-blur-xl rounded-3xl p-6 shadow-neumorphic-ultra border border-white/30 sticky top-24">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-black text-gray-800 flex items-center space-x-2">
                    <SafeIcon icon={FiFilter} className="text-primary-500" />
                    <span>Filters</span>
                  </h3>
                  {(filters.year || filters.journal || filters.author || filters.citations) && (
                    <button
                      onClick={handleClearFilters}
                      className="text-gray-500 hover:text-red-500 transition-colors duration-300"
                    >
                      <SafeIcon icon={FiX} className="text-lg" />
                    </button>
                  )}
                </div>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Publication Year</label>
                    <select
                      value={filters.year}
                      onChange={(e) => handleFilterChange('year', e.target.value)}
                      className="w-full p-3 bg-white/50 backdrop-blur-lg rounded-xl border border-white/30 outline-none text-gray-800 shadow-neumorphic-sm"
                    >
                      <option value="">Any year</option>
                      <option value="2024">2024</option>
                      <option value="2023">2023</option>
                      <option value="2022">2022</option>
                      <option value="2021">2021</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Journal</label>
                    <select
                      value={filters.journal}
                      onChange={(e) => handleFilterChange('journal', e.target.value)}
                      className="w-full p-3 bg-white/50 backdrop-blur-lg rounded-xl border border-white/30 outline-none text-gray-800 shadow-neumorphic-sm"
                    >
                      <option value="">Any journal</option>
                      <option value="Nature">Nature</option>
                      <option value="Science">Science</option>
                      <option value="Cell">Cell</option>
                      <option value="PNAS">PNAS</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Citations</label>
                    <select
                      value={filters.citations}
                      onChange={(e) => handleFilterChange('citations', e.target.value)}
                      className="w-full p-3 bg-white/50 backdrop-blur-lg rounded-xl border border-white/30 outline-none text-gray-800 shadow-neumorphic-sm"
                    >
                      <option value="">Any citations</option>
                      <option value="100+">100+</option>
                      <option value="50+">50+</option>
                      <option value="10+">10+</option>
                    </select>
                  </div>

                  <button
                    onClick={handleApplyFilters}
                    className="w-full py-3 bg-gradient-to-r from-primary-500 to-purple-600 text-white rounded-xl shadow-neumorphic-deep hover:shadow-neumorphic-ultra transition-all duration-300 font-bold"
                  >
                    Apply Filters
                  </button>
                </div>
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
              <h2 className="text-2xl font-black text-gray-800">
                Search Results for "{query}"
              </h2>
              <p className="text-gray-600 mt-2 font-medium">
                Found {mockResults.length} papers • Analyzed in 0.23 seconds
              </p>
            </div>

            <div className="space-y-6">
              {mockResults.map((paper, index) => (
                <div key={paper.id} className="relative group">
                  <div className="relative bg-white/30 backdrop-blur-xl rounded-3xl shadow-neumorphic-ultra border border-white/40 hover:shadow-neumorphic-deep transition-all duration-300">
                    <div className="relative z-10 p-8">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <Link
                            to={`/paper/${paper.id}`}
                            className="text-xl font-black text-gray-800 hover:text-primary-600 transition-colors duration-300 block mb-2"
                          >
                            {paper.title}
                          </Link>
                          <p className="text-gray-600 mb-2 font-medium">
                            {paper.authors.join(', ')}
                          </p>
                          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                            <span className="font-bold">{paper.journal}</span>
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
                          <button
                            onClick={() => handleBookmark(paper.id)}
                            className={`p-2 rounded-xl transition-all duration-300 shadow-neumorphic-sm ${
                              bookmarkedPapers.has(paper.id)
                                ? 'bg-primary-100 text-primary-600'
                                : 'bg-white/50 hover:bg-primary-50 hover:text-primary-600'
                            }`}
                          >
                            <SafeIcon icon={FiBookmark} className="text-lg" />
                          </button>
                          <button
                            onClick={() => handleDownload(paper)}
                            className="p-2 rounded-xl bg-white/50 hover:bg-primary-50 hover:text-primary-600 transition-all duration-300 shadow-neumorphic-sm"
                          >
                            <SafeIcon icon={FiDownload} className="text-lg" />
                          </button>
                          <button
                            onClick={() => handleExternalLink(paper.doi)}
                            className="p-2 rounded-xl bg-white/50 hover:bg-primary-50 hover:text-primary-600 transition-all duration-300 shadow-neumorphic-sm"
                          >
                            <SafeIcon icon={FiExternalLink} className="text-lg" />
                          </button>
                        </div>
                      </div>

                      <p className="text-gray-700 mb-4 leading-relaxed font-medium">
                        {paper.abstract}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {paper.keywords.map((keyword, keyIndex) => (
                            <span
                              key={keyIndex}
                              className="px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-sm font-bold"
                            >
                              {keyword}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                          <span className="font-bold">Relevance:</span>
                          <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-primary-500 to-purple-600"
                              style={{ width: `${paper.relevanceScore * 100}%` }}
                            ></div>
                          </div>
                          <span className="font-bold">{Math.round(paper.relevanceScore * 100)}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <button
                onClick={() => alert('Loading more results...')}
                className="px-8 py-4 bg-white/50 backdrop-blur-lg text-gray-700 rounded-2xl shadow-neumorphic-medium hover:shadow-neumorphic-deep transition-all duration-300 font-bold"
              >
                Load More Results
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;