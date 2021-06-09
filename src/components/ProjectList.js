import React from "react";
import ProjectItem from "./ProjectItem";



function ProjectList({ projects }) {

  const projectItem = projects.map((eachProject) => {
    return <ProjectItem 
            key={eachProject.id}
            name={eachProject.name}
            about={eachProject.about}
            technologies={eachProject.technologies}/>
    })

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
      {projectItem}
      </div>
    </div>
  );
}

export default ProjectList;

