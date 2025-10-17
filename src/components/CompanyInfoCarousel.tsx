'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CompanyInfoCarouselProps {
  text: {
    paragraph2: string;
    paragraph3: string;
  };
}

const carouselContent = [
  {
    id: 'expertise',
    paragraph: 'paragraph2',
  },
  {
    id: 'values',
    paragraph: 'paragraph3',
  },
];

export default function CompanyInfoCarousel({ text }: CompanyInfoCarouselProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % carouselContent.length);
    }, 8000); // 8 seconds auto-advance
    return () => clearInterval(timer);
  }, []);

  const currentContent = carouselContent[index];

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % carouselContent.length);
  };

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + carouselContent.length) % carouselContent.length);
  };

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentContent.id}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.3)]"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-black text-lg leading-relaxed"
          >
            {text[currentContent.paragraph as keyof typeof text]}
          </motion.p>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-4 mt-6">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="bg-amber-600 text-white p-3 rounded-full hover:bg-orange-700 transition-all focus:outline-none shadow-md"
          aria-label="Previous slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Dots Indicator */}
        <div className="flex items-center gap-2">
          {carouselContent.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === index ? 'w-8 bg-amber-600' : 'w-2 bg-gray-300'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="bg-amber-600 text-white p-3 rounded-full hover:bg-orange-700 transition-all focus:outline-none shadow-md"
          aria-label="Next slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
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
    </div>
  );
}