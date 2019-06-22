import React from "react";
import { NavLink, Switch, Route } from "react-router-dom";
import Meditap from "../Projects/Meditap/Meditap";
import MeditapJSON from "../Projects/Meditap/Meditap.json";
import Askey from "../Projects/Askey/Askey";
import RealTime from "../Projects/RealTime/RealTime";
import ProjectCard from "../ProjectCard/ProjectCard";

function CodeList() {
  return (
    <div>
      <div className="title">code</div>

      <NavLink className="link" to="/code/meditap">
        <ProjectCard {...MeditapJSON} />
      </NavLink>

      {/* <NavLink to="/code/askey">
        <ProjectCard />
      </NavLink>

      <NavLink to="/code/real-time-collaboration">
        <ProjectCard />
      </NavLink> */}
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
