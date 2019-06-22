import React from "react";

import "./ProjectCard.scss";

class ProjectCard extends React.Component {
  render() {
    return (
      <div className="ProjectCard">
        <div>Title</div>
        <div>Duration</div>
        <div>Technology</div>
        <div>Summary</div>
      </div>
    );
  }
}

export default ProjectCard;
