import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiSearch, FiBookmark, FiUser, FiMenu, FiX, FiHome, FiGrid, FiFileText } = FiIcons;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', icon: FiHome },
    { name: 'Dashboard', path: '/dashboard', icon: FiGrid },
    { name: 'Search', path: '/search', icon: FiSearch },
    { name: 'References', path: '/references', icon: FiFileText },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="sticky top-0 z-50 bg-gray-100 shadow-neumorphic"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl shadow-neumorphic flex items-center justify-center">
              <SafeIcon icon={FiSearch} className="text-white text-xl" />
            </div>
            <span className="text-xl font-bold text-gray-800">Research AI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  location.pathname === item.path
                    ? 'bg-primary-500 text-white shadow-neumorphic-inset'
                    : 'text-gray-600 hover:text-primary-500 hover:bg-white hover:shadow-neumorphic-sm'
                }`}
              >
                <SafeIcon icon={item.icon} className="text-lg" />
                <span className="font-medium">{item.name}</span>
              </Link>
            ))}
          </div>

          {/* User Profile */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 rounded-lg bg-white shadow-neumorphic hover:shadow-neumorphic-inset transition-all duration-300">
              <SafeIcon icon={FiBookmark} className="text-gray-600 text-xl" />
            </button>
            <button className="p-2 rounded-lg bg-white shadow-neumorphic hover:shadow-neumorphic-inset transition-all duration-300">
              <SafeIcon icon={FiUser} className="text-gray-600 text-xl" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg bg-white shadow-neumorphic"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <SafeIcon icon={isMenuOpen ? FiX : FiMenu} className="text-gray-600 text-xl" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 pb-4"
          >
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                    location.pathname === item.path
                      ? 'bg-primary-500 text-white shadow-neumorphic-inset'
                      : 'text-gray-600 hover:text-primary-500 hover:bg-white hover:shadow-neumorphic-sm'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <SafeIcon icon={item.icon} className="text-lg" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;