import React from "react";
import { Link } from "react-router-dom";

class Code extends React.Component {
  render() {
    return (
      <div>
        <h1>Code</h1>
        <ul>
          <li>
            <Link to="/code/meditap">Meditap</Link>
          </li>
          <li>
            <Link to="/code/askey">ASKEY</Link>
          </li>
          <li>
            <Link to="/code/real-time-collaboration">
              Real-time Collaboration
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Code;
