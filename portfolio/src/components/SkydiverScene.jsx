import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useReducedMotion } from 'framer-motion';
import skydiveImage from '../assets/skydive.png';
import './SkydiverScene.css';

// Two depth layers of wind streaks rushing upward past the figure (the
// relative-wind read of a falling body) -- a near layer (thicker, faster,
// more opaque) and a far layer (thinner, slower, fainter) for a slight
// parallax between them. Each resets off the top edge, hidden by the
// card's own overflow:hidden, so the loop is seamless.
const NEAR_STREAKS = [
  { left: '10%', delay: 0, duration: 1.7, drift: 14 },
  { left: '30%', delay: 0.5, duration: 2.0, drift: -10 },
  { left: '68%', delay: 1.1, duration: 1.8, drift: 12 },
  { left: '88%', delay: 0.3, duration: 2.1, drift: -8 },
];

const FAR_STREAKS = [
  { left: '20%', delay: 0.8, duration: 3.2, drift: 6 },
  { left: '50%', delay: 0.1, duration: 3.6, drift: -5 },
  { left: '78%', delay: 1.6, duration: 3.0, drift: 7 },
];

const SkydiverScene = () => {
  const containerRef = useRef(null);
  const figureRef = useRef(null);
  const nearRefs = useRef([]);
  const farRefs = useRef([]);
  const tweensRef = useRef([]);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || !containerRef.current) return;

    const el = containerRef.current;
    let isVisible = false;

    const runStreak = (node, config, distance) => {
      return gsap.fromTo(
        node,
        { y: distance, x: 0, opacity: 0 },
        {
          y: -distance * 0.15,
          x: config.drift,
          opacity: 1,
          duration: config.duration,
          delay: config.delay,
          ease: 'none',
          repeat: -1,
          onRepeat: () => gsap.set(node, { opacity: 0 }),
          onStart: () => gsap.to(node, { opacity: 1, duration: 0.25 }),
        }
      );
    };

    const startAnimation = () => {
      tweensRef.current = [];

      // gentle continuous float: a slow bob + sway, the "hanging in the
      // relative wind" feel rather than a literal fall across the card
      tweensRef.current.push(
        gsap.to(figureRef.current, {
          y: 6,
          rotate: 3,
          duration: 2.6,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
          transformOrigin: '50% 50%',
        })
      );

      NEAR_STREAKS.forEach((config, i) => {
        const node = nearRefs.current[i];
        if (node) tweensRef.current.push(runStreak(node, config, 200));
      });

      FAR_STREAKS.forEach((config, i) => {
        const node = farRefs.current[i];
        if (node) tweensRef.current.push(runStreak(node, config, 200));
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
      {!prefersReducedMotion && (
        <>
          {FAR_STREAKS.map((s, i) => (
            <span
              key={`far-${i}`}
              ref={(node) => { farRefs.current[i] = node; }}
              className="skydiver-scene__streak skydiver-scene__streak--far"
              style={{ left: s.left }}
            />
          ))}
          {NEAR_STREAKS.map((s, i) => (
            <span
              key={`near-${i}`}
              ref={(node) => { nearRefs.current[i] = node; }}
              className="skydiver-scene__streak skydiver-scene__streak--near"
              style={{ left: s.left }}
            />
          ))}
        </>
      )}

      <img
        className="skydiver-scene__figure"
        ref={figureRef}
        src={skydiveImage}
        alt=""
        loading="lazy"
      />
    </div>
  );
};

export default SkydiverScene;
