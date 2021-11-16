import React, { useEffect, useState, useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Routes from "routes/index";
import "assets/styles/scss/bootstrap.scss";
import "assets/styles/css/app.css";
import "assets/styles/css/basic.min.css";
import "assets/styles/css/dropzone.min.css";
import "assets/styles/css/rize.css";
const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route component={Routes} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
