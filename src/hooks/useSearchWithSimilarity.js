import { useState, useEffect } from 'react'

export function useSearchWithSimilarity(items, delay = 500) {
  const [searchTerm, setSearchTerm] = useState("")
  const [debouncedTerm, setDebouncedTerm] = useState("")
  const [filteredItems, setFilteredItems] = useState(items)

  const calculateSimilarity = (phrases, phrasesCompare) => {
    let phrasesLowerCase = phrases.toLowerCase()
    let phrasesCompareLowerCase  = phrasesCompare.toLowerCase()

    if (phrasesCompareLowerCase === phrasesLowerCase) return 1

    if (phrasesLowerCase.includes(phrasesCompareLowerCase) || phrasesCompareLowerCase.includes(phrasesLowerCase)) return 0.8

    const charsPhrases = new Set(phrasesLowerCase)
    const charsPhrasesCompare = new Set(phrasesCompareLowerCase)
    const intersection = new Set([...charsPhrases].filter(char => charsPhrasesCompare.has(char)))
    const union = new Set([...charsPhrases, ...charsPhrasesCompare])

    return intersection.size / union.size
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedTerm(searchTerm)
    }, delay)

    return () => clearTimeout(timer)
  }, [searchTerm, delay])

  useEffect(() => {
    if (!debouncedTerm) {
      setFilteredItems(items)
      return
    }

    const filtered = items.filter(item => {
      const similarity = calculateSimilarity(item, debouncedTerm)
      return similarity > 0.3
    })

    setFilteredItems(filtered)
  }, [debouncedTerm, items])

  return {
    searchTerm,
    setSearchTerm,
    filteredItems
  }
}