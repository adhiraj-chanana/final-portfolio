import React from 'react';
import reprightImage from '../assets/repright.png';
import snippetImage from '../assets/snippet.png';
import webhookImage from '../assets/webhook.png';
import pitchrankImage from '../assets/pitchrank.png';
import DecryptedText from './DecryptedText';

const projects = [
  {
    title: 'AI Webhook Processor',
    description: 'An AI-powered webhook processing pipeline with intelligent LLM-based routing, a built-in evaluation framework, and a live monitoring dashboard.',
    image: webhookImage,
    category: 'AI Pipeline',
    link: 'https://webhook-ai-two.vercel.app/',
    linkLabel: 'Live Demo'
  },
  {
    title: 'PitchRank',
    description: 'A daily pitch-training app that builds a practice streak, with AI-driven scoring of each pitch and a "boss character" feedback system for gamified critique.',
    image: pitchrankImage,
    category: 'AI Coaching',
    link: 'https://pitchrank-wnal.vercel.app/',
    linkLabel: 'Live Demo'
  },
  {
    title: 'Repright',
    description: 'AI-powered app that tracks your workout form in real-time to prevent injury and improve performance.',
    image: reprightImage,
    category: 'Computer Vision',
    link: 'https://github.com/Rep-Right/exercise-recommender',
    linkLabel: 'View Repo'
  },
  {
    title: 'SnippetShare',
    description: 'Modern snippet manager to save, search, and share reusable code across projects.',
    image: snippetImage,
    category: 'Dev Tool',
    link: 'https://marketplace.visualstudio.com/items?itemName=snippetsharedev.snippet-share&ssr=false#overview',
    linkLabel: 'View Repo'
  }
];

function Projects() {
  return (
    <section
      id="projects"
      style={{
        padding: '4rem 2rem',
        background: 'var(--color-canvas)',
        minHeight: '100vh',
        fontFamily: "'IBM Plex Sans', sans-serif",
        color: 'var(--color-text)',
      }}
    >
      <h2 style={{ fontSize: '2.8rem', fontWeight: 400, marginBottom: '3rem', textAlign: 'center', fontFamily: "'Instrument Serif', Georgia, serif" }}>
        My Projects
      </h2>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '2rem',
          maxWidth: '1600px',
          margin: '0 auto',
        }}
      >
        {projects.map((proj, idx) => (
          <div
            key={idx}
            style={{
              flex: '1 1 480px',
              maxWidth: '600px',
              borderRadius: '1.5rem',
              overflow: 'hidden',
              backgroundColor: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
              transition: 'transform 220ms ease, box-shadow 220ms ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.45)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)'; }}
          >
            <img
              src={proj.image}
              alt={proj.title}
              style={{ width: '100%', aspectRatio: '16 / 10', objectFit: 'cover', display: 'block' }}
            />

            <div style={{ padding: '1.75rem' }}>
              <p style={{
                margin: '0 0 0.5rem',
                fontSize: '0.72rem',
                fontWeight: 500,
                fontFamily: "'IBM Plex Mono', monospace",
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--color-accent)'
              }}>
                {proj.category}
              </p>

              <h3 style={{ fontSize: '1.7rem', fontWeight: 700, margin: '0 0 0.7rem', color: 'var(--color-text)' }}>
                <DecryptedText text={proj.title} speed={60} maxIterations={15} characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890" />
              </h3>

              <p style={{ margin: '0 0 1.25rem', lineHeight: 1.6, color: 'var(--color-text-secondary)' }}>
                {proj.description}
              </p>

              {proj.link && (
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${proj.linkLabel || 'Open'}: ${proj.title}`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.8rem 1.1rem',
                    borderRadius: '9999px',
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    background: 'var(--color-accent)',
                    color: 'var(--color-accent-text)',
                    textDecoration: 'none',
                    boxShadow: '0 6px 18px rgba(94, 200, 255, 0.3)',
                    transition: 'filter 160ms ease, transform 160ms ease',
                  }}
                  onMouseEnter={e => {
                    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
                    e.currentTarget.style.filter = 'brightness(1.05)';
                    e.currentTarget.style.transform = 'translateY(-1px)';
                  }}
                  onMouseLeave={e => { e.currentTarget.style.filter = 'brightness(1.0)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                  onMouseDown={e => { e.currentTarget.style.transition = 'transform 100ms cubic-bezier(0.23, 1, 0.32, 1)'; e.currentTarget.style.transform = 'scale(0.97)'; }}
                  onMouseUp={e => { e.currentTarget.style.transition = 'filter 160ms ease, transform 160ms ease'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                  onTouchStart={e => { e.currentTarget.style.transition = 'transform 100ms cubic-bezier(0.23, 1, 0.32, 1)'; e.currentTarget.style.transform = 'scale(0.97)'; }}
                  onTouchEnd={e => { e.currentTarget.style.transition = 'filter 160ms ease, transform 160ms ease'; e.currentTarget.style.transform = 'translateY(0)'; }}
                  onFocus={e => { e.currentTarget.style.outline = '2px solid var(--color-accent)'; e.currentTarget.style.outlineOffset = '3px'; }}
                  onBlur={e => { e.currentTarget.style.outline = 'none'; e.currentTarget.style.outlineOffset = '0px'; }}
                >
                  {proj.linkLabel || 'Open'}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M14 3h7v7" stroke="var(--color-accent-text)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 3l-9 9" stroke="var(--color-accent-text)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 7H7a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4v-5" stroke="var(--color-accent-text)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
