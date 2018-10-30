import React from 'react';
//import logo from './logo.svg';
import { MyMap } from  "./components/Map.js";
import { SideMenu } from "./components/SideMenu.js";
// import FourSqureAPI from "./api/index.js";
import './App.css'; 

class App extends React.Component{
  render(){
    return(
      <div>
        <h1 className="listings-title">Local Listings</h1>
        <SideMenu /> 
        <MyMap />
      </div>
    )
  }  
 }

export default App;



// componentDidMount(){
  //   FourSqureAPI.search({
  //     near:"Lawrenceville, GA",
  //     query: "food",
  //     limit: 15
  //   }).then(results => console.log(results));