'use client';

import { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface ServiceCategory {
  id: string;
  name: string;
  nameEn: string;
  nameTh: string;
  services: string[];
  servicesEn: string[];
  servicesTh: string[];
  route: string;
  image: string;
}

interface ServiceCardsProps {
  language?: 'en' | 'th';
  serviceImages?: string[];
}

// Individual card component to handle independent flipping
function ServiceCard({
  category,
  index,
  language,
  onCardClick
}: {
  category: ServiceCategory;
  index: number;
  language: 'en' | 'th';
  onCardClick: (route: string) => void;
}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const controls = useAnimation();

  const handleMouseEnter = () => {
    setIsFlipped(true);
    controls.start({
      rotateY: 180,
      transition: { duration: 0.9, ease: [0.4, 0.0, 0.2, 1] } // Smooth ease-out
    });
  };

  const handleMouseLeave = () => {
    setIsFlipped(false);
    controls.start({
      rotateY: 0,
      transition: { duration: 1.2, ease: [0.4, 0.0, 0.6, 1] } // Slower, smoother ease back
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => onCardClick(category.route)}
      className="relative h-64 cursor-pointer"
      style={{ perspective: '1000px' }}
    >
      {/* Card container with 3D transform */}
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: 'preserve-3d' }}
        animate={controls}
        initial={{ rotateY: 0 }}
      >
        {/* Front face - Image */}
        <div
          className="absolute w-full h-full backface-hidden rounded-xl overflow-hidden bg-black/60 backdrop-blur-sm border border-orange-900/30 shadow-xl hover:shadow-orange-900/20"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="relative w-full h-full">
            <Image
              src={category.image}
              alt={category.name}
              fill
              className="object-cover"
              unoptimized
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

            {/* Category name at bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-white font-bold text-xl text-center">
                {category.name}
              </h3>
            </div>
          </div>
        </div>

        {/* Back face - Services */}
        <div
          className="absolute w-full h-full backface-hidden rounded-xl bg-gradient-to-br from-orange-600/95 to-orange-800/95 backdrop-blur-sm border border-orange-500/50 shadow-xl p-6 flex flex-col justify-center items-center"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <h3 className="text-white font-bold text-xl mb-4 text-center border-b border-white/30 pb-3">
            {category.name}
          </h3>
          <ul className="space-y-2 max-h-[180px] overflow-y-auto scrollbar-thin scrollbar-thumb-white/30 scrollbar-track-transparent w-full">
            {category.services.map((service, idx) => (
              <li key={idx} className="text-white text-sm flex items-start gap-2">
                <span className="w-2 h-2 bg-white rounded-full flex-shrink-0 mt-1"></span>
                <span>{service}</span>
              </li>
            ))}
          </ul>

          {/* Click to explore hint */}
          <div className="mt-4 text-white/80 text-xs">
            {language === 'en' ? 'Click to explore' : 'คลิกเพื่อสำรวจ'}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ServiceCards({ language = 'en', serviceImages = [] }: ServiceCardsProps) {
  const router = useRouter();

  // Define service categories
  const categories: ServiceCategory[] = [
    {
      id: 'visitor',
      name: language === 'en' ? 'Visitor Management' : 'จัดการผู้มาเยือน',
      nameEn: 'Visitor Management',
      nameTh: 'จัดการผู้มาเยือน',
      services: language === 'en'
        ? ['Web Visitor', 'Weblink and Integration']
        : ['เว็บผู้มาเยือน', 'เว็บลิงก์และการเชื่อมต่อ'],
      servicesEn: ['Web Visitor', 'Weblink and Integration'],
      servicesTh: ['เว็บผู้มาเยือน', 'เว็บลิงก์และการเชื่อมต่อ'],
      route: '/services/visitor-management',
      image: serviceImages[0] || '/services/products/service1.png',
    },
    {
      id: 'parking',
      name: language === 'en' ? 'Parking Management' : 'จัดการที่จอดรถ',
      nameEn: 'Parking Management',
      nameTh: 'จัดการที่จอดรถ',
      services: language === 'en'
        ? ['LPR Systems', 'Gate Barrier', 'Payment & Vehicle Mgmt', 'Q-Booking & Sign Board']
        : ['ระบบ LPR', 'ไม้กั้นรถ', 'ชำระเงิน & จัดการรถ', 'จองคิว & ป้ายบอร์ด'],
      servicesEn: ['LPR Systems', 'Gate Barrier', 'Payment & Vehicle Mgmt', 'Q-Booking & Sign Board'],
      servicesTh: ['ระบบ LPR', 'ไม้กั้นรถ', 'ชำระเงิน & จัดการรถ', 'จองคิว & ป้ายบอร์ด'],
      route: '/services/parking-management',
      image: serviceImages[1] || '/services/products/service2.png',
    },
    {
      id: 'access',
      name: language === 'en' ? 'Access Manager' : 'จัดการการเข้าออก',
      nameEn: 'Access Manager',
      nameTh: 'จัดการการเข้าออก',
      services: language === 'en'
        ? ['Access Control', 'Time Attendance', 'Turnstile Systems', 'Full Height Systems']
        : ['ควบคุมการเข้าออก', 'ลงเวลาเข้า-ออก', 'ระบบประตูหมุน', 'ระบบประตูเต็มความสูง'],
      servicesEn: ['Access Control', 'Time Attendance', 'Turnstile Systems', 'Full Height Systems'],
      servicesTh: ['ควบคุมการเข้าออก', 'ลงเวลาเข้า-ออก', 'ระบบประตูหมุน', 'ระบบประตูเต็มความสูง'],
      route: '/services/access-management',
      image: serviceImages[2] || '/services/products/service3.png',
    },
    {
      id: 'security',
      name: language === 'en' ? 'Security Management' : 'จัดการความปลอดภัย',
      nameEn: 'Security Management',
      nameTh: 'จัดการความปลอดภัย',
      services: language === 'en'
        ? ['CCTV', 'Control Centers']
        : ['กล้องวงจรปิด', 'ศูนย์ควบคุม'],
      servicesEn: ['CCTV', 'Control Centers'],
      servicesTh: ['กล้องวงจรปิด', 'ศูนย์ควบคุม'],
      route: '/services/security-management',
      image: serviceImages[3] || '/services/products/service4.png',
    },
    {
      id: 'warehouse',
      name: language === 'en' ? 'Warehouse Solution' : 'โซลูชันคลังสินค้า',
      nameEn: 'Warehouse Solution',
      nameTh: 'โซลูชันคลังสินค้า',
      services: language === 'en'
        ? ['AI Solution', 'Laser Safety Systems']
        : ['โซลูชัน AI', 'ระบบความปลอดภัยเลเซอร์'],
      servicesEn: ['AI Solution', 'Laser Safety Systems'],
      servicesTh: ['โซลูชัน AI', 'ระบบความปลอดภัยเลเซอร์'],
      route: '/services/warehouse-solution',
      image: serviceImages[4] || '/services/products/service5.png',
    },
    {
      id: 'ai',
      name: language === 'en' ? 'AI Smart' : 'AI อัจฉริยะ',
      nameEn: 'AI Smart',
      nameTh: 'AI อัจฉริยะ',
      services: language === 'en'
        ? ['POS Systems', 'People Counter', 'Smart Retail']
        : ['ระบบ POS', 'นับจำนวนคน', 'ค้าปลีกอัจฉริยะ'],
      servicesEn: ['POS Systems', 'People Counter', 'Smart Retail'],
      servicesTh: ['ระบบ POS', 'นับจำนวนคน', 'ค้าปลีกอัจฉริยะ'],
      route: '/services/ai-smart',
      image: serviceImages[5] || '/services/products/service6.png',
    },
  ];

  const handleCardClick = (route: string) => {
    router.push(route);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <ServiceCard
            key={category.id}
            category={category}
            index={index}
            language={language}
            onCardClick={handleCardClick}
          />
        ))}
      </div>
    </div>
  );
}