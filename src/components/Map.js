import React from "react";


//Rendering in Content.js
export class Map extends React.Component{  
  render(){
    // console.log("console log inside map component render ", this.props.locations); //verifying props is being passed to map from content
    return (
      <div id="map" className="map-loading" role="application" aria-label="map" tabIndex="-1">{/* ?how's is connected to getElementById from map listed in App.js */}
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
*/
