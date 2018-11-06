import React from "react";
import { Search } from "./Search.js";
import "../App.css";

//Rendering in Content.js
export class SideMenu extends React.Component {  
  
  render(){
    console.log("console log inside SideMenu component render ", this.props.locations); //verifying props is being passed to SideMenu from content
    return (
      <div className="side-bar">
        <Search userInput="User search term here"/>
        <div>
          <ol>
          {this.props.locations.map(destination => (
            <li>
              {destination.venue.name}
              <br/>
              {destination.venue.location.formattedAddress}
              <hr/>
            </li>
          ))
          }
          </ol>
        </div>
      </div>
    );
  }
}

/*
1. render returned results of search and display them here in the side bar


*/