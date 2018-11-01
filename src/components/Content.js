import React from "react";
import Map from "./Map.js"; //to hold map
import SideMenu from "./SideMenu.js"; //display list of returned locations

class Content extends React.Component {
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

export default Content;