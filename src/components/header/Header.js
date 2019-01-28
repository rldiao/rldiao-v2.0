import React from 'react'
import Menu from '../header/Menu'
import Segments from '../Segments';

export default function Header() {
  return (
    <Segments>
        <h1 style={{paddingRight: '50px'}}>Robert<br/>Diao</h1>
        <Menu style={{paddingLeft: '50px'}}></Menu>
    </Segments>
  )
}
