import React from 'react'

import useFetch from '../../hooks/useFetch'

function Spellbook () {
  const [spells, error, isLoading] = useFetch()

  return (
    <div className="Spellbook">
      {error && <div>{error}</div>}
      {isLoading ? <div>Loading…</div> :
        <table>
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
        </table>
      }
    </div>
  )
}

export default Spellbook
