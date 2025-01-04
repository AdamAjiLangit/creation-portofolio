'use client';

import { useState, useEffect } from 'react';
import { NextUIProvider, Button } from '@nextui-org/react';
import { AnimatePresence } from 'framer-motion';
import { ReactLenis } from '@studio-freight/react-lenis';
import AnimatedButton from '@/components/ui/animated-button';
import Preloader from '@/components/preloader/Preloader';
import Hero from '@/components/pages/Landing/Hero';
import { About } from '@/components/pages/Landing/About';
import { Projects } from '@/components/pages/Landing/Projects';
import Skills from '@/components/pages/Landing/Skills';
import Gallery from '@/components/pages/Landing/Gallery';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    setHasHydrated(true);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('locomotive-scroll').then(({ default: LocomotiveScroll }) => {
        const locomotiveScroll = new LocomotiveScroll();
        setTimeout(() => {
          setIsLoading(false);
          document.body.style.cursor = 'default';
          window.scrollTo(0, 0);
        }, 2000);

        return () => {
          locomotiveScroll.destroy();
        };
      });
    }
  }, []);

  if (!hasHydrated) {
    return null;
  }

  return (
    <NextUIProvider>
      <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
        <AnimatePresence mode="wait">
          {isLoading && <Preloader />}
        </AnimatePresence>
        {!isLoading && <Hero />}
        <About />
        <Projects />
        <Skills />
        <Gallery />
      </ReactLenis>
    </NextUIProvider>
  );
}
