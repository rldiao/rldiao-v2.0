import React from "react"
import Header from './header/Header'
import Footer from './footer/Footer'
import { Helmet } from 'react-helmet'

import styles from './layout.module.css'


export default ({ children, data }) => (
  <div className={styles.container}>
    <Helmet>
          <meta charSet="utf-8" />
          {/* <title>{data.site.siteMetadata.title}</title> */}
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous" />
    </Helmet>
    <Header />
    <div className={styles.headerSpacer}></div>
    <div className={styles.content}>
      {children}
    </div>
    <Footer />
  </div>
)
