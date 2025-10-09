'use client';

import { useState, useEffect } from 'react';
import Carousel from './Carousel';
import { motion, AnimatePresence } from 'framer-motion';

interface HeroCarouselProps {
  images: string[];
  title: string;
  subtitle: string;
  description: string;
  language?: 'en' | 'th';
}

export default function HeroCarousel({
  images,
  title,
  subtitle,
  description,
  language = 'en',
}: HeroCarouselProps) {
  const [showOverlay, setShowOverlay] = useState(false);
  const [hideTimer, setHideTimer] = useState<NodeJS.Timeout | null>(null);

  const handleInteraction = () => {
    setShowOverlay(true);

    // Clear existing timer
    if (hideTimer) {
      clearTimeout(hideTimer);
    }

    // Set new timer to hide after 4 seconds
    const timer = setTimeout(() => {
      setShowOverlay(false);
    }, 4000);

    setHideTimer(timer);
  };

  useEffect(() => {
    return () => {
      if (hideTimer) {
        clearTimeout(hideTimer);
      }
    };
  }, [hideTimer]);

  return (
    <section
      className="relative"
      onMouseEnter={handleInteraction}
      onClick={handleInteraction}
    >
      <Carousel images={images} autoPlayInterval={5000} />

      <AnimatePresence>
        {showOverlay && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center pointer-events-none"
          >
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center text-white px-4 max-w-4xl"
            >
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 drop-shadow-2xl"
              >
                <span className="text-blue-700 drop-shadow-lg">
                  {language === 'th' ? 'เมเปิล ไทย' : 'Maple Thai'}
                </span>{' '}
                {title}
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg md:text-xl lg:text-2xl mb-2 drop-shadow-2xl font-semibold"
              >
                {subtitle}
              </motion.p>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg md:text-xl drop-shadow-2xl"
              >
                {description}
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}