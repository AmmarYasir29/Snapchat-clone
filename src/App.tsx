import React from "react";
import WebcamCapture from "./components/WebcamCapture";
import "./styles/app.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Preview from "./components/Preview";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <WebcamCapture />
          </Route>
          <Route exact path="/preview">
            <Preview />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
