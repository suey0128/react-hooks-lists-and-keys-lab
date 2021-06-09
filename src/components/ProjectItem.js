import React from "react";


function ProjectItem({ name, about, technologies }) {

  const techIterator = technologies.map((eachTech) => {
    return <span key={eachTech}>{eachTech}</span>
  })

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {techIterator}
      </div>
    </div>
  );
}

export default ProjectItem;
