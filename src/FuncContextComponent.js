import React from 'react'
import { useTheme, useThemeUpdate } from './ThemeContext'

export default function FuncContextComponent({ children }) {

  const darkTheme = useTheme()
  const toggleTheme = useThemeUpdate()
  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "#CCC" : "#333",
    h1: darkTheme ? "#CCC" : "#333",
    padding: "4rem"
  }

  return (
    <>
      <button onClick={toggleTheme}>toggle theme</button>
      <div style={themeStyles}>
        {children}
      </div>
    </>
  )
}