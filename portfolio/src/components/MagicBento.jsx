import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { useReducedMotion } from 'framer-motion';
import './MagicBento.css';

const DEFAULT_GLOW_COLOR = '94, 200, 255'; // --color-accent (#5ec8ff) as R, G, B
const TILT_MAX_DEG = 3; // deliberately subtle -- the original component's default (10deg) reads as gimmicky, not confident

const useHoverCapable = () => {
  const [hoverCapable, setHoverCapable] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
    setHoverCapable(mq.matches);
    const handleChange = (e) => setHoverCapable(e.matches);
    mq.addEventListener('change', handleChange);
    return () => mq.removeEventListener('change', handleChange);
  }, []);

  return hoverCapable;
};

const BentoCard = ({ card, enableBorderGlow, enableTilt, glowColor, effectsEnabled }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el || !effectsEnabled) return;

    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (enableBorderGlow) {
        el.style.setProperty('--glow-x', `${(x / rect.width) * 100}%`);
        el.style.setProperty('--glow-y', `${(y / rect.height) * 100}%`);
      }

      if (enableTilt) {
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        gsap.to(el, {
          rotateX: ((y - centerY) / centerY) * -TILT_MAX_DEG,
          rotateY: ((x - centerX) / centerX) * TILT_MAX_DEG,
          duration: 0.2,
          ease: 'power2.out',
          transformPerspective: 800,
        });
      }
    };

    const handleMouseEnter = () => {
      if (enableBorderGlow) el.style.setProperty('--glow-intensity', '1');
    };

    const handleMouseLeave = () => {
      if (enableBorderGlow) el.style.setProperty('--glow-intensity', '0');
      if (enableTilt) {
        gsap.to(el, { rotateX: 0, rotateY: 0, duration: 0.3, ease: 'power2.out' });
      }
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseenter', handleMouseEnter);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseenter', handleMouseEnter);
      el.removeEventListener('mouseleave', handleMouseLeave);
      gsap.set(el, { clearProps: 'transform' });
    };
  }, [enableBorderGlow, enableTilt, effectsEnabled]);

  const sizeClass = card.size ? `magic-bento-card--${card.size}` : '';
  const glowClass = enableBorderGlow ? 'magic-bento-card--border-glow' : '';

  return (
    <div
      ref={cardRef}
      className={`magic-bento-card ${sizeClass} ${glowClass}`.trim()}
      style={{ '--glow-color': glowColor }}
    >
      {card.render ? (
        card.render()
      ) : (
        <div className="magic-bento-card__content">
          {card.label && <div className="magic-bento-card__label">{card.label}</div>}
          {card.title && <h3 className="magic-bento-card__title">{card.title}</h3>}
          {card.description && <p className="magic-bento-card__description">{card.description}</p>}
        </div>
      )}
    </div>
  );
};

/**
 * A bento grid of cards with a cursor-following border glow and subtle tilt.
 * Cards come entirely from the `cards` prop (each: { id, label?, title?,
 * description?, size?, render? }) -- render() lets a card ship fully custom
 * content (e.g. an animated illustration) instead of the label/title/description
 * layout. `size` is one of 'large' | 'tall' | 'wide' | undefined (normal 1x1).
 */
const MagicBento = ({
  cards = [],
  enableBorderGlow = true,
  enableTilt = true,
  glowColor = DEFAULT_GLOW_COLOR,
}) => {
  const prefersReducedMotion = useReducedMotion();
  const hoverCapable = useHoverCapable();
  const effectsEnabled = hoverCapable && !prefersReducedMotion;

  return (
    <div className="magic-bento-grid">
      {cards.map((card, index) => (
        <BentoCard
          key={card.id ?? index}
          card={card}
          enableBorderGlow={enableBorderGlow}
          enableTilt={enableTilt}
          glowColor={glowColor}
          effectsEnabled={effectsEnabled}
        />
      ))}
    </div>
  );
};

export default MagicBento;
