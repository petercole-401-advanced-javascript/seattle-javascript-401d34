import React, { useContext } from 'react'
import { Alert, Spinner, Table } from 'react-bootstrap'
import { ThemeContext } from '../../contexts/themeContext'

function Spellbook ({ spells, error, isLoading, mode }) {
  const theme = useContext(ThemeContext)
  return (
    <div className="Spellbook">
      <div>currently in {mode} mode</div>
      {error && <Alert variant="danger">{error}</Alert>}
      {isLoading
        ? (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        ) : (
          <Table variant={theme.darkMode ? 'dark' : 'light'} striped bordered size="sm">
            <thead>
              <tr>
                <th>Spell Name</th>
                <th>Difficulty</th>
                <th>Incantation</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {/* make a tr with tds for every spell */}
              {spells.map(spell => (
                <tr key={spell.id}>
                  <td>{spell.name}</td>
                  <td>{spell.difficulty}</td>
                  <td>{spell.incantation}</td>
                  <td>{spell.description}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        )
      }
    </div>
  )
}

export default Spellbook
