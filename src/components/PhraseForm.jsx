import React from 'react';
import { useState } from 'react'
import { Input } from "./ui/Input.jsx"
import { Button } from "./ui/Button.jsx"
import { usePhrases } from '../context/PhrasesContext'

export function PhraseForm({ placeholder, id  }) {
  const [newPhrase, setNewPhrase] = useState("")
  const { addPhrase } = usePhrases()

  const handleSubmit = (e) => {
    e.preventDefault()
    addPhrase(newPhrase)
    setNewPhrase("")
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex gap-2" role={"form"}>
      <Input
        type="text"
        id={id}
        value={newPhrase}
        onChange={(e) => setNewPhrase(e.target.value)}
        placeholder={placeholder}
        className="flex-grow"
      />
      <Button type="submit" test-id={id}>Agregar</Button>
    </form>
  )
}