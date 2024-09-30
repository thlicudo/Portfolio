import React, { useEffect } from "react";

const Tv = ({ isClicked, projects, index, activeState }) => {
  const preloadImages = (images) => {
    images.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  };

  useEffect(() => {
    if (projects.length > 0) {
      const projectImages = projects.map((project) => project.image);
      preloadImages(projectImages);
    }
  }, [projects]);

  if (projects.length === 0 || !projects[index]) {
    return null;
  }

  return (
    <div className={`tv_content ${isClicked ? activeState : ""}`}>
      <div className="img_container">
        <img src={projects[index].image} alt={projects[index].name} />
      </div>
      <div className="overlay">
        <h1>{projects[index].name}</h1>
        <p>{projects[index].description}</p>
        <div className="project_icons">
          {projects[index].icons.map((icon) => (
            <img loading="lazy" key={icon.id} src={icon.src} alt={icon.name} />
          ))}
        </div>
        <a href={projects[index].link} target="_blank" rel="noreferrer">
          Visit Site
        </a>
      </div>
    </div>
  );
};

export default Tv;
