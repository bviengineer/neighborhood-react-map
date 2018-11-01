import React from "react";
import { Search } from "./Search.js"


//Rendering in Content.js
export class SideMenu extends React.Component {
  render(){
    return (
      <div className="side-bar">
        <Search userInput="User search term here"/>
      </div>
    );
  }
}