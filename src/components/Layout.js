import React from "react"
import MenuButton from "./buttons/MenuButton"

export default ({ children }) => (
  <div style={{padding: `0 1rem` }}>
    <header style={{ marginBottom: `1.5rem`, display: "flex" }}>
      <MenuButton text="Robert Diao"></MenuButton>
      <MenuButton text="Software"></MenuButton>
      <MenuButton text="Contact"></MenuButton>
    </header>
    {children}
  </div>
)