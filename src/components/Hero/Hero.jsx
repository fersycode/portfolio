// src/components/Hero/Hero.jsx
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
const Hero = () => {
  const { t } = useLanguage();

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero">
      <div className="stars"></div>
      <div className="moon"></div>
      <div className="hero-content">
        <h1>{t('hero_title')}</h1>
        <p>{t('hero_subtitle')}</p>
          <Link to="/projects" className="cta-button">
            {t("portfolio_cta_button")}
          </Link>
        </div>
      <div className="waves">
        <div className="wave"></div>
      </div>
      <div className="scroll-indicator"></div>
    </section>
  );
};

export default Hero;