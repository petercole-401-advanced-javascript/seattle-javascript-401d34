import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'

import { ThemeContext } from '../../contexts/themeContext'

function ThemeToggler () {
  const theme = useContext(ThemeContext)
  return (
    <Button onClick={theme.toggleTheme}>
      Switch to {theme.darkMode ? 'light' : 'dark'} mode
    </Button>
  )
}

export default ThemeToggler
