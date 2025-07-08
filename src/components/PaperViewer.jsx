import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiArrowLeft, FiBookmark, FiDownload, FiShare2, FiMessageCircle, FiTrendingUp, FiCalendar, FiUsers, FiExternalLink } = FiIcons;

const PaperViewer = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');

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
                <button className="p-3 rounded-lg bg-gray-50 hover:bg-primary-50 hover:text-primary-600 transition-all duration-300">
                  <SafeIcon icon={FiBookmark} className="text-xl" />
                </button>
                <button className="p-3 rounded-lg bg-gray-50 hover:bg-primary-50 hover:text-primary-600 transition-all duration-300">
                  <SafeIcon icon={FiDownload} className="text-xl" />
                </button>
                <button className="p-3 rounded-lg bg-gray-50 hover:bg-primary-50 hover:text-primary-600 transition-all duration-300">
                  <SafeIcon icon={FiShare2} className="text-xl" />
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg shadow-neumorphic hover:shadow-neumorphic-inset transition-all duration-300 flex items-center space-x-2">
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
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-sm font-medium"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>

            {/* DOI */}
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <span>DOI:</span>
              <a
                href={`https://doi.org/${paper.doi}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 flex items-center space-x-1"
              >
                <span>{paper.doi}</span>
                <SafeIcon icon={FiExternalLink} className="text-xs" />
              </a>
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
                      Full text content would be displayed here. This would include the complete paper 
                      with all sections, figures, tables, and references properly formatted.
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
                    Systematic review following PRISMA guidelines with meta-analysis 
                    of diagnostic accuracy studies.
                  </p>
                </div>
                
                <div className="p-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">Limitations</h4>
                  <p className="text-sm text-orange-700">
                    Heterogeneity in study designs and limited long-term 
                    follow-up data across included studies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PaperViewer;