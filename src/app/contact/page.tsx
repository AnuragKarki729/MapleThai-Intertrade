'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguageStore } from '@/store/languageStore';
import { useState } from 'react';

export default function ContactUs() {
  const { language, toggleLanguage } = useLanguageStore();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
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
          { name: 'Visitor Management', route: '/services/visitor-management' },
          { name: 'Parking Management', route: '/services/parking-management' },
          { name: 'Access Manager', route: '/services/access-management' },
          { name: 'Security Management', route: '/services/security-management' },
          { name: 'Warehouse Solution', route: '/services/warehouse-solution' },
          { name: 'AI Smart', route: '/services/ai-smart' },
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
        phoneValue: '+66 2 123 4567',
        email: 'Email',
        emailValue: 'info@maplethai.com',
        address: 'Address',
        addressValue: '123 Maple Street, Bangkok, Thailand',
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
        phoneValue: '+66 2 123 4567',
        email: 'อีเมล',
        emailValue: 'info@maplethai.com',
        address: 'ที่อยู่',
        addressValue: '123 ถนนเมเปิ้ล กรุงเทพฯ ประเทศไทย',
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
                className="text-amber-600 font-semibold transition-colors"
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
                className="block py-2 px-4 text-sm text-black hover:bg-amber-600 rounded font-medium"
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
        <div className="container mx-auto px-6 py-16 max-w-6xl">
          {/* Hero Section */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-amber-600 mb-4">
              {text.hero.title}
            </h1>
            <p className="text-lg text-gray-600">{text.hero.subtitle}</p>
          </div>

          {/* Main Content Grid: Form + Quick Contact */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Left Column: Contact Form (appears second on mobile) */}
            <div className="order-2 md:order-1">
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label className="block text-base font-medium text-black mb-2">
                      {text.form.name}
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder={text.form.namePlaceholder}
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-100 border-none focus:ring-2 focus:ring-amber-600 text-black placeholder-gray-500"
                      required
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-base font-medium text-black mb-2">
                      {text.form.email}
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder={text.form.emailPlaceholder}
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-100 border-none focus:ring-2 focus:ring-amber-600 text-black placeholder-gray-500"
                      required
                    />
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label className="block text-base font-medium text-black mb-2">
                      {text.form.subject}
                    </label>
                    <input
                      type="text"
                      name="subject"
                      placeholder={text.form.subjectPlaceholder}
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-100 border-none focus:ring-2 focus:ring-amber-600 text-black placeholder-gray-500"
                      required
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-base font-medium text-black mb-2">
                      {text.form.message}
                    </label>
                    <textarea
                      name="message"
                      placeholder={text.form.messagePlaceholder}
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg bg-gray-100 border-none focus:ring-2 focus:ring-amber-600 text-black placeholder-gray-500 resize-none"
                      required
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-amber-600 text-white font-bold rounded-lg hover:bg-orange-700 transition-colors"
                  >
                    {text.form.submit}
                  </button>
                </div>
              </form>
            </div>

            {/* Right Column: Quick Contact (appears first on mobile) */}
            <div className="order-1 md:order-2 space-y-6">
              <h2 className="text-2xl font-bold text-black mb-6">{text.quickContact.title}</h2>

              {/* Call Button Card */}
              <div className="bg-white rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.1)] p-6 flex flex-col items-center justify-center">
                <svg
                  className="w-12 h-12 md:w-16 md:h-16 text-amber-600 mb-4"
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
                <p className="text-gray-600 mt-3 text-sm">{text.contactInfo.phoneValue}</p>
              </div>

              {/* LINE QR Code Card */}
              <div className="bg-white rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.1)] p-6 flex flex-col items-center justify-center">
                <div className="w-40 h-40 md:w-48 md:h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/contact/line-qr-placeholder.png"
                    alt="LINE QR Code"
                    width={192}
                    height={192}
                    className="w-full h-full object-cover"
                    unoptimized
                  />
                </div>
                <p className="text-black font-semibold text-center text-sm md:text-base">{text.quickContact.lineQR}</p>
              </div>

              {/* Contact Information */}
              <div className="bg-white rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.1)] p-6">
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
            <div className="w-full h-[400px] bg-gray-200 flex items-center justify-center">
              <p className="text-white">Map Placeholder - Add Google Maps integration here</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-8 mb-6">
            <Link className="text-white hover:text-orange-500 transition-colors" href="/home2">
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
  );
}