import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from 'framer-motion';
import MagicBento from './MagicBento';
import SkydiverScene from './SkydiverScene';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    id: 'skydiving',
    size: 'large',
    render: () => (
      <>
        <SkydiverScene />
        <div className="magic-bento-card__content magic-bento-card__content--scrim">
          <div className="magic-bento-card__label">Skydiving</div>
          <p className="magic-bento-card__description">
            Jumped out of a perfectly good airplane. Would absolutely do it again.
          </p>
        </div>
      </>
    ),
  },
  {
    id: 'ra',
    size: 'tall',
    label: 'Resident Assistant',
    description: 'Part community-builder, part conflict-mediator, full-time fire-alarm survivor.',
  },
  {
    id: 'pitchrank',
    size: 'tall',
    label: 'Side Project',
    description: "Built an AI that roasts your pitch-practice sessions through a “boss character.” Turns out robots can be savage too.",
  },
  {
    id: 'piano',
    label: 'Piano',
    description: '13 years in. Faster at scales than at LeetCode, most days.',
  },
  {
    id: 'soccer',
    label: 'Soccer',
    description: "Died-in-the-wool fan. Come with an opinion on the best midfielder — I have several.",
  },
  {
    id: 'hobbies',
    size: 'wide',
    label: 'Also Into',
    description: 'Movies, music, and an unreasonable amount of coffee.',
  },
];

/**
 * This section's entrance is the site's one pinned/scrubbed signature moment
 * (see Stage 6 brief: "one or two signature moments max"). The section pins
 * for a short scroll distance while the six bento cards reveal in sequence,
 * tied directly to scroll position (scrub) rather than time -- scrolling
 * back up reverses it, which is the expected behavior for this pattern
 * (distinct from the one-shot, non-reversing reveals used elsewhere on the
 * site). transform/opacity only, so it stays on the GPU; ScrollTrigger's
 * own pin-spacer handles reserving layout space, so nothing jumps.
 */
const About = () => {
  const sectionRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section || prefersReducedMotion) return;

    const cardEls = section.querySelectorAll('.magic-bento-card');
    if (!cardEls.length) return;

    const ctx = gsap.context(() => {
      gsap.set(cardEls, { opacity: 0, y: 40, scale: 0.94 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=60%',
          pin: true,
          scrub: 0.8,
        },
      });

      tl.to(cardEls, {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.08,
        ease: 'cubic-bezier(0.23, 1, 0.32, 1)',
      });
    }, section);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section id="about" aria-labelledby="about-heading" className="about-section" ref={sectionRef}>
      <h2 id="about-heading" className="about-heading">
        About Me
      </h2>
      <MagicBento cards={cards} />
    </section>
  );
};

export default About;
