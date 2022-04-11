import { useState } from 'react'

function FlashCard({ front, back }) {

  const [isFlipped, setIsFlipped] = useState(false)

  const enter = () => {
    setIsFlipped(true);

  }
  const leave = () => {
    setIsFlipped(false);

  }

  return (
    <div className={`flashcard${isFlipped ? ' flip' : ''}`} onMouseLeave={leave} onMouseEnter={enter}>
      <div className="front-side">{front || "Hello"}</div>
      <div className="back-side">{back || "سلام"}</div>
    </div>
  )
}

export default FlashCard
