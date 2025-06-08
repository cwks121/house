import React from 'react';
import { Home } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Home className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-800">Our New Home Journey</h1>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#progress" className="text-gray-600 hover:text-blue-600 transition-colors">Progress</a>
            <a href="#gallery" className="text-gray-600 hover:text-blue-600 transition-colors">Gallery</a>
            <a href="#timeline" className="text-gray-600 hover:text-blue-600 transition-colors">Timeline</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Questions</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;