import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useReducedMotion } from 'framer-motion';
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

      <svg
        className="skydiver-scene__figure"
        ref={figureRef}
        viewBox="0 0 200 150"
        fill="none"
      >
        {/* harness straps, drawn first so the torso/limbs overlap them */}
        <g stroke="var(--color-canvas)" strokeWidth="2.5" strokeLinecap="round" opacity="0.6">
          <line x1="92" y1="46" x2="70" y2="70" />
          <line x1="118" y1="46" x2="140" y2="66" />
        </g>

        {/* legs: thigh + shin, bent at the knee, feet coming up behind */}
        <g strokeLinecap="round">
          <line x1="146" y1="60" x2="173" y2="85" stroke="var(--color-accent)" strokeWidth="11" />
          <line x1="173" y1="85" x2="159" y2="47" stroke="var(--color-accent)" strokeWidth="10" />
        </g>
        <rect x="150" y="36" width="17" height="10" rx="3" fill="var(--color-accent-text)" transform="rotate(-24 158 41)" />

        {/* arms: upper arm + forearm, reaching forward and down */}
        <g strokeLinecap="round">
          <line x1="56" y1="64" x2="39" y2="87" stroke="var(--color-accent)" strokeWidth="10" />
          <line x1="39" y1="87" x2="19" y2="92" stroke="var(--color-accent)" strokeWidth="9" />
        </g>
        <circle cx="16" cy="93" r="5.5" fill="var(--color-accent-text)" />

        {/* torso: an arched "banana" crescent -- the belly-to-earth curve */}
        <path
          d="M 58 62 Q 105 32 150 56 L 143 72 Q 100 96 63 76 Z"
          fill="var(--color-accent)"
        />
        {/* thin trim stripe for a gear-like detail */}
        <path
          d="M 63 76 Q 100 96 143 72"
          stroke="var(--color-accent-text)"
          strokeWidth="1.5"
          opacity="0.35"
          fill="none"
        />

        {/* rig / parachute container, worn on the back */}
        <rect
          x="80" y="35" width="34" height="17" rx="4"
          fill="var(--color-accent-text)"
          transform="rotate(-13 97 43)"
        />

        {/* helmet + tinted visor */}
        <circle cx="42" cy="52" r="14" fill="var(--color-accent-text)" />
        <ellipse cx="36" cy="55" rx="8.5" ry="6.5" fill="var(--color-accent)" opacity="0.4" />
      </svg>
    </div>
  );
};

export default SkydiverScene;
