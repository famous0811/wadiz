import React from "react";
import { Switch, Route } from "react-router-dom";
import home from "./home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function index() {
  return (
    <Switch>
      <Route path="/" component={home} />
    </Switch>
  );
}

export default index;
