import React from "react";
import styles from "../styles/HomeShotMessage.module.css";

import homeShots from "../assets/logo.webp";

const HomeShotMessage = (props) => {
  const { message } = props;

  return (
    <p className={styles.Title}>
      <img
        className={styles.HomeShoters}
        src={homeShots}
        alt="Popular homeShots"
        height="20"
      />
      {message}
    </p>
  );
};

export default HomeShotMessage;