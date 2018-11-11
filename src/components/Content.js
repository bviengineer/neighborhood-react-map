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
    this.state = { 
      locations: [], 
      fetchedLocations: [],
    }
  }

  //Method will call API after map renders
  componentDidMount(){
    //Will get data from fourSquare API
    axios.get(locationsRequest + new URLSearchParams(searchParams))
      .then( response => {        
        console.log(response); //testing; returned data from the API fetch 
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
      const infoWindowData = `<span role="link" tabIndex="0"><strong>${destination.venue.name}</strong></span> <br>
        ${destination.venue.location.address}<br>
        ${destination.venue.location.formattedAddress[1]}<br>
        ${destination.venue.location.country}`
      ;
      
        // Creates a map marker for each destnation in the array and & adds them to the map
     let marker = new window.google.maps.Marker({
        position: {lat: destination.venue.location.lat, lng: destination.venue.location.lng},
        animation: window.google.maps.Animation.DROP,  
        map: window.map,
        title: destination.venue.name
      }); 
    
      //Event listener for each map marker that will pop up an infowindow
        marker.addListener('click', function(){
        window.infowindow.setContent(infoWindowData);
        window.infowindow.open(window.map, marker);
      });
      
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

  render(){
    this.addMapMarkers();
    return (
      <div>  
        <input 
          tabIndex="0"
          className="search-bar" 
          placeholder={"search venues"} 
          onChange={(e) => this.handleSearch(e.target.value)}
        />
        <Button hideMenu={ `$("button").click(function = () => { $(".side-bar").toggle() })`} />
        <div className="content">
          <SideMenu locations={this.state.locations} />
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