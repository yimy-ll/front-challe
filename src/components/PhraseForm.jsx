import { useState } from 'react'
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { usePhrases } from '../context/PhrasesContext'

export function PhraseForm() {
  const [newPhrase, setNewPhrase] = useState("")
  const { addPhrase } = usePhrases()

  const handleSubmit = (e) => {
    e.preventDefault()
    addPhrase(newPhrase)
    setNewPhrase("")
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
      <Input
        type="text"
        value={newPhrase}
        onChange={(e) => setNewPhrase(e.target.value)}
        placeholder="Ingresa una nueva frase"
        className="flex-grow"
      />
      <Button type="submit">Agregar</Button>
    </form>
  )
}