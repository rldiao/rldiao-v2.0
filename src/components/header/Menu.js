import React from 'react'
import Link from 'gatsby-link'

export default function menu() {
  return (
    <div>
        <li> <Link to="/">About Me</Link> </li>
        <li> <Link to="/">Experience</Link> </li>
        <li> <Link to="/">Education</Link> </li>
        <li> <Link to="/">Contain</Link> </li>
    </div>
  )
}
