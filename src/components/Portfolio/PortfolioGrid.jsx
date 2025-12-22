// src/components/Portfolio/PortfolioGrid.jsx
import { useLanguage } from "../../context/LanguageContext";
import { Link, useNavigate } from "react-router-dom";

const PortfolioGrid = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      slug: "sipmer-seduc",
      title: "SIPMER - Sistema de Planificación SEDUC",
      description:
        "Sistema de Planificación, Monitoreo y Evaluación orientado a Resultados para la Secretaría de Educación. Arquitectura de microfrontends con React.js.",
      category: "gobierno",
      tags: ["React.js", "Microfrontends", "Gobierno"],
      referenceLink:
        "https://www.facebook.com/transparenciaddefranciscomorazan/posts/1026652822835165/",
      referenceLinkText: t("project_reference"),
    },
    {
      id: 2,
      slug: "tsc-website",
      title: "Tribunal Superior de Cuentas",
      description:
        "Sitio web institucional con gestor documental optimizado SEO. Desarrollo completo con WordPress y deployment en IIS.",
      category: "gobierno",
      tags: ["WordPress", "SEO", "IIS"],
      visitLink: "https://www.tsc.gob.hn/",
      visitLinkText: t("project_visit"),
    },
    {
      id: 3,
      slug: "copa-queso-marketplace",
      title: "Copa y Queso - Marketplace",
      description:
        "Marketplace multivendedor con sistema de sommelier de IA. Desarrollo completo desde diseño de identidad visual hasta implementación técnica.",
      category: "ecommerce",
      tags: ["WooCommerce", "API REST", "IA"],
      visitLink: "https://copayqueso.com/",
      visitLinkText: t("project_visit"),
    },
    {
      id: 4,
      slug: "go-consultores",
      title: "Go Consultores - Sitio Corporativo",
      description:
        "Desarrollo full-stack del sitio corporativo. Diseño, contenido, optimización SEO y gestión completa de hosting.",
      category: "corporativo",
      tags: ["WordPress", "SEO", "Branding"],
      visitLink: "https://www.goconsultores.com/",
      visitLinkText: t("project_visit"),
    },
    {
      id: 5,
      slug: "espresso-americano",
      title: "Espresso Americano - App Móvil",
      description:
        "Aplicación móvil desarrollada con React Native. Publicada en App Store y Google Play Store.",
      category: "mobile",
      tags: ["React Native", "iOS", "Android"],
    },
    {
      id: 6,
      slug: "videos-promocionales",
      title: "Videos Promocionales",
      description:
        "Producción y edición de videos promocionales para diversos clientes. Creación de contenido visual atractivo y efectivo.",
      category: "multimedia",
      tags: ["Video", "Marketing", "Diseño"],
      visitLink: "https://youtu.be/8L8t8FQOBLQ",
      visitLinkText: t("project_view_videos"),
    },
  ];

  const handleViewDetails = (slug) => {
    navigate(`/project/${slug}`);
  };

  return (
    <section id="portfolio">
      <div className="portfolio-content">
        <h2>{t("portfolio_title")}</h2>
        <p className="portfolio-subtitle">{t("portfolio_subtitle")}</p>

        <div className="portfolio-grid">
          {projects.map((project) => (
            <div
              key={project.id}
              className="portfolio-card"
              data-category={project.category}
            >
              <div className="portfolio-image">
                <div className="project-overlay">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="portfolio-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="portfolio-links">
                  <button
                    onClick={() => handleViewDetails(project.slug)}
                    className="btn-view"
                  >
                    {t("project_details")}
                  </button>
                  {project.visitLink && (
                    <a
                      href={project.visitLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-link"
                    >
                      <span>{project.visitLinkText}</span> ↗
                    </a>
                  )}
                  {project.referenceLink && (
                    <a
                      href={project.referenceLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-link"
                    >
                      <span>{project.referenceLinkText}</span> ↗
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
