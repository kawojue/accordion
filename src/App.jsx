import faqs from './faqs'
import { useState } from 'react'
import Faq from "./components/Faq"

function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <main className="card">
      <h3 className="md:text-2xl">
        questions and answers about login
      </h3>
      <Faq faqs={faqs} open={isOpen} setOpen={setIsOpen} />
    </main>
  )
}

export default App