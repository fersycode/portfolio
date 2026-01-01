import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/Navigation/Navbar";
import SideMenuTrigger from "./components/SideMenu/SideMenuTrigger";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import ProjectsPage from "./pages/ProjectsPage";
import BookingPage from "./pages/BookingPage";
import "./styles/1-base.css";
import "./styles/2-animations.css";
import "./styles/3-navigation.css";
import "./styles/4-components.css";
import "./styles/5-sections.css";
import "./styles/6-sections2.css";
import "./styles/7-contact_footer.css";
import "./styles/8-themes.css";
import "./styles/9-language-switcher.css";
import "./styles/project.css";
import "./styles/projects-page.css";
import "./styles/booking-page.css";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter basename="/portfolio">
          <Navbar />
          <SideMenuTrigger />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/project/:slug" element={<ProjectDetail />} />
            <Route path="/booking" element={<BookingPage />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
