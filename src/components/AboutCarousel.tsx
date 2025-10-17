
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface AboutCarouselProps {
  text: {
    paragraph2: string;
    paragraph3: string;
  };
}

const carouselContent = [
  {
    id: 'expertise',
    paragraph: 'paragraph2',
   
    alt: 'Expertise',
    imgClass: 'from-amber-600 to-red-700',
    textClass: 'md:text-right',
    layoutClass: 'md:flex-row-reverse',
  },
  {
    id: 'values',
    paragraph: 'paragraph3',
    
    alt: 'Company Values',
    imgClass: 'from-orange-500 to-yellow-600',
    textClass: '',
    layoutClass: 'md:flex-row',
  },
];

export default function AboutCarousel({ text }: AboutCarouselProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % carouselContent.length);
    }, 12000);
    return () => clearInterval(timer);
  }, []);

  const currentContent = carouselContent[index];

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % carouselContent.length);
  };

  const floatClass = currentContent.id === 'expertise' ? 'float-right ml-6 mb-4' : 'float-left mr-6 mb-4';

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentContent.id}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.7 }}
          className="bg-black/60 backdrop-blur-sm p-8 rounded-xl border border-orange-900/30 shadow-xl hover:shadow-2xl hover:border-amber-600/50 transition-all overflow-hidden"
        >
          <motion.div
            initial={{ scale: 0, rotate: 180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: 'spring' }}
            className={`flex-shrink-0 ${floatClass}`}
          >
            {/* <div
              className={`w-16 h-16 md:w-30 md:h-30 bg-gradient-to-br ${currentContent.imgClass} rounded-xl flex items-center justify-center shadow-lg overflow-hidden ring-2 ring-amber-600/50`}
            >
              <Image
                src={currentContent.image}
                alt={currentContent.alt}
                width={80}
                height={80}
                className="w-full h-full object-cover"
                unoptimized
              />
            </div> */}
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={`text-gray-200 text-lg leading-relaxed flex-1 ${currentContent.textClass}`}
          >
            {text[currentContent.paragraph as keyof typeof text]}
          </motion.p>
        </motion.div>
      </AnimatePresence>
      <button
        onClick={handleNext}
        className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-amber-600/80 text-white p-2 rounded-full hover:bg-orange-500 transition-all focus:outline-none"
        aria-label="Next slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
}
