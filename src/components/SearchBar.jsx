import { Input } from "./ui/input"
import { usePhrases } from '../context/PhrasesContext'

export function SearchBar() {
  const { searchTerm, setSearchTerm } = usePhrases()

  return (
    <Input
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Buscar frases..."
      className="mb-4"
    />
  )
}