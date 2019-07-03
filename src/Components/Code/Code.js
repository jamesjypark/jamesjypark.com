import React from "react";
import { NavLink, Switch, Route } from "react-router-dom";
import Meditap from "../Projects/Meditap/Meditap";
import Askey from "../Projects/Askey/Askey";
import RealTime from "../Projects/RealTime/RealTime";
import ProjectCard from "../ProjectCard/ProjectCard";
import ProjectPage from "../ProjectPage/ProjectPage";

import MeditapJSON from "../Projects/Meditap/MeditapPage.js";
import AskeyJSON from "../Projects/Askey/Askey.json";
import RealTimeJSON from "../Projects/RealTime/RealTime.json";

import MeditapLogo from "../../assets/meditap.svg";
import AskeyLogo from "../../assets/askey.svg";
import RealTimeLogo from "../../assets/realtime.svg";

import "./Code.scss";

function CodeList() {
  return (
    <div className="CodeList">
      <div className="title">code</div>
      <NavLink className="link" to="/code/meditap">
        <ProjectCard image={MeditapLogo} {...MeditapJSON} />
      </NavLink>
      <NavLink className="link" to="/code/askey">
        <ProjectCard image={AskeyLogo} {...AskeyJSON} />
      </NavLink>
      <NavLink className="link" to="/code/real-time-collaboration">
        <ProjectCard image={RealTimeLogo} {...RealTimeJSON} />
      </NavLink>
    </div>
  );
}

class Code extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/code" component={CodeList} />
          <Route
            path="/code/meditap"
            render={() => <ProjectPage {...MeditapJSON} />}
          />
          <Route
            path="/code/askey"
            render={() => <ProjectPage {...AskeyJSON} />}
          />
          <Route
            path="/code/real-time-collaboration"
            render={() => <ProjectPage {...RealTimeJSON} />}
          />
        </Switch>
      </div>
    );
  }
}

export default Code;
