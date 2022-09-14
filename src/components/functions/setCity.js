//import React from 'react';
import { useState } from 'react';
//import { useEffect } from 'react';
import axios from "axios";

function SetCity () {
  const baseUrl = 'https://api.open-meteo.com/v1/forecast?latitude=56.1937&longitude=44.0027&hourly=temperature_2m&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_hours,windspeed_10m_max,windgusts_10m_max,winddirection_10m_dominant&timezone=auto';
  const [city, setCity] = useState ({});
  
  axios.get(baseUrl).then((resp) => {
    console.log(resp.data);
    setCity(resp.data);
  });

  console.log(city);

  return city;
};

export default SetCity;
