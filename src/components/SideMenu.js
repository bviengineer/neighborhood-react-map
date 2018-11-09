import React from "react";
//import { Search } from "./Search.js";
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
    let queryString = e.target.value;

    console.log("state BEFORE setState ", this.state.userQuery)
    
    if(this.state.userQuery == ""){
      this.setState({ 
        userQuery: queryString
      })
      this.props.filterSearch();
      //testing query and state before query change
      console.log("state AFTER setState ", this.state.userQuery)
    } else if(this.state.userQuery != "" && this.state.userQuery != queryString){
      this.setState({
        userQuery: queryString
      })
      console.log("new query ", this.state.userQuery)
    }

  }

 //const popular = musicData.filter(artist => artist.sales > 1000000).map(artist => {return artist.artist + " is a great performer"});
/*   
  You’ll want to (Doug FEND Coach):
  1. write your filter function in the Content.js file and - DONE
  2. pass that on the props to your SideMenu component. - DONE
  3. Then call your this.props.filter function when the user changes the query, 
  4. update the state with the filtered list of venues in Content, and everything will update from there.    
*/
  
  render(){
    //console.log("SideMenu component render after setting state ", this.state.userQuery); //verifying props is being passed to SideMenu from content
    return (
      <div className="side-bar">
        <h4>Venu Results</h4>
        
       <input 
            role="input"
            tabIndex="0"
            className="search-bar" 
            placeholder={this.props.userInput} 
            onChange={this.handleSearch}
          />
        {/* Search Component */}
        {/* <Search 
          userInput="search venues" 
          onChange={this.handleSearch} 
          onKeyPress={this.filterSearch}
        />   */}
        
        <div>
          <ol role="list" tabIndex="0">
          {this.props.locations.map(destination => (
            <li role="listitem" tabIndex="0" key={destination.venue.name}>
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