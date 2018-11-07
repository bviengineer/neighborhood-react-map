import React from "react";
import { Search } from "./Search.js";
import "../App.css";


//Rendering in Content.js
export class SideMenu extends React.Component { 
  constructor(props){ 
    super(props);
    this.state = {
      userQuery: this.props.locations
    }
  }


  //Gets keywords typed by user
  handleSearch = (e) => {
    console.log(e)
  }

  componentDidMount(){
    this.filterSearch();
  }

  //Filter user search results
  filterSearch = (query) => {
    this.setState({ userQuery: query });
  }
  
  render(){
    console.log("SideMenu component render ", this.props.locations); //verifying props is being passed to SideMenu from content
    console.log("STATE inside SideMenu", this.props.userQuery);
    return (
      <div className="side-bar">
        <h4>Venu Results</h4>
        <Search userInput="search venues" onKeyPress={this.handleSearch}/>  {/* Search Component */}
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