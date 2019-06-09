import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Components/Home/Home";
import Code from "../Components/Code/Code";
import Design from "../Components/Design/Design";

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
