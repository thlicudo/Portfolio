import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import ProjectsPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";
import { ParallaxProvider } from "react-scroll-parallax";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <ParallaxProvider>
        <main>
          <section className="landing_section">
            <LandingPage />
          </section>
          <section className="about_section">
            <AboutPage />
          </section>
          <section className="projects_section">
            <ProjectsPage />
          </section>
        </main>
      </ParallaxProvider>
    </>
  );
}

export default App;
