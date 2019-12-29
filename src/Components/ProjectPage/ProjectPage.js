import React from "react";

import "./ProjectPage.scss";

import meditap1 from "../../assets/meditap/meditap1.png";

class ProjectPage extends React.Component {
  constructor() {
    super();
    this.meditap1 = React.createRef();
    this.state = {
      topDistance: 200
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      this.setState({
        topDistance: 200 + window.pageYOffset
      });
      console.log("top distance is ", 200 - window.pageYOffset);
    });
  }

  updateHeaderContentPosition() {}

  // render custom header content
  getHeaderContent = text => {
    switch (text) {
      case "meditap":
        return (
          <div>
            <img
              ref={this.meditap1}
              style={{ top: this.state.topDistance }}
              className="meditap1 fade-in-2s"
              src={meditap1}
            />
          </div>
        );
      default:
        return <div>default</div>;
    }
  };

  // render page contents
  renderPage = page => {
    return page.map(item => {
      switch (item.type) {
        case "header-image":
          return (
            <div className="header-image">
              {this.getHeaderContent(item.text)}
            </div>
          );
        case "title":
          return (
            <div className="title-container left">
              <div className="subheader1 fade-in-1s">{item.text}</div>
            </div>
          );
        case "duration":
          return (
            <div className="margin-containe left">
              <div className="basetext2 bold">{item.text}</div>
            </div>
          );
        case "technology":
          return (
            <div className="margin-container left">
              <div className="basetext2 medium technology">{item.text}</div>
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
        case "subheader2":
          return (
            <div className="margin-container left">
              <div className="subheader3">{item.text}</div>
            </div>
          );
        case "paragraph":
          return (
            <div className="paragraph-container">
              <div className="basetext2 medium">{item.text}</div>
            </div>
          );
        case "paragraph-link":
          return <div className="paragraph-container">{item.text}</div>;
        case "image":
          return <img src={item.address} />;
        case "video":
          return (
            <iframe
              className="video"
              src={item.url}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="video"
            />
          );
      }
    });
  };
  render() {
    const { page } = this.props;
    return <div className="ProjectPage">{this.renderPage(page)}</div>;
  }
}

export default ProjectPage;
