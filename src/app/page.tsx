'use client';

import Link from 'next/link';
import Navigation from '@/components/Navigation';
import HeroCarousel from '@/components/HeroCarousel';
import AnimatedServiceCard from '@/components/AnimatedServiceCard';
import { useLanguageStore } from '@/store/languageStore';
import { motion } from 'framer-motion';

export default function Home() {
  const { language } = useLanguageStore();

  const carouselImages = [
    '/landing_page/Pic1.jpg',
    '/landing_page/Pic2.jpg',
    '/landing_page/Pic3.jpg',
  ];

  const content = {
    en: {
      hero: {
        title: 'Professional Security Solutions',
        subtitle: 'Protecting What Matters Most',
        description:
          'Leading provider of comprehensive security systems and equipment in Thailand',
      },
      about: {
        paragraph1:
          'We are a leading manufacturer and installer of advanced security system equipment, dedicated to protecting homes, businesses, and institutions. Our mission is to deliver reliable, innovative, and customized security solutions that ensure peace of mind for every client.',
        paragraph2:
          'With years of industry experience, our skilled technicians specialize in the installation, maintenance, and upgrading of all types of security systems. Equipped with state-of-the-art tools and technology, we handle every project with precision and efficiency—from basic surveillance setups to complex, fully integrated systems.',
        paragraph3:
          'We are committed to exceptional service and long-term customer satisfaction. Our team is available 24/7 to provide professional support, expert advice, and tailored product recommendations. At the core of our business lies integrity, innovation, and a customer-first approach that drives everything we do.',
      },
      services: {
        title: 'Our Services',
        description:
          'We provide comprehensive security solutions tailored to your needs',
        installation: {
          title: 'Professional Installation',
          description: 'Expert installation services for all security systems',
        },
        consultation: {
          title: 'Security Consultation',
          description: 'Professional assessment and security planning',
        },
        maintenance: {
          title: 'Maintenance & Support',
          description: '24/7 technical support and system maintenance',
        },
      },
      cta: {
        title: 'Ready to Secure Your Business?',
        description: 'Contact us today for a free consultation',
        button: 'Contact Us',
        phone: 'Call: 02 138 3846-8',
      },
      contactBanner: {
        title: 'Secure Your Business Today',
        subtitle: 'Get Expert Security Solutions',
        phone: '02 138 3846-8',
        email: 'info@maplethai.co.th',
        button: 'Get Started',
        phoneLabel: 'Call Us',
        emailLabel: 'Email Us',
      },
    },
    th: {
      hero: {
        title: 'โซลูชันด้านความปลอดภัยระดับมืออาชีพ',
        subtitle: 'ปกป้องสิ่งที่สำคัญที่สุด',
        description:
          'ผู้นำด้านระบบรักษาความปลอดภัยและอุปกรณ์ครบวงจรในประเทศไทย',
      },
      about: {
        
        paragraph1:
          'บริษัทของเราเป็นผู้ผลิตและติดตั้งอุปกรณ์ระบบรักษาความปลอดภัยครบวงจร มุ่งมั่นในการมอบโซลูชันด้านความปลอดภัยที่มีคุณภาพสูง ทันสมัย และตอบโจทย์ความต้องการของลูกค้า เพื่อสร้างความมั่นใจและความปลอดภัยในทุกพื้นที่',
        paragraph2:
          'ด้วยประสบการณ์ยาวนาน ทีมช่างผู้เชี่ยวชาญของเรามีความสามารถในการติดตั้ง ปรับปรุง และดูแลระบบรักษาความปลอดภัยทุกรูปแบบ โดยใช้อุปกรณ์ที่ทันสมัยและได้มาตรฐานระดับสากล เพื่อให้มั่นใจว่างานติดตั้งทุกขั้นตอนมีความแม่นยำและมีประสิทธิภาพสูงสุด',
        paragraph3:
          'เรายึดมั่นในบริการที่รวดเร็ว ใส่ใจ และซื่อตรง พร้อมทีมบริการลูกค้าตลอด 24 ชั่วโมง เพื่อให้คำปรึกษา แนะนำสินค้า และดูแลระบบของลูกค้าอย่างใกล้ชิด บริษัทของเรายึดหลักความซื่อสัตย์ ความเชี่ยวชาญ และการบริการที่เป็นเลิศ เพื่อให้ลูกค้าได้รับความพึงพอใจสูงสุดในทุกครั้งที่เลือกใช้บริการ',
      },
      services: {
        title: 'บริการของเรา',
        description: 'เรามีโซลูชันด้านความปลอดภัยครบวงจรที่ตอบโจทย์ความต้องการของคุณ',
        installation: {
          title: 'บริการติดตั้งมืออาชีพ',
          description: 'บริการติดตั้งโดยผู้เชี่ยวชาญสำหรับระบบรักษาความปลอดภัยทุกประเภท',
        },
        consultation: {
          title: 'ให้คำปรึกษาด้านความปลอดภัย',
          description: 'การประเมินและวางแผนระบบรักษาความปลอดภัยโดยมืออาชีพ',
        },
        maintenance: {
          title: 'บำรุงรักษาและสนับสนุน',
          description: 'บริการสนับสนุนทางเทคนิคและบำรุงรักษาระบบตลอด 24/7',
        },
      },
      cta: {
        title: 'พร้อมที่จะรักษาความปลอดภัยธุรกิจของคุณ?',
        description: 'ติดต่อเราวันนี้เพื่อรับคำปรึกษาฟรี',
        button: 'ติดต่อเรา',
        phone: 'โทร: 02 138 3846-8',
      },
      contactBanner: {
        title: 'รักษาความปลอดภัยธุรกิจของคุณวันนี้',
        subtitle: 'รับโซลูชันด้านความปลอดภัยจากผู้เชี่ยวชาญ',
        phone: '02 138 3846-8',
        email: 'info@maplethai.co.th',
        button: 'เริ่มต้นใช้งาน',
        phoneLabel: 'โทรหาเรา',
        emailLabel: 'อีเมลเรา',
      },
    },
  };

  const text = content[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-blue-950">
      <Navigation />

      {/* Hero Section with Carousel */}
      <HeroCarousel
        images={carouselImages}
        title={text.hero.title}
        subtitle={text.hero.subtitle}
        description={text.hero.description}
      />

      {/* Contact Banner Section */}
      <section className="relative py-6 md:py-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-blue-900 to-purple-800"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {/* Phone */}
            <a
              href="tel:021383846"
              className="flex items-center gap-3 bg-white/10 backdrop-blur-md border-2 border-white/30 hover:bg-white/20 text-white px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div className="text-left">
                <div className="text-xs text-white/70">{text.contactBanner.phoneLabel}</div>
                <div className="font-bold">{text.contactBanner.phone}</div>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:info@maplethai.co.th"
              className="flex items-center gap-3 bg-white/10 backdrop-blur-md border-2 border-white/30 hover:bg-white/20 text-white px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div className="text-left">
                <div className="text-xs text-white/70">{text.contactBanner.emailLabel}</div>
                <div className="font-bold">{text.contactBanner.email}</div>
              </div>
            </a>

            {/* CTA Button */}
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-purple-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-neutral-100 transition-all duration-200 shadow-2xl flex items-center gap-2"
            >
              {text.contactBanner.button}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-10 md:py-14 overflow-hidden">
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-purple-950 to-blue-950"></div>

        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="space-y-8">
            {/* Paragraph 1 with Camera Icon */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex flex-col md:flex-row items-start gap-6 bg-gradient-to-r from-purple-900/30 to-blue-900/30 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20 shadow-2xl"
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4, type: 'spring' }}
                className="flex-shrink-0"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-gray-200 text-lg leading-relaxed flex-1"
              >
                {text.about.paragraph1}
              </motion.p>
            </motion.div>

            {/* Paragraph 2 with Shield Icon */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col md:flex-row-reverse items-start gap-6 bg-gradient-to-l from-purple-900/30 to-blue-900/30 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/20 shadow-2xl"
            >
              <motion.div
                initial={{ scale: 0, rotate: 180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5, type: 'spring' }}
                className="flex-shrink-0"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-gray-200 text-lg leading-relaxed flex-1 md:text-right"
              >
                {text.about.paragraph2}
              </motion.p>
            </motion.div>

            {/* Paragraph 3 with Lock Icon */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col md:flex-row items-start gap-6 bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/20 shadow-2xl"
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6, type: 'spring' }}
                className="flex-shrink-0"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-gray-200 text-lg leading-relaxed flex-1"
              >
                {text.about.paragraph3}
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-purple-950 text-white py-10 md:py-14 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-3 text-center"
          >
            {text.services.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-center mb-10 text-gray-300"
          >
            {text.services.description}
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Installation Service */}
            <AnimatedServiceCard
              index={0}
              title={text.services.installation.title}
              description={text.services.installation.description}
              icon={
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              }
            />

            {/* Consultation Service */}
            <AnimatedServiceCard
              index={1}
              title={text.services.consultation.title}
              description={text.services.consultation.description}
              icon={
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              }
            />

            {/* Maintenance Service */}
            <AnimatedServiceCard
              index={2}
              title={text.services.maintenance.title}
              description={text.services.maintenance.description}
              icon={
                <svg
                  className="w-8 h-8"
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
              }
            />
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-purple-900 via-blue-900 to-purple-800 text-white py-10 md:py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">{text.cta.title}</h2>
          <p className="text-xl mb-6">{text.cta.description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="bg-white text-purple-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-neutral-100 transition-all duration-200 shadow-lg hover:shadow-2xl hover:scale-105"
            >
              {text.cta.button}
            </a>
            <a
              href="tel:021383846"
              className="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-all duration-200 backdrop-blur-sm"
            >
              {text.cta.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-black via-purple-950 to-black text-white py-12 border-t border-purple-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">
                {language === 'en' ? 'Maple Thai Intertrade' : 'เมเปิ้ลไทย อินเตอร์เทรด'}
              </h3>
              <p className="text-gray-400">
                {language === 'en'
                  ? 'Professional security solutions provider'
                  : 'ผู้ให้บริการโซลูชันด้านความปลอดภัยระดับมืออาชีพ'}
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-4">
                {language === 'en' ? 'Quick Links' : 'ลิงก์ด่วน'}
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                    {language === 'en' ? 'Home' : 'หน้าแรก'}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {language === 'en' ? 'Services' : 'บริการ'}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {language === 'en' ? 'About Us' : 'เกี่ยวกับเรา'}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {language === 'en' ? 'Contact' : 'ติดต่อ'}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">
                {language === 'en' ? 'Contact Us' : 'ติดต่อเรา'}
              </h3>
              <p className="text-gray-400 mb-2">
                {language === 'en' ? 'Phone:' : 'โทรศัพท์:'} 02 138 3846-8
              </p>
              <p className="text-gray-400">
                {language === 'en' ? 'Email:' : 'อีเมล:'} info@maplethai.co.th
              </p>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()}{' '}
              {language === 'en' ? 'Maple Thai Intertrade. All rights reserved.' : 'เมเปิ้ลไทย อินเตอร์เทรด สงวนลิขสิทธิ์'}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}