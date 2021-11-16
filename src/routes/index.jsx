import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import GuestRoutes from "routes/Guest";
import LoggedRoutes from "routes/Logged";
import Login from "pages/login";
import Homepage from "pages/homepage";
const Routes = () => {
  //for dev mode
  const [token, setToken] = useState("");
  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, [token]);
  return (
    <>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/dashboard" component={Homepage} />
      </Switch>
    </>
  );
};

export default Routes;
