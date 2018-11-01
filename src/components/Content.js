import React from "react";
import { Map } from "./Map.js"; //to hold map
import { SideMenu } from "./SideMenu.js"; //display list of returned locations


//Rendering in App.js
export class Content extends React.Component {
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
 