import React from "react";

import "./Home.scss";

import Background from "../../assets/background.png";
import Portrait from "../../assets/portrait.png";
import Blocker from "../../assets/blocker.png";
import simpleParallax from "simple-parallax-js";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.portraitRef = React.createRef();
  }
  createParallax = () => {
    let image = this.portraitRef.current;
    new simpleParallax(image, {
      overflow: true,
      orientation: "left"
    });
  };
  render() {
    return (
      <div className="Home">
        <div className="basetext1 medium">
          <div className="title">about me</div>
          <div className="Portrait">
            <img src={Blocker} />
            <img
              ref={this.portraitRef}
              src={Portrait}
              onLoad={this.createParallax}
            />
            <img src={Background} />
          </div>
          <div className="subheader1">James Juyoung Park</div>
          <div className="description">
            Software Engineering Student at the{" "}
            <strong>University of Victoria</strong>
          </div>
          <div className="description">
            Co-op Software Developer at <strong>PDFTron Systems</strong>
          </div>
          <div className="links">
            <div>
              <a
                href="https://drive.google.com/file/d/1z5UOpLnqH-6NkjqhB9vwLI3ty1EcMGl2/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </div>
            <div>
              <a
                href="https://github.com/jamesjypark"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </div>
            <div>
              <a
                href="https://dribbble.com/jamespark"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dribbble
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/jamesjypark"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;