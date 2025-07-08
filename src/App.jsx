import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Dashboard from './components/Dashboard';
import SearchResults from './components/SearchResults';
import PaperViewer from './components/PaperViewer';
import References from './components/References';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Hero />
              <Features />
            </motion.div>
          } />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/paper/:id" element={<PaperViewer />} />
          <Route path="/references" element={<References />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;