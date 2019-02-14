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
                    <li className={styles.footerNavigationItem}><a href={externalLinks.github}><i class="fab fa-github"></i></a></li>
                    <li className={styles.footerNavigationItem}><a href={externalLinks.instagram}><i class="fab fa-instagram"></i></a></li>
                    <li className={styles.footerNavigationItem}><a href={externalLinks.twitter}><i class="fab fa-twitter"></i></a></li>
                    <li className={styles.footerNavigationItem}><a href={externalLinks.linkedin}><i class="fab fa-linkedin-in"></i></a></li>
                    <li className={styles.footerNavigationItem}><a href={externalLinks.email}><i class="far fa-envelope"></i></a></li>
                </ul>
            </div>
        </div>
    </footer>
  )
}
