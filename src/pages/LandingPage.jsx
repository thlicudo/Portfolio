import { Parallax } from "react-scroll-parallax";
import FloatingIcons from "../components/FloatingIcons";

const LandingPage = () => {
  return (
    <div className="landing_section_container" id="home">
      <Parallax speed={-20}>
        <div className="text_container">
          <h1>
            Hi! I'm <span style={{ color: "var(--blue)" }}>Tom</span>,
          </h1>
          <h2>
            an aspiring front-end web developer <br />
            based in the Philippines.
          </h2>
        </div>

        <FloatingIcons />
      </Parallax>
    </div>
  );
};

export default LandingPage;
