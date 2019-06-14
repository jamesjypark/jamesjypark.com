import React from "react";

class Home extends React.Component {
  render() {
    return (
      <div className="basetext1 medium">
        <div className="title">about me</div>
        <div className="subheader1">James Juyoung Park</div>
        <div>
          Software Engineering Student at the{" "}
          <strong>University of Victoria</strong>
        </div>
        <div>
          Co-op Software Developer at <strong>PDFTron Systems</strong>
        </div>
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
    );
  }
}

export default Home;
