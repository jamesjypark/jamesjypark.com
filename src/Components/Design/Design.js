import React from "react";
import { NavLink, Switch, Route } from "react-router-dom";

import ProjectCard from "../ProjectCard/ProjectCard";
import ProjectPage from "../ProjectPage/ProjectPage";

import Meditap from "../Projects/Meditap";
import DailyUi from "../Projects/DailyUi";
import HangeulPrinting from "../Projects/HangeulPrinting/HangeulPrinting";
import AutonomousRov from "../Projects/AutonomousRov/AutonomousRov";

import DailyUiLogo from "../../assets/daily-ui.png";

function DesignList() {
  return (
    <div>
      <div className="title">design</div>
      <NavLink className="link" to="/design/daily-ui">
        <ProjectCard image={DailyUiLogo} {...DailyUi} />
      </NavLink>
      <NavLink className="link" to="/design/hangeul-printing">
        Hangeul Printing
      </NavLink>
      <NavLink className="link" to="/design/autonomous-rov">
        Autonomous Underwater Vehicle
      </NavLink>
    </div>
  );
}

class Design extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/design" component={DesignList} />
          <Route
            path="/design/daily-ui"
            render={() => <ProjectPage {...DailyUi} />}
          />
          <Route path="/design/hangeul-printing" component={HangeulPrinting} />
          <Route path="/design/autonomous-rov" component={AutonomousRov} />
        </Switch>
      </div>
    );
  }
}

export default Design;
