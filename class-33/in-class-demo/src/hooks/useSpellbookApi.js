import { useState, useEffect } from 'react'

function useSpellbookApi () {
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [spells, setSpells] = useState([])

  const fetchSpells = async () => {
    setIsLoading(true)
    setError(false)
    try {
      const raw = await fetch('http://localhost:3001/spells')
      const data = await raw.json()
      setSpells(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchSpells()
  }, [])

  function addNewSpell (spell) {
    setSpells([...spells, spell])
  }

  return [
    spells,
    error,
    isLoading,
    addNewSpell
  ]
}

export default useSpellbookApi
