import React from "react";


//Rendering in Content.js
export class Map extends React.Component{  
  render(){
    return (
      <div id="map" className="map-loading" role="application" aria-label="map" tabIndex="-1">
          <h2>{this.props.note}</h2>
      </div> 
    );
  }
}
