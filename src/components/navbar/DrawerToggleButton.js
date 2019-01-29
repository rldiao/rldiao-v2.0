import React from 'react'
import styles from './drawerToggleButton.module.css'

const drawerToggleButton = props => (
    <button className={styles.menuButton} onClick={props.click}>
        <i className="fas fa-bars" style={{fontSize: "3rem", color: "black"}}></i>
    </button>
);

export default drawerToggleButton;