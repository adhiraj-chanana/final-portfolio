import React from 'react';
import reprightImage from '../assets/repright.png';
import snippetImage from '../assets/snippet.png';
import webhookImage from '../assets/webhook.png';
import pitchrankImage from '../assets/pitchrank.png';
import DecryptedText from './DecryptedText';

// ✅ Add a link per project (shown only if provided)
const projects = [
  {
    title: 'AI Webhook Processor',
    description: 'An AI-powered webhook processing pipeline with intelligent LLM-based routing, a built-in evaluation framework, and a live monitoring dashboard.',
    image: webhookImage,
    badge: '🤖 AI Pipeline',
    link: 'https://webhook-ai-two.vercel.app/',
    linkLabel: 'Live Demo'
  },
  {
    title: 'PitchRank',
    description: 'A daily pitch-training app that builds a practice streak, with AI-driven scoring of each pitch and a "boss character" feedback system for gamified critique.',
    image: pitchrankImage,
    badge: '🎤 AI Coaching',
    link: 'https://pitchrank-wnal.vercel.app/',
    linkLabel: 'Live Demo'
  },
  {
    title: 'Repright',
    description: 'AI-powered app that tracks your workout form in real-time to prevent injury and improve performance.',
    image: reprightImage,
    badge: '🏋️‍♂️ Computer Vision',
    link: 'https://github.com/Rep-Right/exercise-recommender',
    linkLabel: 'View Repo'
  },
  {
    title: 'SnippetShare',
    description: 'Modern snippet manager to save, search, and share reusable code across projects.',
    image: snippetImage,
    badge: '💻 Dev Tool',
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
              borderRadius: '2rem',
              overflow: 'hidden',
              backgroundColor: 'var(--color-surface)',
              position: 'relative',
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
              style={{ width: '100%', height: '350px', objectFit: 'cover' }}
            />

            <div
              style={{
                padding: '2rem',
                backgroundColor: '#262626',
                borderRadius: '1.2rem',
                margin: '-3rem 1.5rem 1.5rem 1.5rem',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)'
              }}
            >
              <h3 style={{ fontSize: '1.7rem', marginBottom: '0.7rem', color: '#fff' }}>
                <DecryptedText text={proj.title} speed={60} maxIterations={15} characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890" />
              </h3>

              <div style={{ marginBottom: '1.25rem', lineHeight: 1.6 }}>
                <DecryptedText
                  text={proj.description}
                  speed={80}
                  maxIterations={20}
                  characters="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
                  animateOn="view"
                  revealDirection="center"
                />
              </div>

              {/* CTA Area */}
              {proj.link && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
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
                    onMouseEnter={e => { e.currentTarget.style.filter = 'brightness(1.05)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.filter = 'brightness(1.0)'; e.currentTarget.style.transform = 'translateY(0)'; }}
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

                  {/* Optional secondary action: copy link */}
                  <button
                    type="button"
                    aria-label={`Copy link to ${proj.title}`}
                    onClick={() => navigator.clipboard?.writeText(proj.link)}
                    style={{
                      padding: '0.7rem 1rem',
                      borderRadius: '9999px',
                      backgroundColor: 'transparent',
                      border: '1px solid #3a3a3a',
                      color: '#fff',
                      fontSize: '0.9rem',
                      cursor: 'pointer',
                      transition: 'background-color 160ms ease, border-color 160ms ease',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#2e2e2e'; e.currentTarget.style.borderColor = '#5a5a5a'; }}
                    onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.borderColor = '#3a3a3a'; }}
                  >
                    Copy Link
                  </button>
                </div>
              )}
            </div>

            <div
              style={{
                position: 'absolute',
                top: '1rem',
                left: '1rem',
                backgroundColor: '#1f1f1f',
                padding: '0.5rem 1.2rem',
                borderRadius: '1.2rem',
                fontSize: '0.85rem',
                fontWeight: 500,
                color: '#ffffff',
                border: '1px solid #3a3a3a',
                boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)'
              }}
            >
              {proj.badge}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
