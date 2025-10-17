'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguageStore } from '@/store/languageStore';
import InteractiveServiceMap from '@/components/InteractiveServiceMap';
import CompanyInfoCarousel from '@/components/CompanyInfoCarousel';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Home2() {
  const { language, toggleLanguage } = useLanguageStore();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.scroll-animate').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const content = {
    en: {
      nav: {
        home: 'Home',
        services: 'Services',
        solutions: 'Solutions',
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
      hero: {
        title: 'Advanced Security Solutions',
        subtitle: 'Protecting what matters most with cutting-edge technology.',
        cta: 'Explore Our Services',
      },
      platform: {
        title: 'Our Integrated Security Platform',
        subtitle: 'A holistic view of your security infrastructure.',
        instruction: 'Click on any service to learn more',
      },
      companyInfo: {
        title: 'About Maple Thai Intertrade',
        paragraph1:
          'Founded in 2007, Maple Thai Intertrade started a CCTV camera business when the digital technology market was growing fast. Through more than 15 years in the market, we have grown into a full security system business with our high-experienced teams. We have also worked for many big companies and have closed the jobs for more than 100 clients.',
        paragraph2:
          'With years of industry experience, our skilled technicians specialize in the installation, maintenance, and upgrading of all types of security systems. Equipped with state-of-the-art tools and technology, we handle every project with precision and efficiency—from basic surveillance setups to complex, fully integrated systems.',
        paragraph3:
          'We are committed to exceptional service and long-term customer satisfaction. Our team is available 24/7 to provide professional support, expert advice, and tailored product recommendations. At the core of our business lies integrity, innovation, and a customer-first approach that drives everything we do.',
      },
      trusted: {
        title: 'Trusted by Leading Companies',
      },
      whyChooseUs: {
        title: 'Why Choose Us',
        subtitle: 'We deliver excellence through experience, quality, and dedicated service',
        experience: {
          title: 'Years of Experience',
          description: 'Over 15 years of expertise in security systems, serving 100+ satisfied clients with proven results.',
        },
        quality: {
          title: 'Premium Quality',
          description: 'State-of-the-art equipment and cutting-edge technology for superior security solutions.',
        },
        support: {
          title: '24/7 Support',
          description: 'Round-the-clock customer support with expert advice and rapid response to your needs.',
        },
      },
      footer: {
        tagline: 'Your trusted partner in security.',
        quickLinks: 'Quick Links',
        contactUs: 'Contact Us',
        address: '123 Security Ave, Tech City',
        email: 'contact@company.com',
        rights: '© 2024 Company Name. All rights reserved.',
      },
    },
    th: {
      nav: {
        home: 'หน้าแรก',
        services: 'บริการ',
        solutions: 'โซลูชัน',
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
      hero: {
        title: 'โซลูชันด้านความปลอดภัยขั้นสูง',
        subtitle: 'ปกป้องสิ่งที่สำคัญที่สุดด้วยเทคโนโลยีล้ำสมัย',
        cta: 'สำรวจบริการของเรา',
      },
      platform: {
        title: 'แพลตฟอร์มรักษาความปลอดภัยแบบบูรณาการของเรา',
        subtitle: 'มุมมองแบบองค์รวมของโครงสร้างพื้นฐานด้านความปลอดภัยของคุณ',
        instruction: 'คลิกที่บริการใดก็ได้เพื่อเรียนรู้เพิ่มเติม',
      },
      companyInfo: {
        title: 'เกี่ยวกับ Maple Thai Intertrade',
        paragraph1:
          'บริษัท เมเปิ้ล ไทย อินเตอร์เทรด ก่อตั้งปี 2550 เริ่มธุรกิจกล้องวงจรปิด เติบโตกว่า 15 ปีสู่ระบบรักษาความปลอดภัยครบวงจร ด้วยทีมงานมากประสบการณ์ และดำเนินงานสำเร็จแล้วกว่า 100 โปรเจกต์ให้บริษัทชั้นนำ',
        paragraph2:
          'ด้วยประสบการณ์ยาวนาน ทีมช่างผู้เชี่ยวชาญของเรามีความสามารถในการติดตั้ง ปรับปรุง และดูแลระบบรักษาความปลอดภัยทุกรูปแบบ โดยใช้อุปกรณ์ที่ทันสมัยและได้มาตรฐานระดับสากล เพื่อให้มั่นใจว่างานติดตั้งทุกขั้นตอนมีความแม่นยำและมีประสิทธิภาพสูงสุด',
        paragraph3:
          'เรายึดมั่นในบริการที่รวดเร็ว ใส่ใจ และซื่อตรง พร้อมทีมบริการลูกค้าตลอด 24 ชั่วโมง เพื่อให้คำปรึกษา แนะนำสินค้า และดูแลระบบของลูกค้าอย่างใกล้ชิด บริษัทของเรายึดหลักความซื่อสัตย์ ความเชี่ยวชาญ และการบริการที่เป็นเลิศ เพื่อให้ลูกค้าได้รับความพึงพอใจสูงสุดในทุกครั้งที่เลือกใช้บริการ',
      },
      trusted: {
        title: 'ได้รับความไว้วางใจจากบริษัทชั้นนำ',
      },
      whyChooseUs: {
        title: 'ทำไมต้องเลือกเรา',
        subtitle: 'เรามอบความเป็นเลิศผ่านประสบการณ์ คุณภาพ และการบริการที่ทุ่มเท',
        experience: {
          title: 'ประสบการณ์ยาวนาน',
          description: 'กว่า 15 ปีของความเชี่ยวชาญด้านระบบรักษาความปลอดภัย บริการลูกค้ากว่า 100+ รายด้วยผลลัพธ์ที่พิสูจน์แล้ว',
        },
        quality: {
          title: 'คุณภาพพรีเมียม',
          description: 'อุปกรณ์ที่ทันสมัยและเทคโนโลยีล้ำสมัยสำหรับโซลูชันรักษาความปลอดภัยที่เหนือกว่า',
        },
        support: {
          title: 'บริการ 24/7',
          description: 'การสนับสนุนลูกค้าตลอด 24 ชั่วโมงพร้อมคำแนะนำจากผู้เชี่ยวชาญและการตอบสนองที่รวดเร็ว',
        },
      },
      footer: {
        tagline: 'พันธมิตรที่เชื่อถือได้ของคุณด้านความปลอดภัย',
        quickLinks: 'ลิงก์ด่วน',
        contactUs: 'ติดต่อเรา',
        address: '123 ถนนรักษาความปลอดภัย เมืองเทคโนโลยี',
        email: 'contact@company.com',
        rights: '© 2024 ชื่อบริษัท สงวนลิขสิทธิ์',
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
                      {text.servicesDropdown.items.map((item, index) => (
                        <Link
                          key={index}
                          href={item.route}
                          className={`block px-4 py-2 text-sm text-black hover:bg-orange-50 hover:text-white transition-colors ${
                            item.featured ? 'mb-3 border-b border-gray-200 pb-3' : ''
                          }`}
                        >
                          {item.name}
                        </Link>
                      ))}
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

      <main>
        {/* Hero Section */}
        <section
          className="h-screen bg-cover bg-center flex items-center justify-center text-white"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=2531&auto=format&fit=crop')",
          }}
        >
          <div className="text-center px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-4 tracking-tight"
            >
              {text.hero.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-200"
            >
              {text.hero.subtitle}
            </motion.p>
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 inline-block bg-orange-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105"
              href="#services"
            >
              {text.hero.cta}
            </motion.a>
          </div>
        </section>

        {/* Interactive Service Platform Section */}
        <section className="py-20 bg-white" id="services">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12 scroll-animate opacity-0 translate-y-12 transition-all duration-800">
              <h2 className="text-4xl font-bold text-amber-600">{text.platform.title}</h2>
              <p className="text-lg mt-2 text-black">{text.platform.subtitle}</p>
            </div>

            {/* Interactive Map Component with Gradient Background */}
            <div className="scroll-animate opacity-0 translate-y-12 transition-all duration-800 p-8 rounded-xl shadow-lg" style={{ backgroundImage: 'linear-gradient(to left, #fdfdfc, #efeeeb, #f5f4f3, #f5f5f4, #fcfcfc)' }}>
              <InteractiveServiceMap language={language} />
            </div>

            {/* Company Information Cards - 2x2 Grid Layout */}
            <div className="mt-20">
              <h2 className="text-4xl font-bold text-center mb-12 scroll-animate opacity-0 translate-y-12 transition-all duration-800">
                <span className="text-amber-600">{text.companyInfo.title}</span>
              </h2>

              {/* Grid Container */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Column 1, Row 1: Picture Card */}
                <div className="scroll-animate opacity-0 translate-y-12 transition-all duration-800">
                  <div className="bg-white rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.3)] overflow-hidden h-full">
                    <div className="relative w-full h-64 md:h-full min-h-[300px]">
                      <Image
                        src="/landing_page2/about/pic1.png"
                        alt="Company Image 1"
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                  </div>
                </div>

                {/* Column 2, Row 1: Static Card */}
                <div className="scroll-animate opacity-0 translate-y-12 transition-all duration-800">
                  <div className="bg-white p-8 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.3)] h-full flex items-center">
                    <p className="text-black text-lg leading-relaxed">{text.companyInfo.paragraph1}</p>
                  </div>
                </div>

                {/* Column 1, Row 2: Carousel Card */}
                <div className="scroll-animate opacity-0 translate-y-12 transition-all duration-800">
                  <div className="h-full flex items-center">
                    <CompanyInfoCarousel
                      text={{
                        paragraph2: text.companyInfo.paragraph2,
                        paragraph3: text.companyInfo.paragraph3,
                      }}
                    />
                  </div>
                </div>

                {/* Column 2, Row 2: Picture Card */}
                <div className="scroll-animate opacity-0 translate-y-12 transition-all duration-800">
                  <div className="bg-white rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.3)] overflow-hidden h-full">
                    <div className="relative w-full h-64 md:h-full min-h-[300px]">
                      <Image
                        src="/landing_page2/about/pic2.png"
                        alt="Company Image 2"
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trusted By Section */}
        <section className="py-24 bg-white" id="trusted-by">
          <div className="container mx-auto px-6 scroll-animate opacity-0 translate-y-12 transition-all duration-800">
            <h2 className="text-center text-4xl font-bold text-amber-600 mb-16">
              {text.trusted.title}
            </h2>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-12 items-center">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((num) => (
                <div key={num} className="flex justify-center items-center w-[150px] h-[100px] bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <Image
                    src={`/landing_page/clients/client${num}.png`}
                    alt={`Client ${num}`}
                    width={192}
                    height={192}
                    className="max-w-full max-h-full w-auto h-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
                    unoptimized
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-amber-600 sm:text-4xl">
                {text.whyChooseUs.title}
              </h2>
              <p className="mt-4 text-lg text-black">
                {text.whyChooseUs.subtitle}
              </p>
            </motion.div>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {/* Experience Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.3)] hover:shadow-[0_0_25px_rgba(249,115,22,0.4)] transition-all group"
              >
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-amber-600 transition-colors">
                  <svg
                    className="w-8 h-8 text-amber-600 group-hover:text-white transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-black mb-4">
                  {text.whyChooseUs.experience.title}
                </h3>
                <p className="text-black leading-relaxed">
                  {text.whyChooseUs.experience.description}
                </p>
              </motion.div>

              {/* Quality Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.3)] hover:shadow-[0_0_25px_rgba(249,115,22,0.4)] transition-all group"
              >
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-amber-600 transition-colors">
                  <svg
                    className="w-8 h-8 text-amber-600 group-hover:text-white transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-black mb-4">
                  {text.whyChooseUs.quality.title}
                </h3>
                <p className="text-black leading-relaxed">
                  {text.whyChooseUs.quality.description}
                </p>
              </motion.div>

              {/* Support Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white p-8 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.3)] hover:shadow-[0_0_25px_rgba(249,115,22,0.4)] transition-all group"
              >
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-amber-600 transition-colors">
                  <svg
                    className="w-8 h-8 text-amber-600 group-hover:text-white transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-black mb-4">
                  {text.whyChooseUs.support.title}
                </h3>
                <p className="text-black leading-relaxed">
                  {text.whyChooseUs.support.description}
                </p>
              </motion.div>
            </div>
          </div>
        </section>
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
                  <Link className="text-white hover:text-orange-500" href="/services">
                    {text.nav.services}
                  </Link>
                </li>
                <li>
                  <Link className="text-white hover:text-orange-500" href="#about">
                    {text.nav.about}
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