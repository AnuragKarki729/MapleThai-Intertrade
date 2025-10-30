'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguageStore } from '@/store/languageStore';
import { useEffect, useState } from 'react';

export default function ContactUs() {
  const { language, toggleLanguage } = useLanguageStore();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
        title: 'Contact Us',
        subtitle: "We're here to help. Reach out to us for any inquiries or support.",
      },
      form: {
        name: 'Name',
        namePlaceholder: 'Your Name',
        email: 'Email',
        emailPlaceholder: 'Your Email',
        subject: 'Subject',
        subjectPlaceholder: 'Subject',
        message: 'Message',
        messagePlaceholder: 'Your Message',
        submit: 'Send Message',
      },
      contactInfo: {
  title: 'Contact Information',
  phone: 'Phone',
  phoneValue: '02-138-3848',          // display format
  email: 'Email',
  emailValue: 'info@maplethai.com',
  address: 'Address',
  addressValue: 'Maple Thai Intertrade Co.,Ltd. 3/201 Soi Srinakarin 46/1 (Pramote) Nong Bon Subdistrict, Prawet District, Bangkok 10250',
},
quickContact: {
  title: 'Quick Contact',
  callButton: 'Call Us Now',
  lineQR: 'Scan to Add on LINE',
},
      footer: {
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
        title: 'ติดต่อเรา',
        subtitle: 'เรายินดีให้ความช่วยเหลือ ติดต่อเราสำหรับข้อสงสัยหรือความช่วยเหลือใดๆ',
      },
      form: {
        name: 'ชื่อ',
        namePlaceholder: 'ชื่อของคุณ',
        email: 'อีเมล',
        emailPlaceholder: 'อีเมลของคุณ',
        subject: 'หัวข้อ',
        subjectPlaceholder: 'หัวข้อ',
        message: 'ข้อความ',
        messagePlaceholder: 'ข้อความของคุณ',
        submit: 'ส่งข้อความ',
      },
      contactInfo: {
  title: 'ข้อมูลการติดต่อ',
  phone: 'โทรศัพท์',
  phoneValue: '089-129-8846, 083-129-8846',         
  email: 'อีเมล',
  emailValue: 'info@maplethai.com',
  address: 'ที่อยู่',
  addressValue: 'บริษัท เมเปิ้ล ไทย อินเตอร์เทรด จำกัด 3/201 ซอยศรีนครินทร์ 46/1 (ประโมทย์) แขวงหนองบอน เขตประเวศ กรุงเทพมหานคร 10250',
},
quickContact: {
  title: 'ติดต่อด่วน',
  callButton: 'โทรหาเราทันที',
  lineQR: 'สแกนเพื่อเพิ่มใน LINE',
},

      footer: {
        rights: '© 2024 Maple Thai Intertrade สงวนลิขสิทธิ์',
      },
    },
  };
   useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 10);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  

  const text = content[language];
 const headerClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled ? 'bg-amber-600/80 backdrop-blur-lg shadow-md border-b border-zinc-200' : 'bg-transparent'
  }`;

  return (
    // <div className=" text-font-['Poppins',sans-serif] pt-24 pb-16 bg-gradient-to-br from-orange-50 to-white">
    <div className="relative font-['Poppins',sans-serif] pt-24 pb-16 overflow-hidden">
  {/* Background image (bottom layer) */}
  <div
    className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat blur-sm pointer-events-none"
    style={{ backgroundImage: "url('/contactBg.png')" }}
    aria-hidden="true"
  />

  {/* Optional whitewash overlay */}
  <div className="absolute inset-0 -z-10 bg-black/50 backdrop-blur-[1px]" aria-hidden="true" />
   <div className="relative z-10">
  
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
                className="relative text-zinc-100 hover:white transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-amber-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                {text.nav.home}
              </Link>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsServicesDropdownOpen(true)}
                onMouseLeave={() => setIsServicesDropdownOpen(false)}
              >
                <button className="flex items-center gap-1 text-zinc-100 hover:white transition-colors duration-300">
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
                className="relative text-zinc-100 hover:white transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-amber-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                {text.nav.contact}
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={toggleLanguage}
                className="hidden md:block text-sm font-medium text-zinc-100 hover:white border border-zinc-300 hover:border-amber-500 rounded-full px-4 py-2 transition-all duration-300"
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

      <main className="pt-20">
        <div className="container mx-auto px-6 py-16 max-w-6xl">
          {/* Hero Section */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-amber-600 mb-4">
              {text.hero.title}
            </h1>
            <p className="text-lg text-gray-100">{text.hero.subtitle}</p>
          </div>

          {/* Main Content Grid: Form + Quick Contact */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Left Column: Contact Form (appears second on mobile) */}
            <div className="order-2 md:order-1">
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label className="block text-base font-medium text-white mb-2">
                      {text.form.name}
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder={text.form.namePlaceholder}
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-400 border-none focus:ring-2 focus:ring-amber-600 text-black placeholder-gray-500"
                      required
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-base font-medium text-white mb-2">
                      {text.form.email}
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder={text.form.emailPlaceholder}
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-400 border-none focus:ring-2 focus:ring-amber-600 text-black placeholder-gray-500"
                      required
                    />
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label className="block text-base font-medium text-white mb-2">
                      {text.form.subject}
                    </label>
                    <input
                      type="text"
                      name="subject"
                      placeholder={text.form.subjectPlaceholder}
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-400 border-none focus:ring-2 focus:ring-amber-600 text-black placeholder-gray-500"
                      required
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-base font-medium text-white mb-2">
                      {text.form.message}
                    </label>
                    <textarea
                      name="message"
                      placeholder={text.form.messagePlaceholder}
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg bg-gray-400 border-none focus:ring-2 focus:ring-amber-600 text-black placeholder-gray-500 resize-none"
                      required
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-half px-6 py-3 bg-amber-600 text-white font-bold rounded-lg hover:bg-orange-700 transition-colors"
                  >
                    {text.form.submit}
                  </button>
                </div>
              </form>
            </div>

            {/* Right Column: Quick Contact (appears first on mobile) */}
            <div className="order-1 md:order-2 space-y-6">
              <h2 className="text-2xl font-bold text-white mb-6">{text.quickContact.title}</h2>

              {/* Call Button Card */}
              <div className="bg-amber-80 rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.1)] p-6 flex flex-col items-center justify-center">
                <svg
                  className="w-12 h-12 md:w-16 md:h-16 text-amber-900 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href="tel:+6621234567"
                  className="px-6 py-3 md:px-8 md:py-3 bg-amber-600 text-white font-bold rounded-lg hover:bg-orange-700 transition-colors text-center text-sm md:text-base"
                >
                  {text.quickContact.callButton}
                </a>
                <p className="text-gray-100 mt-3 text-sm">{text.contactInfo.phoneValue}</p>
              </div>

              {/* LINE QR Code Card */}
              <div className="bg-amber-80 rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.1)] p-6 flex flex-col items-center justify-center">
                <div className="w-40 h-40 md:w-48 md:h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/contact/line-qr.png"
                    alt="LINE QR Code"
                    width={192}
                    height={192}
                    className="w-full h-full object-cover"
                    unoptimized
                  />
                </div>
                <p className="text-white font-semibold text-center text-sm md:text-base">{text.quickContact.lineQR}</p>
              </div>

              {/* Contact Information */}
              <div className="bg-amber-50 rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.1)] p-6">
                <h3 className="text-lg font-bold text-black mb-4">{text.contactInfo.title}</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-gray-600 font-medium text-sm min-w-[80px]">{text.contactInfo.phone}:</span>
                    <span className="text-black text-sm">{text.contactInfo.phoneValue}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-gray-600 font-medium text-sm min-w-[80px]">{text.contactInfo.email}:</span>
                    <span className="text-black text-sm">{text.contactInfo.emailValue}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-gray-600 font-medium text-sm min-w-[80px]">{text.contactInfo.address}:</span>
                    <span className="text-black text-sm">{text.contactInfo.addressValue}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
<div className="rounded-lg overflow-hidden shadow-lg mb-12">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.0290516042277!2d100.6421558!3d13.6822721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d5f319b3456a1%3A0xd77d60bbc12f5305!2z4Lia4Lij4Li04Lip4Lix4LiXIOC5gOC4oeC5gOC4m-C4tOC4pSDguYTguJfguKIg4Lit4Li04LiZ4LmA4LiV4Lit4Lij4LmM4LmA4LiX4Lij4LiUIOC4iOC4s-C4geC4seC4lCAoTWFwbGUgVGhhaSBJbnRlcnRyYWRlIENvLixMdGQuKQ!5e0!3m2!1sth!2sth!4v1730300000000!5m2!1sth!2sth"
    width="100%"
    height="400"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
  <div className="text-center mt-3">
    <a
      href="https://www.google.com/maps/place/%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%A9%E0%B8%B1%E0%B8%97+%E0%B9%80%E0%B8%A1%E0%B9%80%E0%B8%9B%E0%B8%B4%E0%B8%A5+%E0%B9%84%E0%B8%97%E0%B8%A2+%E0%B8%AD%E0%B8%B4%E0%B8%99%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B9%80%E0%B8%97%E0%B8%A3%E0%B8%94+%E0%B8%88%E0%B8%B3%E0%B8%81%E0%B8%B1%E0%B8%94+(Maple+Thai+Intertrade+Co.,Ltd.)/@13.6822721,100.6421558,17z/data=!4m14!1m7!3m6!1s0x311d5f319b3456a1:0xd77d60bbc12f5305!2z4Lia4Lij4Li04Lip4Lix4LiXIOC5gOC4oeC5gOC4m-C4tOC4pSDguYTguJfguKIg4Lit4Li04LiZ4LmA4LiV4Lit4Lij4LmM4LmA4LiX4Lij4LiUIOC4iOC4s-C4geC4seC4lCAoTWFwbGUgVGhhaSBJbnRlcnRyYWRlIENvLixMdGQuKQ!8m2!3d13.6822721!4d100.6447254!16s%2Fg%2F11wc2l7h2t!3m5!1s0x311d5f319b3456a1:0xd77d60bbc12f5305!8m2!3d13.6822721!4d100.6447254!16s%2Fg%2F11wc2l7h2t?entry=ttu"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block px-5 py-2 bg-amber-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors"
    >
      View Larger Map
    </a>
  </div>
</div>


        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-8 mb-6">
            <Link className="text-white hover:text-orange-500 transition-colors" href="/">
              {text.nav.home}
            </Link>
            <Link className="text-white hover:text-orange-500 transition-colors" href="/services">
              {text.nav.services}
            </Link>
            <Link className="text-white hover:text-orange-500 transition-colors" href="/contact">
              {text.nav.contact}
            </Link>
          </div>
          <p className="text-center text-white">{text.footer.rights}</p>
        </div>
      </footer>
    </div>
    </div>
  );
}