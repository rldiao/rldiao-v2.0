import React from "react";
import styles from "./drawerToggleButton.module.css";

const drawerToggleButton = props => (
  <button className={styles.menuButton} onClick={props.click}>
    <div className={styles.menuLine} />
    <div className={styles.menuLine} />
    <div className={styles.menuLine} />
  </button>
);

export default drawerToggleButton;
