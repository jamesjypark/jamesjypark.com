import React from "react";

import "./ProjectCard.scss";

class ProjectCard extends React.Component {
  render() {
    const { title, duration, technology, summary } = this.props;
    return (
      <div className="ProjectCard">
        <div className="text">
          <div className="subheader2">{title}</div>
          <div className="basetext2 book">{duration}</div>
          <div className="basetext2 book">{technology}</div>
          {summary.forEach(summary => {
            return <div className="basetext2 book">{summary}</div>;
          })}
          <div className="basetext2 book">{summary}</div>
        </div>
      </div>
    );
  }
}

export default ProjectCard;
