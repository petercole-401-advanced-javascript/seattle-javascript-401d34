import React from 'react'
import { Button, Form } from 'react-bootstrap'
import useForm from '../../hooks/useForm'

function NewSpell ({ addNewSpell }) {
  async function postNewSpell () {
    const raw = await fetch('http://localhost:3001/spells', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })
    const response = await raw.json()
    addNewSpell(response)
  }

  const [
    handleSubmit,
    handleChange,
    handleTextInput,
    values
  ] = useForm(postNewSpell)

  return (
    <div className="NewSpell">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="newSpellForm.ControlGroup1">
          <Form.Label>Spell Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Spell Name"
            {...handleTextInput}
          />
          <Form.Label>Difficulty</Form.Label>
          <Form.Control
            type="number"
            name="difficulty"
            placeholder="Difficulty"
            onChange={handleChange}
          />
          <Form.Label>Incantation</Form.Label>
          <Form.Control
            type="text"
            name="incantation"
            placeholder="Incantation"
            {...handleTextInput}
          />
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            name="description"
            placeholder="Spell Description"
            {...handleTextInput}
          />
        </Form.Group>
        <Button type="submit">Learn New Spell</Button>
      </Form>
    </div>
  )
}

export default NewSpell
