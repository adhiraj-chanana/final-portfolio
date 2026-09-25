import ExperienceSection from './ExperienceSection';

const campusInvolvement = [
  {
    role: 'Resident Assistant',
    company: 'Michigan State University',
    current: true,
    date: 'Jan 2025 – Present',
    location: 'East Lansing, MI',
    accent: 'rgba(94, 200, 255, 0.35)',
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
    accent: 'rgba(94, 200, 255, 0.2)',
    bullets: [
      'Mentored 100+ students weekly through debugging help and Python labs',
      'Led coding sessions on loops, OOP, and conditionals for 500+ students'
    ]
  },
  {
    role: 'Co-Director of Marketing',
    company: 'Indian Students Organization',
    current: false,
    date: 'Sep 2024 – Apr 2025',
    location: 'East Lansing, MI',
    accent: 'rgba(94, 200, 255, 0.2)',
    bullets: [
      'Organized biweekly cultural events to strengthen community and belonging on campus',
      'Grew event attendance 150% through targeted marketing strategy'
    ]
  },
  {
    role: 'Honors Navigator Mentor',
    company: 'Michigan State University',
    current: false,
    date: 'Sep 2024 – Dec 2024',
    location: 'East Lansing, MI',
    accent: 'rgba(94, 200, 255, 0.2)',
    bullets: [
      'Guided incoming freshmen through the transition to college, including navigating Honors College options',
      'Supported mentees in setting and working toward academic and personal goals'
    ]
  }
];

const CampusInvolvement = () => (
  <ExperienceSection id="campus-involvement" heading="Campus Involvement & Leadership" experiences={campusInvolvement} />
);

export default CampusInvolvement;
