import React, { Component } from 'react'
import styles from '../cells/projectcell.module.css'

export default class ProjectCell extends Component {
  render() {
    return (
      <div className={styles.cell}>
        <div className={styles.timePlace}>
            <div className={styles.place}>Title</div>
            <div className={styles.time}>Date</div>
        </div>
        <div className={styles.position}>Position</div>
      </div>
    )
  }
}
