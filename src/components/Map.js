import React from "react";
// import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

/*
Sources:  
  1. https://developers.google.com/maps/documentation/javascript/tutorial
  2. https://www.youtube.com/watch?v=W5LhLZqj76s&index=2&list=PLgOB68PvvmWCGNn8UMTpcfQEiITzxEEA1
*/
class MyMap extends React.Component {
  
  //Initializes Google Map
  initMap = () => {
    const map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    });
  }
  
  render(){
    return (
      <div id="map">Hello</div>
    )
  }
}

{/* <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"
    async defer>
</script> */}

/*
  React Google Map Source: https://tomchentw.github.io/react-google-maps/
  React Google Map Tutorial: https://www.youtube.com/watch?v=Q0vzqlnWWZw&index=2&list=PL4rQq4MQP1crXuPtruu_eijgOUUXhcUCP


const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={10}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
  </GoogleMap>
));

class MyMap extends React.Component {
  render(){
    return(
      <MyMapComponent
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyASu5vRNNzFx1JFJz7SVAIJJoRH9VJcST4"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `625px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    )
  }
}
*/ 

export default MyMap; 