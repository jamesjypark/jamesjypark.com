import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <div className="basetext1 medium">
        <Link to="/">HOME</Link>
        <Link to="/code">code</Link>
        <Link to="/design">design</Link>
        <Link to="/">about me</Link>
      </div>
    );
  }
}

export default Header;
