// src/components/Experience/Timeline.jsx
import { useLanguage } from '../../context/LanguageContext';
import { useState, useEffect, useRef } from 'react';

const Timeline = () => {
  const { t } = useLanguage();
  const [visibleItems, setVisibleItems] = useState([]);
  const timelineRef = useRef(null);

  const experiences = [
    {
      id: 1,
      title: t('exp_job1_title'),
      company: t('exp_job1_company'),
      period: t('exp_job1_period'),
      descriptions: [
        t('exp_job1_desc1'),
        t('exp_job1_desc2'),
        t('exp_job1_desc3'),
        t('exp_job1_desc4'),
        t('exp_job1_desc5'),
      ],
    },
    {
      id: 2,
      title: t('exp_job2_title'),
      company: t('exp_job2_company'),
      period: t('exp_job2_period'),
      descriptions: [
        t('exp_job2_desc1'),
        t('exp_job2_desc2'),
        t('exp_job2_desc3'),
        t('exp_job2_desc4'),
        t('exp_job2_desc5'),
      ],
    },
  ];

  // Intersection Observer para revelar cards al hacer scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...new Set([...prev, entry.target.dataset.index])]);
          }
        });
      },
      { threshold: 0.15 }
    );

    const items = timelineRef.current?.querySelectorAll('.timeline-item');
    items?.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section id="experience">
        {/* Partículas flotantes */}
        <div className="ocean-particles">
          {[
            { w: 6, h: 6, top: '12%', left: '8%', dur: '5s', opacity: 0.35 },
            { w: 4, h: 4, top: '28%', left: '75%', dur: '6.5s', opacity: 0.25 },
            { w: 8, h: 8, top: '55%', left: '15%', dur: '7s', opacity: 0.2 },
            { w: 5, h: 5, top: '70%', left: '82%', dur: '5.5s', opacity: 0.3 },
            { w: 3, h: 3, top: '40%', left: '60%', dur: '8s', opacity: 0.2 },
            { w: 7, h: 7, top: '85%', left: '30%', dur: '6s', opacity: 0.15 },
            { w: 4, h: 4, top: '18%', left: '45%', dur: '7.5s', opacity: 0.22 },
            { w: 5, h: 5, top: '60%', left: '90%', dur: '5.8s', opacity: 0.18 },
          ].map((p, i) => (
            <div
              key={i}
              className="particle"
              style={{
                width: p.w,
                height: p.h,
                top: p.top,
                left: p.left,
                '--dur': p.dur,
                '--opacity': p.opacity,
                animationDelay: `${i * 0.6}s`,
              }}
            />
          ))}
        </div>

        <div className="experience-content">
          <h2>{t('experience_title')}</h2>

          <div className="timeline" ref={timelineRef}>
            <div className="timeline-line" />

            {experiences.map((exp, index) => {
              const isRight = index % 2 === 1;
              const isVisible = visibleItems.includes(String(index));

              return (
                <div
                  key={exp.id}
                  className={`timeline-item ${isRight ? 'right' : ''} ${isVisible ? 'visible' : ''}`}
                  data-index={index}
                >
                  <div className="timeline-node" />
                  <div className="timeline-connector" />

                  <div className="timeline-card">
                    <h3>{exp.title}</h3>
                    <div className="company">{exp.company}</div>
                    <div className="period">{exp.period}</div>
                    <ul>
                      {exp.descriptions.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Timeline;