import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from 'framer-motion';
import MagicBento from './MagicBento';
import SkydiverScene from './SkydiverScene';
import PianoKeys from './PianoKeys';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    id: 'bio',
    size: 'large',
    render: () => (
      <div className="magic-bento-card__content">
        <h3 className="magic-bento-card__title about-anchor-heading">Hey, I'm Adhiraj 👋</h3>
        <p className="magic-bento-card__description">
          I love building things: projects, automations, little tools that quietly save someone hours. If something's slow, repetitive, or broken, I'm probably already thinking about how to fix it.
        </p>
        <p className="magic-bento-card__description">
          I'm also a people person. I love meeting new folks, swapping ideas, and hearing what other people are working on, so if anything here sparks something, reach out. I promise I reply (sometimes with very long messages).
        </p>
        <p className="magic-bento-card__description">
          And I'm a big fan of side quests: traveling, adventure sports, and saying yes to things that sound slightly questionable at first.
        </p>
        <a href="mailto:adhirajmohanchanana@gmail.com" className="about-link">
          Say hi <span aria-hidden="true">→</span>
        </a>
      </div>
    ),
  },
  {
    id: 'skydiving',
    size: 'large',
    render: () => (
      <>
        <SkydiverScene />
        <div className="magic-bento-card__content magic-bento-card__content--scrim">
          <div className="magic-bento-card__label">Skydiving</div>
          <h3 className="magic-bento-card__title about-anchor-heading">I've been skydiving!!!!</h3>
          <p className="magic-bento-card__description">
            On a trip to Orlando, I jumped out of a perfectly good plane. Nerve-wracking? Absolutely. Worth it? Also absolutely. The view of the Orlando coast from up there was unreal.
          </p>
        </div>
      </>
    ),
  },
  {
    id: 'football',
    render: () => (
      <div className="magic-bento-card__content">
        <h3 className="magic-bento-card__title about-football-heading">Hala Madrid 🤍</h3>
        <p className="magic-bento-card__description">
          Real Madrid is my team: the comebacks, the late winners, the chaos. Nothing else like it.
        </p>
        <span className="about-football-badge">Core memory: World Cup '26 in the USA</span>
      </div>
    ),
  },
  {
    id: 'msu',
    render: () => (
      <div className="magic-bento-card__content">
        <h3 className="magic-bento-card__title about-msu-heading">Spartan since 2023</h3>
        <p className="magic-bento-card__description">
          I love MSU: the people, the energy, the culture. The weather? We're still working on our relationship. Go Green! 💚
        </p>
      </div>
    ),
  },
  {
    id: 'piano',
    render: () => (
      <div className="magic-bento-card__content">
        <PianoKeys />
        <h3 className="magic-bento-card__title">13 years at the keys 🎹</h3>
        <p className="magic-bento-card__description">
          I've been playing piano for 13 years, and these days I mostly just jam. Give me a piano and twenty minutes and I'll happily disappear.
        </p>
      </div>
    ),
  },
  {
    id: 'how-i-build',
    render: () => (
      <div className="magic-bento-card__content">
        <h3 className="magic-bento-card__title">How I build</h3>
        <p className="magic-bento-card__description">
          I try not to break things. When I do, I enjoy fixing them just as much. I build from scratch, automate the stuff nobody should do by hand, and if it saves someone time or gets a smile, that's the win.
        </p>
      </div>
    ),
  },
];

/**
 * This section's entrance is the site's one pinned/scrubbed signature moment.
 * The section pins for a short scroll distance while the six bento cards
 * reveal in sequence, tied directly to scroll position (scrub) rather than
 * time -- scrolling back up reverses it, the expected feel for this pattern.
 * transform/opacity/scale only; ScrollTrigger's own pin-spacer reserves the
 * layout space, so nothing shifts.
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
