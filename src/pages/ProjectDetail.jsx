// src/pages/ProjectDetail.jsx
import { useParams, Link, Navigate } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { useLanguage } from "../context/LanguageContext";
import { projects } from "../data/projects";
import "../styles/project.css";

/* ─────────────────────────────────────────────
   LIGHTBOX
   ───────────────────────────────────────────── */
const Lightbox = ({ images, activeIndex, onClose, onPrev, onNext }) => {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, onPrev, onNext]);

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <button className="lightbox-btn lightbox-close" onClick={onClose}>
        <i className="fas fa-times" />
      </button>
      <button
        className="lightbox-btn lightbox-prev"
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
      >
        <i className="fas fa-chevron-left" />
      </button>

      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <img src={images[activeIndex]} alt={`Preview ${activeIndex + 1}`} />
      </div>

      <button
        className="lightbox-btn lightbox-next"
        onClick={(e) => { e.stopPropagation(); onNext(); }}
      >
        <i className="fas fa-chevron-right" />
      </button>

      <div className="lightbox-counter">
        {activeIndex + 1} / {images.length}
      </div>

      {/* Dots */}
      <div className="lightbox-dots">
        {images.map((_, i) => (
          <button
            key={i}
            className={`lightbox-dot ${i === activeIndex ? "active" : ""}`}
            onClick={(e) => { e.stopPropagation(); /* go to index */ }}
          />
        ))}
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────
   CAROUSEL
   ───────────────────────────────────────────── */
const ImageCarousel = ({ images, title }) => {
  const [current, setCurrent] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const prev = useCallback(() => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1)), [images.length]);
  const next = useCallback(() => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1)), [images.length]);

  const openLightbox = (idx) => {
    setLightboxIndex(idx);
    setLightboxOpen(true);
  };

  const lightboxPrev = useCallback(() => setLightboxIndex((i) => (i === 0 ? images.length - 1 : i - 1)), [images.length]);
  const lightboxNext = useCallback(() => setLightboxIndex((i) => (i === images.length - 1 ? 0 : i + 1)), [images.length]);

  return (
    <>
      <div className="carousel">
        {/* Main slide */}
        <div className="carousel-main">
          <button className="carousel-btn carousel-btn--prev" onClick={prev}>
            <i className="fas fa-chevron-left" />
          </button>

          <div className="carousel-slide-wrapper">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`${title} - ${i + 1}`}
                className="carousel-slide"
                style={{ transform: `translateX(${(i - current) * 100}%)` }}
                onClick={() => openLightbox(i)}
                loading={i === 0 ? "eager" : "lazy"}
              />
            ))}
          </div>

          <button className="carousel-btn carousel-btn--next" onClick={next}>
            <i className="fas fa-chevron-right" />
          </button>

          {/* Counter badge */}
          <span className="carousel-counter">{current + 1} / {images.length}</span>
        </div>

        {/* Thumbnails strip */}
        <div className="carousel-thumbs">
          {images.map((img, i) => (
            <button
              key={i}
              className={`carousel-thumb ${i === current ? "active" : ""}`}
              onClick={() => setCurrent(i)}
            >
              <img src={img} alt={`Thumb ${i + 1}`} />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          images={images}
          activeIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
          onPrev={lightboxPrev}
          onNext={lightboxNext}
        />
      )}
    </>
  );
};

/* ─────────────────────────────────────────────
   ACCORDION SIDEBAR BLOCK
   ───────────────────────────────────────────── */
const AccordionBlock = ({ title, defaultOpen = false, children }) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={`info-block info-block--accordion ${open ? "open" : ""}`}>
      <button className="info-block__header" onClick={() => setOpen(!open)}>
        <h3>{title}</h3>
        <i className={`fas fa-chevron-down info-block__chevron`} />
      </button>
      <div className="info-block__body">{children}</div>
    </div>
  );
};

/* ─────────────────────────────────────────────
   MAIN PAGE
   ───────────────────────────────────────────── */
const ProjectDetail = () => {
  const { slug } = useParams();
  const { language, t } = useLanguage();

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const getText = (field) => {
    return typeof field === "object" ? field[language] : field;
  };

  return (
    <main className="project-detail">
      <header className="project-header">
        <h1>{getText(project.title)}</h1>
        <p className="project-intro">{getText(project.intro)}</p>

        <div className="project-meta">
          <div className="meta-item">
            <i className="fas fa-calendar"></i>
            <span>
              {t("project_year")}: <strong>{project.year}</strong>
            </span>
          </div>
          <div className="meta-item">
            <i className="fas fa-briefcase"></i>
            <span>
              {t("project_client")}: <strong>{getText(project.client)}</strong>
            </span>
          </div>
          <div className="meta-item">
            <i className="fas fa-user"></i>
            <span>
              {t("project_role")}: <strong>{getText(project.role)}</strong>
            </span>
          </div>
        </div>
      </header>

      <section className="project-content">
        <div className="content-grid">
          {/* ── SIDEBAR ── */}
          <aside className="project-sidebar">
            <AccordionBlock title={t("project_technologies")} defaultOpen={true}>
              <ul>
                {project.technologies.map((tech, idx) => (
                  <li key={idx}>{tech}</li>
                ))}
              </ul>
            </AccordionBlock>

            {project?.links && (
              <AccordionBlock title={t("project_links")} defaultOpen={true}>
                {project.links?.site && (
                  <a href={project.links.site} className="project-link" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt"></i>
                    <span>{t("project_view_site")}</span>
                  </a>
                )}
                {project.links?.postman && (
                  <a href={project.links.postman} className="project-link" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt"></i>
                    <span>{t("project_view_site")}</span>
                  </a>
                )}
                {project.links?.reference && (
                  <a href={project.links.reference} className="project-link" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-link"></i>
                    <span>{t("project_reference")}</span>
                  </a>
                )}
                {project.links?.repository && (
                  <a href={project.links.repository} className="project-link" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                    <span>{t("project_repository")}</span>
                  </a>
                )}
              </AccordionBlock>
            )}

            {project.relatedCode && project.relatedCode.repositories.length > 0 && (
              <AccordionBlock title={t("project_related_code")} defaultOpen={true}>
                {project.relatedCode.repositories.map((repo, idx) => (
                  <div key={idx}>
                    {repo.status === "available" ? (
                      <a className="project-link" href={repo.url} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                        <span>{getText(repo.label)}</span>
                      </a>
                    ) : repo.status === "coming-soon" ? (
                      <div className="coming-soon-link">
                        <i className="fab fa-github"></i>
                        <span>{getText(repo.label)}</span>
                        <span className="badge">{t("coming_soon")}</span>
                      </div>
                    ) : null}
                  </div>
                ))}
              </AccordionBlock>
            )}
          </aside>

          {/* ── MAIN CONTENT ── */}
          <article className="project-main">
            {/* Carousel */}
            {project.images.gallery && project.images.gallery.length > 0 && (
              <section className="content-section">
                <h2>{t("project_gallery")}</h2>
                <ImageCarousel images={project.images.gallery} title={getText(project.title)} />
              </section>
            )}

            {/* Iframe */}
            {project.media.iframe && (
              <section className="content-section">
                <h2>{t("project_preview")}</h2>
                <div className="project-iframe-container">
                  <iframe src={project.media.iframe} title={getText(project.title)} allowFullScreen />
                </div>
              </section>
            )}

            {/* Videos */}
            {project.media.videos && project.media.videos.length > 0 && (
              <section className="content-section">
                <h2>{t("project_videos")}</h2>
                <div className="project-videos">
                  {project.media.videos.map((video, idx) => (
                    <div key={idx} className="video-container">
                      <h3>{getText(video.title)}</h3>
                      <iframe
                        src={"https://www.youtube.com/embed/" + video.url}
                        title={getText(video.title)}
                        frameBorder="0"
                        allowFullScreen
                        sandbox="allow-scripts allow-same-origin"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}

            <section className="content-section">
              <h2>{t("project_description")}</h2>
              {getText(project.description).map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </section>

            <section className="content-section">
              <h2>{t("project_challenges")}</h2>
              <ul>
                {getText(project.challenges).map((challenge, idx) => (
                  <li key={idx}>{challenge}</li>
                ))}
              </ul>
            </section>

            <section className="content-section">
              <h2>{t("project_solutions")}</h2>
              <ul>
                {getText(project.solutions).map((solution, idx) => (
                  <li key={idx}>{solution}</li>
                ))}
              </ul>
            </section>

            <section className="content-section">
              <h2>{t("project_results")}</h2>
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
        <Link to={project.prevProject || "#"} className="nav-project prev">
          <i className="fas fa-arrow-left"></i>
          <span>{t("project_prev")}</span>
        </Link>
        <Link to="/projects" className="nav-project all">
          <i className="fas fa-th"></i>
          <span>{t("project_all")}</span>
        </Link>
        <Link to={project.nextProject || "#"} className="nav-project next">
          <span>{t("project_next")}</span>
          <i className="fas fa-arrow-right"></i>
        </Link>
      </nav>
    </main>
  );
};

export default ProjectDetail;