import { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const EASE_OUT = 'cubic-bezier(0.23, 1, 0.32, 1)';

/**
 * Fade + small rise, staggered across `selector` matches inside
 * `containerRef`, triggered once when the container enters the viewport.
 * Shared across sections so the reveal reads as one consistent language
 * site-wide rather than a different curve/distance per section.
 *
 * Uses useLayoutEffect so the initial hidden state is applied before paint --
 * a plain useEffect would flash the content visible for a frame first.
 */
export const useScrollReveal = (
  containerRef,
  { selector, y = 24, stagger = 0.08, duration = 0.3, start = 'top 85%' } = {}
) => {
  const prefersReducedMotion = useReducedMotion();

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container || prefersReducedMotion) return;

    const targets = selector ? container.querySelectorAll(selector) : [container];
    if (!targets.length) return;

    gsap.set(targets, { opacity: 0, y });

    const trigger = ScrollTrigger.create({
      trigger: container,
      start,
      once: true,
      onEnter: () => {
        gsap.to(targets, {
          opacity: 1,
          y: 0,
          duration,
          stagger,
          ease: EASE_OUT,
        });
      },
    });

    return () => {
      trigger.kill();
      gsap.set(targets, { clearProps: 'opacity,transform' });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerRef, selector, y, stagger, duration, start, prefersReducedMotion]);
};
