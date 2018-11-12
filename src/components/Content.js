import React from "react";
import { Map } from "./Map.js";
import { SideMenu } from "./SideMenu.js";
import axios from "axios";


//VARIABLES
const locationsRequest = "https://api.foursquare.com/v2/venues/explore?"; //End Point Variable
const searchParams = {
  client_id: "0TL2LRJP0WLJYNYCVGZKZ4L1YRG50I5CLNP2XG0DUVSUEB2O",
  client_secret: "4Q21F123T1T05GXLBP1TDEHPTPNLFBJKK341OGNFERSIGYDY",
  query: "library",
  ll: "33.952879, -83.992234",
  radius: 32186.9, 
  v: "20181015"    
};


//Rendering in App.js
export class Content extends React.Component {
  constructor(props){
    super(props);
    this.state = { 
      locations: [], 
      fetchedLocations: [],
    }  
  }

  //Arrays
  markersArr = []; //will hold map markers
  markersObject = []; //will hold formattedAddress for each location
  
  //Method will call API after map renders
  componentDidMount(){
    //Will get data from fourSquare API
    axios.get(locationsRequest + new URLSearchParams(searchParams))
      .then( response => {        
        //console.log(response); //testing; returned data from the API fetch 
        this.setState({
          locations: response.data.response.groups[0].items,
          fetchedLocations: response.data.response.groups[0].items
        })
      })
      .catch(function(err){
        console.log(err);
      })
  }
    
  //Will loop through the array of destinations returned from the fetch request   
  addMapMarkers = () => {
    if (window.google){   
    this.state.locations.map(destination => {              
      //Infowindow variable that will display content on the map marker for a given destination
      const infoWindowData = `<span role="link" tabIndex="0"><strong>${destination.venue.name}</strong></span> <br />
        ${destination.venue.location.address}<br />
        ${destination.venue.location.formattedAddress[1]}<br />`
      ;
      
        // Creates a map marker for each destnation in the array and & adds them to the map
     let marker = new window.google.maps.Marker({
        position: {lat: destination.venue.location.lat, lng: destination.venue.location.lng},
        animation: window.google.maps.Animation.DROP,  
        map: window.map,
        title: destination.venue.name,
      }); 
      this.markersObject.push(marker) //pushes map marker object to array - to be used in identifying the list item clicked to the corresponding marker
    
      //Event listener for each map marker that will pop up an infowindow
        marker.addListener('click', function(){
        window.infowindow.setContent(infoWindowData);
        window.infowindow.open(window.map, marker);
      });
      this.markersArr.push(marker); //will push map markers into map markers array
    }); //closing curly brace & bracket for this.state.loctions.map
    } //closing curly brace for if(window.google)
  } //closing curly brace for addMapMarkers

  handleSearch = (search) => {
    if(search !== ""){
      // set location to filtered locations
      this.setState({locations: this.filterLocations(this.state.locations, search) })
    } else {
      // set locations to original 
    this.setState({ locations: this.state.fetchedLocations })
    }
  }

  //Filter locations based on user query
  filterLocations(locations, query) {
    return locations.filter(location => location.venue.name.toLowerCase().includes(query.toLowerCase()))
  }

  //Will clear map markers array
  clearMarkers = () => {
    this.markersArr.map(marker => marker.setMap(null))
  }

  render(){
    this.clearMarkers();
    this.addMapMarkers();
    return (
      <div>  
        <div className="input-div">
          <input 
            tabIndex="0" 
            placeholder={"search venues"} 
            className="search-bar"
            onChange={(e) => this.handleSearch(e.target.value)}
          />
        </div>
        <div className="content">
          <SideMenu mapMarkers={this.markersObject} locations={this.state.locations} />
          <Map note="Map is loading..." />
        </div>
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
6. Animate marker - 1/2 done
7. service worker - DONE
8. aria - DONE
9. responsiveness 1/2 done
 */