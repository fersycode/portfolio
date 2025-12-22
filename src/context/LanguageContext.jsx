import { createContext, useContext, useState } from 'react';
import translations from '../data/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const browserLang = navigator.language || navigator.userLanguage;
    return browserLang.startsWith('es') ? 'es' : 'en';
  });

  const t = (key) => translations[language][key] || key;

  const toggleLanguage = () => setLanguage(prev => prev === 'es' ? 'en' : 'es');

  return (
    <LanguageContext.Provider value={{ language, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);