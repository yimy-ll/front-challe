import { createContext, useContext, useState } from 'react'
import { useSearchWithSimilarity } from '../hooks/useSearchWithSimilarity'
import React from "react";

const PhrasesContext = createContext()

export function PhrasesProvider({ children }) {
  const [phrases, setPhrases] = useState([])
  const { searchTerm, setSearchTerm, filteredItems: filteredPhrases } = useSearchWithSimilarity(phrases)

  const addPhrase = (newPhrase) => {
    if (newPhrase.trim()) {
      setPhrases([...phrases, newPhrase.trim()])
    }
  }

  const deletePhrase = (index) => {
    setPhrases(phrases.filter((_, i) => i !== index))
  }

  return (
    <PhrasesContext.Provider 
      value={{
        phrases,
        searchTerm,
        setSearchTerm,
        addPhrase,
        deletePhrase,
        filteredPhrases
      }}
    >
      {children}
    </PhrasesContext.Provider>
  )
}

export function usePhrases() {
  const context = useContext(PhrasesContext)
  if (!context) {
    throw new Error('usePhrases must be used within a PhrasesProvider')
  }
  return context
}