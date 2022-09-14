import React from "react";
import styles from './InfoBlock.module.scss';
import Info from '../info/Info';
import Photo from "../photo/Photo";

function InfoBlock (props) {
  const city = props.city;
  const updateData = props.updateData;
  return (
    <div id='info-block' className={styles.container}>
       <Info city={city} updateData={updateData}/>
       <Photo city={city}/>
    </div>
  )
};

export default InfoBlock;
