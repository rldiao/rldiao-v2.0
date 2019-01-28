import React, { Component } from 'react'
import styles from '../cells/projectcell.module.css'

export default class ProjectCell extends Component {
  render() {
    return (
      <div className={styles.cell}>
        <div className={styles.timePlace}>
            <div className={styles.place}>{this.props.title}</div>
            <div className={styles.time}>{this.props.date}</div>
        </div>
        <div className={styles.discription}>{this.props.discription}</div>
      </div>
    )
  }
}
