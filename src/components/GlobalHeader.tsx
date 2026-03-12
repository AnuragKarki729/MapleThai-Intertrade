'use client';

import Link from 'next/link';
import { useLanguageStore } from '@/store/languageStore';
import { useState, useEffect } from 'react';

export default function GlobalHeader() {
  const { language, toggleLanguage } = useLanguageStore();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const content = {
    en: {
      nav: {
        home: 'Home',
        services: 'Services',
        about: 'About Us',
        contact: 'Contact Us',
      },
      servicesDropdown: {
        title: 'What We Do',
        items: [
          { name: 'Our Solutions', route: '/services/all-solutions', featured: true },
          { name: 'Visitor Management', route: '/services/visitor-management' },
          { name: 'Parking Management', route: '/services/parking-management' },
          { name: 'Access Manager', route: '/services/access-management' },
          { name: 'Security Management', route: '/services/security-management' },
          { name: 'Warehouse Solution', route: '/services/warehouse-solution' },
          { name: 'AI Smart', route: '/services/ai-smart' },
        ],
      },
    },
    th: {
      nav: {
        home: 'หน้าแรก',
        services: 'บริการ',
        about: 'เกี่ยวกับเรา',
        contact: 'ติดต่อเรา',
      },
      servicesDropdown: {
        title: 'สิ่งที่เราทำ',
        items: [
          { name: 'โซลูชันของเรา', route: '/services/all-solutions', featured: true },
          { name: 'จัดการผู้มาเยือน', route: '/services/visitor-management' },
          { name: 'จัดการที่จอดรถ', route: '/services/parking-management' },
          { name: 'จัดการการเข้าออก', route: '/services/access-management' },
          { name: 'จัดการความปลอดภัย', route: '/services/security-management' },
          { name: 'โซลูชันคลังสินค้า', route: '/services/warehouse-solution' },
          { name: 'AI อัจฉริยะ', route: '/services/ai-smart' },
        ],
      },
    },
  };

  const text = content[language];

  const headerClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled ? 'bg-amber-600/80 backdrop-blur-lg shadow-md border-b border-zinc-200' : 'bg-transparent'
  }`;

  return (
    <header className={headerClasses}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/mp-logo.png"
              alt="Logo"
              className="h-10 w-10 object-contain rounded-full"
            />
            <span className="text-2xl font-semibold text-zinc-100 tracking-tight drop-shadow-sm">
              Maple Thai Intertrade
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10 text-sm font-medium">
            <Link
              href="/"
              className="relative text-zinc-100 hover:text-white transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-amber-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              {text.nav.home}
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
              onMouseLeave={() => setIsServicesDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 text-zinc-100 hover:text-white transition-colors duration-300">
                {text.nav.services}
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${isServicesDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 ease-in-out ${
                  isServicesDropdownOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
                }`}
              >
                <div className="bg-white rounded-xl shadow-2xl border border-zinc-100 w-72">
                  <div className="p-4 border-b border-zinc-100">
                    <p className="text-sm font-semibold text-amber-600">{text.servicesDropdown.title}</p>
                  </div>
                  <div className="py-2">
                    {text.servicesDropdown.items.map((item) => (
                      <Link
                        key={item.name}
                        href={item.route}
                        className={`block px-4 py-2.5 text-sm transition-colors duration-200 ${
                          item.featured
                            ? 'font-semibold text-amber-700 hover:bg-amber-50'
                            : 'text-zinc-700 hover:bg-zinc-100 hover:text-black'
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              className="relative text-zinc-100 hover:text-white transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-amber-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              {text.nav.contact}
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="hidden md:block text-sm font-medium text-zinc-100 hover:text-amber-600 border border-zinc-300 hover:border-amber-500 rounded-full px-4 py-2 transition-all duration-300"
            >
              {language === 'en' ? 'ไทย' : 'EN'}
            </button>
            <button
              className="md:hidden p-2 rounded-md text-zinc-100"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg md:hidden transition-all duration-300 ease-in-out overflow-hidden border-t border-zinc-200 ${isMobileMenuOpen ? 'max-h-screen' : 'max-h-0'}`}>
          <div className="p-4 flex flex-col gap-2">
            <Link href="/" className="block py-3 px-4 text-zinc-700 hover:bg-zinc-100 rounded-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>{text.nav.home}</Link>
            <div>
              <button onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)} className="w-full flex justify-between items-center py-3 px-4 text-zinc-700 hover:bg-zinc-100 rounded-lg font-medium">
                {text.nav.services}
                <svg className={`w-5 h-5 transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isMobileServicesOpen ? 'max-h-96' : 'max-h-0'}`}>
                <div className="pt-2 pl-4 flex flex-col gap-1">
                  {text.servicesDropdown.items.map(item => (
                    <Link key={item.name} href={item.route} className={`block py-2 px-4 rounded-lg text-sm ${item.featured ? 'font-semibold text-amber-700' : 'text-zinc-600'} hover:bg-zinc-100`} onClick={() => setIsMobileMenuOpen(false)}>{item.name}</Link>
                  ))}
                </div>
              </div>
            </div>
            <Link href="/contact" className="block py-3 px-4 text-zinc-700 hover:bg-zinc-100 rounded-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>{text.nav.contact}</Link>
            <button
              onClick={toggleLanguage}
              className="mt-4 w-full text-sm font-medium text-white bg-amber-600 hover:bg-amber-700 rounded-lg py-3 transition-colors duration-300"
            >
              {language === 'en' ? 'เปลี่ยนเป็นภาษาไทย' : 'Switch to English'}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
