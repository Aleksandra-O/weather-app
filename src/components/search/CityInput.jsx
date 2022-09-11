import React from "react";

function CityInput (props) {
  const {type = 'text'} = props;
  return (
    <div id = 'search-module' className="styles.base">
       <input type={type}/>
    </div>
  )
};

export default CityInput;
