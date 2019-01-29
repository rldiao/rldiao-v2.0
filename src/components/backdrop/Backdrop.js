import React from 'react'
import styles from './backdrop.module.css'

export default function Backdrop(props) {
    return (
            <div className={styles.backdrop} onClick={props.drawerClickHandler}/>
    )
}
