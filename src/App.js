import React from "react"; 
import { Header } from "./components/Header.js"; //header bar
import { Content } from "./components/Content.js"; //content container
import { Footer } from "./components/Footer.js"; //footer information
import './App.css'; 

const lat = 33.952879, //longtitude for map
      lng = -83.992234; //latitude for map


//Rendering in Index.js
export class App extends React.Component{
  /* Sources for initJScript function:
    1. https://www.klaasnotfound.com/2016/11/06/making-google-maps-work-with-react/
    2. https://www.youtube.com/watch?v=W5LhLZqj76s&index=2&list=PLgOB68PvvmWCGNn8UMTpcfQEiITzxEEA1

    function initJScript will:
    1. obtain the first script tag in the index.html
    2. create a new script tag
    3. get the URL passed to the newly created script tag
    4. insert the newly created script tag before the existing script tag.
    */

  //Sets up script tag & corresponding parameters for map
  initJScript(srcURL){
    const initialScript = window.document.getElementsByTagName("script")[0]; 
    const newScript = window.document.createElement("script");
    newScript.src = srcURL;
    newScript.asyn = true;
    newScript.defer = true;
    initialScript.parentNode.insertBefore(newScript, initialScript)
  }

  //Calls initJScript & builds URL passed to function as a parameter used in making map API call
  displayMap = () => {
    this.initJScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyASu5vRNNzFx1JFJz7SVAIJJoRH9VJcST4&callback=initMap");
    
    //Binds initMap callback function to the window object 
    window.initMap = this.initMap;
  }

  //Google Map setup with initial lat lng parameters 
  initMap = () => {
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: lat, lng: lng},
      zoom: 12
    });
    window.map = map; //? 

    //  //Creates an info window object that will appear on the map for each destination
    // const infowindow = new window.google.maps.InfoWindow();
    // window.infowindow = infowindow;        
    
  } //closing curly brace for initMap()

  render(){
    this.displayMap();
    return(
      <div>
        <Header heading="React Neighborhood Map" />
        <Content /> 
        <Footer heading="Footer Content Here"/>
      </div> 
    );
  }
}

/* App Component Renders:
1. Title bar or heading - DONE
2. Content componenet
    Renders:
    a. sidebar componenet - DONE
    b. map component - DONE
    c. api request to get data from API & pass it to map & sidebar - DONE
3. Apply info window & map markers to map

4. Footer component - DONE
5. Initialize map - DONE
*/