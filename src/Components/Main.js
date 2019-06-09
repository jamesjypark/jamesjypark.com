import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Code from "./Code";
import Design from "./Design";

class Main extends React.Component {
  state = {};
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/code" component={Code} />
          <Route path="/design" component={Design} />
        </Switch>
      </main>
    );
  }
}

export default Main;
