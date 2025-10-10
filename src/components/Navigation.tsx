'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguageStore } from '@/store/languageStore';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguageStore();

  const navItems = {
    en: {
      home: 'Home',
      services: 'Services',
      about: 'About Us',
      contact: 'Contact',
    },
    th: {
      home: 'หน้าแรก',
      services: 'บริการ',
      about: 'เกี่ยวกับเรา',
      contact: 'ติดต่อ',
    },
  };

  const text = navItems[language];

  return (
    <nav className="bg-gradient-to-r from-black via-purple-950 to-black text-white shadow-lg sticky top-0 z-50 backdrop-blur-sm bg-opacity-95 border-b border-purple-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl md:text-3xl font-bold">
              <span className="text-amber-600">Maple Thai</span>
              <span className="text-white"> Intertrade</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="hover:text-cyan-400 transition-colors duration-200"
            >
              {text.home}
            </Link>
            <Link
              href="/services"
              className="hover:text-cyan-400 transition-colors duration-200"
            >
              {text.services}
            </Link>
            <Link
              href="/about"
              className="hover:text-cyan-400 transition-colors duration-200"
            >
              {text.about}
            </Link>
            <Link
              href="/contact"
              className="hover:text-cyan-400 transition-colors duration-200"
            >
              {text.contact}
            </Link>

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 px-4 py-2 rounded-md transition-all duration-200 font-medium shadow-lg"
            >
              {language === 'en' ? 'ไทย' : 'EN'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 px-3 py-1.5 rounded-md transition-all duration-200 text-sm font-medium shadow-lg"
            >
              {language === 'en' ? 'ไทย' : 'EN'}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-purple-800/50 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <Link
                href="/"
                className="hover:text-cyan-400 transition-colors duration-200 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {text.home}
              </Link>
              <Link
                href="/services"
                className="hover:text-cyan-400 transition-colors duration-200 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {text.services}
              </Link>
              <Link
                href="/about"
                className="hover:text-cyan-400 transition-colors duration-200 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {text.about}
              </Link>
              <Link
                href="/contact"
                className="hover:text-cyan-400 transition-colors duration-200 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {text.contact}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}