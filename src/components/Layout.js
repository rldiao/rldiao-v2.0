import React from "react"
import styles from "./layout.module.css"
import Header from './header/Header'


export default ({ children }) => (
  <div className={styles.container}>
    <Header />
    {children}
  </div>
)