import React from "react";
import { useState } from "react";
import styles from './Info.module.scss';
import weatherCode from "../consts/weatherCode";
import windCode from "../consts/wind";
import CityInput from "../search/CityInput";
//import PropTypes from 'prop-types';
import cities from "../../mock/cities";

const dayjs = require('dayjs');

function Info (props) {

  const [nameCity, setNameCity] = useState('Нижний Новгород');

  const city = props.city;
  const updateData = props.updateData;

  let windDirection = windCode(city.daily.winddirection_10m_dominant[0]);
  let currentWeather = weatherCode(city.daily.weathercode[0]);

  const utc = require('dayjs/plugin/utc');
  dayjs.extend(utc);

  const currentDate = dayjs.utc().add(city.utc_offset_seconds, 'second').format('HH:mm YYYY MMMM, DD');
  const formatDate = city.hourly.time.map((item) => (dayjs(item).format('DD-HH')));
  const index = formatDate.indexOf(dayjs.utc().add(city.utc_offset_seconds, 'second').format('DD-HH'));
  const currentTemperature = city.hourly.temperature_2m[index];

  const updateName = (value) => {setNameCity(value)};

  return (
    <div id="info-module" className={styles.base}>
      <CityInput updateData={updateData} updateName={updateName}/>
      <h1>Weather in {nameCity}</h1>
      <div><p>Now {currentDate}</p></div>
      <div><p>{currentWeather}</p></div>
      <div><p>Temperature: {currentTemperature} {city.hourly_units.temperature_2m}</p></div>
      <div><p>Wind: {windDirection} {city.daily.windspeed_10m_max[0]} m/s</p></div>
    </div>
  )
};

Info.defaultProps = {
  city: cities[2]
};

export default Info;
