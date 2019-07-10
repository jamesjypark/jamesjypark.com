import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/logo.png";

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <Link to="/" activeClassName="test" activeClassName="link">
          <img src={logo} />
        </Link>
        <div className="links">
          <Link to="/code" className="link" activeClassName="active">
            code
          </Link>
          <Link to="/design" className="link" activeClassName="active">
            design
          </Link>
          <Link exact to="/" className="link" activeClassName="active">
            about me
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
