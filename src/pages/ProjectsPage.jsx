// src/pages/ProjectsPage.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { projects } from "../data/projects";

const ProjectsPage = () => {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedTech, setSelectedTech] = useState("all");

  // Extraer todas las tecnologías únicas
  const allTechnologies = [
    ...new Set(projects.flatMap((p) => p.technologies)),
  ].sort();

  // Categorías
  const categories = [
    { value: "all", label: { es: "Todos", en: "All" } },
    { value: "gobierno", label: { es: "Gobierno", en: "Government" } },
    { value: "ecommerce", label: { es: "E-Commerce", en: "E-Commerce" } },
    { value: "corporativo", label: { es: "Corporativo", en: "Corporate" } },
    { value: "mobile", label: { es: "Móvil", en: "Mobile" } },
    { value: "multimedia", label: { es: "Multimedia", en: "Multimedia" } },
  ];

  // Filtrar proyectos
  const filteredProjects = projects.filter((project) => {
    const categoryMatch =
      selectedCategory === "all" || project.category === selectedCategory;
    const techMatch =
      selectedTech === "all" || project.technologies.includes(selectedTech);
    return categoryMatch && techMatch;
  });

  const getText = (field) => {
    return typeof field === "object" ? field[language] : field;
  };

  return (
    <div className="projects-page">
      <div className="projects-page-header">
        <div className="breadcrumb-nav">
          <Link to="/">
            <i className="fas fa-home"></i> {t("nav_home")}
          </Link>
          <span>/</span>
          <span className="current">{t("portfolio_title")}</span>
        </div>

        <h1>{t("projects_page_title")}</h1>
        <p className="projects-page-subtitle">{t("projects_page_subtitle")}</p>

        <div className="projects-stats">
          <div className="stat-box">
            <span className="stat-number">{projects.length}</span>
            <span className="stat-label">{t("projects_stat_total")}</span>
          </div>
          <div className="stat-box">
            <span className="stat-number">{allTechnologies.length}</span>
            <span className="stat-label">{t("projects_stat_techs")}</span>
          </div>
          <div className="stat-box">
            <span className="stat-number">{filteredProjects.length}</span>
            <span className="stat-label">{t("projects_stat_showing")}</span>
          </div>
        </div>
      </div>

      <div className="projects-page-content">
        {/* Filtros */}
        <aside className="projects-filters-sidebar">
          <div className="filter-section">
            <h3>{t("portfolio_filter_category")}</h3>
            <div className="filter-list">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  className={`filter-item ${
                    selectedCategory === cat.value ? "active" : ""
                  }`}
                  onClick={() => {
                    setSelectedCategory(cat.value);
                    setSelectedTech("all");
                  }}
                >
                  <span className="filter-dot"></span>
                  {getText(cat.label)}
                  <span className="filter-count">
                    (
                    {
                      projects.filter(
                        (p) => cat.value === "all" || p.category === cat.value
                      ).length
                    }
                    )
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="filter-section">
            <h3>{t("portfolio_filter_tech")}</h3>
            <div className="tech-filter-list">
              <button
                className={`tech-filter-item ${
                  selectedTech === "all" ? "active" : ""
                }`}
                onClick={() => setSelectedTech("all")}
              >
                {t("portfolio_filter_all_tech")}
              </button>
              {allTechnologies.map((tech) => (
                <button
                  key={tech}
                  className={`tech-filter-item ${
                    selectedTech === tech ? "active" : ""
                  }`}
                  onClick={() => setSelectedTech(tech)}
                >
                  {tech}
                </button>
              ))}
            </div>
          </div>

          {(selectedCategory !== "all" || selectedTech !== "all") && (
            <button
              className="clear-filters-btn"
              onClick={() => {
                setSelectedCategory("all");
                setSelectedTech("all");
              }}
            >
              <i className="fas fa-times"></i> {t("projects_clear_filters")}
            </button>
          )}
        </aside>

        {/* Grid de proyectos */}
        <div className="projects-grid-container">
          {filteredProjects.length > 0 ? (
            <div className="projects-full-grid">
              {filteredProjects.map((project) => (
                <article className="project-full-card" key={project.id}>
                  <div className="project-full-image">
                    {project.images && project.images.main && (
                      <img
                        src={project.images.main}
                        alt={getText(project.title)}
                        loading="lazy"
                      />
                    )}
                    <div className="project-full-overlay">
                      <div className="project-tags-wrapper">
                        {project.tags.map((tag, idx) => (
                          <span className="project-tag" key={idx}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="project-full-info">
                    <div className="project-meta-top">
                      <span className="project-year">
                        <i className="fas fa-calendar"></i> {project.year}
                      </span>
                      <span className="project-category">
                        {getText(project.client)}
                      </span>
                    </div>

                    <h3>{getText(project.title)}</h3>
                    <p className="project-excerpt">{getText(project.intro)}</p>

                    <div className="project-tech-stack">
                      {project.technologies.slice(0, 4).map((tech, idx) => (
                        <span className="tech-badge" key={idx}>
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="tech-badge more">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>

                    <div className="project-full-actions">
                      <Link
                        to={`/project/${project.slug}`}
                        className="btn-primary"
                      >
                        <i className="fas fa-arrow-right"></i>{" "}
                        {t("project_details")}
                      </Link>
                      {project.links?.site && (
                        <a
                          href={project.links.site}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-secondary"
                        >
                          <i className="fas fa-external-link-alt"></i>{" "}
                          {t("project_visit")}
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="no-projects-found">
              <i className="fas fa-search"></i>
              <h3>{t("portfolio_no_results")}</h3>
              <p>{t("projects_no_results_desc")}</p>
              <button
                className="cta-button"
                onClick={() => {
                  setSelectedCategory("all");
                  setSelectedTech("all");
                }}
              >
                {t("projects_clear_filters")}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
