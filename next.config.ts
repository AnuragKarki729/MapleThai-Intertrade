import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
    ],
    // Disable image optimization in development to prevent caching issues
    unoptimized: process.env.NODE_ENV === 'development',
  },
};

export default nextConfig;
