// src/components/Experience/Timeline.jsx
import { useLanguage } from '../../context/LanguageContext';

const Timeline = () => {
  const { t } = useLanguage();

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
        t('exp_job1_desc5')
      ]
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
        t('exp_job2_desc5')
      ]
    }
  ];

  return (
    <section id="experience">
      <div className="ocean-floor"></div>
      <div className="experience-content">
        <h2>{t('experience_title')}</h2>
        <div className="timeline">
          {experiences.map((exp) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-card">
                <h3>{exp.title}</h3>
                <div className="company">{exp.company}</div>
                <div className="period">{exp.period}</div>
                <ul>
                  {exp.descriptions.map((desc, index) => (
                    <li key={index}>{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;