'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguageStore } from '@/store/languageStore';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function ParkingManagement() {
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
      const sections = ['lpr-system', 'gate-barrier', 'parking-payment', 'vehicle-management', 'q-booking-management', 'parking-sign-board'];
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
        title: 'Parking Management',
        subtitle: 'Smart parking solutions for efficient space utilization and seamless vehicle management',
        subservices: 'Our Solutions',
      },
      subServices: [
        {
          id: 'lpr-system',
          title: 'LPR Systems',
          description:
            'Advanced License Plate Recognition technology that automates vehicle identification and access control. Our LPR systems capture and process license plates in real-time, enabling touchless entry and exit while maintaining comprehensive records. Integrate seamlessly with parking management systems for enhanced security and streamlined operations.',
        },
        {
          id: 'gate-barrier',
          title: 'Gate Barrier',
          description:
            'Robust and reliable barrier gate systems designed for high-traffic environments. Our automated barriers provide secure vehicle access control with fast operation times and durable construction. Features include anti-crash mechanisms, LED indicators, and integration capabilities with LPR and payment systems for complete parking automation.',
        },
        {
          id: 'parking-payment',
          title: 'Parking Payment',
          description:
            'Flexible payment solutions supporting multiple methods including cash, credit cards, mobile payments, and digital wallets. Our systems provide user-friendly interfaces, instant transaction processing, and automated receipt generation. Integrate with your parking management platform for real-time revenue tracking and reporting.',
        },
        {
          id: 'vehicle-management',
          title: 'Vehicle Managements',
          description:
            'Comprehensive vehicle tracking and management system that monitors all vehicles within your facility. Track entry and exit times, parking duration, space allocation, and vehicle movements. Generate detailed reports, manage permits and registrations, and maintain a complete audit trail for security and compliance purposes.',
        },
        {
          id: 'q-booking-management',
          title: 'Q-Booking managements',
          description:
            'Smart reservation system that allows users to pre-book parking spaces through web or mobile applications. Reduce congestion, optimize space utilization, and enhance customer experience with guaranteed parking availability. Features include real-time space availability, automated confirmation, and integration with payment systems for seamless transactions.',
        },
        {
          id: 'parking-sign-board',
          title: 'Parking sign Board',
          description:
            'Digital signage solutions that provide real-time parking information and wayfinding guidance. Display available spaces, parking rates, directions, and custom messages on LED or LCD screens. Help drivers quickly locate available parking while improving traffic flow and reducing search time within your facility.',
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
        title: 'จัดการที่จอดรถ',
        subtitle: 'โซลูชันที่จอดรถอัจฉริยะเพื่อการใช้พื้นที่อย่างมีประสิทธิภาพและการจัดการยานพาหนะที่ราบรื่น',
        subservices: 'โซลูชันของเรา',
      },
      subServices: [
        {
          id: 'lpr-system',
          title: 'ระบบ LPR',
          description:
            'เทคโนโลยีการจดจำป้ายทะเบียนรถขั้นสูงที่ทำให้การระบุยานพาหนะและการควบคุมการเข้าถึงเป็นไปโดยอัตโนมัติ ระบบ LPR ของเราจับและประมวลผลป้ายทะเบียนแบบเรียลไทม์ ช่วยให้เข้าออกแบบไม่ต้องสัมผัสพร้อมทั้งเก็บบันทึกอย่างครอบคลุม ผสานรวมกับระบบจัดการที่จอดรถอย่างราบรื่นเพื่อความปลอดภัยที่ดีขึ้นและการดำเนินงานที่คล่องตัว',
        },
        {
          id: 'gate-barrier',
          title: 'ไม้กั้นรถ',
          description:
            'ระบบไม้กั้นที่แข็งแกร่งและเชื่อถือได้ ออกแบบมาสำหรับสภาพแวดล้อมที่มีการจราจรหนาแน่น ไม้กั้นอัตโนมัติของเราให้การควบคุมการเข้าถึงยานพาหนะที่ปลอดภัยพร้อมเวลาการทำงานที่รวดเร็วและโครงสร้างที่ทนทาน มีคุณสมบัติต่างๆ เช่น กลไกป้องกันการชน ไฟ LED และความสามารถในการผสานรวมกับระบบ LPR และระบบชำระเงินเพื่อระบบที่จอดรถอัตโนมัติที่สมบูรณ์',
        },
        {
          id: 'parking-payment',
          title: 'ระบบชำระเงินที่จอดรถ',
          description:
            'โซลูชันการชำระเงินที่ยืดหยุ่นรองรับหลายวิธีการ รวมถึงเงินสด บัตรเครดิต การชำระเงินผ่านมือถือ และกระเป๋าเงินดิจิทัล ระบบของเราให้อินเทอร์เฟซที่ใช้งานง่าย การประมวลผลธุรกรรมแบบทันที และการสร้างใบเสร็จอัตโนมัติ ผสานรวมกับแพลตฟอร์มการจัดการที่จอดรถของคุณเพื่อการติดตามและรายงานรายได้แบบเรียลไทม์',
        },
        {
          id: 'vehicle-management',
          title: 'การจัดการยานพาหนะ',
          description:
            'ระบบติดตามและจัดการยานพาหนะที่ครอบคลุม ตรวจสอบยานพาหนะทั้งหมดภายในสถานที่ของคุณ ติดตามเวลาเข้าและออก ระยะเวลาจอดรถ การจัดสรรพื้นที่ และการเคลื่อนไหวของยานพาหนะ สร้างรายงานโดยละเอียด จัดการใบอนุญาตและการลงทะเบียน และรักษาบันทึกการตรวจสอบที่สมบูรณ์เพื่อความปลอดภัยและการปฏิบัติตามกฎระเบียบ',
        },
        {
          id: 'q-booking-management',
          title: 'การจัดการการจองคิว',
          description:
            'ระบบการจองอัจฉริยะที่ช่วยให้ผู้ใช้สามารถจองที่จอดรถล่วงหน้าผ่านเว็บหรือแอปพลิเคชันมือถือ ลดความแออัด เพิ่มประสิทธิภาพการใช้พื้นที่ และปรับปรุงประสบการณ์ของลูกค้าด้วยการรับประกันที่จอดรถว่าง มีคุณสมบัติต่างๆ เช่น ข้อมูลพื้นที่ว่างแบบเรียลไทม์ การยืนยันอัตโนมัติ และการผสานรวมกับระบบชำระเงินเพื่อธุรกรรมที่ราบรื่น',
        },
        {
          id: 'parking-sign-board',
          title: 'ป้ายบอกสถานะที่จอดรถ',
          description:
            'โซลูชันป้ายดิจิทัลที่ให้ข้อมูลที่จอดรถแบบเรียลไทม์และคำแนะนำในการหาทาง แสดงพื้นที่ว่าง อัตราค่าจอดรถ ทิศทาง และข้อความที่กำหนดเองบนหน้าจอ LED หรือ LCD ช่วยให้คนขับรถค้นหาที่จอดรถว่างได้อย่างรวดเร็วพร้อมปรับปรุงการจราจรและลดเวลาในการค้นหาภายในสถานที่ของคุณ',
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
                        const isActive = item.route === '/services/parking-management';
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
                  src="/services/parking-management/hero.png"
                  alt="Parking Management"
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
                    src={`/services/parking-management/${service.id}.png`}
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