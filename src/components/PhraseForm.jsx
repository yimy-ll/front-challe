import { useState } from 'react'
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { usePhrases } from '../context/PhrasesContext'

export function PhraseForm({ id, placeholder }) {
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