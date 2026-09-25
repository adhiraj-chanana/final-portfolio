import ExperienceSection from './ExperienceSection';

const technicalExperience = [
  {
    role: 'Application Developer Intern',
    company: 'Delta Dental',
    current: true,
    date: 'Jan 2026 – Present',
    location: 'Okemos, MI',
    accent: 'rgba(94, 200, 255, 0.35)',
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
    accent: 'rgba(94, 200, 255, 0.35)',
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
    accent: 'rgba(94, 200, 255, 0.2)',
    bullets: [
      'Automated backend content migration for 20+ Drupal sites, saving 100+ hours',
      'Resolved 50+ backend issues, improving platform stability for 30,000+ users',
      'Built dynamic service request modules with PHP and MySQL'
    ]
  },
  {
    role: 'Professorial Research Assistant',
    company: 'MSU College of Engineering',
    current: false,
    date: 'Sep 2023 – May 2025',
    location: 'East Lansing, MI',
    accent: 'rgba(94, 200, 255, 0.2)',
    bullets: [
      'Trained LSTM models on climate block maxima data (2025–2100)',
      'Built dashboards for model interpretability and time series analysis',
      'Cut storage size by 60% and sped up forecasting pipelines'
    ]
  }
];

const TechnicalExperience = () => (
  <ExperienceSection id="technical-experience" heading="Technical Experience" experiences={technicalExperience} />
);

export default TechnicalExperience;
