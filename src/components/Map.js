/*
Sources:  
  1. Google Map: https://developers.google.com/maps/documentation/javascript/tutorial
  2. FourSqure API (for venue data): https://developer.foursquare.com/docs/api/venues/explore
  3. Axios HttpRequest Method: https://github.com/axios/axios
  4. Info Window: https://developers.google.com/maps/documentation/javascript/infowindows
  5. Map markers: https://developers.google.com/maps/documentation/javascript/markers    
  6. Lat | Long coordinates: https://citylatitudelongitude.com/GA/Lawrenceville.htm
    
  7. Tutorial https://www.youtube.com/watch?v=W5LhLZqj76s&index=2&list=PLgOB68PvvmWCGNn8UMTpcfQEiITzxEEA1
  
  https://youtu.be/hzLDsxPGctY (fetch tutorial) - DID NOT USE
*/


//IMPORTS
import React from "react";
import axios from "axios"; //will handle request to API
import { Locations } from "./Locations.js";

//VARIABLES
const locationsRequest = "https://api.foursquare.com/v2/venues/explore?"; //End Point Variable
const lat = 33.952879, //longtitude for map
      lng = -83.992234; //latitude for map


//Map Component Class
export class MyMap extends React.Component {
  constructor(props){
    super(props);
      this.state = { locations: [] }; //will hold locations fetched from fourSquare API
      // this.handleState = this.handleState.bind(this)
  }//closing curly brace for Constructor function


  //Google Map setup with initial lat lng parameters 
  initMap = () => {
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: lat, lng: lng},
      zoom: 12
    }); //closing curly brace & bracket for new map variable


     //Creates an info window object that will appear on the map for each destination
    const infowindow = new window.google.maps.InfoWindow();


    //Will loop through the array of destinations returned from the fetch request 
    this.state.locations.map(destination => {
        
      //Infowindow variable that will display content on the map marker for a given destination
      const infoWindowData = `<strong>${destination.venue.name}</strong> <br>
        ${destination.venue.location.address} <br>
        ${destination.venue.location.formattedAddress[1]} <br>
        ${destination.venue.location.country}`
      ;
    
        //Creats a map marker for each destnation in the appray and & adds them to the map
      const marker = new window.google.maps.Marker({
        position: {lat: destination.venue.location.lat, lng: destination.venue.location.lng},  
        map: map,
        title: destination.venue.name
      });

       //Event listener for each map marker that will pop up an infowindow
       marker.addListener('click', function(){
        infowindow.setContent(infoWindowData);
        infowindow.open(map, marker);
      });
    }); //closing curl brace & bracket for this.state.loctions.map
  } //closing curly brace for initMap()

  
  componentDidMount(){
    this.fetchLocations(); //first determines if the data has been obtained
    //this.displayMap();//First checks to determine if the map has loaded before calling for it to be displayed
  }
  
  //Calls initJScript defined at bottom of file
  displayMap = () => {
    initJScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyASu5vRNNzFx1JFJz7SVAIJJoRH9VJcST4&callback=initMap");
    
    //binds this to the google map and requires adding window in front of a new google map constructor
    window.initMap = this.initMap;
  }

  //Parameters for fetching library locations & API
  fetchLocations = () => {
    const searchParams = {
      client_id: "0TL2LRJP0WLJYNYCVGZKZ4L1YRG50I5CLNP2XG0DUVSUEB2O",
      client_secret: "4Q21F123T1T05GXLBP1TDEHPTPNLFBJKK341OGNFERSIGYDY",
      query: "library",
      near: "Lawrenceville, GA",
      // limit: 50,  
      v: "20181015"    
    } //closing curly bracket for searchParams object

    //Request to fourSquare API to retrieve data, using Axios
    axios.get(locationsRequest + new URLSearchParams(searchParams))
      .then( response => {
        
        console.log(response); //testing this is the returned data from the API fetch
        console.log(response.data.response.groups[0].items[0].venue.name); //for testing
        
        this.setState({ 
          locations: response.data.response.groups[0].items
        }, 
          this.displayMap())
            // venuListing = this.state.locations //remove THIS            
            //console.log("data inside of state",  this.state.locations);
      }) //closing curly bracket & brace for function block and then, respectively
      .catch(function(err){
        console.log(err);
      }) //closing curly bracket & brace for function block and catch, respectively
    }    
  
    render(){
    return (
      <div>
        <div id="map"></div> //container for map
        <Locations venuList={this.state.locations} />
      </div>
    )
  }   
}

/* Sources for initJScript function:
1. https://www.klaasnotfound.com/2016/11/06/making-google-maps-work-with-react/
2. https://www.youtube.com/watch?v=W5LhLZqj76s&index=2&list=PLgOB68PvvmWCGNn8UMTpcfQEiITzxEEA1

function initJScript will:
1. obtain the first script tag in the index.html
2. create a new script tag
3. get the URL passed to the newly created script tag
4. insert the newly created script tag before the existing script tag.
*/
function initJScript(srcURL){
  const initialScript = window.document.getElementsByTagName("script")[0]; 
  const newScript = window.document.createElement("script");
  newScript.src = srcURL;
  newScript.asyn = true;
  newScript.defer = true;
  initialScript.parentNode.insertBefore(newScript, initialScript)
} 

// export default MyMap; 