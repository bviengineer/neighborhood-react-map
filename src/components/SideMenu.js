import React from "react";
import { Search } from "./Search.js";
import "../App.css";


//Rendering in Content.js
export class SideMenu extends React.Component { 
  constructor(props){ 
    super(props);
    this.state = {
      userQuery: ""
    }
  }


  //Gets keywords typed by user
  handleSearch = (e) => {
    console.log(e)
  }

  //Filter user search results
  filterSearch = () => {
    this.setState({ userQuery: this.handleSearch });
    console.log("printing from filter search");
  }
  
  render(){
    console.log("SideMenu component render ", this.props.locations); //verifying props is being passed to SideMenu from content
    return (
      <div className="side-bar">
        <h4>Venu Results</h4>

        {/* Search Component */}
        <Search 
          userInput="search venues" 
          onChange={this.handleSearch} 
          onKeyPress={this.filterSearch}
        />  
        
        <div>
          <ol>
          {this.props.locations.map(destination => (
            <li key={destination.venue.categories.id}>
              <strong>{destination.venue.name}</strong>
              <br/>
              {destination.venue.location.formattedAddress}
              <hr/>
            </li>
          ))}
          </ol>
        </div>
      </div>
    );
  }
}