import React from "react";


//Rendering in Content.js
export class Map extends React.Component{
  render(){
    return (
      <div id="map" className="map-loading">{/* ?how's is connected to getElementById from map listed in App.js */}
          <h1>{this.props.note}</h1> {/* Prints a message to the screen that the map is loading */}
      </div> 
    );
  }
}

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



//IMPORTS
import React from "react";
// import axios from "axios"; //will handle request to API
import { Locations } from "./Locations.js";

//VARIABLES
// const locationsRequest = "https://api.foursquare.com/v2/venues/explore?"; //End Point Variable


//Map Component Class
export class Map extends React.Component {

  componentDidUpdate(){
    // this.addMapMarkers(this.props.locations);
    // console.log("test from cdidupdate ", this.props.locations)
  }
  //Will loop through the array of destinations returned from the fetch request   
  addMapMarkers = (locations) => {
    console.log("window.google ", window.google)
   if(window.google){
      console.log("from addMapMarkers ", window.map)
      locations.map(destination => {
            
        //Infowindow variable that will display content on the map marker for a given destination
        const infoWindowData = `<strong>${destination.venue.name}</strong> <br>
          ${destination.venue.location.address} <br>
          ${destination.venue.location.formattedAddress[1]} <br>
          ${destination.venue.location.country}`
        ;
      
          //Creats a map marker for each destnation in the appray and & adds them to the map
        let marker = new window.google.maps.Marker({
          position: {lat: destination.venue.location.lat, lng: destination.venue.location.lng},  
          map: window.map,
          title: destination.venue.name
        });
        
         //Event listener for each map marker that will pop up an infowindow
         marker.addListener('click', function(){
          window.infowindow.setContent(infoWindowData);
          window.infowindow.open(window.map, marker);
        });
      }); //closing curl brace & bracket for this.state.loctions.map
    }    
  }  
  
    render(){
      this.addMapMarkers(this.props.locations);
      console.log("test from cdidupdate ", this.props.locations)
    return <div id="map"></div>
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