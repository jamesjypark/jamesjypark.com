import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import Meditap from "../Projects/Meditap/Meditap";
import Askey from "../Projects/Askey/Askey";
import RealTime from "../Projects/RealTime/RealTime";

function CodeList() {
  return (
    <ul>
      <h1>Code</h1>

      <li>
        <Link to="/code/meditap">Meditap</Link>
      </li>
      <li>
        <Link to="/code/askey">ASKEY</Link>
      </li>
      <li>
        <Link to="/code/real-time-collaboration">Real-time Collaboration</Link>
      </li>
    </ul>
  );
}

class Code extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/code" component={CodeList} />
          <Route path="/code/meditap" component={Meditap} />
          <Route path="/code/askey" component={Askey} />
          <Route path="/code/real-time-collaboration" component={RealTime} />
        </Switch>
      </div>
    );
  }
}

export default Code;
