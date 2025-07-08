import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiPlus, FiSearch, FiFilter, FiDownload, FiShare2, FiEdit3, FiTrash2, FiFolder, FiBookmark, FiFileText, FiUpload, FiLink, FiX } = FiIcons;

const References = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [references, setReferences] = useState([
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
  ]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newReference, setNewReference] = useState({
    title: '',
    authors: '',
    journal: '',
    year: '',
    doi: '',
    notes: ''
  });

  const handleAddReference = () => {
    if (newReference.title && newReference.authors) {
      const reference = {
        id: references.length + 1,
        title: newReference.title,
        authors: newReference.authors.split(',').map(a => a.trim()),
        journal: newReference.journal,
        year: parseInt(newReference.year),
        type: 'article',
        folder: 'General',
        tags: [],
        notes: newReference.notes,
        citation: `${newReference.authors} (${newReference.year}). ${newReference.title}. ${newReference.journal}.`,
        doi: newReference.doi
      };
      setReferences([...references, reference]);
      setNewReference({ title: '', authors: '', journal: '', year: '', doi: '', notes: '' });
      setShowAddModal(false);
    }
  };

  const handleDeleteReference = (id) => {
    if (window.confirm('Are you sure you want to delete this reference?')) {
      setReferences(references.filter(ref => ref.id !== id));
    }
  };

  const handleExportReferences = () => {
    const exportData = {
      references: references,
      exportDate: new Date().toISOString(),
      totalCount: references.length
    };
    
    const dataStr = JSON.stringify(exportData, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = 'references-export.json';
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  const handleImportFromZotero = () => {
    alert('Zotero import functionality - Coming Soon! This will allow you to import your Zotero library.');
  };

  const handleImportFromDOI = () => {
    const doi = prompt('Enter DOI:');
    if (doi) {
      alert(`Importing paper with DOI: ${doi} - Coming Soon!`);
    }
  };

  const handleShareLibrary = () => {
    if (navigator.share) {
      navigator.share({
        title: 'My Research Library',
        text: `Check out my research library with ${references.length} papers!`,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Library link copied to clipboard!');
    }
  };

  const handleCopyToClipboard = (citation) => {
    navigator.clipboard.writeText(citation);
    alert('Citation copied to clipboard!');
  };

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

  const filteredReferences = references.filter(ref => {
    const matchesSearch = ref.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         ref.authors.some(author => author.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesTab = activeTab === 'all' || ref.type === activeTab;
    return matchesSearch && matchesTab;
  });

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
                  <button
                    onClick={() => setShowAddModal(true)}
                    className="px-6 py-3 bg-gradient-to-r from-primary-500 to-purple-600 text-white rounded-2xl shadow-neumorphic-deep hover:shadow-neumorphic-ultra transition-all duration-300 flex items-center space-x-2 font-bold"
                  >
                    <SafeIcon icon={FiPlus} className="text-lg" />
                    <span>Add Reference</span>
                  </button>
                  <button
                    onClick={handleExportReferences}
                    className="px-6 py-3 bg-white/50 backdrop-blur-lg text-gray-700 rounded-2xl shadow-neumorphic-medium hover:shadow-neumorphic-deep transition-all duration-300 flex items-center space-x-2 font-bold"
                  >
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
                    <div key={index} className="flex items-center space-x-3 p-3 rounded-xl hover:bg-white/50 cursor-pointer transition-all duration-300 group">
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
                  <button
                    onClick={handleImportFromZotero}
                    className="w-full flex items-center space-x-3 p-3 rounded-xl bg-white/50 hover:bg-primary-50 hover:text-primary-600 transition-all duration-300 font-bold"
                  >
                    <SafeIcon icon={FiFileText} className="text-lg" />
                    <span>Import from Zotero</span>
                  </button>
                  <button
                    onClick={handleImportFromDOI}
                    className="w-full flex items-center space-x-3 p-3 rounded-xl bg-white/50 hover:bg-primary-50 hover:text-primary-600 transition-all duration-300 font-bold"
                  >
                    <SafeIcon icon={FiBookmark} className="text-lg" />
                    <span>Import from DOI</span>
                  </button>
                  <button
                    onClick={handleShareLibrary}
                    className="w-full flex items-center space-x-3 p-3 rounded-xl bg-white/50 hover:bg-primary-50 hover:text-primary-600 transition-all duration-300 font-bold"
                  >
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
              {filteredReferences.map((ref, index) => (
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
                          <button
                            onClick={() => handleCopyToClipboard(ref.citation)}
                            className="p-2 rounded-xl bg-white/50 hover:bg-primary-50 hover:text-primary-600 transition-all duration-300 shadow-neumorphic-sm"
                          >
                            <SafeIcon icon={FiDownload} className="text-lg" />
                          </button>
                          <button
                            onClick={() => handleShareLibrary()}
                            className="p-2 rounded-xl bg-white/50 hover:bg-primary-50 hover:text-primary-600 transition-all duration-300 shadow-neumorphic-sm"
                          >
                            <SafeIcon icon={FiShare2} className="text-lg" />
                          </button>
                          <button
                            onClick={() => handleDeleteReference(ref.id)}
                            className="p-2 rounded-xl bg-white/50 hover:bg-red-50 hover:text-red-600 transition-all duration-300 shadow-neumorphic-sm"
                          >
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
                            <span key={tagIndex} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-bold">
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

      {/* Add Reference Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 max-w-md w-full mx-4 shadow-neumorphic-ultra">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-black text-gray-800">Add Reference</h3>
              <button
                onClick={() => setShowAddModal(false)}
                className="p-2 hover:bg-gray-100 rounded-xl transition-colors duration-300"
              >
                <SafeIcon icon={FiX} className="text-gray-500 text-xl" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Title *</label>
                <input
                  type="text"
                  value={newReference.title}
                  onChange={(e) => setNewReference({...newReference, title: e.target.value})}
                  className="w-full p-3 bg-white/70 rounded-xl border border-gray-300 outline-none focus:border-primary-500"
                  placeholder="Enter paper title"
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Authors *</label>
                <input
                  type="text"
                  value={newReference.authors}
                  onChange={(e) => setNewReference({...newReference, authors: e.target.value})}
                  className="w-full p-3 bg-white/70 rounded-xl border border-gray-300 outline-none focus:border-primary-500"
                  placeholder="Author1, Author2, Author3"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Journal</label>
                  <input
                    type="text"
                    value={newReference.journal}
                    onChange={(e) => setNewReference({...newReference, journal: e.target.value})}
                    className="w-full p-3 bg-white/70 rounded-xl border border-gray-300 outline-none focus:border-primary-500"
                    placeholder="Journal name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Year</label>
                  <input
                    type="number"
                    value={newReference.year}
                    onChange={(e) => setNewReference({...newReference, year: e.target.value})}
                    className="w-full p-3 bg-white/70 rounded-xl border border-gray-300 outline-none focus:border-primary-500"
                    placeholder="2024"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">DOI</label>
                <input
                  type="text"
                  value={newReference.doi}
                  onChange={(e) => setNewReference({...newReference, doi: e.target.value})}
                  className="w-full p-3 bg-white/70 rounded-xl border border-gray-300 outline-none focus:border-primary-500"
                  placeholder="10.1000/journal.example"
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Notes</label>
                <textarea
                  value={newReference.notes}
                  onChange={(e) => setNewReference({...newReference, notes: e.target.value})}
                  className="w-full p-3 bg-white/70 rounded-xl border border-gray-300 outline-none focus:border-primary-500 h-20 resize-none"
                  placeholder="Add your notes here..."
                />
              </div>
            </div>
            
            <div className="flex items-center space-x-4 mt-6">
              <button
                onClick={handleAddReference}
                className="flex-1 py-3 bg-gradient-to-r from-primary-500 to-purple-600 text-white rounded-xl font-bold hover:shadow-lg transition-all duration-300"
              >
                Add Reference
              </button>
              <button
                onClick={() => setShowAddModal(false)}
                className="flex-1 py-3 bg-gray-200 text-gray-700 rounded-xl font-bold hover:bg-gray-300 transition-all duration-300"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default References;