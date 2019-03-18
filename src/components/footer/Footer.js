import React from 'react'
import styles from './footer.module.css'
import externalLinks from '../utils/externalLinks'

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <div className={styles.footerBar}>
            <div className={styles.footerText}>Stay in touch!</div>
            <div className={styles.footerNavigation}>
                <ul>
                    <li className={styles.footerNavigationItem}><a href={externalLinks.github}><i className="fab fa-github"></i></a></li>
                    <li className={styles.footerNavigationItem}><a href={externalLinks.instagram}><i className="fab fa-instagram"></i></a></li>
                    <li className={styles.footerNavigationItem}><a href={externalLinks.twitter}><i className="fab fa-twitter"></i></a></li>
                    <li className={styles.footerNavigationItem}><a href={externalLinks.linkedin}><i className="fab fa-linkedin-in"></i></a></li>
                    <li className={styles.footerNavigationItem}><a href={externalLinks.email}><i className="far fa-envelope"></i></a></li>
                </ul>
            </div>
        </div>
    </footer>
  )
}
