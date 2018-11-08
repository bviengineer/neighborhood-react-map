import React from "react";
import { Map } from "./Map.js"; //to hold map
import { SideMenu } from "./SideMenu.js"; //display list of returned locations
import { Button } from "./button.js";
import axios from "axios"; //will handle request to API
//import FourSqureAPI from "../api/index.js"; //GETTING DATA whether or not this is imported 


//VARIABLES
const locationsRequest = "https://api.foursquare.com/v2/venues/explore?"; //End Point Variable
const searchParams = {
  client_id: "0TL2LRJP0WLJYNYCVGZKZ4L1YRG50I5CLNP2XG0DUVSUEB2O",
  client_secret: "4Q21F123T1T05GXLBP1TDEHPTPNLFBJKK341OGNFERSIGYDY",
  query: "library",
  near: "Lawrenceville, GA",
  // limit: 5,  
  v: "20181015"    
};

//Rendering in App.js
export class Content extends React.Component {
  constructor(props){
    super(props);
    this.state = { locations: [] }
  }

  //Method will call API after map renders
  componentWillMount(){
    //Will get data from fourSquare API
    axios.get(locationsRequest + new URLSearchParams(searchParams))
      .then( response => {        
        console.log(response); //testing; returned data from the API fetch 
        this.setState({
          locations: response.data.response.groups[0].items
        })         
            //console.log("data after setting state",  this.state.locations); //testing purposes
      })
      .catch(function(err){
        console.log(err);
      })
  }
    
  //Will loop through the array of destinations returned from the fetch request   
  addMapMarkers = () => {
    // console.log("inside addMapMarkers func", this.state.locations); //testing for data
  
    this.state.locations.map(destination => {              
      //Infowindow variable that will display content on the map marker for a given destination
      const infoWindowData = `<span role="link" tabIndex="0"><strong>${destination.venue.name}</strong></span> <br>
        ${destination.venue.location.address}<<br>
        ${destination.venue.location.formattedAddress[1]}<br>
        ${destination.venue.location.country}`
      ;
      
        /* Creats a map marker for each destnation in the array and & adds them to the map and after changing let to var map began loading consistently*/
    //  let marker = new window.google.maps.Marker({
    //     position: {lat: destination.venue.location.lat, lng: destination.venue.location.lng},  
    //     map: window.map,
    //     title: destination.venue.name
    //   });
  
    
    //   //Event listener for each map marker that will pop up an infowindow
    //     marker.addListener('click', function(){
    //     window.infowindow.setContent(infoWindowData);
    //     window.infowindow.open(window.map, marker);
    //   });
    }); //closing curly brace & bracket for this.state.loctions.map  
  } //closing curly brace for addMapMarkers

  
  //filter function 
  filterSearch = () => {
    this.state.locations.filter(location => console.log("filter feature", location.length));
  }

  render(){
    // console.log("content component render ", this.state.locations);
    //let locations = this.state.locations; 
    //console.log("locations var from content component", locations) //testing to see if returned location data was assigned to var
    this.addMapMarkers();
    return (
      <div> 
        <Button hideMenu={ `$("button").click(function = () => { $(".side-bar").toggle() })`} />
        <SideMenu locations={this.state.locations} filterSearch={this.filterSearch}/>
        <Map note="Map is loading..." locations={this.state.locations}/>
      </div>
    );
  }
}

/*
1. get locations data using component did mount life - DONE
2. put that data in a state - DONE 
3.  define props for both map componet and sidebar
4. Go to each child componet and 
 utlize data
5. work search feature
    a. get user search term - DONE
    b. pass user query to state
    c. Filter locations based on user search query
6. Animate marker
7. service worker
8. aria
9. responsiveness 
 */