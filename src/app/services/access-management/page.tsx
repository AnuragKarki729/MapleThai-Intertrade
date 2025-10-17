'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguageStore } from '@/store/languageStore';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function AccessManagement() {
  const { language, toggleLanguage } = useLanguageStore();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['access-control', 'time-attendance', 'turnstile-system', 'full-height-system'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        title: 'Access Management',
        subtitle: 'Advanced access control solutions for secure and efficient entry management',
        subservices: 'Our Solutions',
      },
      subServices: [
        {
          id: 'access-control',
          title: 'Access Control',
          description:
            'Access Control is a process that helps control access rights to resources. To prevent unauthorized persons from causing damage to the organization. This is what determines who is able to take action within the organization\'s area and can specify which area those people will have access to. It is also a tool to help investigate in the event of a bad incident. Because Access Control systems often have time records kept as evidence, each organization will have a different retention period depending on the designation and the needs of different locations.',
        },
        {
          id: 'time-attendance',
          title: 'Time Attendance',
          description:
            'All-in-One Time & Attendance System. TA Web a powerful and easy to use web-based solution that provides you better manage, collect, and analyze. Workforce schedule arrange, Flexible Shift Setting, Absence Management, Overtime Calculation, Achieve Payroll Accuracy, Customizable Job Code Function, Employee Time-Tracking, Powerful reporting and analytics.',
        },
        {
          id: 'turnstile-system',
          title: 'Turnstile Systems',
          description:
            'Tripod turnstile will be able to detect entry or exit. Can be integrated into the access control system. Can use ID card, scanning QR code or you can scan your face through the face terminal. You can remote control it for management. There are LED lights at the entrance and exit. There is a warning light when there is an emergency and emergency button.',
        },
        {
          id: 'full-height-system',
          title: 'Full Height Systems',
          description:
            'Full Height Turnstile, automatic revolving door. From its appearance, it is a tall door whether entering or exiting. You can use the Turnstile itself. The device itself is waterproof and restricts access to unauthorized persons. Easy to install and repair. You can identify yourself through the face terminal system.',
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
        title: 'จัดการการเข้าออก',
        subtitle: 'โซลูชันการควบคุมการเข้าถึงขั้นสูงเพื่อการจัดการการเข้าออกที่ปลอดภัยและมีประสิทธิภาพ',
        subservices: 'โซลูชันของเรา',
      },
      subServices: [
        {
          id: 'access-control',
          title: 'ระบบควบคุมการเข้าออก',
          description:
            'Access Control เป็นกระบวนการที่ช่วยควบคุมสิทธิ์การเข้าถึงทรัพยากร เพื่อป้องกันบุคคลที่ไม่ได้รับอนุญาตจากการสร้างความเสียหายต่อองค์กร นี่คือสิ่งที่กำหนดว่าใครสามารถดำเนินการได้ในพื้นที่ขององค์กร และสามารถระบุได้ว่าบุคคลเหล่านั้นจะสามารถเข้าถึงพื้นที่ใดได้บ้าง นอกจากนี้ยังเป็นเครื่องมือช่วยในการสืบสวนในกรณีที่เกิดเหตุการณ์ไม่พึงประสงค์ เนื่องจากระบบ Access Control มักมีบันทึกเวลาไว้เป็นหลักฐาน แต่ละองค์กรจะมีระยะเวลาเก็บรักษาที่แตกต่างกันไปตามการกำหนดและความต้องการของสถานที่ต่างๆ',
        },
        {
          id: 'time-attendance',
          title: 'ระบบบันทึกเวลาทำงาน',
          description:
            'ระบบบันทึกเวลาทำงานแบบครบวงจร TA Web เป็นโซลูชันบนเว็บที่ทรงพลังและใช้งานง่าย ช่วยให้คุณจัดการ รวบรวม และวิเคราะห์ได้ดีขึ้น จัดตารางงานพนักงาน ตั้งค่ากะที่ยืดหยุ่น การจัดการการลางาน การคำนวณค่าล่วงเวลา บรรลุความแม่นยำของเงินเดือน ฟังก์ชันรหัสงานที่ปรับแต่งได้ การติดตามเวลาของพนักงาน การรายงานและการวิเคราะห์ที่ทรงพลัง',
        },
        {
          id: 'turnstile-system',
          title: 'ระบบประตูหมุนสามขา',
          description:
            'ประตูหมุนสามขาจะสามารถตรวจจับการเข้าหรือออกได้ สามารถผสานรวมเข้ากับระบบควบคุมการเข้าถึงได้ สามารถใช้บัตร ID สแกน QR code หรือสแกนใบหน้าผ่านเครื่องสแกนใบหน้าได้ คุณสามารถควบคุมระยะไกลสำหรับการจัดการ มีไฟ LED ที่ทางเข้าและทางออก มีไฟเตือนเมื่อมีเหตุฉุกเฉินและปุ่มฉุกเฉิน',
        },
        {
          id: 'full-height-system',
          title: 'ระบบประตูหมุนเต็มความสูง',
          description:
            'ประตูหมุนเต็มความสูง ประตูหมุนอัตโนมัติ จากลักษณะภายนอกเป็นประตูที่สูงไม่ว่าจะเข้าหรือออก คุณสามารถใช้ Turnstile ได้เอง อุปกรณ์นั้นกันน้ำและจำกัดการเข้าถึงของบุคคลที่ไม่ได้รับอนุญาต ติดตั้งและซ่อมแซมง่าย คุณสามารถระบุตัวตนของคุณผ่านระบบสแกนใบหน้าได้',
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
                        const isActive = item.route === '/services/access-management';
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
        {/* Hero Section - 2 Columns */}
        <section className="py-16 bg-gradient-to-br from-orange-50 to-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-12 items-start">
              {/* Column 1: Sub-services Navigation (1/4 width) */}
              <div className="md:col-span-1 sticky top-24">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h1 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-amber-600 mb-2 sm:mb-2 md:mb-3 lg:mb-4 leading-tight">
                    {text.hero.title}
                  </h1>
                  <p className="text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg text-black mb-3 sm:mb-4 md:mb-5 lg:mb-6 xl:mb-8 leading-snug">{text.hero.subtitle}</p>

                  <div className="bg-transparent rounded-lg md:rounded-xl lg:rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.1)] p-2 sm:p-3 md:p-3 lg:p-4 xl:p-6">
                    <h3 className="text-sm sm:text-base md:text-base lg:text-lg xl:text-xl font-semibold text-black mb-2 sm:mb-3 md:mb-3 lg:mb-4 xl:mb-6">
                      {text.hero.subservices}
                    </h3>
                    <ul className="space-y-1.5 sm:space-y-2 md:space-y-2 lg:space-y-3 xl:space-y-4">
                      {text.subServices.map((service, index) => (
                        <motion.li
                          key={service.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                          <button
                            onClick={() => scrollToSection(service.id)}
                            className="w-full text-left px-2 sm:px-2.5 md:px-2.5 lg:px-3 xl:px-4 py-1.5 sm:py-2 md:py-2 lg:py-2.5 xl:py-3 rounded-md lg:rounded-lg transition-all
                            text-xs sm:text-sm md:text-sm lg:text-base bg-transparent text-black hover:bg-orange-90 shadow-lg hover:scale-105 hover:text-white cursor-pointer"
                          >
                            <span className="font-medium leading-tight">{service.title}</span>
                          </button>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>

              {/* Column 2: Hero Image (3/4 width) */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="md:col-span-3 relative w-full aspect-[1093/782] rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.2)]"
              >
                <Image
                  src="/services/access-management/hero.png"
                  alt="Access Management"
                  width={1093}
                  height={782}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Sub-service Sections - Alternating Layout */}
        {text.subServices.map((service, index) => (
          <section
            key={service.id}
            id={service.id}
            className="py-20 bg-white"
          >
            <div className="container mx-auto px-6">
              <div
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 0 ? '' : 'md:grid-flow-dense'
                }`}
              >
                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`relative h-[400px] rounded-2xl overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.15)] ${
                    index % 2 === 0 ? '' : 'md:col-start-2'
                  }`}
                >
                  <Image
                    src={`/services/access-management/${service.id}.png`}
                    alt={service.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </motion.div>

                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className={`${index % 2 === 0 ? '' : 'md:col-start-1 md:row-start-1'}`}
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-amber-600 mb-6">
                    {service.title}
                  </h2>
                  <p className="text-lg text-black leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              </div>
            </div>
          </section>
        ))}
      </main>

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