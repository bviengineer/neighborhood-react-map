import React from "react";
import { Map } from "./Map.js"; //to hold map
import { SideMenu } from "./SideMenu.js"; //display list of returned locations
import axios from "axios"; //will handle request to API
import FourSqureAPI from "../api/index.js";


//VARIABLES
const locationsRequest = "https://api.foursquare.com/v2/venues/explore?"; //End Point Variable
const searchParams = {
  client_id: "0TL2LRJP0WLJYNYCVGZKZ4L1YRG50I5CLNP2XG0DUVSUEB2O",
  client_secret: "4Q21F123T1T05GXLBP1TDEHPTPNLFBJKK341OGNFERSIGYDY",
  query: "library",
  near: "Lawrenceville, GA",
  // limit: 50,  
  v: "20181015"    
};


//Rendering in App.js
export class Content extends React.Component {
  constructor(props){
    super(props);
    this.state = { locations: [] }
    //this.componentDidMount = this.componentDidMount.bind(this)
  }

  //Method will call API after map renders
  componentDidMount(){
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

  //Parameters for fetching locations from API
  // fetchLocations = () => {
  // }
  
  render(){
    return (
      <div> 
        <Map note="Map is loading..." />
        <SideMenu />
      </div>
    );
  }
}

/*
1. get locations data using component did mount life
2. put that data in a state
3.  define props for both map componet and sidebar
4. Go to each child componet and 
 utlize data
5. work search feature
 */