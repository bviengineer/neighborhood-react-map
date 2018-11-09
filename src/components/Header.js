import React from "react";


//Rendering in App.js
export const Header = (props) => {
  return <h1 className="site-header" tabIndex="0">{props.heading}</h1>
}