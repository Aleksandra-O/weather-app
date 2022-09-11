import React from "react";
//import { useState } from "react";
import Info from '../data/Info';
import Photo from "../photo/Photo";

function InfoBlock (props) {
  const city = props.city;
  return (
    <div id='info-block' className="styles.base">
       <Info city={city}/>
       <Photo city={city}/>
    </div>
  )
};

export default InfoBlock;