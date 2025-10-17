'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Cctv, UserLock, SquareParking, Warehouse, UserRoundSearch, BrainCircuit } from 'lucide-react';

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
  icon: React.ComponentType<{ className?: string }>;
}

interface ServicesDonutChartProps {
  language?: 'en' | 'th';
}

export default function ServicesDonutChart({ language = 'en' }: ServicesDonutChartProps) {
  const router = useRouter();
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  // Define service categories with orange gradient shades and icons
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
      color: '#FB923C', // orange-400
      icon: UserRoundSearch,
    },
    {
      id: 'parking',
      name: language === 'en' ? 'Parking Management' : 'จัดการที่จอดรถ',
      nameEn: 'Parking Management',
      nameTh: 'จัดการที่จอดรถ',
      services: language === 'en'
        ? ['LPR Systems', 'Gate Barrier', 'Parking Payment', 'Vehicle Managements', 'Q-Booking', 'Parking Sign Board']
        : ['ระบบ LPR', 'ไม้กั้นรถ', 'ชำระเงินที่จอดรถ', 'จัดการยานพาหนะ', 'จัดการการจอง', 'ป้ายที่จอดรถ'],
      servicesEn: ['LPR Systems', 'Gate Barrier', 'Parking Payment', 'Vehicle Managements', 'Q-Booking', 'Parking Sign Board'],
      servicesTh: ['ระบบ LPR', 'ไม้กั้นรถ', 'ชำระเงินที่จอดรถ', 'จัดการยานพาหนะ', 'จัดการการจอง', 'ป้ายที่จอดรถ'],
      route: '/services/parking-management',
      color: '#F97316', // orange-500
      icon: SquareParking,
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
      color: '#EA580C', // amber-600
      icon: UserLock,
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
      color: '#FDBA74', // orange-300
      icon: Cctv,
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
      color: '#C2410C', // orange-700
      icon: Warehouse,
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
      color: '#FED7AA', // orange-200
      icon: BrainCircuit,
    },
  ];

  const totalSections = categories.length;
  const anglePerSection = 360 / totalSections;
  const gapAngle = 6; // Gap between sections in degrees
  const actualSectionAngle = anglePerSection - gapAngle;

  // Create SVG path for each section
  const createSectionPath = (index: number, isHovered: boolean) => {
    const startAngle = index * anglePerSection - 90; // Start from top
    const endAngle = startAngle + actualSectionAngle;
    const outerRadius = isHovered ? 195 : 190;
    const innerRadius = 115;

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
    const distance = 152.5;

    return {
      x: 200 + distance * Math.cos(radians),
      y: 200 + distance * Math.sin(radians),
    };
  };

  const handleSectionClick = (route: string) => {
    router.push(route);
  };

  const centerText = language === 'en'
    ? 'One Stop Security Solution'
    : 'โซลูชันรักษาความปลอดภัยครบวงจร';

  return (
    <div className="relative w-full max-w-2xl mx-auto py-0">
      <svg
        viewBox="-20 -20 440 440"
        className="w-full h-full overflow-visible"
        style={{ filter: 'drop-shadow(0 10px 40px rgba(251, 146, 60, 0.15))', overflow: 'visible' }}
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
                stroke="rgba(255, 255, 255, 0.3)"
                strokeWidth="1"
                className="cursor-pointer transition-all duration-300"
                initial={{ scale: 1 }}
                animate={{
                  filter: isHovered
                    ? `drop-shadow(0 0 12px ${category.color})`
                    : 'drop-shadow(0 2px 8px rgba(251, 146, 60, 0.2))'
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                onMouseEnter={() => setHoveredSection(category.id)}
                onMouseLeave={() => setHoveredSection(null)}
                onClick={() => handleSectionClick(category.route)}
                style={{ transformOrigin: '200px 200px' }}
              />

              {/* Category label with icon - Using foreignObject for React components */}
              <foreignObject
                x={labelPos.x - 40}
                y={labelPos.y - 40}
                width="80"
                height="80"
                className="pointer-events-none overflow-visible"
                style={{ overflow: 'visible' }}
              >
                <motion.div
                  className="flex flex-col items-center justify-center w-full h-full"
                  animate={{
                    scale: isHovered ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                  style={{
                    filter: isHovered
                      ? `drop-shadow(0 0 8px rgba(251, 146, 60, 0.9)) drop-shadow(0 0 12px ${category.color})`
                      : 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))'
                  }}
                >
                  <category.icon className="w-5 h-5 text-white mb-1" />
                  <div className="text-center text-white font-bold text-[9px] leading-tight">
                    {category.name.split(' ').map((word, i) => (
                      <div key={i}>{word}</div>
                    ))}
                  </div>
                </motion.div>
              </foreignObject>
            </g>
          );
        })}

        {/* Center circle with gradient */}
        <defs>
          <linearGradient id="centerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFAF0" />
            <stop offset="100%" stopColor="#FFF8F0" />
          </linearGradient>
          <linearGradient id="borderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FB923C" />
            <stop offset="50%" stopColor="#F97316" />
            <stop offset="100%" stopColor="#EA580C" />
          </linearGradient>
        </defs>

        <circle
          cx="200"
          cy="200"
          r="115"
          fill="url(#centerGradient)"
          stroke="url(#borderGradient)"
          strokeWidth="4"
        />

        {/* Center text */}
        <text
          x="200"
          y="200"
          textAnchor="middle"
          dominantBaseline="middle"
          className="font-bold fill-amber-600"
          style={{ fontSize: language === 'en' ? '16px' : '14px' }}
        >
          {centerText.split(' ').map((word, i, arr) => (
            <tspan
              key={i}
              x="200"
              dy={i === 0 ? `-${(arr.length - 1) * 0.6}em` : '1.2em'}
            >
              {word}
            </tspan>
          ))}
        </text>
      </svg>

      {/* Hover tooltip with services */}
      <AnimatePresence>
        {hoveredSection && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20"
          >
            <div className="min-w-[250px] max-w-[300px] rounded-2xl bg-white/95 backdrop-blur-xl border-2 border-orange-500 shadow-2xl shadow-orange-500/20 p-6">
              <h3 className="text-amber-600 font-bold text-lg mb-3 text-center border-b border-orange-200 pb-2">
                {categories.find(c => c.id === hoveredSection)?.name}
              </h3>
              <ul className="space-y-2">
                {categories.find(c => c.id === hoveredSection)?.services.map((service, idx) => (
                  <li key={idx} className="text-gray-700 text-sm flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full flex-shrink-0 mt-1.5"></span>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}