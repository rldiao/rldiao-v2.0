import React from "react"
import containerStyles from "./pagecontainer.module.css"

export default ({ children }) => (
  <div className={containerStyles.pagecontainer}>{children}</div>
)