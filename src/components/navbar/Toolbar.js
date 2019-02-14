import React from 'react'
import styles from './navbar.module.css'
import DrawerToggleButton from './DrawerToggleButton'
import appRoutes from '../utils/appRoutes'
import Resume from '../documents/resume.pdf'


const toolbar = props => (
    <header className={styles.toolbar}>
        <nav className={styles.toolbarNavigation}>
            <div className={styles.toolbarLogo}><a href={appRoutes.about}>Robert Diao</a></div>
            <div className={styles.spacer}></div>
            <div className={styles.toolbarNavigationItems}>
                <ul>
                    <li><a href={appRoutes.about}>About</a></li>
                    <li><a href={appRoutes.blog}>Blog</a></li>
                    <li><a href={Resume} target='_blank' rel='noopener noreferrer'>Resume</a></li>
                </ul>
            </div>
            <div className={styles.drawerToggleButton} ><DrawerToggleButton click={props.drawerClickHandler}/></div>
        </nav>
    </header>
);

export default toolbar;