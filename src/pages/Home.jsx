import Hero from "../components/Hero/Hero";
import AboutSection from "../components/About/AboutSection";
import Experience from "../components/Experience/Timeline";
import Skills from "../components/Skills/SkillsGrid";
import Value from "../components/Value/ValueProposition";
import Portfolio from "../components/Portfolio/PortfolioGrid";
import ContactSection from "../components/Contact/ContactSection";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <Experience />
      <Skills />
      <Value />
      <Portfolio />
      <ContactSection />
    </>
  );
};

export default Home;
