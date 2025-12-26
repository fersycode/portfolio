import { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { Link } from "react-router-dom";

const Hero = () => {
  const { t } = useLanguage();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20 - 10,
        y: (e.clientY / window.innerHeight) * 20 - 10,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToSection = () => {
    const nextSection = document.querySelector("#next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="hero-section">
      {/* Animated gradient orbs */}
      <div className="hero-orbs">
        <div
          className="hero-orb hero-orb-1"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          }}
        />
        <div
          className="hero-orb hero-orb-2"
          style={{
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
          }}
        />
        <div className="hero-orb hero-orb-3" />
      </div>

      {/* Grid pattern overlay */}
      <div className="hero-grid" />

      {/* Content */}
      <div className="hero-content-wrapper">
        <div className="hero-content">
          {/* Badge */}
          <div className="hero-badge">
            <div className="hero-badge-dot" />
            <span className="hero-badge-text">{t("hero_available")}</span>
          </div>

          {/* Title with gradient */}
          <h1 className="hero-title">
            <span className="hero-title-gradient">{t("hero_title")}</span>
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle">{t("hero_subtitle")}</p>

          {/* CTA Button */}
          <div className="hero-cta-wrapper">
            <button className="hero-cta-button">
              <Link to="/portfolio/projects" className="hero-cta-text">
                {t("portfolio_cta_button")}
              </Link>
              <div className="hero-cta-overlay" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToSection}
        className="hero-scroll-indicator"
        aria-label="Scroll to next section"
      >
        <span className="hero-scroll-text">Scroll</span>
        <div className="hero-scroll-mouse">
          <div className="hero-scroll-wheel" />
        </div>
        <ArrowDown className="hero-scroll-arrow" />
      </button>
    </section>
  );
};

export default Hero;
