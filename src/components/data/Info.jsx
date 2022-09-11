import React from "react";
//import { useState } from "react";
import weatherCode from "../consts/weatherCode";
import windCode from "../consts/wind";

function Info (props) {
  const city = props.city;
  let windDirection = windCode(city.current_weather.winddirection);
  let currentWeather = weatherCode(city.current_weather.weathercode);
  return (
    <div id="info-module" className="styles.base">
        <div><p>{currentWeather}</p></div>
        <div><p>temperature: {city.current_weather.temperature} {city.hourly_units.temperature_2m}</p></div>
        <div><p>wind: {windDirection} {city.current_weather.windspeed} m/s</p></div>
    </div>
  )
};

export default Info;
