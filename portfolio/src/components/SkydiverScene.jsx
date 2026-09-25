import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useReducedMotion } from 'framer-motion';
import './SkydiverScene.css';

// 6 streak elements, evenly-ish spread across the card, each falling
// diagonally on its own loop with a staggered start so they never move in
// lockstep. Reset happens off the bottom edge, hidden by the card's own
// overflow:hidden -- no visible jump.
const STREAKS = [
  { left: '8%', delay: 0, duration: 2.1, drift: 22 },
  { left: '24%', delay: 0.6, duration: 2.6, drift: -14 },
  { left: '42%', delay: 1.3, duration: 1.9, drift: 18 },
  { left: '61%', delay: 0.2, duration: 2.4, drift: -20 },
  { left: '78%', delay: 1.7, duration: 2.2, drift: 12 },
  { left: '90%', delay: 0.9, duration: 2.8, drift: -10 },
];

const SkydiverScene = () => {
  const containerRef = useRef(null);
  const figureRef = useRef(null);
  const streakRefs = useRef([]);
  const tweensRef = useRef([]);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || !containerRef.current) return;

    const el = containerRef.current;
    let isVisible = false;

    const startAnimation = () => {
      tweensRef.current = [];

      tweensRef.current.push(
        gsap.to(figureRef.current, {
          rotate: 4,
          duration: 2.4,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
          transformOrigin: '50% 50%',
        })
      );

      STREAKS.forEach((streak, i) => {
        const node = streakRefs.current[i];
        if (!node) return;
        tweensRef.current.push(
          gsap.fromTo(
            node,
            { y: -40, x: 0, opacity: 0 },
            {
              y: 420,
              x: streak.drift,
              opacity: 1,
              duration: streak.duration,
              delay: streak.delay,
              ease: 'none',
              repeat: -1,
              onRepeat: () => gsap.set(node, { opacity: 0 }),
              onStart: () => gsap.to(node, { opacity: 1, duration: 0.3 }),
            }
          )
        );
      });
    };

    const stopAnimation = () => {
      tweensRef.current.forEach((t) => t.kill());
      tweensRef.current = [];
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          isVisible = true;
          startAnimation();
        } else if (!entry.isIntersecting && isVisible) {
          isVisible = false;
          stopAnimation();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      stopAnimation();
    };
  }, [prefersReducedMotion]);

  return (
    <div className="skydiver-scene" ref={containerRef} aria-hidden="true">
      {!prefersReducedMotion &&
        STREAKS.map((streak, i) => (
          <span
            key={i}
            ref={(node) => { streakRefs.current[i] = node; }}
            className="skydiver-scene__streak"
            style={{ left: streak.left }}
          />
        ))}

      <svg
        className="skydiver-scene__figure"
        ref={figureRef}
        viewBox="0 0 100 100"
        fill="none"
      >
        <defs>
          <linearGradient id="skydiver-trail" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0" />
            <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0.5" />
          </linearGradient>
        </defs>

        {/* comet trail, fixed behind the figure */}
        <path d="M50 4 L58 34 L42 34 Z" fill="url(#skydiver-trail)" />

        {/* limbs, spread-eagle freefall pose */}
        <g stroke="var(--color-text)" strokeWidth="7" strokeLinecap="round">
          <line x1="50" y1="38" x2="21" y2="19" />
          <line x1="50" y1="38" x2="79" y2="19" />
          <line x1="50" y1="56" x2="26" y2="87" />
          <line x1="50" y1="56" x2="74" y2="87" />
          <line x1="50" y1="32" x2="50" y2="58" strokeWidth="11" />
        </g>

        {/* head */}
        <circle cx="50" cy="24" r="7.5" fill="var(--color-text)" />
      </svg>
    </div>
  );
};

export default SkydiverScene;
