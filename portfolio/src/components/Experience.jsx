import React from 'react';
import SpotlightCard from './SpotlightCard';

const ACCENT_GRADIENT = 'linear-gradient(135deg, #6ee7ff 0%, #a78bfa 50%, #ff8bd5 100%)';

const experiences = [
  {
    role: 'Application Developer Intern',
    company: 'Delta Dental',
    current: true,
    date: 'Jan 2026 – Present',
    location: 'Okemos, MI',
    accent: 'rgba(142, 142, 255, 0.83)',
    bullets: [
      'Built Angular front-end features integrated with Java REST APIs for a secure, SOA-compliant platform serving 5000+ users',
      'Led cross-functional feature delivery, cutting time-to-market 25% and stakeholder revision cycles 30%'
    ]
  },
  {
    role: 'AI Intern',
    company: 'Volza',
    current: false,
    date: 'Aug 2025 – Dec 2025',
    location: 'Remote',
    accent: 'rgba(142, 142, 255, 0.83)',
    bullets: [
      'Built a structured parsing system with Qwen-1.5B + llama.cpp for fast JSON extraction',
      'Achieved 94% field accuracy using a lightweight, prompt-engineered LLM pipeline'
    ]
  },
  {
    role: 'Web Development Intern',
    company: 'MSU Student Life & Engagement',
    current: false,
    date: 'May 2025 – Dec 2025',
    location: 'East Lansing, MI',
    accent: 'rgba(104, 104, 255, 0.83)',
    bullets: [
      'Automated backend content migration for 20+ Drupal sites, saving 100+ hours',
      'Resolved 50+ backend issues, improving platform stability for 30,000+ users',
      'Built dynamic service request modules with PHP and MySQL'
    ]
  },
  {
    role: 'Resident Assistant',
    company: 'Michigan State University',
    current: true,
    date: 'Jan 2025 – Present',
    location: 'East Lansing, MI',
    accent: 'rgba(104, 104, 255, 0.83)',
    bullets: [
      'Built inclusive communities and hosted conflict-resolution and bonding events',
      'Supported 40+ residents’ academic and wellness needs'
    ]
  },
  {
    role: 'Undergraduate Learning Assistant · CSE231',
    company: 'Michigan State University',
    current: false,
    date: 'Jan 2025 – May 2025',
    location: 'East Lansing, MI',
    accent: 'rgba(104, 104, 255, 0.83)',
    bullets: [
      'Mentored 100+ students weekly through debugging help and Python labs',
      'Led coding sessions on loops, OOP, and conditionals for 500+ students'
    ]
  },
  {
    role: 'Professorial Research Assistant',
    company: 'MSU College of Engineering',
    current: false,
    date: 'Sep 2023 – May 2025',
    location: 'East Lansing, MI',
    accent: 'rgba(104, 104, 255, 0.83)',
    bullets: [
      'Trained LSTM models on climate block maxima data (2025–2100)',
      'Built dashboards for model interpretability and time series analysis',
      'Cut storage size by 60% and sped up forecasting pipelines'
    ]
  }
];

const getInitials = (name) => {
  const words = name.split(/\s+/).filter(Boolean);
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
};

const avatarStyle = {
  width: '44px',
  height: '44px',
  borderRadius: '50%',
  background: ACCENT_GRADIENT,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '0.9rem',
  fontWeight: 800,
  color: '#0b0b0b',
  flexShrink: 0,
  boxShadow: '0 4px 12px rgba(167, 139, 250, 0.35)'
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
  background: ACCENT_GRADIENT,
  color: '#0b0b0b'
};

const pastPillStyle = {
  ...pillBaseStyle,
  background: 'transparent',
  border: '1px solid #333',
  color: '#888'
};

const chipStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.4rem',
  background: '#1a1a1a',
  border: '1px solid #262626',
  borderRadius: '9999px',
  padding: '0.35rem 0.75rem',
  fontSize: '0.8rem',
  fontFamily: "'IBM Plex Mono', monospace",
  color: '#bbb'
};

const Experience = () => {
  return (
    <div id="experience" style={{ background: '#0d0d0d', minHeight: '100vh', padding: '5rem 1rem', color: '#fff' }}>
      <h2 style={{ textAlign: 'center', fontSize: '2.8rem', marginBottom: '3rem', fontWeight: 400, fontFamily: "'Instrument Serif', Georgia, serif" }}>
        Experience
      </h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gridAutoRows: '1fr',
          gap: '2rem',
          justifyContent: 'center',
          maxWidth: '1200px',
          margin: '0 auto'
        }}
      >
        {experiences.map((exp, idx) => (
          <SpotlightCard key={idx} spotlightColor={exp.accent}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
              <div style={{ display: 'flex', gap: '0.9rem', alignItems: 'center' }}>
                <div style={avatarStyle}>{getInitials(exp.company)}</div>
                <div>
                  <p style={{ margin: 0, fontSize: '0.72rem', fontWeight: 500, fontFamily: "'IBM Plex Mono', monospace", letterSpacing: '0.08em', textTransform: 'uppercase', color: '#4da6ff' }}>
                    {exp.company}
                  </p>
                  <h3 style={{ margin: '0.3rem 0 0', fontSize: '1.3rem', fontWeight: 700, color: '#fff', lineHeight: 1.3 }}>
                    {exp.role}
                  </h3>
                </div>
              </div>
              <span style={exp.current ? currentPillStyle : pastPillStyle}>
                {exp.current ? 'Present' : 'Completed'}
              </span>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', margin: '1.1rem 0 1.25rem' }}>
              <span style={chipStyle}>📅 {exp.date}</span>
              <span style={chipStyle}>📍 {exp.location}</span>
            </div>

            <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, #2e2e2e, transparent)', marginBottom: '1.25rem' }} />

            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.7rem', flexGrow: 1 }}>
              {exp.bullets.map((bullet, bi) => (
                <li key={bi} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start', fontSize: '0.97rem', lineHeight: 1.6, color: '#ccc' }}>
                  <span style={{ color: '#4da6ff', marginTop: '0.35rem', fontSize: '0.65rem' }}>▸</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </SpotlightCard>
        ))}
      </div>
    </div>
  );
};

export default Experience;
