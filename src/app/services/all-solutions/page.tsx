'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguageStore } from '@/store/languageStore';
import { motion } from 'framer-motion';
import { useState } from 'react';
import ServicesDonutChart from '@/components/ServicesDonutChart';
import ServiceRoadmap from '@/components/ServiceRoadmap';

export default function AllSolutions() {
  const { language, toggleLanguage } = useLanguageStore();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const content = {
    en: {
      nav: {
        home: 'Home',
        services: 'Services',
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
      hero: {
        title: 'Our Solutions',
        subtitle: 'Comprehensive security solutions tailored to your needs',
        instruction: 'Click on any section to explore',
        stats: [
          { value: '500+', label: 'Clients Served' },
          { value: '15+', label: 'Years Experience' },
          { value: '99.9%', label: 'Uptime Guarantee' },
        ],
        badge: 'Industry Leading Security',
      },
      services: [
        {
          id: 'visitor-management',
          title: 'Visitor Management',
          badge: 'Smart Check-In',
          description: 'Streamline your visitor check-in process with our modern web-based system. Pre-register visitors, print badges instantly, and maintain comprehensive logs with real-time notifications and seamless integration.',
          image: '/services/our-solutions/visitorManagement.png',
          route: '/services/visitor-management',
          features: ['Web-based check-in', 'Badge printing', 'Real-time notifications', 'Multi-location integration'],
        },
        {
          id: 'parking-management',
          title: 'Parking Management',
          badge: 'Smart Parking',
          description: 'Smart parking solutions featuring LPR systems, automated barriers, and digital payment integration. Optimize space utilization with real-time monitoring, vehicle management, and queue booking systems.',
          image: '/services/our-solutions/parkingManagement.png',
          route: '/services/parking-management',
          features: ['LPR technology', 'Automated barriers', 'Digital payments', 'Space optimization'],
        },
        {
          id: 'access-management',
          title: 'Access Management',
          badge: 'Biometric Security',
          description: 'Advanced access control solutions with biometric authentication, time attendance tracking, and turnstile systems. Secure your premises with full-height barriers and comprehensive entry management.',
          image: '/services/our-solutions/accessManagement.png',
          route: '/services/access-management',
          features: ['Biometric access', 'Time attendance', 'Turnstile systems', 'Full-height barriers'],
        },
        {
          id: 'security-management',
          title: 'Security Management',
          badge: '24/7 Surveillance',
          description: 'Comprehensive surveillance with advanced CCTV systems and centralized control centers. Monitor and manage your security infrastructure with AI-powered analytics and 24/7 monitoring capabilities.',
          image: '/services/our-solutions/securityManagement.png',
          route: '/services/security-management',
          features: ['Advanced CCTV', 'Control centers', 'AI analytics', '24/7 monitoring'],
        },
        {
          id: 'warehouse-solution',
          title: 'Warehouse Solution',
          badge: 'AI-Driven',
          description: 'Intelligent warehouse management powered by AI and laser safety systems. Enhance operational efficiency with smart monitoring, automated safety protocols, and real-time inventory tracking.',
          image: '/services/our-solutions/warehouseSolution.png',
          route: '/services/warehouse-solution',
          features: ['AI-powered systems', 'Laser safety', 'Smart monitoring', 'Inventory tracking'],
        },
        {
          id: 'ai-smart',
          title: 'AI Smart',
          badge: 'Retail Intelligence',
          description: 'Transform your retail operations with AI-driven solutions. Integrate POS systems, people counters, and smart retail analytics to gain valuable business insights and enhance customer experience.',
          image: '/services/our-solutions/aiSmart.png',
          route: '/services/ai-smart',
          features: ['POS integration', 'People counting', 'Retail analytics', 'Business insights'],
        },
      ],
      footer: {
        tagline: 'Your trusted partner in security.',
        quickLinks: 'Quick Links',
        contactUs: 'Contact Us',
        address: '123 Security Ave, Tech City',
        email: 'contact@company.com',
        rights: '© 2024 Maple Thai Intertrade. All rights reserved.',
      },
    },
    th: {
      nav: {
        home: 'หน้าแรก',
        services: 'บริการ',
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
      hero: {
        title: 'โซลูชันของเรา',
        subtitle: 'โซลูชันความปลอดภัยที่ครอบคลุมและปรับแต่งตามความต้องการของคุณ',
        instruction: 'คลิกที่ส่วนใดก็ได้เพื่อสำรวจ',
        stats: [
          { value: '500+', label: 'ลูกค้าที่ให้บริการ' },
          { value: '15+', label: 'ปีประสบการณ์' },
          { value: '99.9%', label: 'การรับประกันการทำงาน' },
        ],
        badge: 'ผู้นำด้านความปลอดภัยในอุตสาหกรรม',
      },
      services: [
        {
          id: 'visitor-management',
          title: 'จัดการผู้มาเยือน',
          badge: 'เช็คอินอัจฉริยะ',
          description: 'ปรับปรุงกระบวนการเช็คอินผู้มาเยือนด้วยระบบเว็บที่ทันสมัย ลงทะเบียนล่วงหน้า พิมพ์บัตรทันที และบันทึกข้อมูลครอบคลุมพร้อมการแจ้งเตือนแบบเรียลไทม์และการผสานรวมที่ราบรื่น',
          image: '/services/our-solutions/visitorManagement.png',
          route: '/services/visitor-management',
          features: ['เช็คอินผ่านเว็บ', 'พิมพ์บัตร', 'แจ้งเตือนเรียลไทม์', 'ผสานรวมหลายสถานที่'],
        },
        {
          id: 'parking-management',
          title: 'จัดการที่จอดรถ',
          badge: 'ที่จอดรถอัจฉริยะ',
          description: 'โซลูชันที่จอดรถอัจฉริยะพร้อมระบบ LPR ไม้กั้นอัตโนมัติ และการชำระเงินดิจิทัล เพิ่มประสิทธิภาพการใช้พื้นที่ด้วยการตรวจสอบแบบเรียลไทม์ การจัดการยานพาหนะ และระบบจองคิว',
          image: '/services/our-solutions/parkingManagement.png',
          route: '/services/parking-management',
          features: ['เทคโนโลยี LPR', 'ไม้กั้นอัตโนมัติ', 'ชำระเงินดิจิทัล', 'เพิ่มประสิทธิภาพพื้นที่'],
        },
        {
          id: 'access-management',
          title: 'จัดการการเข้าออก',
          badge: 'ความปลอดภัยไบโอเมตริก',
          description: 'โซลูชันควบคุมการเข้าถึงขั้นสูงพร้อมการยืนยันตัวตนด้วยไบโอเมตริก ติดตามเวลาทำงาน และระบบประตูหมุน รักษาความปลอดภัยสถานที่ด้วยประตูเต็มความสูงและการจัดการการเข้าออกที่ครอบคลุม',
          image: '/services/our-solutions/accessManagement.png',
          route: '/services/access-management',
          features: ['เข้าถึงด้วยไบโอเมตริก', 'บันทึกเวลาทำงาน', 'ระบบประตูหมุน', 'ประตูเต็มความสูง'],
        },
        {
          id: 'security-management',
          title: 'จัดการความปลอดภัย',
          badge: 'เฝ้าระวัง 24/7',
          description: 'การเฝ้าระวังที่ครอบคลุมด้วยระบบกล้องวงจรปิดขั้นสูงและศูนย์ควบคุมแบบรวมศูนย์ ตรวจสอบและจัดการโครงสร้างความปลอดภัยด้วย AI และความสามารถในการตรวจสอบตลอด 24/7',
          image: '/services/our-solutions/securityManagement.png',
          route: '/services/security-management',
          features: ['กล้องวงจรปิดขั้นสูง', 'ศูนย์ควบคุม', 'การวิเคราะห์ AI', 'ตรวจสอบตลอด 24/7'],
        },
        {
          id: 'warehouse-solution',
          title: 'โซลูชันคลังสินค้า',
          badge: 'ขับเคลื่อนด้วย AI',
          description: 'การจัดการคลังสินค้าอัจฉริยะที่ขับเคลื่อนด้วย AI และระบบความปลอดภัยเลเซอร์ เพิ่มประสิทธิภาพการทำงานด้วยการตรวจสอบอัจฉริยะ โปรโตคอลความปลอดภัยอัตโนมัติ และการติดตามสินค้าคงคลังแบบเรียลไทม์',
          image: '/services/our-solutions/warehouseSolution.png',
          route: '/services/warehouse-solution',
          features: ['ระบบขับเคลื่อน AI', 'ความปลอดภัยเลเซอร์', 'ตรวจสอบอัจฉริยะ', 'ติดตามสินค้าคงคลัง'],
        },
        {
          id: 'ai-smart',
          title: 'AI อัจฉริยะ',
          badge: 'ข่าวกรองค้าปลีก',
          description: 'เปลี่ยนแปลงการดำเนินงานค้าปลีกด้วยโซลูชันที่ขับเคลื่อนด้วย AI ผสานรวมระบบ POS เครื่องนับผู้คน และการวิเคราะห์ค้าปลีกอัจฉริยะเพื่อรับข้อมูลเชิงลึกทางธุรกิจและเพิ่มประสบการณ์ลูกค้า',
          image: '/services/our-solutions/aiSmart.png',
          route: '/services/ai-smart',
          features: ['ผสานรวม POS', 'นับจำนวนผู้คน', 'การวิเคราะห์ค้าปลีก', 'ข้อมูลเชิงลึกทางธุรกิจ'],
        },
      ],
      footer: {
        tagline: 'พันธมิตรที่เชื่อถือได้ของคุณด้านความปลอดภัย',
        quickLinks: 'ลิงก์ด่วน',
        contactUs: 'ติดต่อเรา',
        address: '123 ถนนรักษาความปลอดภัย เมืองเทคโนโลยี',
        email: 'contact@company.com',
        rights: '© 2024 Maple Thai Intertrade สงวนลิขสิทธิ์',
      },
    },
  };

  const text = content[language];

  return (
    <div className="bg-white text-black font-['Poppins',sans-serif]">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 shadow-md">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-amber-600 text-3xl font-bold">🛡️</span>
              <span className="ml-2 text-xl font-bold text-black">
                Maple Thai Intertrade
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link className="text-black hover:text-amber-600 transition-colors font-medium" href="/home2">
                {text.nav.home}
              </Link>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsServicesDropdownOpen(true)}
                onMouseLeave={() => setIsServicesDropdownOpen(false)}
              >
                <button
                  className="text-black hover:text-amber-600 transition-colors font-medium flex items-center gap-1"
                >
                  {text.nav.services}
                  <svg
                    className={`w-4 h-4 transition-transform ${isServicesDropdownOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {isServicesDropdownOpen && (
                  <div className="absolute top-full left-0 pt-2 w-64 z-50">
                    <div className="bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                      <div className="px-4 py-2 border-b border-gray-200">
                        <p className="text-sm font-semibold text-amber-600">{text.servicesDropdown.title}</p>
                      </div>
                      {text.servicesDropdown.items.map((item, index) => {
                        const isActive = item.route === '/services/all-solutions';
                        return (
                          <Link
                            key={index}
                            href={item.route}
                            className={`block px-4 py-2 text-sm transition-colors ${
                              isActive
                                ? 'bg-amber-600 text-white font-semibold'
                                : 'text-black hover:bg-orange-50 hover:text-white'
                            } ${
                              item.featured ? 'mb-3 border-b border-gray-200 pb-3' : ''
                            }`}
                          >
                            {item.name}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              <Link
                className="text-black hover:text-amber-600 transition-colors font-medium"
                href="/contact"
              >
                {text.nav.contact}
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={toggleLanguage}
                className="px-4 py-2 text-sm font-medium bg-amber-600 text-white rounded-lg hover:bg-orange-700 transition-all transform hover:scale-105"
              >
                {language === 'en' ? 'ไทย' : 'EN'}
              </button>
              <button
                className="md:hidden ml-4 p-2 rounded-md text-black hover:bg-gray-100"
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
          {isMobileMenuOpen && (
            <div className="mt-4 md:hidden bg-white">
              <Link className="block py-2 px-4 text-sm text-black hover:bg-gray-100 rounded font-medium" href="/home2" onClick={() => setIsMobileMenuOpen(false)}>
                {text.nav.home}
              </Link>

              {/* Mobile Services Dropdown */}
              <div>
                <button
                  className="w-full text-left py-2 px-4 text-sm text-black hover:bg-gray-100 rounded font-medium flex items-center justify-between"
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                >
                  {text.nav.services}
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Mobile Services Submenu */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isMobileServicesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="bg-gray-50 py-2">
                    {text.servicesDropdown.items.map((item, index) => (
                      <Link
                        key={index}
                        href={item.route}
                        className={`block py-2 px-8 text-sm text-black hover:bg-gray-200 transition-colors ${
                          item.featured ? 'font-semibold text-amber-600' : ''
                        }`}
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setIsMobileServicesOpen(false);
                        }}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                className="block py-2 px-4 text-sm text-black hover:bg-gray-100 rounded font-medium"
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {text.nav.contact}
              </Link>
            </div>
          )}
        </nav>
      </header>

      <main className="pt-20">
        {/* Hero Section with Donut Chart */}
        <section className="py-16 bg-gradient-to-br from-orange-50 to-white relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-100/20 rounded-full blur-3xl -z-10"></div>

          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 items-center">
              {/* Left Column - Text (1/4 on large screens) */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center lg:text-left lg:col-span-1 space-y-6"
              >
                {/* Trust Badge */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-amber-600 text-white px-4 py-2 rounded-full text-xs font-semibold shadow-lg mx-auto lg:mx-0"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {text.hero.badge}
                </motion.div>

                <div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-600 mb-3 leading-tight">
                    {text.hero.title}
                  </h1>
                  <p className="text-lg md:text-xl text-white mb-4 leading-relaxed">
                    {text.hero.subtitle}
                  </p>
                  <p className="text-sm md:text-base text-amber-600 font-medium flex items-center justify-center lg:justify-start gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                    </svg>
                    {text.hero.instruction}
                  </p>
                </div>

                {/* Stats Section - Hidden on small screens, shown on large screens */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="hidden lg:grid grid-cols-3 gap-4 pt-6 border-t border-orange-200/50"
                >
                  {text.hero.stats.map((stat, index) => (
                    <div key={index} className="text-center lg:text-left">
                      <div className="text-2xl md:text-3xl font-bold text-amber-800 mb-1">
                        {stat.value}
                      </div>
                      <div className="text-xs md:text-sm text-black leading-tight">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </motion.div>

                {/* Security Icons/Features - Hidden on small screens, shown on large screens */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="hidden lg:flex items-center justify-center lg:justify-start gap-3 pt-4"
                >
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
                      </svg>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                      <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13 7H7v6h6V7z" />
                        <path fillRule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right Column - Donut Chart (3/4 on large screens) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-3"
              >
                <ServicesDonutChart language={language} />
              </motion.div>

              {/* Stats Section - Shown on small screens below chart, hidden on large screens */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="lg:hidden grid grid-cols-3 gap-4 pt-6 border-t border-orange-200/50"
              >
                {text.hero.stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-amber-800 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs md:text-sm text-black leading-tight">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Security Icons/Features - Shown on small screens below stats, hidden on large screens */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="lg:hidden flex items-center justify-center gap-3 pt-4"
              >
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
                    </svg>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                    <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 7H7v6h6V7z" />
                      <path fillRule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Cards Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {language === 'en' ? 'Explore Our Services' : 'สำรวจบริการของเรา'}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {language === 'en'
                  ? 'Discover our comprehensive range of security and management solutions designed to meet your unique needs'
                  : 'ค้นพบโซลูชันด้านความปลอดภัยและการจัดการที่ครอบคลุมซึ่งออกแบบมาเพื่อตอบสนองความต้องการเฉพาะของคุณ'
                }
              </p>
            </motion.div>

            <div className="space-y-24">
              {text.services.map((service, index) => {
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`flex flex-col ${
                      isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    } gap-8 lg:gap-12 items-center`}
                  >
                    {/* Image Section */}
                    <div className="w-full lg:w-1/2">
                      <Link href={service.route} className="block">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
                          <div className="relative h-64 md:h-80 lg:h-96">
                            <Image
                              src={service.image}
                              alt={service.title}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            {/* Overlay with service title on hover */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="text-center">
                                <h4 className="text-white text-2xl md:text-3xl font-bold mb-2 drop-shadow-lg">
                                  {service.title}
                                </h4>
                                <div className="inline-flex items-center gap-2 text-white text-sm font-semibold bg-amber-600/90 px-4 py-2 rounded-full">
                                  {language === 'en' ? 'View Details' : 'ดูรายละเอียด'}
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>

                    {/* Content Section */}
                    <div className="w-full lg:w-1/2 space-y-6">
                      <div>
                        <motion.div
                          initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                          className="inline-block mb-4"
                        >
                          <span className="px-4 py-2 bg-orange-100 text-amber-600 rounded-full text-sm font-semibold">
                            {service.badge}
                          </span>
                        </motion.div>

                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                          {service.title}
                        </h3>

                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                          {service.description}
                        </p>
                      </div>

                      {/* Features */}
                      <div className="grid grid-cols-2 gap-3">
                        {service.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center gap-2 text-gray-700"
                          >
                            <svg
                              className="w-5 h-5 text-green-600 flex-shrink-0"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="text-sm md:text-base">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <div>
                        <Link
                          href={service.route}
                          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-600 text-white font-semibold rounded-lg hover:from-orange-700 hover:to-amber-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                          {language === 'en' ? `Explore ${service.title}` : `สำรวจ${service.title}`}
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <ServiceRoadmap />

      {/* Footer */}
      <footer className="bg-black text-white" id="contact">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-2 text-amber-800">Maple Thai Intertrade</h3>
              <p className="text-white">{text.footer.tagline}</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2 text-amber-800">{text.footer.quickLinks}</h3>
              <ul>
                <li>
                  <Link className="text-white hover:text-orange-500" href="/">
                    {text.nav.home}
                  </Link>
                </li>
                <li>
                  <Link className="text-white hover:text-orange-500" href="/home2">
                    {text.nav.home}
                  </Link>
                </li>
                <li>
                  <Link className="text-white hover:text-orange-500" href="/services">
                    {text.nav.services}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2 text-amber-800">{text.footer.contactUs}</h3>
              <p className="text-white">{text.footer.address}</p>
              <p className="text-white">{text.footer.email}</p>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-6 text-center text-white text-sm">
            {text.footer.rights}
          </div>
        </div>
      </footer>
    </div>
  );
}