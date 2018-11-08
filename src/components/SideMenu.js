import React from "react";
//import { Search } from "./Search.js";
import "../App.css";


//Rendering in Content.js
export class SideMenu extends React.Component { 
  constructor(props){ 
    super(props);
    this.state = {
      userQuery: []
    }
  }

 
  //Gets keywords typed by user
  handleSearch = (e) => {
    console.log(e)
    this.setState({userQuery: this.props.locations});
    //set the state to e.target.value and then filter props based on state?
    this.state.userQuery.filter(this.onChange);
  }

  //Event handler
  onChange = (e) => {
    this.handleSearch(e.target.value)
  }
 //const popular = musicData.filter(artist => artist.sales > 1000000).map(artist => {return artist.artist + " is a great performer"});

  //NOTE TO SELF: filter the the state passing in the userQuery as the parameter
  //Filter user search results
  // filterSearch = () => {
  //   this.state.userQuery.filter(venue => {
  //     this.handleSearch(e.target.value)
  //   }) 
  
  render(){
    console.log("SideMenu component render after setting state ", this.state.userQuery); //verifying props is being passed to SideMenu from content
    return (
      <div className="side-bar">
        <h4>Venu Results</h4>

       <input 
            className="search-bar" 
            placeholder={this.props.userInput} 
            onChange={this.onChange}
          />
        {/* Search Component */}
        {/* <Search 
          userInput="search venues" 
          onChange={this.handleSearch} 
          onKeyPress={this.filterSearch}
        />   */}
        
        <div>
          <ol>
          {this.props.locations.map(destination => (
            <li key={destination.venue.name}>
              <strong>{destination.venue.name}</strong>
              <br/>
              {destination.venue.location.formattedAddress[0]}<br/>
              {destination.venue.location.formattedAddress[1]}<br/>
              {destination.venue.location.formattedAddress[2]}
              <hr/>
            </li>
          ))}
          </ol>
        </div>
      </div>
    );
  }
}