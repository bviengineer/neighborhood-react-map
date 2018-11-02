import React from "react";
import { Map } from "./Map.js"; //to hold map
import { SideMenu } from "./SideMenu.js"; //display list of returned locations
import axios from "axios"; //will handle request to API
//import FourSqureAPI from "../api/index.js"; GETTING DATA whether or not this is imported 


//VARIABLES
const locationsRequest = "https://api.foursquare.com/v2/venues/explore?"; //End Point Variable
const searchParams = {
  client_id: "0TL2LRJP0WLJYNYCVGZKZ4L1YRG50I5CLNP2XG0DUVSUEB2O",
  client_secret: "4Q21F123T1T05GXLBP1TDEHPTPNLFBJKK341OGNFERSIGYDY",
  query: "library",
  near: "Lawrenceville, GA",
  // limit: 50,  
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

      //this.addMapMarkers();
    }

    
    //Will ensure component updated before adding map markers
    componentDidUpdate(){
      this.addMapMarkers();
      //console.log("test from cDidUpdate ", this.state.locations) //testing for data
    }

    //Will loop through the array of destinations returned from the fetch request   
  addMapMarkers = () => {
    console.log("inside addMapMarkers func", this.state.locations); //testing for data
  
    this.state.locations.map(destination => {              
      //Infowindow variable that will display content on the map marker for a given destination
      const infoWindowData = `<strong>${destination.venue.name}</strong> <br>
        ${destination.venue.location.address} <br>
        ${destination.venue.location.formattedAddress[1]} <br>
        ${destination.venue.location.country}`
      ;
    
        //Creats a map marker for each destnation in the array and & adds them to the map
      let marker = new window.google.maps.Marker({
        position: {lat: destination.venue.location.lat, lng: destination.venue.location.lng},  
        map: window.map,
        title: destination.venue.name
      });

       //Creates an info window object that will appear on the map for each destination
        let infowindow = new window.google.maps.InfoWindow();
        window.infowindow = infowindow;    
    
      //Event listener for each map marker that will pop up an infowindow
        marker.addListener('click', function(){
        window.infowindow.setContent(infoWindowData);
        window.infowindow.open(window.map, marker);
      });
    }); //closing curly brace & bracket for this.state.loctions.map  
  } //closing curly brace for addMapMarkers

  
  render(){
    // console.log("content component render ", this.state.locations);
    //let locations = this.state.locations; 
    //console.log("locations var from content component", locations) //testing to see if returned location data was assigned to var
    return (
      <div> 
        <Map note="Map is loading..." locations={this.state.locations}/>
        <SideMenu locations={this.state.locations}/>
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
 */