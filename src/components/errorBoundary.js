import React from "react";


export class ErrorBoundary extends React.Component{
  constructor(props){
    super(props);
    this.state = { 
      hasError: false 
    }
  }
  
  componentDidCath(error, info){
    this.setState({ mapError: true })
  }

  render(){
    if(this.state.hasError){
      console.log(this.t)
      return document.getElementById("map").innerHTML = <h1>Google Map failed</h1>
    }
    return this.props.children
  }
}
