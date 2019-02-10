import React from 'react'
import appRoutes from '../utils/appRoutes'

import './sidedrawer.css'

export default function Drawer(props) {
    let drawerClasses = 'drawer'
    if (props.show) {
        drawerClasses = 'drawer open';
    }
    return (
        <nav className={drawerClasses}>
            <ul>
                <li><a href={appRoutes.about}>About</a></li>
                <li><a href={appRoutes.comingsoon}>Blog</a></li>
                <li><a href={appRoutes.resume}>Resume</a></li>
            </ul>
        </nav>
    )
}
