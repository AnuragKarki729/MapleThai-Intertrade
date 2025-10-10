'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import CenterCarousel from './CenterCarousel';

interface ServiceCategory {
  id: string;
  name: string;
  nameEn: string;
  nameTh: string;
  services: string[];
  servicesEn: string[];
  servicesTh: string[];
  route: string;
  color: string;
}

interface DonutChartProps {
  language?: 'en' | 'th';
  serviceImages?: string[];
}

export default function DonutChart({ language = 'en', serviceImages = [] }: DonutChartProps) {
  const router = useRouter();
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Define service categories with alternating orange shades
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
      color: '#FF6B35', // Orange shade 1
    },
    {
      id: 'parking',
      name: language === 'en' ? 'Parking Management' : 'จัดการที่จอดรถ',
      nameEn: 'Parking Management',
      nameTh: 'จัดการที่จอดรถ',
      services: language === 'en'
        ? ['LPR Systems', 'Gate Barrier', 'Parking Payment & Vehicle Managements', 'Q-Booking Managements', 'Parking Sign Board']
        : ['ระบบ LPR', 'ไม้กั้นรถ', 'ชำระเงินที่จอดรถ & จัดการยานพาหนะ', 'จัดการการจอง', 'ป้ายที่จอดรถ'],
      servicesEn: ['LPR Systems', 'Gate Barrier', 'Parking Payment & Vehicle Managements', 'Q-Booking Managements', 'Parking Sign Board'],
      servicesTh: ['ระบบ LPR', 'ไม้กั้นรถ', 'ชำระเงินที่จอดรถ', 'จัดการยานพาหนะ', 'จัดการการจอง', 'ป้ายที่จอดรถ'],
      route: '/services/parking-management',
      color: '#F77F00', // Orange shade 2 (lighter)
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
      color: '#D35400', // Orange shade 3 (darker)
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
      color: '#FFA040', // Orange shade 4 (medium light)
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
      color: '#E67E22', // Orange shade 5
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
      color: '#FF8C42', // Orange shade 6 (vibrant)
    },
  ];

  const totalSections = categories.length;
  const anglePerSection = 360 / totalSections;
  const gapAngle = 5; // Gap between sections in degrees
  const actualSectionAngle = anglePerSection - gapAngle;

  // Create SVG path for each section
  const createSectionPath = (index: number, isHovered: boolean) => {
    const startAngle = index * anglePerSection - 90; // Start from top
    const endAngle = startAngle + actualSectionAngle;
    const outerRadius = isHovered ? 190 : 185;
    const innerRadius = 110; // Thicker sections to accommodate upright labels

    const startRadians = (startAngle * Math.PI) / 180;
    const endRadians = (endAngle * Math.PI) / 180;

    const x1 = 200 + outerRadius * Math.cos(startRadians);
    const y1 = 200 + outerRadius * Math.sin(startRadians);
    const x2 = 200 + outerRadius * Math.cos(endRadians);
    const y2 = 200 + outerRadius * Math.sin(endRadians);

    const x3 = 200 + innerRadius * Math.cos(endRadians);
    const y3 = 200 + innerRadius * Math.sin(endRadians);
    const x4 = 200 + innerRadius * Math.cos(startRadians);
    const y4 = 200 + innerRadius * Math.sin(startRadians);

    const largeArcFlag = actualSectionAngle > 180 ? 1 : 0;

    return `
      M ${x1} ${y1}
      A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} 1 ${x2} ${y2}
      L ${x3} ${y3}
      A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${x4} ${y4}
      Z
    `;
  };

  // Calculate position for section labels
  const getLabelPosition = (index: number) => {
    const angle = index * anglePerSection + actualSectionAngle / 2 - 90;
    const radians = (angle * Math.PI) / 180;
    const distance = 147.5; // Middle of the section (adjusted for thicker ring)

    return {
      x: 200 + distance * Math.cos(radians),
      y: 200 + distance * Math.sin(radians),
      angle: 0, // Keep text horizontal (right-side-up)
    };
  };

  // Calculate position for service list tooltip
  const getTooltipPosition = (index: number) => {
    const angle = index * anglePerSection + actualSectionAngle / 2 - 90;
    const radians = (angle * Math.PI) / 180;
    const distance = 270;

    return {
      x: 200 + distance * Math.cos(radians),
      y: 200 + distance * Math.sin(radians),
    };
  };

  const handleSectionClick = (route: string) => {
    router.push(route);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto py-12">
      <svg
        viewBox="0 0 400 400"
        className="w-full h-full"
        style={{ filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.3))' }}
      >
        {/* Render donut sections */}
        {categories.map((category, index) => {
          const isHovered = hoveredSection === category.id;
          const path = createSectionPath(index, isHovered);
          const labelPos = getLabelPosition(index);

          return (
            <g key={category.id}>
              <motion.path
                d={path}
                fill={category.color}
                stroke="#000"
                strokeWidth="2"
                className="cursor-pointer transition-all duration-300"
                initial={{ scale: 1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                onMouseEnter={() => setHoveredSection(category.id)}
                onMouseLeave={() => setHoveredSection(null)}
                onClick={() => handleSectionClick(category.route)}
                style={{ transformOrigin: '200px 200px' }}
              />

              {/* Category label */}
              <motion.g
                animate={{
                  scale: isHovered ? 1.2 : 1,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                style={{ transformOrigin: `${labelPos.x}px ${labelPos.y}px` }}
              >
                <motion.text
                  x={labelPos.x}
                  y={labelPos.y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="pointer-events-none select-none font-bold text-[10px] fill-white drop-shadow-lg"
                  animate={{
                    filter: isHovered ? 'drop-shadow(0 0 8px rgba(255,107,53,0.8))' : 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))'
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {category.name.split(' ').map((word, i) => (
                    <tspan key={i} x={labelPos.x} dy={i === 0 ? 0 : '1.1em'}>
                      {word}
                    </tspan>
                  ))}
                </motion.text>
              </motion.g>
            </g>
          );
        })}

        {/* Center circle for images */}
        <circle
          cx="200"
          cy="200"
          r="110"
          fill="#0A0A0A"
          stroke="#FF6B35"
          strokeWidth="3"
        />
      </svg>

      {/* Hover tooltip with services - Circular overlay on center carousel */}
      <AnimatePresence>
        {hoveredSection && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20"
          >
            <div className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] rounded-full bg-black/60 backdrop-blur-xl border-3 border-orange-500 shadow-2xl shadow-orange-500/30 flex flex-col items-center justify-center p-6">
              <h3 className="text-orange-500 font-bold text-base md:text-lg mb-3 text-center border-b border-orange-500/30 pb-2 w-full">
                {categories.find(c => c.id === hoveredSection)?.name}
              </h3>
              <ul className="space-y-1.5 max-h-[160px] overflow-y-auto scrollbar-thin scrollbar-thumb-orange-500 scrollbar-track-transparent">
                {categories.find(c => c.id === hoveredSection)?.services.map((service, idx) => (
                  <li key={idx} className="text-white text-xs md:text-sm flex items-center gap-2 justify-center">
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full flex-shrink-0"></span>
                    <span className="text-center">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Center carousel */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] rounded-full overflow-hidden pointer-events-none">
        <CenterCarousel images={serviceImages} autoPlayInterval={3000} />
      </div>
    </div>
  );
}
