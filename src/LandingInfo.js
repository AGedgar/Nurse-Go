import React from "react";
import imgInfo from "./imgLandInfo.png"

function LandInfo(){
    return(
        <div>
        <div className="imgLandInfo">
            <img src={imgInfo} alt="movil" width="200px"/>
        </div>
        <div className="landInfo">
            <p>BETTER FOR <br/>PACIENTS</p>
            <p>BETTER FOR <br/>NURSES</p>
        </div>
        </div>
    )
}

export default LandInfo;