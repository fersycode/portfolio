import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { useLanguage } from "../../context/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#hero", icon: "fa-home", key: "nav_home" },
    { href: "#about", icon: "fa-user", key: "nav_about" },
    { href: "#experience", icon: "fa-briefcase", key: "nav_experience" },
    { href: "#skills", icon: "fa-code", key: "nav_skills" },
    { href: "#portfolio", icon: "fa-folder-open", key: "nav_portfolio" },
    { href: "#contact", icon: "fa-envelope", key: "nav_contact" },
  ];

  return (
    <nav id="navbar" className={scrolled ? "scrolled" : ""}>
      <div className="nav-container">
        <Link to="/portfolio" className="logo">
          F.M.
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
              <a href={item.href} onClick={() => setMobileOpen(false)}>
                <i className={`fas ${item.icon}`}></i>
                <span>{t(item.key)}</span>
              </a>
            </li>
          ))}
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
