import { useState } from 'react'
import Form from './components/Form'
import FlashCard from './components/FlashCard'

function App() {
  const [flashCard, setFlashCard] = useState({
    word: '',
    persianEquivalent: '',
  })

  return (
    <div className="container">
      <Form setFlashCard={setFlashCard} flashCard={flashCard} />
      <FlashCard front={flashCard.word} back={flashCard.persianEquivalent} />
    </div>
  )
}

export default App
