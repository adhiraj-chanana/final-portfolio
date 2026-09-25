import { useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Education.css';

const Education = () => {
  const panelRef = useRef(null);
  useScrollReveal(panelRef, { selector: '.reveal-item' });

  return (
    <section id="education" aria-labelledby="education-heading" className="education-section">
      <h2 id="education-heading" className="education-heading">
        Education
      </h2>

      <div className="education-panel" ref={panelRef}>
        <p className="education-school reveal-item">Michigan State University</p>

        <div className="education-row reveal-item">
          <div className="education-degree">
            <p className="education-degree-title">B.S. Computer Science</p>
            <p className="education-minors">
              Minors in Entrepreneurship &amp; Innovation and Data Science
            </p>
          </div>

          <div className="education-gpa">
            <span className="education-gpa-number">4.0</span>
            <span className="education-gpa-label">GPA</span>
          </div>
        </div>

        <div className="education-divider" />

        <p className="education-dates reveal-item">August 2023 &ndash; Expected Fall 2027</p>
      </div>
    </section>
  );
};

export default Education;
