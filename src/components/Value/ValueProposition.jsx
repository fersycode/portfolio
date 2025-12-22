// src/components/Value/ValueProposition.jsx
import { useLanguage } from '../../context/LanguageContext';

const ValueProposition = () => {
  const { t } = useLanguage();

  const expertiseAreas = [
    {
      id: 1,
      icon: 'fas fa-laptop-code',
      title: t('value_exp1_title'),
      description: t('value_exp1_desc'),
      highlights: [
        'React.js, Next.js y arquitecturas de microfrontends',
        'TypeScript para código robusto y seguro',
        'Optimización de rendimiento y mejores prácticas',
        'Testing y documentación completa'
      ]
    },
    {
      id: 2,
      icon: 'fas fa-pencil-ruler',
      title: t('value_exp2_title'),
      description: t('value_exp2_desc'),
      highlights: [
        'Prototipos interactivos en Figma',
        'Design systems y componentes reutilizables',
        'Responsive design y accesibilidad',
        'Investigación de usuarios y testing'
      ]
    },
    {
      id: 3,
      icon: 'fas fa-project-diagram',
      title: t('value_exp3_title'),
      description: t('value_exp3_desc'),
      highlights: [
        'Backend con Node.js y REST APIs',
        'Bases de datos MySQL y Firebase',
        'Integración de servicios externos',
        'Deployment y DevOps (AWS, Vercel, Netlify)'
      ]
    },
    {
      id: 4,
      icon: 'fas fa-mobile-alt',
      title: t('value_exp4_title'),
      description: t('value_exp4_desc'),
      highlights: [
        'Apps para iOS y Android',
        'Publicación en App Store y Google Play',
        'Integración con APIs y servicios backend',
        'Notificaciones push y funcionalidades nativas'
      ]
    },
    {
      id: 5,
      icon: 'fas fa-store',
      title: t('value_exp5_title'),
      description: t('value_exp5_desc'),
      highlights: [
        'WordPress y WooCommerce avanzado',
        'Desarrollo de plugins personalizados',
        'Optimización SEO y conversión',
        'Integraciones de pasarelas de pago'
      ]
    },
    {
      id: 6,
      icon: 'fas fa-users',
      title: t('value_exp6_title'),
      description: t('value_exp6_desc'),
      highlights: [
        'Gestión de proyectos de inicio a fin',
        'Mentoría y code reviews',
        'Metodologías ágiles (Scrum)',
        'Comunicación efectiva con stakeholders'
      ]
    }
  ];

  const differentiators = [
    {
      id: 1,
      icon: 'fas fa-brain',
      title: t('value_diff1_title'),
      description: t('value_diff1_desc')
    },
    {
      id: 2,
      icon: 'fas fa-rocket',
      title: t('value_diff2_title'),
      description: t('value_diff2_desc')
    },
    {
      id: 3,
      icon: 'fas fa-puzzle-piece',
      title: t('value_diff3_title'),
      description: t('value_diff3_desc')
    },
    {
      id: 4,
      icon: 'fas fa-hands-helping',
      title: t('value_diff4_title'),
      description: t('value_diff4_desc')
    },
    {
      id: 5,
      icon: 'fas fa-lightbulb',
      title: t('value_diff5_title'),
      description: t('value_diff5_desc')
    },
    {
      id: 6,
      icon: 'fas fa-shield-alt',
      title: t('value_diff6_title'),
      description: t('value_diff6_desc')
    }
  ];

  const workModes = [
    {
      id: 1,
      icon: 'fas fa-briefcase',
      title: t('value_mode1_title'),
      description: t('value_mode1_desc'),
      badge: t('value_mode1_badge'),
      featured: true,
      features: [
        'Compromiso a largo plazo',
        'Trabajo 100% remoto',
        'Horario flexible',
        'Integración total al equipo',
        'Participación en decisiones técnicas'
      ]
    },
    {
      id: 2,
      icon: 'fas fa-clock',
      title: t('value_mode2_title'),
      description: t('value_mode2_desc'),
      featured: false,
      features: [
        'Duración definida',
        'Objetivos claros y medibles',
        'Entrega de resultados específicos',
        'Documentación completa',
        'Transferencia de conocimiento'
      ]
    },
    {
      id: 3,
      icon: 'fas fa-handshake',
      title: t('value_mode3_title'),
      description: t('value_mode3_desc'),
      featured: false,
      features: [
        'Revisión de arquitectura',
        'Auditoría de código',
        'Recomendaciones técnicas',
        'Capacitación de equipos',
        'Definición de estándares'
      ]
    }
  ];

  return (
    <section id="value-proposition">
      <div className="content-wrapper">
        <div className="section-header">
          <h2>{t('value_title')}</h2>
          <p className="section-subtitle">{t('value_subtitle')}</p>
        </div>

        <div className="expertise-grid">
          {expertiseAreas.map((area) => (
            <div key={area.id} className="expertise-card">
              <i className={`${area.icon} expertise-icon`}></i>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
              <ul className="expertise-highlights">
                {area.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="unique-value">
          <h3>{t('value_unique_title')}</h3>
          <div className="value-grid">
            {differentiators.map((diff) => (
              <div key={diff.id} className="value-item">
                <div className="value-icon">
                  <i className={diff.icon}></i>
                </div>
                <div className="value-content">
                  <h4>{diff.title}</h4>
                  <p>{diff.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="work-modes">
          <h3>{t('value_modes_title')}</h3>
          <div className="modes-container">
            {workModes.map((mode) => (
              <div
                key={mode.id}
                className={`mode-card ${mode.featured ? 'featured' : ''}`}
              >
                {mode.badge && (
                  <span className="mode-badge">{mode.badge}</span>
                )}
                <div className="mode-icon">
                  <i className={mode.icon}></i>
                </div>
                <h4>{mode.title}</h4>
                <p>{mode.description}</p>
                <ul className="mode-features">
                  {mode.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;