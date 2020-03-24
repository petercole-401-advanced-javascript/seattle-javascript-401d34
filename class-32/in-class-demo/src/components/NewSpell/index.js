import React from 'react'
import useForm from '../../hooks/useForm'

function NewSpell () {
  async function postNewSpell () {
    const raw = await fetch('http://localhost:3001/spells', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })
    const response = await raw.json()
    console.log(response)
  }

  const [
    handleSubmit,
    handleChange,
    handleTextInput,
    values
  ] = useForm(postNewSpell)

  // const [newSpellName, setNewSpellName] = useState('')
  // const [newSpellDifficulty, setNewSpellDifficulty] = useState(1)
  // const [newSpellIncantation, setNewSpellIncantation] = useState('')
  // const [newSpellDescription, setNewSpellDescription] = useState('')
  //
  // const handleNewSpellName = e => {
  //   setNewSpellName(e.target.value)
  // }
  // const handleNewSpellDifficulty = e => {
  //   setNewSpellDifficulty(e.target.value)
  // }
  // const handleNewSpellDescription = e => {
  //   setNewSpellDescription(e.target.value)
  // }
  // const handleNewSpellIncantation = e => {
  //   setNewSpellIncantation(e.target.value)
  // }

  return (
    <div className="NewSpell">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Spell Name"
          {...handleTextInput}
        />
        <input
          type="number"
          name="difficulty"
          placeholder="Difficulty"
          onChange={handleChange}
        />
        <input
          type="text"
          name="incantation"
          placeholder="Incantation"
          {...handleTextInput}
        />
        <input
          type="text"
          name="description"
          placeholder="Spell Description"
          {...handleTextInput}
        />
      <input type="submit" value="Learn New Spell" />
      </form>
    </div>
  )
}

export default NewSpell
