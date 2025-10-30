'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguageStore } from '@/store/languageStore';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import ServiceRoadmap from '@/components/ServiceRoadmap';

export default function WarehouseSolution() {
  const { language, toggleLanguage } = useLanguageStore();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 10);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
      const sections = ['ai-solution', 'laser-safety-system'];
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
          { name: 'Access Manager', route: '/services/access-management' },
          { name: 'AI Smart', route: '/services/ai-smart' },
          { name: 'Parking Management', route: '/services/parking-management' },
          { name: 'Security Management', route: '/services/security-management' },
          { name: 'Visitor Management', route: '/services/visitor-management' },
          { name: 'Warehouse Solution', route: '/services/warehouse-solution' },
          
        ],
      },
      hero: {
        title: 'Warehouse Solution',
        subtitle: 'Advanced AI and safety systems for intelligent warehouse management',
        subservices: 'Our Solutions',
      },
      subServices: [
        {
          id: 'ai-solution',
          title: 'AI Solution',
          description:
            'AI uses deep learning technology to learn different classifications in a video event, such as human, vehicle, license plate, hard hat, and violations. Within the classifications, users can search and filter on many different attributes, including human clothing color, and vehicle type/color, and gender. When integrated with facial recognition devices, it helps to identify and search millions of faces in seconds.\n\nKey Capabilities:\n• Crowd Detection - For Distancing Detection\n• Enter Area / Leave Area - For Hotel Lobby or Service counter\n• Smoke or Flame Detection - For Factory Safety\n• Intruder Detection - For Building Perimeter Monitoring\n• Loitering Detection - For Low Traffic Area Safety\n• Personal Protective Equipment (PPE) - For Factory Safety\n• Mask Detection - For Building/Station Entrance\n• Face Search Web-Based Remote Event Search and Playback',
        },
        {
          id: 'laser-safety-system',
          title: 'Laser Safety Systems',
          description:
            'Create a virtual line with the LED light. The PXO path generation light emits LED light through a lens of large size, making light come out in a long straight line, allowing it to form straight paths or lines to indicate various safety boundaries.\n\nFeatures:\n• 4 colors to choose from: green, red, blue and orange amber\n• LED lighting is safer than using a laser light source\n• Straight lines are small, sharp, and have a strong structure\n• Resistant with IP67 protection level for durability in harsh environments',
        },
      ],
      footer: {
  tagline: 'Your trusted partner in security.',
  quickLinks: 'Quick Links',
  contactUs: 'Contact Us',
  address: 'Maple Thai Intertrade Co.,Ltd. 3/201 Soi Srinakarin 46/1 (Pramote) Nong Bon Subdistrict, Prawet District, Bangkok 10250',
  email: 'info@maplethai.com',
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
          { name: 'จัดการการเข้าออก', route: '/services/access-management' },
          { name: 'AI อัจฉริยะ', route: '/services/ai-smart' },
          { name: 'จัดการที่จอดรถ', route: '/services/parking-management' },
          { name: 'จัดการความปลอดภัย', route: '/services/security-management' },
          { name: 'จัดการผู้มาเยือน', route: '/services/visitor-management' },
          { name: 'โซลูชันคลังสินค้า', route: '/services/warehouse-solution' },
          
        ],
      },
      hero: {
        title: 'โซลูชันคลังสินค้า',
        subtitle: 'ระบบ AI และความปลอดภัยขั้นสูงสำหรับการจัดการคลังสินค้าอัจฉริยะ',
        subservices: 'โซลูชันของเรา',
      },
      subServices: [
        {
          id: 'ai-solution',
          title: 'โซลูชัน AI',
          description:
            'AI ใช้เทคโนโลยีการเรียนรู้เชิงลึกเพื่อเรียนรู้การจำแนกประเภทต่างๆ ในเหตุการณ์วิดีโอ เช่น มนุษย์ ยานพาหนะ ป้ายทะเบียน หมวกนิรภัย และการละเมิด ภายในการจำแนกประเภท ผู้ใช้สามารถค้นหาและกรองคุณลักษณะต่างๆ มากมาย รวมถึงสีเสื้อผ้าของมนุษย์ ประเภท/สีของยานพาหนะ และเพศ เมื่อผสานรวมกับอุปกรณ์จดจำใบหน้า ช่วยระบุและค้นหาใบหน้าหลายล้านใบหน้าในไม่กี่วินาที\n\nความสามารถหลัก:\n• การตรวจจับฝูงชน - สำหรับการตรวจจับระยะห่าง\n• เข้าพื้นที่ / ออกจากพื้นที่ - สำหรับล็อบบี้โรงแรมหรือเคาน์เตอร์บริการ\n• การตรวจจับควันหรือเปลวไฟ - สำหรับความปลอดภัยในโรงงาน\n• การตรวจจับผู้บุกรุก - สำหรับการตรวจสอบรอบอาคาร\n• การตรวจจับการอยู่นิ่ง - สำหรับความปลอดภัยในพื้นที่จราจรน้อย\n• อุปกรณ์ป้องกันส่วนบุคคล (PPE) - สำหรับความปลอดภัยในโรงงาน\n• การตรวจจับหน้ากาก - สำหรับทางเข้าอาคาร/สถานี\n• การค้นหาใบหน้าบนเว็บ การค้นหาและเล่นย้อนหลังเหตุการณ์ระยะไกล',
        },
        {
          id: 'laser-safety-system',
          title: 'ระบบความปลอดภัยเลเซอร์',
          description:
            'สร้างเส้นเสมือนด้วยแสง LED ไฟสร้างเส้นทาง PXO ปล่อยแสง LED ผ่านเลนส์ขนาดใหญ่ ทำให้แสงออกมาเป็นเส้นตรงยาว ช่วยให้สามารถสร้างเส้นทางตรงหรือเส้นเพื่อระบุขอบเขตความปลอดภัยต่างๆ\n\nคุณสมบัติ:\n• มี 4 สีให้เลือก: เขียว แดง น้ำเงิน และอำพันส้ม\n• ไฟ LED ปลอดภัยกว่าการใช้แหล่งกำเนิดแสงเลเซอร์\n• เส้นตรงมีขนาดเล็ก คม และมีโครงสร้างที่แข็งแรง\n• ทนทานด้วยระดับการป้องกัน IP67 สำหรับความทนทานในสภาพแวดล้อมที่รุนแรง',
        },
      ],
      footer: {
  tagline: 'พันธมิตรที่เชื่อถือได้ของคุณด้านความปลอดภัย',
  quickLinks: 'ลิงก์ด่วน',
  contactUs: 'ติดต่อเรา',
  address: 'บริษัท เมเปิ้ล ไทย อินเตอร์เทรด จำกัด 3/201 ซอยศรีนครินทร์ 46/1 (ประโมทย์) แขวงหนองบอน เขตประเวศ กรุงเทพมหานคร 10250',
  email: 'info@maplethai.com',
  rights: '© 2024 บริษัท เมเปิ้ล ไทย อินเตอร์เทรด จำกัด สงวนลิขสิทธิ์',
},

    },
  };

  const text = content[language];
const headerClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled ? 'bg-amber-600/80 backdrop-blur-lg shadow-md border-b border-zinc-200' : 'bg-transparent'
  }`;

  return (
    <div className="bg-white text-black font-['Poppins',sans-serif]">
      {/* Header */}
      <header className={headerClasses}>
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center gap-2">
              <img
  src="/mp-logo.png"
  alt="Logo"
  className="h-10 w-10 object-contain rounded-full"
/>
              <span className="text-2xl font-semibold text-zinc-100 tracking-tight">
                Maple Thai Intertrade
              </span>
            </a>

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
                className="md:hidden p-2 rounded-md text-zinc-800"
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


      <main>
        {/* Hero Section - 2 Columns */}
        {/* <section className="pt-24 pb-16 bg-gradient-to-br from-orange-50 to-white"> */}
          <section className="relative pt-24 pb-16 overflow-hidden">
  {/* Blurred Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-[2px]"
    style={{ backgroundImage: "url('/services/warehouse-solution/warehouseHerobg.jpeg')" }}
  >
    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black/60"></div>
  </div>
  <div className="absolute inset-0 -z-10 bg-white backdrop-blur-sm"></div>

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
                  <p className="text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg text-white font-bold mb-3 sm:mb-4 md:mb-5 lg:mb-6 xl:mb-8 leading-snug">{text.hero.subtitle}</p>

                  <div className="bg-transparent rounded-lg md:rounded-xl lg:rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.1)] p-2 sm:p-3 md:p-3 lg:p-4 xl:p-6">
                    <h3 className="text-sm sm:text-base md:text-base lg:text-lg xl:text-xl font-semibold text-white mb-2 sm:mb-3 md:mb-3 lg:mb-4 xl:mb-6">
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
  className="text-left px-2 sm:px-2.5 md:px-2.5 lg:px-3 xl:px-4 py-1.5 sm:py-2 md:py-2 lg:py-2.5 xl:py-3 
             rounded-md lg:rounded-lg transition-all
             text-xs sm:text-sm md:text-sm lg:text-base 
             bg-amber-700 text-black hover:bg-orange-90 shadow-lg hover:scale-105 hover:text-white 
             cursor-pointer inline-block"
>
  <span className="font-medium leading-tight">{service.title}</span>
</button>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>

              {/* Column 2: Hero Image (3/4 width) - Using object-contain to prevent cropping */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="md:col-span-3 relative w-full aspect-[1606/847] rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.2)] bg-white"
              >
                <Image
                  src="/services/warehouse-solution/hero.png"
                  alt="Warehouse Solution"
                  width={1606}
                  height={847}
                  className="w-full h-full object-contain"
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
                    src={`/services/warehouse-solution/${service.id}.png`}
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
                  <p className="text-lg text-black leading-relaxed whitespace-pre-line">
                    {service.description}
                  </p>
                </motion.div>
              </div>
            </div>
          </section>
        ))}
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
                {/* <li>
                  <Link className="text-white hover:text-orange-500" href="/">
                    {text.nav.home}
                  </Link>
                </li> */}
                <li>
                  <Link className="text-white hover:text-orange-500" href="/">
                    {text.nav.home}
                  </Link>
                </li>
                <li>
                  <Link className="text-white hover:text-orange-500" href="/services/all-solutions">
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
