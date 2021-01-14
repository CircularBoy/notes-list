import React from "react";
import Sidebar from "./sidebar/Sidebar";
import Content from "./content/Content";
import {BrowserRouter as Router} from "react-router-dom";

const Main = () => {
  return (
    <Router>
      <div className="main">
        <Sidebar/>
        <Content/>
      </div>
    </Router>
  )
}

export default Main
