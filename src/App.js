import React from "react"; 
import { Header } from "./components/Header.js"; //header bar
import { Content } from "./components/Content.js"; //content container
import { Footer } from "./components/Footer.js"; //footer information
import './App.css'; 

const lat = 33.952879, //longtitude for map
      lng = -83.992234; //latitude for map


//Rendering in Index.js
export class App extends React.Component{
  //Sets up script tag & corresponding parameters for map *****CITE SOURCE*********************************
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
      zoom: 8
    });
    window.map = map; //? 

     //Creates an info window object that will appear on the map for each destination
    const infowindow = new window.google.maps.InfoWindow();
    window.infowindow = infowindow;        
    
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

/* App Component contains:
1. Title bar or heading - DONE
2. content 
    Content Component contains
    a. sidebar componenet - DONE
    b. map component - DONE

    c. api request to get data from API & pass it to map & sidebar     
3. Apply info window & map markers to map

4. Footer component - DONE
5. Initialize map - DONE

//=====================================================================
     

  
  
  render(){
    //this.displayMap();
    //console.log("data from render ", this.state.locations)
    return(
      <div>
        <h1 className="listings-title">Local Listings</h1>
        <MyMap locations={this.state.locations}/>
      </div>
    )
  }  
 }

export default App;
*/