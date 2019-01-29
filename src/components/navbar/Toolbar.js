import React from 'react'
import styles from './navbar.module.css'
import DrawerToggleButton from './DrawerToggleButton'
import appRoutes from '../utils/appRoutes'


const toolbar = props => (
    <header className={styles.toolbar}>
        <nav className={styles.toolbarNavigation}>
            <div className={styles.toolbarLogo}><a href={appRoutes.home}>Robert Diao</a></div>
            <div className={styles.spacer}></div>
            <div className={styles.toolbarNavigationItems}>
                <ul>
                    <li><a href={appRoutes.home}>Home</a></li>
                    <li><a href={appRoutes.comingsoon}>About</a></li>
                    <li><a href={appRoutes.comingsoon}>Blog</a></li>
                    <li><a href={appRoutes.comingsoon}>Resume</a></li>
                </ul>
            </div>
            <div className={styles.drawerToggleButton} ><DrawerToggleButton click={props.drawerClickHandler}/></div>
        </nav>
    </header>
);

export default toolbar;