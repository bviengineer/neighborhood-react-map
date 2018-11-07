import React from "react";


//Rendering in SideMenu.js
export const Search = (props) => {
  return <input className="search-bar" placeholder={props.userInput} onChange={(e) => props.onKeyPress(e.target.value)}/>
}