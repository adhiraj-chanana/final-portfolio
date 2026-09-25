import { motion } from 'framer-motion';
import SpotlightCard from './SpotlightCard';

const gridVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, transform: 'translateY(12px)' },
  visible: {
    opacity: 1,
    transform: 'translateY(0px)',
    transition: { duration: 0.3, ease: [0.23, 1, 0.32, 1] }
  }
};

const getInitials = (name) => {
  const words = name.split(/\s+/).filter(Boolean);
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
};

const avatarStyle = {
  width: '44px',
  height: '44px',
  borderRadius: '50%',
  background: 'var(--color-accent)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '0.9rem',
  fontWeight: 700,
  color: 'var(--color-accent-text)',
  flexShrink: 0,
  boxShadow: '0 4px 12px rgba(94, 200, 255, 0.3)'
};

const pillBaseStyle = {
  flexShrink: 0,
  fontSize: '0.68rem',
  fontWeight: 500,
  fontFamily: "'IBM Plex Mono', monospace",
  letterSpacing: '0.05em',
  textTransform: 'uppercase',
  padding: '0.35rem 0.75rem',
  borderRadius: '9999px'
};

const currentPillStyle = {
  ...pillBaseStyle,
  background: 'var(--color-accent)',
  color: 'var(--color-accent-text)'
};

const pastPillStyle = {
  ...pillBaseStyle,
  background: 'transparent',
  border: '1px solid var(--color-border-strong)',
  color: 'var(--color-text-muted)'
};

const chipStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.4rem',
  background: 'var(--color-surface)',
  border: '1px solid var(--color-border)',
  borderRadius: '9999px',
  padding: '0.35rem 0.75rem',
  fontSize: '0.8rem',
  fontFamily: "'IBM Plex Mono', monospace",
  color: 'var(--color-text-secondary)'
};

/**
 * Renders a heading + a staggered grid of role cards. Purely presentational --
 * the role data comes entirely from the `experiences` prop, so this same
 * component drives both Technical Experience and Campus Involvement &
 * Leadership with no duplicated markup between them.
 */
const ExperienceSection = ({ id, heading, experiences }) => {
  const headingId = `${id}-heading`;

  return (
    <section id={id} aria-labelledby={headingId} style={{ background: 'var(--color-canvas)', minHeight: '100svh', padding: '5rem 2rem', color: 'var(--color-text)' }}>
      <h2 id={headingId} style={{ textAlign: 'center', fontSize: '2.8rem', marginBottom: '3rem', fontWeight: 800, letterSpacing: '-0.02em', fontFamily: "'Archivo', sans-serif" }}>
        {heading}
      </h2>
      <motion.div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(340px, 100%), 1fr))',
          gridAutoRows: '1fr',
          gap: '2rem',
          justifyContent: 'center',
          maxWidth: '1200px',
          margin: '0 auto'
        }}
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {experiences.map((exp, idx) => (
          <motion.div key={idx} variants={cardVariants} style={{ height: '100%' }}>
            <SpotlightCard spotlightColor={exp.accent}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ display: 'flex', gap: '0.9rem', alignItems: 'center' }}>
                  <div style={avatarStyle}>{getInitials(exp.company)}</div>
                  <div>
                    <p style={{ margin: 0, fontSize: '0.72rem', fontWeight: 500, fontFamily: "'IBM Plex Mono', monospace", letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-accent)' }}>
                      {exp.company}
                    </p>
                    <h3 style={{ margin: '0.3rem 0 0', fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-text)', lineHeight: 1.3 }}>
                      {exp.role}
                    </h3>
                  </div>
                </div>
                <span style={exp.current ? currentPillStyle : pastPillStyle}>
                  {exp.current ? 'Present' : 'Completed'}
                </span>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', margin: '1.1rem 0 1.25rem' }}>
                <span style={chipStyle}>{exp.date}</span>
                <span style={chipStyle}>{exp.location}</span>
              </div>

              <div style={{ height: '1px', background: 'var(--color-border)', marginBottom: '1.25rem' }} />

              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.7rem', flexGrow: 1 }}>
                {exp.bullets.map((bullet, bi) => (
                  <li key={bi} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start', fontSize: '0.97rem', lineHeight: 1.6, color: 'var(--color-text-secondary)' }}>
                    <span style={{ color: 'var(--color-accent)', marginTop: '0.35rem', fontSize: '0.65rem' }}>▸</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </SpotlightCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ExperienceSection;
