import React from "react"
import MenuButton from "./buttons/MenuButton"

export default ({ children }) => (
  <div style={{ padding: `0 1rem`,}}>
    <header style={{ marginBottom: `1.5rem`, display: "flex",  position: "fixed", backgroundColor: "white", width: "100%", top: "0"  }}>
      <MenuButton text="Robert Diao" newPage="/"></MenuButton>
      <MenuButton text="Software" newPage="/comingSoon"></MenuButton>
      <MenuButton text="Contact" newPage="/comingSoon"></MenuButton>
    </header>
    {children}
  </div>
)