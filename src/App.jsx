import { PhrasesProvider } from "./context/PhrasesContext"
import { PhraseForm } from "./components/PhraseForm"
import { SearchBar } from "./components/SearchBar"
import { PhraseList } from "./components/PhraseList"

function App() {
  return (
    <PhrasesProvider>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Matriz de Frases</h1>
        <PhraseForm
            placeholder={"Ingresa una nueva frase..."}
            id={"new-phrase"}
        />
        <SearchBar
            id={"search-phrases"}
            placeholder={"Buscar frases..."}
        />
        <PhraseList />
      </div>
    </PhrasesProvider>
  )
}

export default App