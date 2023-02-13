import "./app.css"
import Chart from "./Chart.jsx"

const attributesToDisplay = ["retention", "interest", "usage", "awareness"]

export function App() {
  return (
    <div>
      <header data-cy="chart-header" ><h1>State of Javascript</h1></header>
      <main>
        <Chart />
      </main>
      <footer>
        Nav Links
        {/* Hårdkoda llinks for buttons */}
      </footer>
    </div>
  )
}

export default App
