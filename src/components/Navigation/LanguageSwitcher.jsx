import { useLanguage } from '../../context/LanguageContext';

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div 
      className={`language-switcher ${language === 'en' ? 'active' : ''}`}
      onClick={toggleLanguage}
      data-tooltip="Change Language"
    >
      <div className="lang-slider"></div>
      <span className={`lang-option ${language === 'es' ? 'active' : ''}`}>
        ES
      </span>
      <span className={`lang-option ${language === 'en' ? 'active' : ''}`}>
        EN
      </span>
    </div>
  );
};

export default LanguageSwitcher;