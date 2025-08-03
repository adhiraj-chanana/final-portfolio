import React from 'react';
import reprightImage from '../assets/repright.png';
import spotifyImage from '../assets/spotify.png';
import snippetImage from '../assets/snippet.png';
import DecryptedText from './DecryptedText';

const projects = [
  {
    title: 'Repright',
    description: 'AI-powered app that tracks your workout form in real-time to prevent injury and improve performance.',
    image: reprightImage,
    badge: '🏋️‍♂️ Computer Vision'
  },
  {
    title: 'Tinder for Spotify',
    description: 'Swipe-based app for music discovery, blending dating UX with Spotify’s song database.',
    image: spotifyImage,
    badge: '🎵 Music Discovery'
  },
  {
    title: 'SnippetShare',
    description: 'Modern snippet manager to save, search, and share reusable code across projects.',
    image: snippetImage,
    badge: '💻 Dev Tool'
  }
];

function Projects() {
  return (
    <section
        id="projects"
      style={{
        padding: '4rem 2rem',
        background: '#0d0d0d',
        minHeight: '100vh',
        fontFamily: 'Inter, sans-serif',
        color: '#fff',
      }}
    >

      <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>
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
              backgroundColor: '#1a1a1a',
              position: 'relative',
              border: '2px solid #2a2a2a',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
            }}
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
              <DecryptedText
                text={proj.description}
                speed={80}
                maxIterations={20}
                characters="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
                animateOn="view"
                revealDirection="center"
              />
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
