import React from 'react';
import SpotlightCard from './SpotlightCard';

const Experience = () => {
  return (
    <div id="experience" style={{ background: '#0d0d0d', minHeight: '100vh', padding: '5rem 1rem', color: '#fff' }}>
      <h2 style={{ textAlign: 'center', fontSize: '2.8rem', marginBottom: '3rem', fontFamily: 'Inter, sans-serif' }}>
        Experience
      </h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
          gridAutoRows: 'auto',
          gap: '2rem',
          justifyContent: 'center',
          maxWidth: '1200px',
          margin: '0 auto'
        }}
      >
        <SpotlightCard spotlightColor="rgba(142, 142, 255, 0.83)">
          <h3 style={{ fontSize: '1.6rem', margin: 0 }}>
            <span style={{ color: '#4da6ff', fontWeight: 600 }}>AI Intern</span> @ Volza
          </h3>
          <ul style={{ fontSize: '1rem', lineHeight: 1.6, paddingLeft: '1.2rem', margin: '1rem 0' }}>
            <li>Built a structured parsing system with Qwen-1.5B + llama.cpp for fast JSON extraction</li>
            <li>Achieved 94% field accuracy using a lightweight, prompt-engineered LLM pipeline</li>
          </ul>
          <p style={{ fontSize: '0.9rem', color: '#999' }}>Aug 2025 – Present · Remote</p>
        </SpotlightCard>

        <SpotlightCard spotlightColor="rgba(104, 104, 255, 0.83)">
          <h3 style={{ fontSize: '1.6rem', margin: 0 }}>
            <span style={{ color: '#4da6ff', fontWeight: 600 }}>Web Development Intern</span> @ MSU Student Life & Engagement
          </h3>
          <ul style={{ fontSize: '1rem', lineHeight: 1.6, paddingLeft: '1.2rem', margin: '1rem 0' }}>
            <li>Automated backend content migration for 20+ Drupal sites, saving 100+ hours</li>
            <li>Resolved 50+ backend issues, improving platform stability for 30,000+ users</li>
            <li>Built dynamic service request modules with PHP and MySQL</li>
          </ul>
          <p style={{ fontSize: '0.9rem', color: '#999' }}>May 2025 – Present · East Lansing, MI</p>
        </SpotlightCard>

        <SpotlightCard spotlightColor="rgba(104, 104, 255, 0.83)">
          <h3 style={{ fontSize: '1.6rem', margin: 0 }}>
            <span style={{ color: '#4da6ff', fontWeight: 600 }}>Resident Assistant</span> @ Michigan State University
          </h3>
          <ul style={{ fontSize: '1rem', lineHeight: 1.6, paddingLeft: '1.2rem', margin: '1rem 0' }}>
            <li>Built inclusive communities and hosted conflict-resolution and bonding events</li>
            <li>Supported 40+ residents’ academic and wellness needs</li>
          </ul>
          <p style={{ fontSize: '0.9rem', color: '#999' }}>Jan 2025 – Present · East Lansing, MI</p>
        </SpotlightCard>

        <SpotlightCard spotlightColor="rgba(104, 104, 255, 0.83)">
          <h3 style={{ fontSize: '1.6rem', margin: 0 }}>
            <span style={{ color: '#4da6ff', fontWeight: 600 }}>Undergraduate Learning Assistant</span> - CSE231 @ MSU
          </h3>
          <ul style={{ fontSize: '1rem', lineHeight: 1.6, paddingLeft: '1.2rem', margin: '1rem 0' }}>
            <li>Mentored 100+ students weekly through debugging help and Python labs</li>
            <li>Led coding sessions on loops, OOP, and conditionals for 500+ students</li>
          </ul>
          <p style={{ fontSize: '0.9rem', color: '#999' }}>Jan 2025 – Present · East Lansing, MI</p>
        </SpotlightCard>

        <SpotlightCard spotlightColor="rgba(104, 104, 255, 0.83)">
          <h3 style={{ fontSize: '1.6rem', margin: 0 }}>
            <span style={{ color: '#4da6ff', fontWeight: 600 }}>Professorial Research Assistant</span> @ MSU College of Engineering
          </h3>
          <ul style={{ fontSize: '1rem', lineHeight: 1.6, paddingLeft: '1.2rem', margin: '1rem 0' }}>
            <li>Trained LSTM models on climate block maxima data (2025–2100)</li>
            <li>Built dashboards for model interpretability and time series analysis</li>
            <li>Cut storage size by 60% and sped up forecasting pipelines</li>
          </ul>
          <p style={{ fontSize: '0.9rem', color: '#999' }}>Sep 2023 – Present · East Lansing, MI</p>
        </SpotlightCard>
      </div>
    </div>
  );
};

export default Experience;
