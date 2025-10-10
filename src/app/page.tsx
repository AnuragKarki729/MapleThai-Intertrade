'use client';

import Link from 'next/link';
import { useLanguageStore } from '@/store/languageStore';
import ServiceCards from '@/components/ServiceCards';
import { motion } from 'framer-motion';
import Image from 'next/image';
import AboutCarousel from '@/components/AboutCarousel';

export default function Home() {
  const { language, toggleLanguage } = useLanguageStore();

  // Service images for donut chart center carousel
  const serviceImages = [
    '/services/products/service1.png',
    '/services/products/service2.png',
    '/services/products/service3.png',
    '/services/products/service4.png',
    '/services/products/service5.png',
    '/services/products/service6.png',
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
        paragraph1: 'Founded in 2007, Maple Thai Intertrade started a CCTV camera business when the digital technology market was growing fast. Through more than 15 years in the market, we have grown into a full security system business with our high-experienced teams. We have also worked for many big companies and have closed the jobs for more than 100 clients.',
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
        paragraph1: 'บริษัท เมเปิ้ล ไทย อินเตอร์เทรด ก่อตั้งปี 2550 เริ่มธุรกิจกล้องวงจรปิด เติบโตกว่า 15 ปีสู่ระบบรักษาความปลอดภัยครบวงจร ด้วยทีมงานมากประสบการณ์ และดำเนินงานสำเร็จแล้วกว่า 100 โปรเจกต์ให้บริษัทชั้นนำ',
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
    <div className="relative flex min-h-screen w-full flex-col bg-neutral-950">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-orange-900/50 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center gap-3">
              <h2 className="text-2xl md:text-3xl font-bold text-amber-600">Maple Thai Intertrade</h2>
            </div>
            <nav className="hidden items-center gap-8 md:flex">
              <Link className="text-sm font-medium text-gray-300 hover:text-orange-500 transition-colors" href="/">{text.nav.home}</Link>
              <Link className="text-sm font-medium text-gray-300 hover:text-orange-500 transition-colors" href="/services">{text.nav.services}</Link>

              <Link className="text-sm font-medium text-gray-300 hover:text-orange-500 transition-colors" href="/contact">{text.nav.contact}</Link>
            </nav>
            <button
              onClick={toggleLanguage}
              className="px-4 py-2 text-sm font-medium bg-amber-600 text-white rounded-lg hover:bg-orange-500 transition-all transform hover:scale-105"
            >
              {language === 'en' ? 'ไทย' : 'EN'}
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section with Service Cards */}
        <section
          className="relative py-16 sm:py-24 bg-cover bg-center"
          style={{
            backgroundImage: `url("/services/background.png")`,
          }}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-xs"></div>
          <div className="container mx-auto px-4 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                <span className="text-amber-600">{language === 'th' ? 'เมเปิล ไทย' : 'Maple Thai'}</span>{' '}
                {text.hero.title}
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                {text.hero.subtitle}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <ServiceCards language={language} serviceImages={serviceImages} />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center text-gray-400 text-sm mt-8"
            >
              {language === 'en'
                ? 'Hover over cards to see services • Click to explore'
                : 'เลื่อนเมาส์เพื่อดูบริการ • คลิกเพื่อสำรวจ'}
            </motion.p>
          </div>
        </section>

        {/* Contact Banner Section */}
        <section className="relative py-6 md:py-8 overflow-hidden bg-gradient-to-r from-black via-orange-600 to-black">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)',
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
                className="flex items-center gap-3 bg-black/40 backdrop-blur-md border-2 border-orange-500/50 hover:bg-orange-600/30 hover:border-orange-400 text-white px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-xl"
              >
                <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs text-orange-300">{text.contactBanner.phoneLabel}</div>
                  <div className="font-bold text-white">{text.contactBanner.phone}</div>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:info@maplethai.co.th"
                className="flex items-center gap-3 bg-black/40 backdrop-blur-md border-2 border-orange-500/50 hover:bg-orange-600/30 hover:border-orange-400 text-white px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-xl"
              >
                <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs text-orange-300">{text.contactBanner.emailLabel}</div>
                  <div className="font-bold text-white">{text.contactBanner.email}</div>
                </div>
              </a>
            </motion.div>
          </div>
        </section>

        {/* About Company Section with 2 Columns */}
        <section className="py-16 sm:py-24 bg-neutral-900">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Left Column: Text Content and Robot Image */}
              <div className="w-full md:w-1/2 space-y-8">
                {/* Paragraph 1 - Company Introduction */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="bg-black/60 backdrop-blur-sm p-8 rounded-xl border border-orange-900/30 shadow-xl hover:shadow-2xl hover:border-orange-600/50 transition-all overflow-hidden"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3, type: 'spring' }}
                    className="flex-shrink-0 float-left mr-6 mb-4"
                  >
                    <div className="w-16 h-16 md:w-30 md:h-30 bg-gradient-to-br from-orange-500 to-orange-700 rounded-xl flex items-center justify-center shadow-lg overflow-hidden ring-2 ring-orange-600/50">
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
                    className="text-gray-200 text-lg leading-relaxed flex-1"
                  >
                    {text.about.paragraph1}
                  </motion.p>
                </motion.div>

                {/* Robot Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="bg-black/60 backdrop-blur-sm p-2 rounded-xl border border-orange-900/30 flex items-center justify-center max-w-md lg:max-w-sm mx-auto"
                >
                  <Image
                    src="/landing_page/robot.png"
                    alt="Maple Thai Security Solutions"
                    width={600}
                    height={600}
                    className="w-full h-auto object-contain rounded-lg"
                    unoptimized
                  />
                </motion.div>
              </div>

              {/* Right Column: Camera Image and About Carousel */}
              <div className="w-full md:w-1/2 md:ml-auto flex flex-col gap-8">
                {/* Camera Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  className="bg-black/60 backdrop-blur-sm p-2 rounded-xl border border-orange-900/30 flex items-center justify-center max-w-md lg:max-w-sm mx-auto"
                >
                  <Image
                    src="/landing_page/camera.png"
                    alt="Maple Thai Security Services"
                    width={600}
                    height={600}
                    className="w-full h-auto object-contain rounded-lg"
                    unoptimized
                  />
                </motion.div>

                {/* About Carousel */}
                <AboutCarousel text={text.about} />
              </div>
              
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 sm:py-24 bg-neutral-950">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center mb-12"
            >
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{text.services.title}</h2>
              <p className="mt-4 text-lg text-gray-300">{text.services.subtitle}</p>
            </motion.div>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex flex-col gap-4 bg-gradient-to-br from-black to-neutral-900 p-8 rounded-xl border border-orange-900/30 hover:border-orange-500/60 shadow-lg hover:shadow-orange-900/20 transition-all group"
              >
                <div className="w-14 h-14 bg-orange-600 rounded-lg flex items-center justify-center mb-2 group-hover:bg-orange-500 transition-colors">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-orange-500 group-hover:text-orange-400 transition-colors">{text.services.camera.title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed">{text.services.camera.description}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col gap-4 bg-gradient-to-br from-black to-neutral-900 p-8 rounded-xl border border-orange-900/30 hover:border-orange-500/60 shadow-lg hover:shadow-orange-900/20 transition-all group"
              >
                <div className="w-14 h-14 bg-orange-600 rounded-lg flex items-center justify-center mb-2 group-hover:bg-orange-500 transition-colors">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-orange-500 group-hover:text-orange-400 transition-colors">{text.services.appliances.title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed">{text.services.appliances.description}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col gap-4 bg-gradient-to-br from-black to-neutral-900 p-8 rounded-xl border border-orange-900/30 hover:border-orange-500/60 shadow-lg hover:shadow-orange-900/20 transition-all group"
              >
                <div className="w-14 h-14 bg-orange-600 rounded-lg flex items-center justify-center mb-2 group-hover:bg-orange-500 transition-colors">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-orange-500 group-hover:text-orange-400 transition-colors">{text.services.monitoring.title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed">{text.services.monitoring.description}</p>
              </motion.div>
            </div>
          </div>
        </section>

       
      </main> 

      {/* Footer */}
      <footer className="bg-black border-t border-orange-900/50">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
            <h2 className="text-lg font-bold text-white">Maple Thai Intertrade</h2>
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} Maple Thai Intertrade. {text.footer.rights}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
