# MapleThai Intertrade

A modern, professional website for Maple Thai Intertrade - a leading security solutions provider in Thailand.

## Features

- 🌐 **Bilingual Support**: Seamless Thai/English language switching with persistent state
- 🎨 **Modern Design**: Dark theme with deep purple and blue gradients
- 📱 **Responsive**: Fully responsive design for all devices
- ✨ **Animations**: Smooth scroll-triggered animations using Framer Motion
- 🖼️ **Image Carousel**: Auto-playing hero carousel with manual controls
- 🎯 **Interactive UI**: Hover effects, scale animations, and glassmorphism design

## Tech Stack

- **Framework**: Next.js 15.5.4 with Turbopack
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **State Management**: Zustand with persistence
- **Language**: TypeScript

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/
│   ├── page.tsx          # Main landing page
│   └── globals.css       # Global styles and color palette
├── components/
│   ├── Navigation.tsx    # Header navigation with language toggle
│   ├── HeroCarousel.tsx  # Hero section with image carousel
│   ├── Carousel.tsx      # Reusable carousel component
│   └── AnimatedServiceCard.tsx  # Animated service cards
└── store/
    └── languageStore.ts  # Zustand store for language state
```

## Color Palette

The website uses a custom dark theme with:
- Deep Purple: `#1a0d2e` to `#12051f`
- Deep Blue: `#0a1628` to `#040a12`
- Cyan Accents: `#06b6d4` to `#0891b2`
- Black gradients for backgrounds

## Deploy on Vercel

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## License

All rights reserved © Maple Thai Intertrade