// src/components/About/AboutSection.jsx
import { useLanguage } from '../../context/LanguageContext';
import PhotoGallery from './PhotoGallery';
import TechCarousel from './TechCarousel';
import photo from '../../assets/About/2.jpg';
const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about">
      <div className="about-content">
        {/* Encabezado de sección */}
        <div className="section-header">
          <h2>{t('about_title')}</h2>
          <p className="section-subtitle">{t('about_subtitle')}</p>
        </div>

        {/* Hero: Foto principal + Info */}
        <div className="about-hero">
          <div className="main-photo-container">
            <div className="main-photo">
              <img
                src={photo}
                alt="Fersy Martínez"
              />
            </div>
            <p className="photo-caption">
              {t('about_creating')}
            </p>
          </div>

          <div className="about-info">
            <p className="greeting">{t('about_greeting')}</p>
            <h3>Fersy S. Martínez R.</h3>
            <p className="role">{t('about_role')}</p>

            <p className="about-description">
              {t('about_description1')}
            </p>

            <p className="about-description">
              {t('about_description2')}
            </p>

            <div className="quick-facts">
              <div className="fact-item">
                <i className="fas fa-graduation-cap"></i>
                <span className="fact-text">
                  <span>{t('about_fact1_title')}</span><br />
                  <span>{t('about_fact1_subtitle')}</span>
                </span>
              </div>
              <div className="fact-item">
                <i className="fas fa-briefcase"></i>
                <span className="fact-text">
                  <span>{t('about_fact2_title')}</span><br />
                  <span>{t('about_fact2_subtitle')}</span>
                </span>
              </div>
              <div className="fact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span className="fact-text">
                  <span>{t('about_fact3_title')}</span><br />
                  <span>{t('about_fact3_subtitle')}</span>
                </span>
              </div>
              <div className="fact-item">
                <i className="fas fa-heart"></i>
                <span className="fact-text">
                  <span>{t('about_fact4_title')}</span><br />
                  <span>{t('about_fact4_subtitle')}</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Galería personal */}
        <PhotoGallery />

        {/* Stack tecnológico */}
        <TechCarousel />
      </div>
    </section>
  );
};

export default AboutSection;