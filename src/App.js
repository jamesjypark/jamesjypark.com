import React from "react";
import Main from "./Components/Main/Main";
import Header from "./Components/Header/Header";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div>
        <Main />
      </div>
    </div>
  );
}

export default App;
