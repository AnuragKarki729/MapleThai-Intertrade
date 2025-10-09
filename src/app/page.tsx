'use client';

import Link from 'next/link';
import { useLanguageStore } from '@/store/languageStore';
import HeroCarousel from '@/components/HeroCarousel';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  const { language, toggleLanguage } = useLanguageStore();

  const carouselImages = [
    '/landing_page/Pic2.jpg',
    '/landing_page/Pic3.jpg',
  ];

  const content = {
    en: {
      nav: {
        home: 'Home',
        services: 'Services',
        
        contact: 'Contact',
      },
      hero: {
        title: 'Professional Security Solutions for Your Peace of Mind',
        subtitle: 'Leading provider of comprehensive security systems and equipment in Thailand',
      },
      contactBanner: {
        phone: '02 138 3846-8',
        email: 'info@maplethai.co.th',
        phoneLabel: 'Call Us',
        emailLabel: 'Email Us',
      },
      about: {
        paragraph1: 'We are a leading manufacturer and installer of advanced security system equipment, dedicated to protecting homes, businesses, and institutions. Our mission is to deliver reliable, innovative, and customized security solutions that ensure peace of mind for every client.',
        paragraph2: 'With years of industry experience, our skilled technicians specialize in the installation, maintenance, and upgrading of all types of security systems. Equipped with state-of-the-art tools and technology, we handle every project with precision and efficiency—from basic surveillance setups to complex, fully integrated systems.',
        paragraph3: 'We are committed to exceptional service and long-term customer satisfaction. Our team is available 24/7 to provide professional support, expert advice, and tailored product recommendations. At the core of our business lies integrity, innovation, and a customer-first approach that drives everything we do.',
      },
      services: {
        title: 'Comprehensive Security Solutions',
        subtitle: 'We offer a range of security services tailored to meet your specific needs',
        camera: {
          title: 'Security Camera Installation',
          description: 'Professional installation of high-definition security cameras for comprehensive surveillance.',
        },
        appliances: {
          title: 'Advanced Security Appliances',
          description: 'Cutting-edge security appliances with smart features for enhanced protection.',
        },
        monitoring: {
          title: 'Integrated Security Monitoring',
          description: '24/7 monitoring center with trained professionals ensuring rapid response to any security event.',
        },
      },
      why: {
        title: 'Why Choose Us?',
        subtitle: 'Our commitment to your safety is unwavering. We provide top-notch security with a focus on reliability and customer satisfaction.',
        reliable: {
          title: 'Reliable Protection',
          description: 'Our systems are designed for maximum reliability, ensuring your property is always protected.',
        },
        support: {
          title: '24/7 Support',
          description: 'We offer round-the-clock support to address any security concerns promptly.',
        },
        expert: {
          title: 'Expert Team',
          description: 'Our team of experienced professionals provides expert installation and maintenance services.',
        },
      },
      footer: {
        rights: 'All rights reserved.',
      },
    },
    th: {
      nav: {
        home: 'หน้าแรก',
        services: 'บริการ',
        
        contact: 'ติดต่อ',
      },
      hero: {
        title: 'โซลูชันด้านความปลอดภัยระดับมืออาชีพเพื่อความสบายใจของคุณ',
        subtitle: 'ผู้นำด้านระบบรักษาความปลอดภัยและอุปกรณ์ครบวงจรในประเทศไทย',
      },
      contactBanner: {
        phone: '02 138 3846-8',
        email: 'info@maplethai.co.th',
        phoneLabel: 'โทรหาเรา',
        emailLabel: 'อีเมลเรา',
      },
      about: {
        paragraph1: 'บริษัทของเราเป็นผู้ผลิตและติดตั้งอุปกรณ์ระบบรักษาความปลอดภัยครบวงจร มุ่งมั่นในการมอบโซลูชันด้านความปลอดภัยที่มีคุณภาพสูง ทันสมัย และตอบโจทย์ความต้องการของลูกค้า เพื่อสร้างความมั่นใจและความปลอดภัยในทุกพื้นที่',
        paragraph2: 'ด้วยประสบการณ์ยาวนาน ทีมช่างผู้เชี่ยวชาญของเรามีความสามารถในการติดตั้ง ปรับปรุง และดูแลระบบรักษาความปลอดภัยทุกรูปแบบ โดยใช้อุปกรณ์ที่ทันสมัยและได้มาตรฐานระดับสากล เพื่อให้มั่นใจว่างานติดตั้งทุกขั้นตอนมีความแม่นยำและมีประสิทธิภาพสูงสุด',
        paragraph3: 'เรายึดมั่นในบริการที่รวดเร็ว ใส่ใจ และซื่อตรง พร้อมทีมบริการลูกค้าตลอด 24 ชั่วโมง เพื่อให้คำปรึกษา แนะนำสินค้า และดูแลระบบของลูกค้าอย่างใกล้ชิด บริษัทของเรายึดหลักความซื่อสัตย์ ความเชี่ยวชาญ และการบริการที่เป็นเลิศ เพื่อให้ลูกค้าได้รับความพึงพอใจสูงสุดในทุกครั้งที่เลือกใช้บริการ',
      },
      services: {
        title: 'โซลูชันด้านความปลอดภัยครบวงจร',
        subtitle: 'เรามีบริการด้านความปลอดภัยที่หลากหลายเพื่อตอบสนองความต้องการเฉพาะของคุณ',
        camera: {
          title: 'บริการติดตั้งกล้องวงจรปิด',
          description: 'บริการติดตั้งกล้องรักษาความปลอดภัยความละเอียดสูงโดยผู้เชี่ยวชาญเพื่อการเฝ้าระวังที่ครอบคลุม',
        },
        appliances: {
          title: 'อุปกรณ์รักษาความปลอดภัยขั้นสูง',
          description: 'อุปกรณ์รักษาความปลอดภัยที่ทันสมัยพร้อมฟีเจอร์อัจฉริยะเพื่อการปกป้องที่ดียิ่งขึ้น',
        },
        monitoring: {
          title: 'ระบบตรวจสอบความปลอดภัยแบบบูรณาการ',
          description: 'ศูนย์ตรวจสอบตลอด 24/7 พร้อมผู้เชี่ยวชาญที่ผ่านการฝึกอบรมเพื่อการตอบสนองอย่างรวดเร็วต่อเหตุการณ์ด้านความปลอดภัย',
        },
      },
      why: {
        title: 'ทำไมต้องเลือกเรา?',
        subtitle: 'ความมุ่งมั่นของเราต่อความปลอดภัยของคุณไม่มีวันหยุดยั้ง เรามอบความปลอดภัยชั้นยอดโดยเน้นความน่าเชื่อถือและความพึงพอใจของลูกค้า',
        reliable: {
          title: 'การปกป้องที่เชื่อถือได้',
          description: 'ระบบของเราได้รับการออกแบบเพื่อความน่าเชื่อถือสูงสุด รับประกันว่าทรัพย์สินของคุณได้รับการปกป้องเสมอ',
        },
        support: {
          title: 'การสนับสนุนตลอด 24/7',
          description: 'เรามีบริการสนับสนุนตลอด 24 ชั่วโมงเพื่อแก้ไขปัญหาด้านความปลอดภัยอย่างรวดเร็ว',
        },
        expert: {
          title: 'ทีมผู้เชี่ยวชาญ',
          description: 'ทีมผู้เชี่ยวชาญที่มีประสบการณ์ของเรามีบริการติดตั้งและบำรุงรักษาที่เชี่ยวชาญ',
        },
      },
      footer: {
        rights: 'สงวนลิขสิทธิ์',
      },
    },
  };

  const text = content[language];

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-slate-50 dark:bg-slate-950">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-50/80 dark:bg-slate-950/80 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center gap-3">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">Maple Thai Intertrade</h2>
            </div>
            <nav className="hidden items-center gap-8 md:flex">
              <Link className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors" href="/">{text.nav.home}</Link>
              <Link className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors" href="/services">{text.nav.services}</Link>

              <Link className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors" href="/contact">{text.nav.contact}</Link>
            </nav>
            <button
              onClick={toggleLanguage}
              className="px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
            >
              {language === 'en' ? 'ไทย' : 'EN'}
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Carousel Section */}
        <HeroCarousel
          images={carouselImages}
          title={text.hero.title}
          subtitle={text.hero.subtitle}
          description=""
          language={language}
        />

        {/* Contact Banner Section */}
        <section className="relative py-6 md:py-8 overflow-hidden bg-gradient-to-r from-slate-800 via-blue-900 to-slate-800">
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
            </motion.div>
          </div>
        </section>

        {/* About Company Section with 3 Paragraphs */}
        <section className="py-16 sm:py-24 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto space-y-8">
              {/* Paragraph 1 - Company Introduction */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="flex flex-col md:flex-row items-start gap-6 bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700 shadow-xl hover:shadow-2xl transition-all"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3, type: 'spring' }}
                  className="flex-shrink-0"
                >
                  <div className="w-16 h-16 md:w-30 md:h-30 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg overflow-hidden">
                    <Image
                      src="/landing_page/1.png"
                      alt="Company Introduction"
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                      unoptimized
                    />
                  </div>
                </motion.div>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-slate-200 text-lg leading-relaxed flex-1"
                >
                  {text.about.paragraph1}
                </motion.p>
              </motion.div>

              {/* Paragraph 2 - Expertise */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="flex flex-col md:flex-row-reverse items-start gap-6 bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700 shadow-xl hover:shadow-2xl transition-all"
              >
                <motion.div
                  initial={{ scale: 0, rotate: 180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4, type: 'spring' }}
                  className="flex-shrink-0"
                >
                  <div className="w-16 h-16 md:w-30 md:h-30 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg overflow-hidden">
                    <Image
                      src="/landing_page/2.png"
                      alt="Expertise"
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                      unoptimized
                    />
                  </div>
                </motion.div>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-slate-200 text-lg leading-relaxed flex-1 md:text-right"
                >
                  {text.about.paragraph2}
                </motion.p>
              </motion.div>

              {/* Paragraph 3 - Values */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="flex flex-col md:flex-row items-start gap-6 bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700 shadow-xl hover:shadow-2xl transition-all"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5, type: 'spring' }}
                  className="flex-shrink-0"
                >
                  <div className="w-20 h-20 md:w-30 md:h-30 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg overflow-hidden">
                    <Image
                      src="/landing_page/3.png"
                      alt="Company Values"
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                      unoptimized
                    />
                  </div>
                </motion.div>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-slate-200 text-lg leading-relaxed flex-1"
                >
                  {text.about.paragraph3}
                </motion.p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 sm:py-24 bg-white dark:bg-slate-950">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">{text.services.title}</h2>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">{text.services.subtitle}</p>
            </motion.div>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex flex-col gap-4"
              >
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{text.services.camera.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{text.services.camera.description}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col gap-4"
              >
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{text.services.appliances.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{text.services.appliances.description}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col gap-4"
              >
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{text.services.monitoring.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{text.services.monitoring.description}</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section
        <section className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">{text.why.title}</h2>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">{text.why.subtitle}</p>
            </motion.div>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col gap-4 rounded-lg bg-white dark:bg-slate-800 p-6 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">{text.why.reliable.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{text.why.reliable.description}</p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col gap-4 rounded-lg bg-white dark:bg-slate-800 p-6 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">{text.why.support.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{text.why.support.description}</p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col gap-4 rounded-lg bg-white dark:bg-slate-800 p-6 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">{text.why.expert.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{text.why.expert.description}</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>*/}
      </main> 

      {/* Footer */}
      <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">Maple Thai Intertrade</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">© {new Date().getFullYear()} Maple Thai Intertrade. {text.footer.rights}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
