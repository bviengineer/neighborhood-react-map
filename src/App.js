import React from "react"; 
import { Header } from "./components/Header.js";
import { Content } from "./components/Content.js";
import { ErrorBoundary } from "./components/errorBoundary";
import { Footer } from "./components/Footer.js"; 
import './App.css'; 


//Rendering in Index.js
export class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      lat: 33.952879,
      lng: -83.992234
    }
  }

  componentDidMount(){
    this.displayMap();
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

  //Sets up script tag & corresponding parameters for map
  initJScript(srcURL){
    const initialScript = window.document.getElementsByTagName("script")[0]; 
    const newScript = window.document.createElement("script");
    newScript.src = srcURL;
    newScript.async = true;
    newScript.defer = true;
    initialScript.parentNode.insertBefore(newScript, initialScript)
  }

  
  //Calls initJScript & builds URL passed to function as a parameter used in making map API call
  displayMap = () => {
    this.initJScript("https://maps.googleapis.com/maps/api/js?key=IzaSyASu5vRNNzFx1JFJz7SVAIJJoRH9VJcST4&callback=initMap");
    
    //Binds initMap callback function to the window object 
    window.initMap = this.initMap;
  }

  //Google Map setup with initial lat lng parameters 
  initMap = () => {
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: this.state.lat, lng: this.state.lng},
      zoom: 10
    });
    window.map = map; 

     //Creates an info window object that will appear on the map for each destination
    let infowindow = new window.google.maps.InfoWindow();
    window.infowindow = infowindow;        
    
  } //closing curly brace for initMap()

  render(){   
    return(
      <div className="app-container">
        <Header />
        <ErrorBoundary>
          <Content />
        </ErrorBoundary>       
        <Footer />
      </div> 
    );
  }
}