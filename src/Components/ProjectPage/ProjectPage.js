import React from "react";

import "./ProjectPage.scss";

class ProjectPage extends React.Component {
  constructor() {
    super();
    this.meditap1 = React.createRef();
    this.state = {
      topDistance: 150
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      this.setState({
        topDistance: 150 + window.pageYOffset
      });
    });
  }

  // render custom header content
  getHeaderContent = text => {
    switch (text) {
      case "meditap":
        return (
          <div className="header-image meditap hide-in-mobile">
            <img
              ref={this.meditap1}
              style={{ top: this.state.topDistance }}
              className="meditap1 hidden fade-in delay forwards"
              src={require("../../assets/meditap/meditap1.png")}
            />
            <img
              className="meditap-background"
              src={require("../../assets/meditap/meditap-background.png")}
            />
          </div>
        );
      case "askey":
        return (
          <div className="header-image askey hide-in-mobile">
            <img
              ref={this.meditap1}
              style={{ top: this.state.topDistance }}
              className="askey1 hidden fade-in delay forwards"
              src={require("../../assets/askey/askey1.png")}
            />
            <img
              className="askey-background"
              src={require("../../assets/askey/askey-background.png")}
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
            // <div className="header-image hide-in-mobile">
            <div>{this.getHeaderContent(item.text)}</div>
            // </div>
          );
        case "title":
          return (
            <div className="title-container left">
              <div className="subheader1 fade-in">{item.text}</div>
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
          return (
            <img
              className={
                item.hidden
                  ? item.hidden.reduce(
                      (a, b) => `hide-in-${a}` + ` hide-in-${b}`
                    )
                  : ""
              }
              src={item.address}
            />
          );
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
