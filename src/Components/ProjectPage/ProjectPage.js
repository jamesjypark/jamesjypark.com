import React from "react";

import "./ProjectPage.scss";

class ProjectPage extends React.Component {
  renderPage = page => {
    return page.map(item => {
      switch (item.type) {
        case "title":
          return (
            <div className="title-container">
              <div className="subheader1">{item.text}</div>
            </div>
          );
        case "duration":
          return (
            <div className="margin-container">
              <div className="basetext2 bold">{item.text}</div>
            </div>
          );
        case "technology":
          return (
            <div className="margin-container">
              <div className="basetext2 medium">{item.text}</div>
            </div>
          );
        case "list":
          return (
            <div className="paragraph-container left">
              {item.list.map(item => (
                <div className="basetext2 medium">{item}</div>
              ))}
            </div>
          );
        case "subheader":
          return (
            <div className="margin-container left">
              <div className="subheader2">{item.text}</div>
            </div>
          );
        case "paragraph":
          return (
            <div className="paragraph-container">
              <div className="basetext2 medium">{item.text}</div>
            </div>
          );
        case "image":
          return <img src={item.name} />;
      }
    });
  };
  render() {
    const { page } = this.props;
    return <div className="ProjectPage">{this.renderPage(page)}</div>;
  }
}

export default ProjectPage;
