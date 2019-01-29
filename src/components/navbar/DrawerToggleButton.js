import React from 'react'
import styles from './drawerToggleButton.module.css'

const drawerToggleButton = props => (
    <button className={styles.menuButton} onClick={props.click}>
        <div className={styles.menuLine}></div>
        <div className={styles.menuLine}></div>
        <div className={styles.menuLine}></div>
    </button>
);

export default drawerToggleButton;