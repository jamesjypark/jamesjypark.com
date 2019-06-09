import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  state = {};
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">About me</Link>
            </li>
            <li>
              <Link to="/code">Code</Link>
            </li>
            <li>
              <Link to="/design">Design</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
