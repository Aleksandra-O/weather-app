import React from "react";
import { useState } from "react";
import classNames from 'classnames';
import styles from './CityInput.module.scss'
import axios from "axios";


function CityInput (props) {

  const [cityName, setCityName] = useState ('Нижний Новгород');
  const [town, setTown] = useState ({
    formatted: 'Нижний Новгород',
    geometry : {
      lat:	56,
      lng:	44,
    }	
  });

  const updateData = props.updateData;
  const updateName = props.updateName;

  const baseUrl = 'https://api.open-meteo.com/v1/forecast?latitude=&longitude=&hourly=temperature_2m&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_hours,windspeed_10m_max,windgusts_10m_max,winddirection_10m_dominant&windspeed_unit=ms&timezone=auto';
  const patternUrl = 'https://api.opencagedata.com/geocode/v1/json?q=&key=a6050e1d3ac54d299af2a6eb3b39902b';

  const handleCityChange = evt => {
    setCityName(evt.target.value);
  }
  const handleSubmit = evt => {
    evt.preventDefault();
    updateName(cityName);
    const cityGeoUrl = patternUrl.slice(0, 47) + cityName + patternUrl.slice(47);

    axios.get(cityGeoUrl).then((resp) => {
      setTown(prevTown => ({...prevTown, formatted: resp.data.results[0].formatted}));
      setTown(prevTown => ({...prevTown, geometry: resp.data.results[0].geometry}));
      const meteoUrl = baseUrl.slice(0, 48) + town.geometry.lat + baseUrl.slice(48, 59) + town.geometry.lng + baseUrl.slice(59);
      updateData(meteoUrl)
    });
    
  };  


  return (
    <div id='search-module' className={styles.base}>
      <form onSubmit={handleSubmit} className={styles.formBase}>
        <input id='cityName' name='cityName' type='text' placeholder="Enter city" value={cityName} onChange={handleCityChange} className={classNames(styles.placeBase, styles.inputBase)}/>
        <button type="submit" className={styles.inputBase}>Searh (doubleclick)  </button>
      </form>
    </div>
  )
};

export default CityInput;
