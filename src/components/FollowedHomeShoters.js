import React from "react";
import styles from "../styles/FollowedHomeShoters.module.css";

import homeShoters from "../assets/logo.webp";

const FollowedHomeShoters = () => {
  return (
    <p className={styles.Title}>
      <img
        className={styles.HomeShoters}
        src={homeShoters}
        alt="Popular HomeShoters"
        height="20"
      />
      You Follow
    </p>
  );
};

export default FollowedHomeShoters;