import Faqs from "./components/Faqs"

function App() {
  return (
    <main className="card">
      <h3 className="md:text-2xl">
        questions and answers about login
      </h3>

      <section>
        <Faqs />
      </section>
    </main>
  )
}

export default App