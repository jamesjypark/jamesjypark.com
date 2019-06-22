import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import Meditap from "../Projects/Meditap/Meditap";
import Askey from "../Projects/Askey/Askey";
import RealTime from "../Projects/RealTime/RealTime";
import ProjectCard from "../ProjectCard/ProjectCard";

function CodeList() {
  return (
    <div>
      <div className="title">code</div>

      <Link to="/code/meditap">
        <ProjectCard />
      </Link>

      {/* <Link to="/code/askey">
        <ProjectCard />
      </Link>

      <Link to="/code/real-time-collaboration">
        <ProjectCard />
      </Link> */}
    </div>
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
