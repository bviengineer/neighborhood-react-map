import React from "react";
import { Search } from "./Search.js";
import "../App.css";

//Rendering in Content.js
export class SideMenu extends React.Component {  
  
  render(){
    console.log("console log inside SideMenu component render ", this.props.locations); //verifying props is being passed to SideMenu from content
    return (
      <div className="side-bar">
        <h4>Venu Results</h4>
        <Search userInput="search venues"/>
        <div>
          <ol>
          {this.props.locations.map(destination => (
            <li>
              <strong>{destination.venue.name}</strong>
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