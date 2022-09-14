import React from "react";
import styles from './Photo.module.scss';
import cities from "../../mock/cities";

function Photo (props) {
  return (
    <div id = 'photo-module' className={styles.base}>
       <img src="https://img5.socratify.net/0c51d045dcf13fab2d_600x375.jpg" alt="here could be the city" />
    </div>
  )
};

Photo.defaultProps = {
  city: cities[2]
};

export default Photo;