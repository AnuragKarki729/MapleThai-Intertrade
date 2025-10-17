'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ServiceButton {
  id: number;
  name: string;
  nameTh: string;
  route: string;
  position: {
    top: string;
    left: string;
  };
}

interface InteractiveServiceMapProps {
  language: 'en' | 'th';
}

export default function InteractiveServiceMap({ language }: InteractiveServiceMapProps) {
  const [hoveredButton, setHoveredButton] = useState<number | null>(null);

  const serviceButtons: ServiceButton[] = [
    {
      id: 1,
      name: 'Visitor Management',
      nameTh: 'จัดการผู้มาเยือน',
      route: '/services/visitor-management',
      position: { top: '63%', left: '13%' }, // Bottom left
    },
    {
      id: 2,
      name: 'Parking Management',
      nameTh: 'จัดการที่จอดรถ',
      route: '/services/parking-management',
      position: { top: '80.5%', left: '33%' }, // Bottom center
    },
    {
      id: 3,
      name: 'Access Manager',
      nameTh: 'จัดการการเข้าออก',
      route: '/services/access-management',
      position: { top: '35%', left: '15%' }, // Left side
    },
    {
      id: 4,
      name: 'Security Management',
      nameTh: 'จัดการความปลอดภัย',
      route: '/services/security-management',
      position: { top: '72%', left: '82%' }, // Bottom right
    },
    {
      id: 5,
      name: 'Warehouse Solution',
      nameTh: 'โซลูชันคลังสินค้า',
      route: '/services/warehouse-solution',
      position: { top: '28%', left: '76%' }, // Right side
    },
    {
      id: 6,
      name: 'AI Smart',
      nameTh: 'AI อัจฉริยะ',
      route: '/services/ai-smart',
      position: { top: '10%', left: '53%' }, // Top center
    },
  ];

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Main Image */}
      <div className="relative w-full">
        <Image
          src="/landing_page2/facility_map.png"
          alt="Interactive Facility Map"
          width={1720}
          height={870}
          className="w-full h-auto object-contain"
          priority
          unoptimized
        />

        {/* Clickable Buttons Overlay */}
        {serviceButtons.map((service) => (
          <Link
            key={service.id}
            href={service.route}
            onMouseEnter={() => setHoveredButton(service.id)}
            onMouseLeave={() => setHoveredButton(null)}
            className="absolute group"
            style={{
              top: service.position.top,
              left: service.position.left,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <motion.div
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              className="relative"
            >
              {/* Clickable Button */}
              <div
                className={`
                  px-1 sm:px-1 md:px-1 py-1 sm:py-1 md:py-2 rounded-md sm:rounded-lg border sm:border-0 transition-all duration-300
                  ${
                    hoveredButton === service.id
                      ? 'bg-amber-600/80 border-amber-600 shadow-lg shadow-amber-600/50'
                      : 'bg-transparent border-transparent hover:bg-amber-600'
                  }
                  cursor-pointer
                `}
              >
                <div className="flex items-center">
                  {/* Service Name */}
                  <span className="text-black font-semibold text-[10px] sm:text-xs md:text-xs lg:text-lg whitespace-nowrap">
                    {language === 'en' ? service.name : service.nameTh}
                  </span>
                </div>
              </div>

              {/* Pulse Animation on Hover */}
              {hoveredButton === service.id && (
                <motion.div
                  initial={{ scale: 1, opacity: 0.5 }}
                  animate={{ scale: 1.5, opacity: 0 }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="absolute inset-0 rounded-lg border-2 border-orange-400"
                />
              )}
            </motion.div>
          </Link>
        ))}
      </div>

      {/* Legend or Instructions (Optional) */}
      <div className="mt-6 text-center">
        <p className="text-gray-900 text-md">
          {language === 'en'
            ? 'Click on any service to learn more'
            : 'คลิกที่บริการใดก็ได้เพื่อเรียนรู้เพิ่มเติม'}
        </p>
      </div>
    </div>
  );
}