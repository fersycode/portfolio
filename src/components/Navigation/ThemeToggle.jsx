// src/components/Navigation/ThemeToggle.jsx
import { useTheme } from '../../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button 
      className="nav-theme-toggle" 
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <i className="fas fa-sun sun-icon"></i>
      <i className="fas fa-moon moon-icon"></i>
    </button>
  );
};

export default ThemeToggle;