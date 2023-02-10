
import "./app.css"
import Chart from "./Chart.jsx"

const attributesToDisplay = ["retention", "interest", "usage", "awareness"]

export function App() {
  return (
    <div>
      <header>State of Javascript</header>
      <main>
        <Chart  />
      </main>
      <footer>
        Nav Links
        {/* Hårdkoda llinks for buttons */}
        </footer>
    </div>
  )
}

export default App
