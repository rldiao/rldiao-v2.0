import React from 'react'

import './sidedrawer.css'

export default function Drawer(props) {
    let drawerClasses = 'drawer'
    if (props.show) {
        drawerClasses = 'drawer open';
    }
    return (
        <nav className={drawerClasses}>
            <ul>
                <li><a href="/comingSoon">Software</a></li>
                <li><a href="/comingSoon">Contact</a></li>
            </ul>
        </nav>
    )
}
