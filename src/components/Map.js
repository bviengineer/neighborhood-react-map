import React from "react";

/*
Sources:  
  1. https://developers.google.com/maps/documentation/javascript/tutorial

  2. https://www.youtube.com/watch?v=W5LhLZqj76s&index=2&list=PLgOB68PvvmWCGNn8UMTpcfQEiITzxEEA1
*/
class MyMap extends React.Component {
  //Google Map setup with parameters 
  initMap = () => {
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    });  
  }

  //First checks to determine if the map has loaded before calling for it to be displayed
  componentDidMount(){
    this.displayMap();
  }
  
  //Calls initJScript defined at bottom of file
  displayMap = () => {
    initJScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyASu5vRNNzFx1JFJz7SVAIJJoRH9VJcST4&callback=initMap");
    
    //binds this map
    window.initMap = this.initMap;
  }
  
  render(){
    return (
      <div id="map">
        Hello
      </div>
    )
  }
}

/* Sources for initJScript function https://www.klaasnotfound.com/2016/11/06/making-google-maps-work-with-react/

https://www.youtube.com/watch?v=W5LhLZqj76s&index=2&list=PLgOB68PvvmWCGNn8UMTpcfQEiITzxEEA1


function initJScript will:
1. obtain the first script tag in the index.html
2. create another new script tag
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


/*
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

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