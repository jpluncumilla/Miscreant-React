import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Options from "./Options";
import Work from "./Work";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={Options} />
        <Route exact path="/Work" component={Work} />
      </Switch>
    </div>
  );
}

export default App;
