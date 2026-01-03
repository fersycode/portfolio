// src/components/Portfolio/PortfolioGrid.jsx
import { useLanguage } from "../../context/LanguageContext";
import { Link, useNavigate } from "react-router-dom";
import { projects } from "../../data/projects";

const PortfolioGrid = () => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  // Filtrar solo proyectos destacados (featured: true)
  const featuredProjects = projects.filter(project => project.featured);

  const handleViewDetails = (slug) => {
    navigate(`/project/${slug}`);
  };

  return (
    <section id="portfolio">
      <div className="portfolio-content">
        <h2>{t("portfolio_title")}</h2>
        <p className="portfolio-subtitle">{t("portfolio_subtitle")}</p>

        <div className="portfolio-grid">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="portfolio-card"
              data-category={project.category}
            >
              <div className="portfolio-image">
                <img 
                  src={project.images.main} 
                  alt={project.title[language]}
                  loading="lazy"
                />
                <div className="project-overlay">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="portfolio-info">
                <h3>{project.title[language]}</h3>
                <p>{project.intro[language]}</p>
                <div className="portfolio-links">
                  <button
                    onClick={() => handleViewDetails(project.slug)}
                    className="btn-view"
                  >
                    {t("project_details")}
                  </button>
                  {project.links?.site && (
                    <a
                      href={project.links.site}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-link"
                    >
                      <span>{t("project_visit")}</span> ↗
                    </a>
                  )}
                  {project.links?.reference && (
                    <a
                      href={project.links.reference}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-link"
                    >
                      <span>{t("project_reference")}</span> ↗
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="portfolio-cta">
          <p>{t("portfolio_cta_text")}</p>
          <Link to="/projects" className="cta-button">
            {t("portfolio_cta_button")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;