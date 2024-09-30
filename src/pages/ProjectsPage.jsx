import { useState } from "react";
import { projects } from "../dataset/projects";
import { Parallax } from "react-scroll-parallax";
import Tv from "../components/Tv";

const InfoPage = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [activeButton, setActiveButton] = useState(1);
  const [activeState, setActiveState] = useState("active");
  const [index, setIndex] = useState(0);

  const buttons = [1, 2, 3, 4, 5];

  const handleClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
    setActiveState("");
    setTimeout(() => {
      setIndex(buttonNumber - 1);
      setActiveState("active");
    }, 500);
  };

  return (
    <div className="projects_section_container" id="projects">
      <Parallax className="parallax" speed={40}>
        <div className={`tv_outer`}>
          <div className="btn_container">
            <div className="btn_selection">
              {buttons.map((button) => (
                <button
                  key={button}
                  onClick={() => handleClick(button)}
                  className={`${activeButton === button ? "active" : ""}`}
                >
                  {button}
                </button>
              ))}
            </div>
            <div>
              <button
                className={`on_btn ${isClicked ? "active" : ""}`}
                onClick={() => setIsClicked((prev) => !prev)}
              >
                <ion-icon name="power"></ion-icon>
              </button>
            </div>
          </div>
          <div className="tv_inner">
            <h1 className={`project_heading ${isClicked ? "active" : ""}`}>
              My Work
            </h1>
            <Tv
              isClicked={isClicked}
              projects={projects}
              index={index}
              activeState={activeState}
            />
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default InfoPage;
