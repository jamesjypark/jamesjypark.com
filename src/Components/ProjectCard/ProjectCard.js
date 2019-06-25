import React from "react";

import "./ProjectCard.scss";

class ProjectCard extends React.Component {
  render() {
    const { title, duration, technology, summary, image } = this.props;
    return (
      <div className="ProjectCard">
        <div className="image-container">
          <img src={image} />
        </div>
        <div className="text">
          <div className="subheader2">{title}</div>
          <div className="basetext3 book">{duration}</div>
          <div className="basetext3 book">{technology}</div>
          <div className="summary">
            {summary.map(text => (
              <div className="basetext3 book">{text}</div>
            ))}
            {summary.forEach(summary => {
              return <div className="basetext3 book">{summary}</div>;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectCard;
