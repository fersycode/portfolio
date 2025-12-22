// src/components/Contact/ContactSection.jsx
import { useLanguage } from '../../context/LanguageContext';

const ContactSection = () => {
  const { t } = useLanguage();

  const downloadCV = () => {
    window.open('cv.pdf', '_blank');
  };

  return (
    <section id="contact">
      <div className="contact-content">
        <h2>{t('contact_title')}</h2>
        <p className="contact-subtitle">{t('contact_subtitle')}</p>

        <div className="contact-grid">
          {/* Información de Contacto */}
          <div className="contact-info">
            <h3>{t('contact_info_title')}</h3>

            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-details">
                <h4>{t('contact_email')}</h4>
                <a href="mailto:fersy119988@gmail.com">fersy119988@gmail.com</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <i className="fab fa-whatsapp"></i>
              </div>
              <div className="contact-details">
                <h4>{t('contact_phone_whatsapp')}</h4>
                <a href="tel:+50498240913">(+504) 9824-0913</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="contact-details">
                <h4>{t('contact_location')}</h4>
                <p>{t('contact_location_city')}</p>
                <p className="location-note">{t('contact_location_remote')}</p>
              </div>
            </div>

            <div className="social-links">
              <h4>{t('contact_find_me')}</h4>
              <div className="social-icons">
                <a href="https://www.linkedin.com/in/tu-perfil" className="social-icon" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://github.com/tu-usuario" className="social-icon" title="GitHub" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://www.behance.net/tu-perfil" className="social-icon" title="Behance" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-behance"></i>
                </a>
              </div>
            </div>

            <div className="download-cv">
              <h4>{t('contact_download_cv')}</h4>
              <button className="btn-download" onClick={downloadCV}>
                <i className="fas fa-file-pdf"></i>
                <span>{t('contact_download_btn')}</span>
              </button>
            </div>
          </div>

          {/* Panel Visual */}
          <div className="contact-visual">
            {/* Tarjeta de Disponibilidad */}
            <div className="availability-card">
              <div className="status-indicator"></div>
              <h4>{t('contact_available')}</h4>
              <p>{t('contact_response_time')}</p>
              <p className="timezone">{t('contact_timezone')}</p>
            </div>

            {/* Habilidades Destacadas */}
            <div className="skills-highlight">
              <h4>{t('contact_main_tech')}</h4>
              <div className="skill-tags">
                <span className="skill-tag">React</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">UI/UX</span>
                <span className="skill-tag">DevOps</span>
                <span className="skill-tag">Figma</span>
                <span className="skill-tag">PostgreSQL</span>
              </div>
            </div>

            {/* Estadísticas */}
            <div className="stats-card">
              <div className="stats-grid">
                <div className="stat-item">
                  <span className="stat-number">4+</span>
                  <span className="stat-label">{t('contact_stat_years')}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">25+</span>
                  <span className="stat-label">{t('contact_stat_projects')}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">15+</span>
                  <span className="stat-label">{t('contact_stat_clients')}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">{t('contact_stat_remote')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="ocean-footer">
        <div className="footer-content">
          <div className="footer-logo">
            <div className="logo">F.M.</div>
            <p>{t('footer_tagline')}</p>
          </div>
          <div className="footer-links">
            <a href="#hero">{t('nav_home')}</a>
            <a href="#about">{t('nav_about')}</a>
            <a href="#portfolio">{t('nav_portfolio')}</a>
            <a href="#contact">{t('nav_contact')}</a>
          </div>
          <div className="footer-certifications">
            <p><strong>{t('footer_certifications')}</strong></p>
            <p>{t('footer_cert1')}</p>
            <p>{t('footer_cert2')}</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Fersy Martínez. {t('footer_copyright')}</p>
        </div>
      </footer>
    </section>
  );
};

export default ContactSection;