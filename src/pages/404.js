import React from 'react'
import Layout from '../components/Layout';

import styles from '../styles/pages/not-found.module.css'

export default function () {
  return (
    <Layout>
        <div className={styles.container}>
          <div className={styles.textContainer}>
            <div className={styles.header}>Sorry</div>
            <div className={styles.text}>I seem to have not made this a thing!</div>
          </div>
        </div>
    </Layout>
  )
}
