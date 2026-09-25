import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useReducedMotion } from 'framer-motion';
import './PianoKeys.css';

const WHITE_KEY_WIDTH = 33;
const WHITE_KEYS = [0, 1, 2, 3, 4, 5, 6, 7];
// black keys sit on the boundary after these white-key indices (skips the
// E-F and B-C boundaries, matching a real keyboard's C-major octave)
const BLACK_KEY_AFTER = [0, 1, 3, 4, 5];

/**
 * A small piano keyboard illustration. On hover (pointer devices only), the
 * keys press down in a short staggered run, like a quick riff. Individual
 * keys also press on their own hover via CSS. No sound, purely visual.
 * Respects prefers-reduced-motion by skipping the ripple entirely -- the
 * per-key CSS hover response is a tiny, non-travelling color/shadow change
 * and stays on even under reduced motion.
 */
const PianoKeys = () => {
  const containerRef = useRef(null);
  const whiteKeyRefs = useRef([]);
  const blackKeyRefs = useRef([]);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const el = containerRef.current;
    if (!el || prefersReducedMotion) return;

    const hoverCapable = () => window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    const playRipple = () => {
      if (!hoverCapable()) return;
      const keys = [...whiteKeyRefs.current, ...blackKeyRefs.current].filter(Boolean);
      const order = [0, 2, 4, 1, 3, 6, 5, 7, 9, 8, 10, 11, 12].filter((i) => i < keys.length);

      order.forEach((keyIndex, seq) => {
        const key = keys[keyIndex];
        if (!key) return;
        gsap
          .timeline({ delay: seq * 0.045 })
          .to(key, { y: 4, duration: 0.09, ease: 'power1.out' })
          .to(key, { y: 0, duration: 0.18, ease: 'power2.out' });
      });
    };

    el.addEventListener('mouseenter', playRipple);
    return () => el.removeEventListener('mouseenter', playRipple);
  }, [prefersReducedMotion]);

  return (
    <div className="piano-keys" ref={containerRef} aria-hidden="true">
      <svg className="piano-keys__svg" viewBox="0 0 280 90">
        {WHITE_KEYS.map((i) => (
          <rect
            key={`w-${i}`}
            ref={(node) => { whiteKeyRefs.current[i] = node; }}
            className="piano-keys__white"
            x={i * WHITE_KEY_WIDTH + 1}
            y={2}
            width={WHITE_KEY_WIDTH - 2}
            height={80}
            rx={3}
          />
        ))}
        {BLACK_KEY_AFTER.map((i, idx) => (
          <rect
            key={`b-${i}`}
            ref={(node) => { blackKeyRefs.current[idx] = node; }}
            className="piano-keys__black"
            x={(i + 1) * WHITE_KEY_WIDTH - 10}
            y={2}
            width={20}
            height={50}
            rx={2}
          />
        ))}
      </svg>
    </div>
  );
};

export default PianoKeys;
