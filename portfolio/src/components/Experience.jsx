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
        <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.2)">
          <h3 style={{ fontSize: '1.6rem', margin: 0 }}><span style={{ color: '#00aaff', fontWeight: 600 }}>AI Intern</span> @ Volza</h3>
          <p style={{ fontSize: '1rem', opacity: 0.9, lineHeight: 1.6 }}>
            Built a structured parsing system using LLMs to extract clean product data. Optimized inference with Qwen and Mistral models for performance. Implemented semantic filtering and multi-threaded post-processing using quantized models.
          </p>
          <p style={{ fontSize: '0.9rem', color: '#999' }}>Jul 2025 – Present · Remote</p>
        </SpotlightCard>

        <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.2)">
          <h3 style={{ fontSize: '1.6rem', margin: 0 }}><span style={{ color: '#00aaff', fontWeight: 600 }}>Web Development Intern</span> @ MSU Student Life & Engagement</h3>
          <p style={{ fontSize: '1rem', opacity: 0.9, lineHeight: 1.6 }}>
            Developed backend features, RESTful APIs, and custom Drupal modules to optimize internal web/database applications, reducing manual processing time by 30%. Resolved 50+ technical issues and implemented UI/UX improvements across projects.
          </p>
          <p style={{ fontSize: '0.9rem', color: '#999' }}>May 2025 – Present · East Lansing, MI</p>
        </SpotlightCard>

        <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.2)">
          <h3 style={{ fontSize: '1.6rem', margin: 0 }}><span style={{ color: '#00aaff', fontWeight: 600 }}>Resident Assistant</span> @ Michigan State University</h3>
          <p style={{ fontSize: '1rem', opacity: 0.9, lineHeight: 1.6 }}>
            Fostered a welcoming and inclusive environment through conflict resolution and community-building events. Served as the main support point for 40+ residents’ academic and personal needs.
          </p>
          <p style={{ fontSize: '0.9rem', color: '#999' }}>Jan 2025 – Present · East Lansing, MI</p>
        </SpotlightCard>

        <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.2)">
          <h3 style={{ fontSize: '1.6rem', margin: 0 }}><span style={{ color: '#00aaff', fontWeight: 600 }}>Undergraduate Learning Assistant</span> - CSE231 @ MSU</h3>
          <p style={{ fontSize: '1rem', opacity: 0.9, lineHeight: 1.6 }}>
            Mentored students in Python programming, leading weekly labs and office hours. Helped students debug, understand conditionals, loops, functions, and basic data structures.
          </p>
          <p style={{ fontSize: '0.9rem', color: '#999' }}>Jan 2025 – Present · East Lansing, MI</p>
        </SpotlightCard>

        <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.2)">
          <h3 style={{ fontSize: '1.6rem', margin: 0 }}><span style={{ color: '#00aaff', fontWeight: 600 }}>Professorial Research Assistant</span> @ MSU College of Engineering</h3>
          <p style={{ fontSize: '1rem', opacity: 0.9, lineHeight: 1.6 }}>
            Engineered a visualization tool using JavaScript to analyze climate extremes from 1979–2070. Enabled robust predictive insights on spatiotemporal datasets for large-scale climate analysis using time series algorithms.
          </p>
          <p style={{ fontSize: '0.9rem', color: '#999' }}>Aug 2023 – Present · East Lansing, MI</p>
        </SpotlightCard>
      </div>
    </div>
  );
};

export default Experience;