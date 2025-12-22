// src/components/Skills/SkillsGrid.jsx
import { useLanguage } from '../../context/LanguageContext';
import { useEffect, useRef } from 'react';

const SkillsGrid = () => {
  const { t } = useLanguage();
  const skillsRef = useRef(null);

  const skillCategories = [
    {
      id: 1,
      icon: 'fas fa-laptop-code',
      title: t('skill_cat1'),
      skills: [
        { name: 'React.js / Next.js', progress: 90 },
        { name: 'TypeScript / JavaScript', progress: 90 },
        { name: 'Angular', progress: 90 },
        { name: 'Bootstrap / Tailwind', progress: 90 }
      ]
    },
    {
      id: 2,
      icon: 'fas fa-palette',
      title: t('skill_cat2'),
      skills: [
        { name: 'Figma', progress: 80 },
        { name: 'UI/UX Design', progress: 90 },
        { name: 'Brand Design', progress: 70 },
        { name: 'Video Editing', progress: 70 }
      ]
    },
    {
      id: 3,
      icon: 'fas fa-shopping-cart',
      title: t('skill_cat3'),
      skills: [
        { name: 'WordPress', progress: 100 },
        { name: 'WooCommerce', progress: 90 },
        { name: 'SEO Optimization', progress: 90 },
        { name: 'Plugin Development', progress: 80 }
      ]
    },
    {
      id: 4,
      icon: 'fas fa-mobile-alt',
      title: t('skill_cat4'),
      skills: [
        { name: 'React Native', progress: 85 },
        { name: 'Node.js / REST APIs', progress: 70 },
        { name: 'MySQL / Firebase', progress: 70 },
        { name: 'iOS / Android Deploy', progress: 90 }
      ]
    },
    {
      id: 5,
      icon: 'fas fa-cloud',
      title: t('skill_cat5'),
      skills: [
        { name: 'Git / GitHub / Bitbucket', progress: 90 },
        { name: 'AWS EC2 / Firebase', progress: 40 },
        { name: 'Vercel / Netlify', progress: 90 },
        { name: 'PM2 / IIS', progress: 60 }
      ]
    }
  ];

  const softSkills = [
    'Pensamiento Crítico',
    'Trabajo en Equipo',
    'Responsabilidad',
    'Creatividad',
    'Resiliencia',
    'Autonomía',
    'Atención al Detalle',
    'Liderazgo'
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.skill-progress');
            progressBars.forEach((bar) => {
              const progress = bar.getAttribute('data-progress');
              bar.style.width = `${progress}%`;
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={skillsRef}>
      <div className="skills-content">
        <h2>{t('skills_title')}</h2>

        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div key={category.id} className="skill-category">
              <div className="category-icon">
                <i className={category.icon}></i>
              </div>
              <h3>{category.title}</h3>
              <div className="skill-bars">
                {category.skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-name">{skill.name}</div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        data-progress={skill.progress}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="skill-category">
            <div className="category-icon">
              <i className="fas fa-star"></i>
            </div>
            <h3>{t('skill_cat6')}</h3>
            <div className="soft-skills-grid">
              {softSkills.map((skill, index) => (
                <div key={index} className="soft-skill">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsGrid;