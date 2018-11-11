import React from "react";
//import { Search } from "./Search.js";
import "../App.css";


//Rendering in Content.js
export class SideMenu extends React.Component {   
  // handleClick = (e) => {
  //   e.target.addEventListener("click", function(){
  //     console.log("your clicked on ", this.props.locations);
  //   });
  // }
  
  render(){
    return (
      <div className="side-bar">
        <h4>Libraries</h4>        
        <div>
          <ol role="list" tabIndex="0">
          {this.props.locations.map(destination => (
            <li 
              role="link" 
              tabIndex="0" 
              key={destination.referralId}
              onClick={(e) => { e.target.addEventListener("click", function(){ console.log("you clicked on ", destination.venue.name)}) }}
              >
              <strong>{destination.venue.name}</strong>
              <br/>
              {destination.venue.location.formattedAddress[0]}<br/>
              {destination.venue.location.formattedAddress[1]}<br/>
              {destination.referralId}
              <hr/>
            </li>
          ))}
          </ol>
        </div>
      </div>
    );
  }
}