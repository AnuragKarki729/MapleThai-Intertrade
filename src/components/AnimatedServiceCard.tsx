'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  index: number;
}

export default function AnimatedServiceCard({
  icon,
  title,
  description,
  index,
}: AnimatedServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: 0.6,
        delay: index * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.3 },
      }}
      className="bg-gradient-to-br from-purple-800/50 to-blue-800/50 backdrop-blur-sm rounded-lg p-8 hover:from-purple-700/60 hover:to-blue-700/60 transition-all duration-300 cursor-pointer border border-purple-500/20 shadow-xl"
    >
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          delay: index * 0.2 + 0.3,
          type: 'spring',
          stiffness: 200,
        }}
        className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-6 shadow-lg"
      >
        {icon}
      </motion.div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
}