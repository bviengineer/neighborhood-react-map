import React from "react";
import { Map } from "./components/Map.js"; //to hold map
import { SideMenu } from "./components/SideMenu.js"; //display list of returned locations

export class Content extends React.Component {
  render(){
    return (
      <div>
        <h1>{this.props.title}</h1> 
        <Map title="Map component - rendering from content component" />
        <SideMenu title="SideMenu component - rendering from content component" />
      </div>
    );
  }
}