import { useState } from 'react'

function Form({ flashCard, setFlashCard }) {

  const [handler, setHandler] = useState("")
  const [handler1, setHandler1] = useState("")

  const handleChange = (event) => {
    if (event.target.id == "word-input") {
      setHandler(event.target.value)
    } else {
      setHandler1(event.target.value)
    }

  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setFlashCard(values => ({ ...values, ['word']: handler }))
    setFlashCard(values => ({ ...values, ['persianEquivalent']: handler1 }))
    setHandler("");
    setHandler1("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="word-input"
        placeholder="کلمه"
        value={handler}
        onChange={handleChange}
      />
      <input
        id="persian-equivalent-input"
        placeholder="معادل فارسی"
        value={handler1}
        onChange={handleChange}
      />
      <button id="submit-btn">ثبت</button>
    </form>
  )
}

export default Form
