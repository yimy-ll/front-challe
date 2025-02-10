import React from 'react';
import { Input } from "./ui/Input.jsx"
import { usePhrases } from '../context/PhrasesContext'

export function SearchBar({id, placeholder}) {
  const { searchTerm, setSearchTerm } = usePhrases()

  return (
    <Input
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      id={id}
      placeholder={placeholder}
      className="mb-4"
    />
  )
}