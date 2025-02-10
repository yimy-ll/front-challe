import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { X } from "lucide-react"
import { usePhrases } from '../context/PhrasesContext'

export function PhraseList() {
  const { filteredPhrases, deletePhrase } = usePhrases()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredPhrases.map((phrase, index) => (
        <Card key={index} className="relative">
          <CardContent className="p-4">
            <p>{phrase}</p>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2"
              onClick={() => deletePhrase(index)}
            >
              <X className="h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}