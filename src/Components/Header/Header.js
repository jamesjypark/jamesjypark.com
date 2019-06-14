import React from "react";
import { Link } from "react-router-dom";

import "./Header.scss";

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <Link to="/">HOME</Link>
        <div>
          <Link to="/code">code</Link>
        </div>
        <Link to="/design">design</Link>
        <Link to="/">about me</Link>
      </div>
    );
  }
}

export default Header;
