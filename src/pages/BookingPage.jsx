import { InlineWidget } from "react-calendly";
import { useLanguage } from "../context/LanguageContext";

const BookingPage = () => {
  const { t, language } = useLanguage();

  return (
    <div className="booking-page">
      {/* Hero Section */}
      <section className="booking-hero">
        <div className="container">
          <h1 className="booking-title">
            <i className="fas fa-calendar-check"></i>
            {t("booking_title")}
          </h1>
          <p className="booking-subtitle">{t("booking_subtitle")}</p>
        </div>
      </section>

      {/* Process Section */}
      <section className="booking-process">
        <div className="container">
          <h2>{t("booking_how_it_works")}</h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-icon">
                <i className="fas fa-calendar-alt"></i>
              </div>
              <h3>{t("booking_step1_title")}</h3>
              <p>{t("booking_step1_desc")}</p>
            </div>
            <div className="step">
              <div className="step-icon">
                <i className="fas fa-comment-dots"></i>
              </div>
              <h3>{t("booking_step2_title")}</h3>
              <p>{t("booking_step2_desc")}</p>
            </div>
            <div className="step">
              <div className="step-icon">
                <i className="fas fa-check-circle"></i>
              </div>
              <h3>{t("booking_step3_title")}</h3>
              <p>{t("booking_step3_desc")}</p>
            </div>
            <div className="step">
              <div className="step-icon">
                <i className="fas fa-video"></i>
              </div>
              <h3>{t("booking_step4_title")}</h3>
              <p>{t("booking_step4_desc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="booking-services">
        <div className="container">
          <h2>{t("booking_services_title")}</h2>
          <div className="services-grid">
            <div className="service-card">
              <i className="fas fa-comments"></i>
              <h3>{t("booking_service1_title")}</h3>
              <p>{t("booking_service1_desc")}</p>
              <span className="duration">30 min</span>
            </div>
            <div className="service-card">
              <i className="fas fa-laptop-code"></i>
              <h3>{t("booking_service2_title")}</h3>
              <p>{t("booking_service2_desc")}</p>
              <span className="duration">60 min</span>
            </div>
            <div className="service-card">
              <i className="fas fa-handshake"></i>
              <h3>{t("booking_service3_title")}</h3>
              <p>{t("booking_service3_desc")}</p>
              <span className="duration">45 min</span>
            </div>
          </div>
        </div>
      </section>

      {/* Calendly Widget */}
      <section className="booking-calendar">
        <div className="container">
          <h2>{t("booking_calendar_title")}</h2>
          <p className="calendar-note">{t("booking_calendar_note")}</p>
          
          <div className="calendly-container">
            <InlineWidget
              url="https://calendly.com/fersy119988"
              styles={{
                height: "700px",
                minWidth: "320px",
              }}
              pageSettings={{
                backgroundColor: "ffffff",
                hideEventTypeDetails: false,
                hideLandingPageDetails: false,
                primaryColor: "6366f1",
                textColor: "1f2937",
              }}
            />
          </div>

          <div className="booking-note">
            <i className="fas fa-info-circle"></i>
            <p>{t("booking_disclaimer")}</p>
          </div>
        </div>
      </section>

      {/* Alternative Contact */}
      <section className="booking-alternative">
        <div className="container">
          <h3>{t("booking_prefer_email")}</h3>
          <p>{t("booking_email_text")}</p>
          <a href="https://wa.me/50498240913" className="cta-button">
            <i className="fas fa-envelope"></i>
            {t("booking_contact_button")}
          </a>
        </div>
      </section>
    </div>
  );
};

export default BookingPage;