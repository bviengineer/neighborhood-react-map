import React from "react";
// import { venuListing } from "./Map.js";

//Stateless Functional Component is responsible for rendering the list of venues
export const Locations = (props) => {
  return <div className="venu-list">
    {props.title}
    console.log("from location component ", props);
    <ul>{props.venuList.map((venue, i) => {
        return( <li>{venue}</li> ) 
    })
      }
    </ul>
  </div>
}