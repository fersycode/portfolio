import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";
import logo from "/fm-icon.png";

const Navbar = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determinar si estamos en la página home para usar anclas
  const isHomePage =
    location.pathname === "/" ||
    location.pathname === "/portfolio" ||
    location.pathname === "/portfolio/";

  const navItems = [
    { href: "#hero", to: "/", icon: "fa-home", key: "nav_home" },
    { href: "#about", to: "/#about", icon: "fa-user", key: "nav_about" },
    {
      href: "#experience",
      to: "/#experience",
      icon: "fa-briefcase",
      key: "nav_experience",
    },
    { href: "#skills", to: "/#skills", icon: "fa-code", key: "nav_skills" },
    {
      href: "#portfolio",
      to: "/#portfolio",
      icon: "fa-folder-open",
      key: "nav_portfolio",
    },
    {
      href: "#contact",
      to: "/#contact",
      icon: "fa-envelope",
      key: "nav_contact",
    },
  ];

  return (
    <nav id="navbar" className={scrolled ? "scrolled" : ""}>
      <div className="nav-container">
        <Link to="/" className="logo">
          <img src={logo} alt="fersy_logo" />
        </Link>

        <button
          className={`mobile-menu-btn ${mobileOpen ? "active" : ""}`}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${mobileOpen ? "active" : ""}`}>
          {navItems.map((item) => (
            <li key={item.key}>
              {isHomePage ? (
                <a href={item.href} onClick={() => setMobileOpen(false)}>
                  <i className={`fas ${item.icon}`}></i>
                  <span>{t(item.key)}</span>
                </a>
              ) : (
                <Link to={item.to} onClick={() => setMobileOpen(false)}>
                  <i className={`fas ${item.icon}`}></i>
                  <span>{t(item.key)}</span>
                </Link>
              )}
            </li>
          ))}

          {/* Botón especial de Booking */}
          <li className="booking-nav-item">
            <Link
              to="/booking"
              className="booking-btn"
              onClick={() => setMobileOpen(false)}
            >
              <i className="fas fa-calendar-check"></i>
              <span>{t("nav_booking")}</span>
            </Link>
          </li>
        </ul>

        <div className="nav-actions">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
