import React from 'react';
//import logo from './logo.svg';
import MyMap from  "./components/Map.js";
// import FourSqureAPI from "./api/index.js";
import './App.css'; 

class App extends React.Component{
  render(){
    return(
      <MyMap />
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