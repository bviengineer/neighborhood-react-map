import React from "react";
// import { MyMap, venuList } from "./Map.js";

//Stateless Functional Component is responsible for rendering the list of venues
export const Locations = (props) => {
    return <div className="venu-list">
      {props.title}
      <ul>
        <li>Test</li>
      </ul>
    </div>
  }