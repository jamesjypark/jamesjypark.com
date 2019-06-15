import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import DailyUi from "../Projects/DailyUi/DailyUi";
import HangeulPrinting from "../Projects/HangeulPrinting/HangeulPrinting";
import AutonomousRov from "../Projects/AutonomousRov/AutonomousRov";
function DesignList() {
  return (
    <ul>
      <div className="title">design</div>
      <li>
        <Link to="/design/daily-ui">Daily UI</Link>
      </li>
      <li>
        <Link to="/design/hangeul-printing">Hangeul Printing</Link>
      </li>
      <li>
        <Link to="/design/autonomous-rov">Autonomous Underwater Vehicle</Link>
      </li>
    </ul>
  );
}

class Design extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/design" component={DesignList} />
          <Route path="/design/daily-ui" component={DailyUi} />
          <Route path="/design/hangeul-printing" component={HangeulPrinting} />
          <Route path="/design/autonomous-rov" component={AutonomousRov} />
        </Switch>
      </div>
    );
  }
}

export default Design;
