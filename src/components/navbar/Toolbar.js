import React, { Component } from 'react'
import styles from './navbar.module.css'
import DrawerToggleButton from './DrawerToggleButton'

const toolbar = props => (
    <header className={styles.toolbar}>
        <nav className={styles.toolbarNavigation}>
            <div className={styles.toolbarLogo}><a href="/">Robert Diao</a></div>
            <div className={styles.spacer}></div>
            <div className={styles.toolbarNavigationItems}>
                <ul>
                    <li><a href="/comingSoon">Software</a></li>
                    <li><a href="/comingSoon">Contact</a></li>
                </ul>
            </div>
            <div className={styles.drawerToggleButton} ><DrawerToggleButton click={props.drawerClickHandler}/></div>
        </nav>
    </header>
);

export default toolbar;