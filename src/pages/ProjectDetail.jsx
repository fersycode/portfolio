// src/pages/ProjectDetail.jsx
import { useParams, Link, Navigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { projects } from '../data/projects';
import '../styles/project.css';

const ProjectDetail = () => {
  const { slug } = useParams();
  const { language, t } = useLanguage();
  
  const project = projects.find(p => p.slug === slug);
  
  if (!project) {
    return <Navigate to="/" replace />;
  }

  const getText = (field) => {
    return typeof field === 'object' ? field[language] : field;
  };

  return (
    <main className="project-detail">
      <header className="project-header">
        <h1>{getText(project.title)}</h1>
        <p className="project-intro">{getText(project.intro)}</p>
        
        <div className="project-meta">
          <div className="meta-item">
            <i className="fas fa-calendar"></i>
            <span>{t('project_year')}: <strong>{project.year}</strong></span>
          </div>
          <div className="meta-item">
            <i className="fas fa-briefcase"></i>
            <span>{t('project_client')}: <strong>{getText(project.client)}</strong></span>
          </div>
          <div className="meta-item">
            <i className="fas fa-user"></i>
            <span>{t('project_role')}: <strong>{getText(project.role)}</strong></span>
          </div>
        </div>
      </header>

      <section className="project-content">
        <div className="content-grid">
          <aside className="project-sidebar">
            <div className="info-block">
              <h3>{t('project_technologies')}</h3>
              <ul>
                {project.technologies.map((tech, idx) => (
                  <li key={idx}>{tech}</li>
                ))}
              </ul>
            </div>

            <div className="info-block">
              <h3>{t('project_links')}</h3>
              {project.links.site && (
                <a href={project.links.site} className="project-link" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-external-link-alt"></i>
                  <span>{t('project_view_site')}</span>
                </a>
              )}
              {project.links.reference && (
                <a href={project.links.reference} className="project-link" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-link"></i>
                  <span>{t('project_reference')}</span>
                </a>
              )}
              {project.links.repository && (
                <a href={project.links.repository} className="project-link" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                  <span>{t('project_repository')}</span>
                </a>
              )}
            </div>
          </aside>

          <article className="project-main">
            <section className="content-section">
              <h2>{t('project_description')}</h2>
              {getText(project.description).map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </section>

            <section className="content-section">
              <h2>{t('project_challenges')}</h2>
              <ul>
                {getText(project.challenges).map((challenge, idx) => (
                  <li key={idx}>{challenge}</li>
                ))}
              </ul>
            </section>

            <section className="content-section">
              <h2>{t('project_solutions')}</h2>
              <ul>
                {getText(project.solutions).map((solution, idx) => (
                  <li key={idx}>{solution}</li>
                ))}
              </ul>
            </section>

            <section className="content-section">
              <h2>{t('project_results')}</h2>
              
              {project.resultsCards && (
                <div className="results-grid">
                  {project.resultsCards.map((card, idx) => (
                    <div className="result-card" key={idx}>
                      <div className="result-value">{getText(card.value)}</div>
                      <div className="result-label">{getText(card.label)}</div>
                    </div>
                  ))}
                </div>
              )}
              
              {getText(project.results).map((result, idx) => (
                <p key={idx}>{result}</p>
              ))}
            </section>
          </article>
        </div>
      </section>

      <nav className="project-navigation">
        <Link to={"/portfolio/" + project.prevProject || '#'} className="nav-project prev">
          <i className="fas fa-arrow-left"></i>
          <span>{t('project_prev')}</span>
        </Link>
        <Link to="/portfolio/projects" className="nav-project all">
          <i className="fas fa-th"></i>
          <span>{t('project_all')}</span>
        </Link>
        <Link to={"/portfolio/" + project.nextProject || '#'} className="nav-project next">
          <span>{t('project_next')}</span>
          <i className="fas fa-arrow-right"></i>
        </Link>
      </nav>
    </main>
  );
};

export default ProjectDetail;