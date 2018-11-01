//imports
import React from "react";
// import { Locations } from "./Locations.js";
import { Input } from "./Input.js"

//Stateless Functional Component is responsible for rendering the container that will host the list of venues
const SideMenu = () => {
    return(
      <div className="side-bar">
        <Input userInput="User search term here"/>
        {/* <Locations title="Rendering Locations Component from inside SideMenu Component"/> */}
      </div>
    )
  }

export default SideMenu;