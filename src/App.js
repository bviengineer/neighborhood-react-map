import React from "react"; 
import { Header } from "./components/Header.js"; //header bar
import { Content } from "./components/Content.js"; //content container
import { Footer } from "./components/Footer.js"; //footer information

class App extends React.Component{
  render(){
    return (
      <div>
        <Header title="HEADER: React Neighborhood Map - rendering from within App.js " />
        <Content title="Content component rendering from within App.js" />
        <Footer title="Footer component - reporting from within App.js" />
      </div> 
    );
  }
}

export default App;

/* App Component contains:
1. Title bar or heading
2. content 
    Content container contains
    a. sidebar componenet
    b. map container
    c. api request to get data from API & pass it to map
    
3. Apply info window & map markers to map
4. Initialize map

*/























/*import React from 'react';
import axios from "axios"; //will handle request to API
//import logo from './logo.svg';
import { MyMap } from  "./components/Map.js";
import { SideMenu } from "./components/SideMenu.js";
// import FourSqureAPI from "./api/index.js";
import './App.css'; 


//VARIABLES
const locationsRequest = "https://api.foursquare.com/v2/venues/explore?"; //End Point Variable
const lat = 33.952879, //longtitude for map
       lng = -83.992234; //latitude for map

class App extends React.Component{
  constructor(props){
    super(props);
      this.state = { locations: [] }; //will hold locations fetched from fourSquare API
  }//closing curly brace for Constructor function
  
   componentDidMount(){
    this.displayMap();
    this.fetchLocations(); 
  }

  componentDidUpdate(){
    
  }

  //Calls initJScript defined at bottom of file
  displayMap = () => {
    this.initJScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyASu5vRNNzFx1JFJz7SVAIJJoRH9VJcST4&callback=initMap");
    
    //binds this to the google map and requires adding window in front of a new google map constructor
    window.initMap = this.initMap;
  }

  initJScript(srcURL){
    const initialScript = window.document.getElementsByTagName("script")[0]; 
    const newScript = window.document.createElement("script");
    newScript.src = srcURL;
    newScript.asyn = true;
    newScript.defer = true;
    initialScript.parentNode.insertBefore(newScript, initialScript)
  }
      //Google Map setup with initial lat lng parameters 
      initMap = () => {
        const map = new window.google.maps.Map(document.getElementById('map'), {
          center: {lat: lat, lng: lng},
          zoom: 8
        }); //closing curly brace & bracket for new map variable
        window.map = map;    
    
         //Creates an info window object that will appear on the map for each destination
        const infowindow = new window.google.maps.InfoWindow();
        window.infowindow = infowindow;        
        
      } //closing curly brace for initMap()

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
        // console.log(response.data.response.groups[0].items[0].venue.name); //for testing
        
        this.setState({ 
          locations: response.data.response.groups[0].items
        })         
            //console.log("data inside of state",  this.state.locations);
      }) //closing curly bracket & brace for function block and then, respectively
      .catch(function(err){
        console.log(err);
      }) //closing curly bracket & brace for function block and catch, respectively
    }
  
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