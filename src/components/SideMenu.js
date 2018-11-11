import React from "react";
//import { Search } from "./Search.js";
import "../App.css";


//Rendering in Content.js
export class SideMenu extends React.Component {   
  render(){
    //console.log("SideMenu component render after setting state ", this.state.userQuery); //verifying props is being passed to SideMenu from content
    return (
      <div className="side-bar">
        <h4>Libraries</h4>        
        <div>
          <ol role="list" tabIndex="0">
          {this.props.locations.map(destination => (
            <li role="link" tabIndex="0" key={destination.venue.name}>
              <strong>{destination.venue.name}</strong>
              <br/>
              {destination.venue.location.formattedAddress[0]}<br/>
              {destination.venue.location.formattedAddress[1]}<br/>
              <hr/>
            </li>
          ))}
          </ol>
        </div>
      </div>
    );
  }
}