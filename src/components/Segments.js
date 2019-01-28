import React from "react"
import containerStyles from "./segments.module.css"

export default ({ children }) => (
  <div className={containerStyles.segments}>{children}</div>
)