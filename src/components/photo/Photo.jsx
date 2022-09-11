import React from "react";
//import { useState } from "react";

function Photo (props) {
  const city = props.city;
  return (
    <div id = 'photo-module' className="styles.base">
       <img src={city.photo} alt={city.name} />
    </div>
  )
};

export default Photo;