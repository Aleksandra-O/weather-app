import styles from './App.module.scss';

//import { useState } from 'react';
import cities from '../mock/cities';
import CityInput from '../components/search/CityInput';
import InfoBlock from '../components/infoblock/InfoBlock';
import Chart from '../components/graph/Chart';

function App() {
  return (
    <div className={styles.base}>
      <CityInput />
      <InfoBlock city={cities[1]}/>
      <Chart city={cities[1]}/>
    </div>
  );
}

export default App;
