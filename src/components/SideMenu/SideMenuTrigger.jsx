// src/components/SideMenu/SideMenuTrigger.jsx
import { useState, useEffect } from "react";
import { useLanguage } from "../../context/LanguageContext";

const SideMenuTrigger = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  // Cerrar con ESC
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  // Prevenir scroll cuando está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const downloadCV = () => {
    window.open("cv.pdf", "_blank");
  };

  return (
    <>
      {/* Botón flotante */}
      <button
        className={`side-menu-trigger ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(true)}
        title={t("side_menu_title")}
      >
        <i className="fas fa-address-card"></i>
      </button>

      {/* Overlay */}
      <div
        className={`side-menu-overlay ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Side Menu */}
      <div className={`side-menu ${isOpen ? "active" : ""}`}>
        <button className="side-menu-close" onClick={() => setIsOpen(false)}>
          <i className="fas fa-times"></i>
        </button>

        <div className="side-menu-content">
          <h3>{t("side_menu_title")}</h3>

          {/* Redes Sociales */}
          <div className="side-menu-section">
            <h4>
              <i className="fas fa-share-alt"></i> {t("side_menu_social")}
            </h4>
            <div className="side-menu-links">
              <a
                href="https://www.linkedin.com/in/tu-perfil"
                target="_blank"
                rel="noopener noreferrer"
                className="side-menu-link"
              >
                <i className="fab fa-linkedin-in"></i>
                <div className="side-menu-link-text">
                  <span className="side-menu-link-label">LinkedIn</span>
                  <span className="side-menu-link-value">
                    {t("side_menu_linkedin")}
                  </span>
                </div>
              </a>
              <a
                href="https://github.com/tu-usuario"
                target="_blank"
                rel="noopener noreferrer"
                className="side-menu-link"
              >
                <i className="fab fa-github"></i>
                <div className="side-menu-link-text">
                  <span className="side-menu-link-label">GitHub</span>
                  <span className="side-menu-link-value">
                    {t("side_menu_github")}
                  </span>
                </div>
              </a>
              <a
                href="https://www.behance.net/tu-perfil"
                target="_blank"
                rel="noopener noreferrer"
                className="side-menu-link"
              >
                <i className="fab fa-behance"></i>
                <div className="side-menu-link-text">
                  <span className="side-menu-link-label">Behance</span>
                  <span className="side-menu-link-value">
                    {t("side_menu_behance")}
                  </span>
                </div>
              </a>
              <a
                href="https://www.instagram.com/tu-usuario"
                target="_blank"
                rel="noopener noreferrer"
                className="side-menu-link"
              >
                <i className="fab fa-instagram"></i>
                <div className="side-menu-link-text">
                  <span className="side-menu-link-label">Instagram</span>
                  <span className="side-menu-link-value">
                    {t("side_menu_instagram")}
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Contacto Directo */}
          <div className="side-menu-section">
            <h4>
              <i className="fas fa-phone-alt"></i> {t("side_menu_contact")}
            </h4>
            <div className="side-menu-links">
              <a href="mailto:fersy119988@gmail.com" className="side-menu-link">
                <i className="fas fa-envelope"></i>
                <div className="side-menu-link-text">
                  <span className="side-menu-link-label">Email</span>
                  <span className="side-menu-link-value">
                    fersy119988@gmail.com
                  </span>
                </div>
              </a>
              <a
                href="https://wa.me/50498240913"
                target="_blank"
                rel="noopener noreferrer"
                className="side-menu-link"
              >
                <i className="fab fa-whatsapp"></i>
                <div className="side-menu-link-text">
                  <span className="side-menu-link-label">WhatsApp</span>
                  <span className="side-menu-link-value">(+504) 9824-0913</span>
                </div>
              </a>
              <a href="tel:+50498240913" className="side-menu-link">
                <i className="fas fa-phone"></i>
                <div className="side-menu-link-text">
                  <span className="side-menu-link-label">
                    {t("contact_phone")}
                  </span>
                  <span className="side-menu-link-value">(+504) 9824-0913</span>
                </div>
              </a>
            </div>
          </div>

          {/* Descargar CV */}
          <div className="side-menu-section cv-download-section">
            <h4>
              <i className="fas fa-file-pdf"></i> {t("side_menu_cv")}
            </h4>
            <p>{t("side_menu_cv_desc")}</p>
            <button className="btn-download" onClick={downloadCV}>
              <i className="fas fa-download"></i>
              <span>{t("contact_download_btn")}</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideMenuTrigger;
