import styles from './App.module.scss';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import InfoBlock from '../components/infoblock/InfoBlock';
import Chart from '../components/graph/Chart';
import axios from "axios";

const baseUrl = 'https://api.open-meteo.com/v1/forecast?latitude=56.1937&longitude=44.0027&hourly=temperature_2m&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_hours,windspeed_10m_max,windgusts_10m_max,winddirection_10m_dominant&windspeed_unit=ms&timezone=auto';

function App() {
  const [city, setCity] = useState ();

  useEffect(() => {
    axios.get(baseUrl).then((resp) => {
      setCity(resp.data);
    });
  }, [setCity]);

  const updateData = (value) => {
    axios.get(value).then((resp) => {
      setCity(resp.data);
    });
  };
 
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <InfoBlock city={city} updateData={updateData}/>
        <Chart city={city}/>
      </div>
    </div>
  );
};

export default App;
