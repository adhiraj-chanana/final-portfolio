import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

/**
 * Site-wide smooth scroll (Lenis) wired to GSAP's ticker so ScrollTrigger
 * stays in sync with Lenis's virtual scroll position -- the standard Lenis +
 * ScrollTrigger integration. Skipped entirely under prefers-reduced-motion:
 * smooth-scroll easing changes the physical feel of scrolling, which is
 * itself a motion preference, not just a visual one -- native instant scroll
 * is the correct "gentler" fallback here, not a slowed-down Lenis.
 */
export const useSmoothScroll = () => {
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1 - Math.pow(2, -10 * t)),
    });

    lenis.on('scroll', ScrollTrigger.update);

    const tickerCallback = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
    };
  }, [prefersReducedMotion]);
};
