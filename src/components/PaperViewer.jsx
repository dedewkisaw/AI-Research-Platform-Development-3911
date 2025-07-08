import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiArrowLeft, FiBookmark, FiDownload, FiShare2, FiMessageCircle, FiTrendingUp, FiCalendar, FiUsers, FiExternalLink, FiCopy } = FiIcons;

const PaperViewer = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [chatInput, setChatInput] = useState('');
  const [showChat, setShowChat] = useState(false);

  const paper = {
    id: 1,
    title: 'Machine Learning Applications in Healthcare: A Systematic Review and Meta-Analysis',
    authors: [
      { name: 'John Smith', affiliation: 'Harvard Medical School', email: 'j.smith@harvard.edu' },
      { name: 'Alice Johnson', affiliation: 'MIT', email: 'a.johnson@mit.edu' },
      { name: 'Michael Brown', affiliation: 'Stanford University', email: 'm.brown@stanford.edu' }
    ],
    journal: 'Nature Medicine',
    year: 2024,
    volume: '30',
    issue: '4',
    pages: '456-472',
    citations: 156,
    doi: '10.1038/s41591-024-01234-5',
    abstract: 'This comprehensive review examines the current state of machine learning applications in healthcare, analyzing over 500 studies published between 2020-2024. We found significant improvements in diagnostic accuracy across multiple medical domains, with particular success in radiology (average improvement of 15.3%) and pathology (average improvement of 12.8%). The review identifies key challenges including data privacy, model interpretability, and regulatory compliance. We provide recommendations for future research directions and implementation strategies.',
    keywords: ['machine learning', 'healthcare', 'diagnostics', 'AI', 'medical imaging', 'systematic review'],
    sections: [
      { title: 'Introduction', content: 'Machine learning has emerged as a transformative technology in healthcare...' },
      { title: 'Methods', content: 'We conducted a systematic review following PRISMA guidelines...' },
      { title: 'Results', content: 'Our analysis included 523 studies from 45 countries...' },
      { title: 'Discussion', content: 'The findings demonstrate significant potential for ML in healthcare...' },
      { title: 'Conclusion', content: 'Machine learning applications show promise across healthcare domains...' }
    ],
    references: [
      'Smith, J. et al. (2023). Deep learning in medical imaging. Nature Reviews, 15(3), 234-245.',
      'Johnson, A. & Brown, M. (2022). AI ethics in healthcare. Science, 376(6589), 123-128.',
      'Davis, R. et al. (2023). Regulatory frameworks for medical AI. NEJM, 388(12), 1089-1095.'
    ]
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    alert(isBookmarked ? 'Removed from bookmarks' : 'Added to bookmarks');
  };

  const handleDownload = () => {
    alert('Downloading paper... This would typically download the PDF file.');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: paper.title,
        text: `Check out this research paper: ${paper.title}`,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Paper link copied to clipboard!');
    }
  };

  const handleChatWithPDF = () => {
    setShowChat(true);
    if (chatMessages.length === 0) {
      setChatMessages([{
        type: 'ai',
        content: 'Hello! I\'ve analyzed this paper about machine learning in healthcare. What would you like to know about it?',
        timestamp: new Date().toLocaleTimeString()
      }]);
    }
  };

  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (chatInput.trim()) {
      setChatMessages(prev => [...prev, {
        type: 'user',
        content: chatInput,
        timestamp: new Date().toLocaleTimeString()
      }]);

      // Simulate AI response
      setTimeout(() => {
        setChatMessages(prev => [...prev, {
          type: 'ai',
          content: `Based on the paper, I can tell you that ${chatInput.toLowerCase().includes('method') ? 'the methodology follows PRISMA guidelines for systematic reviews' : 'the study found significant improvements in diagnostic accuracy, particularly in radiology (15.3%) and pathology (12.8%)'}. Would you like me to elaborate on any specific aspect?`,
          timestamp: new Date().toLocaleTimeString()
        }]);
      }, 1000);

      setChatInput('');
    }
  };

  const handleCopyCitation = () => {
    const citation = `${paper.authors[0].name.split(' ')[1]}, ${paper.authors[0].name.split(' ')[0].charAt(0)}. et al. (${paper.year}). ${paper.title}. ${paper.journal}, ${paper.volume}(${paper.issue}), ${paper.pages}.`;
    navigator.clipboard.writeText(citation);
    alert('Citation copied to clipboard!');
  };

  const handleOpenDOI = () => {
    window.open(`https://doi.org/${paper.doi}`, '_blank');
  };

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'content', label: 'Full Text' },
    { id: 'citations', label: 'Citations' },
    { id: 'metrics', label: 'Metrics' }
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
          <div className="flex items-center space-x-4 mb-6">
            <Link
              to="/search"
              className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors duration-300"
            >
              <SafeIcon icon={FiArrowLeft} className="text-xl" />
              <span>Back to Results</span>
            </Link>
          </div>

          <div className="bg-white rounded-2xl shadow-neumorphic p-8">
            <div className="flex items-start justify-between mb-6">
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-gray-800 mb-4 leading-tight">
                  {paper.title}
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-4">
                  <span className="flex items-center space-x-1">
                    <SafeIcon icon={FiCalendar} className="text-sm" />
                    <span>{paper.year}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <SafeIcon icon={FiTrendingUp} className="text-sm" />
                    <span>{paper.citations} citations</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <SafeIcon icon={FiUsers} className="text-sm" />
                    <span>{paper.authors.length} authors</span>
                  </span>
                </div>
                <p className="text-lg text-gray-700 font-medium mb-4">
                  {paper.journal} • Vol. {paper.volume}, Issue {paper.issue} • Pages {paper.pages}
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <button
                  onClick={handleBookmark}
                  className={`p-3 rounded-lg transition-all duration-300 ${
                    isBookmarked
                      ? 'bg-primary-100 text-primary-600'
                      : 'bg-gray-50 hover:bg-primary-50 hover:text-primary-600'
                  }`}
                >
                  <SafeIcon icon={FiBookmark} className="text-xl" />
                </button>
                <button
                  onClick={handleDownload}
                  className="p-3 rounded-lg bg-gray-50 hover:bg-primary-50 hover:text-primary-600 transition-all duration-300"
                >
                  <SafeIcon icon={FiDownload} className="text-xl" />
                </button>
                <button
                  onClick={handleShare}
                  className="p-3 rounded-lg bg-gray-50 hover:bg-primary-50 hover:text-primary-600 transition-all duration-300"
                >
                  <SafeIcon icon={FiShare2} className="text-xl" />
                </button>
                <button
                  onClick={handleChatWithPDF}
                  className="px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg shadow-neumorphic hover:shadow-neumorphic-inset transition-all duration-300 flex items-center space-x-2"
                >
                  <SafeIcon icon={FiMessageCircle} className="text-lg" />
                  <span>Chat with PDF</span>
                </button>
              </div>
            </div>

            {/* Authors */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Authors</h3>
              <div className="flex flex-wrap gap-4">
                {paper.authors.map((author, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-3">
                    <div className="font-medium text-gray-800">{author.name}</div>
                    <div className="text-sm text-gray-600">{author.affiliation}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Keywords */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Keywords</h3>
              <div className="flex flex-wrap gap-2">
                {paper.keywords.map((keyword, index) => (
                  <span key={index} className="px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-sm font-medium">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>

            {/* DOI */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <span>DOI:</span>
                <button
                  onClick={handleOpenDOI}
                  className="text-primary-600 hover:text-primary-700 flex items-center space-x-1"
                >
                  <span>{paper.doi}</span>
                  <SafeIcon icon={FiExternalLink} className="text-xs" />
                </button>
              </div>
              <button
                onClick={handleCopyCitation}
                className="flex items-center space-x-2 text-sm text-gray-600 hover:text-primary-600 transition-colors duration-300"
              >
                <SafeIcon icon={FiCopy} className="text-sm" />
                <span>Copy Citation</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <div className="bg-white rounded-2xl shadow-neumorphic p-2">
            <div className="flex space-x-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-xl transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-primary-500 text-white shadow-neumorphic-inset'
                      : 'text-gray-600 hover:text-primary-500 hover:bg-gray-50'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-neumorphic p-8">
              {activeTab === 'overview' && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Abstract</h3>
                  <p className="text-gray-700 leading-relaxed text-lg mb-8">
                    {paper.abstract}
                  </p>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Key Sections</h3>
                  <div className="space-y-4">
                    {paper.sections.map((section, index) => (
                      <div key={index} className="border-l-4 border-primary-500 pl-4">
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">{section.title}</h4>
                        <p className="text-gray-600">{section.content}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'content' && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Full Text</h3>
                  <div className="prose max-w-none">
                    <p className="text-gray-700 leading-relaxed">
                      Full text content would be displayed here. This would include the complete paper with all sections, figures, tables, and references properly formatted.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'citations' && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">References</h3>
                  <div className="space-y-4">
                    {paper.references.map((ref, index) => (
                      <div key={index} className="p-4 bg-gray-50 rounded-lg">
                        <p className="text-gray-700">{ref}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'metrics' && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Paper Metrics</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-gray-50 rounded-lg p-6 text-center">
                      <div className="text-3xl font-bold text-primary-600 mb-2">156</div>
                      <div className="text-gray-600">Total Citations</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-6 text-center">
                      <div className="text-3xl font-bold text-primary-600 mb-2">2,340</div>
                      <div className="text-gray-600">Downloads</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-6 text-center">
                      <div className="text-3xl font-bold text-primary-600 mb-2">8.5</div>
                      <div className="text-gray-600">Impact Factor</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-6 text-center">
                      <div className="text-3xl font-bold text-primary-600 mb-2">Q1</div>
                      <div className="text-gray-600">Journal Ranking</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-neumorphic p-6 sticky top-24">
              <h3 className="text-xl font-bold text-gray-800 mb-6">AI Summary</h3>
              <div className="space-y-4">
                <div className="p-4 bg-gradient-to-r from-primary-50 to-primary-100 rounded-lg">
                  <h4 className="font-semibold text-primary-800 mb-2">Key Findings</h4>
                  <ul className="text-sm text-primary-700 space-y-1">
                    <li>• 15.3% improvement in radiology diagnostics</li>
                    <li>• 12.8% improvement in pathology</li>
                    <li>• 523 studies analyzed across 45 countries</li>
                  </ul>
                </div>
                <div className="p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Methodology</h4>
                  <p className="text-sm text-green-700">
                    Systematic review following PRISMA guidelines with meta-analysis of diagnostic accuracy studies.
                  </p>
                </div>
                <div className="p-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">Limitations</h4>
                  <p className="text-sm text-orange-700">
                    Heterogeneity in study designs and limited long-term follow-up data across included studies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Chat Modal */}
      {showChat && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-3xl w-full max-w-2xl h-[600px] mx-4 flex flex-col shadow-neumorphic-ultra">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-800">Chat with PDF</h3>
                <button
                  onClick={() => setShowChat(false)}
                  className="p-2 hover:bg-gray-100 rounded-xl transition-colors duration-300"
                >
                  <SafeIcon icon={FiArrowLeft} className="text-gray-500 text-xl" />
                </button>
              </div>
            </div>
            
            <div className="flex-1 p-6 overflow-y-auto">
              <div className="space-y-4">
                {chatMessages.map((message, index) => (
                  <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-xs px-4 py-3 rounded-2xl ${
                      message.type === 'user'
                        ? 'bg-primary-500 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      <p className="font-medium">{message.content}</p>
                      <p className={`text-xs mt-1 ${message.type === 'user' ? 'text-primary-100' : 'text-gray-500'}`}>
                        {message.timestamp}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="p-6 border-t border-gray-200">
              <form onSubmit={handleChatSubmit} className="flex space-x-4">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Ask about this paper..."
                  className="flex-1 px-4 py-3 bg-gray-100 rounded-xl border-none outline-none focus:bg-white focus:ring-2 focus:ring-primary-500"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-primary-500 text-white rounded-xl hover:bg-primary-600 transition-colors duration-300"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaperViewer;