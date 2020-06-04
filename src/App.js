import React from "react";
import "./App.css"
import Nav from "./Nav"
import Landing from "./LandImage"
import LandInfo from "./LandingInfo"
import LandingSections from "./LandingSections"
  

function App(){
  return(
    <div>
      <Nav />
      <LandInfo />
      <Landing />
      <LandingSections />
    </div>
  )
}

export default App;