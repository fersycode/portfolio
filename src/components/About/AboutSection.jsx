import { useLanguage } from "../../context/LanguageContext";
import {
  Code,
  Rocket,
  Users,
  Award,
  MapPin,
  Briefcase,
  GraduationCap,
  Coffee,
} from "lucide-react";
import photo from "../../assets/About/2.jpg";
import TechCarousel from "./TechCarousel";
import { downloadCV } from "../../helpers";

const AboutSection = () => {
  const { t } = useLanguage();

  const stats = [
    { number: "50+", label: t("about_stat_projects") },
    { number: "5+", label: t("about_stat_years") },
    { number: "15+", label: t("about_stat_clients") },
    { number: "100%", label: t("about_stat_satisfaction") },
  ];

  const highlights = [
    {
      icon: <Code className="highlight-icon" />,
      title: t("about_highlight1_title"),
      description: t("about_highlight1_desc"),
    },
    {
      icon: <Rocket className="highlight-icon" />,
      title: t("about_highlight2_title"),
      description: t("about_highlight2_desc"),
    },
    {
      icon: <Users className="highlight-icon" />,
      title: t("about_highlight3_title"),
      description: t("about_highlight3_desc"),
    },
    {
      icon: <Award className="highlight-icon" />,
      title: t("about_highlight4_title"),
      description: t("about_highlight4_desc"),
    },
  ];

  const info = [
    {
      icon: <GraduationCap />,
      label: t("about_education"),
      value: t("about_education_value"),
    },
    {
      icon: <Briefcase />,
      label: t("about_experience"),
      value: t("about_experience_value"),
    },
    {
      icon: <MapPin />,
      label: t("about_location"),
      value: t("about_location_value"),
    },
    {
      icon: <Coffee />,
      label: t("about_passion"),
      value: t("about_passion_value"),
    },
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Header */}
        <div className="about-header">
          <span className="about-tag">{t("about_tag")}</span>
          <h2 className="about-title">{t("about_title")}</h2>
          <p className="about-subtitle">{t("about_subtitle")}</p>
        </div>

        {/* Main Content Grid */}
        <div className="about-grid">
          {/* Left: Photo & Stats */}
          <div className="about-left">
            <div className="about-photo-wrapper">
              <div className="about-photo">
                <img src={photo} alt="Fersy Martínez" />
                <div className="photo-overlay" />
              </div>
            </div>

            {/* Stats */}
            <div className="about-stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Info & Description */}
          <div className="about-right">
            <div className="about-intro">
              <h3 className="about-name">Fersy S. Martínez R.</h3>
              <p className="about-role">{t("about_role")}</p>
            </div>

            <div className="about-description">
              <p>{t("about_description1")}</p>
              <p>{t("about_description2")}</p>
            </div>

            {/* Info Grid */}
            <div className="about-info-grid">
              {info.map((item, index) => (
                <div key={index} className="info-item">
                  <div className="info-icon">{item.icon}</div>
                  <div className="info-content">
                    <div className="info-label">{item.label}</div>
                    <div className="info-value">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="about-cta">
                <a
                  href="https://www.linkedin.com/in/fersy-mart%C3%ADnez-b49b11262/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-primary"
                >
                  {" "}
                  {t("about_cta_contact")}
                </a>
              <button className="cta-secondary" onClick={downloadCV}>
                {t("about_cta_download")}
              </button>
            </div>
          </div>
        </div>

        {/* Highlights Section */}
        <div className="about-highlights">
          <h3 className="highlights-title">{t("about_highlights_title")}</h3>
          <div className="highlights-grid">
            {highlights.map((highlight, index) => (
              <div key={index} className="highlight-card">
                <div className="highlight-icon-wrapper">{highlight.icon}</div>
                <h4 className="highlight-title">{highlight.title}</h4>
                <p className="highlight-description">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <TechCarousel />
    </section>
  );
};

export default AboutSection;
