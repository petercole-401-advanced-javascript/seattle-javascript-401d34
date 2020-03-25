import React, { useContext } from 'react'
import { ThemeContext } from '../../contexts/themeContext'

function Header () {
  const theme = useContext(ThemeContext)
  return (
    <header style={{ background: theme.darkMode ? 'black' : 'white' }}>
      <h1 style={{ color: theme.darkMode ? 'white' : 'black' }}>
        My Hogwarts Spellbook
      </h1>
    </header>
  )
}

export default Header
