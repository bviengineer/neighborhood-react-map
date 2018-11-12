import React from "react";
//import { Search } from "./Search.js";
import "../App.css";

//Rendering in Content.js
export class SideMenu extends React.Component { 
  
  //Compares the value of two location objects & returns true if lat lng are the same for each location 
  compare(loc1, loc2) {   
    return loc1.lat === loc2.lat && loc2.lng === loc1.lng;
  }  

  render(){
    if (this.props.mapMarkers.length > 0){
    console.log("markerssss", this.props.mapMarkers[0].getPosition().toJSON())}
    return (
      <div className="side-bar">
        <h4>Libraries</h4>        
        <div>
          <ol role="list" tabIndex="0">
          {this.props.locations.map(destination => (
            <li 
              role="link" 
              tabIndex="0" 
              key={destination.referralId}
              onClick={ () => {
                
              /*
                Maps through the markersObject array, compares the position of each venue in the object to the position of the item clicked and animates and pops up the infoWindow of the corresponding item 
              */
               const result = this.props.mapMarkers
                  .filter(location => this.compare(location.getPosition().toJSON(), (new window.google.maps.LatLng({lat: destination.venue.location.lat, lng:  destination.venue.location.lng}).toJSON())));
                  result[0].setAnimation(window.google.maps.Animation.BOUNCE);
                 
                  //Setting infoWindow for the item clicked
                  let marker = new window.google.maps.Marker({
                    position: {lat: destination.venue.location.lat, lng: destination.venue.location.lng},
                    animation: window.google.maps.Animation.DROP,  
                    map: window.map,
                    title: destination.venue.name,
                  }); 
                  const infoWindowData = `<span role="link" tabIndex="0"><strong>${destination.venue.name}</strong></span> <br>
                    ${destination.venue.location.address}<br>
                    ${destination.venue.location.formattedAddress[1]}<br>`;

                    window.infowindow.setContent(infoWindowData);
                    window.infowindow.open(window.map, marker);
                  ;

                  //Stopping animation on the item clicked
                  setTimeout(function(){
                    result[0].setAnimation(null);
                  }, 2000)
                }                
              }
              >
              <strong>{destination.venue.name}</strong>
              <br/>
              {destination.venue.location.formattedAddress[0]}<br/>
              {destination.venue.location.formattedAddress[1]}<br/>
              <hr/>
            </li>
          ))}
          </ol>
        </div>
      </div>
    );
  }
}