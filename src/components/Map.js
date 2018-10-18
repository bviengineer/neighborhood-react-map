import React from "react";
// import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

class MyMap extends React.Component {
  render(){
    return (
      <div>Hello</div>
    )
  }

}


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